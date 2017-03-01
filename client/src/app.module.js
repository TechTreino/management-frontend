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
		"AcadForm",
		"AcadModal",
		"Customers",
		"Exercises"
	])
	.config(function($routeProvider, AcadSidebarProvider){

		// Routes configuration
		$routeProvider
		.when("/", { redirectTo: "/customers" })
		
		.when("/customers", { templateUrl: "./assets/templates/pages/customers/template/customers.template.html" })
		.when("/customers/create", { templateUrl: "./assets/templates/pages/customers/template/create-customer.template.html" })
		.when("/customers/:id", { templateUrl: "./assets/templates/pages/customers/template/edit-customer.template.html" })
	
		.when("/exercises", { templateUrl: "./assets/templates/pages/exercises/template/exercises.template.html" })
		.when("/exercises/create", { templateUrl: "./assets/templates/pages/exercises/template/create-exercise.template.html" })
		.when("/exercises/edit", { templateUrl: "./assets/templates/pages/exercises/template/edit-exercise.template.html" })

		console.log(AcadSidebarProvider);

		// Menu configuration
		AcadSidebarProvider.config.menu = [
			{ id: "dashboard", text: "Dashboard", link: "#!/dashboard/" },
			{ id: "customers", text: "Alunos", link: "#!/customers/" },
			{ id: "exercises", text: "Exercícios", link: "#!/exercises/" }
		];

	});