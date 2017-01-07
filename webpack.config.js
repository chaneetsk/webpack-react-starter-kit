var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DES_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,'src');

var config = {
  entry: SRC_DIR+'/app/index.js',
  output: {
    path: DES_DIR+'/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel',
        query: {
          presets:['react','es2015','stage-2']
        }
      },
      {
        test: [/\.sass/,/\.css/,/\.scss/],
        include: SRC_DIR+'/sass',
        loader : ExtractTextPlugin.extract("css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css')
  ]
};

module.exports = config;
