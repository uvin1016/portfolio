AOS.init();

// 스크롤시 섹션이동
//   $(".moving").each(function () {

//     // 개별적으로 Wheel 이벤트 적용

//     $(this).on("mousewheel DOMMouseScroll", function (e) {

//       e.preventDefault();
//       var delta = 0;
//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//           delta = event.wheelDelta / 120;
//           if (window.opera) delta = -delta;
//       } else if (event.detail) delta = -event.detail / 3;
//       var moveTop = null;
//       if (delta < 0) {
//           if ($(this).next() != undefined) {
//               moveTop = $(this).next().offset().top;
//           }
//       } else {
//           if ($(this).prev() != undefined) {
//               moveTop = $(this).prev().offset().top;
//           }
//       }
//       $("html,body").stop().animate({
//           scrollTop: moveTop + 'px'
//       }, {
//           duration: 800, complete: function () {
//           }
//       });
//     });
//   });

$(function () {

    window.addEventListener("wheel", function (event) {
        event.preventDefault();
    }, { passive: false });

    var $html = $("html");

    // 뷰포트에 표시되는 페이지 번호를 나타내는 변수
    var page = 1;

    // 마지막 페이지 번호
    var lastPageNo = $(".moving").length;

    // HTML 문서가 로드되면 첫 페이지로 이동
    // window.setTimeout(function () { $(window).scrollTop(0); }, 10);
    $html.animate({ scrollTop: 0 }, 10);

    // 1. 마우스 휠 버튼을 굴리면
    $(window).on("wheel", function (event) {

        // html 요소의 효과가 진행되는 동안에는 wheel 이벤트가 발생하더라도 무시한다!
        if ($html.is(":animated")) return;

        // 1.1. 마우스 휠 버튼을 아래로 굴리면 다음 페이지로 이동하고
        // 1.2. 마우스 휠 버튼을 위로 굴리면 이전 페이지로 이동한다.

        // 마우스 휠 버튼을 굴린 방향에 따라 다음에 이동할 페이지 번호를 계산
        if (event.originalEvent.deltaY > 0) {
            console.log("wheel: DOWN!");

            // 마지막 페이지의 다음 페이지는 없으므로, 현재 페이지가 마지막 페이지인 경우
            // 이벤트 핸들러 종료
            if (page == lastPageNo) return;
            
            page++;
        }
        else if(event.originalEvent.deltaY < 0) {
            console.log("wheel: UP!");

            // 첫 페이지의 이전 페이지는 없으므로, 현재 페이지가 첫 페이지인 경우
            // 이벤트 핸들러 종료
            if (page == 1) return;

            page --;
        } 

        // 디버그 메시지(debug message)
        // → 프로그램이 실행되는 동안 프로그램 실행 흐름이나 값 등을 확인하기 위해 출력하는 메시지
        console.log("page = " + page);

        // 이동할 페이지 번호에 따라 스크롤 높이를 계산
        var scrollTop = $(window).height() * (page - 1);

        // 계산한 위치로 부드럽게 스크롤
        $html.stop().animate({ "scrollTop": scrollTop });
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
