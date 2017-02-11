import { Route, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./pages/authentication.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { TrainingsComponent } from "./pages/trainings/trainings.component";

export const routes: Route[] = [
    { path: "", pathMatch: "full", component: AuthenticationComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "customers", component: CustomersComponent },
    { path: "trainings", component: TrainingsComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });