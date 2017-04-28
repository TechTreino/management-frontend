<?php

namespace AcademiaDigital\Dependency;
use Interop\Container\ContainerInterface;
use Slim\Container;
use AcademiaDigital\Service;
use AcademiaDigital\Controller;

class MuscleGroup extends Dependency
{
	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);
	}

	public function inject()
	{
		$this->injectService();
		$this->injectController();
	}

	protected function injectService()
	{
		$this->container["MuscleGroupService"] = function(Container $c){
			$entityManager = $c->get("EntityManager");
			return new Service\MuscleGroup($entityManager);
		};
	}

	protected function injectController()
	{
		$this->container["MuscleGroupController"] = function(Container $c){
			$muscleGroupService = $c->get("MuscleGroupService");
			return new Controller\MuscleGroup($muscleGroupService);
		};
	}
}
