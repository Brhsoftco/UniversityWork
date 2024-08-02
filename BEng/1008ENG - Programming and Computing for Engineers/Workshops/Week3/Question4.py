import numpy as nm
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg, newline=True):
    
    if newline:
        print("")
    print(Back.BLUE + msg + Back.BLACK)

#business logic for data is done in a separate function
#for readability purposes
def get_dataset():

    file = "data/rainfall_southport_2006.txt"
    data = nm.loadtxt(file)
    
    return data
    
#retrieve working data
data = get_dataset()

#Since -9999 means an invalid reading, we cannot
#assume that we either had or did not have any rain;
#thus, we must exclude it from the average calculation.
#This applies for all month calculations.

#get data for feburary (column 2, zero-based)
feb    = data[:, 1]
febAvg = nm.round(feb[feb != -9999].mean(), 1)
print_info("~ FEBRUARY AVERAGE ~")
print(febAvg)
print_info("~ FEBRUARY RAINFALL ~")
print(feb)

#get data for july (column 7, zero-based)
jul    = data[:, 6]
julAvg = nm.round(jul[jul != -9999].mean(), 1)
print_info("~ JULY AVERAGE ~")
print(julAvg)
print_info("~ JULY RAINFALL ~")
print(jul)

#get data for september (column 9, zero-based)
sep    = data[:, 8]
sepAvg = nm.round(sep[sep != -9999].mean(), 1)
print_info("~ SEPTEMBER AVERAGE ~")
print(sepAvg)
print_info("~ SEPTEMBER RAINFALL ~")
print(sep)

#get data for march (column 3, zero-based)
mar    = data[:, 2]

#get specific day for march
day    = 13
dayDat = mar[day - 1]

#display rainfall
print_info("~ RAINFALL FOR 13 MARCH 2006 ~")
print(dayDat)