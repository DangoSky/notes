# async

- async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
- async 函数的返回值是 Promise 对象，可以用 then 方法指定下一步的操作。
- async 函数内部 return 语句返回的值，会成为 then 方法回调函数的参数。
- async 函数内部抛出错误，会导致返回的 Promise 对象变为 reject 状态。
- async 函数返回的 Promise 对象，必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到 return 语句或者抛出错误。
- 正常情况下，await 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await 命令后面是一个 thenable 对象（即定义 then 方法的对象），那么 await 会将其等同于 Promise 对象。
- 任何一个 await 语句后面的 Promise 对象变为 reject 状态，那么整个 async 函数都会中断执行。如果我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个 await 放在 try...catch 结构里面，这样不管这个异步操作是否成功，第二个 await 都会执行。

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