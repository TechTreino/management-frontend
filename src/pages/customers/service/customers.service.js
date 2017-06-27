"use strict";

(function() {
angular
	.module("Customers")
	.service("CustomersService", [
		"AcadHttp",
		Service
	]);

function Service(AcadHttp) {
	this.all = function() {
		return AcadHttp.get("/users/customers");
	};

	this.create = function(customer) {
		return AcadHttp.post("/customers", customer);
	};

	this.update = function(id, customer) {
		return AcadHttp.post("/customers/" + id, customer);
	};

	this.byId = function(id) {
		return AcadHttp.get("/customers/" + id);
	};

	this.delete = function(id) {
		return AcadHttp.delete("/customers/" + id);
	};
}
})();
