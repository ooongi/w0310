// $(document).ready(function(){});
$(function (){
    // 1. 탭버튼을 클릭하면
    //    '.tabs .btn a'는 갤러리, 공지사항 모두 될 수 있다.
    $('.tabs .btn a').click(function(){
        // 2. 갤러리 버튼에 .active 추가
        //    갤러리를 구분하기 위해 this를 넣음(클릭한 a를 뜻함)
        $(this).addClass('active');
        // 3. 공지사항 버튼(형제) .active 클래스 제거
        // this의 형제 > siblings
        $(this).siblings().removeClass('active');

        // 4. 클릭한 버튼의 순번을 idx에 저장한다.
        var idx = $(this).index();
        // 5. idx 순번에 해당되는 div를 보여준다.
        $('.tabs div').eq(idx).addClass('active');
        // $('.tabs div').eq(idx).show();
        // $('.tabs div').eq(idx).css({ display: 'block' });
        // 6. idx 순번에 해당하는 div의 형제는 숨긴다.
        $('.tabs div').eq(idx).siblings('div').removeClass('active');
        // $('.tabs div').eq(idx).siblings('div').hide();
        // $('.tabs div').eq(idx).siblings('div').css({ display: 'none' });

    });
    //이벤트 발생 주체
    // :eq(n), n은 0부터
    // :.eq()
});