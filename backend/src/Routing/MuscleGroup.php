<?php

namespace AcademiaDigital\Routing;

class MuscleGroup extends Routing
{
	public function __construct($app)
	{
		parent::__construct($app);
	}

	public function configure()
	{
		$this->app->get("/muscleGroups", "MuscleGroupController:getAll");
	}
}
