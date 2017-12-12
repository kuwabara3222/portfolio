$(function () {

  //slick
  $('.work-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
          },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
          }

          ]

  });

  //  ヘッダーロゴ
  $("#header a").click(function () {
    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").animate({
      scrollTop: target - 50
    }, 1000);
    return false;
  })


  //  メニューボタン
  $(".menu-trigger").click(function () {

    $(".gnav").stop().slideToggle();

    $(this).toggleClass('active');
    return false;
  });

  //  ナビゲーションロゴ
  $(".nav-logo.sp").click(function () {
    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").animate({
      scrollTop: target - 50
    }, 1000);
    return false;
  });


  //  ナビゲーション
  $(".gnav li a").click(function () {
    $(".gnav").stop().slideToggle();
    $(".menu-trigger").toggleClass('active');

    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").animate({
      scrollTop: target - 50
    }, 2000);
    return false;
  });

  //  ホバー時のナビゲーション
  $(".nav-about").hover(function () {
    $(this).html("私について");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("ABOUT");
    $(this).css("font-family", "'Montserrat thin',sans-serif");
  })

  $(".nav-skill").hover(function () {
    $(this).html("できること");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("SKILL");
    $(this).css("font-family", "'Montserrat thin',sans-serif");
  })

  $(".nav-work").hover(function () {
    $(this).html("作品");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("WORK");
    $(this).css("font-family", "'Montserrat thin',sans-serif");
  })

  $(".nav-contact").hover(function () {
    $(this).html("お問い合わせ");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("CONTACT");
    $(this).css("font-family", "'Montserrat thin',sans-serif");
  })




  $navPos = $("#nav").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > $navPos) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  });
})
