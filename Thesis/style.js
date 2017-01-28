    $('.content,.button').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

    });
   
