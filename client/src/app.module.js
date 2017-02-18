"use strict";

angular
	.module("AcademiaDigital", [
		"ngRoute",
		"AcadSidebar",
		"AcadTopbar",
		"AcadContent",
		"AcadTitlebar",
		"AcadTable",
		"AcadBoxItem"
	])
	.config(function($routeProvider){
		$routeProvider
		.when("/", { templateUrl: "./templates/pages/customers/template/customers.template.html" })
		.when("/customers", { templateUrl: "./templates/pages/customers/template/customers.template.html" })
	});