import { NextFunction, Response, Request, Router } from "express";
import { DashboardController } from "./dashboard.controller";

/**
 * /dashboard route
 *
 * @class DashboardRoute
 */
export class DashboardRoute 
{
	public static create(router: Router)
	{
		let controller = DashboardController.getInstance();
		router.get("/dashboard", controller.data);
	}
}