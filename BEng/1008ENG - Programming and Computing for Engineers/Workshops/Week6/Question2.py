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

#user specification
clib.print_info("SPECIFY MONTH (1-12): ")
month = input()

#validation
if algs.is_valid_int(month):
    
    month = int(month)
    if month >= 1 and month <= 12:
    
        if month % 1 == 0:

            #get relevant data
            data   = dataset[:, month - 1]
            clean  = []
            
            #clean the data
            i = 0
            for d in data:
                if d >= 0:
                    clean.append(d)
                i += 1
            
            #month name
            name   = cal.month_name[month]
            
            #stats
            mean   = np.round(np.mean(clean), 2)
            stddev = np.round(np.std(clean), 2)
            boundL = mean - stddev
            boundU = mean + stddev
            
            #output results
            clib.print_info("Statistics for " + name)
            print("Mean: " + str(mean))
            print("Standard Deviation: " + str(stddev))
            print("STDDEV Lower: " + str(boundL))
            print("STDDEV Upper: " + str(boundU))
                
        else:
            clib.print_error("Invalid month")
    else:
        clib.print_error("Invalid month")
else:
    clib.print_error("Invalid month")