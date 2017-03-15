<?php

namespace AcademiaDigital\Service;

use AcademiaDigital\Util\MD5;
use Doctrine\ORM\EntityManager;

class Customer
{
	protected $entityManager;
	protected $customerRepository;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
		$this->customerRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\Customer");
	}

	public function getAll()
    {
		$customers = $this->customerRepository->findAll();
		return $customers;
    }

    public function getOne($id)
	{
		return $this->customerRepository->findOneBy(array("id" => $id));
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

	public function update($id, $firstName, $lastName, $email)
	{
		$customer = $this->customerRepository->findOneBy(["id" => $id]);
		$customer->setFirstName($firstName);
		$customer->setLastName($lastName);
		$customer->setEmail($email);
		$this->entityManager->persist($customer);
		$this->entityManager->flush();

		return $customer;
	}

	public function delete($id)
	{
		$customer = $this->customerRepository->findOneBy(["id" => $id]);
		$this->entityManager->remove($customer);
		$this->entityManager->flush();
	}
}