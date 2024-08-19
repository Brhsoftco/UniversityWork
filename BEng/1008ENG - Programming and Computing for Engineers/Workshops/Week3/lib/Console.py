from colorama import Fore, Back, Style
import os
os.system("")

#clearer process for line breaks
def print_break():
    
    print("")

#just helps separate results better
def print_info(msg, append = "", brk = True):

    if (brk):
        print_break()
    print(Back.BLUE + str(msg) + str(append) + Back.BLACK)
    
#assists with highlighting error messages
def print_error(msg, append = "", brk = True):

    if (brk):
        print_break()
    print(Back.RED + str(msg) + str(append) + Back.BLACK)
    
#assists with highlighting success messages
def print_success(msg, append = "", brk = True):

    if (brk):
        print_break()
    print(Back.GREEN + str(msg) + str(append) + Back.BLACK)