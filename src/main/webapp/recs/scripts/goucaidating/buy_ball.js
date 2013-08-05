// JavaScript Document
var timerid;
var obj = null;
$(function(){
	$('.box_hidden').hover(function(){
		//初始化
		$('.box_hidden').css('margin-top','0px');
		$('.box_bottom a').css('display','none');
		
		$(this).stop().animate({'margin-top':'-113px'},200);
		//今日抽奖渐隐
		if($(this).parents('.box_list').hasClass('on')){
			$(this).parent('.box').siblings('.today').fadeOut(200);
		}
		//立即购买后显示
		if($(this).find('.box_bottom').children('a').css('display')=='none'){
			$(this).find('.box_bottom').children('a').fadeIn(400);
			//调用时间倒计时
			var type = $(this).attr("opt");
			if(type){
				obj = this;
				timerid = setInterval(function(){
					var temper = $("#"+type).val();
					var tms = [];
					var dt = new Date(temper.replace(/-/g, "/"));
					var td = dt.getTime();
					tms[0] = td - (new Date()).getTime();
					for (var i = 0, j = tms.length; i < j; i++) {
						//setTimeout("sd_takeCount()", 1000);
						tms[i] -= 1000;
						//计算天、时、分、秒、
						var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
						var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
						var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
						var seconds = Math.floor(tms[i] / 1000) % 60;
						if (days < 0) days = 0;
						if (hours < 0) hours = 0;
						if (minutes < 0) minutes = 0;
						if (seconds < 0) seconds = 0;
						//将天、时、分、秒插入到html中
						
						var hoursStr = hours + "";
						if (hours < 10) {
							hoursStr = "0" + hoursStr;
						}
						var minutesStr = minutes + "";
						if (minutesStr < 10) {
							minutesStr = "0" + minutesStr;
						}
						var secondsStr = seconds + "";
						if (seconds < 10) {
							secondsStr = "0" + secondsStr;
						}
						if(type == "T01007"){//如果是时时彩
							$(obj).find(".hour").html(hoursStr+"小时");
							$(obj).find(".min").html(minutesStr+"分钟");
							$(obj).find(".second").html(secondsStr+"秒");
						}else{
							$(obj).find(".day").html(days+"天");
							$(obj).find(".hour").html(hoursStr+"小时");
							$(obj).find(".min").html(minutesStr+"分钟");
						}
						//alert(days+"-"+hoursStr+"-"+minutesStr);
						
					}

					
				}, 500);
			}
		}
	},function(){
		$(this).stop().animate({'margin-top':'0'},200);
		//今日抽奖渐显
		if($(this).parents('.box_list').hasClass('on')){
			$(this).parent('.box').siblings('.today').fadeIn(200);
		}
		//立即购买后清除效果
		if($(this).find('.box_bottom').children('a').css('display')=='block'){
			clearInterval(timerid);
			obj = null;
			$(this).find('.box_bottom').children('a').fadeOut(200);
		}
	});	
	getEndtimeByLotno("F47104-F47103-F47102-T01007-T01001-T01009-T01002-T01011-T01010-T01012-T01004-J00001");
});
//选择彩种，获取期号
function getEndtimeByLotno(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!queryEndtimeByLotno",
		data: "lotNo=" + lotNo,
		dataType: 'json',
		//接受数据格式
		success: function(msg) {
			if(msg && msg.length>0){
					var obj = "";
				for(var s in msg){
					obj = "";
					obj = msg[s];
					if(obj)
						$("#"+obj.lotno).val(obj.end_time);
				}
			}
		}
	});
}


