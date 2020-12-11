AOS.init();

// 마우스 휠 풀페이지 이동
var win_h = $(window).height(); // 윈도우 창의 높이 값을 설정함
$('.moving').each(function(index){ // .moving 의 순서마다 각각 실행
    $(this).attr("data-index",win_h * index); // 해당 클래스의 data-순서와 윈도우 창의 높이값 * 순서를 가져옴
});

$('.moving').on("mousewheel",function(e){ // .moving을 마우스 휠로 내릴때 다음 함수가 켜짐
    var sectionPos = parseInt($(this).attr("data-index")); // 해당 페이지의 data-순서를 정수로 변환
    if(e.originalEvent.wheelDelta >= 0){ // 스크롤 값, 휠 다운시 -120의 값을 돌려받고, 휠 업시 120의 값을 돌려받음. 곧 휠의 값이 0보다 크거나 같을때
        $("html,body").stop().animate({scrollTop:sectionPos - win_h}); // html,body에 있는 모든 스크립트를 멈추고, 스크롤 수직위치의 변환했던 data-순서의 정수에서 윈도우창의 높이값을 빼는 애니메이션을 실행.
    return false;
    } else if (e.originalEvent.wheelDelta < 0 ){ // 휠의 값이 0보다 작을때
        $("html,body").stop().animate({scrollTop:sectionPos + win_h}); // html,body의 스크립트를 모두 멈추고, 스크롤 수직위치의 변환했던 data-순서의 정수에서 윈도우 창의 높이값을 더하는 애니메이션을 실행
    return false;
    }
});


$(document).ready(function(){

    // 네비버튼 클릭시 해당 섹션으로 이동
    $('a[href^="#"]').on('click',function(e){ // a 태그를 클릭했을때 함수가 켜짐
        e.preventDefault(); // 고유 동작을 중단시킴

        var target = this.hash; // 해당 a태그의 해쉬값 가져오기
        var $target = $(target); 

        $('html, body').stop().animate({ // html, body의 스크립트를 모두 멈추고 다음 이벤트 애니메이션을 실행
            'scrollTop':$target.offset().top // 스크롤 수직 위치의 해당 해쉬값의 절대 좌표를 확인
        }, 900, 'swing', function(){ // .9초 동안 스윙으로 이동 
            window.location.hash = target; // 해당 a태그의 해쉬값으로 윈도우창이 그 위치로 이동시켜줌
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
            }else if(0 == sclTop){
                $menu.removeClass('on');
                $menu.first().addClass('on');
            };
        });
    });

});

// 팝업창
// 펫시티
$('.d01').click(function(){
    $('.popup1').fadeIn();
});
$('.close').click(function(){
    $('.popup1').fadeOut();
});
// 상세페이지
$('.d02').click(function(){
    $('.popup2').fadeIn();
});
$('.close').click(function(){
    $('.popup2').fadeOut();
});
// 삼성제약
$('.p01').click(function(){
    $('.popup3').fadeIn();
});
$('.close').click(function(){
    $('.popup3').fadeOut();
});
// 곰표
$('.p02').click(function(){
    $('.popup4').fadeIn();
});
$('.close').click(function(){
    $('.popup4').fadeOut();
});
// 핀딧
$('.p03').click(function(){
    $('.popup5').fadeIn();
});
$('.close').click(function(){
    $('.popup5').fadeOut();
});

