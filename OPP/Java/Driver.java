class Driver extends Account {
  String carLicense;

  public Driver(String name, String document, String carLicense, String email, String password) {
    super(name, document, email, password);
    this.carLicense = carLicense;
  }

  void getDataDriver() {
    System.out.println("Driver Name: " + name);
    System.out.println("Driver ID: " + document);
    System.out.println("Car license: " + carLicense);
    System.out.println("Email: " + email);
    System.out.println("Password: " + password);
  }
}
