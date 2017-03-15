<?php

namespace AcademiaDigital\Service;

use AcademiaDigital\Util\MD5;
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
		$customers = $customerRepository->findAll();
		return $customers;
    }

    public function create($firstName, $lastName, $email, $password)
	{
		$customer = new \AcademiaDigital\Model\Entity\Customer();
		$customer->setFirstName($firstName);
		$customer->setLastName($lastName);
		$customer->setEmail($email);
		$customer->setPassword(MD5::hash($password));
		$this->entityManager->persist($customer);
		$this->entityManager->flush();
		return true;
	}
}