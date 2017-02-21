"use strict";

(function(){

angular
	.module("Customers")
	.controller("CustomersController", [
		"$scope", "$location", 
		"CustomersService", "AcadModalService",
		Controller
	]);

function Controller($scope, $location, CustomersService, AcadModalService)
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
		var title = "Deseja realmente excluir este aluno?";
		var message = "Uma vez excluído, os dados do aluno serão perdidos para sempre :O";
		var buttons = [
			{ text: "Cancelar" },
			{ text: "Excluir", type: "negative", method: deleteCustomer }
		];

		AcadModalService.showMessage(title, message, buttons, customerId);
	};

	function deleteCustomer(customerId)
	{
		console.log("Deleting the customer !!!");
		console.log(customerId);
	}

}

})();