const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 旧版 CleanWebpackPlugin 引入写法 
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        // 最新 cleanWebpackPlugin 只接受对象作为参数，默认删除outpub.path目录文件
        // new CleanWebpackPlugin(['dist']), 
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management 输出管理'
        })
    ],
    /**
     * 控制是否生成，如何生成source-map
     */
    devtool: 'inline-source-map',
    /**
     * 本地 开发服务器配置
     */
    devServer: {
        contentBase: './dist'
    },
    /**
     * 输出
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
}