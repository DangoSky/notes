# Iterator 和 Generator

## Iterator
- ES6 规定，默认的 Iterator 接口部署在数据结构的 `Symbol.iterator` 属性。也就是说一个数据结构只要具有 `Symbol.iterator` 属性，就可以认为是 “可遍历的”（iterable）。

- `Symbol.iterator` 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数，执行这个函数就会返回一个遍历器（包含有 next 方法）。至于属性名 `Symbol.iterator`，它是一个表达式，返回 Symbol 对象的 iterator 属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内。

- 原生具备 Iterator 接口的数据结构如下：
  - Array
  - Map
  - Set
  - String
  - TypedArray
  - 函数的 arguments 对象
  - NodeList 对象

- 对象之所以没有默认部署 Iterator 接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。

## Generator

### 概念

- Generator 函数是一个状态机，封装了多个内部状态。执行 Generator 函数会返回一个遍历器对象。也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

- 和普通函数不同的是，调用 Generator 函数后该函数并不执行，返回的也不是函数运行结果，返回一个遍历器对象，代表 Generator 函数的内部指针。下一步，必须调用遍历器对象的 next 方法，使得指针移向下一个状态。即 Generator 函数是分段执行的，yield 表达式是暂停执行的标记，而 next 方法可以恢复执行。

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
```

- Generator 函数执行后，返回一个遍历器对象。该对象具有 `Symbol.iterator` 属性（是一条函数），执行后返回该遍历器对象本身。

```js
function* gen(){
  // some code
}
var g = gen();
g[`Symbol.iterator`]() === g    // true
```

- Generator 函数执行产生的上下文环境，一旦遇到 yield 命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行 next 命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。

- 运行逻辑：

1. 遇到 yield 表达式，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的 value 属性值。
2. 下一次调用 next 方法时，再继续往下执行，直到遇到下一个 yield 表达式。
3. 如果没有再遇到新的 yield 表达式，就一直运行到函数结束，直到 return 语句为止，并将 return 语句后面的表达式的值，作为返回的对象的 value 属性值。
4. 如果该函数没有 return 语句，则返回的对象的 value 属性值为 undefined。

- Generator 函数返回的总是遍历器对象，而不是 this 对象，所以实例拿不到里面的属性。

```js
function* g() {
  this.a = 11;
}
let obj = g();
obj.next();
obj.a // undefined
```

- Generator 函数也不能跟 new 命令一起用，会报错。可以使用 call 方法绑定 Generator 函数内部的 this。

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


### next 方法

- yield 表达式本身没有返回值，或者说总是返回 undefined。next 方法可以带一个参数，该参数会被当作上一个 yield 表达式的返回值，所以在第一次使用 next 方法时，传递参数是无效的。

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
// 上面代码中，第二次运行 next 方法的时候不带参数，导致 y 的值等于 2 * undefined（即 NaN），除以 3 以后还是 NaN，因此返回对象的 value 属性也等于 NaN。第三次运行 Next 方法的时候不带参数，所以 z 等于 undefined，返回对象的 value 属性等于 5 + NaN + undefined，即 NaN。

var b = foo(5);
b.next()        // { value:6, done:false}
b.next(12)     // { value:8, done:false }
b.next(13)     // { value:42, done:true }
// 如果向 next 方法提供参数，返回结果就完全不一样了。上面代码第一次调用 b 的 next 方法时，返回 x+1 的值 6；第二次调用 next 方法，将上一次 yield 表达式的值设为 12，因此 y 等于 24，返回 y / 3 的值 8；第三次调用 next 方法，将上一次 yield 表达式的值设为 13，因此 z 等于 13，这时 x 等于 5，y 等于 24，所以 return 语句的值等于 42。
```

- 如果想要第一次调用 next 方法时就能够输入值，可以在 Generator 函数外面再包一层，先得到一个 generator 函数后调用一次 next。

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

### return 方法

Generator 函数返回的遍历器对象，还有一个 return 方法，可以返回给定的值，并且终结遍历 Generator 函数。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
g.next()        // { value: 1, done: false}
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true}
// 如果 return 方法调用时，不提供参数，则返回值的 value 属性为 undefined。
```

- 如果 Generator 函数内部有 `try...finally` 代码块，且正在执行 try 代码块，那么 return 方法会推迟到 finally 代码块执行完再执行。

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
g.next() // { value: 1, done: false}
g.next() // { value: 2, done: false}
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false}
g.next() // { value: 7, done: true}
// 上面代码中，调用 return 方法后，就开始执行 finally 代码块，然后等到 finally 代码块执行完，再执行 return 方法。
```


### 嵌套的 Generator

在 Generator 函数内部，调用另一个 Generator 函数，直接调用是没有效果的。需要用 yield* 在一个 Generator 函数里面执行另一个 Generator 函数。

```js
function* foo() {
  yield 'a';
  yield 'b';
}
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

- for...of，可以自动遍历 Generator 函数时生成的 Iterator 对象，且此时不再需要调用 next 方法。

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
}
// 1 2 3 4 5
// 一旦 next 方法的返回对象的 done 属性为 true，for...of 循环就会中止，且不包含该返回对象，所以上面代码的 return 语句返回的 6，不包括在 for...of 循环之中。
```

- 原生的 JavaScript 对象没有遍历接口，无法使用 for...of 循环，通过 Generator 函数为它加上这个接口，就可以用了。

```js
// 写法一
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}
let myObj = {foo: 3, bar: 7};
// 通过调用 Generator 函数来返回一个遍历器
for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}
// foo 3
// bar 7

// 写法二
// 给对象加上遍历器接口的另一种写法是，将 Generator 函数加到对象的 Symbol.iterator 属性上面。
function* iterEntries() {
  let keys = Object.keys(this);
  for(let key of keys) {
    yield [key, this[key]];
  }
}
let myObj = {foo: 3, bar: 7};
myObj[`Symbol.iterator`] = iterEntries;
for (let [key, value] of myObj) {
  console.log(key, value);
}
// foo 3
// bar 7
```

- 除了 for...of 循环以外，扩展运算符（...）、解构赋值和 Array.from 方法内部调用的都是遍历器接口。这意味着，它们都可以将 Generator 函数返回的 Iterator 对象作为参数。

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

- 任何数据结构只要有 Iterator 接口，就可以被 `yield *` 遍历。

```js
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();
read.next().value // "hello"
read.next().value // "h"
```

- 控制 ajax 请求。

```js
function foo(x, y) {
  ajax("http://some.url.1/?x=" + x + "&y=" + y, (err, data) => {
    if (err) {
      // 向 * main() 抛出一个错误 it.throw( err);
    } else {
      // 用收到的 data 恢复 * main()
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
 // 这里启动 it.next();
 ```
