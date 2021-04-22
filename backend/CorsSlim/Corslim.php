<?php
/**
 * Slim - a micro PHP 5 framework
 *
 * @author      Josh Lockhart <info@slimframework.com>
 * @copyright   2011 Josh Lockhart
 * @link        http://www.slimframework.com
 * @license     http://www.slimframework.com/license
 * @version     2.6.1
 * @package     Slim
 *
 * MIT LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
namespace CorsSlim;

// Ensure mcrypt constants are defined even if mcrypt extension is not loaded
if (!extension_loaded('mcrypt')) {
    define('MCRYPT_MODE_CBC', 0);
    define('MCRYPT_RIJNDAEL_256', 0);
}

/**
 * Slim
 * @package  Slim
 * @author   Josh Lockhart
 * @since    1.0.0
 *
 * @property \Slim\Environment   $environment
 * @property \Slim\Http\Response $response
 * @property \Slim\Http\Request  $request
 * @property \Slim\Router        $router
 */

class CorsSlim
{
    /**
     * @const string
     */
    const VERSION = '2.6.1';

    /**
     * @var \Slim\Helper\Set
     */
    public $container;

    /**
     * @var array[\Slim]
     */
    protected static $apps = array();

    /**
     * @var string
     */
    protected $name;

    /**
     * @var array
     */
    protected $middleware;

    /**
     * @var mixed Callable to be invoked if application error
     */
    protected $error;

    /**
     * @var mixed Callable to be invoked if no matching routes are found
     */
    protected $notFound;

    /**
     * @var array
     */
    protected $hooks = array(
        'slim.before' => array(array()),
        'slim.before.router' => array(array()),
        'slim.before.dispatch' => array(array()),
        'slim.after.dispatch' => array(array()),
        'slim.after.router' => array(array()),
        'slim.after' => array(array())
    );
}