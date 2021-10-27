function pageSetup() {
    $(".menu-list-activator").hover(
        function () {
        $(this).css("background-color", "#2ecc71");
        $(this).parent().find(".menu-list-content").css("opacity", "100%");
    },
        function () {
        $(this).css("background-color", "#ccc");
        $(this).parent().find(".menu-list-content").css("opacity", "0");
    });
    $(".menu-list-content").hover(
        function () {
        var btn = $(this).parent().find(".menu-list-activator");
        var status = btn.css("background-color");
        console.log(status);
        if (status != "rgb(204, 204, 204)")
            $(this).css("opacity", "100%");
    },
        function () {
        var btn = $(this).parent().find(".menu-list-activator");
        var status = btn.css("background-color");
        if (status == "rgb(204, 204, 204)")
            $(this).css("opacity", "0");
    });

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