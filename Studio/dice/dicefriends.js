    var friends = [
        "images/bey.jpg", "images/oddfuture.jpg", "images/annleslie.jpg", "images/turkey.jpg","images/twd.jpg","images/kardash.jpg", "images/ferris.jpg", "images/advtime.gif"];
        
    var selectedfriends = false;
    
     $(".reveal").click(function(){
        var nextfriends = friends[Math.floor(Math.random()*friends.length)];
        while (selectedfriends == nextfriends) {
            nextfriends = friends[Math.floor(Math.random()*friends.length)]};
            
            selectedfriends = nextfriends;
    
        $(".friends-holder").html('<img src="'+ friends[Math.floor(Math.random()*friends.length)]+'">'); 
        
     });        