$(document).ready(function () {
  // nav
  $(".gnb > li").hover(function () {
    $(".sub, .nav_bg").stop().slideDown();
  }, function () {
    $(".sub, .nav_bg").stop().slideUp();
  });

  // slide
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }

    $(".slide_all li").eq(slideI).siblings().animate({
      "left": "-1200px"
    }, 500);
    $(".slide_all li").eq(slideI).animate({
      "left": "0"
    }, 500);
  }, 3500);


  // modal
  $(".open_modal").click(function () {
    $(".modal").fadeIn();
  });
  $(".modal_inner button").click(function () {
    $(".modal").fadeOut();
  });
}); //ready reset