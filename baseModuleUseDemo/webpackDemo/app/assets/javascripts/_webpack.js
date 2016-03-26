// ------  引入css --------
// npm install css-loader style-loader --save-dev
require('../stylesheets/style.css');

// ------  引入js ---------
var text = require('./test.js');
document.write(text);

// -------- 将js库的全局方法暴漏出来
//require('jquery');
////  这里$符号是无法使用的,前端想要直接用, 需要把jquery暴漏出来。
//console.log($);

// 把jquery暴漏出来的方法
// npm install expose-loader --save-dev
require('expose?$!jquery');
console.log($);

// ---------  加载图片 -------
// npm install  url-loader file-loader --save-dev
// 配置文件中在loaders中添加规则,见项目配置文件webpack.config.js
