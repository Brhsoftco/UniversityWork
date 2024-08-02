import numpy as nm
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg, newline=True):
    
    if newline:
        print("")
    print(Back.BLUE + msg + Back.BLACK)

#define the algorithm for sphere volume calculation
def sphere_vol(radius):

    return (4/3)*nm.pi*nm.power(radius, 3)
    
#define an array of spheres to calculate
spheres = [
    1.2,
    2.5,
    3.8,
    4.6,
    5.8,
    6.2,
    8.3
]

#calculate each sphere
for i in range(len(spheres)):
    
    #calculate the volume portion
    c = spheres[i]
    v = nm.round(sphere_vol(c), 2)
    
    #calculate the mass portion (volume * density)
    d = 1.6
    m = nm.round(v * d, 2)
    
    print_info("~ Sphere radius: " + str(v) + "m ~")
    print("VOLUME: " + str(v) + "m³")
    print("MASS: " + str(m) + "kg")