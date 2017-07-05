"use strict";

(function() {
	angular
		.module("AcademiaDigital")
		.service("AcadAuth", [Service]);

	function Service() {
		let user;
		let authInfo;

		this.setUser = function(newUser) {
			user = newUser;
			localStorage.setItem("user", JSON.stringify(newUser));
		};

		this.getUser = function() {
			return user;
		};

		this.setAuthInfo = function(newAuthInfo) {
			authInfo = newAuthInfo;
			localStorage.setItem("authInfo", JSON.stringify(newAuthInfo));
		};

		this.getAuthInfo = function() {
			return authInfo;
		};

		this.isLoggedIn = function() {
			return Boolean(user) && Boolean(authInfo) && Date.now() < (authInfo.expiry * 1000);
		};

		this.initializeUserDataFromLocalstorage = function() {
			try {
				user = JSON.parse(localStorage.getItem("user") || null);
				authInfo = JSON.parse(localStorage.getItem("authInfo") || null);
			} catch (e) {
				user = null;
				authInfo = null;
			}
		};
	}
})();
