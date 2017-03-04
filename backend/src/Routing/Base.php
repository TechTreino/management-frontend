<?php

namespace AcademiaDigital\Routing;
use Psr\Http\Message\ServerRequestInterface as Request;

abstract class BaseRouting
{
    /**
     * Slim app where routes are appended to.
     *
     * @var \Slim\App
     */
    protected $app;

    /**
     * BaseRouting constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Declare all routes.
     *
     * @return mixed
     */
    public abstract function initialize();
}