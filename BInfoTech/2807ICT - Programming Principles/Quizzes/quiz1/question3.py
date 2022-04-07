# this function grabs all possible pairs in an array
def calculatePairs(data):
    count = 0
    index = 1
    pairs = []
    for element1 in data:
        for element2 in data[index:]:
            pairs.append((element1, element2))
        index += 1

    return pairs

# grab all numbers
a = input("Please input first number: ")
b = input("Please input second number: ")
c = input("Please input third number: ")
d = input("Please input fourth number: ")

# cast all numbers properly
aInt = int(a)
bInt = int(b)
cInt = int(c)
dInt = int(d)

# chuck them into an array of values
data = [aInt, bInt, cInt, dInt]

# difference is larger than 10 flag
larger = False

# one of the four integers is less than 10 flag
less = False

# go through each value
for v in data:
    
    # comparison
    less = v < 10

print(less)

# calculate all possible pairs
for p in calculatePairs(data):

    # perform calculation
    diff = p[0] - p[1]
    
    # set flag accordingly
    larger = diff >= 10
    
# output result
print("Output: " + str(larger and less))