# grab status of the user
userStatusStr = input("Please input how many credits you currently have: ")

# cast the result
userStatus = int(userStatusStr)

# validation
if (userStatus >= 0 and userStatus < 300):

    # must be Bronze
    print("Your status tier is: Bronze")
elif (userStatus >= 300 and userStatus < 700):

    # must be Silver
    print("Your status tier is: Silver")
elif (userStatus >= 700 and userStatus < 1400):

    # must be Gold
    print("Your status tier is: Gold")
elif (userStatus >= 1400 and userStatus < 3600):

    # must be Platinum
    print("Your status tier is: Platinum")
else:

    # must be Platinum One
    print("Your status tier is: Platinum One")