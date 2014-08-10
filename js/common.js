//top-link
$(function() {
    //ページ内スクロール
    $("#ux-tools-btn").click(function () {
        var i = $("#ux-tools-btn").index(this)
        var p = $("#ux-tools").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'slow');
        return false;
    });
});

//square resizer
$(function(){ 
    //.rectの縦横比をレスポンシブに合わせて調整 
    function img_rect(){ 
        var img_w = $(".rect").css("width"); 
        $(".rect").css('height',img_w); 
    }; 
    $(window).resize(function(){ 
        img_rect(); 
    }); 
    img_rect(); 
}); 
