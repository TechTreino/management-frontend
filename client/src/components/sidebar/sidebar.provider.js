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

			function getMenu()
			{
				return configuration.menu;
			}

			function addMenu(id, text, link)
			{
				configuration.menu.push({id: id, text: text, link: link});
			}

			function setActive(id)
			{
				configuration.menu.forEach(function(menu){
					menu.__isActive = (menu.id === id);
				});
			}

			return {
				__menu: configuration.menu,
				getMenu: getMenu,
				addMenu: addMenu,
				setActive: setActive
			};
		}

		return {
			$get: AcadSidebar,
			config: configuration
		};
	}

})();