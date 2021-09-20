$(document).ready(function () {
    $('.sub').hide();


    $('.gnb>li').mouseover(function () {
        $(this).children('.sub').stop().slideDown(500);

    });

    $('.gnb>li').mouseout(function () {
        $(this).children('.sub').stop().slideUp(500);
    });


});

//
//선
//
//모달 창 관련
//
//#.clss,id 모두 따옴표 써야함

$('#modal').hide();

$('.gnb>li').click(function(){
    $('#modal').show();
});

$('.close').click(function(){
    $('#modal').hide();
});