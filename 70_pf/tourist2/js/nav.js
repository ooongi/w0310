document.ready(function () {
    $(".main>li").mouseover(function () {
        // 객체 메서드().메서드().메서드().메서드();
        // >> 객체 메서드
        $(this).find(".sub").stop().fadeIn().css({display:'flex'});
        $(".nav_bg").stop().animate({ height: 50 });
    });

    $(".main>li").mouseleave(function () {
        $(this).find(".sub").stop().fadeIn().css({display:'none'});
    });


    $(".main>li").mouseout(function () {
        $('.gnb').find(".sub").stop().fadeout().css({display:'none'});
        $(".nav_bg").stop().animate({ height: 0 });
    });
});
