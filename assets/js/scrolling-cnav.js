//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").css("background-color","#2c2c2c");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
         $(".navbar-fixed-top").css("background-color","rgba(0,0,0,0.6)");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(".navbar")
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
