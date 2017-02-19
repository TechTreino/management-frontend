"use strict";

(function(){

angular
	.module("Customers")
	.controller("CreateCustomerController", [
		"$scope", "$location", 
		"CustomersService",
		Controller
	]);

function Controller($scope, $location, CustomersService)
{
	$scope.customer = {};

	$scope.create = function()
	{
		if(!arePasswordsEqual()) return false;
		if(!areFieldsFilled()) return false;
	};

	function arePasswordsEqual()
	{
		var password = $scope.customer.password;
		var repeatedPassword = $scope.customer.repeatedPassword;

		if(!password || !repeatedPassword) return false;

		return (password === repeatedPassword);
	}

	function areFieldsFilled()
	{
		return true;
	}

	$scope.validateFirstName = function(content)
	{
		return (!!content);
	};

	$scope.validateLastName = function(content)
	{
		return (!!content);
	};

	$scope.validateEmail = function(content)
	{
		return (!content && content.indexOf("@") !== -1);
	};

	$scope.cancel = function()
	{
		$location.path("/customers");
	};
}

})();