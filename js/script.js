jQuery(document).ready(function() {
    var currentSlide = 0;
    var slideCount = jQuery('.slides > .slide').length;
    jQuery(document).keydown(function(e) {
        // left
        if (e.keyCode == '37') {

            if (currentSlide == 0) {
                return;
            }

            jQuery('.slides .far-past').eq(jQuery('.far-past').length - 1).animate ({
                marginLeft: '-1400px'
            },500,'linear',function() {
                jQuery(this).removeClass('far-past').addClass('past');
            });
            jQuery('.slides .past').animate ({
                marginLeft: '-450px'
            },500,'linear',function() {
                jQuery(this).removeClass('past').addClass('current');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '500px'
            },500,'linear',function() {
                jQuery(this).removeClass('current').addClass('future');
            });
            jQuery('.slides .future').animate ({
                marginLeft: '1500px'
            },500,'linear',function() {
                jQuery(this).removeClass('future').addClass('far-future');
            });
            currentSlide--;

        // right
        } else if (e.keyCode == '39' || e.keyCode == '32') {

            if (currentSlide == slideCount - 1) {
                return;
            }

            jQuery('.slides .past').animate ({
                marginLeft: '-2400px'
            },500,'linear',function() {
                jQuery(this).removeClass('past').addClass('far-past');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '-1400px'
            },500,'linear',function() {
                jQuery(this).removeClass('current').addClass('past');
            });
            jQuery('.slides .future').animate ({
                marginLeft: '-450px'
            },500,'linear',function() {
                jQuery(this).removeClass('future').addClass('current');
            });
            jQuery('.slides .far-future:eq(0)').animate ({
                marginLeft: '500px'
            },500,'linear',function() {
                jQuery(this).removeClass('far-future').addClass('future');
            });
            currentSlide++;

        }
    });
});