# 浏览器存储

## Cookie

- 解决的问题：Http 协议的无状态性，Http1.x 无法识别连续多次请求中的客户端信息。

- 特性：
  - 由服务端生成，客户端进行存储和维护，会随着 Http 请求报文一起发送到服务端。
  - 存储容量只有 4KB。
  - 有多个属性可以设置，可以指定过期时间和面向使用的域名。更多参考[这里](http://notes.dangosky.com/JavaScript/cookie%E5%92%8Csession.html#cookie)。
  - 安全问题：可能会有 Cookie 泄露、XSS、CSRF 攻击的问题，虽然可以通过设置 HttpOnly、Secure、SameSite 属性来防范。
  - 性能浪费：只要域名匹配就会携带 Cookie，即使对于静态文件等请求也都会携带，请求一多的话会很浪费性能。
    - 解决办法：多服务器策略。对于静态资源等不需要使用到 Cookie 的文件，放到另一个服务器上，这样既可以避免传输 Cookie，还可以突破域名请求并发上限。

## LocalStorage

- 特性：
  - 数据长期存在。
  - 有 5MB 左右。
  - 不能和服务器通信。
  - 同源的 localStorage 数据在所有窗口和标签页之间都是共享的。

- 应用：可以作为浏览器缓存方案，将一些不变信息存储在本地提升首屏加载。


## SessionStorage

- 特性：
  - 会话级别的生命时长。
  - 有 5MB 左右。
  - 不能和服务器通信。
  - 比起 LocalStorage 不仅得在同源下，还得在同一个标签页才能访问到 SessionStorage。比如我在一个标签页中设置了 SessionStorage，在另一个标签页中是无法看到这个 SessionStorage 数据的。

- 应用：
  - 记录表单信息等会话级别的信息。
  - 存储本次的浏览记录。

## indexDB

> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)

- 特性：
  - 运行在浏览器中的非关系型数据库，容量在理论上没有上限。
  - 键值对存储。
  - 异步操作。数据库的读写属于 I/O 操作。
  - 受同源策略限制，无法访问跨域的数据库。
