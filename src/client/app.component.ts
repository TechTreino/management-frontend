import { Component } from "@angular/core";

@Component({
    selector: "ad-app",
    template: `
		<h1>My First {{name}} app</h1>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor(){}
}