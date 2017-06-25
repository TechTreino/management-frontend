"use strict";

(function() {
	angular
		.module("Trainings")
		.controller("TrainingsCustomersListController", [
			"$scope", "$location",
			"CustomersService",
			Controller
		]);

	function Controller($scope, $location, CustomersService) {
		$scope.customers = [];
		$scope.columns = [];

		(function initialize() {
			loadColumns();
			loadData();
		})();

		function loadColumns() {
			$scope.columns = [
				{ text: "Nome", value: "firstName" },
				{ text: "Sobrenome", value: "lastName" }
			];
		}

		function loadData() {
			CustomersService.all().then(onSuccess, angular.noop);

			function onSuccess(response) {
				$scope.customers = response.data;
			}
		}

		$scope.onSelectItem = function(selectedItem) {
			let id = selectedItem.id;
			$location.path("/trainings/" + id);
		};
	}
})();
