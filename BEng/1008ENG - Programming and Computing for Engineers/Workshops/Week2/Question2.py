import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")

#CALCULATION 1
partA = 5 + np.power(7, 2)
partB = 5 + np.exp(4)
partC = partA * partB

clib.print_info("CALCULATION 1:")
print(str(partC))

#CALCULATION 2
partA = np.power(5, (2 + 1)) / (4 - 1)
partB = 5.8 * (67 - 83)
partC = partA - partB

clib.print_info("CALCULATION 2:")
print(str(partC))

#CALCULATION 3
partA = 4
partB = np.log(200 - 69)
partC = np.sqrt(partA + partB)

clib.print_info("CALCULATION 3:")
print(str(partC))

#CALCULATION 4
partA = 5 + 6 * (7 / 3) - np.power(2, 2)
partB = (2 / 3) * (3 / (3 * 6))
partC = partA / partB

clib.print_info("CALCULATION 4:")
print(str(partC))

#CALCULATION 5
partA = np.exp(12)
partB = np.sin(23 / np.pi)
partC = partA * partB

clib.print_info("CALCULATION 5:")
print(str(partC))

#CALCULATION 6
partA = (45 * np.pi) / 180
partB = np.acos(partA)
partC = np.power(partB, -8)

clib.print_info("CALCULATION 6:")
print(str(partC))