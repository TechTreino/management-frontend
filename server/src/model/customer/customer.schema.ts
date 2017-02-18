import { Document, Schema, Model, model } from "mongoose";
import { ICustomer } from "./customer.interface";

/*
 * Create an interface which joins both ICustomer and Document
 * properties.
 */
export interface ICustomerModel extends ICustomer, Document
{
	fullName(): string;
}

/*
 * Schema definition.
 */
export var CustomerSchema: Schema = new Schema({
	createdAt: Date,
	modifiedAt: Date,
	email: String,
	firstName: String,
	lastName: String
});

/*
 * Define a save hook.
 */
CustomerSchema.pre("save", next => {
	let rightNow = new Date();

	if(!this.createdAt)
		this.createdAt = rightNow;

	this.modifiedAt = rightNow;

	next();
});

/*
 * Model methods.
 */
CustomerSchema.methods.fullName = function(): string
{
	return (this.firstName.trim() + " " + this.lastName.trim());
}

/*
 * Define the model as a Schema
 */
export const Customer: Model<ICustomerModel> = model<ICustomerModel>("Customer", CustomerSchema);