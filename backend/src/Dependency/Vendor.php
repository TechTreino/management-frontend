<?php

namespace AcademiaDigital\Dependency;

use Interop\Container\ContainerInterface;

class Vendor extends Dependency
{
	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);
	}

	public function inject(){}
}