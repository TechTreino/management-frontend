"use strict";

module.exports = function(grunt) {

	var sourcePath = "./src";
	var distPath = "./dist";

	grunt.initConfig({

		ts: {
			server: {
				files: [{
					src: [(sourcePath) + "/**/*.ts", "!" + (sourcePath) + "/.baseDir.ts"],
					dest: distPath
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
				files: [(sourcePath) + "/**/*.ts"],
				tasks: ["ts"]
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("default", []);
	grunt.registerTask("server", "Tasks needed to prepare server-side files", ["ts:server"]);

};