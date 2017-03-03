import { Document, Schema, Model, model } from "mongoose";

/*
 * Create an interface with gets Document properties.
 */
export interface IMuscleGroup extends Document 
{
	createdAt: Date,
	modifiedAt: Date,
	name: string
}

/*
 * Schema definition.
 */
export var MuscleGroupSchema: Schema = new Schema({
	createdAt: Date,
	modifiedAt: Date,
	name: String
});

/*
 * Define a save hook.
 */
MuscleGroupSchema.pre("save", next => {
	let rightNow = new Date();

	if(!this.createdAt)
		this.createdAt = rightNow;

	this.modifiedAt = rightNow;

	next();
});

/*
 * Define the model as a Schema
 */
console.log("MuscleGroup is now defined as a model");
export const MuscleGroup: Model<IMuscleGroup> = model<IMuscleGroup>("MuscleGroup", MuscleGroupSchema);
