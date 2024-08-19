import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#get user input
clib.print_info("ENTER BOUNDS (<x>:<y>):")
bounds = input()

#validation
bounds = ''.join(bounds.split())
bounds = bounds.split(":")

#store function variables here
x = 0
y = 0

if len(bounds) != 2:
    clib.print_error("Invalid bounds")
else:
    
    if not algs.is_valid_int(bounds[0]) or not algs.is_valid_int(bounds[1]):
        clib.print_error("Invalid bounds")
    else:
        
        x = int(bounds[0])
        y = int(bounds[1])
        
        clib.print_info("USING BOUNDS x=" + str(x) + ",y=" + str(y))
        
        #calculate all possible scenarios
        cond1 = x >= 0 and y >= 0
        cond2 = x >= 0 and y <  0
        cond3 = x <  0 and y >= 0
        cond4 = x <  0 and y <  0
        calc1 = x + y
        calc2 = x + np.square(y)
        calc3 = np.square(x) + y
        calc4 = np.square(x) + np.square(y)
        modus = [
            [cond1, calc1],
            [cond2, calc2],
            [cond3, calc3],
            [cond4, calc4],
        ]
        
        #and then figure out which one was true
        for r in modus:
            if r[0]:
                clib.print_break()
                print("Function output: " + str(r[1]))
                break