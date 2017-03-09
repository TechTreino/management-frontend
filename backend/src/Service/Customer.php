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
        $customerRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\Customer");
		$customers = (array) $customerRepository->findAll();
		return $customers;
    }
}