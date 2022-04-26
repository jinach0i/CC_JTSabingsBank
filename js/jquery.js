$(function () {
    $('.menu-btn').on('click',function () {
        $('#gnb').css('display','block');
        $('#header').css('background','white');
        $(this).toggleClass('on');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#header").addClass("on");    //스크롤내리면 헤더 텍스트 전체적으로 작아짐
        } else {
            $("#header").removeClass("on");
        }
    });
})