<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/product', 'getProducts');
$app->post('/product', 'addProduct');
$app->put('/product/:id', 'updateProduct');
$app->delete('/product/:id', 'deleteProduct');

$app->post('/login', 'logUser');

$app->get('/user', 'getUsers');
$app->post('/user', 'addUser');
$app->put('/user/:id', 'updateUser');
$app->delete('/user/:id', 'deleteUser');

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

//Select All
function getUsers() {
    try {
        $db = getConnection();
        $stmt = $db->query('select * from user');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
    
}

//Select All
function logUser() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $email = json_decode($app->request()->getBody('email'));
    $password = json_decode($app->request()->getBody('password'));
    $sql = "select * from user where email='$email' && password ='$password'";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(0, $data->email);
        $stmt->bindParam(1, $data->password);
        $stmt->execute();
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

//Save Data
function addUser() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "insert into user values(?,?,?,?,?)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->id);
        $stmt->bindParam(2, $data->name);
        $stmt->bindParam(3, $data->email);
        $stmt->bindParam(4, $data->password);
        $stmt->bindParam(5, $data->token);
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

//Edit Data
function updateUser($id) {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "update user set name=?,email=?,password=?, token=? where id = ?";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->name);
        $stmt->bindParam(2, $data->email);
        $stmt->bindParam(3, $data->password);
        $stmt->bindParam(4, $id);
        $stmt->bindParam(5, $data->token);
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

//Delete Data
function deleteUser($id) {
    $sql = "delete from user where id = :id";
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
    header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Headers:X-Request-With');

header('Access-Control-Allow-Methods: DELETE, PUT, GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "coding_chief";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}
