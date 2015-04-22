var cats = [
    
    "http://40.media.tumblr.com/0df3962a16e53fca3f002295d9badbf8/tumblr_nmrh37nF2X1qgn992o1_1280.jpg",
    
    "http://41.media.tumblr.com/4f67fea0aae2a53e49b1b7c033cc09a3/tumblr_nmekvlBuGI1qgn992o1_1280.jpg",
    
    "http://36.media.tumblr.com/6acc11633ae4031089f24631fdb10460/tumblr_nlonfnrMsf1qgn992o1_1280.jpg",
    
    "http://41.media.tumblr.com/e7d92bf9ff7e7bd6a398c21e1bd0eb2a/tumblr_nlhabwKYO11qgn992o1_500.jpg",
    
    "http://40.media.tumblr.com/dfb694a9441369587fa6fbace7f1300a/tumblr_nlhadzYa621qgn992o1_500.jpg"
    
    ];
    
    
    var poems = [
        "Roses are red", "Violets are Blue", "Look out on the doorstep", "Oh my god, it's flaming poo"];
        
        var selectedpoem = false;
    
    $(".go-button").click(function(){
        var nextpoem = poems[Math.floor(Math.random()*poems.length)];
        while (selectedpoem == nextpoem) {
            nextpoem = poems[Math.floor(Math.random()*poems.length)]};
            
            selectedpoem = nextpoem;
    
        $(".poem-holder").html(nextpoem);
        $(".cat-holder").html('<img src="'+ cats[Math.floor(Math.random()*cats.length)]+'">');
        var newheight = Math.floor(Math.random()*100) + 100 + "px";    
    
    
        for (var increment = 0 ; increment < 100; increment++) {
        $("body").append("<div class='dot'></div>");}
        
        $(".dot").each(function() {
        var newtop= Math.floor(Math.random()*100) + "%";
        var newleft= Math.floor(Math.random()*100) + "%";
       $(this).css("top",newtop) 
       $(this).css("left",newleft) 
    });
    
    });  
         