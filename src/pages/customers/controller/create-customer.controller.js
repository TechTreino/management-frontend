"use strict";

(function() {
angular
	.module("Customers")
	.controller("CreateCustomerController", [
		"$scope", "$location",
		"CustomersService",
		Controller
	]);

function Controller($scope, $location, CustomersService) {
	$scope.customer = {};

	$scope.validateFirstName = function(content) {
		return hasAnyCharacter(content);
	};

	$scope.validateLastName = function(content) {
		return hasAnyCharacter(content);
	};

	$scope.validateEmail = function(content) {
		return (hasAnyCharacter(content) && seemsAnEmail(content));
	};

	function hasAnyCharacter(content) {
		return content.length > 0;
	}

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

	$scope.create = function() {
		if (!arePasswordsEqual()) return false;
		if (!areFieldsFilled()) return false;

		let customer = angular.copy($scope.customer);
		CustomersService.create(customer).then(function(response) {
			$location.path("/customers");
		});
	};

	function arePasswordsEqual() {
		let password = $scope.customer.password;
		let repeatedPassword = $scope.customer.repeatedPassword;

		if (!password || !repeatedPassword) return false;

		return (password === repeatedPassword);
	}

	function areFieldsFilled() {
		return (
			hasAnyCharacter($scope.customer.firstName) &&
			hasAnyCharacter($scope.customer.lastName) &&
			hasAnyCharacter($scope.customer.email) &&
			hasAnyCharacter($scope.customer.password)
		);
	}
}
})();
