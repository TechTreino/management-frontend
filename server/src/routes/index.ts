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
		this.title = "Dashboard";
		let options: Object = {"message": "This message is coming from the server"};
		res.jsonp(options);
		//this.render(req, res, "index", options);
	}
}