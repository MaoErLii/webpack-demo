const path = require('path')

module.exports = {
    /**
     * 入口
     */
    entry: './src/index.js',
    /**
     * 输出
     */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /**
     * 管理资源
     */
    module: {
        rules: [
            /**
             * 已.css结尾的全部文件，都将提供给 style-loader 和 css-loader
             */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}