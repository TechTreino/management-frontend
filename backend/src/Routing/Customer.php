<?php

namespace AcademiaDigital\Routing;
use Slim\Http\Response;
use Slim\Http\Request;

class CustomerRouting extends BaseRouting
{
    public function __construct($app)
    {
        parent::__construct($app);
    }

    public function initialize()
    {
        $this->app->get("/customers", function(Request $request, Response $response){
            $data = array(
                array("firstName" => "Stanley 2", "lastName" => "Sathler"),
                array("firstName" => "Isabella", "lastName" => "Garbazza")
            );

            $newResponse = $response->withJson($data);
            return $newResponse;
        });
    }
}