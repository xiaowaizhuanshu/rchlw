var sysTime = $("#sysTime").val();
var check = true;
function initTime() {
    var temper = $("#endTime").text();
    sysTime = $("#sysTime").val();
    var tms = [];
    if(temper == null || temper ==''){
		tms[0] = 0;
	}else{
		var dt = new Date(temper.replace(/-/g,"/"));
		var td = dt.getTime();
		tms[0] =td - sysTime;
	}

    //计算天、时、分、秒、
    var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
    var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
    var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
    var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
    if (days < 0) days = 0;
    if (hours < 0) hours = 0;
    if (minutes < 0) minutes = 0;
    if (seconds < 0) seconds = 0;
    //将天、时、分、秒插入到html中
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);

}
function takeCount() {
	var temper= $("#endTime").text();
	var tms = [];
 
	if(temper == null || temper ==''){
		var dt = new Date();
		tms[0] = 0;
	}else{
		var dt = new Date(temper.replace(/-/g,"/"));
		var td = dt.getTime();
		tms[0] =td - Number(sysTime);
	}
  
	for (var i = 0, j = tms.length; i < j; i++) {
		sysTime = Number(sysTime)+1000;
		setTimeout("takeCount()", 1000);
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
		
        if(hours == 0 && minutes == 0 && seconds==0){
			var oldqihao = $("#qihao").text();
			getGaoPinBatchCode('T01012');
			reHtml(61,'lotno=T01012&wanfa=MV_Q3ZH!MV_R5ZH!MV_R7ZH!MV_R8ZH',false,'omit','true');
			reHtml(60,'lotno=T01012&inssuenum=5',false,'Channel','true');
			FlashMusicStop();
			var qihao = $("#qihao").text();
			if(Number(qihao) == Number(oldqihao) && check && qihao != '' ){
				openAlert(decodeURI(EncodeUtf8("您好，"+oldqihao+"期已截止，当前期是"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8((Number(oldqihao)+1)))+"</b> "+decodeURI(EncodeUtf8("期，投注时请确认您选择的期号，祝您中大奖。")));
				check = false;   
			}else if(check && qihao != '' ){
				openAlert(decodeURI(EncodeUtf8("您好，"+(Number(qihao) - 1)+"期已截止，当前期是"))+" <b style='color:#F00;'>"+qihao+"</b> "+decodeURI(EncodeUtf8("期，投注时请确认您选择的期号，祝您中大奖。")));
				check = false;
			}
		}else{
			check = true;
		}
		if(seconds%5 == 0 && seconds > 0){
			if($("#kaishiqihao option:eq(0)").val() != ($("#qihao").text()+"_0")){
				get100QiHao(55,'lotno=T01012&num=100',false,'kaishiqihao'); 
				if($("#daiGouHemai").val()=="ziyouZhuihao"){
					setdaigouOrzhuihao("ziyouZhuihao");
				}
			}  
		}
		if(hours =='NaN' ){
			getGaoPinBatchCode('T01012');
			reHtml(61,'lotno=T01012&wanfa=MV_Q3ZH!MV_R5ZH!MV_R7ZH!MV_R8ZH',false,'omit','true');
			get100QiHao(55,'lotno=T01012&num=100',false,'kaishiqihao');
			reHtml(60,'lotno=T01012&inssuenum=5',false,'Channel','true');
			FlashMusicStop();
		}
		//将天、时、分、秒插入到html中
		$("#day").html(days);
		$("#hour").html(hours);
		$("#minute").html(minutes);
		$("#second").html(seconds);
	}
}
  
setTimeout("takeCount()", 1000);