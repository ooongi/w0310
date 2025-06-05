// $(document).ready(function(){});
$(function () {
    // 1. 공지사항의 첫 번째 글자 클릭하면
    $('.notice li:first-of-type').click(function(){
        // 2. .modal의 display를 block으로 변경(보여준다)
        $('.modal').show();
    });
    // 3. 팝업의 닫기 버튼을 클릭하면
    $('.popup a').click(function(){
        // 4. 팝업창을 숨긴다.
        $('.modal').hide();
    });
});