window.onload = function(){
	
	var oUl = document.getElementById("ul2");
		ajax({
			method: "get",
			url: "index1.json",
			success:function(data){
				
				var arr = JSON.parse(data);
				var arr1 = arr.data;
				for(var i = 0; i < arr1.length; i++){
					var aLis = document.createElement("li");
					var oDiv = document.createElement("div");
					var oA = document.createElement("a");
					var oImg = document.createElement("img");
					var oP = document.createElement("p");
					oA.href= "#";
					/*oImg.id = "photo";*/
					oImg.src = arr1[i].pic;
					oA.appendChild(oImg)
					oP.innerHTML = arr1[i].page;
					oDiv.appendChild(oA);
					oDiv.appendChild(oP);
					aLis.appendChild(oDiv);
					oUl.appendChild(aLis);
				}
			}
		})
}
