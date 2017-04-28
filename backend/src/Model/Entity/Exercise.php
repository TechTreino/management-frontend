<?php

namespace AcademiaDigital\Model\Entity;
use AcademiaDigital\Model\Entity\Auditable\Auditable;

class Exercise extends Auditable
{
	protected $id;
	protected $name;
	protected $muscleGroup;
	protected $createdAt;
	protected $modifiedAt;

	public function getId()
	{
		return $this->id;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setName($name)
	{
		$this->name = $name;
	}

	public function getMuscleGroup()
	{
		return $this->muscleGroup;
	}

	public function setMuscleGroup($muscleGroup)
	{
		$this->muscleGroup = $muscleGroup;
	}
}