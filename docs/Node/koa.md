# Koa

## 技术栈

- 无论是 Node.js 提供的原始 request 对象，还是 koa 提供的 request 对象，都不能解析 request 的 body。所以要处理 post 请求的话，需要引入 `koa-bodyparser` 来解析原始 request 请求，再将解析后的参数绑定到 `ctx.request.body` 中。