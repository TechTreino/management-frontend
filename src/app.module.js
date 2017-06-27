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
		const pagesPath = "./dist/templates/pages";
		// Routes configuration
		$routeProvider
			.when("/", { redirectTo: "/customers" })
			.when("/login", { templateUrl: `${pagesPath}/auth/login/template/login.template.html` })
			.when("/customers", { templateUrl: `${pagesPath}/customers/template/customers.template.html` })
			.when("/customers/create", { templateUrl: `${pagesPath}/customers/template/create-customer.template.html` })
			.when("/customers/:id", { templateUrl: `${pagesPath}/customers/template/edit-customer.template.html` })
			.when("/exercises", { templateUrl: `${pagesPath}/exercises/template/exercises.template.html` })
			.when("/exercises/create", { templateUrl: `${pagesPath}/exercises/template/create-exercise.template.html` })
			.when("/exercises/:id", { templateUrl: `${pagesPath}/exercises/template/edit-exercise.template.html` })
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
	})
	.run(["$rootScope", "$location", "AcadAuth", function($rootScope, $location, AcadAuth) {
		AcadAuth.initializeUserDataFromLocalstorage();

		$rootScope.$on("$routeChangeStart", function(event) {
			const isWhitelisted = $location.path() === "/login" || $location.path() === "/forgot";

			if (!AcadAuth.isLoggedIn() && !isWhitelisted) {
				event.preventDefault();
				$location.path("/login");
			}
		});
	}]);
