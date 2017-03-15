<?php

namespace AcademiaDigital\Model\Entity\Auditable;
use Doctrine\ORM\Event\PreUpdateEventArgs;

interface DoctrineLifecycleInterface
{
	public function onPrePersist();
	public function onPreUpdate(PreUpdateEventArgs $event);
}