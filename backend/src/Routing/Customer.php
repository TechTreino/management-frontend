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
		$this->app->get("/customers/{id}", "CustomerController:getOne");
		$this->app->post("/customers", "CustomerController:create");
		$this->app->post("/customers/{id}", "CustomerController:update");
		$this->app->delete("/customers/{id}", "CustomerController:delete");
	}
}
