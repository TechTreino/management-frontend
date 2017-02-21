import { Document, Schema, Model, model } from "mongoose";
import { IExercise } from "./exercise.interface";

/*
 * Create an interface which joins both ICustomer and Document
 * properties.
 */
export interface IExerciseModel extends IExercise, Document {}

/*
 * Schema definition.
 */
export var ExerciseSchema: Schema = new Schema({
	createdAt: Date,
	modifiedAt: Date,
	name: String
});

/*
 * Define a save hook.
 */
ExerciseSchema.pre("save", next => {
	let rightNow = new Date();

	if(!this.createdAt)
		this.createdAt = rightNow;

	this.modifiedAt = rightNow;

	next();
});

/*
 * Define the model as a Schema
 */
export const Exercise: Model<IExerciseModel> = model<IExerciseModel>("Exercise", ExerciseSchema);