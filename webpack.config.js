'use strict'

var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')

var svgoConfig = JSON.stringify({
  plugins: [
    {removeTitle: true},
    {convertColors: {shorthex: false}},
    {convertPathData: false}
  ]
})

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: node_modules, loader: 'babel-loader?stage=0' },
      { test: /\.scss$/, exclude: node_modules, loader: 'style!css!sass' },
      { test: /\.svg$/, exclude: node_modules, loader: 'file-loader!svgo-loader' }
    ]
  },
  devServer: { contentBase: './dist' }
}
