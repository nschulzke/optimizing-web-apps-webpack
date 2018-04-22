const path = require('path');

module.exports = {
  entry: './app/app.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    publicPath: '/dist',
    watchContentBase: true,
  }
};