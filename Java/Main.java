import java.sql.Driver;

class Main {
    public static void main(String[] args) {
        UberX uberX = new UberX("AMQ123", new Account("Nicolas Izquierdo", "1112223344"), "Chevrolet", "Sonic");
        uberX.setPassenger(4);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("APO123", new Account("Nicolas Izquierdo", "1112223344s"));
        uberVan.setPassenger(6);
        uberVan.printDataCar();


        // Car car2 = new Car("APO125", new Account("Nicolas Izquierdo", "MLN725"));
        // car2.passenger = 2;
        // car2.printDataCar();

        // Car car3 = new Car("LPI725", new Account("Paula Cobos", "CLA924"));
        // car3.passenger = 2;
        // car3.printDataCar();
    }
}