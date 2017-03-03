import { Document, Schema, Model, model } from "mongoose";
import { IMuscleGroup } from "../muscle-group/muscle-group.schema";

/*
 * Create an interface which joins both ICustomer and Document
 * properties.
 */
export interface IExercise extends Document 
{
	createdAt: Date;
	modifiedAt: Date;
	name: string;
	muscleGroupId: IMuscleGroup;
}

/*
 * Schema definition.
 */
export var ExerciseSchema: Schema = new Schema({
	createdAt: Date,
	modifiedAt: Date,
	name: String,
	muscleGroupId: { type: Schema.Types.ObjectId, ref: "MuscleGroup" }
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
console.log("ExerciseSchema is now defined as a model");
export const Exercise: Model<IExercise> = model<IExercise>("Exercise", ExerciseSchema);
