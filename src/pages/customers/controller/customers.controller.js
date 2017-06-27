"use strict";

(function() {
angular
	.module("Customers")
	.controller("CustomersController", [
		"$scope", "$location",
		"CustomersService", "AcadModalService",
		Controller
	]);

function Controller($scope, $location, CustomersService, AcadModalService) {
	(function initialize() {
		loadColumns();
		loadData();
	})();

	function loadColumns() {
		$scope.columns = [
			{ value: "firstName", text: "Nome" },
			{ value: "lastName", text: "Sobrenome" }
		];
	}

	function loadData() {
		CustomersService.all().then(onSuccess, angular.noop);

		function onSuccess(response) {
			$scope.customers = response.data.customers;
		}
	}

	$scope.addCustomer = function() {
		$location.path("customers/create");
	};

	$scope.editCustomer = function(customer) {
		let customerId = customer.id;
		$location.path("customers/" + customerId);
	};

	$scope.deleteCustomer = function(customer) {
		let customerId = customer.id;
		let title = "Deseja realmente excluir este aluno?";
		let message = "Uma vez excluído, os dados do aluno serão perdidos para sempre :O";
		let buttons = [
			{ text: "Cancelar" },
			{ text: "Excluir", type: "negative", method: deleteCustomer }
		];

		AcadModalService.showMessage(title, message, buttons, customerId);
	};

	function deleteCustomer(customerId) {
		CustomersService.delete(customerId).then(function(response) {
			deleteFromList(customerId);
		});
	}

	function deleteFromList(customerId) {
		let customers = $scope.customers;

		for (let i = 0; i < customers.length; i++) {
			let customer = customers[i];
			if (customer.id === customerId) {
				$scope.customers.splice(i, 1);
			}
		}
	}
}
})();
