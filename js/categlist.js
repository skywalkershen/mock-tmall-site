function showcategDetail(cid){
    $("div.eachCategory[cid=" + cid + "]").css("background-color", "white");
    $("div.eachCategory[cid=" + cid + "] a").css("color", "#87CEFA");
    $("div.categDetail[cid=" + cid + "]").show();
}
function hidecategDetail(cid){
    $("div.eachCategory[cid=" + cid + "]").css("background-color", "#e2e2e3");
    $("div.eachCategory[cid="+cid+"] a").css("color","#000");
    $("div.categDetail[cid="+cid+"]").hide();
}

$(function(){
    $("div.eachCategory").mouseenter(function(){
        var cid = $(this).attr("cid");
        showcategDetail(cid);
    });
    $("div.eachCategory").mouseleave(function(){
        var cid = $(this).attr("cid");
        hidecategDetail(cid);
    });
    $("div.categDetail").mouseenter(function(){
        var cid = $(this).attr("cid");
        showcategDetail(cid);
    });
    $("div.categDetail").mouseleave(function(){
        var cid = $(this).attr("cid");
        hidecategDetail(cid);
    });
});