jQuery(document).ready(function() {
    var currentSlide = 0;
    jQuery(document).keydown(function(e) {
        // left
        if (e.keyCode == '37') {
            jQuery('.slides .past').animate ({
                marginLeft: '-2400px'
            },500,function() {
                jQuery(this).removeClass('past').addClass('far-past');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '-1400px'
            },500,function() {
                jQuery(this).removeClass('current').addClass('past');
            });
            jQuery('.slides .future').animate ({
                marginLeft: '-450px'
            },500,function() {
                jQuery(this).removeClass('future').addClass('current');
            });
            jQuery('.slides .far-future:eq(0)').animate ({
                marginLeft: '500px'
            },500,function() {
                jQuery(this).removeClass('far-future').addClass('future');
            });
        // right
        } else if (e.keyCode == '39' || e.keyCode == '32') {
            jQuery('.slides .past').animate ({
                marginLeft: '-2400px'
            },500,function() {
                jQuery(this).removeClass('past').addClass('far-past');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '-1400px'
            },500,function() {
                jQuery(this).removeClass('current').addClass('past');
            });
            jQuery('.slides .future').animate ({
                marginLeft: '-450px'
            },500,function() {
                jQuery(this).removeClass('future').addClass('current');
            });
            jQuery('.slides .far-future:eq(0)').animate ({
                marginLeft: '500px'
            },500,function() {
                jQuery(this).removeClass('far-future').addClass('future');
            });
        }
    });
});