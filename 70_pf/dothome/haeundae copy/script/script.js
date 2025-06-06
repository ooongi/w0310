$(function () {
    $('.tabs .btn a').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var idx = $(this).index();

        $('.tabs div').eq(idx).addClass('active');
        $('.tabs div').eq(idx).siblings('div').removeClass('active');

    });

});