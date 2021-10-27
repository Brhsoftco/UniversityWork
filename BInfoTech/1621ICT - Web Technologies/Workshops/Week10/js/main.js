function pageSetup() {
    
    // the selector will match all input controls of type :checkbox
    // and attach a click event handler
    $("input:checkbox").on('click', function () {

        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);

        // check status verification
        if ($box.is(":checked")) {

            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";

            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);

            // select
            $box.prop("checked", true);
        } else {

            // deselect
            $box.prop("checked", false);
        }
    });
}

function redirectStart() {
    var url = location.protocol + '//' + location.host + location.pathname;
    window.location = url;
}

function redirectListing() {
    
    var existingArgsString = window.location.search.substr(1);
    var newArgs = "";

    //argument verification
    if (existingArgsString != "") {
        var existingArgs = existingArgsString.split("&")
        var bannedArgs = ["v"];
    
        for (var i = 0; i < existingArgs.length; i++) {

            //argument in question
            var a = existingArgs[i];
            
            //verify
            if (a != "") {

            //check banned args
            if (!bannedArgs.includes(a.split("=")[0])) {

                //append
                newArgs += a + "&";
            }
            }
        
        }
    }

    var args = newArgs != "" ? "?v=listing&" + newArgs : "?v=listing";
    var url = location.protocol + '//' + location.host + location.pathname + args;
    window.location = url;
}