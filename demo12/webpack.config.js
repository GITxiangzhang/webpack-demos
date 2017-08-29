var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx',
    jquery:['jquery'],
    react:['react','react-dom']

  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name:['common','jquery','react'],
      minChunks:3
    })
  ]
}
