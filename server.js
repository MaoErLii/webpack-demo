const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

/**
 * 告诉 express 从哪使用 webpack-dev-middleware 服务； 在哪使用 webpack.config.js 配置
 */
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

/**
 * 在3000端口 启用 文件服务
 */
app.listen(3000, function() {
    console.log('Example app listen on port 3000!\n');
})