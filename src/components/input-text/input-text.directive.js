"use strict";

(function(){

	angular
		.module("AcadInputText")
		.directive("acadInputText", Directive);

	function Directive(){
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./dist/templates/components/input-text/input-text.template.html",
			scope: {
				model: "=",
				label: "=",
				validator: "&",
				errorText: "="
			}
		};
	}

})();
