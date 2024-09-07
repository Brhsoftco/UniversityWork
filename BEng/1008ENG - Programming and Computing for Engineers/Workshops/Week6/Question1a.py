import importlib as lib
import numpy as np

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
data = get_dataset()

#relevant data
jan  = data[:, 0]

#v=value to store,d=day,i=index
v = 0
d = 0
i = 0
for r in jan:
    if r > v:
        v = r
        d = i
    i += 1    
        
#output
clib.print_info("OUTPUT:")
print("Max rainfall in January was " + str(v) + "mm on the " + algs.ordinal(d + 1))