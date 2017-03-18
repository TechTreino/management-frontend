<?php

namespace AcademiaDigital\Model\Entity;

class MuscleGroup
{
	protected $id;
	protected $name;
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

	public function getCreatedAt()
	{
		return $this->createdAt;
	}

	public function setCreatedAt($createdAt)
	{
		$this->createdAt = $createdAt;
	}

	public function getModifiedAt()
	{
		return $this->modifiedAt;
	}

	public function setModifiedAt($modifiedAt)
	{
		$this->modifiedAt = $modifiedAt;
	}
}