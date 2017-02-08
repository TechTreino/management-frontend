import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./base-route";

/**
 * / route
 *
 * @class IndexRoute 
 */
export class IndexRoute extends BaseRoute {

	/**
	 * Create the routes.
	 *
	 * @class IndexRoute
	 * @method create
	 * @static
	 */
	public static create(router: Router)
	{
		console.log("[IndexRoute::create] Creating the index route");
		router.get("/", (req: Request, res: Response, next: NextFunction) => {
			new IndexRoute().index(req, res, next);
		});
	}

	/**
	 * Constructor
	 *
	 * @class IndexRoute
	 * @constructor
	 */
	constructor()
	{
		super();
	}

	/**
	 * The home page route.
	 *
	 * @class IndexRoute
	 * @method index
	 * @param req {Request} - The Express Request object
	 * @param res {Response} - The Express Response object
	 * @next {NextFunction} - Execute the next method
	 */
	public index(req: Request, res: Response, next: NextFunction)
	{
		this.title = "Dashboard | Academia Digital";
		let options: Object = {"message": "Bem-vindo à Academia Digital"};

		this.render(req, res, "index", options);
	}
}