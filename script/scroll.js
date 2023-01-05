// NAV
$(function () {
  var menu = $('#scroll_menu  ul li');
  var contents = $('#contents > section');

  menu.click(function (event) {
    event.preventDefault();

    var tg = $(this);
    var i = tg.index();

    var section = contents.eq(i);
    var tt = section.offset().top;

    $('html, body').stop().animate({
      scrollTop: tt
    });
  });

  $(window).scroll(function () {
    var sct = $(window).scrollTop();

    contents.each(function () {
      var tg = $(this);
      var i = tg.index();
      if (tg.offset().top <= sct) {
        menu.removeClass('active');
        menu.eq(i).addClass('active');
      }
    });
  });
});