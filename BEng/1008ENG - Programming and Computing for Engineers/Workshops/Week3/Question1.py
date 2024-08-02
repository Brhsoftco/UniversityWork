import math
import numpy as np
from colorama import Fore, Back, Style

#just helps separate results better
def print_info(msg):

    print(Back.BLUE + msg + Back.BLACK)

#extracts the first row that matches
#the given value and column index (default 0)
#can also choose to omit the locating column
def extract_row_val(arr, val, col=0, omt=False):

    for i in range(len(arr)):

        if arr[i][col] == val:
            
            #match found
            return arr[i] if not omt else np.delete(arr[i], 0)
        
    return []
    
#extracts all rows within range of
#the given values and column index (default 0)
#can also choose to omit the locating column
def extract_row_range(arr, start, end, col=0, omt=False):
    
    new_col = np.empty((0,len(arr[0])), int)
    for i in range(start, end + 1):

        row = extract_row_val(arr, i, col, omt)
        new_col = np.vstack([new_col, row])
        
    return new_col

#array "A"
consumptionTime = [
    [ 7  ],
    [ 8  ],
    [ 9  ],
    [ 10 ],
    [ 11 ],
    [ 12 ],
    [ 13 ],
    [ 14 ],
    [ 15 ],
    [ 16 ],
    [ 17 ],
    [ 18 ]
]
print_info("")
print_info("~ ARRAY A~ ")
print(consumptionTime)

#array "B"
consumptionFigs = [
    [ 5,  8,   2   ],
    [ 13, 17,  8   ],
    [ 19, 28,  15  ],
    [ 14, 39,  24  ],
    [ 42, 66,  14  ],
    [ 49, 71,  51  ],
    [ 46, 74,  48  ],
    [ 67, 154, 68  ],
    [ 64, 126, 145 ],
    [ 32, 57,  55  ],
    [ 12, 20,  11  ],
    [ 4,  7,   2   ]
]
print_info("")
print_info("~ ARRAY B ~ ")
print(consumptionFigs)

#combine consumption arrays; appending the figures
#to the end of the times
#array "C"
consumptionComb = np.append(consumptionTime, consumptionFigs, axis=1)
print_info("")
print_info("~ ARRAY C ~ ")
print(consumptionComb)

#extract hour 14; enable ommission (removes 14 from the array)
#array "D"
consumptionD    = extract_row_val(consumptionComb, 14, 0, True)
consumptionDSum = np.sum(consumptionD)
print_info("")
print_info("~ ARRAY D ~ ")
print(consumptionD)
print_info("~ ARRAY D SUM ~ ")
print(consumptionDSum)

#extract all data for floor 3
#array "E"
consumptionFL3  = consumptionComb[:, 3]
print_info("")
print_info("~ ARRAY E ~ ")
print(consumptionFL3)

#extract all afternoon data (from 12 to 18)
#array "F"
consumptionAFT  = extract_row_range(consumptionComb, 12, 18)
print_info("")
print_info("~ ARRAY F ~ ")
print(consumptionAFT)