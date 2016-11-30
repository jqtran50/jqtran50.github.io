$(document).ready(function() {
    $("#sidebar-button").click(function() {
        if ($(".sidebar-container").hasClass("sidebar-active")) {
            $("body").removeClass("no-scroll");
            $("#sidebar-button").removeClass("button-active");
            $(".sidebar-container").removeClass("sidebar-active");
            $(".page-wrapper").removeClass("wrapper-active");
        } else {
            $("#sidebar-button").addClass("button-active");
            $(".sidebar-container").addClass("sidebar-active");
            $(".page-wrapper").addClass("wrapper-active");
            setTimeout(function() {
                $("body").addClass("no-scroll");
            }, 300);
        }
            
    });

    
    $(".page-wrapper").click(function () {
        if ($('.page-wrapper').hasClass("wrapper-active")) {
            $("body").removeClass("no-scroll");
            $("#sidebar-button").removeClass("button-active");
            $(".sidebar-container").removeClass("sidebar-active");
            $(".page-wrapper").removeClass("wrapper-active");
        }
    });

    
    $("#carousel-next").click(function () {
        var mar_left_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        var btn = $("#carousel-next");
    		setTimeout(function() {
        	btn.prop("disabled", true); 
    		}, 300);
        if (mar_left_val == -8640) {
            return false;
        } else {
            mar_left_val -= 1080;
            $("#carousel").css("margin-left", mar_left_val.toString() + "px");
        }

    });
    
    
    $("#carousel-prev").click(function () {
        var mar_left_val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (mar_left_val == 0) {
            return false;
        } else {
            mar_left_val += 1080;
            $("#carousel").css("margin-left", mar_left_val.toString() + "px");
        }

    });


});