$(document).ready(function(){
    $("#clickable").click(function(){
        $("#clickable").show();
        $("#design").toggle();
        $("#clickable").toggle();
    });
    $("#design").click(function(){
        $("#clickable").show();
        $("#design").toggle();
    });
    $("#clickable2").click(function(){
        $("#clickable2").show();
        $("#develop").toggle();
        $("#clickable2").toggle();
    });
    $("#develop").click(function(){
        $("#clickable2").show();
        $("#develop").toggle();
    });
    $("#clickable3").click(function(){
        $("#clickable3").show();
        $("#product").toggle();
        $("#clickable3").toggle()
    });
    $("#product").click(function(){
        $("#clickable3").show();
        $("#product").hide();
    });
    $("#send").click(function(event){
        var name = $("#name").val();
        var Email = $("#Email").val();
        var message = $("#message").val();
        if((name !== " ") || (Email !== " ") || (message !== " ")) {
            alert(name + " " +"thank you, we have receive your message");
        }
        else {
            alert("sorry!Fill the form");
        }
        event.preventDefault();
        });
});
