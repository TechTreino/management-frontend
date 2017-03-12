<?php

namespace AcademiaDigital\Service;

use Doctrine\ORM\EntityManager;

class Customer
{
	protected $entityManager;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
	}

	public function getAll()
    {
        return array(
        	array("firstName" => "Stanley", "lastName" => "Sathler"),
			array("firstName" => "Bella", "lastName" => "Garbazza"),
		);
    }
}