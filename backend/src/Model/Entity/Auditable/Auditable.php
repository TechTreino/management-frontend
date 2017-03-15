<?php

namespace AcademiaDigital\Model\Entity\Auditable;
use Doctrine\Common\Persistence\Event\PreUpdateEventArgs;

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
}