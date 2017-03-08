<?php

use AcademiaDigital\Controller;
use AcademiaDigital\Service;

/*
 * Configures the Slim application
 */
$config["displayErrorDetails"] = true;
$app = new \Slim\App(["settings" => $config]);

/*
 * Register - manually, unfortunately - all controllers
 */
$container = $app->getContainer();

// Customer
$container["CustomerService"] = function(){
    return new Service\Customer();
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