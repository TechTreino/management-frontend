"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.controller("AcadCrudBoxItemController", [
			"$scope", 
			Controller
		]);

	function Controller($scope)
	{
		$scope.getColumnValue = function(item, column)
		{
			if(!column.value) 
				throw new Error("Columns need to have 'value' property");

			var chainOfKeys = column.value.split(".");
			var finalResult = item[chainOfKeys[0]];
			for(var i = 1; i < chainOfKeys.length; i++)
				finalResult =  finalResult[chainOfKeys[i]];
			
			return finalResult;
		};
	}

})();
