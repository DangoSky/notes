# Vue-Router

## Hash 模式

使用 url 的 hash（#） 来模拟一个完整的 url 指导浏览器行为。虽然 hash 出现在 url 中，但不会包括在 http 请求中，所以不会重新加载页面。但会在浏览器的访问历史中增加一个记录，可以使用后退按钮回到上一个位置。

## History 模式

- 利用 `history.pushState` API 来完成 url 跳转而无须重新加载页面。

- `pushState` 和 `replaceState` 这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

- history 模式将 url 修改得正常请求一样，所以如果后端没有配置相关的路由处理，可能会导致 404 错误。这时候就需要在服务端增加一个覆盖所有情况的候选资源，如果 url 匹配不到任何静态资源，则应该返回一个 404 页面以防页面找不到报 404。

- `history.pushState` 相比于直接修改 hash 主要有以下优势：
  - pushState 设置的新 url 可以是与当前 url 同源的任意 url；而 hash 只可修改 # 后面的部分。
  - pushState 设置的新 url 可以与当前 url 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发记录添加到栈中。
  - pushState 通过 stateObject 可以添加任意类型的数据记录中；而 hash 只可添加短字符串。
  - pushState 可额外设置 title 属性供后续使用。

