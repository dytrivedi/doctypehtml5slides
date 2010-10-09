jQuery(document).ready(function() {
    var slideShow = {
        currentSlide: 0,
        slideCount: jQuery('.slides > .slide').length,
        delay: 1000,
        animating: false,
        movePrev: function() {
            if (this.currentSlide == 0 || this.animating) {
                return;
            }
            this.animating = true;
            jQuery('.slides .far-past').eq(jQuery('.far-past').length - 1).animate ({
                marginLeft: '-1400px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('far-past').addClass('past');
            });
            jQuery('.slides .past').animate ({
                marginLeft: '-450px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('past').addClass('current');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '500px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('current').addClass('future');
                slideShow.animating = false;
            });
            jQuery('.slides .future').animate ({
                marginLeft: '1500px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('future').addClass('far-future');
                slideShow.animating = false;
            });
            this.currentSlide--;
        },
        moveNext: function() {
            if (this.currentSlide == this.slideCount - 1 || this.animating) {
                return;
            }
            this.animating = true;
            jQuery('.slides .past').animate ({
                marginLeft: '-2400px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('past').addClass('far-past');
            });
            jQuery('.slides .current').animate ({
                marginLeft: '-1400px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('current').addClass('past');
                slideShow.animating = false;
            });
            jQuery('.slides .future').animate ({
                marginLeft: '-450px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('future').addClass('current');
            });
            jQuery('.slides .far-future:eq(0)').animate ({
                marginLeft: '500px'
            },this.delay,'swing',function() {
                jQuery(this).removeClass('far-future').addClass('future');
            });
            this.currentSlide++;
        }
    }
    var i = 1;
    jQuery('span.counter').each(function(){
        jQuery(this).html(i);
        i++;
    });
    jQuery(document).keydown(function(e) {
        // left
        if (e.keyCode == '37') {
            slideShow.movePrev();
        // right
        } else if (e.keyCode == '39' || e.keyCode == '32') {
            slideShow.moveNext();
        }
    });
});