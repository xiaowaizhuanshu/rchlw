//定胆机选
function btn_2_RandManyClick_dd(n) {
	//判断胆码的个数，并提示
	if (GetBallSelectedBallAll().length == 0) {
		openAlert(decodeURI(EncodeUtf8("您好，请至少选择一个胆码！")));
		return;

	}
	if (GetBallSelectedBall("0").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第一位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("1").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第二位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("2").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第三位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("3").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第四位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("4").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第五位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("5").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第六位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("6").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，第七位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if ($("#btn_qxc_Add").attr("isdisabled") == "false") {
		openAlert(decodeURI(EncodeUtf8("您好，您选择的胆码数可以组成一注，请删减！")));
		return;
	}

	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	//获取机选号码传入后台
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var lotteryNumber = "";
		var finaBall = getBallString();
		lotteryNumber = finaBall + ";";
		var lotteryView = "";
		var frontLot = finaBall + "";
		var opt = new Option(frontLot, lotteryNumber);
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);
		lotteryListSelect.options.add(opt);
		lotteryView = frontLot.replace(/\,/g, "|");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
		add_codes(lotteryView, lotteryNumber.replace(/\,/g, "-"));
	}
	//计算注数和投注金额
	totalLotteryInvest += parseInt(n);
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	$("#lab_Num").html(totalLotteryInvest);
	return true;
}
//获取用户每一位上的胆码数组
function GetBallSelectedBall(row) {
	var selectBallNum = new Array();
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiF(row, i);
		if (GetBallStateZhiF(obj)) selectBallNum.push(i);
	}
	return selectBallNum;
}
//获取用户选择胆码数组
function GetBallSelectedBallAll() {
	var selectBallNum = new Array();
	for (var j = 0; j < 7; j++) {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObjectZhiF(j, i);
			if (GetBallStateZhiF(obj)) selectBallNum.push(i);
		}
	}
	return selectBallNum;
}
//获取机选的号码串
function getBallString() {
	var selectedBall = new Array();
	for (var j = 0; j < 7; j++) {
		var getSelectBall = GetBallSelectedBall(j);
		selectedBall.push(getRandBall('td8_2_', getSelectBall, 1, j, 10, 'ball_num', '', '', '3D'));

	}
	return selectedBall;

}
//普通机选
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
	if (parseInt(n) == 7) {
		click += 7;
	} else {
		click++;
	}
	totalLotteryInvest += parseInt(n);
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	ClearAll(8, 0);
	ClearAll(8, 1);
	ClearAll(8, 2);
	ClearAll(8, 3);
	ClearAll(8, 4);
	ClearAll(8, 5);
	ClearAll(8, 6);

	var arr = rollJx(0, 9, 7, n); //minNum, col, row, lotteryCount   0, 9, 5, n
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var lotteryNumber = "";
		var arr1 = arr[i];
		lottery = arr1 + ',';

		sd1 = lottery;
		var controlRed = sd1.lastIndexOf(",");
		var red = sd1.substring(0, controlRed);
		lotteryNumber += red + ";";

		var lotteryView = lottery.substring(0, lottery.length - 1);
		var opt = new Option(lotteryView, lotteryNumber);
		var frontLot = lottery;
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);
		lotteryListSelect.options.add(opt);
		lotteryView = lotteryView.replace(/\,/g, "|");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
		add_codes(lotteryView, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	return true;
}

function ClearAll(jspIndex, tabIndex) {
	for (var i = 0; i < 10; i++) {
		var id = "td" + jspIndex + "_2_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_num';
		$("#qxc_zhushu").html(0);
		$("#qxc_money").html("0");
	}
}
function updateMultipleTotalMoney() {
	var zhuShu = document.getElementById("lab_Num").innerHTML;
	var qxc = parseInt(2 * zhuShu);
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(qxc * initMultiple);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
}
function rollJx(minNum, col, row, lotteryCount) {
	var oneOrZero = minNum == 0 ? 1 : 0;
	var bigArray = new Array();
	for (var j = 0; j < lotteryCount; j++) {
		var tempArr = new Array();
		for (var i = 0; i < row; i++) {
			tempArr.push(GetRandNumber(col) - oneOrZero);
		}
		bigArray.push(tempArr);
	}
	return bigArray;
}
//-------------------qxc_common.js--------------
function qxc_selectBall(sender) {
	var Selected = GetBallStateZhiF(sender);
	if (Selected) {
		qxc_setBallState(sender, false);
		CheckFullZhiF();
		return;
	}
	qxc_setBallState(sender, true);
	CheckFullZhiF();
}
function qxc_quickSelect(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(6, 7));
	var Type = str.substring(8, 9);

	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiF(row, i);
		qxc_setBallState(obj, false);
	}
	if (Type == "Q") {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObjectZhiF(row, i);
			qxc_setBallState(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 5; i < 10; i++) {
			var obj = GetBallObjectZhiF(row, i);
			qxc_setBallState(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 0; i < 5; i++) {
			var obj = GetBallObjectZhiF(row, i);
			qxc_setBallState(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 10; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			qxc_setBallState(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 0; i < 10; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			qxc_setBallState(obj, true);
		}
	}
	CheckFullZhiF();
}

function GetBallObjectZhiF(row, col) {
	var obj = document.getElementById("td8_2_" + row + "_" + col);
	return obj;
}

function GetBallSelectedNumZhiF(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiF(row, i);
		if (GetBallStateZhiF(obj)) Count++;
	}
	return Count;
}

function GetBallStateZhiF(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function qxc_setBallState(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}
function CheckFullZhiF() {
	var invest = GetLotteryInvestNumZhiF();
	var p = invest * 2;
	$("#qxc_zhushu").html(invest);
	$("#qxc_money").html(p.toFixed());
	if (invest < 1) document.getElementById("btn_qxc_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_qxc_Add").setAttribute('isdisabled', 'false');
}
function GetLotteryNumberZhiF() {
	var qxcCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball3;
	var ball4;
	for (var i = 0; i < 7; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiF(i, j);
			if (GetBallStateZhiF(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		qxcCode += temp + "-";
		ball3 = qxcCode.lastIndexOf("-");
		ball4 = qxcCode.substring(0, ball3);
	}
	qxcCode = ball4 + ";";
	return qxcCode;
}
function getFrontZiXuan(op) {
	var finalLottery;
	var LotteryNumber = "";
	var subBall;
	for (var i = 0; i < 7; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiF(i, j);
			if (GetBallStateZhiF(obj)) temp += obj.innerHTML.trim();
		}
		temp = temp.trim();
		if (i != 2 || i != 3) LotteryNumber += temp + op;
		else LotteryNumber += temp;

		subBall = LotteryNumber.lastIndexOf(op);
		finalLottery = LotteryNumber.substring(0, subBall);
	}
	return finalLottery;
}

function GetLotteryInvestNumZhiF() {
	var InvestNum = 1;
	for (var i = 0; i < 7; i++) InvestNum *= GetBallSelectedNumZhiF(i);
	return InvestNum;
}
function btn_qxc_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您选择的球不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if ((2 * invest) > 20000) {
		openAlert(decodeURI(EncodeUtf8("单注彩票不能超过两万元！请重新选择...")));
		return false;
	}
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	if (document.getElementById("btn_qxc_Add").getAttribute('isdisabled') == 'true') return;
	var lotteryView = getFrontZiXuan(',');
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiF();
	var wanfa;
	var lottery_View;
	if (invest == 1) {
		wanfa = "0";
		lottery_View = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('单式')) + ']' + getFrontZiXuan('|') + '</span><span class="jieguo1">  ' + decodeURI(EncodeUtf8('1注　　共2元')) + '</span>';
	} else {
		wanfa = "1";
		lottery_View = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('复式')) + ']' + getFrontZiXuan('|') + '</span><span class="jieguo1">  ' + invest + decodeURI(EncodeUtf8('注　　共')) + 2 * invest + decodeURI(EncodeUtf8('元')) + '</span>';
	}
	var view = getFrontZiXuan('|') + "|" + invest + decodeURI(EncodeUtf8('注　　共')) + 2 * invest + decodeURI(EncodeUtf8('元'));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanfa);
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect.options.add(opt);
	lotteryView = getFrontZiXuan('|');
	add_codes(lottery_View, lotteryNumber);

	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = document.getElementById("investField").innerHTML;
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	for (var i = 0; i < 7; i += 1) ClearAll(8, i);
	return true;
}