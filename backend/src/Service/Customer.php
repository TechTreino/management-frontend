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
		$customers = $customerRepository->findAll();
		return $customers;
    }

    public function create($firstName, $lastName, $email, $password)
	{
		$customer = new \AcademiaDigital\Model\Entity\Customer();
		$customer->setFirstName($firstName);
		$customer->setLastName($lastName);
		$customer->setEmail($email);
		$customer->setPassword("e8d95a51f3af4a3b134bf6bb680a213a");
		$customer->setCreatedAt(new \DateTime());
		$customer->setModifiedAt(new \DateTime());
		$this->entityManager->persist($customer);
		$this->entityManager->flush();
		return true;
	}
}