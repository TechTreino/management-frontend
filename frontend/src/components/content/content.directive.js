"use strict";

(function(){

	angular
		.module("AcadContent")
		.directive("acadContent", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/content/content.template.html",
			scope: {}
		};
	}

})();
