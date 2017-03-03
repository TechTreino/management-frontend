"use strict";

(function(){

	angular
		.module("AcadTitlebar")
		.directive("acadTitlebar", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./assets/templates/components/titlebar/titlebar.template.html",
			scope: {
				title: "=",
				breadcrumb: "="
			}
		};
	}

})();