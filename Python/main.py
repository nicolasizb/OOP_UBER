from car import Car
from account import Account

if __name__ == "__main__":
    car = Car("AMQ123", Account("Andres Herrera", "AND123"))
    print(vars(car))
    print(vars(car.driver))

    car2 = Car("APO125", Account("Nicolas Izquierdo", "MLN725"))
    print(vars(car2))
    print(vars(car2.driver))

    car3 = Car("LPI725", Account("Paula Cobos", "CLA924"))
    print(vars(car3))
    print(vars(car3.driver))