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
    
#assists with highlighting success messages
def print_success(msg, append = "", brk = True):

    if (brk):
        print("")
    print(Back.GREEN + str(msg) + str(append) + Back.BLACK)

#get user input for scalar
print_info("ENTER MARK: ")
m = input()

#proceed with validation
if m.isnumeric():
    
    #re-cast input
    m = int(m)
    
    #range validation
    if m > 0 and m <= 100:
    
        #result
        p = m >= 50
    
        #output result
        print_info("MARK RESULT:")
        
        #passed?
        if p:
            print_success("PASS")
        else:
            print_error("FAIL")
        
    else:
        
        #communicate issue
        print_error("Invalid mark value")
    
else:

    #communicate issue
    print_error("Invalid mark value")