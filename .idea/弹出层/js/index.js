require(["jquery", "dialog"], function($, Dialog){
    $("#btn").on("click", function(settings){
        var settings = {
             width: 300,
             height: 300,
             title: "我的弹出层",
            content: "login.html"
        };
        var dialog=new Dialog();
        dialog.open();
        //dialog1.open(settings);
    });
});