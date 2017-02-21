"use strict";

(function(){

angular
	.module("Exercises")
	.controller("ExercisesController", [
		"$scope", "$location", 
		"ExercisesService",
		Controller
	]);

function Controller($scope, $location, ExercisesService)
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

	$scope.addExercise = function(){
		$location.path("/exercises/create");
	};

}

})();