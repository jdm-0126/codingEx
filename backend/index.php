<?php
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Headers:X-Request-With');
header('Access-Control-Allow-Methods: DELETE, PUT, GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/product', 'getProducts');
$app->get('/category', 'getCategory');
$app->get('/brand', 'getBrand');
$app->get('/item/:id', 'getItem');
$app->get('/item', 'getItems');
$app->get('/itemdrop', 'getBrandSub');

$app->post('/item', 'postItems');
$app->post('/product', 'addProduct');
$app->put('/product/:id', 'updateProduct');
$app->delete('/product/:id', 'deleteProduct');

$app->post('/login', 'logUser');

$app->get('/user', 'getUsers');
$app->get('/user/:id', 'getUser');
$app->post('/user', 'addUser');
$app->put('/user/:id', 'updateUser');
$app->delete('/user/:id', 'deleteUser');

$app->run();

//Select All
function getProducts() {
    try {
        $db = getConnection();
        $stmt = $db->query('select * from product');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
    
}

//Select All
function getCategory() {
    try {
        $db = getConnection();
        $stmt = $db->query('select * from category');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
    
}

//Select All
function getBrandSub() {
    try {
        $db = getConnection();
        $stmt = $db->query('CALL get_item_dropdown()');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Select All
function getItems() {
    try {
        $db = getConnection();
        $stmt = $db->query('select * from item');
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
    
}
//Select All
function getBrand() {
    try {
        $db = getConnection();
        $stmt = $db->query('CALL get_category_child()');
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
function getUser($id) {
    $sql = "select * from user where id = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam('id', $id);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($data);
    } catch (PDOException $e) {
        echo $e.getMessage();
    }    
}

//Select All
function getItem($id) {
    $sql = "select * from item where label_id = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam('id', $id);
        $stmt->execute();
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
    // $email = json_decode($app->request()->getBody('email'));
    // $password = json_decode($app->request()->getBody('password'));
    $email = $data->email;
    $password = $data->password;
    $sql = "select * from user where email='$email' AND password ='$password'";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        $result = $stmt->execute();
        if (!empty($data)) {
            echo json_encode(['status' => 'success', 'email' => $data[0]->email]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Incorrect username | password']);
        }
    } catch (PDOException $e) {
        // echo $e.getMessage();
        echo $e;
    }    
}

//Save Data
function postItems() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "insert into item values(?,?,?,?)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->label_id);
        $stmt->bindParam(2, $data->label);
        $stmt->bindParam(3, $data->route);
        $stmt->bindParam(4, $data->brand_id);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}
//Save Data
function addProduct() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "insert into products values(?,?,?)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->label_id);
        $stmt->bindParam(2, $data->label);
        $stmt->bindParam(3, $data->route);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Save Data
function addUser() {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "insert into user values(?,?,?,?)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->id);
        $stmt->bindParam(2, $data->name);
        $stmt->bindParam(3, $data->email);
        $stmt->bindParam(4, $data->password);
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Edit Data
function updateProduct($id) {
    global $app;
    $data = json_decode($app->request()->getBody());
    $sql = "update products set parendt_id=?, label=?,route=? where label_id = ?";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $data->label);
        $stmt->bindParam(2, $data->route);
        $stmt->bindParam(3, $data->parendt_id);
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
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e.getMessage();
    }
}

//Delete Data
function deleteProduct($id) {
    $sql = "delete from products where label_id = :id";
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
    // header('Access-Control-Allow-Origin:*'); 
    // header('Access-Control-Allow-Headers:X-Request-With');
    // header('Access-Control-Allow-Methods: GET, OPTIONS');
    // header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "root";
    $dbname = "coding_chief";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}