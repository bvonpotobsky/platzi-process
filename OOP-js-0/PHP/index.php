<?php
require_once("car.php");
require_once("account.php");
require_once("uberVan.php");
require_once("user.php");
require_once("uberX.php");


$uberX = new UberX("CVD123", new Account("Andres Herrera", "41033183", "asa121@gmail.com", "test123"), "Chevrolet", "Spark");
$uberX->setPassengers(4);
$uberX-> printDataCar();


$uberVan = new UberVan("OJL123", new Account("Lucas Ruiz", "AS123A", "kdsks@gmail.com", "test123"), "Nissan", "Versa");
$uberVan->setPassengers(6);
$uberVan-> printDataCar();

?>