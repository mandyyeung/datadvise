// Sticky header

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').removeClass("navbar-default");
        $('nav').addClass("sticky-nav");
    }
    else{
        $('nav').removeClass("sticky-nav");
        $('nav').addClass("navbar-default");
    }
});

// Isotope

$(window).load(function(){
    var $container = $('#resourceContainter');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.resourceFilter a').click(function(){
        $('.resourceFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
