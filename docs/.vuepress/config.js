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
          '/JavaScript/基本.md',
          '/JavaScript/DOM属性计算.md',
          '/JavaScript/this.md',
          '/JavaScript/Promise.md',
          '/JavaScript/Iterator和Generator.md',
          '/JavaScript/async.md',
          '/JavaScript/网络.md',
          '/JavaScript/通信.md',
          '/JavaScript/模块化.md',
          '/JavaScript/Storage.md',
          '/JavaScript/疑难杂症.md',
          '/JavaScript/OAuth.md',
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
          '/TypeScript/配置.md',
          '/TypeScript/声明文件.md',
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
        ]
      }, {
        title: 'Mobx',
        children: [
          '/Mobx/observable.md',
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
        title: 'Linux',
        children: [
          '/Linux/常用命令行.md',
        ]
      }, {
        title: '计算机网络',
        children: [
          '/计算机网络/概述.md',
          '/计算机网络/物理层.md',
          '/计算机网络/数据链路层.md',
          '/计算机网络/状态码.md',
          '/计算机网络/报文.md',
          '/计算机网络/get和post.md',
          '/计算机网络/代理.md',
          '/计算机网络/其他.md',
        ]
      }
    ]
  },
}