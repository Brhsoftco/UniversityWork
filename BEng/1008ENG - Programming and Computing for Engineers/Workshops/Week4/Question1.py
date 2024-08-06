import math
import numpy as np
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg, append = "", brk = True):

    if (brk):
        print("")
    print(Back.BLUE + str(msg) + str(append) + Back.BLACK)

#SECTION A
#EVAL
m, n = 5, 23.2
A = m < 10 and n > 0
#DISP
print_info("PART a)")
print("A = ", A)

#SECTION B
#EVAL
x, y, m = 2, 3, 2
B = x + y <= 15 or m == 5
#DISP
print_info("PART b)")
print('B = ', B)

#SECTION C
#EVAL
m, n = 5, 23.2
C = not(m >= 10 or n <= 0)
#DISP
print_info("PART c)")
print('C = ', C)

#SECTION D
#EVAL
i = 30
D = i < 10 and 0
#DISP
print_info("PART d)")
print('D = ', D)

#SECTION E
#EVAL
a, b = 10, 0
E = a == b ^ b > 0
#DISP
print_info("PART e)")
print('E = ', E)