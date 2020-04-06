# React-Router4

## 路由匹配规则

- `{参数名}`：匹配 URL 的一个部分，直到遇到下一个 `/`、`?`、`#` 为止。这个路径参数可以通过 `this.props.params.paramName` 取出。
- `()`：表示 URL 的这个部分是可选的。
- `-`：匹配任意字符，直到下一个 `/`、`?`、`#` 为止。匹配方式是非贪婪模式。
- `--`： 匹配任意字符，直到下一个 `/`、`?`、`#` 为止。匹配方式是贪婪模式。
- path 属性也可以使用相对路径（不以 / 开头），匹配时就会相对于父组件的路径。

```js
<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/Ryan

<Route path="/files/-">
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/--/-.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg
```

## 提供的组件

#### Route

`<Route path=“xxx” component={Home} />` 根据匹配 path 决定是否显示 Home 组件，还可以接收 exact 和 strict 属性。若是省略 path 属性，则不管路径是否匹配，都会加载指定的组件，所以可以用来充当 404 路由。

#### Switch

`<Switch />` 只匹配第一个匹配到的路由，子节点只能是 `<Route>` 或 `<Redirect>` 组件。

#### Redirect

`<Redirect to="/login" />` 重定向到该组件。对于未登录态，可直接在 render 方法中判断并返回 `<Redirect />` 组件来跳转到登陆页面。用在 `<Router />` 组件中也可以放在最后用于没有匹配到任一路由时重定向到该路由。

#### Prompt

`<Prompt />` 用来在跳转导航时弹出确认框。

## exact 和 strict 属性

- Route 的 exact 属性，设为 true 是开启严格匹配，只有 url 严格匹配 path 时才匹配路由。在 exact 为 true 下，`/link` 与 `/` 是不匹配的；但是在 exact 为 false 时它们则匹配。

- Route 的 strict 属性，设为 true 表示只有当访问地址后缀斜杠严格匹配（有或无）时才匹配路由。在 strict 为 true 下，`/one/` 与 `/one` 是不匹配的，但可以匹配 `/one/two`。


## 动态导航的方法

- 直接使用 `<Link to=“” />` 跳转路由。

- 使用 `withRouter` 的 history, 通过 `this.props.history.push(obj)` 跳转。

```js
// obj参数：
{
  pathname: '/home', // 目标路由的路径
  state: values, // 要传的参数，不会出现在 url 中，在目标路由通过 this.props.location.state 接收
}
```

## 注意事项

- 使用 history、location 或 matchs 时，需要对导出的组件包装一层 `withRouter`。或者让 props 继承自 `RouteProps`。否者会报 `Type '{}' is missing the following properties from type 'Readonly<RouteComponentProps<{}, StaticContext, any>>': history, location, matchts(2739)` 的错误。

- 使用 `withRouter` 做函数式路由导航时，需要让类组件的 props 继承 `RouteComponentProps` 这个接口（从 `react-router-dom` 中导入）。

- 如果需要在路由中使用的 Parmas 参数的话，还需要再定义一个接口 RouterInfo, 并且修改为一下

```js
interface RouterInfo {
  id: any
}

interface Props extends RouteComponentProps <RouterInfo> { }

<React path='goodsList/:id.html' />
```

- 如果链接到根路由 `/`，不要使用 `Link` 组件，而要使用 `IndexLink` 组件。这是因为对于根路由来说，activeStyle 和 activeClassName 会失效，或者说总是生效，因为 `/` 会匹配任何子路由。而 `IndexLink` 组件会使用路径的精确匹配。

```js
<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>
```

另一种方法是使用 `Link`组件的 onlyActiveOnIndex 属性，也能达到同样效果。

```js
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>
```


## 原理解析

```html
<Router>
  <Route path=“xxx” component={Home} />
</Router>
```

在 Router 组件中，维护一个对象，包括 `location`、`match`、`history` 等数据（正如我们在 Home 组件中可以通过 `this.props.history` 获取到）。因为 Router 组件和 Home 组件两者关系可能是祖孙级别的，所以在 Router 组件中通过 `Provider` 将数据传递给子孙组件、在 Route 中通过 `Consumer` 来获取数据，再将该数据通过 prop 传递给 Home 组件。接着在 Router 组件中监听 Hash 的变化，也就是 `hashchange` 事件（History 模式对应的是 `popstate` 事件），在监听的回调函数中更新 `location` 等数据。

在 Route 组件中，通过将 `this.props.path` 和 `Consumer` 接受到的 `pathname` 进行比较，如果路径吻合的话就返回它指定的 Component，否则就返回 null，这样就可以实现根据不同的路径渲染不同的组件了。

比较路径的时候，单纯地通过 `===` 或 `includes` 匹配会有 bug。比如 `/home/1` 和 `/home`，用 `===` 匹配不上，用 `includes` 匹配虽然匹配得上，但在 `/home/1/2` 和 `/2` 时就有 bug 了。所以需要使用正则去匹配才行，并结合 Route 的 `exact` 和 `strict` 属性来写正则（可以使用 path-to-regexp 这个库来根据不同的路径生成相应的正则匹配）。
