"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: "./client",
						src: ["**"],
						dest: "./dist/client"
					}
				]
			}
		},
		ts: {
			app: {
				files: [{
					src: ["server/\*\*/\*.ts", "!server/.baseDir.ts"],
					dest: "./dist/server"
				}],
				options: {
					module: "commonjs",
					target: "es6",
					sourceMap: false
				}
			}
		},
		watch: {
			ts: {
				files: ["server/\*\*/\*.ts"],
				tasks: ["ts"]
			}
		},
		sass: {
			dist: {
				options: { style: "compressed", sourcemap: "none" },
				files: { "./client/css/main.css": "./client/sass/app.sass" }
			}
		},
		concat_css: {
			options: {},
			all: {
				src: ["./client/css/reset.css"],
				dest: "./dist/client/css/vendor.css"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-concat-css");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["sass", "concat_css", "copy", "ts"]);
	
};