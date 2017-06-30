$(function(){
	/*******************************导航栏的二级菜单****************************************/
		/*$("#ul1 .set ").hover(function(){
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
			$("#nav div").show().siblings(".get").hide();
			$("#ul1 .set").eq(index).css({background:"#fff",color:"#000"})	
		},function(){
			var index=$(this).index();
			$(this).hide();
			$("#ul1 .set").css({background:"#414141",color:"#fff"})
		})*/
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
	/**************************************注册部分**********************************/
	//获取光标聚焦和失去光标事件；
/*$(".blod").focus(function(){
  $(this).parent().css({border:'2px solid #b3b3b3'});
});*/

$(".blod").blur(function(){
	var ind=$(this).index(".blod");
	if ($(this).val()=="") {
	 $("#banner span").eq(ind).css({display: 'block'})	
	};

  /*$(this).parent().css({border:'1px solid #b3b3b3'})*/
});

/*$("#banner input").focus(function(){
  $(this).css({border:'2px solid #b3b3b3'})
});*/

$(".password").blur(function(){
	if ($(this).val()=="") {
	 $(".s5").css({display: 'block'})	
	}
  /*$(this).css({border:'1px solid #b3b3b3'})*/
});
$(".tell").blur(function(){
	if ($(this).val()=="") {
	 $(".s2").css({display: 'block'})	
	}
})
	$(".s1").html(createCode());
	//点击生成验证码；
	$(".s1").click(function(){
	   $(this).html(createCode())
	});
	//点击换一换生成验证码
	$(".change").click(function(){
	  $(".s1").html(createCode());
	})
	//点击的时候进行判断；
$(".btn1").click(function(){
	//获取用户名和密码；
	var usn=$(".tell").val();
	var pwd=$(".password").val();
	var n1=$(".yan").val();
	var n2=$(".yan2").val();
	//正则用于匹配手机号码
    var pattern = /^1\d{10}$/;
    var res = pattern.test(usn);
    //正则用于匹配密码；
    var pat = /^[0-9a-zA-Z]{6,16}$/;
    var resp= pat.test(pwd);
    //所有的不能为空； 
	if(!usn || !pwd || !n1 || !n2){
		$(".s2").css({display: 'block'});
       return;   
        }
    //对手机号进行判断；
     if(!res){
      $(".s2").css({display: 'block'}); 	
       return;
	   }else{
	    $(".s2").css({display: 'none'});
	    console.log(111) 
	   }
	  //对验证码进行判断；
	  if (n1 !=$(".s1").html()) {
	  	$(".s3").css({display: 'block'});
	  	return;
	  }else{
	  	$(".s3").css({display: 'none'});
	  	$(this).css({background:"#414141",color:"#fff"})
	  }
	  //对发送验证码进行判断；
	
	  if (n2 !=n2) {
	  	$(".s4").css({display: 'block'});
	  	return;
	  }else{
	  	$(".s4").css({display: 'none'});
	  }
	//对密码进行判断；
	 if (!resp) {
	 	$(".s5").css({display: 'block'});
	  	return;
	 }else{
	 	$(".s5").css({display: 'none'});
	 
	 }
		setCookie("registerUsers", "23444", 7);
	
})
	
	//函数用于生成验证码
      function createCode(){
        var str = "0123456789";
        // [0,62)
        var result = "";
        for(var i = 0; i < 4; i++){
            var myInt = Math.floor(Math.random()*10);
            result += str.charAt(myInt);
        }
        return result;
    }
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

