// tariffs calc
let formatter = new Intl.NumberFormat("ru");

jQuery('.quantity__minus').on('click', function () {
    // coutn
    let count = jQuery(this).parent().find(jQuery('.quantity__count'));
    let countMin = count.data('min');

    // price
    let blockID = jQuery(this).parent().data('id');
    let price = jQuery('.tariffs-price__sum');

    if (count[0].innerText > countMin) {
        count[0].innerText -= 1;

        price[blockID].innerText = formatter.format(price[blockID].innerText.replace(/\s+/g,'') - 100);
    } else {
        count[0].innerText = countMin;
    }
});
jQuery('.quantity__plus').on('click', function () {
    // count
    let count = jQuery(this).parent().find(jQuery('.quantity__count'));

    count[0].innerText = count[0].innerText * 1 + 1;

    // price
    let blockID = jQuery(this).parent().data('id');
    let price = jQuery('.tariffs-price__sum');

    price[blockID].innerText = formatter.format(price[blockID].innerText.replace(/\s+/g,'') * 1 + 100);
});