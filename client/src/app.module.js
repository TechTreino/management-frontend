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
		"Customers"
	])
	.config(function($routeProvider){
		$routeProvider
		.when("/", { redirectTo: "/customers" })
		.when("/customers", { templateUrl: "./templates/pages/customers/template/customers.template.html" })
	});