# observable

- observable 对对象的观测是递归的，即可以观测到一个对象中嵌套的对象。

- observable 观测不到由构造函数创建的对象，要观测构造函数创建的对象的话，需要在它的构造函数中使用 observable 或 extendObservable 来观测对象。

- observable 只能观测到对象中的初始属性，后续新添加的属性不会得到观测，比如使用 map。但可以使用 extendObservable 来新增属性。

```JS
function MyObject(name) {
  extendObservable(this, {
    name,
  });
}
```




