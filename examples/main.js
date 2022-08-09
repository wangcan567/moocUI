import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'  // 引入组件
// import Card from '../components/lib/card/index'  // 引入组件

// Vue.use(Demo)  // 使用组件
// Vue.use(Card)
import 'mooc-cancan-ui/dist/css/index.css';
import MUI from 'mooc-cancan-ui';
Vue.use(MUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')