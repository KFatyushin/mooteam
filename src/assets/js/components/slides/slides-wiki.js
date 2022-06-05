let wikiImgSlides = new Swiper('.wiki-img-slides__container', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    navigation: {
        prevEl: '.wiki-img-slides-arrows .slides-arrows__prev',
        nextEl: '.wiki-img-slides-arrows .slides-arrows__next',
    },

    pagination: {
        el: '.wiki-img-slides-pagination',
    },
});

let wikiSidebarSlide = new Swiper('.wiki-sidebar-container', {
    slidesPerView: 'auto',
    freeMode: true,
    watchOverflow: true,
});