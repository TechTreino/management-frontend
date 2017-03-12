<?php

namespace AcademiaDigital\Routing;

class Customer extends Routing
{
	public function __construct($app)
	{
		parent::__construct($app);
	}

	public function configure()
	{
		$this->app->get("/customers", "CustomerController:getAll");
	}
}