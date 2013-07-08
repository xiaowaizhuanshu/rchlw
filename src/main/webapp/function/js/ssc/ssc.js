//点击全选按钮时设置球的颜色和状态
function setBallColor(sender, SelectState, Maxcount) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		var count = 0;
		if ($("#sub_nav_3").is(":visible")) {
			for (var i = 0; i < 2; i++) {
				count += GetBallSelectedNum_rxzf(i);
			}
		}
		if ($("#sub_nav_6").is(":visible")) {
			for (var i = 0; i < 3; i++) {
				count += GetBallSelectedNumZhiFSX(i);
			}
		}
		if ($("#sub_nav_7").is(":visible") || $("#sub_nav_8").is(":visible")) {
			for (var i = 0; i < 5; i++) {
				count += GetBallSelectedNumZhiFWX(i);
			}
		}

		if (count > Maxcount) {
			sender.className = 'ball_num';
			sender.setAttribute('isselected', 'false');
		} else {
			sender.className = 'ball_num_r';
			sender.setAttribute('isselected', 'true');
		}

	}

}

//通过radio的选择，显示静态文字
function getRadioID(n, m, k, h) {
	var number1 = $("#" + n).attr("checked");
	var number2 = $("#" + m).attr("checked");
	if (number2) {
		$("#" + k).css('display', 'block');
		$("#" + h).css('display', 'none');
	} else if (number1) {
		$("#" + h).css('display', 'block');
		$("#" + k).css('display', 'none');
	}
	for (var i = 0; i < 5; i += 1) {
		if ($("#sub_nav_7").is(":visible")) {
			ClearAll("wt", i);
		} else {
			ClearAll("wttx", i);
		}
	}
}

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
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();

	//五星
	if ($("#sub_nav_7").is(":visible") || $("#sub_nav_8").is(":visible")) {
		var arr = rollJx(0, 10, 5, n); //minNum, col, row, lotteryCount   0, 9, 7, n
		var lotteryListSelect = document.getElementById("list_LotteryNumber");
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ',';
			sd1 = lottery;
			var controlRed = sd1.lastIndexOf(",");
			var red = sd1.substring(0, controlRed);
			lotteryNumber += red + ";";
			var wanfa = "";
			if ($("#zhixuan_tishi2").is(":visible")) {
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星通选复式')) + "]" + lottery.substring(0, lottery.length - 1) + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
				lotteryNumber = "5T" + lotteryNumber;
				wanfa = "5T0";
			} else if ($("#zhixuan_tishi1").is(":visible")) {
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星直选复式')) + "]" + lottery.substring(0, lottery.length - 1) + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";

				lotteryNumber = "5D" + lotteryNumber;
				wanfa = "5D0";
			}
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', wanfa);
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt);
			add_codes(lotteryView, lotteryNumber);
			$("#lab_Num").html(totalLotteryInvest);
		}
	}

	//三星
	if ($("#sub_nav_6").is(":visible")) {
		var arr = rollJx(0, 10, 3, n); //minNum, col, row, lotteryCount   0, 9, 7, n
		var lotteryListSelect = document.getElementById("list_LotteryNumber");
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ',';
			sd1 = lottery;
			var controlRed = sd1.lastIndexOf(",");
			var red = sd1.substring(0, controlRed);
			lotteryNumber += red + ";";
			lotteryView = '-,-,' + lottery.substring(0, lottery.length - 1);
			lotteryNumber = "3D" + lotteryNumber;
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "3D0");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt);
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('三星直选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber);
			$("#lab_Num").html(totalLotteryInvest);
		}
	}

	//二星
	if ($("#sub_nav_3").is(":visible") || $("#sub_nav_4").is(":visible") || $("#sub_nav_5").is(":visible")) {

		if ($("#sub_nav_3").is(":visible")) {
			//二星直选复式
			var arr = rollJx(0, 9, 2, n); //minNum, col, row, lotteryCount   0, 9, 7, n
			var lotteryListSelect = document.getElementById("list_LotteryNumber");
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ',';
				sd1 = lottery;
				var controlRed = sd1.lastIndexOf(",");
				var red = sd1.substring(0, controlRed);
				lotteryNumber += red + ";";
				lotteryView = '-,-,-,' + lottery.substring(0, lottery.length - 1);
				lotteryNumber = "2D" + lotteryNumber;
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "2D0");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect.options.add(opt);
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星直选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber);
				$("#lab_Num").html(totalLotteryInvest);
			}
		}

		if ($("#sub_nav_4").is(":visible")) {
			//二星组选复式
			var lotteryListSelect = document.getElementById("list_LotteryNumber");
			for (var i = 0; i < parseInt(n); i++) {

				//获取1-9共10个数
				var arrCodes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
				//调用生成在数组中生成不同数字的方法
				var lottery = getSelectedBalls(arrCodes, 2);
				var lotteryNumber = "F2" + lottery + ";";

				lotteryView = lottery;
				var opt = new Option(lotteryView, lotteryNumber);
				opt.setAttribute('allLot', lottery);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "F20");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect.options.add(opt);
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选复式')) + "]" + lottery + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber);
				$("#lab_Num").html(totalLotteryInvest);

			}
		}

	}

	//一星
	if ($("#sub_nav_2").is(":visible")) {
		var arr = rollJx(0, 10, 1, n); //minNum, col, row, lotteryCount   0, 9, 7, n
		var lotteryListSelect = document.getElementById("list_LotteryNumber");
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ',';
			sd1 = lottery;
			var controlRed = sd1.lastIndexOf(",");
			var red = sd1.substring(0, controlRed);
			lotteryNumber += "1D" + red + ";";
			lotteryView = '-,-,-,-,' + lottery.substring(0, lottery.length - 1);

			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "1D0");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt);
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('一星')) + "]" + lotteryView + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber);
			$("#lab_Num").html(totalLotteryInvest);
		}
	}

	//大小单双
	if ($("#sub_nav_1").is(":visible")) {
		var arr = ['大', '小', '单', '双'];
		var n = $("#jixuan_Randdxds").val();
		var lotteryListSelect = document.getElementById("list_LotteryNumber");

		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var lottery = '';
			var numsds = new Array(2);
			//循环出2位数字
			for (var j = 0; j < 2; j++) {
				var arr1 = arr[i];
				var s1 = Math.round(Math.random() * (arr.length - 1));
				lottery = lottery + arr[s1] + ',';
				sd1 = lottery;
				var controlRed = sd1.lastIndexOf(",");
				var red = sd1.substring(0, controlRed);
				if (s1 == '0') {
					numsds[j] = 2;
				}
				if (s1 == '1') {
					numsds[j] = 1;
				}
				if (s1 == '2') {
					numsds[j] = 5;
				}
				if (s1 == '3') {
					numsds[j] = 4;
				}

			}
			//将机选出来的2位数分别对应上汉字
			for (var k = 0; k < numsds.length; k++) {
				lotteryNumber += numsds[k] + ',';
			}
			lotteryNumber = lotteryNumber.substring(0, lotteryNumber.length - 1);
			lotteryNumber = 'DD' + lotteryNumber;
			lotteryNumber += ';';
			lotteryView = lottery.substring(0, lottery.length - 1);

			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "DD");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect.options.add(opt);
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('大小单双')) + "]" + lotteryView + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber);
			$("#lab_Num").html(totalLotteryInvest);
		}
	}

	return true;
}

//二星组选和值
function btn_2_RandManyClick_rxzxh(n) {
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

	// 调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	var arr = rollJx1(0, 9, 1, n);
	ClearSelect_rxzxh();
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var lotteryNumber = "";
		var arr1 = arr[i];
		lottery = arr1 + ',';
		sd1 = lottery;
		var controlRed = sd1.lastIndexOf(",");
		var red = sd1.substring(0, controlRed);
		var ret = GetNumbersInversNum_rxzxhz(red);
		lotteryView = lottery.substring(0, lottery.length - 1);
		lotteryNumber = "S2" + red + ";";
		var opt = new Option(lotteryView, lotteryNumber);
		var frontLot = lottery;
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "S2");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2 * parseInt(ret));
		opt.setAttribute('delMoney', 2 * parseInt(ret));
		totalLotteryInvest += parseInt(ret);
		totalMoney += (2 * parseInt(ret));
		lotteryListSelect.options.add(opt);
		frontLot = "S2" + arr1 + ";";
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选和值')) + "]" + lotteryView + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　共2元")) + "</span>";
		add_codes(lotteryView, frontLot);
		// totalLotteryInvest+= ret;
		// alert(totalLotteryInvest);
		// totalMoney+= ret*2*Number($("#tb_Multiple").val());
		$("#lab_Num").html(totalLotteryInvest);
		// $("#investField").html(totalMoney.toFixed());
		// $("#current_money").html(totalMoney.toFixed());
	}
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	return true;
}

function GetNumbersInversNum_rxzxhz(BallNum) {
	if (BallNum == 0) return 1;
	if (BallNum == 1) return 1;
	if (BallNum == 2) return 2;
	if (BallNum == 3) return 2;
	if (BallNum == 4) return 3;
	if (BallNum == 5) return 3;
	if (BallNum == 6) return 4;
	if (BallNum == 7) return 4;
	if (BallNum == 8) return 5;
	if (BallNum == 9) return 5;
	if (BallNum == 10) return 5;
	if (BallNum == 11) return 4;
	if (BallNum == 12) return 4;
	if (BallNum == 13) return 3;
	if (BallNum == 14) return 3;
	if (BallNum == 15) return 2;
	if (BallNum == 16) return 2;
	if (BallNum == 17) return 1;
	if (BallNum == 18) return 1;
	return 0;
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
	}
	$("#ssc_rxzf_zhu").text("0");
	$("#ssc_rxzf_yuan").text("0");
	$("#ssc_rxzuf_zhu").text("0");
	$("#ssc_rxzuf_yuan").text("0");
	$("#ssc_sx_zhu").text("0");
	$("#ssc_sx_yuan").text("0");
	$("#ssc_wx_zhu").text("0");
	$("#ssc_wx_yuan").text("0");
	$("#ssc_wxtx_zhu").text("0");
	$("#ssc_wxtx_yuan").text("0");
}
function updateMultipleTotalMoney() {
	var zhuShu = document.getElementById("lab_Num").innerHTML;
	var qxc = parseInt(2 * zhuShu);
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(qxc * initMultiple);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
}
function rollJx1(minNum, col, row, lotteryCount) {
	var oneOrZero = minNum == 0 ? 1 : 0;
	var bigArray = new Array();
	for (var j = 0; j < lotteryCount; j++) {
		var zhuma = GetRandNumber(col) - oneOrZero;

		var str = "";
		var tempArr = new Array();
		for (var i = 0; i < row; i++) {

			if (str.indexOf("#") > -1) {
				var codes = str.split("#");
				for (var k = 0; k < codes.length; k++) {
					if (parseInt(codes[k], 10) == parseInt(zhuma, 10)) {
						zhuma = ((parseInt(zhuma, 10) + 1) > 9 ? 0 : (parseInt(zhuma, 10) + 1)) + "";
						continue;
					}
				}
			}
			str += zhuma + "#";
			tempArr.push(zhuma);
		}
		bigArray.push(tempArr);
	}
	return bigArray;
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
/// /////////////大小单双(ssc_dxds.js)//////begin///////////////
function BallZhiFDXDS(sender, i) {
	var Selected = GetBallStateZhiFDXDS(sender);
	if (Selected) {
		SetBallStateZhiFDXDS(sender, false, i);
		CheckFullZhiFDXDS();
		return;
	}
	SetBallStateZhiFDXDS(sender, true, i);
	CheckFullZhiFDXDS();
}

function GetBallObjectZhiFDXDS(row, col) {
	var obj = document.getElementById("tddxds_2_" + row + "_" + col);
	return obj;
}
//取球
function GetBallSelectedNumZhiFDXDS(row) {
	var Count = 0;
	var balls = new Array();
	for (var i = 0; i < 4; i++) {
		var obj = GetBallObjectZhiFDXDS(row, i);
		if (GetBallStateZhiFDXDS(obj)) {
			Count++;
			if (Count > 1) {
				openAlert(decodeURI(EncodeUtf8("大小单双每位只能选择1个号码！")));

				//alert(" 大小单双每位只能选择1个号码！");
				obj.className = 'ball_numssc2';
				obj.setAttribute('isselected', 'false');
				Count--;
			}
		}
	}
	return Count;
}

function GetBallStateZhiFDXDS(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}
function SetBallStateZhiFDXDS(sender, SelectState, i) {
	if (!SelectState) {
		sender.className = 'ball_numssc2';
		sender.setAttribute('isselected', 'false');
	} else {

		var count = 0;
		count += GetBallSelectedNumZhiFDXDS(i);
		if (count > 0) {
			openAlert(decodeURI(EncodeUtf8("大小单双每位只能选择1个号码！")));
			sender.className = 'ball_numssc2';
			sender.setAttribute('isselected', 'false');
		} else {
			sender.className = 'ball_numssc2_r';
			sender.setAttribute('isselected', 'true');
		}
	}
}
var p = 0;
function CheckFullZhiFDXDS() {
	var invest = GetLotteryInvestNumZhiFDXDS();
	p = invest * 2;
	$("#ssc_dxds_zhu").text(invest);
	$("#ssc_dxds_yuan").text(p.toFixed());
	// $("#dxds_lab_2_Selected").html(invest + decodeURI(EncodeUtf8("注，")) + p.toFixed() + decodeURI(EncodeUtf8("元。"))); 
	// if(invest < 1) $("#dxds_lab_2_Selected").attr('isdisabled', 'true');
	// else  $("#dxds_lab_2_Selected").attr('isdisabled', 'false');
}
function GetLotteryNumberZhiFDXDS() {
	var plsZiXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball2;
	var ball3;
	var ball4;
	for (var i = 0; i < 2; i++) {
		var temp = " ";
		for (var j = 0; j < 4; j++) {
			var obj = GetBallObjectZhiFDXDS(i, j);
			if (GetBallStateZhiFDXDS(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		LotteryNumber += temp + ",";
		plsZiXuanCode += temp + "-";
		ball3 = plsZiXuanCode.lastIndexOf("-");
		ball4 = plsZiXuanCode.substring(0, ball3);
	}
	if (ball4.length > 5) {
		plsZiXuanCode = "01" + ball4 + ";";
	} else {
		plsZiXuanCode = "01" + LotteryNumber + ";";
	}
	return plsZiXuanCode;
}

var lotNum = "";
function GetFrontZiXuanDXDS() {
	var temp = " ";
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 4; j++) {
			var obj = GetBallObjectZhiFDXDS(i, j);
			if (GetBallStateZhiFDXDS(obj)) {
				temp += obj.innerHTML.trim();
				lotNum += obj.innerHTML.trim() + ",";
			}
		}
		lotNum = lotNum.substring(0, lotNum.length - 1);
		if (i == 0) {
			lotNum += ",";
		} else {
			lotNum += ";";
		}
		temp = temp.trim();
	}
	lotNum = "DD" + lotNum;
	lotNum = lotNum.replace(/\大/g, "2").replace(/\小/g, "1").replace(/\单/g, "5").replace(/\双/g, "4");
	return temp.trim();
}
//循环行数来取球个数
function GetLotteryInvestNumZhiFDXDS() {
	var InvestNum = 1;
	for (var i = 0; i < 2; i++) {
		InvestNum *= GetBallSelectedNumZhiFDXDS(i);
	}
	return InvestNum;
}
function btn_dxds_AddClickZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZhiFDXDS();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码！")));
		return false;
	}
	//    if(p>20000){
	//    	openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//		   
	//    	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//    	return false;
	//    }
	var lotteryListSelect = $("#list_LotteryNumber");

	var lotteryView = GetFrontZiXuanDXDS();
	var frontLot = lotteryView;
	var lotteryNumber = lotNum; //GetLotteryNumberZhiFDXDS();
	//otteryView = '['+decodeURI(EncodeUtf8('大小单双' ))+']'+ lotteryView;
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "DD");
	opt.setAttribute('zhushu', "1");
	opt.setAttribute('money', 2);
	opt.setAttribute('delMoney', 2);
	lotteryListSelect[0].options.add(opt);
	lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('大小单双')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	add_codes(lotteryView, lotteryNumber);
	lotNum = '';
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
	ClearAllDXDS(0);
	ClearAllDXDS(1);
	return true;
}

function ClearAllDXDS(tabIndex) {
	for (var i = 0; i < 4; i++) {
		var id = "tddxds_2_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_numssc2';
		$("#ssc_dxds_zhu").text("0");
		$("#ssc_dxds_yuan").text("0");
		// $('#dxds_lab_2_Selected').html(0 + decodeURI(EncodeUtf8('注，'))+ 0 +decodeURI(EncodeUtf8('元。')));
	}
}
//////////////大小单双(ssc_dxds.js)//////end///////////////

/////////////////一星(ssc_yx.js)//////begin///////////////
function SelectBallZhiFYX(sender) {
	var Selected = GetBallStateZhiFYX(sender);
	if (Selected) {
		SetBallStateZhiFYX(sender, false);
		CheckFullZhiFYX();
		return;
	}
	SetBallStateZhiFYX(sender, true);
	CheckFullZhiFYX();
}

function GetBallObjectZhiFYX(row, col) {
	var obj = document.getElementById("tdyx_2_" + row + "_" + col);
	return obj;
}
//取球
function GetBallSelectedNumZhiFYX(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiFYX(row, i);
		if (GetBallStateZhiFYX(obj)) Count++;
	}
	return Count;
}

function GetBallStateZhiFYX(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}
function SetBallStateZhiFYX(sender, SelectState) {

	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		var count = 0;
		count = GetBallSelectedNumZhiFYX(0);
		if (count > 4) {
			openAlert(decodeURI(EncodeUtf8("您好，一星最多只能选择5个球！")));
			sender.className = 'ball_num';
			sender.setAttribute('isselected', 'false');
		} else {
			sender.className = 'ball_num_r';
			sender.setAttribute('isselected', 'true');
		}
	}
}
function CheckFullZhiFYX() {
	var invest = GetLotteryInvestNumZhiFYX();
	p = invest * 2;
	$("#ssc_yx_zhu").text(invest);
	$("#ssc_yx_yuan").text(p);
}
function GetLotteryNumberZhiFYX() {
	var plsZiXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball2;
	var ball3;
	var ball4;
	var temp = " ";
	for (var j = 0; j < 10; j++) {
		var obj = GetBallObjectZhiFYX(0, j);
		if (GetBallStateZhiFYX(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	plsZiXuanCode += temp + "-";
	ball3 = plsZiXuanCode.lastIndexOf("-");
	ball4 = plsZiXuanCode.substring(0, ball3);
	if (ball4.length > 1) {
		plsZiXuanCode = "1D" + ball4 + ";";
	} else {
		plsZiXuanCode = "1D" + LotteryNumber + ";";
	}
	return plsZiXuanCode;
}
function GetFrontZiXuanYX() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 0; j < 10; j++) {
		var obj = GetBallObjectZhiFYX(0, j);
		if (GetBallStateZhiFYX(obj)) temp += obj.innerHTML.trim();
	}
	temp = temp.trim();
	return temp.trim();
}
//取球个数
function GetLotteryInvestNumZhiFYX() {
	var InvestNum = 1;
	InvestNum *= GetBallSelectedNumZhiFYX(0);
	return InvestNum;
}
function btn_yx_AddClickZhiFYX() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZhiFYX();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码！")));
		return false;
	}
	//    if(invest * 2>20000){
	//    	 openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//		   
	//    	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//    	return false;
	//    }
	var lotteryListSelect = $("#list_LotteryNumber");

	var lotteryView = GetFrontZiXuanYX();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiFYX(); //得到注码
	lotteryView = '-,-,-,-,' + lotteryView;
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	//判断玩法 以及号码蓝样式
	if (invest == 1) {
		opt.setAttribute('wangFang', "1D0");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('一星单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	} else {
		opt.setAttribute('wangFang', "1D1");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('一星复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAllYX(0);
	return true;
}

function ClearAllYX(tabIndex) {
	for (var i = 0; i < 10; i++) {
		var id = "tdyx_2_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_num';
		$("#ssc_yx_zhu").text("0");
		$("#ssc_yx_yuan").text("0");
	}
}
////////////////一星(ssc_yx.js)//////end/////////////// 

///////////////二星直选复式(ssc_rxzf.js)//////begin/////////////// 
function getStateCount() {
	var count = 0;
	for (var i = 0; i < 2; i++) {
		count += GetBallSelectedNum_rxzf(i);
	}
	return count;
}

function SelectBall_rxzf(sender) {
	var Selected = GetBallState_rxzf(sender);
	if (Selected) {
		SetBallState_rxzf(sender, false);
		CheckFull_rxzf();
		return;
	}
	SetBallState_rxzf(sender, true);
	CheckFull_rxzf();
	if (getStateCount() > 12) {
		openAlert(decodeURI(EncodeUtf8("您好，二星直选复式最多只能选择12个号码！")));
		SetBallState_rxzf(sender, false);
		CheckFull_rxzf();
		return;
	}
}
function QuickSelect_rxzf(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(9, 10));
	var Type = str.substring(11, 12);

	for (var i = 0; i < 10; i++) {
		var obj = GetBallObject_rxzf(row, i);
		SetBallState_rxzf(obj, false);
	}
	if (Type == "Q") {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObject_rxzf(row, i);
			setBallColor(obj, true, 11);
			if (getStateCount() > 12) {
				openAlert(decodeURI(EncodeUtf8("您好，二星直选复式最多只能选择12个号码！")));
				setBallColor(obj, false, 11);
			}
		}
	}
	if (Type == "D") {
		for (var i = 5; i < 10; i++) {
			var obj = GetBallObject_rxzf(row, i);
			SetBallState_rxzf(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 0; i < 5; i++) {
			var obj = GetBallObject_rxzf(row, i);
			SetBallState_rxzf(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 10; i += 2) {
			var obj = GetBallObject_rxzf(row, i);
			SetBallState_rxzf(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 0; i < 10; i += 2) {
			var obj = GetBallObject_rxzf(row, i);
			SetBallState_rxzf(obj, true);
		}
	}
	CheckFull_rxzf();
}

function GetBallObject_rxzf(row, col) {
	var obj = document.getElementById("tdrxzf_2_" + row + "_" + col);
	return obj;
}

function GetBallSelectedNum_rxzf(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObject_rxzf(row, i);
		if (GetBallState_rxzf(obj)) Count++;
	}
	return Count;
}

function GetBallState_rxzf(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_rxzf(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFull_rxzf() {
	var invest = GetLotteryInvestNum_rxzf();
	p = invest * 2;
	$("#ssc_rxzf_zhu").text(invest);
	$("#ssc_rxzf_yuan").text(p);
}
function GetLotteryNumber_rxzf() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball3;
	var ball4;
	for (var i = 0; i < 2; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObject_rxzf(i, j);
			if (GetBallState_rxzf(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		LotteryNumber += temp + ",";
		ziXuanCode += temp + "-";
		ball3 = ziXuanCode.lastIndexOf("-");
		ball4 = ziXuanCode.substring(0, ball3);
	}
	if (ball4.length > 3) {
		ziXuanCode = "2D" + ball4 + ";";
	} else {
		ziXuanCode = "2D" + LotteryNumber.substring(0, LotteryNumber.length - 1) + ";";
	}
	return ziXuanCode;
}
function getFrontZiXuan_rxzf() {
	var LotteryNumber = "";
	for (var i = 0; i < 2; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObject_rxzf(i, j);
			if (GetBallState_rxzf(obj)) temp += obj.innerHTML.trim();
		}
		temp = temp.trim();
		if (i != 2) LotteryNumber += temp + ",";
		else LotteryNumber += temp;
	}
	return LotteryNumber.trim();
}

function GetLotteryInvestNum_rxzf() {
	var InvestNum = 1;
	for (var i = 0; i < 2; i++) InvestNum *= GetBallSelectedNum_rxzf(i);
	return InvestNum;
}
function btn_2_AddClick_rxzf() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNum_rxzf();
	var count = 0;
	for (var i = 0; i < 2; i++) {
		count += GetBallSelectedNum_rxzf(i);
	}
	if (count > 12) {
		openAlert(decodeURI(EncodeUtf8("您好，二星直选复式最多只能选择12个号码！")));
		return false;
	}
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码！")));
		return false;
	}
	//    if(invest * 2>20000){
	//    	openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//		   
	//    	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//    	return false;
	//    }
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryView = getFrontZiXuan_rxzf();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumber_rxzf();
	lotteryView = "-,-,-," + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	//判断玩法 以及号码蓝样式
	if (invest == 1) {
		opt.setAttribute('wangFang', "2D0");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星直选单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	} else {
		opt.setAttribute('wangFang', "2D1");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星直选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	for (var i = 0; i < 2; i += 1) ClearAll("rxzf", i);
}
///////////////////二星直选复式(ssc_rxzf.js)//////end/////////////// 

///////////////////二星组选复式(ssc_rxzuf.js)//////begin///////////// 
function SelectBall_rxzxf(sender) {
	var Selected = GetBallState_rxzxf(sender);
	if (Selected) {
		SetBallState_rxzxf(sender, false);
		CheckFull_rxzxf();
		return;
	}
	SetBallState_rxzxf(sender, true);
	CheckFull_rxzxf();
}
function GetBallObject_rxzxf(row, col) {
	var obj = document.getElementById("tdrxzxf_2_" + row + "_" + col);
	return obj;
}

function GetBallSelectedNum_rxzxf(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObject_rxzxf(row, i);
		if (GetBallState_rxzxf(obj)) Count++;
	}
	return Count;
}

function GetBallState_rxzxf(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_rxzxf(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		var count = 0;
		count = GetBallSelectedNum_rxzxf(0);
		if (count > 6) {
			openAlert(decodeURI(EncodeUtf8("您好，二星组选复式最多可以选择7个号码！")));
			sender.className = 'ball_num';
			sender.setAttribute('isselected', 'false');
		} else {
			sender.className = 'ball_num_r';
			sender.setAttribute('isselected', 'true');
		}
	}
}

function CheckFull_rxzxf() {
	var Num = GetBallSelectedNum_rxzxf(0);
	var invest = GetLotteryInvestNum_rxzxf();
	var p = invest * 2;
	$("#ssc_rxzuf_zhu").text(invest);
	$("#ssc_rxzuf_yuan").text(p);
}

function GetLotteryNumber_rxzxf() {
	var zuSan_code = "";
	var LotteryNumber = "";
	var lot;
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObject_rxzxf(i, j);
			if (GetBallState_rxzxf(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	zuSan_code += "F2" + LotteryNumber + ";";

	return zuSan_code;
}
//拼接注码
function getFront_rxzxf() {
	var LotteryNumber = "";
	for (var i = 0; i < 1; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObject_rxzxf(i, j);
			if (GetBallState_rxzxf(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		LotteryNumber += temp;
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim();
}

function GetLotteryInvestNum_rxzxf() {
	var Count = GetBallSelectedNum_rxzxf(0);
	if (Count < 2) return 0;
	if (Count == 2) return 1;

	var InvestNum = 1;
	for (var i = 3; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 2); i++) InvestNum = Math.round(InvestNum / i);
	return InvestNum;
}

function btn_2_AddClick_rxzxf() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNum_rxzxf();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您选择的不是一注复式票！应至少选择2个号码。请检查您选择的号码。")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryNumber = GetLotteryNumber_rxzxf();
	var lotteryView = getFront_rxzxf();
	var frontLot = lotteryView;
	// lotteryView = decodeURI(EncodeUtf8('[二星组选复式] ')) + lotteryView ;
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "F2");
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	} else {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('rxzxf', 0);
	return true;
}
//////////////////////二星组选复式(ssc_rxzuf.js)//////end/////////////// 

///////////////////二星组选和值(ssc_rxzuh.js)//////begin/////////////// 
function SelectBall_rxzxh(sender) {
	var Selected = GetBallState_rxzxh(sender);
	if (Selected) {
		SetBallState_rxzxh(sender, false);
		CheckFull_rxzxh();
		return;
	}
	SetBallState_rxzxh(sender, true);
	CheckFull_rxzxh();
}

function GetBallObject_rxzxh(Num) {
	var obj = document.getElementById("tdrxzxh_2_" + GetBallNum_rxzxh(Num));
	return obj;
}

function GetBallNum_rxzxh(Num) {
	var BallNum = "" + Num;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}

function GetBallSelectedNum_rxzxh() {
	var Count = 0;
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		if (GetBallState_rxzxh(obj)) Count++;
	}
	return Count;
}

function GetBallState_rxzxh(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function SetBallState_rxzxh(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		var count = GetBallSelectedNum_rxzxh();
		if (count > 7) {
			openAlert(decodeURI(EncodeUtf8("您好，二星组选复式最多8个号码！")));
			sender.className = 'ball_num';
			sender.setAttribute('isselected', 'false');
		} else {
			sender.className = 'ball_num_r';
			sender.setAttribute('isselected', 'true');
		}
	}
}

function CheckFull_rxzxh() {
	var invest = GetLotteryInvestNum_rxzxh();
	var p = invest * 2;
	$("#ssc_rxzuh_zhu").text(invest);
	$("#ssc_rxzuh_yuan").text(p);
}

function GetLotteryNumber_rxzxh() {
	var zu3HeZhiCode = "";
	var LotteryNumber = "";
	var lot;
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		if (GetBallState_rxzxh(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	zu3HeZhiCode += "S2" + LotteryNumber + ";";
	return zu3HeZhiCode;
}

//拼接和值注码
function getCode_rxzxh() {
	var zu3HeZhiCode = "";
	var LotteryNumber = GetLotteryNumber_rxzxh();
	lot = LotteryNumber.lastIndexOf(",");
	LotteryNumber = LotteryNumber.substring(0, lot);
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		if (GetBallState_rxzxh(obj)) {
			zu3HeZhiCode += "S2" + Number(i) + ";";
		}
	}
	return zu3HeZhiCode;
}

function GetFront_rxzxh() {
	var LotteryNumber = "";
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		if (GetBallState_rxzxh(obj)) LotteryNumber += (obj.innerHTML.trim() + ",");
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	return LotteryNumber.trim().rtrimWithReturn();
}

function GetLotteryInvestNum_rxzxh() {
	var InvestNum = 0;
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		if (GetBallState_rxzxh(obj)) InvestNum += GetNumbersInversNum_rxzxh(parseInt(obj.innerHTML.trim(), 10));
	}
	return InvestNum;
}

function GetNumbersInversNum_rxzxh(BallNum) {
	if (BallNum == 0) return 1;
	if (BallNum == 1) return 1;
	if (BallNum == 2) return 2;
	if (BallNum == 3) return 2;
	if (BallNum == 4) return 3;
	if (BallNum == 5) return 3;
	if (BallNum == 6) return 4;
	if (BallNum == 7) return 4;
	if (BallNum == 8) return 5;
	if (BallNum == 9) return 5;
	if (BallNum == 10) return 5;
	if (BallNum == 11) return 4;
	if (BallNum == 12) return 4;
	if (BallNum == 13) return 3;
	if (BallNum == 14) return 3;
	if (BallNum == 15) return 2;
	if (BallNum == 16) return 2;
	if (BallNum == 17) return 1;
	if (BallNum == 18) return 1;
	return 0;
}

function ClearSelect_rxzxh() {
	for (var i = 0; i <= 18; i++) {
		var obj = GetBallObject_rxzxh(i);
		SetBallState_rxzxh(obj, false);
	}
	$("#ssc_rxzuh_zhu").text("0");
	$("#ssc_rxzuh_yuan").text("0");
}

function btn_2_AddClick_rxzxh() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNum_rxzxh();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：请至少选择一注号码后再购买！")));
		return false;
	}
	var lotteryView = GetFront_rxzxh();
	var frontLot = lotteryView;
	var lotteryNumber = getCode_rxzxh();
	var lotteryListSelect = $("#list_LotteryNumber");
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', "S2");
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选和值单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	} else {
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('二星组选和值复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearSelect_rxzxh();
	return true;
}
//////////////////二星组选和值(ssc_rxzuh.js)//////end///////

////////////////////三星直选复式(ssc_sx.js)//////begin/////
function SelectBallZhiFSX(sender) {
	var Selected = GetBallStateZhiFSX(sender);
	if (Selected) {
		SetBallStateZhiFSX(sender, false);
		CheckFullZhiFSX();
		return;
	}
	SetBallStateZhiFSX(sender, true);
	CheckFullZhiFSX();
	if (getStateCountSX() > 24) {
		openAlert(decodeURI(EncodeUtf8("您好，三星最多只能选择24个号码！")));
		SetBallStateZhiFSX(sender, false);
		CheckFullZhiFSX();
		return;
	}
}
function getStateCountSX() {
	var count = 0;
	for (var i = 0; i < 3; i++) {
		count += GetBallSelectedNumZhiFSX(i);
	}
	return count;
}
function QuickSelectZhiFSX(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(7, 8));
	var Type = str.substring(9, 10);
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiFSX(row, i);
		SetBallStateZhiFSX(obj, false);
	}
	if (Type == "Q") {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObjectZhiFSX(row, i);
			//SetBallStateZhiFSX(obj, true);
			setBallColor(obj, true, 23);
		}
	}
	if (Type == "D") {
		for (var i = 5; i < 10; i++) {
			var obj = GetBallObjectZhiFSX(row, i);
			SetBallStateZhiFSX(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 0; i < 5; i++) {
			var obj = GetBallObjectZhiFSX(row, i);
			SetBallStateZhiFSX(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 10; i += 2) {
			var obj = GetBallObjectZhiFSX(row, i);
			SetBallStateZhiFSX(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 0; i < 10; i += 2) {
			var obj = GetBallObjectZhiFSX(row, i);
			SetBallStateZhiFSX(obj, true);
		}
	}
	CheckFullZhiFSX();
}

function GetBallObjectZhiFSX(row, col) {
	var obj = document.getElementById("tdsx_2_" + row + "_" + col);
	return obj;
}
//取球
function GetBallSelectedNumZhiFSX(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiFSX(row, i);
		if (GetBallStateZhiFSX(obj)) Count++;
	}
	return Count;
}

function GetBallStateZhiFSX(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}
function SetBallStateZhiFSX(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

function CheckFullZhiFSX() {
	var invest = GetLotteryInvestNumZhiFSX();
	p = invest * 2;
	$("#ssc_sx_zhu").text(invest);
	$("#ssc_sx_yuan").text(p);
}
function GetLotteryNumberZhiFSX() {
	var plsZiXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball2;
	var ball3;
	var ball4;
	for (var i = 0; i < 3; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiFSX(i, j);
			if (GetBallStateZhiFSX(obj)) temp += obj.innerHTML.trim() + ",";
		}
		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		if (i != 2) LotteryNumber += temp + ",";
		else LotteryNumber += temp;
		plsZiXuanCode += temp + "-";
		ball3 = plsZiXuanCode.lastIndexOf("-");
		ball4 = plsZiXuanCode.substring(0, ball3);
	}
	if (ball4.length > 3) {
		plsZiXuanCode = "3D" + ball4 + ";";
	} else {
		plsZiXuanCode = "3D" + LotteryNumber + ";";
	}
	return plsZiXuanCode;
}
function GetFrontZiXuanSX() {
	var LotteryNumber = "";
	for (var i = 0; i < 3; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiFSX(i, j);
			if (GetBallStateZhiFSX(obj)) temp += obj.innerHTML.trim();
		}
		temp = temp.trim();
		if (i != 2) LotteryNumber += temp + ",";
		else LotteryNumber += temp;
	}
	return LotteryNumber.trim();
}
//取球个数
function GetLotteryInvestNumZhiFSX() {
	var InvestNum = 1;
	for (var i = 0; i < 3; i++) InvestNum *= GetBallSelectedNumZhiFSX(i);
	return InvestNum;
}
function btn_sx_AddClickZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZhiFSX();
	var count = 0;
	for (var i = 0; i < 3; i++) {
		count += GetBallSelectedNumZhiFSX(i);
	}
	if (count > 24) {
		openAlert(decodeURI(EncodeUtf8("您好，三星最多只能选择24个号码！")));
		return false;
	}
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码！")));
		return false;
	}
	//        if(invest * 2>20000){
	//        	openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//			  
	//        	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//        	return false;
	//        }
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#sx_lab_2_Selected").attr('isdisabled') == 'true') return;
	var lotteryView = GetFrontZiXuanSX();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiFSX();
	lotteryView = '-,-,' + lotteryView;
	var opt = new Option(lotteryView, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	if (invest == 1) {
		opt.setAttribute('wangFang', "3D0");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('三星直选单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
	} else {
		opt.setAttribute('wangFang', "3D1");
		lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('三星直选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	for (var i = 0; i < 3; i += 1) ClearAllSX(i);
	return true;
}

function ClearAllSX(tabIndex) {
	for (var i = 0; i < 10; i++) {
		var id = "tdsx_2_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_num';
		$("#ssc_sx_zhu").text("0");
		$("#ssc_sx_yuan").text("0");
	}
}
////////////////三星直选复式(ssc_sx.js)//////end//////

////////////五星直选复式和通选复式(ssc_wx.js)//////begin///
function getStateCountWX() {
	var count = 0;
	for (var i = 0; i < 5; i++) {
		count += GetBallSelectedNumZhiFWX(i);
	}
	return count;
}

function ssc_setBall(sender) {
	var Selected = GetBallStateZhiFWX(sender);
	if (Selected) {
		ssc_setBallState(sender, false);
		CheckFullZhiFWX();
		return;
	}
	ssc_setBallState(sender, true);
	CheckFullZhiFWX();

	if ($("#sub_nav_7").is(":visible")) {
		if (getStateCountWX() > 45) {
			openAlert(decodeURI(EncodeUtf8("您好，五星直选最多可以选择45个号码！")));
			ssc_setBallState(sender, false);
			CheckFullZhiFWX();
			return;
		}
	}
}
function QuickSelectZhiFWX(sender) {
	var str = sender.id;
	var row = "";
	var Type = "";
	if ($("#sub_nav_7").is(":visible")) {
		row = parseInt(str.substring(7, 8));
		Type = str.substring(9, 10);
	} else {
		row = parseInt(str.substring(9, 10));
		Type = str.substring(11, 12);
	}

	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiFWX(row, i);
		ssc_setBallState(obj, false);
	}
	if (Type == "Q") {
		for (var i = 0; i < 10; i++) {
			var obj = GetBallObjectZhiFWX(row, i);
			if ($("#sub_nav_7").is(":visible")) {
				setBallColor(obj, true, 44);
			} else {
				ssc_setBallState(obj, true);
			}
		}
	}
	if (Type == "D") {
		for (var i = 5; i < 10; i++) {
			var obj = GetBallObjectZhiFWX(row, i);
			ssc_setBallState(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 0; i < 5; i++) {
			var obj = GetBallObjectZhiFWX(row, i);
			ssc_setBallState(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 10; i += 2) {
			var obj = GetBallObjectZhiFWX(row, i);
			ssc_setBallState(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 0; i < 10; i += 2) {
			var obj = GetBallObjectZhiFWX(row, i);
			ssc_setBallState(obj, true);
		}
	}
	CheckFullZhiFWX();
}

function GetBallObjectZhiFWX(row, col) {
	if ($("#sub_nav_7").is(":visible")) {
		var obj = document.getElementById("tdwt_2_" + row + "_" + col);
	} else {
		var obj = document.getElementById("tdwttx_2_" + row + "_" + col);
	}
	return obj;
}
//每行10个球
function GetBallSelectedNumZhiFWX(row) {
	var Count = 0;
	for (var i = 0; i < 10; i++) {
		var obj = GetBallObjectZhiFWX(row, i);
		if (GetBallStateZhiFWX(obj)) Count++;
	}
	return Count;
}

function GetBallStateZhiFWX(sender) {
	return sender.getAttribute('isselected') == 'true' ? true: false;
}

function ssc_setBallState(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}
function CheckFullZhiFWX() {
	var invest = GetLotteryInvestNumZhiFWX();
	var p = invest * 2;
	if ($("#sub_nav_7").is(":visible")) {
		$("#ssc_wx_zhu").text(invest);
		$("#ssc_wx_yuan").text(p);
	} else {
		$("#ssc_wxtx_zhu").text(invest);
		$("#ssc_wxtx_yuan").text(p);
	}
}

function GetLotteryNumberZhiFWX() {
	var sscCode = "";
	var LotteryNumber = "";
	var ball1;
	var ball3;
	var ball4;
	for (var i = 0; i < 5; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiFWX(i, j);
			if (GetBallStateZhiFWX(obj)) temp += obj.innerHTML.trim() + ",";
		}

		temp = temp.trim();
		ball1 = temp.lastIndexOf(",");
		temp = temp.substring(0, ball1);
		LotteryNumber += temp + ",";
		sscCode += temp + "-";
		ball4 = sscCode.substring(0, sscCode.lastIndexOf("-"));
		//单式
		ball3 = LotteryNumber.substring(0, LotteryNumber.lastIndexOf(","));
	}
	if (ball4.length > 9) {
		sscCode = ball4 + ";";
	} else {
		sscCode = ball3 + ";";
	}
	return sscCode;
}

function getFrontZiXuanWX() {
	var LotteryNumber = "";
	for (var i = 0; i < 5; i++) {
		var temp = " ";
		for (var j = 0; j < 10; j++) {
			var obj = GetBallObjectZhiFWX(i, j);
			if (GetBallStateZhiFWX(obj)) temp += obj.innerHTML.trim();
		}
		temp = temp.trim();
		if (i != 4) LotteryNumber += temp + ",";
		else LotteryNumber += temp;
	}
	return LotteryNumber;
}

//循环行数
function GetLotteryInvestNumZhiFWX() {
	var InvestNum = 1;
	for (var i = 0; i < 5; i++) InvestNum *= GetBallSelectedNumZhiFWX(i);
	return InvestNum;
}
function btn_wt_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var invest = GetLotteryInvestNumZhiFWX();
	var count = 0;
	for (var i = 0; i < 5; i++) {
		count += GetBallSelectedNumZhiFWX(i);
	}
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码！")));
		return false;
	}
	//if((2*invest)>20000){
	//	openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));

	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
	//	return false;
	// }
	var lotteryListSelect = document.getElementById("list_LotteryNumber");

	var lotteryView = getFrontZiXuanWX();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiFWX();
	var wanfa = "";
	// var view =lotteryView.substring(0,lotteryView.length)+"|"+invest+decodeURI(EncodeUtf8("注　　共"))+invest*2+decodeURI(EncodeUtf8("元"));
	var view;
	if ($("#zhixuan_tishi2").is(":visible")) {
		//获取玩法
		if (invest == 1) {
			wanfa = "5T0";
			view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星通选单式')) + "]|" + lotteryView.substring(0, lotteryView.length) + "|" + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星通选单式')) + "]" + lotteryView.substring(0, lotteryView.length) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
		} else {
			wanfa = "5T1";
			view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星通选复式')) + "]|" + lotteryView.substring(0, lotteryView.length) + "|" + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星通选复式')) + "]" + lotteryView.substring(0, lotteryView.length) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
		}
		lotteryNumber = "5T" + lotteryNumber;
	} else if ($("#zhixuan_tishi1").is(":visible")) {
		if (invest == 1) {
			wanfa = "5D0";
			view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星直选单式')) + "]|" + lotteryView.substring(0, lotteryView.length) + "|" + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星直选单式')) + "]" + lotteryView.substring(0, lotteryView.length) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　共2元")) + "</span>";
		} else {
			wanfa = "5D1";
			view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星直选复式')) + "]|" + lotteryView.substring(0, lotteryView.length) + "|" + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('五星直选复式')) + "]" + lotteryView.substring(0, lotteryView.length) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　共")) + invest * 2 + decodeURI(EncodeUtf8("元")) + "</span>";
		}
		lotteryNumber = "5D" + lotteryNumber;
	}
	//view=lotteryView+'|'+invest+decodeURI(EncodeUtf8('注'));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanfa);
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect.options.add(opt);
	add_codes(lotteryView, lotteryNumber);

	totalMoney += 2 * invest;

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * invest);
	var partial_money = document.getElementById("investField").innerHTML;
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	totalLotteryInvest += invest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	for (var i = 0; i < 5; i += 1) {
		if ($("#sub_nav_7").is(":visible")) {
			ClearAll("wt", i);
		} else {
			ClearAll("wttx", i);
		}
	}
	return true;
}
//shishicai   获取最新开奖显示期数
function newinissue(issue) {
	$("#inssuenums").val(issue);
}

/////////////////////////////五星直选复式和通选复式(ssc_wx.js)//////end
