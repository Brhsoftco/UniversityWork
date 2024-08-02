def isValidNumber(numberInput):
    try:

        # try and convert
        n = float(numberInput)

        # if we get here, then it's a number...but is it above zero?
        return True if n > 0 else False

    except ValueError:

        # error; not a number
        return False


def getValue(prompt):
    print(prompt)
    v = input()

    # validation
    if isValidNumber(v):

        # valid; return result
        return float(v)

    else:

        # error
        return -1


def getMarks():
    # grab the small halls
    return getValue("How many marks? ")


# MAIN SCRIPT
marks = getMarks()

# validate
if (marks > 0 and marks <= 100):

    # go through each grade possibility
    if (marks >= 85):
    
        # grade 7
        print("Grade awarded: 7")
        
    else:
        
        

else:

    # error out
    print("Invalid marks value; it must be a number above zero and it must not be a decimal. It also cannot be above 100.")
