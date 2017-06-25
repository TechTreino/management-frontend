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
		"Customers",
		"Exercises",
		"MuscleGroups",
		"Trainings"
	])
	.config(function($routeProvider, $httpProvider, AcadSidebarProvider) {
		// Routes configuration
		$routeProvider
			.when("/", { redirectTo: "/customers" })
			.when("/customers", {
				templateUrl: "./dist/templates/pages/customers/template/customers.template.html"
			})
			.when("/customers/create", {
				templateUrl: "./dist/templates/pages/customers/template/create-customer.template.html"
			})
			.when("/customers/:id", {
				templateUrl: "./dist/templates/pages/customers/template/edit-customer.template.html"
			})
			.when("/exercises", {
				templateUrl: "./dist/templates/pages/exercises/template/exercises.template.html"
			})
			.when("/exercises/create", {
				templateUrl: "./dist/templates/pages/exercises/template/create-exercise.template.html"
			})
			.when("/exercises/:id", {
				templateUrl: "./dist/templates/pages/exercises/template/edit-exercise.template.html"
			})
			.when("/trainings", {
				templateUrl: "./dist/templates/pages/trainings/template/trainings-customers-list.template.html"
			})
			.when("/trainings/:id", {
				templateUrl: "./dist/templates/pages/trainings/template/trainings-customer.template.html"
			});

		// Menu configuration
		AcadSidebarProvider.config.menu = [
			{ id: "customers", text: "Alunos", link: "#!/customers/" },
			{ id: "exercises", text: "Exercícios", link: "#!/exercises/" },
			{ id: "trainings", text: "Fichas", link: "#!/trainings/" }
		];
	});
