# WebSocket

- 特点
  - 双工通信，服务器可以主动向客户端发送消息。
  - 有状态性，服务器可以记住和客户端的通信。
  - 可以发送文本，也可以发送二进制数据。
  - 没有同源限制，客户端可以与任意服务器通信。
  - 基于 TCP 协议
  - 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

- 客户端请求连接报文的主要字段
  - Upgrade：websocket：表明这是 WebSocket 类型请求.
  - Sec-WebSocket-Key：WebSocket 客户端发送的一个 base64 编码的随机数，服务端需要在这个请求头的尾部追加其他的密文，并进行 SHA-1 加密后返回给客户端。否则客户端会抛出 Error during WebSocket handshake 错误，并关闭连接。

```js
GET /webfin/websocket/ HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: xqBt3ImNzJbYqRINxEFlkg==
Origin: http://localhost:8080
Sec-WebSocket-Version: 13
```


- 服务器应答连接报文

  - Sec-WebSocket-Accept：服务端采用与客户端一致的密钥计算出来后返回客户端。
  - HTTP/1.1 101 Switching Protocols： 表示服务端接受 WebSocket 协议的客户端连接，经过这样的请求响应处理后，两端的 WebSocket 连接握手成功, 后续就可以进行 TCP 通讯了。

```js
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: K7DJLdLooIwIG/MOpvWFB3y3FE8=
```

