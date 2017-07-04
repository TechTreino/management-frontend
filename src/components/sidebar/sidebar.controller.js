"use strict";

(function() {
	angular
		.module("AcadSidebar")
		.controller("AcadSidebarController", ["$scope", "$location", "AcadSidebar", Controller]);

	function Controller($scope, $location, AcadSidebar) {
		$scope.menu = [];
		$scope.isVisible = false;

		(function initialize() {
			$scope.menu = AcadSidebar.getMenu();
		})();

		$scope.isActive = function(item) {
			return !!(item.__isActive);
		};

		$scope.$on("AcadSidebarService.onVisibilityChange", function(event, data) {
			$scope.isVisible = data.visibility;
		});

		$scope.$watch(
			function() {
				return $location.$$path;
			},
			setActiveMenuItem
		);

		function setActiveMenuItem(newPath) {
			newPath = newPath.split("/")[1];
			$scope.menu.map(function(item) {
				item.__isActive = (item.id == newPath);
			});
		}
	}
})();
