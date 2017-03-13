<?php

namespace AcademiaDigital\Controller;
use JMS\Serializer\Naming\IdenticalPropertyNamingStrategy;
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
		$customers = $this->customerService->getAll();

		$serializer = \JMS\Serializer\SerializerBuilder::create()
			->setPropertyNamingStrategy(new IdenticalPropertyNamingStrategy())
			->build();

		$data = $serializer->serialize($customers, "json");
		return $response->write($data)->withHeader("Content-Type", "application/json;charset=utf-8");
	}
}