var images = [];
     images[0]="Images/IMG_0914.jpg"
     images[1]="Images/IMG_1046.jpg"
     images[2]="Images/IMG_1039.jpg"
     images[3]="Images/IMG_1051.jpg"
     images[4]="Images/IMG_0983.jpg"
     images[5]="Children/Kidshome.jpg"
     images[6]="Children/Kids4.jpg"
     images[7]="Children/Kids6.jpg"
     
     //var count = 8;
     
// $(".images-holder").mouseenter(function () {
   // (function srcLoop(i) { // define a function (see IIFE)
     //   setTimeout(function () {
       //     $("images-holder").attr("src", images[i]); //change the image src
         //       if (i > 0) {
           //         i++; //decrement the counter
             //       srcLoop(i); //recursivly call the function
               // }
          //  }, 1000) //delay the function
   // })(images.length - 1); //pass the length of the image-array as an argument (-1 because of the index starting at 0)
//});     
var i=0; i<=7; i++
$(".images-holder").mouseenter(function(){
    
        $(".images-holder").html('<img src="'+ images[i]+'">'); 
    
        
    }); 

//for(i=0; i<=7; i++) 
     //{
       //   imageObj.src=images[i];
     //}
