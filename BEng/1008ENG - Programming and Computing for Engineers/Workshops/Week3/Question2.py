import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")

#evenly-spaced vectors of values from 1-20
vectorA = np.arange(1, 20, 1.8)
clib.print_break()
clib.print_info("~ VALUES 1-20 STEPPING AT 1.8 ~")
print(vectorA)

#evenly-spaced vectors of values from 0 to 2*Pi
vectorBE = 2 * np.pi
vectorBS = np.pi / 10
vectorBF = np.arange(0, vectorBE, vectorBS)
clib.print_break()
clib.print_info("~ VALUES 0-2*Pi STEPPING AT Pi / 10 ~")
print(vectorBF)

#evenly-spaced vectors of values from 4 and 20
vectorC = np.linspace(4, 20, 15)
clib.print_break()
clib.print_info("~ VALUES 4-20 OF COUNT 15 ~")
print(vectorC)