"use strict";

(function(){

	angular
		.module("AcadGlobals")
		.factory("AcadRequestInterceptor", Factory);

	function Factory()
	{
		function request(config)
		{
			console.log(config);
		}

		return {
			request: request
		};
	}

})();
