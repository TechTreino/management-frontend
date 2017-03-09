<?php

namespace AcademiaDigital\Service;
use Doctrine\ORM\EntityManager;

class Base
{
	protected $entityManager;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
	}
}