import importlib as lib

#process requirements located in different files
clib = lib.import_module("lib.Console")

#get user input for scalar
clib.print_info("ENTER MARK: ")
m = input()

#proceed with validation
if m.isnumeric():
    
    #re-cast input
    m = int(m)
    
    #range validation
    if m > 0 and m <= 100:
    
        #result
        p = m >= 50
    
        #output result
        clib.print_info("MARK RESULT:")
        
        #passed?
        if p:
            clib.print_success("PASS")
        else:
            clib.print_error("FAIL")
        
    else:
        
        #communicate issue
        clib.print_error("Invalid mark value")
    
else:

    #communicate issue
    clib.print_error("Invalid mark value")