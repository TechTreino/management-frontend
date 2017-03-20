"use strict";

(function(){

angular
	.module("Exercises")
	.controller("EditExerciseController", [
		"$scope", "$location", "$routeParams",
		"ExercisesService", "MuscleGroupsService",
		Controller
	]);

function Controller($scope, $location, $routeParams, ExercisesService, MuscleGroupsService)
{
	$scope.exercise = {};

	(function initialize(){
		var exerciseId = $routeParams.id;
		ExercisesService.byId(exerciseId).then(function(response){
			populateExercise(response.data);
			MuscleGroupsService.all().then(function(response){
				populateMuscleGroups(response.data);
				applyCorrectItemOnMuscleGroupsSelect(response.data);
			});
		});
	})();

	function populateExercise(exercise)
	{
		$scope.exercise = exercise;
	}

	function populateMuscleGroups(muscleGroups)
	{
		$scope.muscleGroups = muscleGroups;
		//$scope.exercise.muscleGroup = muscleGroups[3].id;
	}

	function applyCorrectItemOnMuscleGroupsSelect(muscleGroups)
	{
		var index = 0;

		for(var i = 0; i < muscleGroups.length; i++)
		{
			if(muscleGroups[i].id === $scope.exercise.muscleGroup.id)
			{
				index = i;
				break;
			}
		}

		$scope.exercise.muscleGroup = muscleGroups[index].id;
	}

	$scope.validateName = function(exerciseName)
	{
		return exerciseName.length > 0;
	};

	$scope.onSaveClick = function()
	{
		console.log($scope.exercise);

		if(!areFieldsFilled()) return false;

		var exerciseId = $routeParams.id;
		var exercise = angular.copy($scope.exercise);
		ExercisesService.update(exerciseId, exercise).then(function(){
			$location.path("/exercises");
		});
	};

	function areFieldsFilled()
	{
		return $scope.validateName($scope.exercise.name);
	}

	$scope.onCancelClick = function()
	{
		$location.path("/exercises");
	};
}

})();
