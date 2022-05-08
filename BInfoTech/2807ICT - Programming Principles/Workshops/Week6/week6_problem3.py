# grab string from user
userInput = input("String: ")

# make it lowercase
userInput = userInput.lower()

# validate the string
if userInput.isalpha():

    # when a g isn't happy, this flag is set
    gFail = False
    
    # counter
    i = 0
    
    # go through each character
    for c in userInput:
        
        # character 'g'?
        if c == 'g':
        
            # happiness
            happy = False
        
            # last character?
            if (i + 1) == len(userInput):
                
                # length isn't 1 (no friend == not happy!)
                if len(userInput) > 1:
                
                    # only check left
                    left  = userInput[i - 1]
                
                    # happy?
                    happy = left == 'g'
                
            # first character?
            elif i == 0:
            
                # only check right
                right = userInput[i + 1]
                
                # happy?
                happy = right == 'g'
                
            # all others
            else:
            
                # grab applicable characters
                left  = userInput[i - 1]
                right = userInput[i + 1]
                
                # happy?
                happy = left == 'g' or right == 'g'
                
            # not happy?
            if not happy:
            
                # fail!
                gFail = True
            
                # exit loop
                break
        
        # increment counter
        i += 1
    
    # print result
    print("Happy: " + str(not gFail))
    
else:

    # print error messaqe
    print("Invalid string")