var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./app.css');

ReactDOM.render(
  <div>
    <h1 className={style.title}>Hello World</h1>
    <h2 className="title">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
