window.onload = function(){
	var oDiv = document.getElementById("bt");
	var oUl = document.getElementsByClassName("bt1")[0];
	ajax({
		method: "get",
		url:"index2.json",
		success:function(data){
			var arr = JSON.parse(data);
			var arr1 = arr.data;
			for(var i = 0; i < arr1.length; i++){
				/*var oUl = document.createElement("ul");*/
				var aLis = document.createElement("li");
				var oA = document.createElement("a");
				var oImg = document.createElement("img");
				var oH = document.createElement("h4");
				var oP = document.createElement("p");
				var oI = document.createElement("i");
				oA.href = "#";
				oImg.appendChild(oA);
				oImg.src = arr[i].pic;
				oH.innerHTML = arr[i].title;
				oP.innerHTML = arr[i].describe;
				oI.innerHTML = arr[i].pice;
				aLis.appendChild(oImg);
				aLis.appendChild(oH);
				aLis.appendChild(oP);
				aLis.appendChild(oI);
				oUl.appendChild(aLis);
				oDiv.appendChild(oUl)
			}
		}
	})
	
}

