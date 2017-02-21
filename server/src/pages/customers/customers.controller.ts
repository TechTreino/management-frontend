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

	public static create(request: Request, response: Response, next: NextFunction)
	{
		let customer = request.body;
		(new Customer(customer)).save().then( () => {
			response.status(200).send({ message: "Customer created" });
		});
	}

	public static findById(request: Request, response: Response, next: NextFunction)
	{
		let id = request.params.id;
		Customer.findById(id).then( (customer: ICustomerModel) => {
			delete customer.password;
			response.jsonp(customer);
		});
	}

	public static update(request: Request, response: Response, next: NextFunction)
	{
		let id = request.params.id;
		let customer = request.body;
		let updateQuery = {
			$set: { 
				firstName: customer.firstName,
				lastName: customer.lastName,
				email: customer.email
			}
		};

		Customer.findByIdAndUpdate(id, updateQuery).then( () => {
			response.status(200).send({ message: "Customer updated" });
		});
	}
}