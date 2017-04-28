<?php

namespace AcademiaDigital\Routing;

abstract class Routing
{
	/**
	 * Slim app where routes are appended to.
	 *
	 * @var \Slim\App
	 */
	protected $app;

	/**
	 * BaseRouting constructor.
	 *
	 * @param $app
	 */
	public function __construct($app)
	{
		$this->app = $app;
	}

	/**
	 * Declare all routes.
	 *
	 * @return mixed
	 */
	public abstract function configure();
}