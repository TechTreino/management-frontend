<?php

namespace AcademiaDigital\Service;

use AcademiaDigital\Util\MD5;
use Doctrine\ORM\EntityManager;

class Exercise
{
	protected $entityManager;
	protected $exerciseRepository;
	protected $muscleGroupRepository;

	public function __construct(EntityManager $entityManager)
	{
		$this->entityManager = $entityManager;
		$this->exerciseRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\Exercise");
		$this->muscleGroupRepository = $this->entityManager->getRepository("AcademiaDigital\\Model\\Entity\\MuscleGroup");
	}

	public function getAll()
	{
		$exercises = $this->exerciseRepository->findAll();
		return $exercises;
	}

	public function getOne($id)
	{
		return $this->exerciseRepository->findOneBy(["id" => $id]);
	}

	public function create($name, $muscleGroupId)
	{
		$exercise = new \AcademiaDigital\Model\Entity\Exercise();
		$muscleGroup = $this->muscleGroupRepository->findOneBy(["id" => $muscleGroupId]);

		$exercise->setName($name);
		$exercise->setMuscleGroup($muscleGroup);

		$this->entityManager->persist($exercise);
		$this->entityManager->flush();
	}

	public function update($id, $name, $muscleGroupId)
	{
		$exercise = $this->exerciseRepository->findOneBy(["id" => $id]);
		$muscleGroup = $this->muscleGroupRepository->findOneBy(["id" => $muscleGroupId]);

		$exercise->setName($name);
		$exercise->setMuscleGroup($muscleGroup);
		$this->entityManager->persist($exercise);
		$this->entityManager->flush();

		return $exercise;
	}

	public function delete($id)
	{
		$exercise = $this->exerciseRepository->findOneBy(["id" => $id]);
		$this->entityManager->remove($exercise);
		$this->entityManager->flush();
	}
}
