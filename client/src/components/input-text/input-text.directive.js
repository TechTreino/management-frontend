"use strict";

(function(){

	angular
		.module("AcadInputText")
		.directive("acadInputText", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./templates/components/input-text/input-text.template.html",
			scope: {
				label: "="
			}
		};
	}

})();