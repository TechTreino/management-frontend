"use strict";

(function() {
	angular
		.module("AcadBoxItem")
		.controller("AcadCrudBoxItemController", [
			"$scope",
			Controller
		]);

	function Controller($scope) {
		$scope.getColumnValue = function(item, column) {
			if (!column.value) {
				throw new Error("Columns need to have 'value' property");
			}

			let chainOfKeys = column.value.split(".");
			let finalResult = item[chainOfKeys[0]];
			for (let i = 1; i < chainOfKeys.length; i++) {
				finalResult = finalResult[chainOfKeys[i]];
			}

			return finalResult;
		};

		$scope.isThereNoData = function(data) {
			return (!data || data.length < 1);
		};
	}
})();
