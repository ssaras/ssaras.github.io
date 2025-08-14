(function($) {
    "use strict";
		
    // $('.about-hot-slider').slick();

    $(".link-underline-menu").on("click", function(){
        // alert("hi");
        $("#text-logo-lifestyle").click()
    });

    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        // item photos
        var urlPhotos = 'img/works/';
        $('.photo').each(function(key, value) {
            $(this).css('background-image', 'url(' + urlPhotos + $(this).data('photo-src') + ')').fadeIn("fast");
        });
        // hidden container
        $('.open-hidden-container').on("click", function() {
            if ($('.hidden-container, .hidden-container-left').hasClass('open')) {
                $(".hidden-container, .hidden-container-left").removeClass('open');
                $(".hidden-container, .hidden-container-left").addClass('close');
            } else {
                $(".hidden-container, .hidden-container-left").removeClass('close');
                $(".hidden-container, .hidden-container-left").addClass('open');
            }
        });
    });
    // DOCUMENT.READY FUNCTION end
	
    // WINDOW.RESIZE FUNCTION start
    $(window).resize(function() {
        navWorksWidth($(window).scrollTop());
    });
    // WINDOW.RESIZE FUNCTION end
	
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
        navWorksWidth($(window).scrollTop());
    });
    // WINDOW.LOAD FUNCTION end
	
	
    function navWorksWidth(scrollTop) {
        if ($(window).width() > 900) {
            // item page 1
            if (scrollTop > ($("#item-page-1").offset().top + ($("#page-home").height() / 2)) && scrollTop < ($("#item-page-2").offset().top - 70)) {
                $("#menu-item-page-1").addClass('fixed');
                
            } else {
                $('#menu-item-page-1').removeClass('fixed').css('width', '50%');
            }
            // item page 2
            if (scrollTop > ($("#item-page-2").offset().top + ($("#page-home").height() / 2)) && scrollTop < ($("#page-services").offset().top - 70)) {
                $("#menu-item-page-2").addClass('fixed');
                
            } else {
                $('#menu-item-page-2').removeClass('fixed').css('width', '50%');
            }
        }
    }
	
	
})(jQuery);