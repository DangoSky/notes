# NPM

## npm 命令

### npm init

npm init 用来初始化生成一个新的package.json文件。可以使用-f（代表force）、-y（代表yes）来跳过提问阶段，直接生成一个新的package.json文件。`npm init -y`。

### npm install

- –save：模块名将被添加到dependencies，可以简化为参数-S。
- –save-dev： 模块名将被添加到devDependencies，可以简化为参数-D。

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