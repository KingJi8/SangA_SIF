$(function(){
    var du = 300,
        hlong = 500,
        long = 1000;
    var winW = $(window).width(),
        winH = $(window).height();
    
    /*section별 높이*/
    function contentSectionH(){
        var c1W = $('.con1 li').eq(0).width();
        $('.c2-02').height(c1W);
        $('.c6-01').height(c1W/2);
    }
    contentSectionH();
    
    $(window).resize(function(){
        winW = $(window).width(),
        winH = $(window).height();
        
        contentSectionH();
    })
})