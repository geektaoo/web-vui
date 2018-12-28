module.exports = {
  base:'/web-vui/',
  title: 'web-vui',
  description: '基于vue的组件库',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: '源码', link: 'https://github.com/Tommywt/web-vui' },
    ],
    sidebar: [
      {
        title:'快速入门',
        children:['/install/','/install/start']
      },
      {
        title:'组件',
        children:[
          '/components/icon',
          '/components/button',
          '/components/buttonGroup',
          '/components/input'
        ]
      }
    ]
  }
}