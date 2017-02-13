"use strict";

module.exports = function(grunt) {

	var bowerComponentsPath = "./bower_components";
	var sourcePath = "./src";
	var sourceClientPath = (sourcePath) + "/client";
	var sourceServerPath = (sourcePath) + "/server";
	var distPath = "./dist";
	var distClientPath = (distPath) + "/client";
	var distServerPath = (distPath) + "/server";

	grunt.initConfig({

		/*
		 * copy is used only by the client
		 */
		copy: {
			client: {
				files: [{ 
					expand: true,
					cwd: sourceClientPath,
					src: ["**/*.html", "**/*.js"],
					dest: distClientPath
				}, {
					expand: true,
					cwd: (bowerComponentsPath) + "/components-font-awesome/fonts",
					src: ["**"],
					dest: (distClientPath) + "/assets/fonts"
				}]
			}
		},

		/*
		 * ts is used by both client and server
		 */
		ts: {
			server: {
				files: [{
					src: [(sourceServerPath) + "/**/*.ts", "!" + (sourceServerPath) + "/.baseDir.ts"],
					dest: distServerPath
				}],
				options: {
					module: "commonjs",
					target: "es6",
					sourceMap: false
				}
			},

			client: {
				files: [{
					src: [(sourceClientPath) + "/**/*.ts", "!" + (sourceServerPath) + "/.baseDir.ts"],
					dest: distClientPath
				}],
				options: { 
					module: "commonjs", 
					target: "es6", 
					sourceMap: false,
					experimentalDecorators: true
				}
			}
		},

		/*
		 * watch is used by both client and server
		 */
		watch: {
			ts_server: {
				files: [(sourceServerPath) + "/**/*.ts"],
				tasks: ["ts"]
			},
			others: {
				files: [(sourceClientPath) + "/**/*"],
				tasks: ["sass", "concat_css", "copy"]
			}
		},

		/*
		 * sass is used only by the client
		 */
		sass: {
			client: {
				options: { style: "compressed", sourcemap: "none" },
				files: { "./src/client/css/main.css": "./src/client/sass/app.sass" }
			}
		},

		/*
		 * concat_css is used only by the client
		 */
		concat_css: {
			options: {},
			client_vendor: {
				src: [
					(sourceClientPath) + "/css/reset.css",
					(bowerComponentsPath) + "/components-font-awesome/css/font-awesome.min.css"
				],
				dest: (distClientPath) + "/assets/css/vendor.css"
			},
			client: {
				src: [(sourceClientPath) + "/css/main.css"],
				dest: (distClientPath) + "/assets/css/main.css"
			}
		},

		/*
		 * concat is used only by the client
		 */
		concat: {
			options: { separator: ";\n" },
			client_vendor: {
				src: [(sourceClientPath) + "/js/vendor/**/*.js"],
				dest: (distClientPath) + "/assets/js/vendor.js"
			},
			client: {
				src: [(sourceClientPath) + "/js/*.js"],
				dest: (distClientPath) + "/assets/js/main.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concat-css");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("default", []);
	grunt.registerTask("server", "Tasks needed to prepare server-side files", ["ts:server"]);
	grunt.registerTask("client", "Tasks needed to prepare client-side files", ["sass:client", "ts:client", "copy:client", "concat_css:client_vendor", "concat_css:client", "concat:client_vendor", "concat:client"]);

};