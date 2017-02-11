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
		copy: {
			client: {
				files: [{ 
					expand: true,
					cwd: sourceClientPath,
					src: ["**/*.html"],
					dest: distClientPath
				}, {
					expand: true,
					cwd: (bowerComponentsPath) + "/components-font-awesome/fonts",
					src: ["**"],
					dest: (distClientPath) + "/assets/fonts"
				}]
			}
		},
		ts: {
			app: {
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
		sass: {
			client: {
				options: { style: "compressed", sourcemap: "none" },
				files: { "./src/client/css/main.css": "./src/client/sass/app.sass" }
			}
		},
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
			},
			all: {}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concat-css");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["sass", "concat_css", "copy"]);
	grunt.registerTask("production", ["sass", "concat_css", "copy", "ts"]);
	grunt.registerTask("client", "Tasks needed to prepare client-side files", ["sass:client", "ts:client", "copy:client", "concat_css:client_vendor", "concat_css:client"]);

};