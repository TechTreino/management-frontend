"use strict";

(function() {
	angular
		.module("Trainings")
		.controller("TrainingsCustomerController", [
			"$scope", "$routeParams",
			"CustomersService",
			Controller
		]);

	function Controller($scope, $routeParams, CustomersService) {
		$scope.customer = {};

		(function initialize() {
			loadData();
		})();

		function loadData() {
			let customerId = $routeParams.id;
			CustomersService.byId(customerId).then(onSuccess, angular.noop);

			function onSuccess(res) {
				$scope.customer = res.data;
				console.log("Customer loaded", res.data);
			}
		}
	}
})();
