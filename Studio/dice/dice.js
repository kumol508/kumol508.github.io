    var friends = [
        "images/bey.jpg", "images/oddfuture.jpg", "images/annleslie.jpg", "images/turkey.jpg","images/princes.jpg","images/kardash.jpg"];
    
    var graduation = [
        "images/hsm.jpg", "images/bey.jpg"];
    
    var wedding = [
        "twilightwed.jpg", "haz.jpg"];
        
    var home = [
        ""];    
        
        var selectedfriends = false;
        var selectedgraduation = false;
        var selectedwedding = false;
        var selectedhome = false;
    
    $(".reveal1").click(function(){
        var nextfriends = friends[Math.floor(Math.random()*friends.length)];
        while (selectedfriends == nextfriends) {
            nextfriends = friends[Math.floor(Math.random()*friends.length)]};
            
            selectedfriends = nextfriends;
    
        $(".friends-holder").html('<img src="'+ friends[Math.floor(Math.random()*friends.length)]+'">'); 
        
        
    });
    
    $('.content, .content2, .content3, .content4, .content5').click(function(event) {
    var text     =  $(this).children('.text'),
        target   = $(this).data('target'),
        offset_y = $(target).offset().top;
    
    $(text).addClass('transition');
    
    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });

});
    
    (".reveal2").click(function(){
        var nextgraduation = graduation[Math.floor(Math.random()*graduation.length)];
        while (selectedgraduation == nextgraduation) {
            nextgraduation = graduation[Math.floor(Math.random()*graduation.length)]}
            
            selectedgraduation = nextgraduation;
    
        $(".graduation-holder").html('<img src="'+ graduation[Math.floor(Math.random()*graduation.length)]+'">');  
    
    });
    
    (".reveal3").click(function(){
      
        var nextwedding = wedding[Math.floor(Math.random()*wedding.length)];
        while (selectedwedding == nextwedding) {
            nextwedding = wedding[Math.floor(Math.random()*wedding.length)]};
            
            selectedwedding = nextwedding;
    
        $(".wedding-holder").html('<img src="'+ wedding[Math.floor(Math.random()*wedding.length)]+'">'); 
    
    });    
        
    (".reveal4").click(function(){    
        var nexthome = home[Math.floor(Math.random()*home.length)];
        while (selectedhome == nexthome) {
            nexthome = home[Math.floor(Math.random()*home.length)]};
            
            selectedhome = nexthome;
        
        $(".home-holder").html('<img src="'+ home[Math.floor(Math.random()*home.length)]+'">');
    });  