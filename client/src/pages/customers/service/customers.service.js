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
}

})();