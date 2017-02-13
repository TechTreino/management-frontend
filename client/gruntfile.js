"use strict";

module.exports = function(grunt) {

	var bowerComponentsPath = "./bower_components";
	var sourcePath = "./src";
	var distPath = "./dist";

	grunt.initConfig({

		copy: {
			client: {
				files: [{ 
					expand: true,
					cwd: sourcePath,
					src: ["**/*.html", "**/*.js"],
					dest: distPath
				}, {
					expand: true,
					cwd: (bowerComponentsPath) + "/components-font-awesome/fonts",
					src: ["**"],
					dest: (distPath) + "/assets/fonts"
				}]
			}
		},

		ts: {
			client: {
				files: [{
					src: [(sourcePath) + "/**/*.ts", "!" + (sourcePath) + "/.baseDir.ts"],
					dest: distPath
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
			client: {
				files: [(sourcePath) + "/**/*"],
				tasks: ["sass", "concat_css", "copy"]
			}
		},

		sass: {
			client: {
				options: { style: "compressed", sourcemap: "none" },
				files: { "./src/css/main.css": "./src/sass/app.sass" }
			}
		},

		concat_css: {
			options: {},
			client_vendor: {
				src: [
					(sourcePath) + "/css/reset.css",
					(bowerComponentsPath) + "/components-font-awesome/css/font-awesome.min.css"
				],
				dest: (distPath) + "/assets/css/vendor.css"
			},
			client: {
				src: [(sourcePath) + "/css/main.css"],
				dest: (distPath) + "/assets/css/main.css"
			}
		},

		concat: {
			options: { separator: ";\n" },
			client_vendor: {
				src: [(sourcePath) + "/js/vendor/**/*.js"],
				dest: (distPath) + "/assets/js/vendor.js"
			},
			client: {
				src: [(sourcePath) + "/js/*.js"],
				dest: (distPath) + "/assets/js/main.js"
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
	grunt.registerTask("client", "Tasks needed to prepare client-side files", ["sass:client", "ts:client", "copy:client", "concat_css:client_vendor", "concat_css:client", "concat:client_vendor", "concat:client"]);

};