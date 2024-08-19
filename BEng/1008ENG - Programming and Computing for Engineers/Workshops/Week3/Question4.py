import importlib as lib
import numpy as np

#process requirements located in different files
clib = lib.import_module("lib.Console")

#business logic for data is done in a separate function
#for readability purposes
def get_dataset():

    file = "data/rainfall_southport_2006.txt"
    data = np.loadtxt(file)
    
    return data
    
#retrieve working data
data = get_dataset()

#Since -9999 means an invalid reading, we cannot
#assume that we either had or did not have any rain;
#thus, we must exclude it from the average calculation.
#This applies for all month calculations.

#get data for feburary (column 2, zero-based)
feb    = data[:, 1]
febAvg = np.round(feb[feb != -9999].mean(), 1)
clib.print_info("~ FEBRUARY AVERAGE ~")
print(febAvg)
clib.print_info("~ FEBRUARY RAINFALL ~")
print(feb)

#get data for july (column 7, zero-based)
jul    = data[:, 6]
julAvg = np.round(jul[jul != -9999].mean(), 1)
clib.print_info("~ JULY AVERAGE ~")
print(julAvg)
clib.print_info("~ JULY RAINFALL ~")
print(jul)

#get data for september (column 9, zero-based)
sep    = data[:, 8]
sepAvg = np.round(sep[sep != -9999].mean(), 1)
clib.print_info("~ SEPTEMBER AVERAGE ~")
print(sepAvg)
clib.print_info("~ SEPTEMBER RAINFALL ~")
print(sep)

#get data for march (column 3, zero-based)
mar    = data[:, 2]

#get specific day for march
day    = 13
dayDat = mar[day - 1]

#display rainfall
clib.print_info("~ RAINFALL FOR 13 MARCH 2006 ~")
print(dayDat)