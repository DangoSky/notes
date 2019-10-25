# Events模块
## EventEmitter 构造器

Event Emitter 是一个接口，可以在任何对象上部署。这个接口由events模块提供。

```js
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
```

Events 模块的 EventEmitter 是一个构造函数，用来构造事件发生器的实例 emitter。然后可以用实例方法on来监听事件，emit方法来触发事件。EventEmitter 对象的事件触发和监听是同步的

## EventEmitter 部署

Event Emitter 接口可以部署在任意对象上，使得这些对象也能订阅和发布消息。

```js
var EventEmitter = require('events').EventEmitter;

function Dog(name) {
  this.name = name;
}

Dog.prototype.__proto__ = EventEmitter.prototype;
// 另一种写法
// Dog.prototype = Object.create(EventEmitter.prototype);

var simon = new Dog('simon');

simon.on('bark', function () {
  console.log(this.name + ' barked');
});

setInterval(function () {
  simon.emit('bark');
}, 
```

Node 的内置模块 util 的 inherits 方法，提供了另一种继承 Event Emitter 接口的方法。之后就可以直接在构造函数的示例上使用 on 和 emit 等方法。

```js
var util = require('util');
var EventEmitter = require('events').EventEmitter;

util.inherits(构造函数, EventEmitter);
```