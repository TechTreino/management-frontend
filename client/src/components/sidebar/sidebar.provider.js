"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.provider("AcadSidebar", Provider);

	function Provider()
	{
		// Values acessed by config phase
		var configure = {
			menu: []
		};

		// Factory function
		function AcadSidebar(){
			return {
				menu: configure.menu
			};
		}

		return {
			$get: AcadSidebar,
			configure: configure
		};
	}

})();