"use strict";

(function(){

angular
	.module("Customers")
	.service("CustomersService", [Service]);

function Service()
{
	this.all = function()
	{
		return [
			{ id: 1, name: "Stanley", registry: "11516519" },
			{ id: 2, name: "Igor", registry: "11512332" },
			{ id: 3, name: "Isabella", registry: "11498832" }
		];
	}
}

})();