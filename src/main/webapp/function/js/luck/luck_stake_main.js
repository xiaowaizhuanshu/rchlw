
var root;
var lotteryType;

//------获取选中的号码，跳到的相应的彩种页并将所选号码添加到号码篮中
function luck_stake(flag) {

  	//选择彩种
  	lotteryType = selectLottery();
	if (lotteryType == "") {
		alert("");
		return false;
	}
	//页面显示的号码样式
	var viewBall = "";
	//隐藏的号码样式
	var listBall ="";
	//用于判断用户是否选择号码
	var string = "";
	//要跳转的彩种地址
	var url="";
	if ("SSQ" == lotteryType) {
		for (var i = 0; i < 7; i++) {
		var codeball = $("#code" + 33 + i).text();
		
		if (i > 0) {
		if("SSQ" == lotteryType&&i==6){
			viewBall += "|";
			listBall+="~";
			}else{
			viewBall += ",";
			listBall+=",";
			}
		}
		viewBall += codeball;
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		listBall+= codeball;
		string += codeball;
	    }
		listBall +="^";
		url="/rchlw/lottery/ruyicai_channel_ssq.jsp";
	   }
	  else if ("dlt" == lotteryType) {
	  	viewBall="";
		for (var i = 0; i < 7; i++) {
		var codeball = $("#code3" + 33 + i).text();
		if (i > 0) {
		if("dlt" == lotteryType&&i==5){
			viewBall += "|";
			listBall+="-";
			}else{
			viewBall += ",";
			listBall+=",";
			}
		}
		viewBall += codeball;
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		listBall+=codeball;
		string += codeball;
	    }
		listBall += ";";
		url="/rchlw/lottery/ruyicai_channel_dlt.jsp";
	   }
	else if ("D3" == lotteryType) {
	    listBall="00";
		viewBall="";
		for (var i = 0; i < 3; i++) {
		var codeball = $("#code" + 9 + i).text();
		if (i > 0) {
		
			viewBall += "|";
			listBall+=",";
			
		}
		viewBall += codeball;
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		listBall+=codeball;
		string += codeball;
		
	   }
	   listBall+="^";
		url="/rchlw/lottery/ruyicai_channel_3D.jsp";
	}
	else if ("QLC" == lotteryType) {
		viewBall="";
		for (var i = 0; i < 7; i++) {
		var codeball = $("#code" + 30 + i).text();
		if (i > 0) {
		
			viewBall += ",";
			listBall+=",";
		}
		viewBall += codeball;
		if(codeball.substring(0,1) == "0"){
			codeball = codeball.substring(1,2);
		}
		listBall+=codeball;
		string += codeball;
		
	}  
	    listBall+="^";
		url="/rchlw/lottery/ruyicai_channel_qlc.jsp";
	}
	else if ("pl3" == lotteryType) {
	   listBall="01";
		viewBall="";
		for (var i = 0; i < 3; i++) {
		var codeball = $("#code9" + 9 + i).text();
		if (i > 0) {
		
			viewBall += "|";
			listBall+=",";
			
		}
		viewBall += codeball;
		listBall+=codeball;
		string += codeball;
		
	   }
	   listBall+=";";
		url="/rchlw/lottery/ruyicai_channel_pls.jsp";
		
	  }
	if (string==null||string=="") {
		alert(decodeURI(EncodeUtf8("请您先选择幸运号码！")));
		return false;
	}else{
		top.location.href=url+"?views="+EncodeUtf8(viewBall)+"&listView="+EncodeUtf8(listBall)+"&url="+EncodeUtf8(url);
		
		}
	
}
