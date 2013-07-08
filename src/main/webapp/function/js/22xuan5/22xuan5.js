//------胆拖JS（eexw_danTuo.js）开始--------

function danTuo_selectBall(BallColor, BallNum, BallType) {
	var Selected = danTuo_getBallState(BallColor, BallNum, BallType);
	if (Selected) {
		danTuo_setBallState(BallColor, BallNum, false, BallType);
		danTuo_checkFull();
		return;
	}
	danTuo_setBallState(BallColor, BallNum, true, BallType);
	if (BallColor == "r") {
		if (BallType == "danMa") {
			danTuo_setBallState(BallColor, BallNum, false, "tuoMa");
		} else {
			danTuo_setBallState(BallColor, BallNum, false, "danMa");
		}
	}
	danTuo_checkFull();
	$("#dt_x_zhu").html(getZhuShu());
	$("#dt_x_yuan").html((getZhuShu() * 2));
	$("#x_danma").html(getBallCount("r", "danMa", 22));
	$("#x_tuoma").html(getBallCount("r", "tuoMa", 22));
	return;
}
function danTuo_getBallState(BallColor, BallNum, BallType) {
	var isSelectedAttr;
	if (BallType != "") { //danMa or tuoMa
		isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_" + BallType).attr('isselected');
	}
	var isSelected = isSelectedAttr == 'true' ? true: false;

	return isSelected;
}
function danTuo_setBallState(BallColor, BallNum, SelectState, BallType) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_" + BallType);
	if (SelectState) {
		if (BallColor == 'r' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if (BallType == 'danMa') {
				if (getBallCount("r", "danMa", 22) > 3) {
					openAlert(decodeURI(EncodeUtf8("最多只能选择4个胆码！")));
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
var p = 0;
function danTuo_checkFull() {
	var invest = getZhuShu();
	p = invest * 2;
	$("#dt_x_zhu").html(invest);
	$("#dt_x_yuan").html(p);
	$("#x_danma").html(getBallCount("r", "danMa", 22));
	$("#x_tuoma").html(getBallCount("r", "tuoMa", 22));
}
function jiec(a) {
	var b = 1;
	for (var i = 1; i <= a; i++) {
		b = b * i;
	}
	return b;
}
function zuhe(m, n) {
	var a = 0;
	a = jiec(n) / ((jiec(n - m) * (jiec(m))));
	return a;
}

//得到红球胆码拖码、蓝球胆码拖码的个数
//BallColor 球的颜色
//BallType 球的类型
//BallLength 球的个数
function getBallCount(BallColor, BallType, BallLength) {
	var blueTuoMaCount = 0;
	for (var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i), BallType)) {
			blueTuoMaCount++;
		}
	}
	return blueTuoMaCount;
}

function getZhuShu() {
	var firstRedCount = getBallCount("r", "danMa", 22);
	var secondRedCount = getBallCount("r", "tuoMa", 22);
	//alert("danma"+firstRedCount+"tuoma"+secondRedCount);
	var InvestNum = 1;
	if (firstRedCount > 4) {
		//alert("胆码不能大于4个");
		return 0;
	}
	if (firstRedCount < 1) {
		return 0;
	}
	if (firstRedCount < 1 || firstRedCount > 4 || (firstRedCount + secondRedCount) < 6 ) {
		return 0;
	}

	InvestNum = zuhe(5 - firstRedCount, secondRedCount);

	return InvestNum;
}
function danTuo_getBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}
function getCheck_ballNumber() {
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	var dan;
	var eexw_danTuo_code = "";
	for (var i = 1; i <= 22; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum, 'danMa')) {
			LotteryNumber += (danMa_BallNum + "");
			if (danMa_BallNum.substring(0, 1) == "0") {
				eexw_danTuo_code += danMa_BallNum.substring(1, 2) + ",";
			} else {
				eexw_danTuo_code += danMa_BallNum + ",";
			}
		}

	}
	LotteryNumber += "* ";
	eexw_danTuo_code += "*";
	for (var i = 1; i <= 22; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (tuoMa_BallNum + ' ');
			if (tuoMa_BallNum.substring(0, 1) == "0") {
				eexw_danTuo_code += tuoMa_BallNum.substring(1, 2) + ",";
			} else {
				eexw_danTuo_code += tuoMa_BallNum + ",";
			}
		}
		dan = eexw_danTuo_code;
		var conBall = dan.lastIndexOf("*");
		red = eexw_danTuo_code.substring(0, conBall - 1);

		var conBlue1 = eexw_danTuo_code.lastIndexOf("*");
		var blue1 = eexw_danTuo_code.substring(conBlue1, eexw_danTuo_code.length);
		var conBlue = blue1.lastIndexOf("");
		var blue = blue1.substring(0, conBlue);
	}
	eexw_danTuo_code = red + blue + ";";
	return eexw_danTuo_code;
}
//拼接胆拖的号码蓝样式
function getFrontLot(zhushu) {
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	for (var i = 1; i <= 22; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum, 'danMa')) {
			LotteryNumber += (danMa_BallNum + ",");
		}
	}
	LotteryNumber = '<span class="jieguo0">[<font class="red1">' + decodeURI(EncodeUtf8('胆')) + '</font>] ' + LotteryNumber.substring(0, LotteryNumber.length - 1) + '&nbsp;[<font class="red1">' + decodeURI(EncodeUtf8('拖')) + '</font>]';
	for (var i = 1; i <= 22; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (tuoMa_BallNum + ',');
		}
	}
	return LotteryNumber.substring(0, LotteryNumber.length - 1) + '</span><span class="jieguo1">  ' + zhushu + decodeURI(EncodeUtf8('注　　共')) + zhushu * 2 + decodeURI(EncodeUtf8('元')) + '</span>';
}
function ClearCheck() {
	for (var i = 1; i <= 22; i++) danTuo_setBallState("r", danTuo_getBallNum(i), false, "danMa");
	for (var i = 1; i <= 22; i++) danTuo_setBallState("r", danTuo_getBallNum(i), false, "tuoMa");
	$('#dt_x_zhu').html("0");
	$('#dt_x_yuan').html("0");
	$('#x_danma').html(0);
	$('#x_tuoma').html(0);
}
function addDanTuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var firstRedCount = 0;
	var secondRedCount = 0;
	for (var i = 1; i <= 22; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'danMa')) firstRedCount++;
	}
	for (var i = 1; i <= 22; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'tuoMa')) secondRedCount++;
	}
	if (firstRedCount < 1 || firstRedCount > 4) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n胆码：至少选择 1个，最多 6个")));
		return false;
	}
	if ((firstRedCount + secondRedCount) < 6 || (firstRedCount + secondRedCount) > 22) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n胆码加拖码总数不能小于 6，不能大于 22")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
		return false;
	}
	var lotteryNumber = getCheck_ballNumber(); //hou
	var zhuShu = getZhuShu();
	var lotteryView = getFrontLot(zhuShu);
	var frontLot = lotteryView;
	var lotteryListSelect = $("#list_LotteryNumber");

	if (zhuShu > 1) {
		lotteryView = lotteryView;
	}
	var viewstr = lotteryNumber.split("*");
	var view = viewstr[0] + "|" + viewstr[1].substring(0, viewstr[1].length - 1) + "|" + zhuShu + decodeURI(EncodeUtf8("注　　共")) + 2 * zhuShu + decodeURI(EncodeUtf8("元"));

	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "2");
	opt.setAttribute('zhushu', zhuShu);
	opt.setAttribute('money', 1 * 2);
	opt.setAttribute('delMoney', 2 * zhuShu);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNumber);

	totalMoney += 2 * zhuShu;
	ClearCheck();
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * zhuShu);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	var a = parseFloat(touzhu_balance - Number($("#current_money").html()));
	if (a < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(a);
	}
	totalLotteryInvest += zhuShu;

	$("#lab_Num").html(totalLotteryInvest);
	return true;
}

//------胆拖JS结束--------

//------普通投注JS（eexw_puTong.js）开始--------
function SelectBall(BallColor, BallNum) {
	var Selected = GetBallState(BallColor, BallNum);
	if (Selected) {
		SetBallState(BallColor, BallNum, false);
		CheckFull();
		return;
	}
	SetBallState(BallColor, BallNum, true);
	if (GetLotteryInvestNum() > 10000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
		SetBallState(BallColor, BallNum, false);
	}
	CheckFull();
	return;
}

function GetRedBallSelectedNum() {
	var Count = 0;
	for (var i = 1; i <= 22; i++) {
		if (GetBallState("r", GetBallNum(i))) Count++;
	}
	return Count;
}

function GetBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;

	return BallNum;
}
function GetBallState(BallColor, BallNum) {
	var isSelectedAttr = $("#td_" + BallColor + "_" + BallNum).attr('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}

function SetBallState(BallColor, BallNum, SelectState) {
	var ball = $("#td_" + BallColor + "_" + BallNum);
	if (SelectState) {
		if (BallColor == 'r') {
			ball[0].className = 'ball_num_r';
		}
		ball.attr('isselected', 'true');
	} else {
		ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}
function CheckFull() {
	var invest = GetLotteryInvestNum();
	if (invest < 1) $("#btn_2_Add").attr('isdisabled', 'true');
	else $("#btn_2_Add").attr('isdisabled', 'false');
	var p = invest * 2;
	$('#x_zhu').html(invest);
	$('#x_yuan').html(p);
}
function GetLotteryNumber() {
	var eexw_code = "";
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 22; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + "");
			if (BallNum.substring(0, 1) == "0") {
				eexw_code += BallNum.substring(1, 2) + ",";
			} else {
				eexw_code += BallNum + ",";
			}
		}
		var controlRed = eexw_code.lastIndexOf(",");
		var red = eexw_code.substring(0, controlRed);
	}
	eexw_code = red + ";";
	return eexw_code;
}
function getCommonFrontLot() {
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 22; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) LotteryNumber += (BallNum + ",");
	}
	return LotteryNumber;
}
function jiec(a) {
	var b = 1;
	for (var i = 1; i <= a; i++) {
		b = b * i;
	}
	return b;
}
function zuhe(m, n) {
	var a = 0;
	a = jiec(n) / ((jiec(n - m) * (jiec(m))));
	return a;
}
function GetLotteryInvestNum() {
	var RedCount = 0;

	for (var i = 1; i <= 22; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}

	if ((RedCount < 5)) return 0;

	var InvestNum = 1;

	for (var i = 5; i <= RedCount; i++) InvestNum = zuhe(5, RedCount);

	return InvestNum;
}
function contain(array, o) {
	if (array != null) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] == o) {
				return true;
			}
		}
	}
	return false;
}
var eexw_redBallCount = 0;
function eexw_controllRedBallCount() {
	eexw_redBallCount = $("#eexw_redBallCount").val();
}
function eexw_redRand() {
	for (var i = 1; i <= 22; i += 1) SetBallState("r", GetBallNum(i), false);
	var redBallArray = new Array();
	eexw_controllRedBallCount();
	for (var i = 1; i <= eexw_redBallCount; i += 1) {
		var redRandNum = parseInt(Math.random() * 22) + 1;

		if (contain(redBallArray, redRandNum)) {
			i -= 1;
			continue;
		} else {
			redBallArray[i - 1] = redRandNum;
		}
		if (redRandNum < 10) {
			$("#td_r_0" + redRandNum).click();
		} else {
			$("#td_r_" + redRandNum).click();
		}
	}
}
function eexw_clearRedSelect() {
	for (var i = 1; i <= 22; i++) {
		SetBallState("r", GetBallNum(i), false);
	}
	$('#x_zhu').html("0");
	$('#x_yuan').html("0");
}
function btn_2_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	if ($('#btn_2_Add').attr('isdisabled') == 'true') {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请你至少选择 5个号码")));
		return;
	}
	if (GetLotteryInvestNum() < 1) {
		openAlert(decodeURI(EncodeUtf8("您选择的不是一注复式或单式票！")));
		return false;
	}
	if (GetLotteryInvestNum() > 10000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
		return;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryInvest = GetLotteryInvestNum();
	var lotteryNumber = GetLotteryNumber();
	var lotteryView = getCommonFrontLot();
	//去掉最后一个逗号
	lotteryView = lotteryView.substring(0, lotteryView.length - 1);
	var frontLot = lotteryView;
	if (lotteryInvest == 1) {
		lotteryView = lotteryView;
		click++;
	} else {
		lotteryView = lotteryView;
	}
	//号码蓝样式
	var lottery_view;
	if (lotteryInvest == 1) {
		lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("复式")) + "]" + lotteryView + "</span><span class='jieguo1'>  " + lotteryInvest + decodeURI(EncodeUtf8("注　　共")) + lotteryInvest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
	}
	var RedCount = 0;
	for (var i = 1; i <= 22; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}
	var view = lotteryView + "|" + lotteryInvest + decodeURI(EncodeUtf8("注　　共")) + lotteryInvest * 2 + decodeURI(EncodeUtf8("元"));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	if (RedCount == 5) {
		opt.setAttribute('wangFang', "0");
	} else {
		opt.setAttribute('wangFang', "1");
	}
	opt.setAttribute('zhushu', lotteryInvest);
	opt.setAttribute('money', 1 * 2);
	opt.setAttribute('delMoney', 2 * lotteryInvest);
	lotteryListSelect[0].options.add(opt);
	add_codes(lottery_view, lotteryNumber);

	totalMoney += 2 * lotteryInvest;
	ClearSelect();
	$("#btn_2_Add").attr('isdisabled', 'true');
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * lotteryInvest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	var a = parseFloat(touzhu_balance - Number($("#current_money").html()));
	if (a < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(a.toFixed());
	}
	totalLotteryInvest += lotteryInvest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#x_zhu").html("0");
	$("#x_yuan").html("0");
}

//------普通投注JS结束--------

function btn_2_RandManyClick(n) {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	if (parseInt(n) == 5) {
		click += 5;
	} else {
		click++;
	}
	totalLotteryInvest += parseInt(n);
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	var a = parseFloat(touzhu_balance - Number($("#current_money").html()));
	if (a < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(a.toFixed());
	}
	var arr = rollJx1(5, 22, 0, 0, true, false, 5, 0, parseInt(n));
	ClearSelect();

	var lotteryListSelect = $("#list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var arrRed = "";
		var arr1 = arr[i];
		var lottery = arr1.join(',');
		for (var j = 0; j < arr1.length; j++) {
			if (arr1[j].substring(0, 1) == "0") {
				arrRed += arr1[j].substring(1, 2) + ",";
			} else {
				arrRed += arr1[j] + ",";
			}
		}
		var lotteryNumber = "";
		var controlRed = arrRed.lastIndexOf(",");
		var red = arrRed.substring(0, controlRed);
		lotteryNumber += red + ";";

		var lotteryView = lottery;
		var opt = new Option(lotteryView, lotteryNumber);
		var frontLot = lottery;
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);

		lotteryListSelect[0].options.add(opt);
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
		add_codes(lotteryView, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
}

function updateMultipleTotalMoney() {
	var zhuShu = $("#lab_Num").html();
	var eexw_changeMoney = parseInt(2 * zhuShu);
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(eexw_changeMoney * initMultiple);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	var a = parseFloat(touzhu_balance - Number($("#current_money").html()));
	if (a < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(a.toFixed());
	}
}
//function change_playType(){
//	var commonType=document.getElementById("commonType");//普通
//	var danTuoType=document.getElementById("danTuoType");//胆拖
//    if(commonType.checked){
//    	document.getElementById("commonDIV").style.display="block";
//		document.getElementById("tuoMaDIV").style.display="none";
//    }else{
//		document.getElementById("commonDIV").style.display="none";
//		document.getElementById("tuoMaDIV").style.display="block";
//    }
//}
function ClearSelect() {
	for (var i = 1; i <= 22; i++) SetBallState("r", GetBallNum(i), false);
	$("#x_zhu").html("0");
	$("#x_yuan").html("0");
}
function rollJx1(minRed, redCount, minBlue, blueCount, sort, order, redLottery, blueLottery, lotteryCount) {
	var redZero = minRed == 0 ? 1 : 0;
	var blueZero = minBlue == 0 ? 1 : 0;
	var redTable = '';
	var blueTable = '';
	var bigArray = new Array();
	for (var a = 0; a < lotteryCount; a++) {
		redTable = GetBallNum(GetRandNumber(redCount) - redZero);
		for (var i = 1; redCount > 0 && i < redLottery; i++) {
			var temp = GetBallNum(GetRandNumber(redCount) - redZero);
			while (!order && redTable.indexOf(temp) >= 0) temp = GetBallNum(GetRandNumber(redCount) - redZero);
			redTable += '|' + temp;
		}

		blueTable = GetBallNum(GetRandNumber(blueCount) - blueZero);
		for (var i = 1; blueCount > 0 && i < blueLottery; i++) {
			var temp = GetBallNum(GetRandNumber(blueCount) - blueZero);
			while (!order && blueTable.indexOf(temp) >= 0) temp = GetBallNum(GetRandNumber(blueCount) - blueZero);
			blueTable += '|' + temp;
		}

		var redArray = redTable.split('|');
		var blueArray = blueTable.split('|');
		redArray.sort();
		blueArray.sort();
		bigArray.push(redArray);
		if (blueCount > 0) bigArray.push(blueArray);
	}

	return bigArray;
}
//清空所有选号去
function clear() {
	ClearSelect();
	eexw_clearRedSelect();
}
//-----------定胆机选-----------------------
function btn_2_RandManyClick_dd(n) {
	//胆码个数判断
	if (getUserSelectBall('r', 22, '').length < 1) {
		openAlert(decodeURI(EncodeUtf8("请选择至少选择一个胆码！")));
		return false;
	}
	if (getUserSelectBall('r', 22, '').length > 6) {
		openAlert(decodeURI(EncodeUtf8("您好，最多可选6个号码作为胆码！")));
		return false;
	}
	//获取注数和金额
	totalLotteryInvest += parseInt(n);
	var lotteryListSelect = $("#list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		//提取选中的胆码
		var redBallNumCodes = getUserSelectBall('r', 22, '');
		//调用算球的方法随机生成注码
		var finalBall = getRandBall('td_', redBallNumCodes, 5, 'r', 22, 'ball_num', 'ball_num_sh', 6, '');
		//拼接显示注码和传递给后台的注码
		var lottery = finalBall;
		var lotteryNumber = getEndCodes(finalBall + "") + ";";
		var lotteryView = lottery;
		var opt = new Option(lotteryView, lotteryNumber);
		var frontLot = lottery;
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);
		lotteryListSelect[0].options.add(opt);
		//号码蓝样式
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
		add_codes(lotteryView, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	var a = parseFloat(touzhu_balance - Number($("#current_money").html()));
	if (a < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(a.toFixed());
	}
}