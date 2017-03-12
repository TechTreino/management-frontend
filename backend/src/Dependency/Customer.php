<?php

namespace AcademiaDigital\Dependency;
use Interop\Container\ContainerInterface;
use Slim\Container;
use AcademiaDigital\Service;
use AcademiaDigital\Controller;

class Customer extends Dependency
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
		$this->container["CustomerService"] = function(Container $c){
			$entityManager = $c->get("EntityManager");
			return new Service\Customer($entityManager);
		};
	}

	protected function injectController()
	{
		$this->container["CustomerController"] = function(Container $c){
			$customerService = $c->get("CustomerService");
			return new Controller\Customer($customerService);
		};
	}
}