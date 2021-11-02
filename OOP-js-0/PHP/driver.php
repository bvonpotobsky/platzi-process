<?php

class Driver extends Account {
  public function __construct($name, $document, $email, $password) {
    parent::__construct($name, $document, $email, $password);
  }

  public function getDataDriver() {
    echo "Driver Name: $this->name Driver ID: $this->document Email: $this->email Password: $this->password";
    echo "<br>";
  }
}

?>