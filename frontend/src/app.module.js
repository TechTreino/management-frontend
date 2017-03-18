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
		"MuscleGroups"
	])
	.config(function($routeProvider, $httpProvider, AcadSidebarProvider){

			// Routes configuration
			$routeProvider
			.when("/", { redirectTo: "/customers" })
			
			.when("/customers", { templateUrl: "./dist/templates/pages/customers/template/customers.template.html" })
			.when("/customers/create", { templateUrl: "./dist/templates/pages/customers/template/create-customer.template.html" })
			.when("/customers/:id", { templateUrl: "./dist/templates/pages/customers/template/edit-customer.template.html" })
		
			.when("/exercises", { templateUrl: "./dist/templates/pages/exercises/template/exercises.template.html" })
			.when("/exercises/create", { templateUrl: "./dist/templates/pages/exercises/template/create-exercise.template.html" })
			.when("/exercises/edit", { templateUrl: "./dist/templates/pages/exercises/template/edit-exercise.template.html" })

			// Menu configuration
			AcadSidebarProvider.config.menu = [
				{ id: "dashboard", text: "Dashboard", link: "#!/dashboard/" },
				{ id: "customers", text: "Alunos", link: "#!/customers/" },
				{ id: "exercises", text: "Exercícios", link: "#!/exercises/" }
			];

	});
