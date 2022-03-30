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


def getHeight():
    # grab the height
    return getValue("Please enter height: ")


def getLitresNeeded():
    # grab the litres needed
    return getValue("Please enter volume of concrete (L/m^2): ")


def getWidth():
    # grab the width
    return getValue("Please enter width: ")


# MAIN SCRIPT
width = getWidth()

# validate
if width > 0:

    height = getHeight()

    # validate
    if height > 0:

        volume = getLitresNeeded()

        # validate
        if volume > 0:

            # do the calculations
            area = (height * width)
            concrete = area * volume

            # output result
            print("Total amount of concrete required: " + str(concrete) + "L")

        else:

            # error out
            print("Invalid volume value; it must be a number above zero")

    else:

        # error out
        print("Invalid height value; it must be a number above zero")

else:

    # error out
    print("Invalid width value; it must be a number above zero")
