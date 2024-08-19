import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#get value array
squares = algs.even_squares(1, 100)

#present results
clib.print_info("EVEN SQUARES (1-100):")
clib.print_break()

for r in squares:

    print("Square of " + str(r[0]) + " is " + str(r[1]))