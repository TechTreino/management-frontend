"use strict";

(function() {
	angular
		.module("AcadSidebar")
		.controller("AcadSidebarController", ["$scope", "$location", "AcadSidebar", "AcadAuth", Controller]);

	function Controller($scope, $location, AcadSidebar, AcadAuth) {
		$scope.menu = [];
		$scope.isVisible = false;

		(function initialize() {
			$scope.menu = AcadSidebar.getMenu();
			$scope.isVisible = AcadAuth.isLoggedIn();
		})();

		$scope.isActive = function(item) {
			return !!(item.__isActive);
		};

		$scope.$on("AcadSidebarService.onVisibilityChange", function(event, data) {
			$scope.isVisible = data.isVisible;
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
