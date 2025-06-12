$(function () {
    $('.main').mouseover(function () {
        $('.sub').stop().slideDown();
        $('.nav_bg').stop().animate({height:200});
    });
    $('.main').mouseout(function () {
        $('.sub').stop().slideUp();
        $('.nav_bg').stop().animate({height:0});
    });
});
