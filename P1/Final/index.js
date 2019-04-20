$(document).ready(function(){
    $(".rectangleleft").mouseenter(function(){
        $(".rectangleleft").css("background", "red");
    });
    $(".rectangleleft").mouseleave(function(){
        $(".rectangleleft").css("background", "lightgray");
    });
});