import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#UNIVERSAL VALUE(S)
travelled = 20000

#OUTPUT RESULTS
emissions = np.round(algs.emissions(travelled), 2)
formatted = algs.weight_units(emissions)

clib.print_info("EMISSIONS PRODUCED:")
print(formatted + " of CO²")