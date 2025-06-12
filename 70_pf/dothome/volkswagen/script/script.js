$(function () {
    $('.main').mouseover(function () {
        $('.sub').stop().slideDown();
        $('.nav_bg').stop().animate({height:150});
    });
    $('.main').mouseout(function () {
        $('.sub').stop().slideUp();
        $('.nav_bg').stop().animate({height:0});
    });
});

// $(function(){
//     $('.notice>ul>li:first-child').click(function(){
//         $('.modal').show();
//     });
//     $('.popup div').click(function(){
//         $('.modal').hide();
//     });
// });

$(function(){
    $('.notice li').click(function(){
        $('.modal').show();
    });
    $('.popup div').click(function(){
        $('.modal').hide();
    });
});