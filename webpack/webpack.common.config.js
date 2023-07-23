const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
  
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true
  }
};