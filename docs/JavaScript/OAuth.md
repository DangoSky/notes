# OAuth

OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码供第三方应用使用。

## token和密码的区别

- token 是短期的，到期会自动失效，用户自己无法修改。

- token 可以被数据所有者撤销，会立即失效。

- token有权限范围。


## 获得 token 的四种方式

### 授权码（authorization-code）

第三方应用先申请一个授权码，然后再用该码获取令牌，所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。

1. A 网站提供一个链接，用户点击后就会跳转到 B 网站，授权用户数据给 A 网站使用。

```js
https://b.com/oauth/authorize?
  response_type=code&    // 要求返回授权码
  client_id=CLIENT_ID&   // 请求方的身份
  redirect_uri=CALLBACK_URL&  // B 接受或拒绝请求后的跳转网址
  scope=read  // 表示要求的授权范围（这里是只读）
```

2. 用户跳转后，B 网站会要求用户登录，然后询问是否同意给予 A 网站授权。用户表示同意，这时 B 网站就会跳回 redirect_uri 参数指定的网址。跳转时会传回一个授权码，就像 `https://a.com/callback?code=AUTHORIZATION_CODE`。

3. A 网站拿到授权码以后，就可以在后端向 B 网站请求令牌。

```js
https://b.com/oauth/token?
  client_id=CLIENT_ID&    // 确认请求方的身份
  client_secret=CLIENT_SECRET&    // 确认请求方的身份，该数据是保密的所以只能在后端发请求
  grant_type=authorization_code&    // 表示采用的授权方式是授权码
  code=AUTHORIZATION_CODE&  授权码
  redirect_uri=CALLBACK_URL   // 令牌颁发后的回调网址
```

4. B 网站收到请求以后就会颁发令牌，具体做法是向 redirect_uri 指定的网址，发送一段 JSON 数据。

```json
{    
  "access_token":"ACCESS_TOKEN",  // token
  "token_type":"bearer",
  "expires_in":2592000,
  "refresh_token":"REFRESH_TOKEN",
  "scope":"read",
  "uid":100101,
  "info":{...}
}
```

![](https://www.wangbase.com/blogimg/asset/201904/bg2019040905.jpg)



### 隐藏式（implicit）

将令牌储存在前端。允许直接向前端颁发令牌，没有授权码这个中间步骤。

1. A 网站提供一个链接，要求用户跳转到 B 网站，授权用户数据给 A 网站使用。

```js
https://b.com/oauth/authorize?
  response_type=token& // 表示要求直接返回令牌。
  client_id=CLIENT_ID&
  redirect_uri=CALLBACK_URL&
  scope=read
```

2. 用户跳转到 B 网站，登录后同意给予 A 网站授权。这时 B 网站就会跳回 redirect_uri 参数指定的跳转网址，并且把令牌作为 URL 参数传给 A 网站。`https://a.com/callback#token=ACCESS_TOKEN`。注意 token 的位置是 URL 锚点而不是查询字符串，这是因为 OAuth 2.0 允许跳转网址是 HTTP 协议，因此存在"中间人攻击"的风险，而浏览器跳转时，锚点不会发到服务器，就减少了泄漏令牌的风险。


### 密码式（password）

用户把用户名和密码直接告诉该应用。该应用直接使用密码申请令牌。

1. A 网站要求用户提供 B 网站的用户名和密码。拿到以后，A 就直接向 B 请求令牌，省去了跳转的步骤。

```js
https://oauth.b.com/token?
  grant_type=password&  // 授权方式是密码式
  username=USERNAME&
  password=PASSWORD&
  client_id=CLIENT_ID
```

2. B 网站验证身份通过后直接给出令牌。注意这时不需要跳转，而是把令牌放在 JSON 数据里面作为 HTTP 回应，A 因此拿到令牌。

### 客户端凭证（client credentials）

客户端以自己的名义，而不是以用户的名义，向"服务提供商"进行认证。

1. A 应用在命令行向 B 发出请求。

```js
https://oauth.b.com/token?
  grant_type=client_credentials&
  client_id=CLIENT_ID&  // 确认请求方的身份
  client_secret=CLIENT_SECRET  // 确认请求方的身份
```

2. B 网站验证通过以后直接返回令牌。这种方式给出的令牌，是针对第三方应用的，而不是针对用户的，即有可能多个用户共享同一个令牌。

## 令牌的使用

A 网站拿到令牌以后，就可以向 B 网站的 API 请求数据了。此时每个发到 API 的请求，都必须带有令牌（在请求的头信息，加上一个 Authorization 字段）。


## 更新令牌

B 网站颁发令牌的时候，一次性颁发两个令牌，一个用于获取数据，另一个用于获取新的令牌（refresh token 字段）。令牌到期前，用户使用 refresh token 发一个请求去更新令牌，B 网站验证通过以后就会颁发新的令牌。

```js
https://b.com/oauth/token?
  grant_type=refresh_token&  // 要求更新令牌
  client_id=CLIENT_ID&
  client_secret=CLIENT_SECRET&
  refresh_token=REFRESH_TOKEN  // 用于更新令牌的令牌
```


## 前端的权限管理

前端维护一个路由配置列表，包含每个路由的路径、ID、title、子路由和所需要的权限（对应的用户身份）等。在添加路由时，根据路由的权限和当前的用户身份（登录时由后端返回）动态选择是否添加该路由，这样可以做到不同的用户身份有不同的菜单列表。

但如果用户进入没有权限的页面的话，此时页面提示的是 404 而非 401 没有权限。所以还可以在进入路由时加一层拦截，类似于 Vue 的 `beforeEach`，跳转到该路由时如果没有用户权限，则重定向到 401 页面。
