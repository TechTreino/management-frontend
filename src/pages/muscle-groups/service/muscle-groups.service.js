"use strict";

(function() {
angular
	.module("MuscleGroups")
	.service("MuscleGroupsService", [
		"AcadHttp",
		Service
	]);

function Service(AcadHttp) {
	this.all = function() {
		return AcadHttp.get("/muscleGroups");
	};
}
})();
