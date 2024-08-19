import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")
    
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
    v = np.round(algs.sphere_vol(c), 2)
    
    #calculate the mass portion (volume * density)
    m = np.round(algs.sphere_mass(c), 2)
    
    clib.print_info("~ Sphere radius: " + str(v) + "m ~")
    print("VOLUME: " + str(v) + "m³")
    print("MASS: " + str(m) + "kg")