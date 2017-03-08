<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

// Create a simple "default" Doctrine ORM configuration for Annotations
$isDevMode = true;
$config = Setup::createXMLMetadataConfiguration(array(__DIR__ . "/../src/Model/DCM"), $isDevMode);

// Database configuration parameters
// I DONT KNOW IF THIS IS CORRECT YET
$conn = array(
    "driver" => "pdo_mysql",
    "dbname" => "academiadigital",
    "host" => "localhost",
    "user" => "root",
    "password" => "root2017"
);

// obtaining the entity manager
$entityManager = EntityManager::create($conn, $config);