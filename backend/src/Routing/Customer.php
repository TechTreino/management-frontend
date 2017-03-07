<?php

namespace AcademiaDigital\Routing;

class Customer extends Base
{
    public function __construct($app)
    {
        parent::__construct($app);
    }

    public function initialize()
    {
        $this->app->get("/customers", "CustomerController:getAll");
    }
}