window.onload = function(){
	//鼠标移入时显示大图
	var magnify = document.getElementById("magnify");
	var bigDiv = document.getElementById("bigDiv");
	var move = document.getElementById("move");
	var big = document.getElementById("big");
	var bigImg = document.getElementById("bigImg");
	var smallImg = document.getElementById("smallImg");
	/*
	magnify.onmouseover = function(){
		bigDiv.style.display = "block";
		move.style.opacity = 0.2;
	}
	//移出时隐藏大图
	magnify.onmouseout = function(){
		bigDiv.style.display = "none";
		move.style.opacity = 0;
	}
	//添加鼠标移动事件
	magnify.onmouseover = function(e){
		var evt = e || window.event;
		//获取鼠标的位置，计算滑块的位置
		var moveX = evt.pageX - move.offsetWidth / 2 - this.offsetLeft;
		var moveY = evt.pageY - move.offsetHeight / 2 - this.offsetTop;
			// 限制moveX和moveY的大小
	        var maxMoveX = smallImg.offsetWidth - move.offsetWidth;
	        if(moveX > maxMoveX){
	            moveX = maxMoveX;
	        } else if (moveX < 0){
	            moveX = 0;
	        }
	
	        var maxMoveY = smallImg.offsetHeight - move.offsetHeight;
	        if(moveY > maxMoveY){
	            moveY = maxMoveY;
	        } else if (moveY < 0){
	            moveY = 0;
	        }
	
	        // 将move块定位过去
	        move.style.left = moveX + "px";
	        move.style.top = moveY + "px";
	
	        // 计算一个比例, 在滑块每移动一个像素, 大图需要相对于看得见移动几个像素
	        var rate = (bigImg.offsetWidth - bigDiv.offsetWidth) / (smallImg.offsetWidth - move.offsetWidth);
	       // console.log(rate)
	        bigImg.style.left = -moveX*rate + "px";
	        bigImg.style.top = -moveY*rate + "px";
	}*/
	var big=document.getElementById("big");
      var img = $("#big img");
     //循环遍历 添加事件 
     for(var i=0; i<img.length; i++){
        img[i].onclick = function(){
            for(var j=0; j<img.length; j++){
                img[j].className="";
            }
           this.className="active";
          smallImg.src = this.src;
          bigImg.src = this.src;
        }
                 
     }  
}
