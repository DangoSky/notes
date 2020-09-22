# Babel

## 原理概述

1. 解析：先将代码转换成 AST。
2. 修改：按一定规则修改 AST（像 Taro 和 mpvue 这些跨端工具就是通过 Babel 完成小程序的语法转换）。
3. 生成：用修改后的 AST 生成编译后的代码。


## 踩坑指南

- 配置 `babel-plugin-import` 需要在 webpack 里配置，在 `.babelrc` 里配置会失效，并且 `tsconfg.json` 中的 module 不能设置为 commonjs。参考[这里](https://github.com/ant-design/babel-plugin-import/issues/73)。
