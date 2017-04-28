<?php

namespace AcademiaDigital\Service;
use Doctrine\ORM\EntityManager;

abstract class Service
{
	protected $entityManager;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
	}
}