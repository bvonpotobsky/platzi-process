class Main {
    public static void main(String[] args) {
        System.out.println("Hola mundo");

        Car car = new Car("ASS123", new Account("Leo Messi", "12493932"));
        car.passenger = 4;
        car.getDataCar();

        Car car2 = new Car("ASG123", new Account("Juan Liz", "41033183"));
        car2.passenger = 3;
        car2.getDataCar();
    }
}