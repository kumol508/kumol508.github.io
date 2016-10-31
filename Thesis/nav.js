//Shrink and AutoHide navbar
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('nav').addClass('shrink').addClass('navbar-inverse');
  } else {
    $('nav').removeClass('shrink').removeClass('navbar-inverse');;
  }
  if ($(document).scrollTop() >= 200) {
    $("nav.navbar-fixed-top").autoHidingNavbar();
  }
});

