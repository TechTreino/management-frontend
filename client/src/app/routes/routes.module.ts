import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./../pages/dashboard/dashboard.component";
import { CustomersComponent } from "./../pages/customers/customers.component";
import { TrainingsComponent } from "./../pages/trainings/trainings.component";

const routes: Routes = [
	{ path: "", redirectTo: "/customers", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "customers", component: CustomersComponent },
	{ path: "trainings", component: TrainingsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutesModule {}