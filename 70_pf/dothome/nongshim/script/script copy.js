$(function(){
    $('.tabs .btn a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var idx = $(this).index();

        $('.tabs div').eq(idx).addClass('active');
        $('.tabs div').eq(idx).siblings('div').removeClass('active');
    });
});

$(function(){
    $('.tabs>#notice>ul>li:nth-of-type(1)').click(function(){
        $('.modal').show();
    });
    $('.popup>div>a').click(function(){
        $('.modal').hide();
    });
});