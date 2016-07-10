var config = require('./webpack.config.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.filename = "[name]-[hash].js";

config.plugins = [
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.optimize.CommonsChunkPlugin("vendor", "[name]-[hash].js"),

    new HtmlWebpackPlugin({
      template: __dirname + "/src/app/index.html"
    }),
    
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
];

module.exports = config;
