$(document).ready(function () {
  // ===== nav =====
  $(".gnb > li").hover(function () {
    $(this).find(".sub").stop().slideDown();
  }, function () {
    $(this).find(".sub").stop().slideUp();
  });

  // ===== slide =====
  // 0 1 2 0 1 2 0
  var slideI = 0;
  setInterval(function () {
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }

    $(".slide li").siblings(slideI).animate({
      left: "-1200px"
    }, 600);
    $(".slide li").eq(slideI).animate({
      left: "0"
    }, 600);
  }, 5000);

  // family site
  $("footer .fam p").click(function () {
    $(this).toggleClass("on");
    $("footer .fam ul").stop().slideToggle();
  });

  // modal
  $(".notice ul li").eq(0).click(function () {
    $(".modal").fadeIn();
  });

  $(".btn").click(function () {
    $(".modal").fadeOut();
  })



}); //ready end