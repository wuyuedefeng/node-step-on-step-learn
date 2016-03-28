### webpack 使用配置快速参考

>* [sudo] npm install webpack -g  # -g 全局安装
>* 根目录下新建: webpack.config.js
>* 配置文件
```JavaScript
// npm install webpack --save-dev #安装到开发环境
var webpack = require('webpack');
var path = require('path');
module.exports = {
    //context: __dirname + "/app",
    // webpack开始编译文件的入口
    entry: "./app/assets/javascripts/_webpack.js",
    // 将编译的文件输出到当前目录下的bundle.js文件中
    output: {
        path: './dist', // 打包文件存放的绝对路径
        // publicPath的绝对路径'/'指本js文件的路径
        publicPath: "/node-step-on-step-learn/baseModuleUseDemo/webpackDemo/dist/", //网站运行时的访问路径
        filename: "bundle.js" //打包后的文件名
    },
    module: {
        loaders: [
            // 将后缀为.css后缀的文件,以下面两个插件编译成css数据到bundle.js
            // 依赖 module: css-loader, style-loader (npm install css-loader style-loader --save-dev)
            {test: /\.css$/, loader: 'style!css'},
            // limit参数,图片小于这个限制,会启动base64编码图片
            // 图片大小小于等于limit 依赖module: url-loader (npm install --save-dev url-loader)
            // 图片大小大于limit 依赖module: file-loader (npm install --save-dev file-loader)
            {test: /\.(png|jpg)$/,
                //匹配的路径
                include: [
                    path.resolve(__dirname, "app/assets/images")
                ],
                // 加载图片的路径为上面的output内的publicPath + loader中name的路径
                // 编译路径为output中path路径 + name的路径
                loader: "url-loader?limit=6192&name=assets/images/[name].[ext]"
            }
        ]
    },
    plugins: [
        // 在输出文件(这里是bundle.js)头部添加注释信息内容
        new webpack.BannerPlugin('本文件由[王森]创建')
    ],
    resolve: {
        alias: {
            jquery: "./libs/jquery.min.js"
        }
    }
};
```

>*  开始编译执行命令: webpack   或者: webpack -p  压缩编译(适合生产环境) 

```
$ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包, 默认是webpack.config.js
$ webpack --watch   //监听变动并自动打包
$ webpack -p    //压缩混淆脚本，这个非常非常重要！
$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
```
 

---
此demo,配置和注释更加详细. 







