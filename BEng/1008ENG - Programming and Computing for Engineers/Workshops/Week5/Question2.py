import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#get value array
odds = algs.odd_numbers(1, 100)

#present results
clib.print_info("ODD NUMBERS (1-100):")
clib.print_break()

for r in odds:

    print("ODD: " + str(r))