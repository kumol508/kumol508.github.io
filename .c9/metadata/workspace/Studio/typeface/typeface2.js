{"filter":false,"title":"typeface2.js","tooltip":"/Studio/typeface/typeface2.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":53,"column":0},"action":"insert","lines":["$('.bar').hover(function() {","    //on","   $(this).addClass('hide');","}, function() {","    // off","});","","$('.bar-off').hover(function() {","    //on","   $(this).addClass('hide');","}, function() {","    // off","});","","","// $('.text').click(function() {","//     $(this).addClass('transition');","// });","","","$('.section, .section2, .section3, .section4, .section5, .section6, .section7, .section8, .section9, .section10, .section11, .section12').click(function(event) {","    var text     =  $(this).children('.text'),","        target   = $(this).data('target'),","        offset_y = $(target).offset().top;","    ","    $(text).addClass('transition');","    ","    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });","","});","","$('.usection, .usection2, .usection3, .usection4, .usection5, .usection6, .usection7, .usection8, .usection9, .usection10, .usection11, .usection12').click(function(event) {","    var text     =  $(this).children('.text'),","        target   = $(this).data('target'),","        offset_y = $(target).offset().top;","    ","    $(text).addClass('transition');","    ","    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });","","});","","$('.tsection, .tsection2').click(function(event) {","    var text     =  $(this).children('.text'),","        target   = $(this).data('target'),","        offset_y = $(target).offset().top;","    ","    $(text).addClass('transition');","    ","    $('html, body').delay(1000).animate({ 'scrollTop': offset_y });","","});","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":18,"column":0},"action":"remove","lines":["$('.bar').hover(function() {","    //on","   $(this).addClass('hide');","}, function() {","    // off","});","","$('.bar-off').hover(function() {","    //on","   $(this).addClass('hide');","}, function() {","    // off","});","","","// $('.text').click(function() {","//     $(this).addClass('transition');","// });",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":904,"mode":"ace/mode/javascript"}},"timestamp":1428600852872,"hash":"33b4686d1a620bd6ede501919c513b4ec78c959c"}