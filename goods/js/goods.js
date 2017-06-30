$(function(){
	/*******************************导航栏的二级菜单****************************************/
			$("#ul1 .set ").hover(function(){
			var index = $(this).index();
			$("#nav div").eq(index).show().siblings(".get").hide();
			$("#ul1 .set").eq(index).css({"background-color":"#fff","color":"#000"})
		},function(){
			var index = $(this).index();
			$("#nav div").eq(index).hide();
			$("#ul1 .set").css({"background-color":"#414141","color":"#fff"})
		})
	
		$("#nav .get").mouseover(function(){
			var index = $(this).index;
			$(this).css("display","block")
			$("#ul1 .set").eq(index).css({"backgroundColor":"#fff","color":"#000"})	
		}).mouseout(function(){
			var index=$(this).index();
			$(this).css("display","none")
			$("#ul1 .set").css({"backgroundColor":"#414141","color":"#fff"})
		})
	/*********************************friendship***********************************/
	$(".fl1 .block").hover(function(){
		$("#friendship .none").show();
	},function(){
		$("#friendship .none").hide();
	})
	/*********************************侧边信息***********************************/
	$("#aside .first").hover(function(){
			$("#aside .a1").show();
		},function(){
			$("#aside .a1").hide();
	})
	
	$("#aside .second").hover(function(){
			$("#aside .a2").show();
		},function(){
			$("#aside .a2").hide();
	})
	/*********************************显示下滑导航条***********************************/
	$(window).scroll(function(){
		//获取页面的高度
		var st = $(this).scrollTop();
		if(st >= 100){
			$("#nav2").show();
		}else{
			$("#nav2").hide()
		}
	})
	/*********************************返回顶部***********************************/
	$(window).scroll(function(){
		//获取页面的高度
		var st = $(this).scrollTop();
		if(st >= 1200){
			$("#aside .upper").show();
		}else{
			$("#aside .upper").hide()
		}
	})
	$("#aside .upper").click(function(){
		$("html,body").animate({scrollTop:0},500)
	})
	$("#aside .first").hover(function(){
			$("#aside .a1").show();
		},function(){
			$("#aside .a1").hide();
	})
	
	$("#aside .second").hover(function(){
			$("#aside .a2").show();
		},function(){
			$("#aside .a2").hide();
	})
	/******************************轮播加事件**************************************/
	var index=0;
	function carousel(){
		index++;
		if (index>=$(".last1").size()) {
			index=0;
		}
		$('.top span').eq(index).addClass("active").siblings().removeClass('active');
		$('.last1').eq(index).addClass("apper").siblings().removeClass('apper');
	
	}
	    var timer=setInterval(carousel,2000)
	//给导航添加移入移出事件；
	$('.top span').mouseover(function(){
	      clearInterval(timer)
	     var i=$(this).index();
	     $(".last1").eq(i-1).addClass("apper").siblings().removeClass('apper');
	     $('.top span').eq(i-1).addClass("active").siblings().removeClass('active');
	     /* timer=setInterval(carousel,3000)*/
	})
	
	$('.top span').mouseout(function(){
	      
	     var i=$(this).index();
	     $(".last1").eq(i-1).addClass("apper").siblings().removeClass('apper');
	     $('.top span').eq(i-1).addClass("active").siblings().removeClass('active');
	      timer=setInterval(carousel,2000)
	})
	//给ul添加移入移出事件；
	$('.last1 li').mouseover(function(){
	      clearInterval(timer)
	}).mouseout(function(){
		timer=setInterval(carousel,2000)
	})
	/*********************************list***********************************/
	//点击时数量增加
	var num = 0;
	$(".rasie .pre").click(function(){
		num++;
		/*alert(num)*/
		$("input").val(num);
		/*$("header .num").html("("+(num)+")");*/
	})
	$(".rasie .next").click(function(){
		num--;
		if(num <= 0){
			num = 1;
		}
		$("input").val(num);
		/*$("header .num").html("("+(num)+")");*/
	})
	//滑过变颜色
	$(".right .btn1").hover(function(){

	  $(this).css({background:'#fff',color:'#000'})
	},function(){
	  $(this).css({background:'#414141',color:'#fff'})
	});
})
