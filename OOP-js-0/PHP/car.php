<?php
require_once('account.php');

class Car {
  public $id;
  public $license;
  public $driver;
  protected $passengers;

  public function __construct($license, $driver) {
    $this->license = $license;
    $this->driver = $driver;
  }

 public function printDataCar() {
    echo "
        Licencia: $this->license 
        Driver: {$this->driver->name} 
        Número de pasajeros: $this->passengers
        ";
      echo "<br>";
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