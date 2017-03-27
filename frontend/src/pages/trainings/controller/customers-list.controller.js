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
			loadColumns();
			loadData();
		})();

		function loadColumns()
		{
			$scope.columns = [
				{ text: "Nome", value: "firstName" },
				{ text: "Sobrenome", value: "lastName" }
			];
		}

		function loadData()
		{
			CustomersService.all().then(function(res){
				$scope.customers = res.data;
			});
		}

	}

})();