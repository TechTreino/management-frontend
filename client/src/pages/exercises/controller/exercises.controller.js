"use strict";

(function(){

angular
	.module("Exercises")
	.controller("ExercisesController", [
		"$scope", "$location", 
		"ExercisesService", "AcadModalService", "AcadSidebar",
		Controller
	]);

function Controller($scope, $location, ExercisesService, AcadModalService, AcadSidebar)
{

	/**
	 * Grupos musculares
	 *
	 * - Peito
	 * - Ombro
	 * - Costas
	 * - Bíceps
	 * - Tríceps
	 * - Antebraço
	 * - Abdômem
	 * - Lombar
	 * - Oblíquo
	 * - Perna
	 * - Panturrilha
	 */

	 /**
	  * Modelagem exercício:
	  * - name
	  * - group
	  */

	(function initialize(){
		loadColumns();
		loadData();
		setActiveMenuItem();
	})();

	function loadColumns()
	{
		$scope.columns = [
			{ value: "name", text: "Nome" },
			{ value: "group", text: "Grupo" }
		];
	}

	function loadData()
	{
		ExercisesService.all().then(function(response){
			$scope.exercises = response.data;
		});
	}

	function setActiveMenuItem()
	{
		AcadSidebar.setActiveItem("exercises");
	}

	$scope.addExercise = function()
	{
		$location.path("/exercises/create");
	};

	$scope.deleteExercise = function(exercise)
	{
		var exerciseId = exercise._id;
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
			if(exercise._id === exerciseId)
				$scope.exercises.splice(i, 1);
		}
	}

}

})();
