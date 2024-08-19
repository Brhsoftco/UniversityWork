import numpy as np
import matplotlib.pyplot as plt

#UNIVERSAL KNOWN VALUES
xU = [0, 10]

#PLOT A PLOT LOOP
aPX = np.empty(0, int)
aPY = np.empty(0, int)
for aX in np.arange(xU[0], xU[1], 0.2):
    
    #QUADRATIC VALUES
    a, b, c = 5, 2, 4
    
    #QUADRATIC CALC
    q = (a*np.power(aX, 2)) + (b*aX) + c
    
    aY   = q
    aPX  = np.append(aPX, aX)
    aPY  = np.append(aPY, aY)
    
#CREATE PLOT
plt.plot(aPX, aPY)
plt.show()