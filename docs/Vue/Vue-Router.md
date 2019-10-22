# Vue-Router

## 两种模式

### hash
使用url的 hash # 来模拟一个完整的url指导浏览器行为，虽然 hash 出现在 url 中，但不会包括在http请求中，不会重新加载页面。但会在浏览器的访问历史中增加一个记录，可以使用后退按钮回到上一个位置。

### history
- 利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
- pushState() 和 replaceState() 这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
- 需要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面。
- history.pushState()相比于直接修改hash主要有以下优势：
  - pushState设置的新url可以是与当前url同源的任意url,而hash只可修改#后面的部分，故只可设置与当前同文档的url
  - pushState设置的新url可以与当前url一模一样，这样也会把记录添加到栈中，而hash设置的新值必须与原来不一样才会触发记录添加到栈中
  - pushState通过stateObject可以添加任意类型的数据记录中，而hash只可添加短字符串 pushState可额外设置title属性供后续使用

