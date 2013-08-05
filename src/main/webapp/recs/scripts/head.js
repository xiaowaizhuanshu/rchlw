// JavaScript Document

$(function(){
	Nav_indexHomeShow();
	//导航变色
	$('.nav_list li').live('click',function(){
		$('.nav_list li').removeClass('on');
		$(this).addClass('on');
		Nav_indexHomeShow();
	});
	//导航滑块显示
	$('.nav_slider').hover(function(){
		if($('.slider_down').css('display')=='none'){
			$('.slider_down').css('display','block');
		}
	},function(){
		$('.slider_down').css('display','none');
		Nav_indexHomeShow();
	});	
});

function Nav_indexHomeShow(){
	//首页导航下拉显示，其他页面不显示
	if($('.nav_list .indexHome').hasClass('on')){
			$('.slider_down').show();
		}
		else{
			$('.slider_down').hide();
		}
}