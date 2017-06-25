"use strict";

(function() {
	angular
		.module("AcadTitlebar")
		.directive("acadTitlebar", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/titlebar/titlebar.template.html",
			scope: {
				title: "@",
				breadcrumb: "="
			}
		};
	}
})();
