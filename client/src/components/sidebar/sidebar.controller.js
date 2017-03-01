"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.controller("AcadSidebarController", ["$scope", "AcadSidebar", Controller]);

	function Controller($scope, AcadSidebar)
	{
		$scope.menu = AcadSidebar.getMenu();

		$scope.isActive = function(item)
		{
			return !!(item.__isActive);
		};
	}

})();