// .vuepress/config.js
module.exports = {
  title:'MOOC-UI',
  nav:[{
    text:'Home',link:'/'
  },{
    text:'Github',link:'https://github.com/wangcan567/moocUI'
  },{
    text:'Npm',link:'https://www.npmjs.com/package/mooc-cancan-ui'
  }],
  /* 配置base */
  base: '/moocUI/',
  themeConfig: {
    sidebar: [
      '/',
      'componentDocs/card'
    ]
  }
}