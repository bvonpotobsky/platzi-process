<?php

class User extends Account {
  public function __construct($name, $document, $email, $password) {
    parent::__construct($name, $document, $email, $password);
  }

  public function getDataUser() {
    echo "User Name: $this->name User ID: $this->document Email: $this->email Password: $this->password";
    echo "<br>";
  }
}

?>