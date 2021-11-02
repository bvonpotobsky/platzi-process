<?php
require_once('car.php');
class UberX extends Car {
  public $brand;
  public $model;
  protected $passengers;

  public function __construct($license, $driver, $brand, $model) {
    parent::__construct($license, $driver);
    $this->brand = $brand;
    $this->model = $model;
  }


  public function getPassengers() {
    return $this->passengers;
  }

  public function setPassengers($passengers) {
    if ($passengers == 4) {
      $this->passengers = $passengers;
    } else {
      echo "Necesitas 4 pasajeros";
      echo "<br>";
    }
  }
}
?>