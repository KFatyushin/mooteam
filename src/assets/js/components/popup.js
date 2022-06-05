// popup function
const popup = (object, open, hash = false) => {
    open.on('click', function (evt) {
        evt.preventDefault();

        object.addClass('active');
    });

    jQuery('.popup__close').on('click', function () {
        object.removeClass('active');
    });
    jQuery('.popup__overlay').on('click', function () {
        object.removeClass('active');
    });

    if (window.location.hash === hash) {
        object.addClass('active');
    }
};

// popup tariffs
let popupTariffs = jQuery('.popup-tariffs'),
    tariffsBTN = jQuery('.tariffs-main-list .tariffs-item__btn .btn');
popup(popupTariffs, tariffsBTN);

// popup corporation
let popupCorporation = jQuery('.popup-corporation'),
    corporationBTN = jQuery('.tariffs-item__col-my .btn');
popup(popupCorporation, corporationBTN);