# WebSocket

- 特点
  - 全双工通信，服务器可以主动向客户端发送消息。
  - 有状态性，服务器可以记住和客户端的通信。
  - 可以发送文本，也可以发送二进制数据。
  - 没有同源限制，客户端可以与任意服务器通信。
  - 基于 TCP 协议
  - 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

- 请求报文的主要字段：
  - `Connection：Upgrade` 表示该连接要升级协议。
  - `Upgrade：websocket` 表明这是 WebSocket 类型请求。
  - `Sec-WebSocket-Key` WebSocket 客户端发送的一个 base64 编码的随机数。
  - `Sec-WebSocket-Version：13` 表示 WebSocket 协议的版本。

- 响应报文的主要字段：
  - `Upgrade：websocket`
  - `Connection：Upgrade`
  - `Sec-WebSocket-Accept` 服务端会根据 `Sec-WebSocket-Key` 请求头和 SHA-1 算法加密后生成。如果缺失该字段的话客户端会抛出错误并关闭连接。
  
- 通信原理

1. 当客户端要和服务端建立 WebSocket 连接时，在客户端和服务器的握手过程中，客户端首先会向服务端发送一个 HTTP 请求，包含一个 `Upgrade` 请求头来告知服务端要建立的是 WebSocket 连接，并在请求头加上 `Sec-WebSocket-Key`。

2. 服务端在 `Sec-WebSocket-Key` 后面追加一段固定的字符串，使用 SHA-1 算法加密两者后再通过 base64 编码得到 `Sec-WebSocket-Accept`。

3. 客户端拿到服务端响应的 `Sec-WebSocket-Accept` 后，会拿自己之前生成的 `Sec-WebSocket-Key` 用相同算法再算一次，如果结果匹配的话则握手成功。此时状态码是 `101 Switching Protocols`，表示服务端接受 WebSocket 协议的客户端连接，之后就可以进行全双工通信了。

- 客户端建立连接的代码

```js
function connectWebsocket() {
  const ws = new WebSocket('ws://localhost:9000');
  // 监听连接成功
  ws.onopen = () => {
    console.log('连接服务端WebSocket成功');
    ws.send(JSON.stringify(msgData));	// send 方法给服务端发送消息
  };
  // 监听服务端消息(接收消息)
  ws.onmessage = (msg) => {
    let message = JSON.parse(msg.data);
    console.log('收到的消息：', message)
  };
  // 监听连接失败
  ws.onerror = () => {
    console.log('连接失败，正在重连...');
    connectWebsocket();
  };
  // 监听连接关闭
  ws.onclose = () => {
    console.log('连接关闭');
  };
};
```
