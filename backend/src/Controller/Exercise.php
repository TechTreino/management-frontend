<?php

namespace AcademiaDigital\Controller;
use Slim\Http\Response;
use Slim\Http\Request;
use AcademiaDigital\Service;

class Exercise extends Controller
{
	protected $exerciseService;

	public function __construct(Service\Exercise $exerciseService)
	{
		$this->exerciseService = $exerciseService;
	}

	public function getAll(Request $request, Response $response)
	{
		$exercises = $this->exerciseService->getAll();
		return $this->respond($response, $exercises);
	}

	public function getOne(Request $request, Response $response, array $args)
	{

	}

	public function create(Request $request, Response $response)
	{

	}

	public function update(Request $request, Response $response, array $args)
	{

	}

	public function delete(Request $request, Response $response, array $args)
	{

	}
}