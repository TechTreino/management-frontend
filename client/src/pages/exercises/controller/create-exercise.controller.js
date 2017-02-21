"use strict";

(function(){

angular
	.module("Exercises")
	.controller("CreateExerciseController", [
		"$scope", "$location", 
		"ExercisesService",
		Controller
	]);

function Controller($scope, $location, ExercisesService)
{
	$scope.exercise = {}
}

})();