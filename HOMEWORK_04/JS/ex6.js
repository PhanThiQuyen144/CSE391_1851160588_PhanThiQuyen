$(document).ready(function(){
    $(".button1").mouseenter(function(){
        $(this).css("border","5px solid blue")
        $('.squares1').animate({left: '250px',
                               height: '120px',width: '120px'});
    })
     $(".button2").mouseenter(function(){
        $(this).css("border","5px solid blue")
        $('.squares2').animate({left: '250px',
                               height: '120px',width: '120px'});
    })
     $(".button3").mouseenter(function(){
        $(this).css("border","5px solid blue")
        $('.squares3').animate({left: '250px',
                               height: '120px',width: '120px'});
    })
     $(".button1").mouseleave(function(){
        $(this).css("border","1px solid black")
        $('.squares1').animate({height: '80px',width: '80px'});
    })
     $(".button2").mouseleave(function(){
        $(this).css("border","1px solid black ")
        $('.squares2').animate({height: '80px',width: '80px'});
    })
     $(".button3").mouseleave(function(){
        $(this).css("border","1px solid black")
        $('.squares3').animate({height: '80px',width: '80px'});
    })
})
