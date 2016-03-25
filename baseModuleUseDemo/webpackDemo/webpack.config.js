// npm install webpack --save-dev
var webpack = require('webpack');
module.exports = {
    // webpack开始编译文件的入口
    entry: "./app/assets/javascripts/_webpack.js",
    // 将编译的文件输出到当前目录下的bundle.js文件中
    output: {
        path: __dirname + '/dist/assets/javascripts',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // 将后缀为.css后缀的文件,以下面两个插件编译成css数据到bundle.js
            // 依赖 module: css-loader, style-loader (npm install css-loader style-loader --save-dev)
            {test: /\.css$/, loader: 'style!css'},
            // limit参数,图片小于这个限制,会启动base64编码图片
            // 图片大小小于等于limit 依赖module: url-loader (npm install --save-dev url-loader)
            // 图片大小大于limit 依赖module: file-loader (npm install --save-dev file-loader)
            {test: /\.(png|jpg)$/, loader: "url?limit=4000"}
        ]
    },
    plugins: [
        // 在输出文件(这里是bundle.js)头部添加注释信息内容
        new webpack.BannerPlugin('本文件由[王森]创建')
    ],
    resolve: {
        alias: {
            jquery: "./scripts/jquery.min.js"
        }
    }
};

//  开始编译执行命令: webpack