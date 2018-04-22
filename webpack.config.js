const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  mode: 'none',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: 'app.bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    hotOnly: true,
  }
};