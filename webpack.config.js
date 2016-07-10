var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: __dirname + "/src/Index.jsx"
  },

  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },

  resolve: {
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(less|css)$/,
        loader: "style!css!less"
      },

      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),

    new HtmlWebpackPlugin({
      template: __dirname + "/src/resources/index.html"
    }),

    new HtmlWebpackPlugin({
      filename: 'callback.html',
      chunks: [],
      template: __dirname + "/src/resources/callback.html",
    })
  ],

  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
