<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

/*
 * Configures where .dcm files are stored and which type they are
 */
$isDevMode = true;
$doctrineConfig = Setup::createXMLMetadataConfiguration(array(__DIR__ . "/../src/Model/dcm"), $isDevMode);

/*
 * Database configuration parameters
 */
$doctrineConnection = array(
	"driver"    => "pdo_mysql",
	"host"      => "localhost",
	"dbname"    => "academiadigital",
	"user" 	    => "root",
	"password"  => "root2017",
	"charset"	=> "utf8"
);

/*
 * Creating the Entity Manager
 */
$entityManager = EntityManager::create($doctrineConnection, $doctrineConfig);
