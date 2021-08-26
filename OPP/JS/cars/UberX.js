import Car from "../cars/Car.js";

export default class UberX extends Car {
  constructor(license, driver, brand, model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }

  printDataUberX() {
    console.log(`Driver: ${this.driver}`);
    console.log(`License: ${this.license}`);
    console.log(`Car brand: ${this.brand}`);
    console.log(`Car model: ${this.model}`);
  }
}

