 var images = [];
    images[0]="Images/IMG_0914.jpg";
     images[1]="Images/IMG_1046.jpg";
     images[2]="Images/IMG_1039.jpg";
     images[3]="Images/IMG_1051.jpg";
     images[4]="Images/IMG_0983.jpg";
     images[5]="Children/Kidshome.jpg";
     images[6]="Children/Kids4.jpg";
     images[7]="Children/Kids6.jpg";

    var interval;
    var i = 0;

    $(function () {
        $(".images-holder").mouseover(function () {
         
            interval = setInterval(fadeDivs, 1000);
        })
       .mouseout(function () {
                clearInterval(interval);

        });
    });

    function fadeDivs() {
        i = i < images.length ? i : 0;
        $(".images-holder").fadeOut(100, function() {
            $(this).attr('src', images[i]).fadeIn(100);
        });
        i++;
    }