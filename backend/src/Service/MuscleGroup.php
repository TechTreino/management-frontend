<?php

namespace AcademiaDigital\Service;

use AcademiaDigital\Util\MD5;
use Doctrine\ORM\EntityManager;

class MuscleGroup
{
	protected $entityManager;
	protected $muscleGroupRepository;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
		$this->muscleGroupRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\MuscleGroup");
	}

	public function getAll()
    {
		$muscleGroups = $this->muscleGroupRepository->findAll();
		return $muscleGroups;
    }
}
