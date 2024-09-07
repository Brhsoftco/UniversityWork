import importlib as lib
import numpy as np
import calendar as cal

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#business logic for data is done in a separate function
#for readability purposes
def get_dataset():

    file = "data/rainfall_southport_2006.txt"
    data = np.loadtxt(file)
    
    return data
    
#retrieve working data
dataset = get_dataset()

#values for each month are stored and updated here
data = np.zeros(12)

#iterating in the y direction
for ry in dataset:
    
    #iterating in the x direction of the current y coordinate
    ix = 0
    for rx in ry:
        c = data[ix]
        if rx > c:
            data[ix] = rx
        ix += 1
        
#output
clib.print_info("OUTPUT:")

#print out values for each month
i = 0
for v in data:

    #month name
    m = cal.month_name[i + 1]
    
    #output result
    print(m + ": " + str(v) + "mm")
    
    i += 1