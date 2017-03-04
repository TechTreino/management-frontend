<?php

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
(new AcademiaDigital\Routing\Customer($app))->initialize();

/*
 * Runs the app
 */
$app->run();