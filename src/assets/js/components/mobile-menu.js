// menu
jQuery('.hamburger').on('click', function () {
    jQuery('.header-menu').slideToggle('');

    // menu open
    jQuery('.hamburger').toggleClass('open');
});