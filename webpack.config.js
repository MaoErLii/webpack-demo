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
             * css处理
             * 已.css结尾的全部文件，都将提供给 style-loader 和 css-loader
             */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /**
             * 图片处理
             * 后缀名为 .png .svg .jpg .gif 结尾的全部文件，都将提供给 file-loader 处理
             */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            /**
             * 字体处理
             * 后缀名为 .woff .woff2 .eot .ttf .otf 结尾的全部文件，都将提供给 file-loader 处理
             */
            {
                test: /\.(.woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            /**
             * 加载数据
             */
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.(xml)$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}