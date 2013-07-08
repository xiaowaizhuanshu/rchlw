//定胆机选
function ddjx_sd_Rand(n) {
	if (GetBallSelectedBall("0").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，百位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("1").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，十位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}
	if (GetBallSelectedBall("2").length > 1) {
		openAlert(decodeURI(EncodeUtf8("您好，个位胆码数量超出，每位最多只能选择一个胆码！")));
		return;
	}

	if ($("#btn_2_Add").attr("isdisabled") == "false") {
		openAlert(decodeURI(EncodeUtf8("您好，您选择的胆码数可以组成一注，请删减！")));
		return;
	}
	if (GetBallSelectedBall("0").length < 1 && GetBallSelectedBall("1").length < 1 && GetBallSelectedBall("2").length < 1) {
		openAlert(decodeURI(EncodeUtf8("您好，请选择一位号码做为胆码！")));
		return;
	}

	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	//获取机选号码传入后台
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var lotteryNumber = "00";
		var finaBall = getBallString();
		lotteryNumber = lotteryNumber + finaBall + "^";
		var lotteryView = "";
		var frontLot = finaBall + "";
		var opt = new Option(frontLot, lotteryNumber);
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "00");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);
		lotteryListSelect.options.add(opt);
		lotteryView = frontLot.replace(/\,/g, "|");
		lotteryView = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[直选单式]')) + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
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

//获取机选的号码串
function getBallString() {
	var selectedBall = new Array();
	for (var j = 0; j < 3; j++) {
		var getSelectBall = GetBallSelectedBall(j);
		selectedBall.push(getRandBall('td1_2_', getSelectBall, 1, j, 10, 'ball_num', '', '', '3D'));
	}
	return selectedBall;

}

//  福彩3D直选机选、组三机选、组六机选的方法
//  @param n 机选多少注
//  @return
function btn_2_RandManyClick(n) {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	totalLotteryInvest += parseInt(n); //总注数
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val()); //总金额
	$("#investField").html(totalMoney.toFixed()); //
	$("#current_money").html(totalMoney.toFixed());
	$("#lab_Num").html(totalLotteryInvest);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();

	var lotteryListSelect = $("#list_LotteryNumber");
	var lottery;
	var lotteryView;
	var sd1;
	var sd2;
	var sd3;

	//直选
	if ($("#sub_nav_1").is(":visible")) {
		var arr = rollJx(0, 9, 3, parseInt(n));
		ClearAll(1, 2);
		ClearAll(1, 0);
		ClearAll(1, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ',';

			sd1 = lottery;
			var controlRed = sd1.lastIndexOf(",");
			var red = sd1.substring(0, controlRed);
			lotteryNumber += "00" + red + "^";

			lotteryView = lottery.substring(0, lottery.length - 1);
			var lotteryView2 = lotteryView.replace(/\,/g, "|");

			lotteryView2 = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[直选单式]')) + lotteryView2 + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";

			var opt = new Option(lotteryView, lotteryNumber);

			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "00");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			add_codes(lotteryView2, lotteryNumber);
		}

		//组三
	} else if ($("#sub_nav_3").is(":visible")) {
		var i = 0;
		var j1, j2, j3;
		var lotteryNumber = "";
		ClearAll(2, 0);
		while (i < parseInt(n)) {
			var ccd = RandCode(3, 10);
			j1 = parseInt(ccd.substr(0, 1));
			j2 = parseInt(ccd.substr(1, 1));
			j3 = parseInt(ccd.substr(2, 1));
			if (Digital.Group(j1, j2, j3) != d3_Z3) continue;

			var code = j1 + "," + j2 + "," + j3;
			var arrZusan = code.split(",");
			var zu3 = arrZusan.sort();
			lotteryNumber = "01" + zu3 + "^";
			//lotteryView = zu3 + decodeURI(EncodeUtf8(' 组三单式' ));

			lotteryView = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[组三单式]')) + zu3 + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			var opt = new Option(lotteryView, lotteryNumber);
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "01");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			add_codes(lotteryView, lotteryNumber);

			i++;
		}

		//组六
	} else if ($("#sub_nav_2").is(":visible")) {
		ClearAll(3, 0);
		var i = 0;
		var j1, j2, j3;
		var lotteryNumber = "";
		while (i < parseInt(n)) {
			var ccd = RandCode(3, 10);
			j1 = parseInt(ccd.substr(0, 1));
			j2 = parseInt(ccd.substr(1, 1));
			j3 = parseInt(ccd.substr(2, 1));
			if (Digital.Group(j1, j2, j3) != d3_Z6) continue;

			var code = j1 + "," + j2 + "," + j3;
			var arrZusan = code.split(",");
			var zu6 = arrZusan.sort();
			lotteryNumber = "02" + zu6 + "^";
			//lotteryView =  zu6 +decodeURI(EncodeUtf8(' 组六单式 ' ));

			lotteryView = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[组六单式]')) + zu6 + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			var opt = new Option(lotteryView, lotteryNumber);
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "02");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			add_codes(lotteryView, lotteryNumber);

			i++;
		}
	}
}

///
// 清空所有的
// @param jspIndex
// @param tabIndex
// @return
// 
function ClearAll(jspIndex, tabIndex) {
	for (var i = 0; i < 10; i++) {
		var id = "td" + jspIndex + "_2_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_num';
		document.getElementById("x_zhu").innerHTML = "0";
		document.getElementById("x_yuan").innerHTML = "0";
		document.getElementById("z3z_zhu").innerHTML = "0";
		document.getElementById("z3z_yuan").innerHTML = "0";
		document.getElementById("z6z_zhu").innerHTML = "0";
		document.getElementById("z6z_yuan").innerHTML = "0";
		if ($("#3D_invert")) {
			$("#3D_invert").html(decodeURI(EncodeUtf8("0注， 0元。")));
		}
		//document.getElementById("lab_Zu3F_Selected").innerHTML = "0注，0元。";
		//document.getElementById("lab_Zu6F_Selected").innerHTML= "0注，0元。";
	}
}

function updateMultipleTotalMoney() {
	var zhuShu = $("#lab_Num").html();;
	var fc3d = parseInt(2 * zhuShu);
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(fc3d * initMultiple);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	if (parseInt(($("#touzhu_money").html()) - ($("#current_money").html())) < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(parseInt(($("#touzhu_money").html()) - ($("#current_money").html())));
	}
}
var playAllMethod = ['ZhiF', 'Zu3F', 'Zu6F', 'ZhiXuanHe', 'Zu3HeZhi', 'Zu6HeZhi'];
function clickPlayType0(v) {
	for (var i = 0; i < playAllMethod.length; i++) {
		$("#playTd" + playAllMethod[i]).css("display", "none");
	}
	$("#playTd" + v).css("display", "block");
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
//FC3D_ZiXuan.js 开始
function SelectBallZhiF(sender) {
	var Selected = GetBallStateZhiF(sender);
	if (Selected) {
		SetBallStateZhiF(sender, false);
		CheckFullZhiF();
		return;
	}
	SetBallStateZhiF(sender, true);
	CheckFullZhiF();
}
function QuickSelectZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(6, 7));
	var Type = str.substring(8, 9);

	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiF(row, i);
		SetBallStateZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 5; i < 10; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 0; i < 5; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 10; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 0; i < 10; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateZhiF(obj, true);
		}
	}
	CheckFullZhiF();
}

function GetBallObjectZhiF(row, col) {
	var obj = document.getElementById("td1_2_" + row + "_" + col);
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

function SetBallStateZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}
var p = 0;
function CheckFullZhiF() {
	var invest = GetLotteryInvestNumZhiF();
	p = invest * 2;
	//document.getElementById("3D_lab_2_Selected").innerHTML = invest + decodeURI(EncodeUtf8("注，" ))+ p.toFixed() +decodeURI(EncodeUtf8( "元。"));
	document.getElementById("x_zhu").innerHTML = invest + "";
	document.getElementById("x_yuan").innerHTML = p.toFixed();

	if ($("#3D_invert")) {
		$("#3D_invert").html(invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。")));
	}
	if (invest < 1) document.getElementById("btn_2_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_2_Add").setAttribute('isdisabled', 'false');
}
function GetLotteryNumberZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball3;
	var ball4;
	for (var i = 0; i < 3; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiF(i, j);
			if (GetBallStateZhiF(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		if (i != 2) LotteryNumber += temp + ",";
		else LotteryNumber += temp;
		ziXuanCode += temp + "~";
		ball3 = ziXuanCode.lastIndexOf("~");
		ball4 = ziXuanCode.substring(0, ball3);
	}
	if (ball4.length > 5) {
		ziXuanCode = "20" + ball4 + "^";
	} else {
		ziXuanCode = "00" + LotteryNumber + "^";
	}
	return ziXuanCode;
}
function getFrontZiXuan() {
	var LotteryNumber = "";
	for (var i = 0; i < 3; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiF(i, j);
			if (GetBallStateZhiF(obj)) temp += obj.innerHTML.trim() + ',';
		}
		temp = temp.substring(0, temp.length - 1).trim();
		//alert("i is "+i+temp);
		if (i != 2)
		//LotteryNumber += temp+",";
		LotteryNumber += temp + "|";
		else LotteryNumber += temp;
	}
	LotteryNumber.substring(0, LotteryNumber.length - 1);
	return LotteryNumber.trim();
}

function GetLotteryInvestNumZhiF() {
	var InvestNum = 1;
	for (var i = 0; i < 3; i++) InvestNum *= GetBallSelectedNumZhiF(i);
	return InvestNum;
}
function btn_2_AddClickZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的球不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_2_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiF();
	// lotteryView = decodeURI(EncodeUtf8('[直选复式 ] ')) + lotteryView + ' [' + invest + decodeURI(EncodeUtf8('注，共')) + 2 * invest + decodeURI(EncodeUtf8('元]'));

	//var lotteryView2 = lotteryView.replace(/\,/g,"|");

	var lotteryView1 = lotteryView;
	var wanFa;
	if (invest == 1) {
		wanFa = '00';
		lotteryView2 = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[直选单式]')) + lotteryView1 + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		wanFa = '20';
		lotteryView2 = "<span class='jieguo0'>" + decodeURI(EncodeUtf8("[直选复式]")) + lotteryView1 + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}

	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanFa);
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);

	add_codes(lotteryView2, lotteryNumber);

	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	totalLotteryInvest += invest;

	$("#lab_Num").html(totalLotteryInvest);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	for (var i = 0; i < 3; i += 1) ClearAll(1, i);
}

//FC3D_ZiXuan.js 结束

//FC3D_ZiXuan_HeZhi.js 开始

function SelectBallZiHe(sender) {
	var Selected = GetBallState_ziXuanHe(sender);
	if (Selected) {
		SetBallState_ziXuanHe(sender, false);
		CheckFull_ziXuanHe();
		return;
	}
	SetBallState_ziXuanHe(sender, true);
	CheckFull_ziXuanHe();
}

function GetBallObject(Num) {
	var obj = document.getElementById("td_2_" + GetBallNum(Num));
	return obj;
}

function GetBallNum(Num) {
	var BallNum = "" + Num;
	if (BallNum.length == 1) BallNum = "0" + BallNum;

	return BallNum;
}

function GetBallSelectedNum_ziHe() {
	var Count = 0;
	for (var i = 0; i <= 27; i++) {
		var obj = GetBallObject(i);
		if (GetBallState_ziXuanHe(obj)) Count++;
	}
	return Count;
}

function GetBallState_ziXuanHe(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_ziXuanHe(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}
var p = 0;
function CheckFull_ziXuanHe() {
	var invest = GetLotteryInvestNum_ziHe();
	p = invest * 2;
	document.getElementById("y_zhu").innerHTML = invest + "";
	document.getElementById("y_yuan").innerHTML = p.toFixed();
	if (GetBallSelectedNum_ziHe() < 1) document.getElementById("btn_addEvent").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_addEvent").setAttribute('isdisabled', 'false');
}

function GetLotteryNumber_heZhi() {
	var LotteryNumber = "";
	for (var i = 0; i <= 27; i++) {
		var obj = GetBallObject(i);
		if (GetBallState_ziXuanHe(obj)) {
			LotteryNumber += ("10" + i + "^");
		}
	}
	return LotteryNumber;
}
function GetFrontZiXuanHe() {
	var LotteryNumber = "";
	for (var i = 0; i <= 27; i++) {
		var obj = GetBallObject(i);
		if (GetBallState_ziXuanHe(obj)) LotteryNumber += i + ",";
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim().rtrimWithReturn();
}

function GetLotteryInvestNum_ziHe() {
	var InvestNum = 0;
	for (var i = 0; i <= 27; i++) {
		var obj = GetBallObject(i);
		if (GetBallState_ziXuanHe(obj)) InvestNum += GetNumbersInversNum_ziHe(i);
	}
	return InvestNum;
}

function GetNumbersInversNum_ziHe(BallNum) {
	if (BallNum == 0) return 1;
	if (BallNum == 1) return 3;
	if (BallNum == 2) return 6;
	if (BallNum == 3) return 10;
	if (BallNum == 4) return 15;
	if (BallNum == 5) return 21;
	if (BallNum == 6) return 28;
	if (BallNum == 7) return 36;
	if (BallNum == 8) return 45;
	if (BallNum == 9) return 55;
	if (BallNum == 10) return 63;
	if (BallNum == 11) return 69;
	if (BallNum == 12) return 73;
	if (BallNum == 13) return 75;
	if (BallNum == 14) return 75;
	if (BallNum == 15) return 73;
	if (BallNum == 16) return 69;
	if (BallNum == 17) return 63;
	if (BallNum == 18) return 55;
	if (BallNum == 19) return 45;
	if (BallNum == 20) return 36;
	if (BallNum == 21) return 28;
	if (BallNum == 22) return 21;
	if (BallNum == 23) return 15;
	if (BallNum == 24) return 10;
	if (BallNum == 25) return 6;
	if (BallNum == 26) return 3;
	if (BallNum == 27) return 1;
	return 0;
}

//清空所和值的球
function ClearZiHeSelect() {
	for (var i = 0; i <= 27; i++) {
		var obj = GetBallObject(i);
		SetBallState_ziXuanHe(obj, false);
	}
	// document.getElementById("ziHeSelected").innerHTML=decodeURI(EncodeUtf8("0注， 0元。"));
	document.getElementById("y_zhu").innerHTML = "0";
	document.getElementById("y_yuan").innerHTML = "0";
}

function ziHe_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	if ($("#btn_addEvent").attr('isdisabled') == 'true') return false;
	var invest = GetLotteryInvestNum_ziHe();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请至少选择一注。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryView = GetFrontZiXuanHe();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumber_heZhi();
	var lotteryListSelect = $("#list_LotteryNumber");
	// lotteryView = lotteryView + decodeURI(EncodeUtf8(' 直选和值'));
	var view = decodeURI(EncodeUtf8("直选和值")) + "|" + lotteryView + "|" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元"));
	lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("直选和值")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	//alert(lotteryView);
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "10");
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNumber);
	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);

	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	ClearZiHeSelect();
	return true;
}

//FC3D_ZiXuan_HeZhi.js 结束

//FC3D_Zu3F.js 开始
function SelectBallZu3F(sender) {
	var Selected = GetBallStateZu3F(sender);
	if (Selected) {
		SetBallStateZu3F(sender, false);
		CheckFullZu3F();
		return;
	}
	SetBallStateZu3F(sender, true);
	CheckFullZu3F();
}
function GetBallObjectZu3F(row, col) {
	var obj = document.getElementById("td2_2_" + row + "_" + col);
	return obj;
}

function GetBallSelectedNumZu3F(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZu3F(row, i);
		if (GetBallStateZu3F(obj)) Count++;
	}
	return Count;
}

function GetBallStateZu3F(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallStateZu3F(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFullZu3F() {
	var Num = GetBallSelectedNumZu3F(0);
	var invest = GetLotteryInvestNumZu3F();
	var p = invest * 2;
	//document.getElementById("lab_Zu3F_Selected").innerHTML = invest +decodeURI(EncodeUtf8( "注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。"));
	document.getElementById("z3z_zhu").innerHTML = invest + "";
	document.getElementById("z3z_yuan").innerHTML = p.toFixed();

	if (invest < 2) document.getElementById("btn_Zu3F_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Zu3F_Add").setAttribute('isdisabled', 'false');
}

function GetLotteryNumberZu3F() {
	var zuSan_code = "";
	var LotteryNumber = "";
	var lot;
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZu3F(i, j);
			if (GetBallStateZu3F(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	zuSan_code += "31" + LotteryNumber + "^";

	return zuSan_code;
}
//拼接注码
function getFrontZuSanFu() {
	var LotteryNumber = "";
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZu3F(i, j);
			if (GetBallStateZu3F(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim();
}

function GetLotteryInvestNumZu3F() {
	var Count = GetBallSelectedNumZu3F(0);
	if (Count < 2) return 0;
	if (Count == 2) return 2;

	var InvestNum = 1;
	for (var i = 3; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 2); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum * 2;
}

function btn_2_AddClickZu3F() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZu3F();
	if (invest < 2) {
		openAlert(decodeURI(EncodeUtf8("您选择的不是一注复式票！\n应至少选择2个号码。请检查您选择的号码。")));
		return false;
	}
	if ($('#btn_Zu3F_Add').attr('isdisabled') == 'true') return;
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryNumber = GetLotteryNumberZu3F();
	var lotteryView = getFrontZuSanFu();
	var frontLot = lotteryView;
	//lotteryView =  lotteryView + decodeURI(EncodeUtf8(' 组三复式'));
	lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("组三复式")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";

	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "31");
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);

	add_codes(lotteryView, lotteryNumber);

	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);

	$("#investField").html(totalMoney.toFixed());
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	$('#lab_Zu3F_Selected').html(0 + decodeURI(EncodeUtf8('注，')) + 0 + decodeURI(EncodeUtf8('元。')));
	ClearAll(2, 0);
	return true;
}

//FC3D_Zu3F.js 结束

//FC3D_Zu3_hezhi.js 开始

function zuXuanHeSelectBall(sender) {
	var Selected = GetBallState_zuXuanHe(sender);
	if (Selected) {
		SetBallState_zuXuanHe(sender, false);
		CheckFull_zuHe();
		return;
	}
	SetBallState_zuXuanHe(sender, true);
	CheckFull_zuHe();
}

function GetBallObject_zu3He(Num) {
	var obj = document.getElementById("td4_2_" + GetBallNum_zuHe(Num));
	return obj;
}

function GetBallNum_zuHe(Num) {
	var BallNum = "" + Num;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}

function GetBallSelectedNum_zuXuanHe() {
	var Count = 0;
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		if (GetBallState_zuXuanHe(obj)) Count++;
	}
	return Count;
}

function GetBallState_zuXuanHe(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_zuXuanHe(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFull_zuHe() {
	var invest = GetLotteryInvestNum_zuXuanHe();
	var p = invest * 2;
	//document.getElementById("labZu3He").innerHTML = invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() +decodeURI(EncodeUtf8( "元。"));
	document.getElementById("z3h_zhu").innerHTML = invest + "";
	document.getElementById("z3h_yuan").innerHTML = p.toFixed();
	if (GetBallSelectedNum_zuXuanHe() < 1) document.getElementById("btnZu3He").setAttribute('isdisabled', 'true');
	else document.getElementById("btnZu3He").setAttribute('isdisabled', 'false');
}

function GetLotteryNumber() {
	var zu3HeZhiCode = "";
	var LotteryNumber = "";
	var lot;
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		if (GetBallState_zuXuanHe(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	zu3HeZhiCode += "11" + LotteryNumber + "^";
	return zu3HeZhiCode;
}

//拼接和值注码
function getZ3HZCode() {
	var zu3HeZhiCode = "";
	var LotteryNumber = GetLotteryNumber();
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		if (GetBallState_zuXuanHe(obj)) {
			zu3HeZhiCode += "11" + Number(i + 1) + "^";
		}
	}
	return zu3HeZhiCode;
}

function GetFrontZu3He() {
	var LotteryNumber = "";
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		if (GetBallState_zuXuanHe(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim().rtrimWithReturn();
}

function GetLotteryInvestNum_zuXuanHe() {
	var InvestNum = 0;
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		if (GetBallState_zuXuanHe(obj)) InvestNum += GetNumbersInversNum_zuHe(parseInt(obj.innerHTML.trim(), 10));
	}
	return InvestNum;
}
function GetNumbersInversNum_zuHe(BallNum) {
	if (BallNum == 1) return 1;
	if (BallNum == 2) return 2;
	if (BallNum == 3) return 1;
	if (BallNum == 4) return 3;
	if (BallNum == 5) return 3;
	if (BallNum == 6) return 3;
	if (BallNum == 7) return 4;
	if (BallNum == 8) return 5;
	if (BallNum == 9) return 4;
	if (BallNum == 10) return 5;
	if (BallNum == 11) return 5;
	if (BallNum == 12) return 4;
	if (BallNum == 13) return 5;
	if (BallNum == 14) return 5;
	if (BallNum == 15) return 4;
	if (BallNum == 16) return 5;
	if (BallNum == 17) return 5;
	if (BallNum == 18) return 4;
	if (BallNum == 19) return 5;
	if (BallNum == 20) return 4;
	if (BallNum == 21) return 3;
	if (BallNum == 22) return 3;
	if (BallNum == 23) return 3;
	if (BallNum == 24) return 1;
	if (BallNum == 25) return 2;
	if (BallNum == 26) return 1;
	return 0;
}

function ClearZu3Select() {
	for (var i = 0; i <= 25; i++) {
		var obj = GetBallObject_zu3He(i);
		SetBallState_zuXuanHe(obj, false);
	}
	//document.getElementById("labZu3He").innerHTML=decodeURI(EncodeUtf8("0注， 0元。"));
	document.getElementById("z3h_zhu").innerHTML = "0";
	document.getElementById("z3h_yuan").innerHTML = "0";
}

function btnZu3HeClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	if ($("#btnZu3He").attr('isdisabled') == 'true') return false;
	var invest = GetLotteryInvestNum_zuXuanHe();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请至少选择一注")));
		return false;
	}
	var lotteryView = GetFrontZu3He();
	var frontLot = lotteryView;
	//var lotteryNumber=GetLotteryNumber();
	var lotteryNumber = getZ3HZCode();
	var lotteryListSelect = $("#list_LotteryNumber");
	//lotteryView = lotteryView +  decodeURI(EncodeUtf8(' 组三和值'));
	var view = decodeURI(EncodeUtf8("组三和值")) + "|" + lotteryView + "|" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元"));
	lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("组三和值")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "11");
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNumber);
	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney);
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	ClearZu3Select();
	return true;
}

//FC3D_Zu3_hezhi.js 结束

//FC3D_Zu6F.js 开始

function SelectBallZu6F(sender) {
	var Selected = GetBallStateZu6F(sender);
	if (Selected) {
		SetBallStateZu6F(sender, false);
		CheckFullZu6F();
		return;
	}

	SetBallStateZu6F(sender, true);
	CheckFullZu6F();
}

function GetBallObjectZu6F(row, col) {
	var obj = document.getElementById("td3_2_" + row + "_" + col);
	return obj;
}
function GetBallSelectedNumZu6F(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZu6F(row, i);
		if (GetBallStateZu6F(obj)) Count++;
	}
	return Count;
}

function GetBallStateZu6F(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}
function SetBallStateZu6F(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFullZu6F() {
	var invest = GetLotteryInvestNumZu6F();
	var p = invest * 2;
	//document.getElementById("lab_Zu6F_Selected").innerHTML = invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。"));
	document.getElementById("z6z_zhu").innerHTML = invest + "";
	document.getElementById("z6z_yuan").innerHTML = p.toFixed();
	if (invest < 1) document.getElementById("btn_Zu6F_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Zu6F_Add").setAttribute('isdisabled', 'false');
}

function GetLotteryNumberZu6F() {
	var zuLiuFusi_code = "";
	var lot;
	var LotteryNumber = "";
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZu6F(i, j);
			if (GetBallStateZu6F(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	if (LotteryNumber.length > 5) {
		zuLiuFusi_code += "32" + LotteryNumber + "^";
	} else {
		zuLiuFusi_code += "02" + LotteryNumber + "^";
	}
	return zuLiuFusi_code;
}

function getFrontZuLiuLots() {
	var LotteryNumber = "";
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZu6F(i, j);
			if (GetBallStateZu6F(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim();
}

function GetLotteryInvestNumZu6F() {
	var Count = GetBallSelectedNumZu6F(0);
	if (Count < 3) return 0;
	if (Count == 3) return 1;

	var InvestNum = 1;
	for (var i = 4; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 3); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
function btn_2_AddClickZu6F() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZu6F();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请至少选择3个号码。请检查您选择的号码。")));
		return false;
	}
	if (GetBallSelectedNumZu6F("0") > 9) {
		openAlert(decodeURI(EncodeUtf8("投注提示：组六包号最多能选择9个号码！")));
		return false;
	}
	if ($("#btn_Zu6F_Add").attr('isdisabled') == 'true') return;

	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryNumber = GetLotteryNumberZu6F();
	var lotteryView = getFrontZuLiuLots();
	var frontLot = lotteryView;
	// lotteryView =lotteryView + decodeURI(EncodeUtf8(' 组六复式' ));

	var wanFa = lotteryNumber.substring(0, 2);
	if (wanFa == '02') {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("组六单式")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	} else {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("组六复式")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";

	}
	//lotteryView ="<span class='jieguo0'>["+decodeURI(EncodeUtf8("组六复式"))+"]"+lotteryView+"</span><span class='jieguo1'>"+invest+decodeURI(EncodeUtf8("注　　共"))+2 * invest+decodeURI(EncodeUtf8("元"))+"</span>";

	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanFa);
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);

	add_codes(lotteryView, lotteryNumber);

	totalMoney += 2 * invest;
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	$('#lab_Zu6F_Selected').html(0 + decodeURI(EncodeUtf8('注，')) + 0 + decodeURI(EncodeUtf8('元。')));
	ClearAll(3, 0);
	return true;
}

//FC3D_Zu6F.js 结束

//FC3D_Zu6_hezhi.js 开始

function zuLiuHeSelectBall(sender) {
	var Selected = GetBallState_zu6He(sender);
	if (Selected) {
		SetBallState_zu6He(sender, false);
		CheckFull_zu6();
		return;
	}
	SetBallState_zu6He(sender, true);
	CheckFull_zu6();
}

function GetBallObject_zu6He(Num) {
	var obj = document.getElementById("td5_2_" + GetBallNum_zu6(Num));
	return obj;
}

function GetBallNum_zu6(Num) {
	var BallNum = "" + Num;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}

function GetBallSelectedNum_zu6() {
	var Count = 0;
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		if (GetBallState_zu6He(obj)) Count++;
	}
	return Count;
}

function GetBallState_zu6He(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_zu6He(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFull_zu6() {
	var invest = GetLotteryInvestNum_zu6();
	var p = invest * 2;
	//document.getElementById("zu6Select").innerHTML = invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。"));
	document.getElementById("z6h_zhu").innerHTML = invest + "";
	document.getElementById("z6h_yuan").innerHTML = p.toFixed();
	if (GetBallSelectedNum_zu6() < 1) document.getElementById("btnZu6").setAttribute('isdisabled', 'true');
	else document.getElementById("btnZu6").setAttribute('isdisabled', 'false');
}

function GetZu6LotteryNumber() {
	var zu6HeCode = "";
	var lot;
	var LotteryNumber = "";
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		if (GetBallState_zu6He(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	zu6HeCode += "12" + LotteryNumber + "^";
	return zu6HeCode;
}

//拼接和值注码
function getZ6HZCode() {
	var zu6HeZhiCode = "";
	var LotteryNumber = GetZu6LotteryNumber();
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		if (GetBallState_zu6He(obj)) {
			zu6HeZhiCode += "12" + i + "^";
		}
	}
	return zu6HeZhiCode;
}

function GetFrontZu6He() {
	var LotteryNumber = "";
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		if (GetBallState_zu6He(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim().rtrimWithReturn();
}

function GetLotteryInvestNum_zu6() {
	var InvestNum = 0;
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		if (GetBallState_zu6He(obj)) InvestNum += GetNumbersInversNum_zu6(parseInt(obj.innerHTML.trim(), 10));
	}
	return InvestNum;
}
function GetNumbersInversNum_zu6(BallNum) {
	if (BallNum == 3) return 1;
	if (BallNum == 4) return 1;
	if (BallNum == 5) return 2;
	if (BallNum == 6) return 3;
	if (BallNum == 7) return 4;
	if (BallNum == 8) return 5;
	if (BallNum == 9) return 7;
	if (BallNum == 10) return 8;
	if (BallNum == 11) return 9;
	if (BallNum == 12) return 10;
	if (BallNum == 13) return 10;
	if (BallNum == 14) return 10;
	if (BallNum == 15) return 10;
	if (BallNum == 16) return 9;
	if (BallNum == 17) return 8;
	if (BallNum == 18) return 7;
	if (BallNum == 19) return 5;
	if (BallNum == 20) return 4;
	if (BallNum == 21) return 3;
	if (BallNum == 22) return 2;
	if (BallNum == 23) return 1;
	if (BallNum == 24) return 1;
	return 0;
}

function ClearSelect() {
	for (var i = 3; i <= 24; i++) {
		var obj = GetBallObject_zu6He(i);
		SetBallState_zu6He(obj, false);
	}
	//document.getElementById("zu6Select").innerHTML=decodeURI(EncodeUtf8("0注，0元。"));
	document.getElementById("z6h_zhu").innerHTML = "0";
	document.getElementById("z6h_yuan").innerHTML = "0";
}

function btnZu6Click() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	if ($("#btnZu6").attr('isdisabled') == 'true') return false;
	var invest = GetLotteryInvestNum_zu6();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请至少选择一注")));
		return false;
	}
	var lotteryView = GetFrontZu6He();
	var frontLot = lotteryView;
	// var lotteryNumber=GetZu6LotteryNumber();
	var lotteryNumber = getZ6HZCode();
	var lotteryListSelect = $("#list_LotteryNumber");
	//lotteryView = lotteryView + decodeURI(EncodeUtf8(' 组六和值')) ;
	var view = decodeURI(EncodeUtf8("组六和值")) + "|" + lotteryView + "|" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元"));
	lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("组六和值")) + "]" + lotteryView + "</span><span class='jieguo1'>&nbsp;&nbsp;" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', lotteryNumber.substring(0, 2));
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNumber);
	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);

	$("#investField").html(totalMoney.toFixed());
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	ClearSelect();
	return true;
}

//FC3D_Zu3_hezhi.js 结束
//清空所有选好区
function clear() {
	ClearAll(1, 2);
	ClearAll(1, 0);
	ClearAll(1, 1);
	ClearAll(2, 0);
	ClearAll(3, 0);
	ClearZiHeSelect();
}