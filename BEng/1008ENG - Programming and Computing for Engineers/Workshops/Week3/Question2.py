import numpy as nm
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg):

    print(Back.BLUE + msg + Back.BLACK)

#evenly-spaced vectors of values from 1-20
vectorA = nm.arange(1, 20, 1.8)
print_info("")
print_info("~ VALUES 1-20 STEPPING AT 1.8 ~")
print(vectorA)

#evenly-spaced vectors of values from 0 to 2*Pi
vectorBE = 2 * nm.pi
vectorBS = nm.pi / 10
vectorBF = nm.arange(0, vectorBE, vectorBS)
print_info("")
print_info("~ VALUES 0-2*Pi STEPPING AT Pi / 10 ~")
print(vectorBF)

#evenly-spaced vectors of values from 4 and 20
vectorC = nm.linspace(4, 20, 15)
print_info("")
print_info("~ VALUES 4-20 OF COUNT 15 ~")
print(vectorC)