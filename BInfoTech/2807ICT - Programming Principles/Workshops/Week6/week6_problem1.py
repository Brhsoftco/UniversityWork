# control variable
isRunning = True

# validation function
def goodString(userString):

    # validate
    return userString.replace(' ', '').isalpha()

# main program loop
while isRunning:

    # prompt user
    userInput = input("Enter string: ")
    
    # empty string?
    if userInput != "":
        
        # check if alphabetical
        if goodString(userInput):
        
            # split it into words (must be sorted from a list!)
            words = userInput.lower().split()
        
            # sort the word list in descending order
            words.sort(reverse=True)
        
            # print all elements
            print(*words)   
            
        else:
        
            # print error message
            print("Please enter letters and spaces only")
    
    else:
    
        # program is dead
        isRunning = False