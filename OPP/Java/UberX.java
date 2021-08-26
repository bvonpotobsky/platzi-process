class UberX extends Car {
  String brand;
  String model;

  public UberX(String license, Account driver, String brand, String model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }

  void getDataUberX() {
    System.out.println("Car license: " + license + " Driver: " + driver.name + " Brand: " + brand + " Model: " + model);
  }
}
