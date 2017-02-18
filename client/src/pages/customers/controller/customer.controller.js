"use strict";

(function(){

angular
	.module("Customers")
	.controller("CustomersController", [
		"$scope", "CustomersService",
		Controller
	]);

function Controller($scope, CustomersService)
{

	(function initialize(){
		CustomersService.all().then(function(response){
			$scope.customers = response.data;
		});

		$scope.columns = [
			{ value: "firstName", text: "Nome" },
			{ value: "lastName", text: "Sobrenome" }
		];
	})();

	$scope.addCustomer = function()
	{
		console.log("Adding a customer...");
	};

	$scope.editCustomer = function()
	{
		console.log("Editing a customer...");
	};

	$scope.deleteCustomer = function()
	{
		console.log("Deleting a customer...");
	};

}

})();