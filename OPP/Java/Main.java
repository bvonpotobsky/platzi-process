class Main {
    public static void main(String[] args) {

        Driver driver_1 = new Driver("Juan Alfaro", "14383022", "ASD123", "juanalfaro@gmail.com", "test123");
        driver_1.getDataDriver();

        Car car_1 = new Car("AMA123", new Account("Andres Calamaro", "41033183", "andrs@test.com", "test123"));
        car_1.passenger = 4;
        car_1.getDataCar();

        UberX uberX_1 = new UberX(car_1.license, car_1.driver, "Nissan", "Pathfinder");
        uberX_1.getDataUberX();
    }
}