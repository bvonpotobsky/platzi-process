from account import Account
from car import Car
from uberX import UberX


if __name__ == "__main__":

    car_1 = Car("AMS253", Account("Lucas Sanchez", "43024832",
                'lucassanches@test.com', 'test123'))
    print(vars(car_1))
    print(vars(car_1.driver))
