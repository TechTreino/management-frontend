<?php

namespace AcademiaDigital\Model\Entity\Auditable;
use Doctrine\ORM\Event\PreUpdateEventArgs;

abstract class Auditable implements DoctrineLifecycleInterface
{
	protected $createdAt;
	protected $modifiedAt;

	public function onPrePersist()
	{
		$rightNow = new \DateTime();
		$this->createdAt = $rightNow;
		$this->modifiedAt = $rightNow;
	}

	public function onPreUpdate(PreUpdateEventArgs $event)
	{
		$rightNow = new \DateTime();
		$this->modifiedAt = $rightNow;
	}

	public function getCreatedAt()
	{
		return $this->createdAt;
	}

	public function getModifiedAt()
	{
		return $this->modifiedAt;
	}
}