"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.directive("acadCrudBoxItem", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./templates/components/box-item/crud/crud-box-item.template.html",
			scope: {
				title: "=",
				columns: "=",
				data: "=",
				noDataText: "=",
				addMethod: "&",
				editMethod: "&",
				deleteMethod: "&"
			}
		};
	}

})();