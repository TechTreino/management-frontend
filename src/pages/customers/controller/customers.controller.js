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
		loadColumns();
		loadData();

	})();
	
	function loadColumns()
	{
		$scope.columns = [
			{ value: "firstName", text: "Nome" },
			{ value: "lastName", text: "Sobrenome" }
		];
	}

	function loadData()
	{
		CustomersService.all().then(onSuccess, angular.noop);

		function onSuccess(response)
		{
			$scope.customers = response.data;
		}
	}

	$scope.addCustomer = function()
	{
		$location.path("customers/create");
	};

	$scope.editCustomer = function(customer)
	{
		var customerId = customer.id;
		$location.path("customers/" + customerId);
	};

	$scope.deleteCustomer = function(customer)
	{
		var customerId = customer.id;
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
		CustomersService.delete(customerId).then(function(response){
			deleteFromList(customerId);
		});
	}

	function deleteFromList(customerId)
	{
		var customers = $scope.customers;

		for(var i = 0; i < customers.length; i++)
		{
			var customer = customers[i];
			if(customer.id === customerId)
				$scope.customers.splice(i, 1);
		}
	}

}

})();
