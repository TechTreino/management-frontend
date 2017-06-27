"use strict";

(function () {
	angular
		.module("Auth")
		.service("LoginService", [
			"AcadHttp",
			Service
		]);

	function Service(AcadHttp) {
		this.authenticate = function (userData) {
			return AcadHttp
				.post("/auth/sign_in", {
					email: userData.email,
					password: userData.password,
					roles: ["client_admin"]
				});
		};
	}
})();
