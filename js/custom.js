

                          
// ░█████╗░██╗░░░██╗███╗░░██╗██╗░░██╗
// ██╔══██╗╚██╗░██╔╝████╗░██║██║░░██║
// ██║░░╚═╝░╚████╔╝░██╔██╗██║███████║
// ██║░░██╗░░╚██╔╝░░██║╚████║██╔══██║
// ╚█████╔╝░░░██║░░░██║░╚███║██║░░██║
// ░╚════╝░░░░╚═╝░░░╚═╝░░╚══╝╚═╝░░╚═╝

// Designed and developed by. cynh K
// @1.cynh 




$(document).ready(function () {
    $('.sub').hide();


    $('.gnb>li').mouseover(function () {
        $(this).children('.sub').stop().slideDown(500);

    });

    $('.gnb>li').mouseout(function () {
        $(this).children('.sub').stop().slideUp(500);
    });


});



$('#modal').hide();

$('.gnb>li').click(function(){
    $('#modal').show();
});

$('.close').click(function(){
    $('#modal').hide();
});