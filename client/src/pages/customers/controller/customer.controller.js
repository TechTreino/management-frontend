"use strict";

(function(){

angular
	.module("Customers")
	.controller("CustomersController", [
		"$scope", "$location", 
		"CustomersService",
		Controller
	]);

function Controller($scope, $location, CustomersService)
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
		$location.path("customers/create");
	};

	$scope.editCustomer = function(customer)
	{
		var customerId = customer._id;
		$location.path("customers/" + customerId);
	};

	$scope.deleteCustomer = function(customer)
	{
		var customerId = customer._id;
		console.log("Deleting the customer...");
	};

}

})();