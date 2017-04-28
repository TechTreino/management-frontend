<?php

namespace AcademiaDigital\Controller;
use Slim\Http\Response;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\Naming\IdenticalPropertyNamingStrategy;

abstract class Controller
{
	/**
	 * @var \JMS\Serializer\Serializer
	 */
	protected $serializer;

	protected function respond(Response $response, $data = null)
	{
		if(null == $this->serializer)
			$this->buildSerializer();

		$serializedData = $this->serializer->serialize($data, "json");
		return $response->write($serializedData)->withHeader("Content-Type", "application/json;charset=utf-8");
	}

	private function buildSerializer()
	{
		$this->serializer = SerializerBuilder::create()
			->setPropertyNamingStrategy(new IdenticalPropertyNamingStrategy())
			->build();
	}
}