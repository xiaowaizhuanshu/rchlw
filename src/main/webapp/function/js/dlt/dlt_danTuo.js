
function getBallCount(BallColor,BallType,BallLength){
	var blueTuoMaCount=0;
    for ( var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i),BallType)){
			blueTuoMaCount++;
		}
	}
	return blueTuoMaCount;
}

function danTuo_selectBall(BallColor, BallNum, BallType) {
	
	var Selected = danTuo_getBallState(BallColor, BallNum, BallType);
	if (Selected) {
		danTuo_setBallState(BallColor, BallNum, false, BallType);
		danTuo_checkFull();
		return;
	}
	danTuo_setBallState(BallColor, BallNum, true, BallType);
	if(BallColor=="r"){
		if(BallType=="danMa"){
			danTuo_setBallState(BallColor, BallNum, false, "tuoMa");
		}else{
			danTuo_setBallState(BallColor, BallNum, false, "danMa");
		}
	}else if(BallColor=="b"){
		if(BallType=="danMa"){
			danTuo_setBallState(BallColor, BallNum, false, "tuoMa");
		}else{
			danTuo_setBallState(BallColor, BallNum, false, "danMa");
		}
	}
	danTuo_checkFull(); 
	return;
}
function danTuo_getBallState(BallColor, BallNum, BallType) {
	var isSelectedAttr;
	if (BallType != "") {
		isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_" + BallType).attr('isselected');
	}
	var isSelected = isSelectedAttr == 'true' ? true : false;

	return isSelected;
}
function danTuo_setBallState(BallColor, BallNum, SelectState, BallType) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_" + BallType);
	if (SelectState) {
		if (BallColor == 'r' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if(BallType=='danMa'){
			   if(getBallCount("r","danMa",35)>3){
					alert(decodeURI(EncodeUtf8("前区最多只能选择4个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_r';
		}
	    if (BallColor == 'b' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if(BallType=='danMa'){
			   if(getBallCount("b","danMa",12)>0){
					alert(decodeURI(EncodeUtf8("后区最多只能选择1个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_b';
	    }
	    ball.attr('isselected', 'true'); 
	} else {
		ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}
var p=0;
function danTuo_checkFull() {
	var invest = getZhuShu();
	p = invest * 2;
	$("#qdan").html('0');
	$("#qtuo").html('0');
	$("#hdan").html('0');
	$("#htuo").html('0');
	$("#rzhu").html(invest);
	$("#totlam").html(p.toFixed());
}
function jiec(a){
	var b=1;
	for (var i = 1; i <= a; i++) {
		b = b*i;
	}
	return b;
}
function zuhe(m,n){
	var a = 0;
	a = jiec(n)/((jiec(n-m)*(jiec(m))));
	return a;
}

//算注数
function getZhuShu(){
	var redDanMaCount = getBallCount('r','danMa',35);
	var redTuoMaCount = getBallCount('r','tuoMa',35); 
	var blueDanMaCount = getBallCount('b','danMa',12);
	var blueTuoMaCount = getBallCount('b','tuoMa',12);
	
	var InvestNum = 1;
	if (redDanMaCount > 4 || redDanMaCount+redTuoMaCount < 6  || blueDanMaCount > 1 || blueTuoMaCount < 2){
		return 0;
	}
	
	var C_r = zuhe(5-redDanMaCount,redTuoMaCount);
	var C_b = zuhe(2-blueDanMaCount,blueTuoMaCount);
	
	InvestNum = parseInt(C_r * C_b);
	
	return InvestNum;
}
function danTuo_getBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1)
		BallNum = "0" + BallNum;
	return BallNum;
}
function getCheck_ballNumber() {
	var dlt_danTuoCode="";
	var LotteryNumber = "";
	var redDanMa_BallNum;
	var redTuoMa_BallNum;
	var blueDanMa_BallNum;
	var blueTuoMa_BallNum;
	
	var qianDanMa;
	var houDanMa;
	var qianqu;
	var qianQu1;
	var qianQu2;
	var qianQu3;
	var qianQu4;
	var ball1;
	var ball2;
	
	var hou;
	for ( var i = 1; i <= 35; i++) {
		redDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redDanMa_BallNum,'danMa')){
			LotteryNumber += (redDanMa_BallNum + " ");
			if(redDanMa_BallNum.substring(0,1)=="0"){
				dlt_danTuoCode += redDanMa_BallNum.substring(1,2)+",";
	           }else{
	        	dlt_danTuoCode += redDanMa_BallNum+",";
	           }
		}
	}
	LotteryNumber += "$ ";
	dlt_danTuoCode+="$";
	for ( var i = 1; i <= 35; i++) {
		redTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redTuoMa_BallNum,'tuoMa')){
			LotteryNumber += (redTuoMa_BallNum + " ");
			if(redTuoMa_BallNum.substring(0,1)=="0"){
				dlt_danTuoCode += redTuoMa_BallNum.substring(1,2)+",";
            }else{
            	dlt_danTuoCode += redTuoMa_BallNum+",";
            }
		}
	}
	LotteryNumber += "- ";  
	dlt_danTuoCode+="-";
	
	for ( var i = 1; i <= 12; i++) {
		blueDanMa_BallNum= danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueDanMa_BallNum,'danMa')){
			LotteryNumber += (blueDanMa_BallNum + " ");
			if(blueDanMa_BallNum.substring(0,1)=="0"){
				dlt_danTuoCode += blueDanMa_BallNum.substring(1,2)+",";
            }else{
            	dlt_danTuoCode += blueDanMa_BallNum+",";
            }
		}
	}
	LotteryNumber += "$ ";  
	dlt_danTuoCode+="$";
	
	for ( var i = 1; i <= 12; i++) {
		blueTuoMa_BallNum= danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueTuoMa_BallNum,'tuoMa')){
			LotteryNumber += (blueTuoMa_BallNum + " ");
			if(blueTuoMa_BallNum.substring(0,1)=="0"){
				dlt_danTuoCode += blueTuoMa_BallNum.substring(1,2)+",";
            }else{
            	dlt_danTuoCode += blueTuoMa_BallNum+",";
            }
		}

		ball1=dlt_danTuoCode;
		var conBall1=ball1.lastIndexOf("$");
		qianDanMa=dlt_danTuoCode.substring(0,conBall1-1);
		hou=dlt_danTuoCode.substring(conBall1,dlt_danTuoCode.length-1);
		
		houDanMa=dlt_danTuoCode.substring(conBall1,conBall1.length);
		qianqu=houDanMa.substring(houDanMa,houDanMa.length-1);
		
		ball2=qianDanMa;
		var conBall2=ball2.lastIndexOf("$");
		qianQu1=ball2.substring(0,conBall2-1);
		
		
		qianQu2=ball2.substring(conBall2,conBall2.length);
		var conBall3=qianQu2.lastIndexOf("-");
		qianQu3=qianQu2.substring(0,conBall3-1);
		qianQu4=qianQu2.substring(conBall3,conBall3.length);
		
		var findJia=qianDanMa.lastIndexOf("-");
		var find$=qianDanMa.lastIndexOf("$");
		
		subJia=qianDanMa.substring(findJia-1,find$);
		subJia2=qianDanMa.substring(findJia-1,find$-1);
		subJiaHou=qianDanMa.substring(findJia);
		secondCode=qianDanMa.substring(find$,qianDanMa.length);
		replace$=hou.replace("$", "-$");
		var findQianDanMa$=qianDanMa.indexOf("$");
		var conCount=qianDanMa.substring(findQianDanMa$,qianDanMa);
		var clear$=secondCode.replace("$", "");
		var cleanDouHou=clear$.substring(0,clear$.length-1);
		var newSecond=secondCode.substring(secondCode,secondCode.length-1);
	}
	
	if(subJiaHou.length<=3){ 
		if(conCount<2)
		var douHao=clear$.lastIndexOf(",");
		var finalStr1=clear$.substring(0,douHao);
		var finalStr2=clear$.substring(douHao+1);
			dlt_danTuoCode=finalStr1+finalStr2+hou+";";//1不选
		if(qianQu1.length>1)//全选
			dlt_danTuoCode=qianQu1+subJia+subJiaHou+hou+";";
	}
	
	if(subJiaHou.length>3&&qianQu1.length==0)
		    dlt_danTuoCode=cleanDouHou+hou.replace("$", "-")+";"; // 1,2不选 
	else if(subJiaHou.length>3&&qianQu1.length!=0)
			dlt_danTuoCode=qianQu1+newSecond+replace$+";"; //2不选	
	return dlt_danTuoCode;
}
function getFrontDanTuo() {
	var LotteryNumber = "";
	var redDanMa_BallNum;
	var redTuoMa_BallNum;
	var blueDanMa_BallNum;
	var blueTuoMa_BallNum;
	for ( var i = 1; i <= 35; i++) {
		redDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redDanMa_BallNum,'danMa')){
			LotteryNumber += (redDanMa_BallNum + " ");
		}
	}
	if(LotteryNumber != "")
		LotteryNumber += "$ ";
	for ( var i = 1; i <= 35; i++) {
		redTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redTuoMa_BallNum,'tuoMa')){
			LotteryNumber += (redTuoMa_BallNum + " ");
		}
	}
	LotteryNumber += "- ";  
	for ( var i = 1; i <= 12; i++) {
		blueDanMa_BallNum= danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueDanMa_BallNum,'danMa')){
			LotteryNumber += (blueDanMa_BallNum + " ");
		}
	}
	var findJia=LotteryNumber.lastIndexOf("-");
	var subJia=LotteryNumber.substring(findJia);
    LotteryNumber += "$ ";  
	for ( var i = 1; i <= 12; i++) {
		blueTuoMa_BallNum= danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueTuoMa_BallNum,'tuoMa')){
			LotteryNumber += (blueTuoMa_BallNum + " ");
		}
	}
	return LotteryNumber;
}
function ClearCheck() {
	for ( var i = 1; i <= 35; i++)
		danTuo_setBallState("r", danTuo_getBallNum(i), false,"danMa");
	for ( var i = 1; i <= 35; i++)
		danTuo_setBallState("r", danTuo_getBallNum(i), false,"tuoMa");

	for ( var i = 1; i <= 12; i++)
		danTuo_setBallState("b", danTuo_getBallNum(i), false,"danMa");
	for ( var i = 1; i <= 12; i++)
		danTuo_setBallState("b", danTuo_getBallNum(i), false,"tuoMa");
	$('#change_zhuShu_money').html(decodeURI(EncodeUtf8("0注，0元。")));
}
function addDanTuo() {
	 var firstRedCount = 0;
	 var secondRedCount = 0;
	 var blueDanMaCount = 0;
	 var blueTuoMaCount=0;
	 for ( var i = 1; i <= 35; i++) {
	 	if (danTuo_getBallState("r", danTuo_getBallNum(i), 'danMa'))
	 		firstRedCount++;
	 }
	 for ( var i = 1; i <= 35; i++) {
	 	if (danTuo_getBallState("r", danTuo_getBallNum(i), 'tuoMa'))
	 		secondRedCount++;
	 }
	 for ( var i = 1; i <= 12; i++) {
	 	if (danTuo_getBallState("b", danTuo_getBallNum(i),'danMa'))
	 		blueDanMaCount++;
	 }
	 for ( var i = 1; i <= 12; i++) {
		 	if (danTuo_getBallState("b", danTuo_getBallNum(i),'tuoMa'))
		 		blueTuoMaCount++;
	 }

	 if(firstRedCount>4 || secondRedCount<2){
			alert(decodeURI(EncodeUtf8("投注提示：\n前区至少选择2个拖码")));

			return false;
	}
	if(blueDanMaCount>1){
		alert(decodeURI(EncodeUtf8("投注提示：\n后区至多选择1个胆码")));
		return false;
	}
	if(blueTuoMaCount<2){
		alert(decodeURI(EncodeUtf8("投注提示：\n后区至少选择2个拖码")));
		return false;
	}
	if(firstRedCount+secondRedCount<6 ){
		alert(decodeURI(EncodeUtf8("投注提示：\n前区胆码加前区拖码不能少于6个")));
		return false;
	}
	if(p>20000){
		alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
    	return false;
    }
	var lotteryView = getFrontDanTuo();
	var frontLot=lotteryView;
	var lotteryNum=getCheck_ballNumber();
	var lotteryListSelect = $("#list_LotteryNumber");
	var zhuShu = getZhuShu();

	if (zhuShu > 1) {
		lotteryView =decodeURI(EncodeUtf8('[胆拖] '))+ lotteryView + '[' + zhuShu + decodeURI(EncodeUtf8('注，共')) + 2
				* zhuShu + decodeURI(EncodeUtf8('元]'));
	}
	dltCheckBox();
	totalMoney += oneMoney * zhuShu;
	
	var opt = new Option(lotteryView,lotteryNum);
	opt.setAttribute('allLot',frontLot);
	opt.setAttribute('backLot',lotteryNum);
	opt.setAttribute('wangFang',"2");
	opt.setAttribute('zhushu',zhuShu);
	opt.setAttribute('money',1*2);
	opt.setAttribute('delMoney', 2 * zhuShu);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView);
	
	ClearCheck();
	var multiple=(Number($("#tb_Multiple").val()));
    var check_money=parseInt(oneMoney * zhuShu);
    var partial_money=$("#investField").html();
    totalMoney=parseInt((check_money*multiple)+partial_money*1);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	totalLotteryInvest += zhuShu;
	$("#lab_Num").html(totalLotteryInvest);
	$("#qdan").html('0');
	$("#qtuo").html('0');
	$("#hdan").html('0');
	$("#htuo").html('0');
	$("#rzhu").html('0');
	$("#totlam").html('0');
	return true;
}
