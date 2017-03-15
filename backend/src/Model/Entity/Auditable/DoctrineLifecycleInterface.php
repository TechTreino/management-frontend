<?php

namespace AcademiaDigital\Model\Entity\Auditable;
use Doctrine\Common\Persistence\Event\PreUpdateEventArgs;

interface DoctrineLifecycleInterface
{
	public function onPrePersist();
	public function onPreUpdate(PreUpdateEventArgs $event);
}