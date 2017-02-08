"use strict";
const base_route_1 = require("./base-route");
class IndexRoute extends base_route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating the index route");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Dashboard | Academia Digital";
        let options = { "message": "Bem-vindo à Academia Digital" };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
