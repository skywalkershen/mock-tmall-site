$(function(){
    $("div.rightMenu span").mouseleave(function(){
        $("img.catear").hide();
    })
    $("div.rightMenu span").mouseenter(function(){
        var left=$(this).position().left;
        var top=$(this).position().top;
        var width = $(this).css("width");
        var catearLeft = parseInt(left) + parseInt(width) / 2;
        $("img.catear").css("left", catearLeft);
        $("img.catear").css("top", top-20);
        $("img.catear").fadeIn(500);
        console.log("catear at left: " + catearLeft +" top: " + top);
    })
});