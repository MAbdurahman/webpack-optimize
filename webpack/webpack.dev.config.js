const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname, '../dist')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    },
    client: {
      overlay: true
    },
    liveReload: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:7]'
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
  
});