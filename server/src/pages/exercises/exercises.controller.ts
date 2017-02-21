import { Request, Response, NextFunction } from "express";
import { Exercise, IExerciseModel } from "./../../model/exercise/exercise.schema";

export class ExercisesController
{
	constructor(){}

	public static findAll(request: Request, response: Response, next: NextFunction)
	{
		Exercise.find().then( (exercises: IExerciseModel[]) => {
			response.jsonp(exercises);
		});
	}

	public static create(request: Request, response: Response, next: NextFunction)
	{
		let exercise = request.body;
		(new Exercise(exercise)).save().then( () => {
			response.status(200).send({ message: "Exercise created" });
		});
	}

	public static findById(request: Request, response: Response, next: NextFunction)
	{
		let id = request.params.id;
		Exercise.findById(id).then( (exercise: IExerciseModel) => {
			response.jsonp(exercise);
		});
	}

	public static update(request: Request, response: Response, next: NextFunction)
	{
		let id = request.params.id;
		let exercise = request.body;
		let updateQuery = {
			$set: { 
				firstName: exercise.firstName,
				lastName: exercise.lastName,
				email: exercise.email
			}
		};

		Exercise.findByIdAndUpdate(id, updateQuery).then( () => {
			response.status(200).send({ message: "Exercise updated" });
		});
	}

	public static delete(request: Request, response: Response, next: NextFunction)
	{
		let id = request.params.id;

		Exercise.remove({ _id: id }).then( () => {
			response.status(200).send({ message: "Exercise deleted" });
		});
	}
}