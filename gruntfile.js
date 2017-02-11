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
			build: {
				files: [
					{
						expand: true,
						cwd: sourceClientPath,
						src: ["**"],
						dest: distClientPath
					},
					{
						expand: true,
						cwd: (bowerComponentsPath) + "/components-font-awesome/fonts",
						src: ["**"],
						dest: (distClientPath) + "/fonts"
					}
				]
			}
		},
		ts: {
			app: {
				files: [{
					src: ["server/\*\*/\*.ts", "!src/server/.baseDir.ts"],
					dest: distServerPath
				}],
				options: {
					module: "commonjs",
					target: "es6",
					sourceMap: false
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
			dist: {
				options: { style: "compressed", sourcemap: "none" },
				files: { "./src/client/css/main.css": "./src/client/sass/app.sass" }
			}
		},
		concat_css: {
			options: {},
			all: {
				src: [
					(sourceClientPath) + "/css/reset.css", 
					(bowerComponentsPath) + "/components-font-awesome/css/font-awesome.min.css"
				],
				dest: (distClientPath) + "/css/vendor.css"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concat-css");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["sass", "concat_css", "copy"]);
	grunt.registerTask("production", ["sass", "concat_css", "copy", "ts"]);
};