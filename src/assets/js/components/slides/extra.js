let extraSlides = new Swiper('.extra-slides', {
    slidesPerView: 'auto',
    freeMode: true,
    watchOverflow: true,

    breakpoints: {
        0: {
            slidesPerColumn: false,
            spaceBetween: 60,
        },

        991: {
            slidesPerColumn: 2,
            spaceBetween: 0,
        }
    },

    pagination: {
        el: '.extra-list-pagination',
    },
});
let extraContactSlides = new Swiper('.contact-extra-slides', {
    slidesPerView: 'auto',
    freeMode: true,
    watchOverflow: true,
    spaceBetween: 60,

    pagination: {
        el: '.extra-list-pagination',
    },
});