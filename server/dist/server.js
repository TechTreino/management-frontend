"use strict";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const customers_route_1 = require("./pages/customers/customers.route");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "/../../client/dist")));
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser("ACADEMIA_DIGITAL_SECRET_KEY"));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }
    ;
    api() { }
    routes() {
        let router = express.Router();
        customers_route_1.CustomersRouting.initialize(router);
        this.app.use(router);
    }
}
exports.Server = Server;
