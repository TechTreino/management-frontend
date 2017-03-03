"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.directive("acadBoxItem", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/box-item/box-item.template.html",
			scope: {
				title: "=",
				titleButton: "="
			}
		};
	}

})();
