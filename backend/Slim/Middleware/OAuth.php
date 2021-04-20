<?php

namespace Middleware\OAuth;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class Middleware
{

    /**
     * @param ServerRequestInterface $req
     * @param ResponseInterface $res
     * @param callable $next
     * @return ResponseInterface
     */
    public function __invoke($req, $res, $next) {
        //do authentication stuff
        $options = [
            "origin" => ['http://localhost'],
            "methods" => ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
            "headers.allow" => ['', 'Authorization', 'Content-Type', 'Content-Length', 'Origin', 'Accept'],
            "credentials" => true,
            "cache" => 100
        ];
        $cors = new \Tuupola\Middleware\CorsMiddleware($options);
        $handler = new Handler($res, $next);
        $res = $cors->process($req, $handler);
        return $res;
    }
}