$(function(){
	sc_msg();
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
	/*********************************购物车信息***********************************/
	sc_car();
	sc_msg();
	$("#list").on("click", "li", function(){
		//进行cookie缓存

		//<1>判断是否是第一次存储cookie
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			$.cookie("goods", '[{id:' + this.id + ',num:1}]', {expires:7});
		}else{
			//<2>将之前存储的cookie全部取出
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			//<3>判断是否之前存储过
			var isYes = false;
			for(var i in arr){
				if(arr[i].id == this.id){
					arr[i].num++;
					isYes = true;
				}
			}
			
			if(!isYes){
				//<4>如果之前没有存储过
				var obj = {id: this.id, num:1};
				arr.push(obj);
			}
			$.cookie("goods", JSON.stringify(arr), {expires: 7});
			/*console.log($.cookie("goods"))
			/*console.log(arr)*/
		}
		sc_car();
		sc_msg()
	})
	//购物车的数量
	function sc_car(){
		var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		var sum = 0;//用于累加的和
		for(var i in arr){
			sum += Number(arr[i].num)
		}
		
		
		$(".sc_num").html(sum);
	}
	/*alert($("#help").attr("id"))*/
	
	
	$(".number").delegate(".pre" ,"click",function(){
		var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		for(var i in arr){
				if(arr[i].id == $(this).attr("name")){
					if(arr[i].num == 1){
						return;
					}
		(arr[i].num)--;
		}
	}
	var str = JSON.stringify(arr);
	$.cookie("goods",str,{expirse:7});
	sc_msg()
	})
	
	$(".number").delegate(".next" ,"click",function(){
		var cookieStr = $.cookie("goods");
		var arr = eval(cookieStr);
		for(var i in arr){
			if(arr[i].id == $(this).attr("name")){
				(arr[i].num)++;
			}
		}
		var str = JSON.stringify(arr);
		$.cookie("goods",str,{expirse:7});
		sc_msg()
	})
})
//加载购物车的详情列表
	function sc_msg(){
		ajax({
			method: "GET",
			url: "list.json",
			success: function(res){
				var res1=JSON.parse(res)
			
				var res2= res1.data;
				/*	console.log(res2)*/
				var arr = eval($.cookie("goods")); //id num

				if(!arr){
					return;
				}
				
				var html = "";
				var total = 0;
				var sum1 = 0;
				for(var i = 0; i < arr.length; i++){
					total++;
					html = html + '<span class = "t1">'+total+'</span><span class = "t2">roseonly</span><div class= "photo" style="background:url('+res2[arr[i].id].pic+')center no-repeat;background-size:cover"></div><i>经典永续-经典-朱砂-19支-80cm长形</i><span class = "pice">￥1999.0</span><div class = "number"><img src="img/cart02.png" class = "pre"><input type = "text" value = "'+arr[i].num+'"><img src="img/cart03.png" class = "next"></div><button class = "btn1">删除</button>'
					sum1 += (res2[arr[i].id].pice)*(arr[i].num)

				}
				$(".list").html(html);
				sum1 = "￥"+sum1;
				$(".money").html(sum1);
				
			}
		})
	}