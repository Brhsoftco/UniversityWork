$(".menu-list-activator").hover(
    function() {
        $(this).css("background-color", "#2ecc71");
        $(this).parent().find(".menu-list-content").css("opacity", "100%");
    },
    function() {
        $(this).css("background-color", "#ccc");
        $(this).parent().find(".menu-list-content").css("opacity", "0");
    }
);
$(".menu-list-content").hover(
    function() {
        var btn = $(this).parent().find(".menu-list-activator");
        var status = btn.css("background-color");
        console.log(status);
        if (status != "rgb(204, 204, 204)")
            $(this).css("opacity", "100%");
    },
    function() {
        var btn = $(this).parent().find(".menu-list-activator");
        var status = btn.css("background-color");
        if (status == "rgb(204, 204, 204)")
            $(this).css("opacity", "0");
    }
);