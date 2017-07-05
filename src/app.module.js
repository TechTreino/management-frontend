"use strict";

angular
	.module("AcademiaDigital", [
		"ngRoute",
		"AcadSidebar",
		"AcadTopbar",
		"AcadContent",
		"AcadTitlebar",
		"AcadTable",
		"AcadBoxItem",
		"AcadInputText",
		"AcadInputPassword",
		"AcadSelect",
		"AcadForm",
		"AcadModal",
		"Auth",
		"Customers",
		"Exercises",
		"MuscleGroups",
		"Trainings"
	])
	.config(function($routeProvider, $locationProvider, $httpProvider, AcadSidebarProvider) {
		$locationProvider.html5Mode(true);

		// Routes configuration
		const pagesPath = "./dist/templates/pages";
		$routeProvider
			.when("/", {
				redirectTo: "/customers"
			})

			.when("/login", {
				templateUrl: `${pagesPath}/auth/login/template/login.template.html`
			})

			.when("/customers", {
				templateUrl: `${pagesPath}/customers/template/customers.template.html`
			})

			.when("/customers/create", {
				templateUrl: `${pagesPath}/customers/template/create-customer.template.html`
			})

			.when("/customers/:id", {
				templateUrl: `${pagesPath}/customers/template/edit-customer.template.html`
			})

			.when("/exercises", {
				templateUrl: `${pagesPath}/exercises/template/exercises.template.html`
			})

			.when("/exercises/create", {
				templateUrl: `${pagesPath}/exercises/template/create-exercise.template.html`
			})

			.when("/exercises/:id", {
				templateUrl: `${pagesPath}/exercises/template/edit-exercise.template.html`
			})

			.when("/trainings", {
				templateUrl: `${pagesPath}/trainings/template/trainings-customers-list.template.html`
			})

			.when("/trainings/:id", {
				templateUrl: `${pagesPath}/trainings/template/trainings-customer.template.html`

			});

		// Menu configuration
		AcadSidebarProvider.config.menu = [
			{ id: "customers", text: "Alunos", link: "/customers/" },
			{ id: "exercises", text: "Exercícios", link: "/exercises/" },
			{ id: "trainings", text: "Fichas", link: "/trainings/" }
		];

		$httpProvider.interceptors.push("AcadAuthInterceptor");
		$httpProvider.defaults.transformRequest.unshift(transformRequest);
		$httpProvider.defaults.transformResponse.push(transformResponse);
	})
	.run([
		"$rootScope", "$location", "AcadAuth", "AcadSidebarService",
		function($rootScope, $location, AcadAuth, AcadSidebarService) {
		AcadAuth.initializeUserDataFromLocalstorage();

		$rootScope.$on("$routeChangeStart", function(event) {
			const isLoggedIn = AcadAuth.isLoggedIn();
			const isWhitelisted = $location.path() === "/login" || $location.path() === "/forgot";

			AcadSidebarService.setIsVisible(isLoggedIn);

			if (!isLoggedIn && !isWhitelisted) {
				event.preventDefault();
				$location.path("/login");
			}
		});
	}]);

	function transformRequest(data) {
		return angular.isObject(data) ? humps.decamelizeKeys(data) : data;
	}

	function transformResponse(data) {
		return angular.isObject(data) ? humps.camelizeKeys(data) : data;
	}
