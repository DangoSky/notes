# 虚拟DOM

![](./images/3.png)

## 虚拟 DOM 和 真实 DOM

- 直接更新 DOM（innerHTML）：render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)
  使用虚拟 DOM：render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)

- 直接更新 DOM 的时间主要花在了绘制和渲染上，而使用虚拟 DOM 的时间主要花在 diff 上。如果 DOM 很小的话，直接更新 DOM 会快点。如果 DOM 大了的话，使用虚拟 DOM 则更好。所以并不一定虚拟 DOM 就会更快，如果整个 DOM 都更新了，使用虚拟 DOM 不仅一样要绘制渲染，而且还要 diff。

- 虚拟 DOM 的功能：
  - 将页面的状态抽象为 JS 对象（包含了标签 tag、属性 props 对象、子元素 children 数组）的形式，配合不同的渲染工具，使跨平台渲染成为可能，比如服务端渲染、浏览器渲染和移动端渲染等。
