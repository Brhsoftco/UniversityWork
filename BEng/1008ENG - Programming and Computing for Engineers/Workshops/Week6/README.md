# Task Summary

## Question 1

### Task a)
Write a Python script that uses the data from `rainfall_southport_2006.txt` to find the maximum rainfall in January. **Your script must use `for` loops**.

Data is arranged as:
**Columns**: Months Jan-Dec
**Rows**: Hourly rainfall as an average of all days in the associated month

### Task b)
Using the data from Task a), write a Python program to find the maximum rainfall in each month along with the associated hour that this value belongs to (i.e., output `Max rainfall was 5mm at 10pm for Jan`).  **Your script must use `for` loops**.

## Question 2
Using the same data as in Question 1, write a Python script that utilises `for` loops to compute the mean
and standard deviation of the rainfall for any given month.

The user must be able to specify the month they wish to calculate the statistics for. Months can be represented as `January: 1`, `February: 2`, `March: 3` ...etc.

## Question 3
A file named `temp.dat` contains information collected from a set of thermocouples.

The first column consists of time measurements (one for each hour of the day), and the remaining columns correspond to temperature measurement at different sensor points in a process.

Write a Python program with nested loops to find all temperature readings greater than `85.0 ˚C` and print the values with the time and sensor point information.