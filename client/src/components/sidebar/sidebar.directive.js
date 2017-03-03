"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.directive("acadSidebar", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./assets/templates/components/sidebar/sidebar.template.html",
			scope: {}
		};
	}

})();