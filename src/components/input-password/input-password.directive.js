"use strict";

(function() {
	angular
		.module("AcadInputPassword")
		.directive("acadInputPassword", Directive);

	function Directive() {
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/input-password/input-password.template.html",
			scope: {
				model: "=",
				label: "=",
				validator: "&",
				errorText: "="
			}
		};
	}
})();
