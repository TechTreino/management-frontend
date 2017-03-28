"use strict";

(function(){

	angular
		.module("Trainings")
		.controller("CustomersListController", [
			"$scope", "$location",
			"CustomersService",
			Controller
		]);
	
	function Controller($scope, $location, CustomersService)
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

		$scope.onSelectItem = function(selectedItem)
		{
			var id = selectedItem.id;
			$location.path("/training/" + id);
		};

	}

})();