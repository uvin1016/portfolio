AOS.init();

// 스크롤시 섹션이동
  $(".moving").each(function () {

    // 개별적으로 Wheel 이벤트 적용

    $(this).on("mousewheel DOMMouseScroll", function (e) {

      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = null;
      if (delta < 0) {
          if ($(this).next() != undefined) {
              moveTop = $(this).next().offset().top;
          }
      } else {
          if ($(this).prev() != undefined) {
              moveTop = $(this).prev().offset().top;
          }
      }
      $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
      }, {
          duration: 800, complete: function () {
          }
      });
    });
  });

$(document).ready(function(){

    // 네비버튼 클릭시 해당 섹션으로 이동
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':$target.offset().top
        }, 940, 'swing', function(){
            window.location.hash = target;
        });
    });

    // 스크롤 움직임에 따라 네비버튼 색변화
    var $menu = $('#nav ul li');
    var $contents = $('section');

    $(window).scroll(function(){
        var sclTop = $(window).scrollTop();

        $contents.each(function(){
            if(Math.floor($(this).offset().top) < sclTop){
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }else if($('#main').offset().top > sclTop){
                $menu.removeClass('on');
            };
        });
    });

    // 제목 슬라이드
    setInterval(function(){
        var $first = $('.title-box-2>.slider>li').first();
        $('.slider').animate({'margin-left':'-640px'},3000,function(){
            $('.slider').append($first).css('margin-left','0px');
        });
    },3000);
});
