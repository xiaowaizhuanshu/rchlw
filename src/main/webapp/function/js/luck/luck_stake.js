var lotteryType;


//选择玩法
function selectWF(){
	if($("#dxLi").attr("class") == "mouseOver1"){
		return "DX";
	}
	if($("#yxLi").attr("class") == "mouseOver1"){
		return "YX";
	}
	if($("#exLi").attr("class") == "mouseOver1"){
		return "EX";
	}
	if($("#sxLi").attr("class") == "mouseOver1"){
		return "SX";
	}
	if($("#wxLi").attr("class") == "mouseOver1"){
		return "WX";
	}
}

function luck_stake(flag) {
//luckform
	lotteryType=$("#lotteryType").val();//获取选择的彩票类型
	if (lotteryType == "") {
		alert(decodeURI(EncodeUtf8("请选择彩票类型！")));//没有彩票类型给出提示
		return false;
	}
	var playtype = "";
	var count = "7";
	var splitCode = ",";//分割符
	var maxNum = "33";
	var balls = "";
	var string = "";
	//判断选择类型并提交到相应的action，应该是提交到一个action中
	if ("SSQ" == lotteryType) {
		playtype = "F47104";
		count = "7";
		maxNum = "33";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += "~";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
		
	    }
		balls=balls+"^";
	   }
	   if ("dlt" == lotteryType) {
		playtype = "T01001";
		count = "7";
		maxNum = "33";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("dlt" == lotteryType&&i==(count-2)){
			balls += "-";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	    }
		balls=balls+";";
	   }
	if ("D3" == lotteryType) {
		playtype = "F47103";
		count = "3";
		maxNum = "9";
		splitCode = ",";
		balls="00";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += ":";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	}
		balls=balls+"^";
		
	}
	
	if ("QLC" == lotteryType) {
		playtype = "F47102";
		count = "7";
		maxNum = "30";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += "~";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	}
		balls=balls+"^";
	}
	if ("QXC" == lotteryType) {
		playtype = "T01009";
		count = "7";
		maxNum = "30";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += "~";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	}
		balls=balls+";";
	}
	if ("pl3" == lotteryType) {
		playtype = "T01002";
		count = "3";
		maxNum = "9";
		splitCode = ",";
		balls="01";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += "~";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	   }
		balls=balls+";";
	  }
	if ("pl5" == lotteryType) {
		playtype = "T01011";
		count = "5";
		maxNum = "9";
		splitCode = ",";
		balls="";
		for (var i = 0; i < count; i++) {
		var codeball = $("#code" + maxNum + i).text();
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += ":";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	}
		balls=balls+";";
		
	}	if ("SSC" == lotteryType) {
		playtype = "T01007";
		var wf = selectWF();
		if(wf == "DX"){
			count = "2";
			maxNum = "5";
		}else if(wf == "YX"){
			count = "1";
			maxNum = "9";
		}else if(wf == "EX"){
			count = "2";
			maxNum = "18";
		}else if(wf == "SX"){
			count = "3";
			maxNum = "9";
		}else if(wf == "WX"){
			count = "5";
			maxNum = "9";
		}

		splitCode = ",";
		balls="";
		for (var i = 0; i < count; i++) {
			if(wf == "SX"){
				var codeball = $("#code" + maxNum + maxNum + i).text();
			}else if(wf == "WX"){
				var codeball = $("#code" + maxNum + maxNum + maxNum + i).text();
			}else{
				var codeball = $("#code" + maxNum + i).text();
			}
		
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		if (i > 0) {
		if("SSQ" == lotteryType&&i==(count-1)){
			balls += ":";
			}else{
			balls += splitCode;
			}
		}
		balls += codeball;
		string+=codeball;
	}
		balls=balls+";";
		
	}
			
	var jsonString="{betcode:\""+balls+"\",lotno:\""+playtype+"\"}";
	$("#jsonString").attr("value",jsonString);
	if(string==null||string==""){
	alert(decodeURI(EncodeUtf8("请选择幸运号码！")));}else{
		if (confirm(decodeURI(EncodeUtf8("您选择了一注幸运号，即将投注！\n投注将扣除您账户2元，确定要进行投注吗？")))) {
			if($("#user_p").val()==""||$("#user_p").val()==null){
				alert(decodeURI(EncodeUtf8("您未登录，请登录！")));
		}
		  }else{
			  if($("#topLogin_money").text()<2){
					alert(decodeURI(EncodeUtf8("您的余额不足请充值！")));
					top.location.href="/rchlw/function/rules/user.jsp?key=4"; 
					}else{$("#BettingForm").submit();}
			
			}
			}
	}
	
	
}
}
}

