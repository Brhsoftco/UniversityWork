import importlib as lib
import numpy as np
import calendar as cal

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#business logic for data is done in a separate function
#for readability purposes
def get_dataset():

    file = "data/temp.dat"
    data = np.loadtxt(file)
    
    return data
    
#retrieve working data
dataset = get_dataset()

#values for each sensor point are stored here
data = []

#value to compare with
modus = 85

#iterating in the y direction
iy = 0
for ry in dataset:
    
    #iterating in the x direction of the current y coordinate
    ix = 0
    for rx in ry:
        
        if rx > modus:
            data.append([ix, iy, rx])
        
        ix += 1
    iy += 1
        
#output
clib.print_info("OUTPUT:")
clib.print_break()

#print out values for each sensor
i = 0
for v in data:
    
    #time value
    t = str(v[1]).zfill(2) + "00"
    
    #sensor point
    s = "Sensor Point " + str(v[0])
    
    #real value
    r = str(v[2])
    
    #actual message to print
    p = s + ": " + r + " @ " + t
    
    #output result
    print(p)
    
    i += 1

clib.print_break()
print("TOTAL: " + str(i))