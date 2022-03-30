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


def getSmallHalls():
    # grab the small halls
    return getValue("Please enter amount of small exam halls: ")


def getLargeHalls():
    # grab the large halls
    return getValue("Please enter amount of large exam halls: ")


# MAIN SCRIPT
small = getSmallHalls()

# validate
if small > 0:

    large = getLargeHalls()

    # validate
    if large > 0:

        # do the calculations
        totalSpots = (large * 45) + (small * 22)
        classes = totalSpots // 25

        # output result
        print("Total classes: " + str(classes))

    else:

        # error out
        print("Invalid large halls value; it must be a number above zero and it must not be a decimal (you cannot "
              "have half of a building!)")

else:

    # error out
    print("Invalid small halls value; it must be a number above zero and it must not be a decimal (you cannot "
          "have half of a building!)")
