import { Document, Schema, Model, model } from "mongoose";
import { IMuscleGroup } from "./muscle-group.interface";

/*
 * Create an interface which joins both IMuscleGroup and Document
 * properties.
 */
export interface IMuscleGroupModel extends IMuscleGroup, Document {}

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
console.log("MuscleGroup should be defined");
export const MuscleGroup: Model<IMuscleGroupModel> = model<IMuscleGroupModel>("MuscleGroup", MuscleGroupSchema);