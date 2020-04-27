# async

> 简易模拟实现 async，可参考 [Blog](http://blog.dangosky.com/2019/03/28/JS%E4%B9%8B%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0/#toc-heading-26)

## 特性

- async 函数的返回值是 Promise 对象，可以用 then 方法指定下一步的操作。
- async 函数内部 return 语句返回的值，会成为 then 方法回调函数的参数。
- async 函数内部抛出错误，会导致返回的 Promise 对象变为 reject 状态。
- async 函数返回的 Promise 对象，必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到 return 语句或者抛出错误。
- 正常情况下，await 命令后面是一个 Promise 对象，此时返回该对象的结果；如果是原始数据类型，则自动转成立即 resolved 的 Promise 对象；如果是一个 thenable 对象（即定义了 then 方法的对象），那么 await 会将其等同于 Promise 对象。
- 任何一个 await 语句后面的 Promise 对象变为 reject 状态，那么整个 async 函数都会中断执行。如果我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个 await 放在 try...catch 结构里面，这样不管这个异步操作是否成功，第二个 await 都会执行。
- await 后面的函数执行完毕时，await 会产生一个微任务（其实也就是 Promise.then）去执行 async 剩下的代码。所以并不是 await 有结果了就会马上执行 async 剩下的代码的，需要放到微任务里面去执行。

```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}
f().then(v => console.log(v))    // hello world
```

另一种方法是 await 后面的 Promise 对象再跟一个 catch 方法，处理前面可能出现的错误。（await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。）

```js
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}
f().then(v => console.log(v))
// 出错了
// hello world
```

```js
async function test() {
  console.log(100)
  let x = await 200
  console.log(x)
  console.log(200)
}
console.log(0)
test()
console.log(300)

// 0
// 100
// 300
// 200
// 200
```


## 原理

async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。

```js
function spawn(genF) {
  // async 返回值是一个 Promise
  return new Promise(function(resolve, reject) {
    // genF 是一个 generator 函数，先生成一个迭代器
    var gen = genF();
    function step(nextF) {
      try {
        var next = nextF();
      } catch(e) {
        return reject(e); 
      }
      // 若 generator 执行完毕了的话，就直接以最终值 resolve 掉结束
      if(next.done) {
        return resolve(next.value);
      } 
      // 若 generator 还没结束，则将当前的值转化为 Promise 并通过链式调用继续执行下去直至完成
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });      
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}
```

## 串行和并行

- async 的一个缺点是：因为 await 将异步代码改造成了同步代码，所以如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。因此使用时需要特别注意 await 的使用方法才行。

- 多个 await 命令后面的异步操作，如果不存在依赖关系，最好让它们同时触发。

```js
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

```js
// 串发。只有前一个 URL 返回结果，才会去读取下一个 URL，这样做效率很差，需要的是并发发出远程请求。
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}

// 并行
async function logInOrder(urls) {
  // 并发读取远程 URL
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });
  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
// 虽然 map 方法的参数是 async 函数，但它是并发执行的，因为只有 async 函数内部是继发执行，外部不受影响。后面的 for..of 循环内部使用了 await，因此实现了按顺序输出。
```


## forEach 中的 await

- 问题：对于异步代码，forEach 并不能保证按顺序执行。

```js
async function test() {
  let arr = [4, 2, 1]
  arr.forEach(async item => {
    const res = await handle(item)
    console.log(res)
  })
  console.log('结束')
}

function handle(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 1000 * x)
  })
}

test()

// 实际输出结果
// 结束
// 1
// 2
// 4
```

- 原因：forEach 底层实现中，是把 forEach 的回调函数直接拿来并行执行的，这就导致了它无法保证异步任务的执行顺序。比如后面的异步任务用时短，那么就可能抢在前面的任务之前执行。在上述例子中我们使用的 async/await 只是用于 callback 内部等待异步任务，而 forEach 本身这个循环是没有使用 async/await的。（具体 polyfill 可参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)）

```js
for (var i = 0; i < length; i++) {
  if (i in array) {
    var element = array[i];
    callback(element, i, array);  // 所以在 callback 中使用 break 和 return 也不能正常退出
  }
}
```

所以上述的例子其实就变成了这样。

```js
async function test() {
  let arr = [4, 2, 1]
  for (let i=0; i<arr.length; i++) {
    (async val => {
      const res = await handle(val)
      console.log(res)
    })(val)
  }
  console.log('结束')
}
```

#### 解决方案：

- 使用 for...of。

```js
async function test() {
  let arr = [4, 2, 1]
  // 只需把 forEach 改为 for...of
  for(item of arr) {
    const res = await handle(item)
    console.log(res)
  }
  console.log('结束')
}
```

for..of 内部使用了迭代器去遍历，而不像 forEach 一样直接调用回调函数。

```js
async function test() {
  let arr = [3, 2, 1];
  const iterator = arr[Symbol.iterator]();
  let res = iterator.next()
  while (!res.done) {
    const value = res.value;
    await handle(value);
    res = iterator.next();
  }
}
```

- 改造下 forEach，使回调函数内部执行的时候使用 async（其实也就是直接使用 for 循环了）。

```js
async function test() {
  let arr = [4, 2, 1]
  asyncForEach(arr, async function(val) {
    const res = await handle(val)
    console.log(res)
  })
  console.log('结束')
}

async function asyncForEach(arr, callback) {
  for (let i=0; i<arr.length; i++) {
    // 循环时使用 await
    await callback(arr[i], i, arr)
  }
}

function handle(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
    }, 1000 * x)
  })
}

test()
```