import math
import numpy as np
import matplotlib.pyplot as plt
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

#UNIVERSAL KNOWN VALUES
xU = [0, 10]

#PLOT A PLOT LOOP
aPX = np.empty(0, int)
aPY = np.empty(0, int)
for aX in np.arange(xU[0], xU[1], 0.2):

    aY   = np.exp(aX)
    aPX  = np.append(aPX, aX)
    aPY  = np.append(aPY, aY)
    
#CREATE PLOT
plt.plot(aPX, aPY)
plt.show()