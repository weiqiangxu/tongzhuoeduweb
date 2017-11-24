function showOtherBanner(type,e){
    if(type=='left')
    {
        $('.body-left').css('display','block');
        $('.body-right').css('display','none');
    }

    if(type=='right')
    {
        $('.body-right').css('display','block');
        $('.body-left').css('display','none');
    }
    $(".login-wrap").find(".active").removeClass('active');
    $(e).addClass("active");
}
FLOATBUTTPN={
    init:function(){
        $('.right-button .showLong').mouseenter(function(){
            $(this).removeClass('longButton');
            $(this).animate({'width':'100px'},200);
            $(this).css('background-color','#ffc333');
            $(this).find('.short').addClass('pull-left');
            var item=$(this).find('.changeText');
            if(item.length>0){
                item.html('注册会员');
                item.css({'width':'63px'});
            }
        }).mouseleave(function(){
            $(this).animate({'width':'34px'},200);
            var item=$(this).find('.changeText');
            $(this).css('background-color','none');
            if(item.length>0){
                item.html('注册');
                item.css({'width':'34px'});
            }
        });
    }
}