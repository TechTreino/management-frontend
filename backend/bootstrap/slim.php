<?php

use AcademiaDigital\Controller;
use AcademiaDigital\Service;
use AcademiaDigital\Routing;


/*
 * Some application settings
 */
$slimSettings = array(
	"displayErrorDetails" => true,
	"addContentLengthHeader" => false
);


/*
 * Creates an application instance
 */
$slimApplication = new Slim\App(["settings" => $slimSettings]);


/*
 * Container DI
 */
$slimContainer = $slimApplication->getContainer();

// Doctrine Entity Manager
$slimContainer["EntityManager"] = function(){
	global $entityManager;
	return $entityManager; // located at ./doctrine.php file
};

// Customer
$slimContainer["CustomerService"] = function(Slim\Container $c){
	$entityManager = $c->get("EntityManager");
	return new Service\Customer($entityManager);
};

$slimContainer["CustomerController"] = function(Slim\Container $c){
	$customerService = $c->get("CustomerService");
	return new Controller\Customer($customerService);
};


/*
 * Routes
 */
(new Routing\Customer($slimApplication))->configure();


/*
 * Runs the app
 */
$slimApplication->run();