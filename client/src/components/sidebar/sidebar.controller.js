"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.controller("AcadSidebarController", ["$scope", "AcadSidebar", Controller]);

	function Controller($scope, AcadSidebar)
	{
		$scope.menu = AcadSidebar.menu;
	}

})();