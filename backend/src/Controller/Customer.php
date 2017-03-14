<?php

namespace AcademiaDigital\Controller;
use JMS\Serializer\Naming\IdenticalPropertyNamingStrategy;
use Slim\Http\Response;
use Slim\Http\Request;
use AcademiaDigital\Service;

class Customer extends Controller
{
	protected $customerService;

	public function __construct(Service\Customer $customerService)
	{
		$this->customerService = $customerService;
	}

	public function getAll(Request $request, Response $response)
	{
		$customers = $this->customerService->getAll();
		return $this->respond($response, $customers);
	}
}