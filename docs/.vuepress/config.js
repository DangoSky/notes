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
      // {
      //   title: 'JavaScript',
      //   children: [
      //     '/javascript.md',
      //   ]
      // },
      {
        title: 'React',
        children: [
          '/React/state.md',
          '/React/生命周期.md',
        ]
      }
    ]
  },
}