// npm install react react-dom babel-preset-react --save-dev
// 使用react <script src="../../dist/bundle.js"></script> 要在dom之后包含,最好放到 </body>的上面
var React = require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(
    <h1>Hello, React!</h1>,
    document.getElementById('react')
);