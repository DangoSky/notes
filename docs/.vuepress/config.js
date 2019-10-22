module.exports = {
  title: '略记一二',
  description: '笔记记了是要常常翻出来看的，不然干嘛要花那么多时间记笔记？',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'JavaScript', link: '/' },
      { text: 'React', link: '/guide/' },
      { text: 'TypeScript', link: '/typescript' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
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
        ]
      }, {
        title: 'Mobx',
        children: [
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
      }
    ]
  },
}