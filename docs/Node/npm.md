# NPM

## npm 命令

### npm run

查看项目中可以运行的 npm 命令。

### npm view [package name] versions

查看某个 npm 包的所有版本。

### npm init

npm init 用来初始化生成一个新的package.json文件。可以使用-f（代表force）、-y（代表yes）来跳过提问阶段，直接生成一个新的package.json文件。`npm init -y`。

### npm install

- npm install 包名 --save(npm install 包名 -S)：模块名将被添加到dependencies，安装的包需要发布到生产环境的。
- npm install 包名 --save-dev(npm install 包名 -D)： 模块名将被添加到devDependencies，安装的包只用于开发环境，不用于生产环境。

npm install默认会安装dependencies字段和devDependencies字段中的所有模块，如果使用--production参数，可以只安装dependencies字段的模块。`npm install --production`。

### npm update [package name]

升级当前项目的指定模块。从npm v2.6.1 开始，npm update只更新顶层模块，而不更新依赖的依赖，以前版本是递归更新的。如果想取到老版本的效果，要使用`npm --depth 9999 update`。

### npm run

```js
"scripts": {
  "test": "mocha test/"
}
```

上面代码指定npm test，实际运行mocha test/。如果要通过npm test命令，将参数传到mocha，则参数之前要加上两个连词线。`$ npm run test -- anothertest.js` 等同于 `$ mocha test/ anothertest.js`。

### npm outdated -g --depth=0

查看有哪些全局安装的 npm 包需要更新。

### npm list -g

查看全局已经安装过的 npm 包。

如果不想输出的信息过多的话，可以限制输出模块的层级，`npm list -g --depth 0`。

### npm config list

查看配置信息。

### npm info 指定包名

查看远程npm上指定包的所有版本信息。

### npm root

查看当前包的安装路径。`npm root -g` 查看全局的包的安装路径。

#### 查看使用的源

`npm config get registry`。

#### 查看包的所有版本

`npm view 包名 versions`。

#### 查看包的最新版本

`npm view 包名 version`。

#### 修改 npm 源

在项目根目录下新建 `.npmrc` 文件，并根据需要的源配置 registry 即可。

```js
// 淘宝源
registry = 'https://registry.npm.taobao.org'

// 官方源
registry = 'https://registry.npmjs.org'
```

## npm 账号

#### 查看个人账号信息

`npm profile get`。

#### 修改上述的个人信息

`npm profile set <prop> <value>`。

#### 登录 npm 账号

`npm login --auth-type=sso`。

#### 查看当前的登录账号

`npm whoami`。

#### 发布新包

`npm publish`。

#### 删除包

`npm unpublish --force <包名>`。
