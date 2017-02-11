import { Route, RouterModule } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { TrainingsComponent } from "./pages/trainings/trainings.component";

export const routes: Route[] = [
    { path: "", pathMatch: "full", redirectTo: "/dashboard" },
    { path: "dashboard", component: DashboardComponent },
    { path: "customers", component: CustomersComponent },
    { path: "trainings", component: TrainingsComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });