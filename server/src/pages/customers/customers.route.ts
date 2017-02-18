import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./../../routes/base-route";
import { CustomersController } from "./customers.controller";


export class CustomersRouting extends BaseRoute 
{
	public static initialize(router: Router)
	{
		router.get("/customers", CustomersController.findAll);
	}

	constructor()
	{
		super();
	}
}