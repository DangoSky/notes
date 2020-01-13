# Storage

## cookie

解决 http 协议的无状态性。

- 由服务端生成，客户端进行存储和维护，随着 http 请求报文一起发送到服务端。

- 只有 4KB。

- 可以指定过期时间（和客户端有关）。

- 性能浪费：对于静态文件等请求也都会携带 cookie，请求一多消耗也多。（多服务器策略，避免传输 cookie，还可以突破域名请求并发上限）

- 安全问题：http-only 指定不能通过 js 访问 cookie，减少 XSS 跨域脚本攻击。标记为 secure 的 cookie 只能在 https 请求中携带。设置了 same-site 则浏览器不能再跨域请求中携带 cookie 以减少 corf 攻击。

- 可以指定面向使用的域名。


## localstorage

- 数据长期存在。

- 有 5MB 左右。

- 不能和服务器通信。

可以作为浏览器缓存方案，将一些不变信息存储在本地提升首屏加载。


## sessionstorage

- 会话级别的生命时长。

- 有 5MB 左右。

- 不能和服务器通信。


## indexOB

- 三者都遵循同源策略，都保存在客户端。

- 三者的生命周期和作用域不同。

- sessionstorage 比起 localstorage 不止得在同源下，还得在同一个窗口才能访问到

