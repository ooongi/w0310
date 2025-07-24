//헤더고정풀페이지 - jeep
$(function () {
    let now = 0;
    const speed = 500;
    const sections = $(".section");
    const header = $(".header");
    const headerHeight = header.height();
    const total = sections.length + 1;

    function scrollToSection(idx) {
        let pos = 0;
        if (idx < sections.length) {
            pos = sections.eq(idx).position().top;
        } else {
            pos = $(".footer").position().top;
        }
        $("html,body").stop().animate({ scrollTop: pos }, speed);

        // 헤더 숨기기/보이기 로직
        if (idx === sections.length) {
            // 마지막 섹션(footer)에 도달했을 때 헤더 숨기기
            header.animate({ opacity: 0, top: -headerHeight }, speed / 2);
        } else {
            // 다른 섹션에서는 헤더 보이기
            header.animate({ opacity: 1, top: 0 }, speed / 2);
        }

        // if (idx === 3) {
        //     header.css({
        //         background: "#fff",
        //         color: "#333",
        //         transition: "0.5s"
        //     });
            
        // } else {
        //     header.css({
        //         background: "transparent",
        //         color: "#fff",
        //         "box-shadow": "none",
        //     });
        // }
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

$(() => {
    $(".main > li").click(function () {
        // 형제 메뉴들의 active 클래스 제거
        $(this).siblings().children("div").removeClass("active");

        // 현재 메뉴의 서브메뉴 토글
        $(this).children("div").toggleClass("active");
    });

    // 서브메뉴 클릭 시 닫힘 방지
    $(".main > li div").click(function (e) {
        e.stopPropagation();
    });
});
