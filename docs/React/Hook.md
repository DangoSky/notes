# Hook

## 常用的 Hook

### useState

- 使用方式：在函数组件中使用state。返回当前状态和一个修改它的函数。useState的唯一一个参数就是初始的state，可以接受任意的数据类型。 `Const [count, setCount] = useState(0)`。

### useEffect

- 使用方式：在每次渲染后调用（调用时DOM已经更新完毕），包括页面第一次渲染。相当于 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

## 注意事项：

- 只能在函数组件中使用。
