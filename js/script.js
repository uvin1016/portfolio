AOS.init();

// 새로고침시 처음으로 이동
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

// 마우스 휠 풀페이지 이동
var win_h = $(window).height();
$('.moving').each(function(index){
    $(this).attr("data-index",win_h * index);
});

$('.moving').on("mousewheel",function(e){
    var sectionPos = parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta >= 0){
        $("html,body").stop().animate({scrollTop:sectionPos - win_h});
    return false;
    } else if (e.originalEvent.wheelDelta < 0 ){
        $("html,body").stop().animate({scrollTop:sectionPos + win_h});
    return false;
    }
});


$(document).ready(function(){

    // 네비버튼 클릭시 해당 섹션으로 이동
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target); 

        $('html, body').stop().animate({
            'scrollTop':$target.offset().top
        }, 900, 'swing', function(){
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

