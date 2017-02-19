"use strict";

(function(){

	angular
		.module("AcadForm")
		.directive("acadForm", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./templates/components/form/form.template.html",
			scope: {
				name: "=",
				title: "=",
				saveText: "=",
				saveMethod: "&",
				cancelText: "=",
				cancelMethod: "&"
			}
		};
	}

})();