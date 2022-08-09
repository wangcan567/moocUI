/* 引入demo组件 */
import Demo from './src/main.vue'

Demo.install = function (Vue) {
    Vue.component(Demo.name, Demo) /* 写Vue注册组件的逻辑 */
}

/* 封装过后多了一层注册逻辑的组件导出 */
export default Demo