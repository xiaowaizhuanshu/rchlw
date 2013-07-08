
function setdaigouOrzhuihaoByGaopin(a){
	if($("#daiGouHemai") != null && $("#daiGouHemai") != "undefinde"){
		$("#daiGouHemai").val(a);
	}
}
function calculate(){
	var zhuihaoqishu = $("#jh_count").val();//投入期数
	var zhuihaobeishu = $("#bs_count").val();//起始倍数
	var quancheng_percent = $("#quancheng_percent").val();//全程收益率
    var qianqi_count = $("#qianqi_count").val();//前几期
	var qianqi_percent = $("#qianqi_percent").val();//前几期 收益率
	var houqi_percent = $("#houqi_percent").val();//后几期 收益率
	var kaishiQihao = $("#kaishiqihao").val();//开始追号的期号
	var touzhuZhushu = $("#lab_Num").text(); //投注注数
	var lotno = $("#lotNo").val();
	var num = 0;
	if(kaishiQihao.indexOf("_")>-1){
		num = Number(kaishiQihao.split("_")[1]);
		$("#diyiqiQihao").val(kaishiQihao.split("_")[0]);	
	}
	var zongqihaoArray = new Array();//保存查询期号
	var qihaoArray = new Array();//添加到面板的期号
	var endTMap = new Map();//定义一个map 
	endTMap = getMap();
	zongqihaoArray = getQiHaoArray(55,'lotno='+lotno+'&num='+(num+Number(zhuihaoqishu))+'&issue='+kaishiQihao.split("_")[0],false);
	if($("#list_LotteryNumber option").length ==0){
		 openAlert(decodeURI(EncodeUtf8("请您至少选择一注号码后再进行追号计划！")));
			return false;
	}
	if($("#list_LotteryNumber option").length >1){
		openAlert(decodeURI(EncodeUtf8("您好，收益率追号只支持单组号码！")));
		return false;
	}
	
	var codes = $("#list_LotteryNumber option").val();//获取玩法
	
	var prix = getPrix(codes,lotno);//获取该玩法的奖金
	var beishuArray = new Array();//保存每期应投入的倍数
	var benjinArray = new Array();//保存每期累计的本金
	var jsonStr = "";//保存传个后台的 数据
	var arrayObj = new Array();//用于写入div面板的数据
	var checkBloon = true;
	$("#shouyiDesc").val('');
	if($("#qianqi_count").attr("disabled") == 'disabled'){
		$("#shouyiDesc").val(quancheng_percent);
		var leijibenji = Number(touzhuZhushu) *  Number(zhuihaobeishu)*2;
		beishuArray[0] = Number(zhuihaobeishu);
		benjinArray[0] = leijibenji;
		$("#diyiqiMoney").val(leijibenji);
		var j=1;
		var b =false;
		for ( var i = 1; i <  Number(zhuihaoqishu); i++) {
			//全程收益率
			if(Number(Number(prix)*(Number(zhuihaobeishu)) - (Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)) >= Number(quancheng_percent) ){
				if(i != 0){
					leijibenji = Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji);
				}
				beishuArray[i] = Number(zhuihaobeishu);
				benjinArray[i] = leijibenji;
			}
			else{
				for ( ; j < 9999-Number(zhuihaobeishu); j++) {
					if(Number(Number(prix)*(Number(zhuihaobeishu)+j) - (Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)) >= Number(quancheng_percent)){
						if(i != 0){
							leijibenji = Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji);
						}
						beishuArray[i] = Number(zhuihaobeishu)+j;
						benjinArray[i] = leijibenji;
						break;
					}
					if(Number(j) >= Number(9999-Number(zhuihaobeishu)-1)){
						openAlert(decodeURI(EncodeUtf8("您好，因为倍投方案上限限制9999倍，你的方案不适合投入"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(Number(zhuihaoqishu)))+"</b> "+decodeURI(EncodeUtf8("期倍投追号！第"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(i+1))+"</b> "+decodeURI(EncodeUtf8("期的倍数已达到上限倍数！")));
						arrayObj = new Array();
						checkBloon = false;
					}
				}
			}
			if(!checkBloon){
				break;
			}
		}
		if(checkBloon){
			for ( var k = 0; k <  Number(zhuihaoqishu); k++) {
				var shouyilvF = (Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))*100/Number(benjinArray[k]);
				arrayObj. push("<tr class='light'>" +
							"<td style='width:36px;'>"+(k+1)+"</td>" +
							"<td style='width:100px;'>"+(zongqihaoArray[k])+"</td>" +
							"<td style='width:72px;'>"+beishuArray[k]+decodeURI(EncodeUtf8("倍"))+"</td>" +
							"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(touzhuZhushu)*2)+"</td>" +
							"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(prix)-(Number(beishuArray[k])*Number(touzhuZhushu)*2))+"</td>" +
							"<td style='width:72px;'>"+"¥"+benjinArray[k]+"</td>" +
							"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))+"</td>" +
							"<td style='width:auto;'>"+(parseFloat(shouyilvF).toFixed(2))+"%</td>" +
						"</tr>");
				 var key = "";
				 key = zongqihaoArray[k]+"";
				 jsonStr += zongqihaoArray[k]+","+beishuArray[k]+","+benjinArray[k]+"_"+
				(Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))+"_"+
				(parseFloat(shouyilvF).toFixed(2))+"%"+","+endTMap.get(key)+"#";
			}
			$("#allqiMoney").val(benjinArray[(Number(zhuihaoqishu)-1)]);
		}
		if(checkBloon){
			$("#zhuihaoDIV").html("");
			for ( var j = 0; j < arrayObj.length; j++) {
				$("#zhuihaoDIV").append(arrayObj[j]);
			}
			$("#zhuihaoJson").val(jsonStr);
	    }
		jsonStr = "";
		arrayObj = new Array();
	}
	if($("#quancheng_percent").attr("disabled")=='disabled'){
		$("#shouyiDesc").val(qianqi_count+"#"+qianqi_percent+"#"+houqi_percent);
		$("#zhuihaoDIV").html("");
		var leijibenji = Number(touzhuZhushu) *  Number(zhuihaobeishu)*2;
		beishuArray[0] = Number(zhuihaobeishu);
		benjinArray[0] = leijibenji;
		$("#diyiqiMoney").val(leijibenji);
		var j=1;
		var b =false;
		

		if(Number(qianqi_count) > Number(zhuihaoqishu)){
			
			qianqi_count = zhuihaoqishu;
		}
		
		for ( var i = 1; i <  Number(qianqi_count); i++) {
			//前程收益率
			
			if(Number(Number(prix)*(Number(zhuihaobeishu)) - (Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)) >= Number(qianqi_percent) ){
				if(i != 0){
					leijibenji = Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji);
				}
				beishuArray[i] = Number(zhuihaobeishu);
				benjinArray[i] = leijibenji;
			}
			else{
				for ( ; j < 9999-Number(zhuihaobeishu); j++) {
					if(Number(Number(prix)*(Number(zhuihaobeishu)+j) - (Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)) >= Number(qianqi_percent)){
						if(i != 0){
							leijibenji = Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji);
						}
						beishuArray[i] = Number(zhuihaobeishu)+j;
						benjinArray[i] = leijibenji;
						break;
					}
					if(Number(j) >= Number(9999-Number(zhuihaobeishu)-1)){
						openAlert(decodeURI(EncodeUtf8("您好，因为倍投方案上限限制9999倍，你的方案不适合投入"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(Number(zhuihaoqishu)))+"</b> "+decodeURI(EncodeUtf8("期倍投追号！第"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(i+1))+"</b> "+decodeURI(EncodeUtf8("期的倍数已达到上限倍数！")));
						
						arrayObj = new Array();
						checkBloon = false;
						
					}
				}
			}
			if(!checkBloon){
				break;
			}
		}
		if(checkBloon){
			for ( var i = Number(qianqi_count); i <  Number(zhuihaoqishu); i++) {
				//后程收益率
				
				if(Number(Number(prix)*(Number(zhuihaobeishu)) - (Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji)) >= Number(houqi_percent) ){
					if(i != 0){
						leijibenji = Number(touzhuZhushu)*2*Number(zhuihaobeishu)+Number(leijibenji);
					}
					beishuArray[i] = Number(zhuihaobeishu);
					benjinArray[i] = leijibenji;
				}
				else{
					for ( ; j < 9999-Number(zhuihaobeishu); j++) {
						if(Number(Number(prix)*(Number(zhuihaobeishu)+j) - (Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)))*100/(Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji)) >= Number(houqi_percent)){
							if(i != 0){
								leijibenji = Number(touzhuZhushu)*2*(Number(zhuihaobeishu)+j)+Number(leijibenji);
							}
							beishuArray[i] = Number(zhuihaobeishu)+j;
							benjinArray[i] = leijibenji;
							break;
						}
						if(Number(j) >= Number(9999-Number(zhuihaobeishu)-1)){
							openAlert(decodeURI(EncodeUtf8("您好，因为倍投方案上限限制9999倍，你的方案不适合投入"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(Number(zhuihaoqishu)))+"</b> "+decodeURI(EncodeUtf8("期的倍投追号！第"))+" <b style='color:#F00;'>"+decodeURI(EncodeUtf8(i+1))+"</b> "+decodeURI(EncodeUtf8("期的倍数已达到上限倍数！")));
							
							arrayObj = new Array();
							checkBloon = false;
							
						}
					}
				}
				if(!checkBloon){
					break;
				}
			}
			
		}
		if(checkBloon){
			for ( var k = 0; k <  Number(zhuihaoqishu); k++) {
				var shouyilvF = (Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))*100/Number(benjinArray[k]);
				arrayObj. push("<tr class='light'>" +
						"<td style='width:36px;'>"+(k+1)+"</td>" +
						"<td style='width:100px;'>"+(zongqihaoArray[k])+"</td>" +
						"<td style='width:72px;'>"+beishuArray[k]+decodeURI(EncodeUtf8("倍"))+"</td>" +
						"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(touzhuZhushu)*2)+"</td>" +
						"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(prix)-(Number(beishuArray[k])*Number(touzhuZhushu)*2))+"</td>" +
						"<td style='width:72px;'>"+"¥"+benjinArray[k]+"</td>" +
						"<td style='width:72px;'>"+"¥"+(Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))+"</td>" +
						"<td style='width:auto;'>"+(parseFloat(shouyilvF).toFixed(2))+"%</td>" +
					"</tr>");
				var key = "";
				key = zongqihaoArray[k]+"";
				jsonStr += zongqihaoArray[k]+","+beishuArray[k]+","+benjinArray[k]+"_"+
				(Number(beishuArray[k])*Number(prix)-Number(benjinArray[k]))+"_"+
				(parseFloat(shouyilvF).toFixed(2))+"%"+","+endTMap.get(key)+"#";
			}
			$("#allqiMoney").val(benjinArray[(Number(zhuihaoqishu)-1)]);
		}
		if(checkBloon){
			$("#zhuihaoDIV").html("");
			for ( var j = 0; j < arrayObj.length; j++) {
				$("#zhuihaoDIV").append(arrayObj[j]);
			}
			
			$("#zhuihaoJson").val(jsonStr);
	    }
		arrayObj = new Array();
		jsonStr = "";
	}
	
	
	
}
//设置按钮的点击时 文本框的可用状态切换
function showQorB(a){
	if(a==2){
		$("#quancheng_percent").attr("disabled","true"); 
		$("#qianqi_count").removeAttr("disabled");
		$("#qianqi_percent").removeAttr("disabled");
		$("#houqi_percent").removeAttr("disabled");
	}
	if(a==1){
		$("#quancheng_percent").removeAttr("disabled");
        $("#qianqi_count").attr("disabled","true");
		$("#qianqi_percent").attr("disabled","true");
		$("#houqi_percent").attr("disabled","true");
	}

}

function openTouzhu_zhuihao(){
	if(!touzhuPublic()){	
		return false;
	}
	var isZhuihao=0;//获取购买方式，如：代购  追号
	if($("#isZhuihao") != null){
		isZhuihao = $("#isZhuihao").val();
		}
	if(goumaifangshi==decodeURI(EncodeUtf8("追号")) || isZhuihao == 1){
		if($("#fenqikoukuan").hasClass("selected")){
			$("#payType").val("0");
			if($("#zhongType1")!=null||$("#zhongType1")!=undefined){
				if($("#zhongType1").attr('checked')== 'checked'){
					$("#payStop").val("1");
				}else{
					$("#payStop").val("0");
				}
			}
			if($("#zhuihaoSms")!=null||$("#zhuihaoSms")!=undefined){
				if($("#zhuihaoSms").attr('checked')== 'checked'){
					$("#smsType").val("1");
				}else{
					$("#smsType").val("0");
				}
			}
		}else if($("#tiqiankoukuan").hasClass("selected")){
			$("#payType").val("1");
			if($("#zhongType2")!=null||$("#zhongType2")!=undefined){
				if($("#zhongType2").attr('checked')=='checked'){
					$("#payStop").val("1");
				}else{
					$("#payStop").val("0");
				}
			}
		}
	}else if(goumaifangshi==decodeURI(EncodeUtf8("自由追号")) || isZhuihao == 2){
		if($("#fenqikoukuan1").hasClass("selected")){
			$("#payType").val("0");
			if($("#zhuihaoDanqi1")!=null||$("#zhuihaoDanqi1")!=undefined){
				if($("#zhuihaoDanqi1").attr('checked')=='checked'){
					$("#payStop").val("1");
				}else{
					$("#payStop").val("0");
				}
			}
			if($("#zhuihaoSms1")!=null||$("#zhuihaoSms1")!=undefined){
				if($("#zhuihaoSms1").attr('checked')=='checked'){
					$("#smsType").val("1");
				}else{
					$("#smsType").val("0");
				}
			}
		}else if($("#tiqiankoukuan1").hasClass("selected")){
			$("#payType").val("1");
			if($("#zhuihaoDanqi2")!=null||$("#zhuihaoDanqi2")!=undefined){
				if($("#zhuihaoDanqi2").attr('checked')=='checked'){
					$("#payStop").val("1");
				}else{
					$("#payStop").val("0");
				}
			}
		}
		
	}
	//判断用户余额是否充足  (投注金额是否大于余额) 
	 var current_money = $("#investField").text();
	 var goumaifangshi=$("#goumaifangshi").val();//获取购买方式，如：代购  追号
     var payType = $("#payType").val();
	 var zhuihaoqishu=1;
	    if(goumaifangshi==decodeURI(EncodeUtf8("追号")) || isZhuihao == 1){ //收益率追号
	    	var zhuihaojson = $("#zhuihaoJson").val();
	    	if(zhuihaojson =='' || zhuihaojson=="undefinde"){
	    		openAlert(decodeURI(EncodeUtf8("您好，您还没计算追号计划，请先进行收益设置！")));
	    		return false;
	    	}
	    }
		 if(goumaifangshi==decodeURI(EncodeUtf8("自由追号")) || isZhuihao == 2){// 自由追号
		    	var noList = "";
				if( $('input[name="baishucheckbox"]') != null){
					$('input[name="baishucheckbox"]').each(function () {
						if ($(this).attr('checked')) {
							noList += $(this).val() + "$";
						}
					});
				}else{
					openAlert(decodeURI(EncodeUtf8("您好，您还没设置追号计划，请先进行设置！")));
		    		return false;
				
				}
				if(noList == ''){
					openAlert(decodeURI(EncodeUtf8("您好，您还没设置追号计划，请先进行设置！")));
		    		return false;
				}
				var allMoney = 0;
				var diyiqiMoney = 0;
				var zongqishu = 0;
				var kaishiQihao = "";
				if(noList.indexOf("$")>-1){
					var nolistStr = noList.split("$");
					for ( var i = 0; i < nolistStr.length; i++) {
						
						if(nolistStr[i].split("_")[2] != null && nolistStr[i].split("_")[2] != "undefinde"){
							if(i==0){
								diyiqiMoney = Number(nolistStr[i].split("_")[2]);
								kaishiQihao = nolistStr[i].split("_")[0];
							}
							allMoney += Number(nolistStr[i].split("_")[2]);
							zongqishu++;
						}
					}
				}
				if(payType == "0"){
	    		    current_money = diyiqiMoney;
	    		    $("#allqiMoney").val(allMoney);
	        	}else if(payType == "1"){
	        		current_money = allMoney;
	        		$("#allqiMoney").val(allMoney);
	            }
		    	$("#diyiqiMoney").val(diyiqiMoney);	
		    	$("#diyiqiQihao").val(kaishiQihao);	
		    	$("#zongQishu").val(zongqishu);
		    }
    	if(payType == "0"){
    		    current_money = $("#diyiqiMoney").val();
        	}else if(payType == "1"){
        		current_money = $("#allqiMoney").val();
            }
	if(parseInt(current_money) > parseInt($("#touzhu_money").html())){         
		chargerTishi();
		loginShow("chargeTishi",false);
		return false;      
	}
	if(goumaifangshi==decodeURI(EncodeUtf8("追号")) || isZhuihao == 1){
		if(parseInt(current_money) > parseInt($("#touzhu_money").html())){         
			if(payType == "0"){
			    openAlert(decodeURI(EncodeUtf8("您好，您的余额不足以支付第一笔追号任务！")));
			}else{
				openAlert(decodeURI(EncodeUtf8("您好，您的余额不足以支付整个追号任务！")));	
			}
			return false;      
		}
		htmlMsg();//给 弹出层设置相关数据
		connPath();
		loginShow('touzhuOpen2', false);
		$("#popupLayer_openTouzhu2").css({'top':800,'left':400}); 
		
	}else if(goumaifangshi==decodeURI(EncodeUtf8("代购")) || isZhuihao == 0){
		current_money = $("#investField").text();
		if(parseInt(current_money) > parseInt($("#touzhu_money").html())){         
			chargerTishi();
			loginShow("chargeTishi",false);
			return false;      
		}
		htmlMsg();//给 弹出层设置相关数据
		connPath();
		loginShow('touzhuOpen1', false);
	}else{//自由追号
		if(parseInt(current_money) > parseInt($("#touzhu_money").html())){         
			if(payType == "0"){
			    openAlert(decodeURI(EncodeUtf8("您好，您的余额不足以支付第一笔追号任务！")));
			}else{
				openAlert(decodeURI(EncodeUtf8("您好，您的余额不足以支付整个追号任务！")));	
			}
			return false;      
		}
		htmlMsg();//给 弹出层设置相关数据
		loginShow('touzhuOpen3', false);
		$("#popupLayer_openTouzhu3").css({'top':880,'left':400}); 
	}
}
//获取 奖金 
function getPrix(codes,lotno){
	var prix = 0;
	if(lotno == "T01012"){
		var wanfa = codes.substring(0,3);
		var code = codes.substring(4,codes.length-1);
	}else{
		var wanfa = codes.substring(0,2);
		var code = codes.substring(2,codes.length-1);
	}
	var touzhuZhushu = $("#lab_Num").text();
	if(lotno == "T01010"){
		if(wanfa =="R1"){
			prix = 13;
		}
		if(wanfa =="Q2"){
			prix = 130;
		}
		if(wanfa =="Z2"){
			prix = 65;
		}
		if(wanfa =="Q3"){
			prix = 1170;
		}
		if(wanfa =="Z3"){
			prix = 195;
		}
		if(wanfa =="R2"){
			if(code.indexOf("$") > -1){
				if(code.split("$")[1].split(",").length <5)
				 prix = 6 * code.split("$")[1].split(",").length;
				else
				 prix = 6 * 4;
			}else{
				if(code.split(",").length == 3)
				prix = 6 * 3;
				else 
				prix = 6;
			}
			
		}
		if(wanfa =="R3"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount ==1){
					tmCount = tmCount>4?4:tmCount;
				}else{
					tmCount = tmCount>3?3:tmCount;
				}
				var zhushu = dantuo(tmCount,3,dmCount);
				prix = 19 * Number(zhushu);
			}else{
				if(code.split(",").length == 4){
					prix = 19 * 4;
				}
				else {
					prix = 19;
				} 
			}
		}
		if(wanfa =="R4"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount ==1){
					tmCount = tmCount>4?4:tmCount;
				}else if(dmCount ==2){
					tmCount = tmCount>3?3:tmCount;
				}else {
					tmCount = tmCount>2?2:tmCount;
				}
				
				var zhushu = dantuo(tmCount,4,dmCount);
				prix = 78 * Number(zhushu);
			}else{
				if(code.split(",").length > 4)
				prix = 78 * 5;
				else 
				prix = 78;
			}
		}
		if(wanfa =="R5"){
			prix = 540;
		}
		if(wanfa =="R6"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				prix = 90 * (tmCount-(5-dmCount));
				
			}else{
				
				prix = 90 * Number(code.split(",").length -5);
			}
		}
		if(wanfa =="R7"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount <= 5){
					if(Number((tmCount+dmCount)-5) == 6){
						prix = 26*15;
					}
					if(Number((tmCount+dmCount)-5) == 5){
						prix = 26*10;
					}
					if(Number((tmCount+dmCount)-5) == 4){
						prix = 26*6;
					}
					if(Number((tmCount+dmCount)-5) == 3){
						prix = 26*3;
					}
					
				}
				else{
						prix = 26*Number(tmCount);
					
				}
				
			}else{
				if(Number(code.split(",").length -5)==4){
					prix = 26*6;
				}
				else if(Number(code.split(",").length -5)==3){
					prix = 26*3;
				}else{
					prix = 26;
				}
			}
		}
		if(wanfa =="R8"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(Number(dmCount) <=5){
					prix = 9 * (tmCount-(5-dmCount));
				}else{
					prix = 9 * Number(tmCount);
				}
				
			}else{
				prix = 9;
			}
		}
	}
	if(lotno == "T01007"){
		if(wanfa =="DD"){
			prix = 4;
		}
		if(wanfa =="1D"){
			prix = 10;
		}
		if(wanfa =="2D"){
			prix = 100;
		}
		if(wanfa =="F2"){
			
				prix = 50;
		}
		if(wanfa =="S2"){
			prix = 50;
		}
		if(wanfa =="3D"){
			prix = 1000;
		}
		if(wanfa =="5D"){
			prix = 100000;
		}
		if(wanfa =="5T"){
			prix = 20440;
		}
	}if(lotno == "T01012"){
		if(wanfa =="101"){
			prix = 13;
		}
		if(wanfa =="141"||wanfa =="142"){
			prix = 130;
		}
		if(wanfa =="131"||wanfa =="108"||wanfa =="133"){
			prix = 65;
		}
		if(wanfa =="161"||wanfa =="162"){
			prix = 1170;
		}
		if(wanfa =="151"||wanfa =="109"||wanfa =="153"){
			prix = 195;
		}
		if(wanfa =="121"){
				if(code.split("$")[1].split(",").length <5)
				 prix = 6 * code.split("$")[1].split(",").length;
				else
				 prix = 6 * 4;
		}
		if(wanfa =="111"||wanfa =="102"){
				if(code.split(",").length == 3)
				prix = 6 * 3;
				else 
				prix = 6;
		}
		if(wanfa =="122"){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount ==1){
					tmCount = tmCount>4?4:tmCount;
				}else{
					tmCount = tmCount>3?3:tmCount;
				}
				var zhushu = dantuo(tmCount,3,dmCount);
				prix = 19 * Number(zhushu);
		}
		if(wanfa =="112"||wanfa =="103"){
				if(code.split(",").length == 4){
					prix = 19 * 4;
				}
				else {
					prix = 19;
				} 
		}
		if(wanfa =="123"){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount ==1){
					tmCount = tmCount>4?4:tmCount;
				}else if(dmCount ==2){
					tmCount = tmCount>3?3:tmCount;
				}else {
					tmCount = tmCount>2?2:tmCount;
				}
				
				var zhushu = dantuo(tmCount,4,dmCount);
				prix = 78 * Number(zhushu);
		}
		if(wanfa =="113"||wanfa =="104"){
				if(code.split(",").length > 4)
				prix = 78 * 5;
				else 
				prix = 78;
		}
		if(wanfa =="114"||wanfa =="105"||wanfa =="124"){
			prix = 540;
		}
		if(wanfa =="125"){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				prix = 90 * (tmCount-(5-dmCount));
		}
		if(wanfa =="115"||wanfa =="106"){
				prix = 90 * Number(code.split(",").length -5);
		}
		if(wanfa =="126"){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(dmCount <= 5){
					if(Number((tmCount+dmCount)-5) == 6){
						prix = 26*15;
					}
					if(Number((tmCount+dmCount)-5) == 5){
						prix = 26*10;
					}
					if(Number((tmCount+dmCount)-5) == 4){
						prix = 26*6;
					}
					if(Number((tmCount+dmCount)-5) == 3){
						prix = 26*3;
					}
					
				}
				else{
						prix = 26*Number(tmCount);
					
				}
				
		}
		if(wanfa =="116"||wanfa =="107"){
				if(Number(code.split(",").length -5)==4){
					prix = 26*6;
				}
				else if(Number(code.split(",").length -5)==3){
					prix = 26*3;
				}else{
					prix = 26;
				}
			}
		if(wanfa =="117"){
			if(code.indexOf("$") > -1){
				var tmCount = code.split("$")[1].split(",").length;
				var dmCount = code.split("$")[0].split(",").length;
				if(Number(dmCount) <=5){
					prix = 9 * (tmCount-(5-dmCount));
				}else{
					prix = 9 * Number(tmCount);
				}
				
			}else{
				prix = 9;
			}
		}
	}
	return prix;
	
}

