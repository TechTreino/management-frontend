import { Request, Response, NextFunction } from "express";
import { Customer, ICustomerModel } from "./../../model/customer/customer.schema";

export class CustomersController
{
	constructor(){}

	public static findAll(request: Request, response: Response, next: NextFunction)
	{
		Customer.find().then( (customers: ICustomerModel[]) => {
			response.jsonp(customers);
		});
	}
}