# grab user input
sourceName = input("Enter file name: ")

# open the source file in read-only mode
sourceHandle = open(sourceName, mode = "r")

# read the contents of the source file as an array
contentsLine = sourceHandle.readlines()

# reset file cursor
sourceHandle.seek(0)

# read the contents as one blob
contents     = sourceHandle.read()

# close the file after reading it
sourceHandle.close()

# ensure length of file is correct
if len(contents) > 0:
    
    # grab word count
    wordCount = len(contents.split())
    
    # grab character count
    charCount = len(contents)
    
    # grab line count
    lineCount = len(contentsLine)
    
    # print statistics
    print("Characters: " + str(charCount))
    print("Words: " + str(wordCount))
    print("Lines: " + str(lineCount))
    
else:

    # alert user
    print("Invalid file length")