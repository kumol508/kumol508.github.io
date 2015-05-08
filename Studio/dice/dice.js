$('.friend-button').click(function() {
    var friend_options        = $('.friends li'),
        friend_options_length = friend_options.length,
        random_num            = Math.floor(Math.random() * friend_options_length),
        selected_friend       = friend_options[random_num],
        selected_image        = $(selected_friend).data('img'),
        selected_friendtext       = $(selected_friend).data('text');
        
        $('.friends li').addClass('.optionselected');
        $('.friend-holder').html('<img src="'+selected_image+'">'),
        $('.selectedfriend-holder').html('<img src="'+selected_image+'">'),
        $('.friend-text').html(selected_friendtext);
});

$('.graduation-button').click(function() {
    var graduation_options        = $('.graduation li'),
        graduation_options_length = graduation_options.length,
        random_num            = Math.floor(Math.random() * graduation_options_length),
        selected_graduation       = graduation_options[random_num],
        selected_image        = $(selected_graduation).data('img'),
        selected_gradtext       = $(selected_graduation).data('text');
        
        $('.graduation-holder').html('<img src="'+selected_image+'">');
        $('.selectedgraduation-holder').html('<img src="'+selected_image+'">');
        $('.graduation-text').html(selected_gradtext);
});

$('.home-button').click(function() {
    var home_options        = $('.home li'),
        home_options_length = home_options.length,
        random_num            = Math.floor(Math.random() * home_options_length),
        selected_home       = home_options[random_num],
        selected_image        = $(selected_home).data('img'),
        selectedhome_text       = $(selected_home).data('text');
        
        $('.home-holder').html('<img src="'+selected_image+'">');
        $('.selectedhome-holder').html('<img src="'+selected_image+'">');
        $('.home-text').html(selectedhome_text);
        
});

$('.wedding-button').click(function() {
    var wedding_options        = $('.wedding li'),
        wedding_options_length = wedding_options.length,
        random_num            = Math.floor(Math.random() * wedding_options_length),
        selected_wedding       = wedding_options[random_num],
        selected_image        = $(selected_wedding).data('img'),
        selectedwedding_text  = $(selected_wedding).data('text');
        
        $('.wedding-holder').html('<img src="'+selected_image+'">');
        $('.selectedwedding-holder').html('<img src="'+selected_image+'">');
        $('.wedding-text').html(selectedwedding_text);
});


    $('.content,.button,.friend-button,.graduation-button,.home-button,.wedding-button,.button-end').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

    });
   

  $(".frame1title").mouseenter(function(){
        $(".friend-text").show();
    });

  $(".frame1title").mouseleave(function(){
        $(".friend-text").hide();
    });
    
  $(".frame2title").mouseenter(function(){
        $(".graduation-text").show();
    });

  $(".frame2title").mouseleave(function(){
        $(".graduation-text").hide();
    }); 
    
  $(".frame3title").mouseenter(function(){
        $(".home-text").show();
    });

  $(".frame3title").mouseleave(function(){
        $(".home-text").hide();
    });    
    
  $(".frame4title2").mouseenter(function(){
        $(".wedding-text").show();
    });

  $(".frame4title2").mouseleave(function(){
        $(".wedding-text").hide();
    });    