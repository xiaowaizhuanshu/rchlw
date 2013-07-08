// JavaScript Document

// ***********************************************************************************//
// 横切全部引用该js的html 
// 使所有class为light的tag在mouseover的时候增加名为over的class
// 并且在mouseout的时候移除名为over的class
// ***********************************************************************************//
$(function() {
	$(".light").hover(function(){
		$(this).addClass("over");
	},
	function(){
		$(this).removeClass("over");
	});
});

// ***********************************************************************************//
// 横切全部引用该js的html 
// 使所有class为lightTable的表格内 所有td在mouseover的时候增加名为over的class
// 并且在mouseout的时候移除名为over的class
// ***********************************************************************************//
$(function() {
	$(".lightTable td").hover(function(){
		$(this).addClass("over");
	},
	function(){
		$(this).removeClass("over");
	});
});
// ***********************************************************************************//
// 获取叫做ChannelBuyTab的dl下的dt 
// 当某个dt被点击的时候清除所有同级dt的selected样式并且为当前点击tag增加selected样式 
// 并获取该tag的ControlTarget属性 将ControlTarget的属性作为目标 
// 获取和该值相同的class为其所有同级tag去掉selected样式之后 
// 再为其增加名为selected的属性
// 如果目标也拥有ControlTarget属性 则对其再循环上面的操作
// 该js最多适用于2层tab
// ***********************************************************************************//
$(function(){
	$(".ChannelBuyTab dt").click(function(){
		var ControlTarget = $(this).attr("ControlTarget");
		$(this).parent().children().removeClass("selected");
		$(this).addClass("selected");
		$("." + ControlTarget).parent().children().removeClass("selected");
		$("." + ControlTarget).addClass("selected");
		if( $("." + ControlTarget).attr("ControlTarget") ){
			var SecondControlTarget = $("." + ControlTarget).attr("ControlTarget");
			$("." + SecondControlTarget).parent().children().removeClass("selected");
			$("." + SecondControlTarget).addClass("selected");
			var ThirdControlTarget = $("." + SecondControlTarget).attr("ControlTarget");
			$("." + ThirdControlTarget).parent().children().removeClass("selected");
			$("." + ThirdControlTarget).addClass("selected");
			var LastControlTarget = $("." + ThirdControlTarget).attr("ControlTarget");
			$("." + LastControlTarget).parent().children().removeClass("selected");
			$("." + LastControlTarget).addClass("selected");
		}
		judgeCaizhong();
	});
}); 

//如果是ie6的话 引用SelectKiller的元素mouseover时会隐藏页面内所有select等待mouseout后再显示
if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) { 
	$(function() {
		$(".SelectKiller").hover(function(){
			$("select").css("display","none");
		},
		function(){
			$("select").css("display","");
		});
	});
} 




















