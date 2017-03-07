<?php

namespace AcademiaDigital\Controller;
use Slim\Http\Response;
use Slim\Http\Request;

class Customer
{
    public function getAll(Request $request, Response $response)
    {
        $data = array(
            array("firstName" => "Stanley 2", "lastName" => "Sathler"),
            array("firstName" => "Isabella", "lastName" => "Garbazza")
        );

        $newResponse = $response->withJson($data);
        return $newResponse;
    }
}