"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.provider("AcadSidebar", Provider);

	function Provider()
	{
		// Values acessed by config phase
		var configuration = { menu: [] };

		// Factory function (can be injected as a service)
		function AcadSidebar(){
			return {
				menu: configuration.menu
			};
		}

		return {
			$get: AcadSidebar,
			config: configuration
		};
	}

})();