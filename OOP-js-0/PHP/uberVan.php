<?php
require_once('car.php');
class UberVan extends Car {
  public $typeCarAccepted;
  public $seatsMaterial;
  protected $passengers;

  public function __construct($license, $driver, $typeCarAccepted, $seatsMaterial) {
    parent::__construct($license, $driver);
    $this->typeCarAccepted = $typeCarAccepted;
    $this->seatsMaterial = $seatsMaterial;
}

  public function getPassengers() {
    return $this->passengers;
  }


  public function setPassengers($passengers) {
    if($passengers == 6) {
      $this->passengers = $passengers;
    } else {
      echo "Necesitas 6 pasajeros";
      echo "<br>";
    }
  }
}

?>