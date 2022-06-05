let writeFormTextarea = jQuery('.form-textarea'),
    counter = jQuery('.form-counter__num');
writeFormTextarea.attr('maxlength', '1200');
writeFormTextarea.keyup(function() {
    let revText = this.value.length;

    counter.html(revText);
});