/*头部*/
$(document).ready(function(){
	//首页
	$('.bxslider-liu').bxSlider({
		mode: 'fade',
		moveSlides: 1,
		infiniteLoop: true,
		speed: 300,
		controls:false,
		displaySlideQty:1,
		auto:true,
		pager:false,
		pause:1000
	});
	$('.bxslider-ad').bxSlider({
		mode: 'fade',
		moveSlides: 1,
		infiniteLoop: true,
		speed: 200,
		controls:false,
		displaySlideQty:1,
		auto:true,
		pager:false,
		pause:2000
	});
	$('.bxslider-banner').bxSlider({
		mode: 'fade',
		moveSlides: 1,
		infiniteLoop: true,
		speed: 2000,
		controls:false,
		displaySlideQty:1,
		auto:true,
		pager:true,
		pause:4000,
		// autoHover:true
	});
	$('.bxslider2').bxSlider({
		mode: 'fade',
		moveSlides: 1,
		infiniteLoop: true,
		speed: 10,
		controls:false,
		displaySlideQty:1,
		auto:true,
		pager:false,
		pause:3000
	});
	$('.bxslider-life').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 40,
		slideWidth: 1200,
		minSlides: 1,
		maxSlides: 1,
		speed: 2000,
		auto:true,
		controls:true,
		pause:6000,
		autoHover:true
	});
	// end 首页
	
	//登录
	$('.bxslider-bg').bxSlider({
		mode: 'fade',
		moveSlides: 1,
		infiniteLoop: true,
		speed: 500,
		controls:false,
		displaySlideQty:1,
		auto:true,
		pager:false,
		pause:3000
	});
	//end 登录
	
	//滚动条滚动事件
	$(window).on('scroll',function(){
	    var e=$(window).scrollTop();
	    if(e>40){
	    	$(".header").css("top","-40px");
	    }else if (0<=e<=40) {
	    	$(".header").css("top",-e+"px");
	    }
	});
	//end 滚动条滚动事件
});
/*end 头部*/


$(function(){
	/*留学*/
	$(".sa1").hover(function(){
		$(this).attr("src","./img/studyAbroad/sa1-1.png");
	},function(){
		$(this).attr("src","./img/studyAbroad/sa1.png");
	});
	$(".sa2").hover(function(){
		$(this).attr("src","./img/studyAbroad/sa2-2.png");
	},function(){
		$(this).attr("src","./img/studyAbroad/sa2.png");
	});
	$(".sa3").hover(function(){
		$(this).attr("src","./img/studyAbroad/sa3-3.png");
	},function(){
		$(this).attr("src","./img/studyAbroad/sa3.png");
	});
	/*end 留学*/

	/*悬浮导航*/
	$(".online").hover(function(){
		$(this).attr("src","./img/index/online-m.png");
		$(".subscr-l").css("visibility","hidden");

	},function(){
		$(this).attr("src","./img/index/online.png");
	});

	$(".subscr").hover(function(){
		$(".subscr-l").css("visibility","visible");
		$(this).attr("src","./img/index/subscr-m.png");
	},function(){
		$(this).attr("src","./img/index/subscr.png");
	});

	$(".subscr-l").hover(function(){
		
	},function(){
		$(this).css("visibility","hidden");
		$(".subscr").attr("src","./img/index/subscr.png");
	});

	$(".wx").hover(function(){
		$(".wx-l").css("display","block");
		$(this).attr("src","./img/index/wx-m.png");
		$(".subscr-l").css("visibility","hidden");
	},function(){
		$(".wx-l").css("display","none");
		$(this).attr("src","./img/index/wx.png");
	});

	$(".top").hover(function(){
		$(this).attr("src","./img/index/top-m.png");
	},function(){
		$(this).attr("src","./img/index/top.png");
	});

	//判断滚动条位置，控制top标签是否显示
	$(".top").hide();
	$(window).scroll(function() {
      /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
      if($(window).scrollTop() > 100) {
       $(".top").fadeIn(100); /* 这里用.show()也可以 只是效果太丑 */
      } else {
       $(".top").fadeOut(100);
      }
     });

	//点击回到顶部
    $(".top").on("click", function() {
	    $('body,html').animate({
	      scrollTop: 0
	    }, 1000);
	    return false;
	});
	/*悬浮导航*/

	/*社会在变革*/
	$(".gdv1").hover(function(){
		$(".gao1").attr("src","./img/index/gao2.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	$(".gdv2").hover(function(){
		$(".gao1").attr("src","./img/index/gao3.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	$(".gdv3").hover(function(){
		$(".gao1").attr("src","./img/index/gao4.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	$(".gdv4").hover(function(){
		$(".gao1").attr("src","./img/index/gao5.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	$(".gdv5").hover(function(){
		$(".gao1").attr("src","./img/index/gao6.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	$(".gdv6").hover(function(){
		$(".gao1").attr("src","./img/index/gao7.png");
	},function(){
		$(".gao1").attr("src","./img/index/gao1.png");
	});
	/*end 社会在变革*/

	$(".kc1-1").hover(function(){
		$(this).attr("src","./img/index/kc1-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/kc1-1.png");
		$(this).toggleClass("rela");
	});
	$(".kc2-1").hover(function(){
		$(this).attr("src","./img/index/kc2-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/kc2-1.png");
		$(this).toggleClass("rela");
	});
	$(".ty1-1").hover(function(){
		$(this).attr("src","./img/index/ty1-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/ty1-1.png");
		$(this).toggleClass("rela");
	});
	$(".ty2-1").hover(function(){
		$(this).attr("src","./img/index/ty2-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/ty2-1.png");
		$(this).toggleClass("rela");
	});
	$(".gl1-1").hover(function(){
		$(this).attr("src","./img/index/gl1-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/gl1-1.png");
		$(this).toggleClass("rela");
	});
	$(".gl2-1").hover(function(){
		$(this).attr("src","./img/index/gl2-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/gl2-1.png");
		$(this).toggleClass("rela");
	});
	$(".gl3-1").hover(function(){
		$(this).attr("src","./img/index/gl3-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/gl3-1.png");
		$(this).toggleClass("rela");
	});

	/*榜*/
	$(".ysp").hover(function(){
		$(this).attr("src","./img/index/ysp1.png");
	},function(){
		$(this).attr("src","./img/index/ysp.png");
	});

	$(".lxp").hover(function(){
		$(this).attr("src","./img/index/lxp1.png");
	},function(){
		$(this).attr("src","./img/index/lxp.png");
	});
	/*end 榜*/

	/*热门课程*/
	$(".hot-l").hover(function(){
		$(this).attr("src","./img/index/hot-l1.jpg");
	},function(){
		$(this).attr("src","./img/index/hot-l.jpg");
	});

	$(".hot-c").hover(function(){
		$(this).attr("src","./img/index/hot-c1.jpg");
	},function(){
		$(this).attr("src","./img/index/hot-c.jpg");
	});

	$(".hot-r").hover(function(){
		$(this).attr("src","./img/index/hot-r1.jpg");
	},function(){
		$(this).attr("src","./img/index/hot-r.jpg");
	});
	/*end 热门课程*/

	/*合作伙伴*/
	$(".coop-h1").hover(function(){
		$(this).attr("src","./img/index/h1-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h1.jpg");
	});
	$(".coop-h2").hover(function(){
		$(this).attr("src","./img/index/h2-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h2.jpg");
	});
	$(".coop-h3").hover(function(){
		$(this).attr("src","./img/index/h3-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h3.jpg");
	});
	$(".coop-h4").hover(function(){
		$(this).attr("src","./img/index/h4-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h4.jpg");
	});
	$(".coop-h5").hover(function(){
		$(this).attr("src","./img/index/h5-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h5.jpg");
	});
	$(".coop-h6").hover(function(){
		$(this).attr("src","./img/index/h6-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h6.jpg");
	});
	$(".coop-h7").hover(function(){
		$(this).attr("src","./img/index/h7-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h7.jpg");
	});
	$(".coop-h8").hover(function(){
		$(this).attr("src","./img/index/h8-1.jpg");
	},function(){
		$(this).attr("src","./img/index/h8.jpg");
	});
	/*end 合作伙伴*/

	/*口语试听*/
	$(".st1-1").hover(function(){
		$(this).attr("src","./img/index/st1-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/st1-1.png");
		$(this).toggleClass("rela");
	});
	$(".zx2-1").hover(function(){
		$(this).attr("src","./img/index/zx1-2.png");
		$(this).toggleClass("rela");
	},function(){
		$(this).attr("src","./img/index/zx1-1.png");
		$(this).toggleClass("rela");
	});
	/*end 口语试听*/

	/*公司文化*/
	$(".cul-main .wdv1").hover(function(){
		$(this).css({"background":"url(./img/about/gp.png) no-repeat"});
	},function(){
		$(this).css({"background":"url(./img/about/opacity.png) no-repeat"});
	});
	$(".cul-main .wdv2").hover(function(){
		$(this).css({"background":"url(./img/about/cx.png) no-repeat"});
	},function(){
		$(this).css({"background":"url(./img/about/opacity.png) no-repeat"});
	});
	$(".cul-main .wdv3").hover(function(){
		$(this).css({"background":"url(./img/about/yx.png) no-repeat"});
	},function(){
		$(this).css({"background":"url(./img/about/opacity.png) no-repeat"});
	});
	$(".cul-main .wdv4").hover(function(){
		$(this).css({"background":"url(./img/about/hz.png) no-repeat"});
	},function(){
		$(this).css({"background":"url(./img/about/opacity.png) no-repeat"});
	});
	/*end 公司文化*/

	/*登录注册*/
	$(".user-name input").focus(function(){
	  $(".user-name").css({"border":"1px solid #ff6000"});
	  $(".user-name img").attr("src","./img/resgiter/user-name-1.png");
	});
	$(".user-name input").blur(function(){
	  $(".user-name").css({"border":"1px solid #ddd"});
	  $(".user-name img").attr("src","./img/resgiter/user-name.png");
	});
	$(".password input").focus(function(){
	  $(".password").css({"border":"1px solid #ff6000"});
	  $(".password img").attr("src","./img/resgiter/psw-1.png");
	});
	$(".password input").blur(function(){
	  $(".password").css({"border":"1px solid #ddd"});
	  $(".password img").attr("src","./img/resgiter/psw.png");
	});
	/*end 登录注册*/
	
})