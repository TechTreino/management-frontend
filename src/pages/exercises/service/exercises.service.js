"use strict";

(function() {
angular
	.module("Exercises")
	.service("ExercisesService", [
		"AcadHttp",
		Service
	]);

function Service(AcadHttp) {
	this.all = function() {
		return AcadHttp.get("/exercises");
	};

	this.create = function(exercise) {
		return AcadHttp.post("/exercises", exercise);
	};

	this.update = function(id, exercise) {
		return AcadHttp.post("/exercises/" + id, exercise);
	};

	this.byId = function(id) {
		return AcadHttp.get("/exercises/" + id);
	};

	this.delete = function(id) {
		return AcadHttp.delete("/exercises/" + id);
	};
}
})();
