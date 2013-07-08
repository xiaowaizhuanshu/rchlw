$(document).ready(function(){
	$(".gd-channel ul li").each(function(index,element){
		$(this).click(function(){
			$(this).addClass("select").siblings("li").removeClass("select");
			$(".gd-touzhuqi-top").eq(index).css("display","block").siblings(".gd-touzhuqi-top").css("display","none");
		});

	});
		
		
	$(".gd-touzhuqi-top").each(function(j){
		$(this).find(".gd-touzhuqi-tit").find("dd").each(function(k){
			$(".gd-touzhuqi-top").eq(j).find(".gd-touzhuqi-tit").find("dd").eq(k).click(function(){
				$(".gd-touzhuqi-top").eq(j).find(".gd-touzhuqi-tit").find("dd").eq(k).addClass("select").siblings("dd").removeClass("select");
				$(".gd-touzhuqi-top").eq(j).find(".everynumber").eq(k).css("display","block").siblings(".everynumber").css("display","none");
			});
		});
	});
	$(".gd-WrapR-mid").find("li").each(function(m){	
		$(this).mouseover(function(){	
			$(".gd-WrapR-mid").find("li").eq(m).addClass("cur-select").siblings("li").removeClass("cur-select");
			$(".cur-yilou-select").eq(m).css("display","block").siblings(".cur-yilou-select").css("display","none");
		});
	});

	$(".gd-Fllownub-one").find("dd").each(function(n){	
		$(this).click(function(){	
			$(this).find("span").addClass("select");
			$(this).siblings("dd").find("span").removeClass("select");
			$(".gd-Fllownub-one >a").eq(n).css("display","block").siblings("a").css("display","none");
			$(".gd-Fllownub-wrap-con").eq(n).css("display","block").siblings(".gd-Fllownub-wrap-con").css("display","none");
		});
	});

	$(".buy-every1").each(function(n){	
		$(this).click(function(){	
			$(this).find("input").attr("checked",true);
			$(this).siblings("li").find("input").attr("checked",false);
			
			$(".zhuihao-set1").eq(n).css("display","block").siblings(".zhuihao-set1").css("display","none");
		});
	});

	$(".buy-every2").each(function(n){	
		$(this).click(function(){	
			$(this).find("input").attr("checked",true);
			$(this).siblings("li").find("input").attr("checked",false);
			
			$(".zhuihao-set2").eq(n).css("display","block").siblings(".zhuihao-set2").css("display","none");
		});
	});
	
	$(".near-number").eq(0).click(function(){	
		$(".win-number").css("display","none");
		$(".win-number:lt(5)").css("display","");
		//$(this).css("color","#de0201").siblings(".near-number").css("color","#123456");
	});
	$(".near-number").eq(1).click(function(){	
		$(".win-number").css("display","none");
		$(".win-number:lt(10)").css("display","");
		//$(this).css("color","#de0201").siblings(".near-number").css("color","#123456");
	});

	$(".win-number").css("display","none");
	$(".win-number:lt(5)").css("display","");
	/*快三我的投注和我的追号切换*/
	
	$(".top-right h3 span").each(function(index,element){
		$(this).click(function(){
			$(this).addClass("top-cur").siblings("span").removeClass("top-cur");
			$(".ksan-box table").eq(index).css("display","").siblings(".ksan-box table").css("display","none");
		});

	});
	
	
	
	/*排行榜*/
	
	$(".gd-WrapR-mid ul li").each(function(id){
		$(this).mouseover(function(){
			$(this).addClass("cur-select").siblings().removeClass("cur-select");
			$(".zjbtnr table").eq(id).css("display","").siblings(".zjbtnr table").css("display","none");
			
		});
	});
	
	
	
	
	
	
	
	
	
	
	
});