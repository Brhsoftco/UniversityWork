import importlib as lib
import numpy as np
import matplotlib.pyplot as plt

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")

#business logic for data is done in a separate function
#for readability purposes
# modus = 0: bathymetry data
# modus = 1: wave height data
def get_dataset(modus):

    file = "data/" + ("gc0001hs.dat" if modus > 0 else "gc00.bot")
    data = np.loadtxt(file)
    
    return data

def bm_data():
    return get_dataset(0)
    
def wh_data():
    return get_dataset(1)
    
#create bathymetry plot
bm = bm_data()
plt.figure()
plt.contourf(bm, cmap='jet')
plt.colorbar()
plt.title('Bathymetry')

#create wave height plot
wh = wh_data()
plt.figure()
plt.contourf(wh, cmap='jet')
plt.colorbar()
plt.title('Wave Height')
    
#plot creation
plt.show()