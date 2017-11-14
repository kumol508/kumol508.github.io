$('.content,.button,.friend-button,.graduation-button,.home-button,.wedding-button,.button-end').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

    });
   
$('.option1,.option2').click(function(){
    $('.wrong,.buttontext1').toggle('slow');
})
$('.option3,.option4').click(function(){
    $('.wrong2,.buttontext2').toggle('slow');
})

$('.option5,.option6').click(function(){
    $('.wrong3,.buttontext3').toggle('slow');
})

$('.option7,.option8').click(function(){
    $('.wrong4,.buttontext4').toggle('slow');
})

$('.option9,.option10').click(function(){
    $('.wrong5,.buttontext5').toggle('slow');
})

window.onload = function () {
    document.getElementById('button').onclick = function () {
        document.getElementById('modal').style.display = "none"
    };
};