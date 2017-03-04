"use strict";

(function(){

angular
	.module("Customers")
	.service("CustomersService", [
		"$http", 
		Service
	]);

function Service($http)
{
	this.all = function()
	{
		return $http.get("/customers");
	};

	this.create = function(customer)
	{
		return $http.post("/customers", customer);
	};

	this.update = function(id, customer)
	{
		return $http.post("/customers/" + id, customer);
	}

	this.byId = function(id)
	{
		return $http.get("/customers/" + id);
	};

	this.delete = function(id)
	{
		return $http.delete("/customers/" + id);
	}
}

})();
