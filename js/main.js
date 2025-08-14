(function($) {
    "use strict";
	
	
    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        // item photos
        var urlPhotos = 'img/works/';
        $('.photo').each(function(key, value) {
            $(this).css('background-image', 'url(' + urlPhotos + $(this).data('photo-src') + ')').fadeIn("slow");
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
        // lightBox
        $('.photo .bt-nav').on("click", function() {
            var idSlider = $(this).data('slider-id');
            var mystr = $(this).data('slider-items');
            var myarr = mystr.split("|");
            var item = '';
            $(this).addClass('open');
            myarr.forEach(function(value) {
                item += '<li class="slider-item ' + idSlider + '" style="background-image:url(' + urlPhotos + value + ')"></li>';
            });
            $('.lightbox').html('\
            <div class="cycle-slideshow" data-cycle-slides=".' + idSlider + '" data-cycle-pager="#page-slide-' + idSlider + '" id="' + idSlider +
                '"> \n\
                <ul> \n\
                    ' + item + ' \n\
                </ul> \n\
                <div class="page-slide" id="page-slide-' +
                idSlider + '"></div> \n\
                <span class="bt-nav close close-lightbox"><em>Close</em></span> \n\
            </div> \
        ');
            if (myarr.length <= 1) $('.lightbox').hide();
            $('.lightbox').show();
            setTimeout(function() {
                $('.lightbox').addClass('open');
            }, 40);
            $('#' + idSlider + '').cycle();
        });
        $(document).on("click", ".close-lightbox", function() {
            $('.lightbox, .photo').removeClass('open');
            setTimeout(function() {
                $('.lightbox').hide().empty();
            }, 400);
        });
    });
    // DOCUMENT.READY FUNCTION end
	
	
    // WINDOW.SCROLL FUNCTION start
    // scroll
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var scrollTop2 = $(window).scrollTop() + $('.box-menu-works').height();
        // header
        if ($(window).width() > 880) {
            if (scrollTop < ($('#page-home').height() - 70)) {
                if ($('body').hasClass('open')) {
                    $("body").css('padding-left', '0');
                    $("#header").stop().animate({
                        left: '-50px'
                    }, 300, function() {
                        // end animation
                        $("body").removeClass('secondary-experience open');
                        $("#header").css('left', 0).css('top', '-70px');
                        $("#header").stop().animate({
                            top: '0'
                        }, 300);
                    });
                } else {
                    $("#header").stop().animate({
                        top: '0'
                    }, 300, function() {
                        // end animation
                        $("body").removeClass('secondary-experience');
                    });
                }
            } else {
                if ($('body').hasClass('secondary-experience')) {
                    $("#header").css('top', 0);
                } else {
                    $("#header").stop().animate({
                        top: '-70px'
                    }, 300, function() {
                        // end animation
                        $("body").addClass('secondary-experience open');
                        $("#header").css('top', 0).css('left', '-50px');
                        $("#header").stop().animate({
                            left: '0'
                        }, 300);
                        $("body").css('padding-left', '0');
                    });
                }
            }
        }
        navWorksWidth(scrollTop);
    });
    // WINDOW.SCROLL FUNCTION end
	
	
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
	
	
    //
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