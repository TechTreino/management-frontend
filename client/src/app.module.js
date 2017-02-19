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
		"Customers"
	])
	.config(function($routeProvider){
		$routeProvider
		.when("/", { redirectTo: "/customers" })
		.when("/customers", { templateUrl: "./templates/pages/customers/template/customers.template.html" })
		.when("/customers/create", { templateUrl: "./templates/pages/customers/template/create-customer.template.html" })
	});