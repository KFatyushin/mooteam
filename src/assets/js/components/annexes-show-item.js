// Annexes Show Item
jQuery('.annexes__item-show').on('click', function () {
    jQuery('.annexes-list').removeClass('hidden');
    jQuery(this).css({display: 'none'});
});

// Tabs Annexes
jQuery('.annexes-btns__item').on('click', function () {
    let currTab = jQuery(this).index();

    jQuery('.annexes-btns__item').removeClass('active');
    jQuery(this).addClass('active');

    jQuery('.annexes-list').removeClass('active');
    jQuery('.annexes-list').eq(currTab).addClass('active');
});