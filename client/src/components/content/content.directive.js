"use strict";

angular
	.module("AcadContent")
	.directive("acadContent", Directive);

function Directive(){
	return {
		restrict: "E",
		templateUrl: "./templates/components/content/content.template.html",
		scope: {}
	};
}