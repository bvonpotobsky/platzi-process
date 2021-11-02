import Account from "../Account.js";

export default class User extends Account {
  constructor(name, document, email, password) {
    super(name, document, email, password);
  }

  printDataUser() {
    console.log(`User name: ${this.name}`);
    console.log(`User ID: ${this.document}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}