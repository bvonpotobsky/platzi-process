class Car {
    Integer id;
    String license;
    Account driver;
    protected Integer passenger;

    public Car(String license, Account driver) {
        this.license = license;
        this.driver = driver;
    }

    void getDataCar() {
        if (passenger != null) {
            System.out.println("Car license: " + license + " Driver: " + driver.name + " Passangers: " + passenger);
        }
    }

    public Integer getPassanger() {
        return passenger;
    }

    public void setPassanger(Integer passenger) {
        if (passenger == 4) {
            this.passenger = passenger;
        } else {
            System.out.println("Necesitas 4 pasajeros");
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }
}
