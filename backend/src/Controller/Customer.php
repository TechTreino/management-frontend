<?php

namespace AcademiaDigital\Controller;
use Slim\Http\Response;
use Slim\Http\Request;
use AcademiaDigital\Service;

class Customer
{
    protected $customerService;

    public function __construct(Service\Customer $customerService)
    {
        $this->customerService = $customerService;
    }

    public function getAll(Request $request, Response $response)
    {
        $data = $this->customerService->getAll();
        $newResponse = $response->withJson($data);
        return $newResponse;
    }
}