import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#UNIVERSAL VALUE(S)
radius  = 120

#CALCULATION 1
partA = np.round(algs.sphere_vol(radius), 2)

clib.print_info("CALCULATION 1 (VOLUME):")
print(str(partA) + "m³")

#CALCULATION 2
partB = np.round(algs.sphere_mass(radius), 2)

clib.print_info("CALCULATION 2 (MASS):")
print(str(partB) + "kg")