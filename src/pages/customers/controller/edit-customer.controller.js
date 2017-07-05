"use strict";

(function() {
angular
	.module("Customers")
	.controller("EditCustomerController", [
		"$scope", "$location", "$routeParams",
		"CustomersService",
		Controller
	]);

function Controller($scope, $location, $routeParams, CustomersService) {
	$scope.customer = {};

	(function initialize() {
		let customerId = $routeParams.id;
		CustomersService.byId(customerId).then(function(response) {
			populateScope(response.data);
		});
	})();

	function populateScope(customer) {
		$scope.customer.firstName = customer.firstName;
		$scope.customer.lastName = customer.lastName;
		$scope.customer.email = customer.email;
	}

	$scope.validateFirstName = function(content) {
		return hasAnyCharacter(content);
	};

	function hasAnyCharacter(content) {
		return content.length > 0;
	}

	$scope.validateLastName = function(content) {
		return hasAnyCharacter(content);
	};

	$scope.validateEmail = function(content) {
		return (hasAnyCharacter(content) && seemsAnEmail(content));
	};

	function seemsAnEmail(content) {
		return (
			content.indexOf("@") !== -1 &&
			content.indexOf(".") !== -1
		);
	}

	$scope.validatePassword = function(content) {
		return hasAnyCharacter(content);
	};

	$scope.validateRepeatedPassword = function(content) {
		return content === $scope.customer.password;
	};

	$scope.cancel = function() {
		$location.path("/customers");
	};

	$scope.save = function() {
		if (!areFieldsFilled()) return false;

		let customerId = $routeParams.id;
		let customer = angular.copy($scope.customer);
		CustomersService.update(customerId, customer).then(function(response) {
			$location.path("/customers");
		});
	};

	function areFieldsFilled() {
		return (
			hasAnyCharacter($scope.customer.firstName) &&
			hasAnyCharacter($scope.customer.lastName) &&
			hasAnyCharacter($scope.customer.email)
		);
	}
}
})();
