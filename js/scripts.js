$(document).ready(function(){
    $("#clickable").click(function(){
        $("#clickable").show();
        $("#design").toggle();
    });
    $("#design").click(function(){
        $("#design").show();
        $("#clickable").toggle();
    });
    $("#develop").click(function(){
        $("#clickable2").show();
        $("").toggle();
    });
    $("#clickable2").click(function(){
        $("#clickable2").show();
        $("#develop").toggle();
    });
    $("#clickable3").click(function(){
        $("#clickable3").show();
        $("#product").hide();
    });
    $("#clickable3").click(function(){
        $("#clickable3").show();
        $("#product").hide();
    });
});