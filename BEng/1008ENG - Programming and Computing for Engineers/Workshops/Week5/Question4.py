import importlib as lib
import numpy as np
import matplotlib.pyplot as plt

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#get range
bounds       = [-9, 9]
boundsValues = np.linspace(bounds[0], bounds[1])

clib.print_info("USING BOUNDS (-9:9):")

#store function results
funcGY = np.empty(0, int)
funcFY = np.empty(0, int)

#go through each result
for t in boundsValues:
    
    #function calculation
    gt = 100 * np.sin(t + np.square(t))
    ft = ((-3 if t >= 0 else 3) * np.square(t)) + 5
    g  = gt / t
    f  = ft / t
    
    #appends
    funcGY = np.append(funcGY, g)
    funcFY = np.append(funcFY, f)
    
#plot creation
fig, axs = plt.subplots(2)
fig.suptitle("Functions g(t) and f(t)")
axs[0].plot(boundsValues, funcGY)
axs[1].plot(boundsValues, funcFY)
plt.show()