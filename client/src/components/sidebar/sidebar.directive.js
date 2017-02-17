"use strict";

angular
	.module("AcadSidebar")
	.directive("acadSidebar", Directive);

function Directive(){
	return {
		restrict: "E",
		templateUrl: "./templates/components/sidebar/sidebar.template.html",
		scope: {}
	};
}