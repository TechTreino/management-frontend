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
(new AcademiaDigital\Dependency\Customer($slimContainer))->inject();
(new AcademiaDigital\Dependency\Exercise($slimContainer))->inject();

/*
 * Routes
 */
(new Routing\Customer($slimApplication))->configure();
(new Routing\Exercise($slimApplication))->configure();

/*
 * Runs the app
 */
$slimApplication->run();