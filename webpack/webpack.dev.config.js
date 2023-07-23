const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
  
});