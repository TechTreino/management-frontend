"use strict";
const dashboard_controller_1 = require("./dashboard.controller");
class DashboardRoute {
    static create(router) {
        let controller = dashboard_controller_1.DashboardController.getInstance();
        router.get("/dashboard", controller.data);
    }
}
exports.DashboardRoute = DashboardRoute;
