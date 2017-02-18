"use strict";

(function(){

	angular
		.module("AcadContent")
		.directive("acadContent", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./templates/components/content/content.template.html",
			scope: {}
		};
	}

})();