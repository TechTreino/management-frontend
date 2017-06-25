"use strict";

(function() {
	angular
		.module("AcadModal")
		.service("AcadModalService", [
			"$rootScope",
			Service
		]);

	function Service($rootScope) {
		this.showMessage = function(title, message, buttons, dataToCallback) {
			buttons = ensureArray(buttons);
			let args = { title: title, message: message, buttons: buttons, dataToCallback: dataToCallback };
			$rootScope.$broadcast("AcadModalService.onReceiveMessage", args);
		};

		function ensureArray(item) {
			return (Array.isArray(item) ? item : [item]);
		}
	}
})();
