const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * 入口
     */
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    /**
     * 插件
     */
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management 输出管理'
        })
    ],
    /**
     * 输出
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}