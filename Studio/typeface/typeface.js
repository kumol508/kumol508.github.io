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


$('.section, .section2').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});

$('section3').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});
