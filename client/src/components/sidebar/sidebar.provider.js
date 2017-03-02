"use strict";

(function(){

	angular
		.module("AcadSidebar")
		.provider("AcadSidebar", Provider);

	function Provider()
	{
		// Values acessed by config phase
		var configuration = { 
			menu: []
		};

		// Factory function (can be injected as a service)
		function AcadSidebar(){

			function getMenu()
			{
				return configuration.menu;
			}

			function addMenuItem(id, text, link)
			{
				configuration.menu.push({id: id, text: text, link: link});
			}

			function setActiveItem(id)
			{
				configuration.menu.forEach(function(menu){
					menu.__isActive = (menu.id === id);
				});
			}

			return {
				__menu: configuration.menu,
				getMenu: getMenu,
				addMenuItem: addMenuItem,
				setActiveItem: setActiveItem
			};
		}

		return {
			$get: AcadSidebar,
			config: configuration
		};
	}

})();
