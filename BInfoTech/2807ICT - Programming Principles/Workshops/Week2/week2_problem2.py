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


def getAnnualSalary():
    # grab the annual salary
    return getValue("Please enter annual salary: ")


def getDailyHours():
    # grab the daily hours
    return getValue("Please enter the amount of hours worked in a day: ")


def getDaysPerWeek():
    # grab the days per week
    return getValue("Please enter the amount of work days per week: ")


# MAIN SCRIPT
salary = getAnnualSalary()

# validate
if salary > 0:

    days = getDaysPerWeek()

    # validate
    if days > 0:

        hours = getDailyHours()

        # validate
        if hours > 0:

            # do the calculations
            totalHours = (hours * days * 52)
            wage = salary / totalHours

            # output result
            print("Hourly wage: AU$" + str(wage) + "/hr")

        else:

            # error out
            print("Invalid hours value; it must be a number above zero and it must not be a decimal")

    else:

        # error out
        print("Invalid working days value; it must be a number above zero and it must not be a decimal")

else:

    # error out
    print("Invalid salary value; it must be a number above zero and it must not be a decimal")
