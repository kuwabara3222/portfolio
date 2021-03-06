$(function () {

  //  loader
  $(function () {
    var h = $(window).height(); //ブラウザウィンドウの高さを取得
    $('#main-contents').css('display', 'none'); //初期状態ではメインコンテンツを非表示
    $('#loader-bg ,#loader').height(h).css('display', 'block'); //ウィンドウの高さに合わせでローディング画面を表示
  });
  $(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800); //$('#loader-bg').fadeOut(800);でも可
    $('#loader').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
    $('#main-contents').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
  });

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


  //スムーススクロール
  $(".gnav li a").click(function () {
    $this = $(this).attr("href");
    target = $($this).offset().top;
    $("html,body").stop().animate({
      scrollTop: target - 50
    }, 1000);
    return false;
  });


  //ナビゲーションの表示非表示
  var $win = $(window);

  $win.on('load resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
      //      PC

    } else {
      //  ナビゲーション
      $(".gnav li a").click(function () {
        $(".gnav").stop().slideToggle();
        $(".menu-trigger").toggleClass('active');
        return false;
      });
    }
  });





  //  ホバー時のナビゲーション
  $(".nav-about").hover(function () {
    $(this).html("私について");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("ABOUT");
    $(this).css("font-family", "'Montserrat',sans-serif");
  })

  $(".nav-skill").hover(function () {
    $(this).html("できること");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("SKILL");
    $(this).css("font-family", "'Montserrat',sans-serif");
  })

  $(".nav-work").hover(function () {
    $(this).html("作品");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("WORK");
    $(this).css("font-family", "'Montserrat',sans-serif");
  })

  $(".nav-contact").hover(function () {
    $(this).html("お問い合わせ");
    $(this).css("font-family", "'游明朝 light',sans-serif");
  }, function () {
    $(this).html("CONTACT");
    $(this).css("font-family", "'Montserrat',sans-serif");
  })


  //スティッキーヘッダー
  $navPos = $("#nav").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > $navPos) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  });

  //  モーダルウィンドウ
  $(".modal-open").click(function () {
    $("body").append("<div class='modal-overlay'></div>");
    $('.modal-overlay').fadeIn('slow');
    var modal = '#' + $(this).attr('data-target');
    modalResize();
    $(modal).fadeIn('slow');
    $('.modal-overlay, .modal-close').off().click(function () {
      $(modal).fadeOut('slow');
      $('.modal-overlay').fadeOut('slow', function () {
        $('.modal-overlay').remove();
      });
    });
    $(window).on('resize', function () {
      modalResize();
    });

    function modalResize() {
      var w = $(window).width();
      var h = $(window).height();
      var x = (w - $(modal).outerWidth(true)) / 2;
      var y = (h - $(modal).outerHeight(true)) / 2;

      $(modal).css({
        'left': x + 'px',
        'top': y + 'px'
      });
    }
  });


  //CONTACTのボックスフェードイン
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $("#contact").offset().top - 500) {
      $(".contact-box").fadeIn();
    } else {
      $(".contact-box").fadeOut();
    }

  });



})
