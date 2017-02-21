"use strict";

(function(){

	angular
		.module("AcadModal")
		.directive("acadModal", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./templates/components/modal/modal.template.html",
			scope: {}
		};
	}

})();