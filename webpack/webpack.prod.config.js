const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const glob = require('glob');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'styles-loader']
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'styles-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]'
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10 kb
          }
        },
        generator: {
          filename: './assets/img/[name].[contenthash:12][ext]'
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 40,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:12].css'
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, { nodir: true })
    })
  ],
  output: {
    filename: 'js/[name].[contenthash:12].js'
  }
});