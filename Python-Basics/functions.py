
dolar_in_ars = 270



def convert_pesos_to_dolars(pesos):
    dolars = pesos / dolar_in_ars
    return dolars


def convert_dolars_to_pesos(dolars):
    pesos = dolars * dolar_in_ars
    return pesos


def get_amount_in_pesos():
    amount = float(input("Ingrese la cantidad de pesos argentinos: "))
    return amount

def get_amount_in_dolars():
    amount = float(input("Ingrese la cantidad de dólares: "))
    return amount


def select_option():
    print("Seleccione una opción:")
    print("1. Convertir pesos argentinos a dólares")
    print("2. Convertir dólares a pesos argentinos")
    print("3. Salir")
    option = int(input("Ingrese una opción: "))
    
    if(option == 1):
        amount = get_amount_in_pesos()
        dolars = convert_pesos_to_dolars(amount)
        print("Usted tiene $", round(dolars, 2), "dólares")
        
    elif(option == 2):
        amount = get_amount_in_dolars()
        pesos = convert_dolars_to_pesos(amount)
        print("Usted tiene $", round(pesos, 2), "pesos argentinos")
        
    elif(option == 3):
        return False
        
    return option

select_option()
