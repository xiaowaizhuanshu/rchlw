// JavaScript Document
$(function(){
	//双色球-大乐透-七乐彩-七星彩
	var lotNo = "F47104-T01001-F47102-T01009";
	getEndtimeByLotno(lotNo);
	
});
/**
 * 根据彩种获取开奖日期
 * @param lotNo
 */
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
					var day = (new Date()).getDate();//获取当前日
					var dt;
				for(var s in msg){
					obj = "";
					obj = msg[s];
					 dt = (new Date((obj.end_time).replace(/-/g, "/"))).getDate();
					if(dt == day){
						$("#"+obj.lotno).addClass("on");
					}
				}
			}
		}
	});
}