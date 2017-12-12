$(function () {


  $('.work-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
          }
          ]

  });

  $(".menu-trigger").click(function () {

    $(".gnav").stop().slideToggle();

    $(this).toggleClass('active');
    return false;
  });

  $navPos = $("#nav").offset().top;

  $(window).scroll(function () {
    if ($navPos <= $(window).scrollTop()) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  })
})
