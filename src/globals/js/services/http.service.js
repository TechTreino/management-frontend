"use strict";

(function() {
	angular
		.module("AcademiaDigital")
		.service("AcadHttp", ["$http", Service]);

	function Service($http) {
		this.get = function(route, query) {
			route = buildRoute(route);
			return $http.get(route);
		};

		this.post = function(route, data) {
			route = buildRoute(route);
			return $http.post(route, data);
		};

		this.delete = function(route) {
			route = buildRoute(route);
			return $http.delete(route);
		};

		function buildRoute(route) {
			return window.appBaseApiPath + route;
		}
	}
})();
