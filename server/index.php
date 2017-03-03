<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;
$app->get('/customers', function (Request $request, Response $response) {
    $response->getBody()->write("Hello, motherfucker");
    return $response;
});
$app->run();
