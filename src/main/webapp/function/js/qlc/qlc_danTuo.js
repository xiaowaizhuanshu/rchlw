
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
	}
	danTuo_checkFull(); 
	return;
}
function danTuo_getBallState(BallColor, BallNum, BallType) {
	var isSelectedAttr;
	if (BallType != "") { //danMa or tuoMa
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
			   if(getBallCount("r","danMa",30)>5){
					alert(decodeURI(EncodeUtf8("红球最多只能选择 6个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_r';
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
	p= invest * 2;
	$('#change_zhuShu_money').html(invest + decodeURI(EncodeUtf8('注，'))+ p.toFixed() +decodeURI(EncodeUtf8('元。')));
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


function getBallCount(BallColor,BallType,BallLength){
	var blueTuoMaCount=0;
    for ( var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i),BallType)){
			blueTuoMaCount++;
		}
	}
	return blueTuoMaCount;
}

function getZhuShu() {
	var firstRedCount = getBallCount("r","danMa",30); 
	var secondRedCount = getBallCount("r","tuoMa",30);
	var InvestNum = 1;
	if(firstRedCount>6){
		//alert("胆码不能大于6个");
		return 0;
	}
	if(firstRedCount < 1){
		return 0;
	}
	if (firstRedCount < 1  || firstRedCount>6 || (firstRedCount + secondRedCount) < 8 ||(firstRedCount + secondRedCount) >20){
		return 0;
	}
	
	InvestNum=zuhe(7-firstRedCount,secondRedCount);
	
	return InvestNum;
}
function danTuo_getBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1)
		BallNum = "0" + BallNum;
	return BallNum;
}
function getCheck_ballNumber() {
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	var dan;
	var qlc_danTuo_code="";
	for ( var i = 1; i <= 30; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum,'danMa')){
			LotteryNumber += (danMa_BallNum + " ");
			if(danMa_BallNum.substring(0,1)=="0"){
				qlc_danTuo_code += danMa_BallNum.substring(1,2)+",";
  	           }else{
  	        	qlc_danTuo_code += danMa_BallNum+",";
  	           }
		}
			
	}
	LotteryNumber += "* ";
	qlc_danTuo_code+="*";
	for ( var i = 1; i <= 30; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum,'tuoMa')){
			LotteryNumber += (tuoMa_BallNum+' ');
			if(tuoMa_BallNum.substring(0,1)=="0"){
				qlc_danTuo_code += tuoMa_BallNum.substring(1,2)+",";
 	           }else{
 	        	qlc_danTuo_code += tuoMa_BallNum+",";
 	           }
		}
		dan=qlc_danTuo_code;
        var conBall=dan.lastIndexOf("*");
        red=qlc_danTuo_code.substring(0,conBall-1);
       
      var conBlue1=qlc_danTuo_code.lastIndexOf("*");
      var blue1=qlc_danTuo_code.substring(conBlue1,qlc_danTuo_code.length);
      var conBlue=blue1.lastIndexOf(",");
      var blue=blue1.substring(0,conBlue);
	}
	qlc_danTuo_code=red+blue+"^";
	return qlc_danTuo_code;
}
function getFrontLot() {
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	for ( var i = 1; i <= 30; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum,'danMa')){
			LotteryNumber += (danMa_BallNum + " ");
		}
	}
	LotteryNumber += "* ";
	for ( var i = 1; i <= 30; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum,'tuoMa')){
			LotteryNumber += (tuoMa_BallNum+' ');
 	       }
		}
	return LotteryNumber;
}
function ClearCheck() {
	for ( var i = 1; i <= 30; i++)
		danTuo_setBallState("r", danTuo_getBallNum(i), false,"danMa");
	for ( var i = 1; i <= 30; i++)
		danTuo_setBallState("r", danTuo_getBallNum(i), false,"tuoMa");
	$('#change_zhuShu_money').html(0 + decodeURI(EncodeUtf8('注，'))+ 0 +decodeURI(EncodeUtf8('元。')));
}
function addDanTuo() {
	var firstRedCount = 0;
	var secondRedCount = 0;
	for ( var i = 1; i <= 30; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'danMa'))
	 		firstRedCount++;
	 }
	for ( var i = 1; i <= 30; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'tuoMa'))
	 		secondRedCount++;
	}
	if(firstRedCount<1 || firstRedCount>6){
		alert(decodeURI(EncodeUtf8("投注提示：\n胆码：至少选择 1个，最多 6个")));
		return false;
	}
	if((firstRedCount+secondRedCount)<8 ||(firstRedCount+secondRedCount)>20 ){
		alert(decodeURI(EncodeUtf8("投注提示：\n胆码加拖码总数不能小于 8，不能大于 20")));
		return false;
	}
	if(p>20000){
    	alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
    	return false;
    }
	var lotteryNumber = getCheck_ballNumber(); //hou
	var lotteryView =getFrontLot();
	var frontLot=lotteryView;
	var lotteryListSelect = $("#list_LotteryNumber");
	var zhuShu = getZhuShu();
	if (zhuShu > 1) {
		lotteryView = decodeURI(EncodeUtf8('[胆拖]')) + lotteryView + ' [' + zhuShu + decodeURI(EncodeUtf8('注，共')) + 2* zhuShu + decodeURI(EncodeUtf8('元]'));
	}
	var opt = new Option(lotteryView,lotteryNumber);
	opt.setAttribute('allLot',frontLot);
	opt.setAttribute('backLot',lotteryNumber);
	opt.setAttribute('wangFang',"00");
	opt.setAttribute('zhushu',"1");
	opt.setAttribute('money',1*2);
	opt.setAttribute('delMoney', 2 * zhuShu);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView);
	
	totalMoney += 2 * zhuShu;
	ClearCheck();
	var multiple=(Number($("#tb_Multiple").val()));
    var check_money=parseInt(2 * zhuShu);
    var partial_money=$("#investField").html();
    totalMoney=parseInt((check_money*multiple)+partial_money*1);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance -Number($("#current_money").html()));
	if(a<0){
		$("#final_money").html("0");
	}else{
	   $("#final_money").html(a);
	}
	totalLotteryInvest += zhuShu;
	
	$("#lab_Num").html(totalLotteryInvest);
	return true;
}
