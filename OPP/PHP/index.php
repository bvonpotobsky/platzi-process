<?php

require_once("car.php");
require_once("uberX.php");
require_once("user.php");
require_once("account.php");


// $uberX = new UberX("CVD123", new Account("Andres Herrera", "41033183"), "Chevrolet", "Spark");
// $uberX-> printDataCar();

$user = new User("Juan Moss", "41024953", "juan@test.com", "asas123");
$user->getDataUser();

?>