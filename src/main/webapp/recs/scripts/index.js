// JavaScript Document
$(function(){
	//焦点图
	var Focus_lunbo=jQuery(".leftLoop").slide({ mainCell:".bd ul",effect:"leftLoop",vis:1,scroll:1,autoPlay:true});
	Focus_lunbo;
	//轮播图小图片数字
	
	
	//开奖公告-走势图tab切换
	$('.each_list').eq(0).show();//初始化
	$('.an_left_tab span').live('click',function(){
		$('.an_left_tab span').removeClass('on');
		$(this).addClass('on');
		$(this).parent('.an_left_tab').siblings('.an_left_each').children('.each_list').hide();
		$(this).parent('.an_left_tab').siblings('.an_left_each').children('.each_list').eq($(this).index()).show();
	});
	
	//rank_table 红色;
	$('.rank_table tr').each(function(i){
		if(i>0&&i<=3){
			$('.rank_table tr').eq(i).addClass('on');
		}
	});
	//排行名次自动填写
	$('td.ran_paihang span').each(function(i){
		$(this).text($(this).parents('tr').index());
	});
	//让球颜色设置
	$('td.bat_rangqiu').each(function(){
		var i=parseInt($(this).text());
		if(i>0){
			$(this).addClass('zheng')
		}else if(i==0){
			$(this).addClass('ling');
		}else{
			$(this).addClass('fu');
		}
	});
});
//让球字体颜色
function RangqiuClorSet(){
	var i=parseInt($('td.bat_rangqiu').text());
	if(i>0){
		$('td.bat_rangqiu').addClass('zheng')
	}else if(i=0){
		$('td.bat_rangqiu').addClass('ling');
	}else{
		$('td.bat_rangqiu').addClass('fu');
	}
}