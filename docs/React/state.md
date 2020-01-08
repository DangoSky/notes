# State

## setState 操作是异步的
  - 批量处理优化性能：将多个 setState 集中到一起处理，避免多次 diff 算法对比虚拟 DOM 造成没必要的浪费。
  - 保持跟 props 一致：如果是同步的，state 数据状态提升后，state 改变了，组件还没有重新渲染 props 也还没有更新，会造成获取到的数据不准确。

## setState 的使用
  ### 为什么要使用 setState

  使用 setState 是为了能够使数据驱动更新视图，直接修改 this.state 虽然可以修改数据，但无法引发 componentDidUpdate、render 等一系列函数的调用。vue 可以直接修改是因为 vue 劫持了 set，当数据修改时就触发了绑定的更新函数来更新视图。

  ### 使用方式

  - 参数传入一个对象：多次调用 setState 时，因为存在批量处理，如果传入的对象有相同的 key，则最后一次传入的 key 值会成为最终值，前面的都将被覆盖，类似 Object.assign()。

```js
this.setState({
    count: this.state.count + 1
  }, (preState) => {
    // 由于 setState() 是异步操作，所以，如果想立即获取修改后的 state，需要在回调函数中获取
  }
);
```
  - 参数传入一个函数：不存在批量处理。prevState 表示上一次更新后的 state，是最新的。如果在函数中使用 this.state 的数据，可能获取不到最新的 state。（可参考 [这里](https://blog.csdn.net/Mr_28/article/details/84778001));

```js
this.setState((prevState, props) => ({
    counter: prevState.count
  })
});
```

## setState 的原理
### setState 并不是真正的异步操作，只是模拟了异步的行为
  - onClick、onChange 等 jsx 事件其实是 react 的合成事件，通过合成事件和生命周期钩子等 react 控制的函数中，setState 走的是异步。
  - 对于原生 DOM 元素绑定监听事件、setTimeout 等原生事件，setState 是同步的，可以马上获取到更新的 state 值。（不管 setTimeout 放在了生命周期函数中还是哪）
  - 在 “异步” 中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行合并。

```js
class App extends React.Component {
  state = {val: 0}
  componentDidMount() {
    this.setState({val: this.state.val + 1}) // 异步
    console.log(this.state.val) // 0
    this.setState({val: this.state.val + 1}) // 异步
    console.log(this.state.val) // 0
    setTimeout(_ => {
      this.setState({val: this.state.val + 1}) // 同步
      console.log(this.state.val); // 2

      this.setState({val: this.state.val + 1}) // 同步
      console.log(this.state.val) // 3
    }, 0)
  }

  render() {
    return <div>{this.state.val}</div>
  }
}
```

### setState 如何引发组件更新

  直到 render 函数被调用的时候，this.state 才得到更新。或者 `shouldComponentUpdate` 返回 false 时，虽然不会再执行下去，但 state 也还是会更新。setState 的调用触发 React 4 个生命周期函数（比修改 prop 引发的生命周期少一个 `componentWillReceiveProps` 函数），依次为：`shouldComponentUpdate`、`componentWillUpdate`、`render`、`componentDidUpdate`。

### 合成事件的流程
  react 通过 `isBatchingUpdates` 这个变量（默认为 false）来标志是直接更新还是先暂存 state 进队列进行批量处理。对于合成事件会先调用 `batchedUpdates` 这个函数，把 `isBatchingUpdates` 置为 true 了。参考 [这里](https://github.com/olifer655/react/issues/18) 、[这里](https://segmentfault.com/a/1190000015821018)。

