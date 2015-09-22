'use strict';

var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var production = process.argv.indexOf("--production") > -1

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: node_modules, loader: "babel-loader"},
        { test: /\.scss$/, exclude: node_modules, loader: 'style!css!sass' }
      ]
    }
};
