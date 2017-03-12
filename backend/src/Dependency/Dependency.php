<?php

namespace AcademiaDigital\Dependency;
use Interop\Container\ContainerInterface;

abstract class Dependency
{
	/**
	 * The application's container.
	 *
	 * @var Container
	 */
	protected $container;

	/**
	 * Dependency constructor.
	 *
	 * @param ContainerInterface $container
	 */
	public function __construct(ContainerInterface $container)
	{
		$this->container = $container;
	}

	/**
	 * Declare all dependencies.
	 *
	 * @return mixed
	 */
	public abstract function inject();
}