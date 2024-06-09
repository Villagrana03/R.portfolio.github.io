# a = int(input("Enter a number: "))
# b = int(input("Enter a number: "))

# firstA = a * a
# firstB = b*b

# # print(firstA, firstB)
# def pytho():
#     result = firstA + firstB
   
#     return result ** .5
 

# print(pytho())


#agregue el if, por que si no lo tenia,cuando le picaba "q" se terminaba el while pero agregaba el q al array.
listExample = []
userInput = ""

while (userInput != "q" ):  
   userInput = input("Enter a name: ")
   if userInput != "q":
      listExample.append(userInput)
      print(listExample)
   else:
      print(listExample)
      break


