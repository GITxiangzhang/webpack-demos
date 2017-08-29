var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    jquery: ['jquery'],
    react:['react'],
    common:['./a','./b']
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
        {
          name:['jquery','react','common']
            //最后一个块必须先加载
            //他包含webpack生成的在浏览器上使用各个块的加载代码，所以页面上使用的时候最后一个块必须最先加载
        }
    )
  ]
};
