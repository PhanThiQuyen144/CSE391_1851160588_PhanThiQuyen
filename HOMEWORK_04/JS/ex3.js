$(document).ready(function(){
    $("#textarea").keyup(function(){
        $(".value").html('');
        $(".value").text($("#textarea").val());
    });
    // $(".color").on("change", function(){
    //     $(".changestyle").click(function(){
    //  }
            
    //     })
    // })
    $('#changestyle').click(function(){
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $(".value").removeClass();
                $('.value').addClass("style1");
                //  $(".value").removeClass();
                break;
            case 2:
                $(".value").addClass('style2');
                break;
            case 3:
                $(".value").addClass("style3");
                break;
        }   
    });
        
})