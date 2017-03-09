<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

// Create a simple "default" Doctrine ORM configuration for Annotations
$isDevMode = true;
$doctrineConfig = Setup::createXMLMetadataConfiguration(array(__DIR__ . "/../src/Model/dcm"), $isDevMode);

// Database configuration parameters
$conn = array(
    "driver"    => "pdo_mysql",
	"host"      => "localhost",
	"dbname"    => "academiadigital",
    "user" 	    => "root",
    "password"  => "root2017"
);

// obtaining the entity manager
$entityManager = EntityManager::create($conn, $doctrineConfig);