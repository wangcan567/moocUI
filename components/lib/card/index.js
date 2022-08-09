import Card from './src/main.vue'

Card.install = function (Vue) {
    Vue.component(Card.name, Card)
}

/* 封装过后多了一层注册逻辑的组件导出 */
export default Card