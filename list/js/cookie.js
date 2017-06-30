$(function(){
	sc_car();
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
			
		}
		sc_car();
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

})
