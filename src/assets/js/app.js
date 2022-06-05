//= ../../../node_modules/swiper/swiper-bundle.js

// COMPONENTS
//= components/jQueryMaskedInputPlugin.js
//= components/mobile-menu.js
//= components/footer-call-btn.js
//= components/advantages-tabs.js
//= components/tariffs-calc.js
//= components/popup.js
//= components/scroll-top-btn.js
//= components/wiki-search.js
//= components/annexes-show-item.js
//= components/counter-form.js

// COMPONENTS => SLIDES
//= components/slides/tool.js
//= components/slides/advantages.js
//= components/slides/reviews.js
//= components/slides/tariffs-list.js
//= components/slides/opportunity-for-whom-tabs.js
//= components/slides/additional-benefits-imgs-left.js
//= components/slides/feature.js
//= components/slides/extra.js
//= components/slides/what-necessary-list.js
//= components/slides/annexes-btns.js
//= components/slides/partners-list.js
//= components/slides/slides-wiki.js

jQuery(window).on('load', function() {
    let windowWidth = jQuery(this).innerWidth();
    let headerMenuBTN = jQuery('.header-menu-list__popup');

    headerMenuBTN.removeAttr("href");

    if (windowWidth <= 766) {
        headerMenuBTN.on('click', function (evt) {
            evt.preventDefault();

            jQuery(this).siblings(jQuery('.header-submenu')).toggle('');

            jQuery(this).find(jQuery('svg')).toggleClass('active');
        });
    }
    headerMenuBTN.on('click', function (evt) {
        evt.preventDefault();
    });

    let wikiSidebarBTN = jQuery('.wiki-sidebar__btn');
    wikiSidebarBTN.removeAttr('href');

    wikiSidebarBTN.on('click', function (evt) {
        evt.preventDefault();

        if (windowWidth <= 990) {
            if (jQuery(this).siblings().css('display') === 'block') {
                wikiSidebarBTN.siblings().slideUp();
                wikiSidebarBTN.removeClass('active');
            } else  {
                // open menu
                wikiSidebarBTN.siblings().slideUp();
                jQuery(this).siblings().slideToggle();

                // active btn
                wikiSidebarBTN.removeClass('active');
                jQuery(this).toggleClass('active');
            }

            jQuery(document).mouseup(function (e) {
                let container = jQuery(".wiki-sidebar > li");

                if (container.has(e.target).length === 0){
                    wikiSidebarBTN.siblings().slideUp();
                    wikiSidebarBTN.removeClass('active');
                }
            });

        } else {
            jQuery(this).siblings().slideToggle();

            jQuery(this).toggleClass('active');
        }
    });

    // open submenu
    let wikiSidebarSubmenuBTN = jQuery('.wiki-sidebar-menu__btn');
    wikiSidebarSubmenuBTN.removeAttr("href");

    wikiSidebarSubmenuBTN.on('click', function (evt) {
        evt.preventDefault();

        jQuery(this).parent().siblings('.wiki-sidebar-submenu').slideToggle();

        jQuery(this).toggleClass('active');
    });

    if (windowWidth < 991) {
        wikiSidebarBTN.removeClass('active');
        jQuery('.wiki-sidebar-menu__btn').removeClass('active');
    }
});