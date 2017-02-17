import { Component } from '@angular/core';

@Component({
	selector: "app-root",
	template: "<router-outlet></router-outlet>",
	styles: [ require("./app.component.sass").toString() ]
})
export class AppComponent {}
