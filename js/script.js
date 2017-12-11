$(function () {


  $('.work-slide').slick({

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
