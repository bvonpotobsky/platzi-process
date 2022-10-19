
from xml.etree.ElementInclude import include



ars = float(input ("Ingresá la cantidad de pesos argentinos: "));
usd_value = 270
print ("Usted tiene $", round(ars / usd_value, 2), "dólares");