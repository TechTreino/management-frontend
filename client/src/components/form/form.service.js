"use strict";

(function(){

angular
	.module("AcadForm")
	.service("AcadFormService", [Service]);

function Service()
{
	this.hasAnyCharacter = function(content)
	{
		return (content && content.toString().length > 0);
	};
}

})();