<?php
require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('account.php');

$uberX = new UberX("AMQ123", new Account("Andres Herrera", "AND123"), "Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberPool("APO125", new Account("Nicolas Izquierdo", "MLN725"), "Dodge", "Spark");
$uberPool->printDataCar();
?>