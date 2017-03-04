<?php

use \AcademiaDigital\Routing;

/*
 * Requires Composer's autoloader
 */
require 'vendor/autoload.php';

/*
 * Configures the Slim application
 */
$config["displayErrorDetails"] = true;
$app = new \Slim\App(["settings" => $config]);

/*
 * Register - manually, unfortunately - all routes
 */
(new Routing\CustomerRouting($app))->initialize();

/*
 * Runs the app
 */
$app->run();
