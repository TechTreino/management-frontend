"use strict";

(function(){

	angular
		.module("Trainings")
		.controller("CustomersListController", [
			"$scope",
			"CustomersService", "AcadSidebar",
			Controller
		]);
	
	function Controller($scope, CustomersService, AcadSidebar)
	{
		$scope.customers = [];
		$scope.columns = [];

		(function initialize(){
			setActiveMenuItem();
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

		function setActiveMenuItem()
		{
			AcadSidebar.setActiveItem("trainings");
		}

	}

})();