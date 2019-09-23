const path = require('path')

module.exports = {
    /**
     * 入口
     */
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    /**
     * 输出
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}