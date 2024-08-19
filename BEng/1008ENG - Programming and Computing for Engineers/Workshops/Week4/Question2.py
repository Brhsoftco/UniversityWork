import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")

#get user input for scalar
clib.print_info("ENTER SCALAR: ")
t = input()

#proceed with validation
if t.isnumeric():
    
    #re-cast input
    t = int(t)
    
    #proceed with algorithm
    f = 10
    
    #decide which path to take based on factor
    a = 0
    if t >= f:
        
        a = -3.2 * np.power(t, 2) + np.log(t)
        
    else:
    
        a = 3.2 * np.power(t, 2)
    
    a = a / t
    
    #output result
    clib.print_info("CALCULATED RESULT:")
    print(a)
    
else:

    #communicate issue
    clib.print_error("Invalid scalar value")