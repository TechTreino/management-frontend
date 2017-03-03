"use strict";

(function(){

angular
	.module("Exercises")
	.controller("CreateExerciseController", [
		"$scope", "$location", 
		"ExercisesService", "AcadFormService",
		Controller
	]);

function Controller($scope, $location, ExercisesService, AcadFormService)
{
	$scope.exercise = {};

	$scope.validateName = function(content)
	{
		return AcadFormService.hasAnyCharacter(content);
	};

	$scope.create = function()
	{
		var exercise = angular.copy($scope.exercise);
		ExercisesService.create(exercise).then(function(response){
			console.log("Exercise created");
			$location.path("/exercises");
		});
	};

	$scope.cancel = function()
	{
		$location.path("/exercises");
	};
}

})();