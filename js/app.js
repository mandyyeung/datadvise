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

// Isotope - filter

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
        $('#quicksearch').val('');

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

    $('#quicksearch').focus(function(){
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.resourceFilter .current').removeClass('current');
      $('#all-categories').addClass('current');

      // Isotope - search

      $( function() {
        // quick search regex
        var qsRegex;

        // init Isotope
        var $container = $('.resourceContainer').isotope({
          filter: function() {
            return qsRegex ? $(this).text().match( qsRegex ) : true;
          }
        });

        // use value of search field to filter
        var $quicksearch = $('#quicksearch').keyup( debounce( function() {
          qsRegex = new RegExp( $quicksearch.val(), 'gi' );
          $container.isotope();
        }, 200 ) );

      });

      // debounce so filtering doesn't happen every millisecond
      function debounce( fn, threshold ) {
        var timeout;
        return function debounced() {
          if ( timeout ) {
            clearTimeout( timeout );
          }
          function delayed() {
            fn();
            timeout = null;
          }
          timeout = setTimeout( delayed, threshold || 100 );
        }
      }

    });
});
