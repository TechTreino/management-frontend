"use strict";

(function(){

angular
	.module("Exercises")
	.controller("CreateExerciseController", [
		"$scope", "$location", 
		"ExercisesService", "MuscleGroupsService", 
		"AcadFormService",
		Controller
	]);

function Controller($scope, $location, ExercisesService, MuscleGroupsService, AcadFormService)
{
	$scope.exercise = {};
	$scope.muscleGroups = [];

	(function initialize(){
		loadMuscleGroups();
	})();

	function loadMuscleGroups()
	{
		MuscleGroupsService.all().then(function(response){
			$scope.muscleGroups = response.data;
		});
	}

	$scope.validateName = function(content)
	{
		return AcadFormService.hasAnyCharacter(content);
	};

	$scope.create = function()
	{
		var exercise = angular.copy($scope.exercise);
		ExercisesService.create(exercise).then(function(response){
			$location.path("/exercises");
		});
	};

	$scope.cancel = function()
	{
		$location.path("/exercises");
	};
}

})();
