import matplotlib.pyplot as plt
import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")
algs = lib.import_module("lib.Algs")
    
CS = 800
CG = 40000
CY = 120
CI = [
    [10000, 0.003],
    [20000, 0.004],
    [30000, 0.005],
    [40000, 0.006]
]
MC = 1
MS = []
MX = []

while CS <= CG:
    
    FI = 0
    for i in CI:        
        if CS < i[0]:
            FI = i[1]
            break
    
    if FI == 0:
        FI = CI[-1][1]
    
    FX = CS * FI
    FT = CS + CY + FX
    CS = FT
    
    MS.append(CS)
    MX.append(MC)
    
    MC += 1

clib.print_info("BALANCES:")

i = 0
for m in MS:
    
    amount = "$" + str(np.round(m, 2))
    month = str(i + 1).zfill(3)
    
    print(month + ": " + amount)
    i += 1

fig, ax = plt.subplots()
ax.plot(MX, MS)
plt.show()  