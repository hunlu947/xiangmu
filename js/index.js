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

	
	


	/*******************************轮播****************************************/
	$().extend({
			size: function(){
				return this.elements.length;
			}
		})

		$(function(){
			//按钮
			var oBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");


			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识


			timer = setInterval(timerInner, 2000);

			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				/*document.title = iNow;*/
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.animate({left: iNow * -1240}, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("left", "0px");
					}
				});
			}


			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
		})
	/*var oUl = $("#banner").find("ul");
	var myImg = $("#banner ul li");
	myImg.each(function(e){
		myImg.eq(e).css({left:1240 * e})
	})
	var index = 0;
	function carousel(){
		index++;
		if(index >= myImg.size()){
			oUl.css("left", 0);
			index = 0;
		}
		showImg();
		setNav();
	}
	
	//开启定时器
	clearInterval(timer)
	var timer = setInterval(carousel, 4000);
	//封装一个函数用来显示第几个li；显示的时候做缓冲运动；
	function showImg(){
		$("#banner ul").stop().animate({left:-1240 * index},400)
	}
	
	function setNav(){
   		$('#banner ol li').eq(index).addClass('active').siblings().removeClass('active');
	}
	
	$("ol li").click(function(){
		index = $(this).index();
		setNav();
		showImg();
	})
	
	
	$("#play").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(carousel, 4000)
	})*/
	/*********************************news*************************************/
	$("#ul2 img").hover(function(){
		$(this).stop().animate({width:300,height:252})
	},function(){
       $(this).stop().animate({width:288,height:240})
	})
	/*alert($("#ul2").attr("id"))
	$("#ul2").delegate("#photo" ,"hover",function(){
		$(this).css("width", "300").css("height", "252")
	},function(){
       $(this).css("width", "288").css("height", "240")
	})*/
	
	/*var arr1=$("#ul2").find("a").size();
	var sun=1;
	for (var i = 0;i<arr1;i++) {
		$("#ul2").find("a").eq(i).mouseover(function(){
			
			$(this).find("img").animate({width:300,height:252});
		}),
		$("#ul2").find("a").eq(i).mouseout(function(){
			$(this).find("img").animate({width:288,height:240})
		})
		
	}*/
	

	/*********************************tab切换***********************************/
	//鼠标滑过改变li的背景颜色
	$(".bt1 li").hover(function(){
		$(this).stop().css("background", "#e5e5e5");
	},function(){
		$(this).stop().css("background", "#fff");;
	})
	//自动切换tab
	var ind = 0;
	//一个主控函数
	function carou(){
		ind++;
		if(ind >= $(".t1 li").size()){
			ind = 0;
		}
		$(".t1 li").eq(ind).addClass("grow").siblings().removeClass("grow");
		$(".change div").eq(ind).addClass("apper").siblings().removeClass("apper");
		calcou()
	}
	//开启定时器
	var timer = setInterval(carou, 2500);
	calcou()
	//移入显示当前的tab
 function calcou(){
  		$(".t1 li").mouseover(function(){
  			var i = $(this).index();
  			$(this).addClass("grow").siblings().removeClass("grow");
  			$(".change div").eq(ind).addClass("apper").siblings().removeClass("apper");
  			//移入时清除定时器
  			clearInterval(timer);
  			//改变当时的当时的下标
  			ind = $(this).index();
  			//继续显示
  			$(".t1 li").eq(ind).addClass("grow").siblings().removeClass("grow");
			$(".change div").eq(ind).addClass("apper").siblings().removeClass("apper");
			//重新开启定时器
			timer = setInterval(carou, 2500);
  		})
  	}
/*function calcou(){
	$(".change ul li").mouseover(function(){
		var i = $(this).index();
  		$(this).addClass("grow").siblings().removeClass("grow");
  		$(".change .bt").eq(ind).addClass("apper").siblings().removeClass("apper");
  			//移入时清除定时器
  		clearInterval(timer);
  			//改变当时的当时的下标
  		
	}).mouseout(function(){
		ind = $(this).index();
		$(this).eq(ind).addClass("grow").siblings().removeClass("grow");
		$(".change .bt").eq(ind).addClass("apper").siblings().removeClass("apper");
			//重新开启定时器
		timer = setInterval(carou, 2500);
	})
}*/

	/**************************************鲜花玫瑰***********************************/
	$("#total img").hover(function(){
		$(this).stop().fadeTo(1000, 0.6);
	},function(){
		$(this).stop().fadeTo(100, 1);
	})
	/*********************************last second***********************************/
	$(".top img ").hover(function(){
		$(this).stop().fadeTo(1000, 0.6);
	},function(){
		$(this).stop().fadeTo(100, 1);
	})
	/*********************************friendship***********************************/
	$(".fl1 .block").hover(function(){
		$("#friendship .none").show();
	},function(){
		$("#friendship .none").hide();
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
})

