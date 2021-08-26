from car import Car

if __name__ == "__main__":
    print('Hola mundo')

    car = Car()
    car.license = "ABD123"
    car.driver = "Andres Herrera"
    print(vars(car))

    car2 = Car()
    car2.license = '121CSF'
    car2.driver = "Agustina Maidana"
    print(vars(car2))
