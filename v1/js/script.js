//$(window).load(function () {
//    $("#preloader").delay(1000).fadeOut(1000);
//    $("#all").delay(2000).fadeIn(1000);
//});

$(document).ready(function () {

    $(window).scroll(function () {
        var y = $(window).scrollTop();
        var height = $(window).height();
        if (y > height) {
            $('nav').fadeIn();
            $('#toggle').fadeIn();
            $('aside').fadeIn();
        } else {
            $('nav').fadeOut();
            $('#toggle').fadeOut();
            $('aside').fadeOut();
        }
    });

    $(window).scroll(function () {
        var y = $(window).scrollTop();
        var height = $(window).height();
        if (y > 2 * height) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });


    $('a[href^="#"]').on('click', function (evt) {
        evt.preventDefault();
        var target = $(this).attr('href');
        $('html, body')
            .stop()
            .animate({
                scrollTop: $(target).offset().top
            }, 900);
    });

    var terms = ["Tarbes", "Web", "Infographie", "Communication"];

    function rotateTerm() {
        var ct = $("#mmiword").data("term") || 0;
        $("#mmiword").data("term", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct]).fadeIn().delay(1000).fadeOut(1000, rotateTerm);
    }

    $(rotateTerm);

    $("#toggle").click(function () {
        $("nav").toggleClass("onoff");
        $(".asidea").toggleClass("onoff2");
        $('.bar').toggleClass('animate');
    });

    $("nav").click(function () {
        $("nav").toggleClass("onoff");
        $(".asidea").toggleClass("onoff2");
        $('.bar').toggleClass('animate');
    });

    $(".asidea").click(function () {
        $("nav").toggleClass("onoff");
        $(".asidea").toggleClass("onoff2");
        $('.bar').toggleClass('animate');
    });

    $(window).scroll(function () {
        var y = $(window).scrollTop();
        var apropospos = $("#apropos").offset().top - 1;
        var travauxpos = $("#travaux").offset().top - 1;
        var competencespos = $("#competences").offset().top - 1;
        var contactpos = $("#contact").offset().top - 1;
        if (y > apropospos) {
            $("nav>ul>li:nth-child(1)").css("background", "rgba(0, 0, 0, 0.1)");
            $("nav>ul>li:nth-child(2)").css("background", "transparent");
            $("nav>ul>li:nth-child(3)").css("background", "transparent");
            $("nav>ul>li:nth-child(4)").css("background", "transparent");
        }
        if (y > travauxpos) {
            $("nav>ul>li:nth-child(2)").css("background", "rgba(0, 0, 0, 0.1)");
            $("nav>ul>li:nth-child(1)").css("background", "transparent");
            $("nav>ul>li:nth-child(3)").css("background", "transparent");
            $("nav>ul>li:nth-child(4)").css("background", "transparent");
        }
        if (y > competencespos) {
            $("nav>ul>li:nth-child(3)").css("background", "rgba(0, 0, 0, 0.1)");
            $("nav>ul>li:nth-child(1)").css("background", "transparent");
            $("nav>ul>li:nth-child(2)").css("background", "transparent");
            $("nav>ul>li:nth-child(4)").css("background", "transparent");
        }
        if (y > contactpos) {
            $("nav>ul>li:nth-child(4)").css("background", "rgba(0, 0, 0, 0.1)");
            $("nav>ul>li:nth-child(1)").css("background", "transparent");
            $("nav>ul>li:nth-child(2)").css("background", "transparent");
            $("nav>ul>li:nth-child(3)").css("background", "transparent");
        }
    });

    /*** Scroll down fadeout nav, scroll up fadein  ***/

    /*
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("nav").css("opacity", "0.7");
        } else {
            $("nav").css("opacity", "1");
        }
        lastScrollTop = st;
    }); */

});