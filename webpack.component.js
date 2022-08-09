const path = require('path')  // 转换绝对路径
const { VueLoaderPlugin } = require('vue-loader')
/* 动态写入list：遍历components文件夹 */
const glob = require('glob')
const list = {}

/* 写一个函数，入参有两个
1、配置组件文件夹的目录
2、配置多入口文件的配置对象 */
async function makeList (dirPash, list) {
    // 遍历组件库文件夹的所有文件
    const files = glob.sync(`${dirPash}/**/index.js`);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        list[component] = `./${file}`
    }
    console.log('list:', list)
}

makeList('components/lib', list)   // 执行方法

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',  // 告诉使用者我们使用的是umd模块
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    // 配置一个loader，对这些文件进行预处理--安装vue-loader: npm i vue-loader
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        // 告诉webpack什么样的文件使用什么样的loader
        rules: [
            {
                test: /\.vue$/,  // vue结尾的文件使用vue-loader
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}