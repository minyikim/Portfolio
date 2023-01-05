$(document).ready(function () {
  // SLICK SLIDE
  $('.slide').slick({
    slide: 'div',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    dots: true,
    pauseOnHover: true,
    vertical: false,
    dotsClass: "slick-dots",
    draggable: true,

    // RESPONSIVE
    responsive: [{
        breakpoint: 960, // SIZE 960px
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 899, // SIZE 768px
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 599, // SIZE 768px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // DESIGN TAB
  $(".design-tabs h3").click(function () {
    $(".design-tabs h3").removeClass("on");
    $(this).addClass("on");
    $(".design-tabs ul").removeClass("on");
    $(this).next("ul").addClass("on");
  });
}); // READY END

// EMAIL COPY
function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $('.email_popup').addClass('active');
  setTimeout(function () {
    $('.email_popup').removeClass('active');
  }, 1000);
};