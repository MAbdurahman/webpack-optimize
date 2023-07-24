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
        use: ['style-loader', 'styles-loader']
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'styles-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:7]'
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  }
  
});