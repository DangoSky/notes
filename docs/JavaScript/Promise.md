# Promise

## 介绍
Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用，充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。

## 设计思想
- Promise构造函数接受一个回调函数作为参数，回调函数里面是异步操作的代码。 如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。reject函数的参数通常是Error对象的实例，表示抛出的错误；resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例。

  - resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。resolve(..) 既可能完成 promise，也可能拒绝，要根据传入参数而定。如果传给 resolve(..) 的是一个非 Promise、非 thenable 的立即值，这 个 promise 就会用这个值完成。但是，如果传给 resolve(..) 的是一个真正的 Promise 或 thenable 值，这个值就会被递归展 开，并且(要构造的)promise 将取用其最终决议值或状态。
  - reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
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

- Promise 新建后立即执行，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。并且调用resolve或reject并不会终结 Promise 的参数函数的执行。
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

- 所有异步任务都返回一个 Promise 实例。Promise 实例有一个then方法，用来指定下一步的回调函数。从而可以形成链式回调。

- Promise 的状态
  - 异步操作未完成（pending）
  - 异步操作成功（fulfilled）
  - 异步操作失败（rejected）

上面三种状态里面，fulfilled和rejected合在一起称为resolved（已定型）。这三种的状态的变化途径只有两种:

  1. 从“未完成”到“成功”
  2. 从“未完成”到“失败”

一旦状态发生变化，就不会再有新的状态变化。这也意味着，Promise 实例的状态变化只可能发生一次。因此，Promise 的最终结果只有两种。

  1. 异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
  2. 异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。


## 错误处理
- 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};
someAsyncThing().then(function() {
  console.log('everything is great');
});
setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123
// 上面代码中，someAsyncThing函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。
```

- Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误（使用catch代替reject）。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。但如果后面的then方法出现错误，就不会前面的catch了。catch方法之中，还能再抛出错误，用来捕获前一个catch方法抛出的错误。


## 方法
### Promise.prototype.then
  
then方法可以接受两个回调函数，第一个是异步操作成功时（变为fulfilled状态）的回调函数，第二个是异步操作失败（变为rejected）时的回调函数（可以省略）。一旦状态改变，就调用相应的回调函数。then方法返回的是一个新的Promise实例。如果两者中的任何一个被省略或者作为非函数值传入的话，就会替换为相应的默认回调。

```js
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
// console.log只显示step3的返回值，而console.error可以显示p1、step1、step2、step3之中任意一个发生的错误。举例来说，如果step1的状态变为rejected，那么step2和step3都不会执行了（因为它们是resolved的回调函数）。Promise 开始寻找，接下来第一个为rejected的回调函数，在上面代码中是console.error。这就是说，Promise 对象的报错具有传递性。
```

### Promise.prototype.catch

如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

```js
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));
// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
```

### Promise.prototype.finally

finally方法用于指定不管 Promise 对象最后状态如何都会执行的操作。finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。finally方法总是会返回原来的值。

### Promise.all([p1, p2, p3])
 
 用于将多个 Promise 实例，包装成一个新的 Promise 实例。接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是就会先调用Promise.resolve方法，将参数转为 Promise 实例再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
  - 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组传递给p的回调函数。
  - 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
  - 返回给then的信息，是一个由所有传入 promise 的完成消息组成的数组，与指定的顺序一致(与完成顺序无关)。
  - 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
  - 若向Promise.all([ .. ])传入空数组，它会立即完成.

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
// 上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。
// 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。
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

只要p1、p2、p3之中有一个实例率先改变状态（不管是resolve还是reject），p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。Promise. race([ .. ]) 会挂住，且永远不会决议。

```js
// 下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })]);
p.then(console.log).catch(console.error);
// 上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
```

### Promise.resolve
将现有对象转为 Promise 对象。

  - 参数是一个 Promise 实例：那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
  - 参数是一个thenable对象:  Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。
  - 参数是一个原始值，或者是一个不具有then方法的对象:  返回一个新的 Promise 对象，状态为resolved，Promise.resolve方法的参数，会同时传给回调函数。

### Promise.reject

返回一个新的 Promise 实例，该实例的状态为rejected。 Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。

```js
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};
Promise.reject(thenable).catch(e => {
  console.log(e === thenable)  // true
})    
// Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。
```

## Promise的缺点
  - 无法取消Promise，一旦新建它就会立即执行，无法中途取消
  - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
  - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
  - 由于一个 Promise 链仅仅是连接到一起的 成员 Promise，没有把整个链标识为一个个体的实体，这意味着没有外部方法可以用于观察可能发生的错误。如果构建了一个没有错误处理函数的 Promise 链，链中任何地方的任何错误都会在链中一 直传播下去，直到被查看(通过在某个步骤注册拒绝处理函数)。
