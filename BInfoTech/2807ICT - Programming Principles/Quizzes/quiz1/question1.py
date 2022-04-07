# store imprecise value of Pi
pi = 3.14

# program title
print("Difference in Circle Area Calculator\n")

# prompt user
large = input("Input the radius of the large circle: ")
small = input("Input the radius of the small circle: ")

# cast to floats
largeRadius = float(large)
smallRadius = float(small)

# calculations
largeArea  = pi * (largeRadius ** 2)
smallArea  = pi * (smallRadius ** 2)
difference = largeArea - smallArea

# output the result
print("\nThe difference in areas is: " + str(difference))