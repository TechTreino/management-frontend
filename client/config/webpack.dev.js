/*
 * Dependencies
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

/*
 * Paths
 */
var distPath = "../dist";


module.exports = webpackMerge(commonConfig, {

	devtool: "cheap-module-eval-source-map";

	output: {
		path: helpers.root(distPath),
		publicPath: "http://localhost:3000/",
		filename: "[name].js",
		chunkFilename: "[id].chunk.js"
	},

	plugins: [
		new ExtractTextPlugin("[name].css")
	],

	devServer: {
		historyApiFallback: true,
		stats: "minimal"
	}

});