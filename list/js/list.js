$(function(){
	/*******************************导航栏的二级菜单****************************************/
			$("#ul1 .set ").hover(function(){
			var index = $(this).index();
			$("#nav div").eq(index).show().siblings(".get").hide();
			$("#ul1 .set").eq(index).css({background:"#fff",color:"#000"})
		},function(){
			var index = $(this).index();
			$("#nav div").eq(index).hide();
			$("#ul1 .set").css({background:"#414141",color:"#fff"})
		})
	
		$("#nav div").hover(function(){
			var index = $(this).index;
			$(this).css("display","block")
			$("#ul1 .set").eq(index).css({background:"#fff",color:"#000"})	
		},function(){
			var index=$(this).index();
			$(this).css("display","none")
			$("#ul1 .set").css({background:"#414141",color:"#fff"})
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
	
})

