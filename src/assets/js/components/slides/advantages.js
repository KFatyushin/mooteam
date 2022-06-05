let advantagesSlides = new Swiper('.advantages-list', {
    speed: 800,
    autoHeight: true,

    navigation: {
        prevEl: '.advantages-arrows .slides-arrows__prev',
        nextEl: '.advantages-arrows .slides-arrows__next',
    },

    pagination: {
        el: '.advantages-pagination',
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },

        575: {
            slidesPerView: 1,
            spaceBetween: 200,
        },

        991: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});