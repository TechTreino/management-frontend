import { Component } from "@angular/core";

@Component({
	selector: "ad-sidebar",
	template: require("./sidebar.component.html"),
	styles: [ require("./sidebar.component.sass").toString() ]
})
export class SidebarComponent {}