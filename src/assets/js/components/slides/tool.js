let toolSlides = new Swiper('.tool-list', {
    autoHeight: true,

    breakpoints: {
        0: {
            slidesPerView: 8,
        },

        575: {
            slidesPerView: 1,
            spaceBetween: 200,
        },

        991: {
            slidesPerView: 8,
            spaceBetween: 0,
        }
    }
});
let toolSlidesIMG = new Swiper('.tool-list-img__slides', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 50,
    speed: 800,

    thumbs: {
        swiper: toolSlides
    },

    navigation: {
        prevEl: '.tool-arrows .slides-arrows__prev',
        nextEl: '.tool-arrows .slides-arrows__next',
    },

    pagination: {
        el: '.tool-pagination',
    },
});
toolSlidesIMG.controller.control = toolSlides;