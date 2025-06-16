$(function(){
    $('.btn a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var idx = $(this).index();

        $('.tabs div').eq(idx).addClass('active');
        $('.tabs div').eq(idx).siblings('div').removeClass('active');

    });

    $('#notice>ul>li:first-child').click(function(){
        $('.modal').show();
    });
    $('.popup button').click(function(){
        $('.modal').hide();
    });
});