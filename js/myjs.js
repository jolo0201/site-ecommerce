$(document).ready(function() {
    $('a[href*="#"]').on('click',function (e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname
        && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
        }
        
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = "";
        });
    });

    $('.carousel').carousel({
      interval:2500
    });
});





