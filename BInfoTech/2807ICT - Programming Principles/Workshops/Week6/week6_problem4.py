# boundaries we're looking at here
numberOfStudents = 5
numberOfCourses  = 4

# function to figure out if a course mark entry is valid
def coursesValid(currentList):

    # split the list up
    splitList = currentList.split()
    
    # validate courses boundary
    if len(splitList) == numberOfCourses:
    
        # go through each entry
        for i in splitList:
        
            # numeric?
            if not i.isnumeric():
        
                # invalid list!
                return False
                
    else:
    
        # invalid amount of courses
        return False
            
    # default
    return True

# store all students and their courses here (2D list)
data = []

# grab all inputs
for i in range(0, numberOfStudents):
    
    # student number (readable)
    studentNumber = i + 1
    
    # prompt user
    studentData = input("Student " + str(studentNumber) + " (courses 1-" + str(numberOfCourses) + "): ")
    
    # validate the list
    if coursesValid(studentData):
        
        # split up the data
        dSplit = studentData.split()
        
        # append to the data array
        data.append(dSplit)
        
    else:
    
        # error
        print("Invalid entry")
        
        # exit the loop
        break

# validation
if len(data) == numberOfStudents:

    # store averages here
    studentAverages = []
    coursesAverages = []
      
    # go through and process student data
    for d in data:
        
        # conversion of string array to integers
        dConverted = [int(n) for n in d]
        
        # calculate student average
        s = sum(dConverted) / numberOfCourses
        
        # append student average
        studentAverages.append(s)

    # go through and process courses data
    for c in range(0, numberOfCourses):

        # store total here
        courseTotal = 0
        
        # go through each student
        for d in data:
            
            # apply course data
            courseTotal += int(d[c])
            
        # calculate average
        a = courseTotal / numberOfStudents
        
        # append course average
        coursesAverages.append(a)
        
    # report result
    print("The highest average mark of students: " + str(max(studentAverages)))
    print("The highest average mark of courses: " + str(max(coursesAverages)))