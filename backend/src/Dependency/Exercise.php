<?php

namespace AcademiaDigital\Dependency;
use Interop\Container\ContainerInterface;
use Slim\Container;
use AcademiaDigital\Service;
use AcademiaDigital\Controller;

class Exercise extends Dependency
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
		$this->container["ExerciseService"] = function(Container $c){
			$entityManager = $c->get("EntityManager");
			return new Service\Exercise($entityManager);
		};
	}

	protected function injectController()
	{
		$this->container["ExerciseController"] = function(Container $c){
			$exerciseService = $c->get("ExerciseService");
			return new Controller\Exercise($exerciseService);
		};
	}
}