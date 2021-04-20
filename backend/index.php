<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/product', 'getProducts');
$app->post('/product', 'addProduct');
$app->put('/product/:id', 'updateProduct');
$app->delete('/product/:id', 'deleteProduct');

$app->add(new \Internal\OAuth\Middleware());

$app->get('/', function(\Psr\Http\Message\ServerRequestInterface $req, \Psr\Http\Message\ResponseInterface $res, $args) {
    $res->getBody()->write(json_encode(['url' => $req->getUri()->__toString(), 'args'=>$args]));
    return $res->withHeader('content-type', 'application/json');
});
$app->run();

//Select All
function getProducts() {
    try {
        $db = getConnection();
        $stmt = $db->query('select * from products');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
    
}

//Save Data
function addProduct() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "insert into products values(?,?,?,?)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->id);
        $stmt->bindParam(2, $data->name);
        $stmt->bindParam(3, $data->address);
        $stmt->bindParam(4, $data->hobbies);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Edit Data
function updateProduct($id) {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "update products set name=?,route=?,data=? where id = ?";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->name);
        $stmt->bindParam(2, $data->address);
        $stmt->bindParam(3, $data->hobbies);
        $stmt->bindParam(4, $id);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Delete Data
function deleteProduct($id) {
    $sql = "delete from products where id = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam('id', $id);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Connection Database
function getConnection() {
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "coding_chief";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}
