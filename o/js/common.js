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