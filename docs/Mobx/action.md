# action

- 对数据的修改是同步的。


## action 中的异步操作

- action 包装的函数只会对当前运行的函数起作用，而不会对该函数内部调用的函数起反应。这意味着 action 内部的 setTimeout、promise 的 then 、 async 语句，如果在回调函数中某些数据发生了变化，不会导致视图的更新。所以这些回调函数不能直接放在 action 中，需要包装在一个 action 中（注意需要绑定 this）。

```js
mobx.configure({ enforceActions: true })

class Store {
  @observable state = "pending"

  @action
  fetchProjects() {
    this.state = "pending"
    fetchGithubProjectsSomehow().then(
      // 回调函数使用 action 来修改数据状态
      action("fetchSuccess", projects => {
        this.state = "done"
      }),
      action("fetchError", error => {
        this.state = "error"
      })
    )
  }
}
```

或者使用 runInAction，

```js
fetchGithubProjectsSomehow().then(
  projects => {
    // 只将数据状态修改的代码放入 action 中，避免为整个回调函数都创建 action
    runInAction(() => {
      this.state = "done"
    })
  },
  error => {
    runInAction(() => {
      this.state = "error"
    })
  }
)
```

runInAction 还可以给定第一个参数作为名称。runInAction(f) 实际上是 action(f)() 的语法糖。


- 对于 async，action 只应用到第一个 await，每个 await 之后的数据状态修改，需要将状态修改代码再包装成一个 action。

```js
@action
async fetchProjects() {
  try {
    const projects = await fetchGithubProjectsSomehow()
    // await 之后，再次修改状态需要动作:
    runInAction(() => {
      this.state = "done"
    })
  } catch (error) {
    runInAction(() => {
      this.state = "error"
    })
  }
}
```



## 修饰符

- @action.bound：绑定 this 到实例上 。