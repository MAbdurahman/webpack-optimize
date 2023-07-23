const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:12].css',
    })
  ],
  output: {
    filename: '[name].[contenthash:12].js'
  },
});