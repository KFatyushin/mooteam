let reviewsSlidesContent = new Swiper('.reviews-slides__content', {
    slidesPerView: 1,
    spaceBetween: 20,
});
let reviewsSlidesFrame = new Swiper('.reviews-slides__frame', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    navigation: {
        prevEl: '.reviews-arrows .slides-arrows__prev',
        nextEl: '.reviews-arrows .slides-arrows__next',
    },

    pagination: {
        el: '.reviews-pagination',
    },
});
reviewsSlidesContent.controller.control = reviewsSlidesFrame;
reviewsSlidesFrame.controller.control = reviewsSlidesContent;