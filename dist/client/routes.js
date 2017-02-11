"use strict";
const router_1 = require("@angular/router");
const dashboard_component_1 = require("./pages/dashboard/dashboard.component");
const customers_component_1 = require("./pages/customers/customers.component");
const trainings_component_1 = require("./pages/trainings/trainings.component");
exports.routes = [
    { path: "", pathMatch: "full", redirectTo: "/dashboard" },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "customers", component: customers_component_1.CustomersComponent },
    { path: "trainings", component: trainings_component_1.TrainingsComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
