// jq
$(() => {
    // 객체찾기
    const gnb = $("#gnb");
    const gnb_bg = gnb.find(".nav_bg"); /* 하위요소를 찾을 때 find */
    const gnb_main_list = gnb.find(".main > li");
    const gnb_sub = gnb.find(".sub");

    // 메인 메뉴에 마우스를 올렸을 때
    gnb_main_list.mouseenter(function () {
        // gnb의 서브 메뉴가 위에서 아래로 내려온다
        gnb_sub.stop().slideDown();
        // gnb의 배경색바의 높이가 0에서 220으로 늘어난다
        gnb_bg.stop().animate({ height: 220 });
    });

    // 마우스가 gnb를 떠났을 때
    gnb.mouseleave(function () {
        gnb_sub.stop().slideUp();
        gnb_bg.stop().animate({ height: 0 });
    });
});
