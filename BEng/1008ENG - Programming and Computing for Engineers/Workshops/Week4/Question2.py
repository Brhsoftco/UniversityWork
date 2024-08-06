import math
import numpy as np
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg, append = "", brk = True):

    if (brk):
        print("")
    print(Back.BLUE + str(msg) + str(append) + Back.BLACK)
    
#assists with highlighting error messages
def print_error(msg, append = "", brk = True):

    if (brk):
        print("")
    print(Back.RED + str(msg) + str(append) + Back.BLACK)

#get user input for scalar
print_info("ENTER SCALAR: ")
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
    print_info("CALCULATED RESULT:")
    print(a)
    
else:

    #communicate issue
    print_error("Invalid scalar value")