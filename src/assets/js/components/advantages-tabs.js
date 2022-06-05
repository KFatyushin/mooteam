jQuery('.advantages-list__item').on('click', function () {
    let currTab = jQuery(this).index();

    jQuery('.advantages-list__item').removeClass('active');
    jQuery(this).addClass('active');
});