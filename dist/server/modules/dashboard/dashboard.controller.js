"use strict";
class DashboardController {
    static getInstance() {
        if (!this.controller)
            this.controller = (new DashboardController());
        return this.controller;
    }
    constructor() { }
    data(req, res, next) {
        let response = [{ "message": "Data comes here" }];
        res.jsonp(response);
    }
}
exports.DashboardController = DashboardController;
