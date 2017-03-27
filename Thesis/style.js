var images = [
    
    "Images/IMG_0914.jpg",
    
    "Images/IMG_1046.jpg",
    
    "Images/IMG_1039.jpg",
    
    "Images/IMG_1051.jpg",
    
    "Images/IMG_0983.jpg",
    
    "Images/IMG_1049.JPG",
    
    "Children/Kidshome.jpg",
    
    "Children/Kids4.jpg",
    
    "Children/Kids6.jpg",
    
    ];
    
        var selectedimages = false;
    
$(".images-holder").mouseenter(function(){
        
        var nextimages = images[Math.floor(Math.random()*images.length)];
        while (selectedimages == nextimages) {
            nextimages = images[Math.floor(Math.random()*images.length)]};
            
            selectedimages = nextimages;  
    
        $(".images-holder").html('<img src="'+ images[Math.floor(Math.random()*images.length)]+'">'); 
    
        
    }); 