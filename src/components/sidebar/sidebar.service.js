"use strict";

(function() {
	angular
		.module("AcadSidebar")
		.service("AcadSidebarService", [
			"$rootScope",
			Service
		]);

	function Service($rootScope) {
		this.setIsVisible = function(isVisible) {
			let args = { isVisible: isVisible };
			$rootScope.$broadcast("AcadSidebarService.onVisibilityChange", args);

			console.log("AcadSidebarService: visibility changed to " + isVisible);
		};
	}
})();
