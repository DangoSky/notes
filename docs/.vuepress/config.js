module.exports = {
  title: '略记一二',
  description: '笔记记了是要常常翻出来看的，不然干嘛要花那么多时间记笔记？',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: 'http://blog.dangosky.com/' },
      { text: 'Github', link: 'https://github.com/DangoSky' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'JavaScript',
        children: [
          '/JavaScript/其他.md',
          '/JavaScript/DOM属性计算.md',
          '/JavaScript/this.md',
          '/JavaScript/Promise.md',
          '/JavaScript/Iterator和Generator.md',
          '/JavaScript/async.md',
          '/JavaScript/网络.md',
          '/JavaScript/模块化.md',
          '/JavaScript/Storage.md',
          '/JavaScript/设计模式.md',
          '/JavaScript/内存管理.md',
          '/JavaScript/疑难杂症.md',
          '/JavaScript/WebSocket.md',
          '/JavaScript/OAuth.md',
          '/JavaScript/cookie和session.md',
          '/JavaScript/网页性能.md',
          '/JavaScript/小程序.md',
        ]
      }, {
        title: 'CSS',
        children: [
          '/CSS/基本.md',
          '/CSS/属性.md',
          '/CSS/布局.md',
          '/CSS/疑难杂症.md',
        ]
      }, {
        title: 'TypeScript',
        children: [
          '/TypeScript/接口.md',
          '/TypeScript/类型.md',
          '/TypeScript/声明和配置.md',
          '/TypeScript/类.md',
          '/TypeScript/泛型.md',
        ]
      }, {
        title: 'Vue',
        children: [
          '/Vue/基本.md',
          '/Vue/生命周期.md',
          '/Vue/路由钩子.md',
          '/Vue/组件通信.md',
          '/Vue/数据绑定.md',
          '/Vue/Vue-Router.md',
          '/Vue/踩坑指南.md',
          '/Vue/Vue3.md',
        ]
      }, {
        title: 'React',
        children: [
          '/React/state.md',
          '/React/生命周期.md',
          '/React/有问有答.md',
          '/React/踩坑指南.md',
          '/React/组件通信.md',
          '/React/其他.md',
          '/React/Hook.md',
          '/React/虚拟DOM.md',
          '/React/React-Fiber.md',
        ]
      }, {
        title: 'React-Route',
        children: [
          '/React-Router/React-Router4.md',
          '/React-Router/v3和v4的区别.md',
        ]
      }, {
        title: 'Node',
        children: [
          '/Node/基本.md',
          '/Node/npm.md',
          '/Node/Events模块.md',
          '/Node/Http模块.md',
          '/Node/中间层.md',
          '/Node/Socket.IO.md',
          '/Node/服务端渲染和客户端渲染.md',
          '/Node/koa.md',
          '/Node/TypeOrm.md',
        ]
      }, {
        title: '数据库',
        children: [
          '/数据库/mysql的基本使用.md',
        ]
      }, {
        title: 'Mobx',
        children: [
          '/Mobx/概述.md',
          '/Mobx/observable.md',
          '/Mobx/action.md',
          '/Mobx/autorun.md',
          '/Mobx/踩坑指南.md',
        ]
      }, {
        title: 'Git',
        children: [
          '/Git/一些命令行.md',
          '/Git/常用操作.md',
          '/Git/rebase和merge的区别.md',
        ]
      }, {
        title: 'Webpack',
        children: [
          '/Webpack/入门.md',
          '/Webpack/F&Q.md',
          '/Webpack/Babel.md',
        ]
      }, {
        title: 'Linux',
        children: [
          '/Linux/常用命令行.md',
        ]
      }, {
        title: '计算机网络',
        children: [
          '/计算机网络/概述.md',
          '/计算机网络/应用层.md',
          '/计算机网络/运输层.md',
          '/计算机网络/网络层.md',
          '/计算机网络/数据链路层.md',
          '/计算机网络/物理层.md',
        ]
      }, {
        title: '操作系统',
        children: [
          '/操作系统/概述.md',
          '/操作系统/进程.md',
          '/操作系统/死锁.md',
          '/操作系统/调度.md',
          '/操作系统/存储管理.md',
        ]
      }
    ]
  },
}