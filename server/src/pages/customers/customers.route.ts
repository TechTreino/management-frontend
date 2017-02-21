import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./../../routes/base-route";
import { CustomersController } from "./customers.controller";


export class CustomersRouting extends BaseRoute 
{
	public static initialize(router: Router)
	{
		router.get("/customers", CustomersController.findAll);
		router.post("/customers", CustomersController.create);
		router.get("/customers/:id", CustomersController.findById);
		router.post("/customers/:id", CustomersController.update);
		router.delete("/customers/:id", CustomersController.delete);
	}

	constructor()
	{
		super();
	}
}