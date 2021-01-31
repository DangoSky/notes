# Promise

> 模拟实现 Promise，可参考 [Blog](http://blog.dangosky.com/2019/03/28/JS%E4%B9%8B%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0/#toc-heading-25)

## 介绍

- 解决的问题：
  - 在执行耗时任务比如 http 请求时，通常是通过回调函数来处理。但回调函数可能会一层层嵌套导致代码难以维护。
  - 回调函数不能捕捉异常（错误处理困难），回调函数的代码和开始任务代码不在同一事件循环中。
  - 回调函数无法处理并行任务，当各个请求之间互不依赖时，难以维护一个整体的回调函数（Promise 有 all 方法）。

而 Promise 提供了一系列的异步操作接口，可以很方便地来处理异步操作。实际上，Promise 就是 JavaScript 的异步操作解决方案。

## 设计思想

- Promise 构造函数接受一个回调函数作为参数，回调函数里面是异步操作的代码。 如果调用 resolve 函数和 reject 函数时带有参数，那么它们的参数会被传递给回调函数。reject 函数的参数通常是 Error 对象的实例，表示抛出的错误；resolve 函数的参数除了正常的值以外，还可能是另一个 Promise 实例。

  - resolve 函数的作用是，将 Promise 实例的状态从 “未完成” 变为“成功”（即从 pending 变为 fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。resolve(..) 既可能完成 promise，也可能拒绝，要根据传入参数而定。如果传给 resolve(..) 的是一个非 Promise、非 thenable 的立即值，这 个 promise 就会用这个值完成。但是，如果传给 resolve(..) 的是一个真正的 Promise 或 thenable 值，这个值就会被递归展 开，并且 promise 将取用其最终决议值或状态。
  - reject 函数的作用是，将 Promise 实例的状态从 “未完成” 变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
  - 如果完成或拒绝回调中抛出异常，返回的 promise 是被拒绝的。

```js
var promise = new Promise(function (resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
```

```js
const p1 = new Promise(function (resolve, reject) {
  // ...
});
const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);    // 一个异步操作的结果是返回另一个异步操作。
})
```

- Promise 新建后立即执行，then 方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行（微任务）。并且调用 resolve 或 reject 并不会终结 Promise 的参数函数的执行。
```js
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1
```

- 所有异步任务都返回一个 Promise 实例。Promise 实例有一个 then 方法，用来指定下一步的回调函数。从而可以形成链式回调。

- Promise 的状态
  - 异步操作未完成（pending）
  - 异步操作成功（fulfilled）
  - 异步操作失败（rejected）

上面三种状态里面，fulfilled 和 rejected 合在一起称为 resolved（已定型）。这三种的状态的变化途径只有两种:

  1. 从 “未完成” 到“成功”
  2. 从 “未完成” 到“失败”

一旦状态发生变化，就不会再有新的状态变化。这也意味着，Promise 实例的状态变化只可能发生一次。因此，Promise 的最终结果只有两种。

  1. 异步操作成功，Promise 实例传回一个值（value），状态变为 fulfilled。
  2. 异步操作失败，Promise 实例抛出一个错误（error），状态变为 rejected。


- **跳转逻辑**
  - resolve 后，会将 resolve 出来的值传递给 then 参数，最后 promise 的结果等于 then 返回的值。
  - reject 或 throw 后，会将值传递给 catch 参数，最后 promise 的结果等于 catch 返回的值。

```js
async function fn() {
  let p = await new Promise((resolve, reject) => {
    // reject(1);
    // resolve(1);
    // throw 4;
  }).then(data => {
    console.log('then= ', data);
    return 2;
  }).catch(err => {
    console.log('err = ', err);
    return 3;
  })

  console.log('p = ', p);
}

fn();
```

## 错误处理
- 跟传统的 try/catch 代码块不同的是，如果没有使用 catch 方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为 x 没有声明
    resolve(x + 2);
  });
};
someAsyncThing().then(function() {
  console.log('everything is great');
});
setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
// 上面代码中，someAsyncThing 函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示，但是不会退出进程、终止脚本执行，2 秒之后还是会输出 123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是 “Promise 会吃掉错误”。
```

- Promise 对象后面要跟 catch 方法，这样可以处理 Promise 内部发生的错误（使用 catch 代替 reject）。catch 方法返回的还是一个 Promise 对象，因此后面还可以接着调用 then 方法。但如果后面的 then 方法出现错误，就不会触发前面的 catch 了。catch 方法之中，还能再抛出错误，用来捕获前一个 catch 方法抛出的错误（简单地说，就是 Promise 会错误冒泡，前面产生的错误会一直向后传递直到被 catch 接收到，这样就可以不用频繁地检查错误了）。


## 方法
### Promise.prototype.then

then 方法可以接受两个回调函数，第一个是异步操作成功时（变为 fulfilled 状态）的回调函数，第二个是异步操作失败（变为 rejected）时的回调函数（可以省略）。一旦状态改变，就调用相应的回调函数。then 方法返回的是一个新的 Promise 实例。如果两者中的任何一个被省略或者作为非函数值传入的话，就会替换为相应的默认回调。

```js
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
// console.log 只显示 step3 的返回值，而 console.error 可以显示 p1、step1、step2、step3 之中任意一个发生的错误。举例来说，如果 step1 的状态变为 rejected，那么 step2 和 step3 都不会执行了（因为它们是 resolved 的回调函数）。Promise 开始寻找，接下来第一个为 rejected 的回调函数，在上面代码中是 console.error。这就是说，Promise 对象的报错具有传递性。
```

### Promise.prototype.catch

如果异步操作抛出错误，状态就会变为 rejected，就会调用 catch 方法指定的回调函数处理这个错误。另外，then 方法指定的回调函数，如果运行中抛出错误，也会被 catch 方法捕获。Promise.prototype.catch 方法是 Promise.prototype.then(null, reject) 的别名，用于指定发生错误时的回调函数。

```js
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

### Promise.prototype.finally

finally 方法用于指定不管 Promise 对象最后状态如何都会执行的操作。finally 方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是 fulfilled 还是 rejected。finally 方法总是会返回原来的值。

### Promise.all([p1, p2, p3])

 用于将多个 Promise 实例，包装成一个新的 Promise 实例。接受一个数组作为参数，p1、p2、p3 都是 Promise 实例，如果不是就会先调用 Promise.resolve 方法，将参数转为 Promise 实例再进一步处理。（Promise.all 方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

- 只有 p1、p2、p3 的状态都变成 fulfilled，p 的状态才会变成 fulfilled，此时 p1、p2、p3 的返回值组成一个数组（按照原先 p1、p2、p3 的顺序）传递给 p 的回调函数。
- 只要 p1、p2、p3 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。
- 如果作为参数的 Promise 实例，自己定义了 catch 方法，那么它一旦被 rejected，并不会触发 Promise.all() 的 catch 方法。
- 若向 Promise.all([]) 传入空数组，它会立即完成.

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
}).then(result => result)
.catch(e => e);

Promise.all([p1, p2]).then(result => console.log(result)).catch(e => console.log(e));
// ["hello", Error: 报错了]
// 上面代码中，p1 会 resolved，p2 首先会 rejected，但是 p2 有自己的 catch 方法，该方法返回的是一个新的 Promise 实例，p2 指向的实际上是这个实例。
// 该实例执行完 catch 方法后，也会变成 resolved，导致 Promise.all() 方法参数里面的两个实例都会 resolved，因此会调用 then 方法指定的回调函数，而不会调用 catch 方法指定的回调函数。
// 如果 p2 没有自己的 catch 方法，就会调用 Promise.all() 的 catch 方法。
```

```js
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
}).then(result => result);

Promise.all([p1, p2]).then(result => console.log(result)).catch(e => console.log(e));
// Error: 报错了
```

### Promise.race([p1, p2, p3])

只要 p1、p2、p3 之中有一个实例率先改变状态（不管是 resolve 还是 reject），p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数。Promise.race 方法的参数与 Promise.all 方法一样，如果不是 Promise 实例，就会先调用 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。Promise.race([]) 会挂起，且永远不会决议。

```js
// 下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为 reject，否则变为 resolve。
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })]);
p.then(console.log).catch(console.error);
// 上面代码中，如果 5 秒之内 fetch 方法无法返回结果，变量 p 的状态就会变为 rejected，从而触发 catch 方法指定的回调函数。
```

### Promise.resolve
将现有对象转为 Promise 对象。

  - 参数是一个 Promise 实例：那么 Promise.resolve 将不做任何修改、原封不动地返回这个实例。
  - 参数是一个 thenable 对象:  Promise.resolve 方法会将这个对象转为 Promise 对象，然后就立即执行 thenable 对象的 then 方法。
  - 参数是一个原始值，或者是一个不具有 then 方法的对象:  返回一个新的 Promise 对象，状态为 resolved，Promise.resolve 方法的参数，会同时传给回调函数。

### Promise.reject

返回一个新的 Promise 实例，该实例的状态为 rejected。 Promise.reject() 方法的参数，会原封不动地作为 reject 的理由，变成后续方法的参数。这一点与 Promise.resolve 方法不一致。

```js
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};
Promise.reject(thenable).catch(e => {
  console.log(e === thenable)  // true
})
// Promise.reject 方法的参数是一个 thenable 对象，执行以后，后面 catch 方法的参数不是 reject 抛出的 “出错了” 这个字符串，而是 thenable 对象。
```

## 并行发起 limit 个请求

如下，有以下 8 个图片链接，要并行发起 limit 个请求去加载图片，也就是说同时最多只能有 limit 个请求在进行。

```js
const urls = [
  'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
  'https://www.kkkk1000.com/images/getImgData/gray.gif',
  'https://www.kkkk1000.com/images/getImgData/Particle.gif',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
  'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
  'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
  'https://www.kkkk1000.com/images/wxQrCode2.png'
];

// 发起请求
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = reject;
    img.src = url;
    img.onload = function () {
      resolve(img);
    }
  })
};
```

#### 方法一

```js
const limit = 3;
const willFetchUrls = urls.slice(); // 为了不影响到原始数据，先复制一份出来
let fetchingCount = 0; // 正在进行的请求数量

// 刚开始先并行发起 limit 个请求
for(let i=0; i<limit; i++) {
  fetch();
}

// 每当 new 一个 promise 时，该次请求就发起了
// 所以在每一个请求完成时再去 new 一个新的 promise 发起请求即可
function fetch() {
  if (willFetchUrls.length && fetchingCount < limit) {
    fetchingCount++;
    loadImg(willFetchUrls.shift()).then((data) => {
      // 每一个请求完成时，就递归发起下一个请求
      fetchingCount--;
      console.log(data);
      fetch();
    })
  }
}
```


#### 方法二

```js
const limit = 3;
const willFetchUrls = urls.slice();

fetch(limit);

// 使用 promise.race(promises) 并行发起 limit 个请求
// 每当一个请求完成时就再初始化一个请求替换掉 promises 中该已经完成的请求，之后再重新发起 promise.race
function fetch(limit) {
  function recur(promises) {
    const p = Promise.race(promises);
    p.then(index => {
      if (willFetchUrls.length === 0) {
        return;
      }
      // 替换掉已经完成的 promise
      promises[index] = loadImg(willFetchUrls.shift());
      promises[index].then(data => {
        console.log(data);
        recur(promises);
        return index;
      })
    })
  }

  // 刚开始先并行发起 limit 个请求
  const promises = willFetchUrls.splice(0, limit).map((url, index) => {
    return loadImg(url).then(data => {
      console.log(data);
      // 请求完成时返回它在这个并行 promises 中的索引，
      return index;
    })
  })

  recur(promises);
}
```

## Promise 的缺点

  - 无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
    - 如果要取消一个 Promise，可以通过抛出一个错误来变相地取消 Promise。原理是这个错误会向后传递直至被捕获，中途的函数不会被调用到。但如果中途就捕获了错误，后续的函数还是会被执行到（因为 catch 方法会返回一个 Promise）。可以 throw 一个特殊的 Error 对象，中途如果有 catch 捕获到了，就判断该错误的类型，是该特殊类型的话就一直往后 throw 错误直至最后，这样可以避免错误被中途捕获到。
    - 返回一个一直处于 pedding 的 Promise（不要去 resolve 或 reject 它即可），因为新 Promise 一直没有被决断，所以后面的代码也就不会被执行到，相当于取消了 Promise（但可能会造成内存泄漏，因为后续函数一直没有被调用到，它们的引用一直保存着得不到释放）。
  - 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
  - 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
  - 中途产生的错误会传播。如果构建了一个没有错误处理函数的 Promise 链，链中任何地方的任何错误都会在链中一直传播下去直到被查看 (通过在某个步骤注册拒绝处理函数)。
