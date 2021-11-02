class UberX extends Car {
  String brand;
  String model;

  public UberX(String license, Account driver, String brand, String model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }

  @Override
  void getDataCar() {
    super.getDataCar();
    System.out.println("Brand: " + brand + " Model: " + model);
  }
}
