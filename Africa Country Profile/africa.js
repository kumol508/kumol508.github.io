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