// .vuepress/config.js
module.exports = {
  title: 'MOOC-UI',
  /* 配置base */
  base: '/moocUI/',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Github',
      link: 'https://github.com/wangcan567/moocUI'
    }, {
      text: 'Npm',
      link: 'https://www.npmjs.com/package/mooc-cancan-ui'
    }],
    sidebar: [
      '/',
      'componentDocs/card'
    ]
  }
}