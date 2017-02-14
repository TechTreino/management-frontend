/*
 * Dependencies
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

/*
 * Paths
 */
var distPath = "./dist";
var sourcePath = "./src";


module.exports = {

	/*
	 * Entry files
	 */
	entry: {
		polyfills: (sourcePath + "/polyfills.ts"),
		main: (sourcePath + "/main.ts"),
		vendor: (sourcePath) + "/vendor.ts"
	},

	/*
	 * Resolve files
	 */
	resolve: {
		extensions: [".ts", ".js"]
	},

	/*
	 * Loaders
	 */
	module: {
		rules: [
			{ 
				test: /\.ts$/, 
				loaders: [
					{ loader: 'awesome-typescript-loader', options: { configFileName: helpers.root('src', 'tsconfig.json') } }, 
					'angular2-template-loader'
				]
			},
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' },
			{ test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' }) },
			{ test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw-loader' }
		]
	},

	/*
	 * Plugins
	 */
	plugins: [
	
		// Workaround for angular/angular#11580
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			helpers.root(sourcePath),
			{} // a map of your routes
		),

		new webpack.optimize.CommonsChunkPlugin({
			name: ["main", "vendor", "polyfills"]
		}),

		new HtmlWebpackPlugin({
			template: (sourcePath + "/index.html")
		})
	],

	// Output (dist) files
	/*
	output: {
		filename: (distPath + "/[name].js")
	},
	*/

};