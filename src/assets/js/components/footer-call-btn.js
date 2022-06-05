// call request
jQuery(".call-request__input").mask("(999) 999-99-99", {
    completed: function(){ jQuery('.call-request__btn').addClass('active') }
});
// footer call form
jQuery('.footer-col-me__btn').on('click', function () {
    jQuery('.call-request__form').addClass('active');
});

// tel footer
jQuery('#footer-thanks-btn').on('click', function () {
    jQuery('.call-request-thanks').removeClass('active');
});

document.addEventListener( 'wpcf7mailsent', function( event ) {
    let inputs = event.detail.inputs;
    for ( let i = 0; i < inputs.length; i++ ) {
        if ( 'call-tel' == inputs[i].name ) {
            jQuery('.call-request-thanks').addClass('active');
            break;
        }
    }
}, false );