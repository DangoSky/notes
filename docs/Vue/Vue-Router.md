# Vue-Router

- 原理浅析：监听 URL 的变化，然后匹配路由规则，显示相应的页面。只是对于 Hash 模式和 History 模式，监听 URL 变化的方式不同而已。

## Hash 模式

- 条件：
  - hash 出现在 URL 中，但不会包括在 http 请求中，所以不会重新加载页面。
  - 会在浏览器的访问历史中增加一个记录，所以能通过浏览器的回退、前进按钮控制 hash 的切换。

- 原理浅析：通过 hashchange 事件来监听 hash 的变化，选择路由配置列表里面和当前哈希路径匹配的组件出来渲染。改变 hash 既可以使用 a 标签，也可以直接对 `loaction.hash` 进行赋值。


## History 模式

- 原理浅析：通过 `popstate` 事件来监听路径的变化，并选择对应的组件渲染。改变路径可以使用 `history.pushState` 和 `history.repalceState` 这两个 api，可以在不刷新页面的情况下操作浏览器的历史纪录进行跳转。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。（`pushState` 和 `replaceState` 不会触发 popstate 事件，所以需要手动触发页面渲染）

- `pushState` 和 `replaceState` 这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

- history 模式将 URL 修改得正常请求一样，所以如果后端没有配置相关的路由处理，可能会导致 404 错误。这时候就需要在服务端增加一个覆盖所有情况的候选资源，如果 URL 匹配不到任何静态资源，则应该返回一个 404 页面以防页面找不到报 404。

- `history.pushState` 相比于直接修改 hash 主要有以下优势：
  - pushState 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分。
  - pushState 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发记录添加到栈中。
  - pushState 通过 stateObject 可以添加任意类型的数据记录中；而 hash 只可添加短字符串。
  - pushState 可额外设置 title 属性供后续使用。

