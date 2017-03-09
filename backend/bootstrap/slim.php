<?php

use AcademiaDigital\Controller;
use AcademiaDigital\Service;

/*
 * Configures the Slim application
 */
$slimConfig["displayErrorDetails"] = true;
$app = new \Slim\App(["settings" => $slimConfig]);

/*
 * Register - manually, unfortunately - all controllers
 */
$container = $app->getContainer();

// Doctrine Entity Manager
$container["EntityManager"] = function(){
	global $entityManager;
	return $entityManager; // located at ./doctrine.php file
};

// Customer
$container["CustomerService"] = function(Slim\Container $c){
	$entityManager = $c->get("EntityManager");
    return new Service\Customer($entityManager);
};
$container["CustomerController"] = function(Slim\Container $c){
    $customerService = $c->get("CustomerService");
    return new Controller\Customer($customerService);
};

/*
 * Register - manually, unfortunately - all routes
 */
(new AcademiaDigital\Routing\Customer($app))->initialize();

/*
 * Runs the app
 */
$app->run();