<?php

namespace AcademiaDigital\Service;

use AcademiaDigital\Util\MD5;
use Doctrine\ORM\EntityManager;

class Exercise
{
	protected $entityManager;
	protected $exerciseRepository;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
		$this->exerciseRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\Exercise");
	}

	public function getAll()
	{
		$exercises = $this->exerciseRepository->findAll();
		return $exercises;
	}

	public function getOne($id)
	{

	}

	public function create($firstName, $lastName, $email, $password)
	{

	}

	public function update($id, $firstName, $lastName, $email)
	{

	}

	public function delete($id)
	{

	}
}