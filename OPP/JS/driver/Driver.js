import Account from "../Account.js";

export default class Driver extends Account {
  constructor(name, document, email, password, carLicense) {
    super(name, document, email, password);
    this.carLicense = carLicense;
  }

  printDataDriver() {
    console.log(`Driver Name: ${this.name}`);
    console.log(`Driver ID: ${this.document}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
    console.log(`Car license: ${this.carLicense}`);
  }
}