"use strict";

(function(){

	angular
		.module("AcadModal")
		.controller("AcadModalController", [
			"$scope",
			Controller
		]);

	function Controller($scope)
	{
		(function initialize(){
			$scope.isVisible = false;
		})();

		$scope.$on("AcadModalService.onReceiveMessage", function(event, data){
			$scope.title = data.title;
			$scope.message = data.message;
			$scope.buttons = data.buttons;
			$scope.dataToCallback = data.dataToCallback;
			$scope.isVisible = true;
		});

		$scope.onButtonClick = function(clickedButton)
		{
			$scope.isVisible = false;

			if(clickedButton.method)
				clickedButton.method($scope.dataToCallback);
		};
	}

})();