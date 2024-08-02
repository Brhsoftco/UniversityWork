# grab user input
sourceName = input("Enter file name: ")

# open the source file in read-only mode
sourceHandle = open(sourceName, mode = "r")

# read the contents of the source file
contents = sourceHandle.readlines()

# close the file after reading it
sourceHandle.close()

# ensure length of file is correct
if len(contents) > 0:
    
    # line counter
    c = 0
    
    # go through each line in the file
    for line in contents:
    
        # increment line counter
        c += 1
        
        # split the line up into separate numbers
        scores = line.split()
        
        # store the numeric scores here
        intScores = []
        
        # go through each score
        for s in scores:
        
            # convert it to an integer
            sInt = int(s)
            
            # append it to the new scores array
            intScores.append(sInt)
    
        # calculate the sum of all scores for this line
        total = sum(intScores)
        
        # calculate the average score for this line
        average = total / len(intScores)
        
        # print out the average
        print("The average of line " + str(c) + " is " + str(average))
    
else:

    # alert user
    print("Invalid file length")