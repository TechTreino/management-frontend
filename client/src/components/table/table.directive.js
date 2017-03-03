"use strict";

(function(){

	angular
		.module("AcadTable")
		.directive("acadTable", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./assets/templates/components/table/table.template.html",
			scope: {}
		};
	}

})();