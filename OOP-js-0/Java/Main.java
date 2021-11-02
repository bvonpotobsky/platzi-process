class Main {
    public static void main(String[] args) {

        // Driver driver_1 = new Driver("Juan Alfaro", "14383022", "ASD123",
        // "juanalfaro@gmail.com", "test123");
        // driver_1.getDataDriver();

        // Car car_1 = new Car("AMA123", new Account("Andres Calamaro", "41033183",
        // "andrs@test.com", "test123"));
        // car_1.getDataCar();

        UberX uberX_1 = new UberX("123ASD", new Account("Andrea Pirlo", "41033183", "apirlo@gmail.com", "asbtest123"),
                "Nissan", "Pathfinder");
        System.out.println("---------------");
        System.out.println("UberX info");
        uberX_1.setPassanger(4);
        uberX_1.getDataCar();

        System.out.println("---------------");

        UberVan uberVan = new UberVan("FGD123", new Account("Andres Pirlo", "41303031", "Bcajs@gmail.com", "ejas2"));
        uberVan.setPassanger(6);
        uberVan.getDataCar();

    }
}