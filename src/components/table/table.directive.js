"use strict";

(function() {
	angular
		.module("AcadTable")
		.directive("acadTable", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/table/table.template.html",
			scope: {
				columns: "=",
				data: "=",
				noDataText: "@",
				selectItemMethod: "="
			}
		};
	}
})();
