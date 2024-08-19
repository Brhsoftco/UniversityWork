import numpy as np

#define the algorithm for sphere volume calculation
def sphere_vol(radius):

    return (4/3)*np.pi*np.power(radius, 3)

#define the algorithm for sphere mass calculation
def sphere_mass(radius, density = 1.6):

    # get volume first
    v = sphere_vol(radius)
    return v * density
    
#define the algorithm for CO2 emissions for a vehicle travelling a set amount of km's
def emissions(travelled, efficiency = 11, weighting = 3.2):

    lpy = travelled / efficiency
    co2 = lpy * weighting
    return co2

#allows automatic conversion and interpretation of weights (default is kg, can interpret grams also)
def weight_units(value, rounded = True, grams = False):

    if (grams):
        
        k = value / 1000
        t = 0
        
        if (k >= 1000):
            
            t = k / 1000
            
        if (t > 0):
            return str((np.round(t, 2) if rounded else t)) + "t"
        else:
            if (k > 0):
                return str((np.round(k, 2) if rounded else k)) + "kg"
            else:
                return str((np.round(value, 2) if rounded else value)) + "g"
                
    else:
    
        t = value / 1000
        
        if (t > 0):
            return str((np.round(t, 2) if rounded else t)) + "t"
        else:
            return str((np.round(value, 2) if rounded else value)) + "kg"
            
#calculates squares of all even integers (inclusive) within the bounds returned as a 2D array
def even_squares(lower, upper):

    results = []
    for i in range(lower, upper + 1):
    
        even = i % 2 == 0
        if not even:
            continue
        else:
            results.append([i, np.power(i, 2)])
            
    return results
    
#calculates all odd numbers (inclusive) within the bounds returned as a 1D array
def odd_numbers(lower, upper):

    results = []
    for i in range(lower, upper + 1):
    
        odd = i % 2 > 0
        if not odd:
            continue
        else:
            results.append(i)
            
    return results
    
#determines if a string is truly a number
def is_valid_int(val):
    
    try:
        int(val)
        return True
    except ValueError:
        return False