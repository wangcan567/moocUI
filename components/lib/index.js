import Demo from './demo';
import Card from './card';

const components = {
    Demo,
    Card
};
const install = function (Vue) {
    // 避免重复安装
    if (install.installed) return;  
    /* 遍历对象进行注册 */
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    });
}
const API = {
    install
}
/* 导出对象 */
export default API
