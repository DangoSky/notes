# Http模块

## Request

- 获取请求参数
  - 对于 get 请求，可以通过 `url.parse(request.url, true).query` 来获取请求参数。parse 的第二个参数如果为true，请求参数将被 querystring 解析成键值对形式的对象。如果为false，则返回的是未解析、未解码的字符串。

  - 对于 post 请求，则需要借助 `querystring` 转换。

```js
var postData = '';
req.on('data', function(data) {
  postData += data;
});
req.on('end', function() {    
  const result = querystring.parse(postData);
});
```

## Response



## 其他

- 跨域：响应头设置 `res.setHeader('Access-Control-Allow-Origin', '*');`解决跨域。