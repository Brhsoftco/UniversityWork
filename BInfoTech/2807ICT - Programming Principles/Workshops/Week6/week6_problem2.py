# function to figure out if the list is valid
def listValid(currentList):

    # split the list up
    splitList = currentList.split()
    
    # go through each entry
    for i in splitList:
        
        # numeric?
        if not i.isnumeric():
        
            # invalid list!
            return False
            
    # default
    return True

# sum calculation function
def sumList(providedList):
    
    # split the list into separate numbers
    splitList = providedList.split()
    
    # validation
    if len(splitList) > 1:
    
        # calculate sum based on first and last
        s = int(splitList[0]) + int(splitList[-1])
        
        # return the sum
        return s
        
    elif len(splitList) == 1:
    
        # sum is integer itself
        return int(splitList[0])
        
    else:
    
        # invalid!
        return None
        
# grab first list
firstList  = input("List 1: ")
secondList = input("List 2: ")

# valid lists?
if listValid(firstList) and listValid(secondList):

    # calculate sums
    firstSum = sumList(firstList)
    secondSum = sumList(secondList)

    # validation
    if firstSum is not None and secondSum is not None:

        # comparison
        largest = max(firstSum, secondSum)
    
        # print result
        print("Output: " + str(largest))
    
    else:

        # print error
        print("Please enter valid lists")
    
else:

    # print error
    print("Please enter valid lists")