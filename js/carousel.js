$(function(){
	var oBtn = $("#play").find("ol").find("li");
	var oUl = $("#play").find("ul");
	var oLis = oUl.find("li");
	
	//加自动播放
	var iNow = 0;
	var timer = null; //定时器
	oBtn.click(function(){
		iNow = $(this).index();
		tab();
	})
	$("#play").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(timerInner, 2000)
	})
	//移到画面上停止动画
	
	function tab(){
		oBtn.attr("class", "");
		if(iNow == oBtn.size()){
			oBtn.eq(0).attr("class","active");
		}
		oBtn.eq(iNow).attr("class","active");
		oUl.animate_buffer({left: -1240 * iNow}, function(){
			if(iNow == oBtn.size()){
				oUl.css("left", 0);
				iNow = 0;
			}
		})
	}
	
	//启动定时器
	timer = setInterval(timerInner, 2000);
	function timerInner(){
		iNow++;
		tab();
	}
	
})
