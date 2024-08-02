# grab user input
sourceName = input("Enter file name: ")

# open the source file in read-only mode
sourceHandle = open(sourceName, mode = "r")

# read the contents of the source file
contents = sourceHandle.readlines()

# close the file after reading it
sourceHandle.close()

# ensure length of file is correct
if len(contents) >= 4:

    # grab first two lines
    firstLine  = contents[0]
    secondLine = contents[1]
    
    # grab last two lines
    secondLastLine = contents[-2]
    lastLine       = contents[-1]
    
    # combine the lines
    lines = firstLine + secondLine + secondLastLine + lastLine
    
    # print the lines
    print(lines)
    
else:

    # alert user
    print("Invalid file length")