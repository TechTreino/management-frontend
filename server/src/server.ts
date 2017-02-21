/*
 * Dependencies
 */
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

import { CustomersRouting } from "./pages/customers/customers.route";
import { ExercisesRouting } from "./pages/exercises/exercises.route";

/**
 * The server.
 *
 * @class Server
 */
export class Server 
{
	public app: express.Application;

	/**
	 * Bootstrap the application.
	 *
	 * @class Server
	 * @method bootstrap
	 * @static
	 * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
	 */
	public static bootstrap(): Server 
	{
		return new Server();
	}

	/**
	 * Constructor.
	 *
	 * @class Server
	 * @constructor
	 */
	constructor()
	{
		this.app = express();
		this.config();
		this.routes();
		this.api();
	}

	/**
	 * Configure application
	 *
	 * @class Server
	 * @method config
	 */
	public config()
	{
		// Public static files
		this.app.use(express.static(path.join(__dirname, "/../../client/dist")));

		// Configure middlewares
		this.app.use(logger("dev"));
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: true}));
		this.app.use(cookieParser("ACADEMIA_DIGITAL_SECRET_KEY"));
		this.app.use(methodOverride());

		// Catch 404 and forward it to error handler
		this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction){
			err.status = 404;
			next(err);
		});

		// Error handler
		this.app.use(errorHandler());
	};

	/**
	 * Create REST API routes
	 *
	 * @class Server
	 * @method api
	 */
	public api(){}

	/**
	 * Create router
	 *
	 * @class Server
	 * @method api
	 */
	public routes()
	{
		let router: express.Router = express.Router();

		CustomersRouting.initialize(router);
		ExercisesRouting.initialize(router);

		this.app.use(router);
	}
}