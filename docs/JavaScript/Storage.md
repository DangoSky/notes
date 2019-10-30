# Storage

## cookie

解决http协议的无状态性。

- 由服务端生成，客户端进行存储和维护，随着http请求报文一起发送到服务端。

- 只有4KB。

- 可以指定过期时间（和客户端有关）。

- 性能浪费：对于静态文件等请求也都会携带cookie，请求一多消耗也多。（多服务器策略，避免传输cookie，还可以突破域名请求并发上限）

- 安全问题：http-only指定不能通过js访问cookie，减少XSS跨域脚本攻击。标记为secure的cookie只能在https请求中携带。设置了same-site则浏览器不能再跨域请求中携带cookie以减少corf攻击。

- 可以指定面向使用的域名。


## localstorage

- 数据长期存在。

- 有5MB左右。

- 不能和服务器通信。

可以作为浏览器缓存方案，将一些不变信息存储在本地提升首屏加载。


## sessionstorage

- 会话级别的生命时长。

- 有5MB左右。

- 不能和服务器通信。


## indexOB

- 三者都遵循同源策略，都保存在客户端。

- 三者的生命周期和作用域不同。

- sessionstorage比起localstorage不止得在同源下，还得在同一个窗口才能访问到

