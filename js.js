$(document).ready(function () {
    $(window).scroll(function(){
        let value = this.window.scrollY;
        if(value > 500) {
            $("header").addClass("header-toggle");
            $("header").css("padding", "20px 100px");
        }else {
            $("header").removeClass("header-toggle");
            $("header").css("padding", "50px 100px");
        }
    });

    // mobile button
    $(".mobile-btn").click(function () {
        if($(this).hasClass("mobile-btn_toggle")) {
        $(this).removeClass("mobile-btn_toggle");
        $("#mobile-nav").css("left", "-100%");
        $("body").css("overflow", "scroll");
        }else {
        $(this).addClass("mobile-btn_toggle");
        $("#mobile-nav").css("left", "0");
        $("body").css("overflow", "hidden");
        }
    });

    // mobile nav button
    $("#mobile-nav a").click(function() {
        $(".mobile-btn").removeClass("mobile-btn_toggle");
        $("#mobile-nav").css("left", "-100%");
        $("body").css("overflow", "scroll");
    });
})