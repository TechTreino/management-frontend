"use strict";

(function(){

angular
	.module("Exercises")
	.service("ExercisesService", [
		"$http", 
		Service
	]);

function Service($http)
{
	this.all = function()
	{
		return $http.get("/exercises");
	};

	this.create = function(exercise)
	{
		return $http.post("/exercises", exercise);
	};

	this.update = function(id, exercise)
	{
		return $http.post("/exercises/" + id, exercise);
	}

	this.byId = function(id)
	{
		return $http.get("/exercises/" + id);
	};

	this.delete = function(id)
	{
		return $http.delete("/exercises/" + id);
	}
}

})();