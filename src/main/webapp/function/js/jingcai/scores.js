﻿$(document).ready(function() {
	$(".bf-none:gt(0)").css("display","none");
	$(".hide_show").each(function(i) {
		$(this).click(function() {
			$(this).toggleClass("hide_show_hide");
			$(this).text($(this).text() == "隐藏" ? "显示" : "隐藏");
			$(".hide_show_content").eq(i).toggle(100);
		});
	});
	$(".hideselect").each(function(i) {
		$(this).click(function() {
			$(this).toggleClass("hideselectOpen");
			$(this).text($(this).text() == "展开选项" ? "隐藏选项" : "展开选项");
			$(".bf-none").eq(i).css("display",$(".bf-none").eq(i).css("display")=="none"?"":"none");
		});
	});
	
	/*$(".race_select").hover(function(){//联赛选择下拉框
		$(".race_select_cont").toggle(100);
	},function(){
		$(".race_select_cont").toggle(100);
	});*/
	
	/*$(".for_select_all").click(function() {
		$(".race_select_cont input").attr("checked",true);
	});
	$(".for_select_no").click(function() {
		$(".race_select_cont input").each(function(i){
			if($(this).attr("checked")){
				$(this).attr("checked",false);
			}else{
				$(this).attr("checked",true);
			}
		});
	});*/
	/*$(".td_bao").each(function(i){//包与清的切换
		$(this).click(function(){
			//alert($(this).parent("td").prev("td").find("span").length)
			$(this).parent("td").prev("td").find("span").toggleClass("spfdgbgYellow");
			$(this).text($(this).text() == "清"?"包":"清");
		});
	});*/
	
	$(".hide-guoguan").click(function(){//胜平负更多过关
		$(".more-guoguan").toggle()
		$(this).text($(this).text() == "隐藏" ? "显示" : "隐藏");
		});
		//增加合买开始20121119
	$(".jzdqcurmidbotRc-addhemai").hide();
	
	$(".jz-OPenhemai").click(function(){
		$(".close-goumai").hide();
		$(".jzdqcurmidbotRc-addhemai").show();
	});
	$(".quxiao-hemai").click(function(){
		$(".jzdqcurmidbotRc-addhemai").hide();
		$(".close-goumai").show();
		
		})
//增加合买结束20121119

	$(".saishi-wrap").hide();
	$(".head-input-l").click(function(){
		$(".saishi-wrap").show();
		})
	$(".head-input-r").click(function(){
		$(".saishi-wrap").hide();
		})
});

//隐藏右部分
function hideRight(isHide) {
	if(isHide){
		$("#div_jcRight").hide();
	}
	else{
		$("#div_jcRight").show();
	}
	
}

//改变不同赛事类型的背景颜色
function changeColor(){
	//将背景色的值定义成空字符串
	var bgColor="";  
	//循环6次，生成一个随机的六位数  
	for (var i = 0 ; i < 6 ; i++) {  
		bgColor += "" + Math.round(Math.random() * 9); 
		} 
	//将随机生成的背景颜色值赋给页面的背景色。  
	document.getElementById("league").style.backgroundColor="#" + bgColor;
}
				