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
		"Customers"
	])
	.config(function($routeProvider){

		$routeProvider
		.when("/", { redirectTo: "/customers" })
		.when("/customers", { templateUrl: "./templates/pages/customers/template/customers.template.html" })
		.when("/customers/create", { templateUrl: "./templates/pages/customers/template/create-customer.template.html" })
		.when("/customers/:id", { templateUrl: "./templates/pages/customers/template/edit-customer.template.html" })
	});