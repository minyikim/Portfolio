$(document).ready(function () {
  // nav
  $(".gnb > li").hover(function () {
    $(this).find(".sub").stop().slideDown();
  }, function () {
    $(this).find(".sub").stop().slideUp();
  });

  // slide
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }

    $(".slide_all li").eq(slideI).siblings().fadeOut(500);
    $(".slide_all li").eq(slideI).fadeIn(500);
  }, 4000);

  // tab
  $(".notice_gal h3").click(function () {
    $(".notice_gal h3").removeClass("on");
    $(this).addClass("on");
    $(".notice_gal ul").removeClass("on");
    $(this).next("ul").addClass("on");
  });

  // modal
  $(".open_modal").click(function () {
    $(".modal").fadeIn();
  });
  $(".modal_inner button").click(function () {
    $(".modal").fadeOut();
  });
}); // ready end