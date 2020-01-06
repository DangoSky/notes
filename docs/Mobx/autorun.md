# autorun

## 使用

- 如果 autorun 使用到的是计算值，只有该计算值改变的时候才会执行 autorun。如果计算值依赖的可观测变量改变了但计算值没有改变，autorun 也不会执行。

- when： `when(predicate: () => boolean, effect?: () => void, options?)` 当 predicate 返回的结果为 true 时，就执行 effect。
