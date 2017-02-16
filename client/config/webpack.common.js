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

			// TypeScript loader
			{ 
				test: /\.ts$/, 
				loaders: [
					{ loader: "awesome-typescript-loader", options: { configFileName: helpers.root(sourcePath, "tsconfig.json") } }, 
					"angular2-template-loader"
				]
			},

			// Html loader
			{ test: /\.html$/, loader: 'html-loader' },

			// Images loader
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' },
			
			// CSS loader for application-wide styles
			//{ test: /\.css$/, exclude: helpers.root(sourcePath, "app"), loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' }) },
			
			// CSS loader for specific components' styles
			//{ test: /\.css$/, include: helpers.root(sourcePath, "app"), loader: 'raw-loader' },

			// CSS loader
			{ test: /\.css$/, exclude: helpers.root(sourcePath, "app"), loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader?sourceMap" }) },

			// Sass loader
			{ 
				test: /\.sass$/, 
				loader: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader!sass-loader",
				})
			}
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

};