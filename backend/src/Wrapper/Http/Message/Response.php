<?php

namespace AcademiaDigital\Http\Message;
use Slim\Http\Response as SlimResponse;

/**
 * Class Response
 * @package AcademiaDigital\Http\Message\Response
 *
 * This class just wraps Slim's default Response with
 * shorter method names.
 */
class Response extends SlimResponse
{
    /**
     * Sends a response using JSON encoding.
     *
     * @param $data
     * @param null $status
     * @param int $encodingOptions
     */
	public function send($data, $status = null, $encodingOptions = 0)
    {
        $this->withJson($data, $status, $encodingOptions);
    }
}
