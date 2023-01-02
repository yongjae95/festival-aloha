$(function() {
  var winW = cnt = setId = 0;
  resizeFn();

  function resizeFn() {
    winW = $(window).innerWidth();
    $(".slide").css({
      width: winW
    });
  };

  $(window).resize(function() {
    resizeFn();
  });

  autoplayFn();

  function autoplayFn() {
    setId = setInterval(nextCountFn, 2500);
  };

  $(".pageBt").each(function(idx) {
    $(this).click(function() {
      clearInterval(setId);
      cnt = idx;
      mainslideFn();
    });
  });

  function nextCountFn() {
    cnt++;
    mainslideFn();
  };

  function prevCountFn() {
    cnt--;
    mainslideFn();
  };

  function mainslideFn() {
    $(".slideWrap").stop().animate({
      left: (-100 * cnt) + "%"
    }, 600, function() {
      if (cnt > 6) {
        cnt = 0;
      }
      if (cnt < 0) {
        cnt = 6
      }
      $(".slideWrap").stop().animate({
        left: (-100 * cnt) + "%"
      }, 0)
    });
    $(".pageBt").removeClass("addPageBt");
    $(".pageBt").eq(cnt > 6 ? cnt = 0 : cnt).addClass("addPageBt");
  };
});