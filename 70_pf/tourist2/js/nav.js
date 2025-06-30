document.ready(function () {
    $(".main>li").mouseover(function () {
        // 객체 메서드().메서드().메서드().메서드();
        // >> 객체 메서드
        $(this).find(".sub").stop().fadeIn.css({display:'flex'});
        $(".nav_bg").stop().animate({ height: 220 });
    });
    $(".gnb").mouseout(function () {
        $(".sub").stop().slideUp();
        $(".nav_bg").stop().animate({ height: 0 });
    });
});
