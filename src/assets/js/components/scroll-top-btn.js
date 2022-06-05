// scroll top btn
jQuery(function() {
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() > 300) {
            jQuery('.scroll-top').fadeIn();
        } else {
            jQuery('.scroll-top').fadeOut();
        }
    });

    jQuery('.scroll-top').click(function() {
        jQuery('body,html').animate({scrollTop:0},0);
    });
});