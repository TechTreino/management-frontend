import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./../../routes/base-route";
import { ExercisesController } from "./exercises.controller";


export class ExercisesRouting extends BaseRoute 
{
	public static initialize(router: Router)
	{
		router.get("/exercises", ExercisesController.findAll);
		router.post("/exercises", ExercisesController.create);
		router.get("/exercises/:id", ExercisesController.findById);
		router.post("/exercises/:id", ExercisesController.update);
		router.delete("/exercises/:id", ExercisesController.delete);
	}

	constructor()
	{
		super();
	}
}