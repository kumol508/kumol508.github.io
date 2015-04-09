$('.bar').hover(function() {
    //on
   $(this).addClass('hide');
}, function() {
    // off
});

$('.bar-off').hover(function() {
    //on
   $(this).addClass('hide');
}, function() {
    // off
});


// $('.text').click(function() {
//     $(this).addClass('transition');
// });


$('.section, .section2, .section3, .section4, .section5, .section6, .section7, .section8, .section9, .section10, .section11, .section12').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});

$('.usection, .usection2, .usection3, .usection4, .usection5, .usection6, .usection7, .usection8, .usection9, .usection10, .usection11, .usection12').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});

$('.tsection, .tsection2').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});

