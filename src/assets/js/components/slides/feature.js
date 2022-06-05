let featureBTNS = new Swiper('.feature-btns', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    // freeMode: true,
    speed: 800,
    watchSlidesProgress: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
});
let featureContent = new Swiper('.feature-content__container', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    thumbs: {
        swiper: featureBTNS
    }
});