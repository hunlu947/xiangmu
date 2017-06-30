$(function(){
	
	var oUl = document.getElementById("list");
	/*alert(oUl.id)*/
	ajax({
		method: "get",
		url: "list.json",
		success:function(data){
			var arr = JSON.parse(data);
			var arr1 = arr.data;
			var sun=1;	
			
			for (var i=0;i<arr1.length;i++) {
					
					var aLis = document.createElement("li");
					var oA = document.createElement("a");
					var oImg = document.createElement("img");
					/*oImg.appendChild(oA);*/
					oImg.src = arr1[i].pic;
					oA.href = "#";
					oA.appendChild(oImg);
					var oH = document.createElement("h4");
					oH.innerHTML = arr1[i].title;
					var oP = document.createElement("p");
					oP.innerHTML = arr1[i].describe;
					var oI = document.createElement("i");
					aLis.id=sun;
					oI.innerHTML = arr1[i].pice;
					aLis.appendChild(oA);
					aLis.appendChild(oH);
					aLis.appendChild(oP);
					aLis.appendChild(oI);
					
					oUl.appendChild(aLis)
					sun++;
			}
		}
	})
	/*sc_car();
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
			/*alert($.cookie("goods"))
			/*console.log(arr)
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
	}*/

	
})