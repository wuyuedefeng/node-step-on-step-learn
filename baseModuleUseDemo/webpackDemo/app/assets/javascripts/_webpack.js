// ------  引入css --------
// npm install css-loader style-loader --save-dev
require('../stylesheets/style.css');
// npm install sass-loader node-sass --save-dev
require('../stylesheets/test.scss');

// ------  引入js ---------
var text = require('./test.js');
document.write(text);

// -------- 将js库的全局方法暴漏出来
//var $ = require('jquery');
////  主动定义变量 $ 接收才可以使用
//console.log($);

// 把jquery暴漏出来的方法
// npm install expose-loader --save-dev
require('expose?$!jquery');
console.log($); //不需要定义变量$接收,直接可以使用

// ---------  加载图片 -------
// npm install  url-loader file-loader --save-dev
// 配置文件中在loaders中添加规则,见项目配置文件webpack.config.js


// --------- 打包react组件 --------
require('./testReact.jsx');

