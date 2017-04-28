"use strict";

(function(){

	angular
		.module("AcadSelect")
		.directive("acadSelect", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/select/select.template.html",
			scope: {
				label: "=",
				model: "=",
				data: "=",
				description: "=",
				value: "="
			}
		};
	}

})();
