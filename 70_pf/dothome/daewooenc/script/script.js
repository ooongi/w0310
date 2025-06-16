        $(document).ready(function(){
            //gnb
            $('.main').mouseover(function(){
                $('.sub').stop().slideDown(200);
            });
            $('.main').mouseout(function(){
                $('.sub').stop().slideUp(200);
            });

            //slider
            setInterval(function(){
                $('#slider ul').animate({top: '-=300px'}, 500, function(){$(this).append($(this).children().first()).css('top', 0)
                });
            },2000);

        });

        /* 
            제이쿼리의 문(statements)의 형식
                객체.메서드();
                $(객체).메서드();
                $(객체).메서드(function(){});
                $(document).ready(function(){});
                $('.main>li').mouseover(function(){});
                $('.sub').stop().slideDown(200);
        */


        // $(document).ready(function(){
        //     $('.main>li').mouseover(function(){
        //         $('.sub').addClass('on');
        //     });
        //     $('.main>li').mouseout(function(){
        //         $('.sub').removeClass('on');
        //     });
        // });

        // $(document).ready(function(){
        //     $('.main>li').mouseover(function(){
        //         $('.sub').css({display: "block"});
        //     });
        //     $('.main>li').mouseout(function(){
        //         $('.sub').css({display: "none", backgroundColor: "blue"});
        //     });
        // });

        //mouseenter - mouseover
        //mouseleave - mouveout


        /*
        객체
        $(document)
        $('JQ선택자')
        $("JQ선택자")

        css({"속성":"값", "속성":"값"...});
        css({"속성":"값", 카멜표기법:"값"...});
        css({display: "none", backgroundColor: "blue"});
        
        addClass('클래스') -> 클래스를 추가
        removeClass('클래스') -> 클래스를 제거
        hide() 숨긴다
        show() 보인다
        slideDown() 위에서 아래로 보인다
        slideUp() 아래에서 위로 숨긴다
        stop() 효과 메서드 정지
        slideDown(시간,콜백함수)
            단위: 밀리초(ms) -> 1000 = 1s

        이벤트메서드
        $(document).ready(function(){}) > 문서가 준비되면
        mouseover(fu-)  > 마우스가 범위 안으로 들어오면
        mouseout(fu-) > 마우스가 범위 밖으로 나가면
        */
