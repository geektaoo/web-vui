module.exports = {
  base: '/web-vui/',
  title: 'web-vui',
  description: '基于vue的组件库',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    sidebarDepth:0,
    nav: [
      {text: '首页', link: '/'},
      {text:'文档',link:'/introduce/'},
      {text: 'GitHub', link: 'https://github.com/Tommywt/web-vui'}
    ],
    sidebar:[
      {
        collapsable: false,
        children:['/introduce/']
      },
      {
        collapsable: false,
        children:['/install/']
      },
      {
        title:'组件',
        collapsable: true,
        children:[
          '/components/icon/',
          '/components/button/',
          '/components/cascader/',
          '/components/collapse/',
          '/components/confirm/',
          '/components/grid/',
          '/components/input/',
          '/components/popover/',
          '/components/tabs/',
          '/components/toast/',
          '/components/pagination/',
          '/components/menu/',
          '/components/slides/',
          '/components/datePicker/'
        ]
      }
    ]
  }
}
