# this

## this的实质

this 的设计跟内存里面的数据结构有关系。对于 `var obj = { foo:  5 }`，JavaScript 引擎会先在内存里面，生成一个对象 `{ foo: 5 }`，然后把这个对象的内存地址赋值给变量obj。也就是说，变量obj是一个地址。后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。

原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。

```js
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
```

当属性的值是一个函数时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。即**this指代函数当前的运行环境**，不管是不是在函数内部，只要是在全局环境下运行，this就是指顶层对象window。


## 常见的 this 指向误解

### 对象中的对象方法

this所在的方法不在对象的第一层，这时 this 指向的是当前一层的对象，而不会继承更上面层次的 this。

```js
var a = {
  p: 'Hello',
  b: {
    m() {
      console.log(this.p);  
    }
  }
};
a.b.m()         // undefined

// a.b.m方法在a对象的第二层，该方法内部的this不是指向a，而是指向a.b，因为实际执行的是下面的代码。
var b = {
  m() {
   console.log(this.p);
  }
};

var a = {
  p: 'Hello',
  b: b
};
(a.b).m()     // 等同于 b.m()
```

### 对象方法中的函数

```js
// 内层的this不指向外部，而指向顶层对象。
var o = {
  f1: function () {
    console.log(this); // Object
    var f2 = function () {
      console.log(this); // Window
    }();
  }
}
o.f1()
```

### 对箭头函数绑定的this理解错误

```js
var name = 'window';
var A = {
  name: 'A',
  sayHello: () => {
    console.log(this.name)
  }
}
A.sayHello();  // window
```

箭头函数内的this对象，是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。
“该函数所在的作用域指向的对象”，作用域是指函数内部，这里的箭头函数，也就是**sayHello，所在的作用域其实是最外层的js环境，因为没有其他函数包裹**；然后最外层的js环境指向的对象是winodw对象，所以这里的this指向的是window对象。

正确解法：

```js
// 不使用箭头函数
var name = 'window';
var A = {
  name: 'A',
  sayHello() {
    console.log(this.name)
  }
}
A.sayHello();  // A
```
```js
// 让箭头函数绑定外层的this
var name = 'window';
var A = {
  name: 'A',
  sayHello() {
    var s = () => console.log(this.name);
    return s;
  }
}
var sayHello = A.sayHello();
sayHello();  // A 
var B = {
  name: 'B'
}
sayHello.call(B); // A
```

## this的绑定规则

变量的作用域是在代码编写时确定的(静态)，而this时在代码运行时确定的(动态)。

### 默认绑定

### 隐式绑定

### 显式绑定

### new绑定
