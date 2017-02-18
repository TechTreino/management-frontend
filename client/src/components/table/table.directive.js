"use strict";

(function(){

	angular
		.module("AcadTable")
		.directive("acadTable", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./templates/components/table/table.template.html",
			scope: {}
		};
	}

})();