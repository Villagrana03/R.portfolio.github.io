num = 19

def prueba():
    if(num > 10):
     print("num is greater than 10")

prueba()



name = "Michelle"
edad = 19
comida = "enchiladas"

#checking type of value
print(name, type(name))
print(edad, type(edad))

# f string
print(f"{name} => {edad} => {comida}s")

#Manejo de entradas


nombre = input("Ingrese su nombre")
print(f"tu nombre es: {nombre}")


a = input("Ingrese un numero: ")
b = input(" ingrese otro numero: ")
result = int(a) + int(b)
print(f"tu resultado es: {result} ")