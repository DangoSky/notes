# React-Router4

## 路由匹配规则
  - {参数名}：匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。
  - ()：表示URL的这个部分是可选的。
  - -：匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
  - --： 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。
  - path属性也可以使用相对路径（不以 / 开头），匹配时就会相对于父组件的路径。

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

## exact 和 strict
- Route的exact属性，设为true是开启严格匹配，只有url严格匹配path才会激活路由。在exact下，’/link’与 ’/’ 是不匹配的，但是在false时它们才匹配。
- Route的strict属性: 若为 true，只有当访问地址后缀斜杠严格匹配（有或无）时激活样式才会应用。如果为 true，path 为 '/one/' 将不能匹配 '/one’， 但可以匹配 '/one/two'。

## 提供的组件

### Switch

`<Switch />` 只匹配第一个匹配到的路由，子节点只能是 `<Route>` 或 `<Redirect>` 组件。

### Redirect

`<Redirect to="/login" />` 对于未登录态，可直接在 render 中判断，并跳转到登陆页面。但要注意刷新页面也会造成重定向。

### Prompt

`<Prompt />` 用来在跳转导航时弹出确认框。


## 动态导航的方法
  - 直接使用 `<Link to=“” />` 跳转路由。
  - 使用 `withRouter` 的 history, 通过 `this.props.history.push(path)`跳转。


## 其他

- 若是省略 Route 的path属性，则不管路径是否匹配，都会加载指定的组件，所以可以用来充当 404 路由。
- 对于嵌套的路由，子路由需要以  {this.props.children} 的形式写在父组件中，当作是子组件。


## 注意事项

- 使用 history、location 或 matchs 时，需要对导出的组件包装一层 `withRouter`。或者让 props 继承自 `RouteProps`。否者会报 `Type '{}' is missing the following properties from type 'Readonly<RouteComponentProps<{}, StaticContext, any>>': history, location, matchts(2739)` 的错误。

- 使用 `withRouter` 做函数式路由导航时，需要让类组件的 props 使用/继承 `RouteComponentProps` 这个接口（从 `react-router-dom` 中导入）。

- 如果需要在路由中使用的 Parmas 参数的话，还需要再定义一个接口 RouterInfo, 并且修改为一下

```js
interface RouterInfo {
  id:any
}

interface Props extends RouteComponentProps <RouterInfo >{ }

<React path='goodsList/:id.html' />
```

- 如果链接到根路由/，不要使用Link组件，而要使用 IndexLink 组件。这是因为对于根路由来说，activeStyle 和 activeClassName 会失效，或者说总是生效，因为 `/` 会匹配任何子路由。而 IndexLink 组件会使用路径的精确匹配。

```js
<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>
```

另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。
```js
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>
```