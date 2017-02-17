"use strict";

module.exports = function(Grunt)
{
	var bowerPath = "./bower_components";
	var sourcePath = "./src";
	var distPath = "./dist";
	var distCssPath = (distPath + "/assets/css");
	var distJsPath = (distPath + "/assets/js");

	Grunt.initConfig({

		// Concat
		concat: {
			options: { separator: "; \n" },
			vendor: {
				src: [ (bowerPath + "/angular/angular.min.js") ],
				dest: (distJsPath + "/vendor.js")
			},
			app: {
				src: [],
				dest: (distJsPath + "/app.js")
			}
		},

		// Sass
		sass: {
			options: { sourcemap: "none", style: "compressed", update: true },
			app: {
				files: { "./dist/assets/css/app.css": "./src/style.loader.sass" }
			}
		},

		// Concat CSS
		concat_css: {
			vendor: {
				src: [ (bowerPath + "/reset-css/reset.css") ],
				dest: (distCssPath + "/vendor.css")
			}
		},

		// Copy
		copy: {
			options: {},
			app: {
				files: [
					{ src: [(sourcePath + "/index.html")], dest: (distPath + "/index.html") }
				]
			}
		}
	});

	Grunt.loadNpmTasks("grunt-contrib-concat");
	Grunt.loadNpmTasks("grunt-contrib-sass");
	Grunt.loadNpmTasks("grunt-contrib-copy");
	Grunt.loadNpmTasks("grunt-concat-css");

	Grunt.registerTask("default", ["concat:app", "sass:app", "copy:app"]);
	Grunt.registerTask("vendor", ["concat:vendor", "concat_css:vendor"]);
}