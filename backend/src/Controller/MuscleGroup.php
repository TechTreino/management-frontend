<?php

namespace AcademiaDigital\Controller;
use Slim\Http\Response;
use Slim\Http\Request;
use AcademiaDigital\Service;

class MuscleGroup extends Controller
{
	protected $muscleGroupService;

	public function __construct(Service\MuscleGroup $muscleGroupService)
	{
		$this->muscleGroupService = $muscleGroupService;
	}

	public function getAll(Request $request, Response $response)
	{
		$muscleGroups = $this->muscleGroupService->getAll();
		return $this->respond($response, $muscleGroups);
	}
}
