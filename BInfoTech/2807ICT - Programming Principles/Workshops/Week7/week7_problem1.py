# get user input
sourceName = input("Source file name: ")
targetName = input("Target file name: ")

# open the source file in read-only mode
sourceHandle = open(sourceName, mode = "r")

# open the target file in write-only mode
targetHandle = open(targetName, mode = "w")

# read the contents of the source file
contents = sourceHandle.readlines()

# close the file after reading it
sourceHandle.close()

# store the contents of the source file with empty lines removed
cleanContents = []

# increments with every empty line that is found
emptyCount = 0

# go through each line in the source file
for line in contents:

    # check if the current line is not empty
    if not line.isspace():
        
        # add the valid line to the array
        cleanContents.append(line)
        
    else:
    
        # increment empty line counter
        emptyCount += 1
        
# convert
cleanContents = ''.join(cleanContents)

# write te target file
targetHandle.write(cleanContents)

# close the target file
targetHandle.close()

# output empty lines removed
print("Empty lines removed: " + str(emptyCount))