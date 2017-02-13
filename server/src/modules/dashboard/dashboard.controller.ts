import { Request, Response, NextFunction } from "express"

/**
 * Dashboard Controller
 *
 * @class DashboardController
 */
export class DashboardController 
{
	/**
	 * Reference for singleton.
	 *
	 * @class DashboardController
	 */
	private static controller: DashboardController;

	/**
	 * Get an already existent instance for singleton.
	 *
	 * @class DashboardController
	 * @method getInstance()
	 * @returns {DashboardController} - An instance of DashboardController
	 */
	public static getInstance(): DashboardController
	{
		if(!this.controller) this.controller = (new DashboardController());
		return this.controller;
	}

	/**
	 * Constructor.
	 *
	 * @class DashboardController
	 * @constructor
	 */
	private constructor(){}

	/**
	 * Send the data required by dashboard screen.
	 *
	 * @class DashboardController
	 * @method data
	 */
	public data(req: Request, res: Response, next?: NextFunction)
	{
		let response: Object = [{"message": "Data comes here"}];
		res.jsonp(response);
	}
}