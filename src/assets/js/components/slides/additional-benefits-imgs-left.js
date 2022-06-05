let additionalBenefitsImgsLeft = new Swiper('.additional-benefits-imgs__left-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    pagination: {
        el: '.additional-benefits-imgs__left-pagination',
    },

    navigation: {
        prevEl: '.additional-benefits-imgs__left-arrows .slides-arrows__prev',
        nextEl: '.additional-benefits-imgs__left-arrows .slides-arrows__next',
    },
});
let additionalBenefitsIMGSRight = new Swiper('.additional-benefits-imgs__right-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    pagination: {
        el: '.additional-benefits-imgs__right-pagination',
    },

    navigation: {
        prevEl: '.additional-benefits-imgs__right-arrows .slides-arrows__prev',
        nextEl: '.additional-benefits-imgs__right-arrows .slides-arrows__next',
    },
});