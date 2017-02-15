"use strict";
const base_route_1 = require("./base-route");
class IndexRoute extends base_route_1.BaseRoute {
    static create(router) {
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Dashboard";
        let options = { "message": "This message is coming from the server" };
        res.jsonp(options);
    }
}
exports.IndexRoute = IndexRoute;
