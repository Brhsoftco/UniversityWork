import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")
    
clib.print_info("Enter limit: ")
SL = input()

#validation
if algs.is_valid_int(SL):

    SL = int(SL)
    if SL > 0:
        
        S = 0
        N = 1
        while S <= SL:
            
            S += np.power(N, 3)
            
            if S > SL:
                break
            
            N += 1
            
        #output result
        clib.print_info("Smallest value of N = " + str(N))
        
    else:
        clib.print_error("Validation error")
else:
    clib.print_error("Validation error")