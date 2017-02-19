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
	$scope.create = function()
	{
		console.log($scope);
	};

	$scope.cancel = function()
	{
		$location.path("/customers");
	};
}

})();