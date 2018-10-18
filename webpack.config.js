const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, "/dist");
const APP_DIR = path.join(__dirname, './src');

module.exports = {
  entry: APP_DIR+'/sketch.js',
  output: {
    path: BUILD_DIR,
    filename: "sketch-bundle.js"
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};