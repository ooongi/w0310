// 풀페이지슬라이드
$(document).ready(function () {
    let now = 0;
    const sections = $(".container section");
    const headerHeight = $("#header").height();
    const total = sections.length + 1;

    function scrollTo(index) {
        let pos = 0;
        if (index < sections.length) {
            pos = sections.eq(index).position().top - headerHeight;
        } else {
            pos = $("#footer").position().top - headerHeight;
        }
        $("html,body").stop().animate({ scrollTop: pos }, 500);
    }

    $(window).on("wheel", function (e) {
        if ($("html, body").is(":animated")) return; // 중복 스크롤 방지
        const delta = e.originalEvent.deltaY;
        if (delta > 0 && now < total - 1) {
            now++;
        } else if (delta < 0 && now > 0) {
            now--;
        }
        scrollTo(now);
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    });


});


//리모컨
$(document).ready(function () {
    const $sidebar = $('.sidebar_contents');
    const $header = $('.header_container');
    const $footer = $('.footer');
    const $container = $('.best_container');

    let headerHeight = $header.outerHeight();
    let sidebarHeight = $sidebar.outerHeight();
    let footerOffset = $footer.offset().top;
    let containerOffset = $container.offset().left;
    let sidebarWidth = $sidebar.outerWidth();

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        // 반응형을 위한 체크
        if ($(window).width() <= 768) {
            $sidebar.removeClass('sticky bottom');
            return;
        }

        // 푸터 위치 재계산 (동적 콘텐츠 대응)
        footerOffset = $footer.offset().top;

        // 헤더가 완전히 사라졌는지 확인
        if (scrollTop >= headerHeight) {
            // 푸터와의 거리 계산
            let sidebarBottom = scrollTop + sidebarHeight + 40; // 40px 여백

            if (sidebarBottom >= footerOffset) {
                // 푸터 근처에서 멈춤
                $sidebar.removeClass('sticky').addClass('bottom');
                $sidebar.css({
                    'position': 'absolute',
                    'top': 1105 + 'px',
                });
            } else {
                // 스크롤 따라가기
                $sidebar.removeClass('bottom').addClass('sticky');
                $sidebar.css({
                    'position': 'fixed',
                    'top': '20px',
                    'left': containerOffset + 'px',
                    'width': sidebarWidth + 'px'
                });
            }
        } else {
            // 헤더가 아직 보이는 상태
            $sidebar.removeClass('sticky bottom');
            $sidebar.css({
                'position': 'static',
                'width': 'auto'
            });
        }
    });

    // 윈도우 리사이즈 시 위치 재계산
    $(window).resize(function () {
        headerHeight = $header.outerHeight();
        sidebarHeight = $sidebar.outerHeight();
        footerOffset = $footer.offset().top;
        containerOffset = $container.offset().left;
        sidebarWidth = $sidebar.outerWidth();

        $(window).trigger('scroll');
    });
});

