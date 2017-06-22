"use strict";

(function(){

angular
	.module("Exercises")
	.controller("ExercisesController", [
		"$scope", "$location",
		"ExercisesService", "AcadModalService",
		Controller
	]);

function Controller($scope, $location, ExercisesService, AcadModalService)
{
	(function initialize(){
		loadColumns();
		loadData();
	})();

	function loadColumns()
	{
		$scope.columns = [
			{ value: "name", text: "Nome" },
			{ value: "muscleGroup.name", text: "Grupo" }
		];
	}

	function loadData()
	{
		ExercisesService.all().then(onSuccess, angular.noop);

		function onSuccess(response)
		{
			$scope.exercises = response.data;
		}
	}

	$scope.addExercise = function()
	{
		$location.path("/exercises/create");
	};

	$scope.deleteExercise = function(exercise)
	{
		var exerciseId = exercise.id;
		var title = "Deseja realmente excluir este exercício?";
		var message = "Uma vez excluído um exercício não pode mais ser recuperado.";
		var buttons = [
			{ text: "Cancelar" },
			{ text: "Excluir", type: "negative", method: deleteExercise }
		];

		AcadModalService.showMessage(title, message, buttons, exerciseId);
	};

	function deleteExercise(exerciseId)
	{
		ExercisesService.delete(exerciseId).then(function(response){
			deleteFromList(exerciseId);
		});
	}

	function deleteFromList(exerciseId)
	{
		var exercises = $scope.exercises;

		for(var i = 0; i < exercises.length; i++)
		{
			var exercise = exercises[i];
			if(exercise.id === exerciseId)
				$scope.exercises.splice(i, 1);
		}
	}

	$scope.editExercise = function(exercise)
	{
		var exerciseId = exercise.id;
		$location.path("/exercises/" + exerciseId);
	}
}

})();
