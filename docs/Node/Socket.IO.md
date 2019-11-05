# Socket.IO

## WebSocket

WebSocket 是一种协议，是一种与 HTTP 同等的网络协议，两者都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

## 客户端

### 客户端socket.on()监听的事件

- connect：连接成功。
- connecting：正在连接。
- disconnect：断开连接。
- connect_failed：连接失败。
- error：错误发生，并且无法被其他事件类型所处理。
- message：同服务器端message事件。
- anything：同服务器端anything事件。
- reconnect_failed：重连失败。
- reconnect：成功重连。
- reconnecting：正在重连。
- 当第一次连接时，事件触发顺序为：connecting->connect；当失去连接时，事件触发顺序为：disconnect->reconnecting（可能进行多次）->connecting->reconnect->connect。


## 服务器

### 使用

#### 启动

```js
const server = require('http').createServer();
server.listen(2222);

const io = require('socket.io')(server);
```

#### 将消息发给除特定 socket 外的其他用户

```js
io.on('connection', function(socket) {
  socket.broadcast.emit('hi');
});
```

