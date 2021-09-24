

                          
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




// 모달창 

$("#modal").show();
$(".modal_btn").click(function(){
    $("#modal").fadeOut(350);
});

});
