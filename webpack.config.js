const path = require('path');



module.exports = {
  mode: 'production',
  entry: {
    index: './src'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  }
}