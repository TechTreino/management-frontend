<?php

namespace AcademiaDigital\Routing;

class Exercise extends Routing
{
	public function __construct($app)
	{
		parent::__construct($app);
	}

	public function configure()
	{
		$this->app->get("/exercises", "ExerciseController:getAll");
		$this->app->get("/exercises/{id}", "ExerciseController:getOne");
		$this->app->post("/exercises", "ExerciseController:create");
		$this->app->post("/exercises/{id}", "ExerciseController:update");
		$this->app->delete("/exercises/{id}", "ExerciseController:delete");
	}
}