    var graduation = [
        "images/hsm.jpg", "images/lb2.gif", "images/bmad.jpg"];
        
    var selectedgraduation = false;
    
     $(".reveal").click(function(){
        var nextgraduation = graduation[Math.floor(Math.random()*graduation.length)];
        while (selectedgraduation == nextgraduation) {
            nextgraduation = graduation[Math.floor(Math.random()*graduation.length)]};
            
            selectedgraduation = nextgraduation;
    
        $(".graduation-holder").html('<img src="'+ graduation[Math.floor(Math.random()*graduation.length)]+'">'); 
        
     });   