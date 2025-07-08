//헤더고정풀페이지 - jeep
$(function () {
    let now = 0;
    const speed = 500;
    const sections = $(".section");
    const headerHeight = $(".header").height();
    const total = sections.length + 1;

    function scrollToSection(idx) {
        let pos = 0;
        if (idx < sections.length) {
            pos = sections.eq(idx).position().top;
        } else {
            pos = $(".footer").position().top;
        }
        $("html,body").stop().animate({ scrollTop: pos }, speed);
    }

    $(window).on("wheel", function (e) {
        if ($("html, body").is(":animated")) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollToSection(now);
    });
});
