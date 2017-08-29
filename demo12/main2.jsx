var React = require('react');
var ReactDOM = require('react-dom');
var a=require('./a');
var b=require('./b');
ReactDOM.render(
  <h2>Hello Webpack</h2>,
  document.getElementById('b')
);
console.log(a);
console.log(b);