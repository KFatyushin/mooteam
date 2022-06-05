let opportunityForWhomTabs = new Swiper('.opportunity-for-whom-tabs', {
    slidesPerView: 4,
    direction: 'vertical',

    breakpoints: {
        0: {
            slidesPerView: 4,
            direction: 'horizontal',
        },
        575: {
            slidesPerView: 'auto',
            direction: 'horizontal',
            freeMode: true,
        },
        1170: {
            slidesPerView: 4,
            direction: 'vertical',
        }
    }
});
let opportunityForWhomIMGS = new Swiper('.opportunity-for-whom-img-list__container', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 800,

    thumbs: {
        swiper: opportunityForWhomTabs
    },

    pagination: {
        el: '.opportunity-for-whom-pagination',
    },

    navigation: {
        prevEl: '.opportunity-for-whom-arrows .slides-arrows__prev',
        nextEl: '.opportunity-for-whom-arrows .slides-arrows__next',
    },
});
opportunityForWhomIMGS.controller.control = opportunityForWhomTabs;