# Iterator 和 Generator

## Iterator
- ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
- Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器（每次循环再执行遍历器的next方法）。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内。
- 原生具备 Iterator 接口的数据结构如下。
  - Array
  -  Map
  - Set
  -  String
  - TypedArray
  - 函数的 arguments 对象
  - NodeList 对象
- 对象（Object）之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
- 本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。不过，严格地说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作 Map 结构使用，ES5 没有 Map 结构，而 ES6 原生提供了。

## Generator

### 概念
  - Generator 函数是一个状态机，封装了多个内部状态。执行 Generator 函数会返回一个遍历器对象。也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
  - 和普通函数不同的是，调用 Generator 函数后该函数并不执行，返回的也不是函数运行结果，返回一个遍历器对象，代表Generator 函数的内部指针。下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。即Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
```

  - Generator 函数执行后，返回一个遍历器对象。该对象具有Symbol.iterator属性（是一条函数），执行后返回该遍历器对象本身。
```js
function* gen(){
  // some code
}
var g = gen();
g[Symbol.iterator]() === g    // true
```

  - Generator 函数执行产生的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行next命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。

### 运行逻辑
  - 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
  - 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
  - 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
  - 如果该函数没有return语句，则返回的对象的value属性值为undefined。

### next
  - yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数会被当作上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next()     // Object{value:6, done:false}
a.next()     // Object{value:NaN, done:false}
a.next()     // Object{value:NaN, done:true}
// 上面代码中，第二次运行next方法的时候不带参数，导致 y 的值等于2 * undefined（即NaN），除以 3 以后还是NaN，因此返回对象的value属性也等于NaN。第三次运行Next方法的时候不带参数，所以z等于undefined，返回对象的value属性等于5 + NaN + undefined，即NaN。

var b = foo(5);
b.next()        // { value:6, done:false }
b.next(12)     // { value:8, done:false }
b.next(13)     // { value:42, done:true }
// 如果向next方法提供参数，返回结果就完全不一样了。上面代码第一次调用b的next方法时，返回x+1的值6；第二次调用next方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。
```

  - 如果想要第一次调用next方法时就能够输入值，可以在 Generator 函数外面再包一层，先得到一个generator函数后调用一次next。
```js
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});
wrapped().next('hello!')    // First input: hello!
```

### return
Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
// 如果return方法调用时，不提供参数，则返回值的value属性为undefined。
```

### try…finally
如果 Generator 函数内部有try...finally代码块，且正在执行try代码块，那么return方法会推迟到finally代码块执行完再执行。

```js
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }
// 上面代码中，调用return方法后，就开始执行finally代码块，然后等到finally代码块执行完，再执行return方法。
```

### for...of
可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for (let v of foo()) {
  console.log(v);
}    // 1 2 3 4 5
// 一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。
```

### this
  - Generator函数返回的总是遍历器对象，而不是this对象，实例拿不到里里面的属性。

```js  
function* g() {
  this.a = 11;
}
let obj = g();
obj.next();
obj.a // undefined
```

  - Generator 函数也不能跟new命令一起用，会报错。可以使用call方法绑定 Generator 函数内部的this。

```js
function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
function F() {
  return gen.call(gen.prototype);
}
var f = new F();
f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}
f.a // 1
f.b // 2
f.c // 3
```

### 嵌套的 Generator
在 Generator 函数内部，调用另一个 Generator 函数，直接调用是没有效果的。需要用 yield* 在一个 Generator 函数里面执行另一个 Generator 函数。

```js
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}
// 等同于
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}
// yield foo(); 则返回的是一个遍历器对象， 不会对其进行遍历
```

### 应用
  - 原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。

```js
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}
let myObj = { foo: 3, bar: 7 };
// 通过调用 Generator 函数来返回一个遍历器
for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}
// foo 3
// bar 7
    * 加上遍历器接口的另一种写法是，将 Generator 函数加到对象的Symbol.iterator属性上面。
function* iterEntries() {
  let keys = Object.keys(this);
  for(let key of keys) {
    yield [key, this[key]];
  }
}
let myObj = { foo: 3, bar: 7 };
myObj[Symbol.iterator] = iterEntries;
for (let [key, value] of myObj) {
  console.log(key, value);
}
// foo 3
// bar 7
```

  - 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象作为参数。

```js
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}
// 扩展运算符
[...numbers()] // [1, 2]
// Array.from 方法
Array.from(numbers()) // [1, 2]
// 解构赋值
let [x, y] = numbers();
x // 1
y // 2
// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2
```

  - 任何数据结构只要有 Iterator 接口，就可以被yield*遍历。

```js
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();
read.next().value // "hello"
read.next().value // "h"
```

  - 控制ajax请求。

```js
function foo(x, y) {
  ajax("http://some.url.1/?x=" + x + "&y=" + y, (err, data) => {
    if (err) {
      // 向*main()抛出一个错误 it.throw( err );
    } else {
      // 用收到的data恢复*main()
      it.next(data);
    }
  });
 }

function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
 }
 var it = main();
 // 这里启动! it.next();
 ```
