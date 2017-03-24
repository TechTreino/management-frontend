"use strict";

(function(){

	angular
		.module("Trainings")
		.controller("CustomersListController", [
			"$scope",
			"CustomersService",
			Controller
		]);
	
	function Controller($scope, CustomersService)
	{
		$scope.customers = [];
		$scope.columns = [];

		(function initialize(){
			$scope.columns = getColumns();

			CustomersService.all().then(function(res){
				$scope.customers = res.data;
			});
		})();

		function getColumns()
		{
			return [
				{ text: "Nome", value: "firstName" },
				{ text: "Sobrenome", value: "lastName" }
			];
		}

	}

})();