//
// 智能机选事件  （杀号机选）
// @param n 机选数
//
function btn_2_RandManyClick(n) {
	//获取机选红球、蓝球个数
	var rNum = $("#redBallCount_sh").val();
	var bNum = $("#blueBallCount_sh").val();
	//循环页面传入的随机的注数添加进option中并在页面显示
	for (var m = 0; m < parseInt(n); m++) {
		//1.提取选中的红球和蓝球
		var redBallNumCodes = getUserSelectBall_sh('r', 33); //alert(redBallNumCodes);
		var blueBallNumCodes = getUserSelectBall_sh('b', 16);
		//2.计算共计的红球、蓝球个数
		var totalRedNum = parseInt(rNum) + redBallNumCodes.length;
		var totalBuleNum = parseInt(bNum) + blueBallNumCodes.length;

		//提示红球的个数限制
		if (totalRedNum > 33) {
			openAlert(decodeURI(EncodeUtf8("您好，请正确选择红球的个数！")));
			return;
		}

		//提示蓝球的个数限制
		if (totalBuleNum > 16) {
			openAlert(decodeURI(EncodeUtf8("您好，请正确选择蓝球的个数！")));
			return;
		}

		//3.调用算球的方法随机生成的红球和蓝球
		var finalRed = getRandBall_nokill('td_', redBallNumCodes, totalRedNum, 'r', 33, 'ball_num', 'ball_num_sh', 27, 'sh');
		var finalBlue = getRandBall_nokill('td_', blueBallNumCodes, totalBuleNum, 'b', 16, 'ball_num', 'ball_num_sh', 15, 'sh');

		//4.拼接显示注码和传递给后台的注码
		var lottery = finalRed + '|' + finalBlue;
		var lotteryNumber = getEndCodes(finalRed + "") + "~" + getEndCodes(finalBlue + "") + "^";

		//获取机选的注数
		totalLotteryInvest += ssq_GetLotteryInvestNum_sh(finalRed.length, finalBlue.length);
		//alert("获取机选的注数"+totalLotteryInvest);
		//获取一组号码的注数
		var OneInvest = ssq_GetLotteryInvestNum_sh(finalRed.length, finalBlue.length);
		// alert("获取一组号码的注数"+OneInvest);
		//得到一组机选号码的金额
		var OneMoeny = OneInvest * 2;
		//提示定胆个数
		if (GetRedBallSelectedNum_sh() > 5) {
			openAlert(decodeURI(EncodeUtf8("您好，红球最多只能定5个胆码！")));
			return;
		};
		//提示红球杀号个数
		var killRedBall;
		for (var i = 0; i < 33; i++) killRedBall = getUserBlackNum('td_r_', 33, 'ball_num_sh', 'sh');
		var redlength = killRedBall.length;
		if (redlength > 27) {
			openAlert(decodeURI(EncodeUtf8("对不起，红球最多只能杀27个号码！")));
			return;
		}

		//提示蓝球杀号个数
		//获取杀号球
		var killBlueBall;
		for (var i = 0; i < 16; i++) killBlueBall = getUserBlackNum('td_b_', 16, 'ball_num_sh', 'sh');
		var bluelength = killBlueBall.length;
		if (bluelength > 15) {
			openAlert(decodeURI(EncodeUtf8("蓝球最多只能杀15个号码！")));
			return;
		}
		//拼接页面显示注码格式
		var lottery_view;
		var view;
		if (getWanfa_sh(finalRed.length, finalBlue.length) == "00") {
			lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + finalRed + '|' + finalBlue + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　　共2元")) + "</span>";
		} else {
			lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("复式")) + "]" + finalRed + '|' + finalBlue + "</span><span class='jieguo1'>  " + OneInvest + decodeURI(EncodeUtf8("注　　共")) + OneMoeny + decodeURI(EncodeUtf8("元")) + "</span>";

		}
		view = finalRed + '|' + finalBlue + '|' + OneInvest + decodeURI(EncodeUtf8("注　　共")) + OneMoeny + decodeURI(EncodeUtf8("元"));
		//5将值设置到下拉列表中获取
		var lotteryListSelect = $("#list_LotteryNumber");
		var opt = new Option(view, lotteryNumber);
		opt.setAttribute('allLot', lottery);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', getWanfa_sh(finalRed.length, finalBlue.length));
		opt.setAttribute('zhushu', OneInvest);
		opt.setAttribute('money', OneMoeny);
		opt.setAttribute('delMoney', OneMoeny);
		lotteryListSelect[0].options.add(opt);

		//将得到的值设置到层中并在页面显示
		add_codes(lottery_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	//计算投注总金额
	totalMoney = totalLotteryInvest * 2;
	//调用公共方法让购彩以后的金额得到
	getFinalMoney();
	//设置页面上的购彩金额和购买后的金额
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	if ($("#daiGouHemai") != null && $("#qishuList") != null && $("#daiGouHemai").val() == "zhuihao") {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	chooseBallToMoney();
}

//普通机选功能
function btn_2_generalRandManyClick(n) {
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

	var arr = rollJx1(1, 33, 1, 16, true, false, 6, 1, parseInt(n));
	ClearSelect();
	var lotteryListSelect = $("#list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var arrRed = "";
		var arrBlue = "";
		var arr1 = arr[2 * i];
		var arr2 = arr[2 * i + 1];
		var lottery = arr1.join(',') + '|' + arr2.join(',');

		for (var j = 0; j < arr1.length; j++) {
			if (arr1[j].substring(0, 1) == "0") {
				arrRed += arr1[j].substring(1, 2) + ",";
			} else {
				arrRed += arr1[j] + ",";
			}
		}
		for (var k = 0; k < arr2.length; k++) {
			if (arr2[k].substring(0, 1) == "0") {
				arrBlue += arr2[k].substring(1, 2) + ",";
			} else {
				arrBlue += arr2[k] + ",";
			}
		}
		var lotteryNumber = "";
		var controlRed = arrRed.lastIndexOf(",");
		var red = arrRed.substring(0, controlRed);
		var controlBlue = arrBlue.lastIndexOf(",");
		var blue = arrBlue.substring(0, controlBlue);
		lotteryNumber += red + "~" + blue + "^";
		var pu_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + lottery + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　　共2元")) + "</span>";
		var lotteryView = lottery;
		var opt = new Option(lotteryView, lotteryNumber);

		var frontLot = lottery;
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "00");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);

		lotteryListSelect[0].options.add(opt);
		add_codes(pu_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	$("#lab_2_Selected").html(decodeURI(EncodeUtf8('[0注，共 0元]')));
	chooseBallToMoney(n);
}

//随机数

function rollJx1(minRed, redCount, minBlue, blueCount, sort, order, redLottery, blueLottery, lotteryCount, redDanNum, blueDanNum) {
	var redZero = minRed == 0 ? 1 : 0;
	var blueZero = minBlue == 0 ? 1 : 0;
	var bigArray = new Array();
	for (var a = 0; a < lotteryCount; a++) {
		var redTable = getRollBall(redLottery, redCount, redZero, redDanNum, order); //获取红球随机号码
		var blueTable = getRollBall(blueLottery, blueCount, blueZero, blueDanNum, order); //获取蓝球随机号码

		var redArray = (redTable + "").split('|');
		var blueArray = (blueTable + "").split('|');
		redArray.sort();
		blueArray.sort();
		bigArray.push(redArray);
		if (blueCount > 0) bigArray.push(blueArray);
	}
	return bigArray;
}

//定胆机选的方法
function ddjx_ssq_Rand(n) {
	//判断用户是否选择胆码
	if (getUserSelectBall('r', 33) == "" && getUserSelectBall('b', 16) == "") {
		openAlert(decodeURI(EncodeUtf8("请您至少选择1个胆码再机选。")));
		return;
	}

	//提取选中的红球和蓝球
	var redBallNumCodes = getUserSelectBall('r', 33, '');
	var blueBallNumCodes = getUserSelectBall('b', 16, '');
	var redBallNumLen = redBallNumCodes.length; //获取选中红球的个数
	var blueBallNumLen = blueBallNumCodes.length; //获取选中蓝球的个数
	if (getUserSelectBall('r', 33) == "") {
		redBallNumLen = 0;
	}
	if (getUserSelectBall('b', 16) == "") {
		blueBallNumLen = 0;
	}

	if (blueBallNumLen > 1) {
		openAlert(decodeURI(EncodeUtf8("您只能选择1个蓝球胆码。")));
		return;
	}
	if (redBallNumLen + blueBallNumLen > 6) {
		openAlert(decodeURI(EncodeUtf8("红球+蓝球最多只能选择6个胆码。")));
		return;
	}

	totalLotteryInvest += parseInt(n); //算得注数
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val()); //算得金额

	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();

	for (var i = 0; i < parseInt(n); i++) {

		var lotteryListSelect = $("#list_LotteryNumber");

		//3.调用算球的方法随机生成的红球和蓝球
		var finalRed = getRandBall('td_', redBallNumCodes, 6, 'r', 33, 'ball_num', 'ball_num_sh', 27, '');
		var finalBlue = getRandBall('td_', blueBallNumCodes, 1, 'b', 16, 'ball_num', 'ball_num_sh', 15, '');

		//4.拼接显示注码和传递给后台的注码
		var lottery = finalRed + '|' + finalBlue;
		var lotteryNumber = getEndCodes(finalRed + "") + "~" + getEndCodes(finalBlue + "") + "^";
		var dd_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + finalRed + ' | ' + finalBlue + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　　共2元")) + "</span>";
		var opt = new Option(lottery, lotteryNumber);
		opt.setAttribute('allLot', lottery);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "00");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);

		lotteryListSelect[0].options.add(opt);
		add_codes(dd_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	chooseBallToMoney();

}

//初始化双色球结果注码
var new_codes = "";
//function btn_2_RandManyClick1(n) {
//		var oldMoney = parseInt($("#investField").html());
//		var oldLabNum = parseInt($("#lab_Num").html());    	
//    	if(oldMoney != 0){
//    		totalMoney = oldMoney;
//    		totalLotteryInvest = oldLabNum;
//    	}
//		totalLotteryInvest+=parseInt(n);
//		totalMoney+=parseInt(n)*2*Number($("#tb_Multiple").val());
//		
//		$("#investField").html(totalMoney);   
//		$("#current_money").html(totalMoney);
//	    //调用公共方法让购彩以后的金额得到
//		getFinalMoney();
//		
//        var arr = rollJx1(1, 33, 1, 16, true, false, 6, 1, parseInt(n),"","");
//        ClearSelect();
//        var lotteryListSelect =$("#list_LotteryNumber");
//        for(var i = 0;i < parseInt(n);i++){
//        	var arrRed=""; var arrBlue="";
//            var arr1 = arr[2 * i];
//            var arr2 = arr[2 * i + 1];
//            var lottery = arr1.join(',') + '|' + arr2.join(',');
//            
//            for(var j=0;j<arr1.length;j++){
//	            if(arr1[j].substring(0,1)=="0"){
//	            	arrRed+=arr1[j].substring(1,2)+",";
//	            }else{
//	            	arrRed+=arr1[j]+",";
//	            }  
//            }
//            for(var k=0;k<arr2.length;k++){
//	            if(arr2[k].substring(0,1)=="0"){
//	            	arrBlue+=arr2[k].substring(1,2)+",";
//	            }else{
//	            	arrBlue+=arr2[k]+",";
//	            }  
//            }
//            var lotteryNumber="";
//            var controlRed=arrRed.lastIndexOf(",");
//            var red=arrRed.substring(0,controlRed);
//            var controlBlue=arrBlue.lastIndexOf(",");
//            var blue=arrBlue.substring(0,controlBlue);
//            lotteryNumber+=red+"~"+blue+"^";
//         
//            var lotteryView = lottery;
//            var opt = new Option(lotteryView, lotteryNumber);
//            
//            var frontLot = lottery;
//            opt.setAttribute('allLot',frontLot);
//            opt.setAttribute('backLot',lotteryNumber);
//        	opt.setAttribute('wangFang',"00");
//        	opt.setAttribute('zhushu',"1");
//        	opt.setAttribute('money',2);
//			opt.setAttribute('delMoney', 2);
//			
//			lotteryListSelect[0].options.add(opt); 
//			add_codes(lotteryView,lotteryNumber);
//            $("#lab_Num").html(totalLotteryInvest);
//        }
//    }
function updateMultipleTotalMoney() {
	var zhuShu = $("#lab_Num").html();
	var ssq_changeMoney = parseInt(2 * zhuShu);
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(ssq_changeMoney * initMultiple);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
}
function change_playType() {
	//	var commonType=document.getElementById("commonType");//普通
	//	var danTuoType=document.getElementById("danTuoType");//胆拖
	//    if(commonType.checked){
	//    	document.getElementById("commonDIV").style.display="block";
	//		document.getElementById("tuoMaDIV").style.display="none";
	//    }else{
	//		document.getElementById("commonDIV").style.display="none";
	//		document.getElementById("tuoMaDIV").style.display="block";
	//    }
}

function ClearSelect() {
	for (var i = 1; i <= 33; i++) SetBallState("r", GetBallNum(i), false, 'clearBall');

	for (var i = 1; i <= 16; i++) SetBallState("b", GetBallNum(i), false, 'clearBall');
	$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注，0元。")));
}

//common.js==========================================================================================
function ClearRedAndBlue() {
	clearRedSelect();
	clearBlueSelect();
	ssq_CheckFull();
}

//判断球是否是选中状态
function GetBallState(BallColor, BallNum) {
	var isSelectedAttr = $("#td_" + BallColor + "_" + BallNum).attr('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}

//不带有杀号功能的选球
function SelectBall_nokill(BallColor, BallNum) {
	SetBallState_nokill(BallColor, BallNum, true);
	ssq_CheckFull();
	return;
}

//不带杀号的设置球的状态
function SetBallState_nokill(BallColor, BallNum, SelectState, clearBall) {
	var ball = $("#td_" + BallColor + "_" + BallNum);
	if (clearBall == null || clearBall == "") {
		if (SelectState) {
			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num';
				ball.attr('isselected', 'false');
			} else {
				ball[0].className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
				ball.attr('isselected', 'true');
			}

		} else {
			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num_sh';
			} else {
				ball[0].className = 'ball_num';
			}
			ball.attr('isselected', 'false');
		}
	} else {
		ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}

function GetRedBallSelectedNum() {
	var Count = 0;
	for (var i = 1; i <= 33; i++) {
		if (GetBallState("r", GetBallNum(i))) Count++;
	}
	return Count;
}

function GetBlueBallSelectedNum() {
	var Count = 0;
	for (var i = 1; i <= 16; i++) {
		if (GetBallState("b", GetBallNum(i))) Count++;
	}
	return Count;
}

function GetBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;

	return BallNum;
}

//设置胆拖状态
function SetDanTuoRedBallState(BallColor, BallNum, SelectState, type) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_" + type);
	if (SelectState) {
		ball[0].className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
		ball.attr('isselected', 'true');

	} else {
		ball[0].className = 'ball_num';
		ball[0].setAttribute('isselected', 'false');
	}

}
var p = 0;
function ssq_CheckFull(wanfa) {
	var invest = ssq_GetLotteryInvestNum();
	if (wanfa == "sh") {
		if (invest < 1) $("#btn_2_Add_sh")[0].setAttribute('isdisabled', 'true');
		else $("#btn_2_Add_sh")[0].setAttribute('isdisabled', 'false');
		p = invest * 2;
		if (invest < 1) $("#btn_2_Add_sh").attr('isdisabled', 'true');
		else $("#btn_2_Add_sh").attr('isdisabled', 'false');
	} else {
		if (invest < 1) $("#btn_2_Add")[0].setAttribute('isdisabled', 'true');
		else $("#btn_2_Add")[0].setAttribute('isdisabled', 'false');
		p = invest * 2;
		if (invest < 1) $("#btn_2_Add").attr('isdisabled', 'true');
		else $("#btn_2_Add").attr('isdisabled', 'false');
	}
	var p = invest * 2;
	var blueballs = getPuTongBallCount('b', 16);
	var redballs = getPuTongBallCount('r', 33);
	$('#x_zhu').html(invest);
	$('#x_yuan').html(p);
	$('#blueballs').html(blueballs);
	$('#redballs').html(redballs);
}
function ssq_GetLotteryNumber(wanfa) {
	var ssq_code = "";
	var LotteryNumber = "";
	var BallNum;
	var randBlue;
	for (var i = 1; i <= 33; i++) {
		BallNum = GetBallNum(i);
		if (wanfa == 'sh') {
			if (GetBallState_sh("r", BallNum)) {
				LotteryNumber += (BallNum + " ");
				if (BallNum.substring(0, 1) == "0") {
					ssq_code += BallNum.substring(1, 2) + ",";
				} else {
					ssq_code += BallNum + ",";
				}
			}
		} else {
			if (GetBallState("r", BallNum)) {
				LotteryNumber += (BallNum + " ");
				if (BallNum.substring(0, 1) == "0") {
					ssq_code += BallNum.substring(1, 2) + ",";
				} else {
					ssq_code += BallNum + ",";
				}
			}
		}
	}
	LotteryNumber += "~ ";
	ssq_code += "~";
	var red;
	for (var i = 1; i <= 16; i++) {
		BallNum = GetBallNum(i);
		if (wanfa == 'sh') {
			if (GetBallState_sh("b", BallNum)) {
				LotteryNumber += (BallNum + " ");
				if (BallNum.substring(0, 1) == "0") {
					ssq_code += BallNum.substring(1, 2) + ",";
				} else {
					ssq_code += BallNum + ",";
				}
			}
		} else {
			if (GetBallState("b", BallNum)) {
				LotteryNumber += (BallNum + " ");
				if (BallNum.substring(0, 1) == "0") {
					ssq_code += BallNum.substring(1, 2) + ",";
				} else {
					ssq_code += BallNum + ",";
				}
			}
		}
		randBlue = ssq_code;
		var conBall = randBlue.lastIndexOf("~");
		red = ssq_code.substring(0, conBall - 1);

		var conBlue1 = ssq_code.lastIndexOf("~");
		var blue1 = ssq_code.substring(conBlue1, ssq_code.length);
		var conBlue = blue1.lastIndexOf(",");
		var blue = blue1.substring(0, conBlue);
	}
	ssq_code = red + blue + "^";
	return ssq_code;
}

//普通投注获取用户选中的篮球以及红球
function GetFrontLot() {
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 33; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + ",");
		}
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.length - 1);
	LotteryNumber += "|";
	for (var i = 1; i <= 16; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("b", BallNum)) {
			LotteryNumber += (BallNum + ",");
		}
	}
	return LotteryNumber;
}

function ssq_GetLotteryInvestNum() {
	var RedCount = 0;
	var BlueCount = 0;
    
	for (var i = 1; i <= 33; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}

	for (var j = 1; j <= 16; j++) {
		if (GetBallState("b", GetBallNum(j))) BlueCount++;
	}
	if ((RedCount < 6) || (BlueCount < 1)) {
		return 0;
	} else if (RedCount == 6) {
		var InvestNum = BlueCount;
		return InvestNum;
	} else {
		InvestNum = 1;
		for (var k = 7; k <= RedCount; k++) InvestNum *= k;

		for (var d = 2; d <= (RedCount - 6); d++) InvestNum = Math.round(InvestNum / d);
		InvestNum *= BlueCount;

		return InvestNum;
	}
}
function SetBallState(BallColor, BallNum, SelectState, clearBall) {
	var ball = $("#td_" + BallColor + "_" + BallNum);
	if (clearBall == null || clearBall == "") {
		if (SelectState) {
			// ball[0].className = BallColor == 'r' ? 'ball_num_r' : 'ball_num_b';
			//ball.attr('isselected','true');

			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num_sh';
				ball.attr('isselected', 'false');
			} else if (ball[0].className == "ball_num_sh") {
				ball[0].className = 'ball_num';
				ball.attr('isselected', 'false');
			} else {
				ball[0].className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
				ball.attr('isselected', 'true');
			}
		} else {
			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num_sh';
			} else {
				ball[0].className = 'ball_num';
			}
			ball.attr('isselected', 'false');
		}
	} else {
		ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}

function ClearSelect() {
	for (var i = 1; i <= 33; i++) {
		SetBallState("r", GetBallNum(i), false, 'clearBall');
	}
	for (var i = 1; i <= 16; i++) {
		SetBallState("b", GetBallNum(i), false, 'clearBall');
	}
	//$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注，0元。")));
	ssq_CheckFull();
}
//清除胆拖投注红球胆码被选中状态
function clearDanTuoRedSelect() {
	for (var i = 1; i <= 33; i++) {
		SetDanTuoRedBallState("r", GetBallNum(i), false, "danMa");
	}
	//$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注，0元。")));
	danTuo_checkFull();

}
//清除胆拖投注红球托码被选中状态
function clearTuoMaRedSelect() {
	for (var i = 1; i <= 33; i++) {
		SetDanTuoRedBallState("r", GetBallNum(i), false, "tuoMa");
	}
	danTuo_checkFull();
}
//清除胆拖投注球篮球被选中状态
function clearDanTuoBlueSelect() {
	for (var i = 1; i <= 33; i++) {
		SetDanTuoRedBallState("b", GetBallNum(i), false, "");
	}
	danTuo_checkFull();
}
//拖码投注清除所有选号区
function clearAllSelect() {
	clearDanTuoRedSelect();
	clearTuoMaRedSelect();
	clearDanTuoBlueSelect();
	ssq_CheckFull();
}
//清除红球（普通投注、杀号）
function clearRedSelect(wanfa) {
	for (var i = 1; i <= 33; i++) {
		if (wanfa == 'sh') {
			SetBallState_sh("r", GetBallNum(i), false, 'clearBall');
		} else {
			SetBallState_nokill("r", GetBallNum(i), false, 'clearBall');
		}
	};
	if (wanfa == 'sh') {
		getNum_sh("r");
		$("#checkState").val("0"); //将隐藏域的值设为默认值0
	}
	ssq_CheckFull(wanfa);
}
//清除蓝球(普通投注、杀号)
function clearBlueSelect(wanfa) {
	for (var i = 1; i <= 16; i++) {
		if (wanfa == 'sh') {
			SetBallState_sh("b", GetBallNum(i), false, 'clearBall');
		} else {
			SetBallState_nokill("b", GetBallNum(i), false, 'clearBall');
		};
		if (wanfa == 'sh') {
			getNum_sh("b");
		}
	}
	ssq_CheckFull(wanfa);
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
var blueBallCount = 0;
var redBallCount = 0;
function controllRedBallCount() {
	redBallCount = $("#redBallCount").val();
}
function controllBlueBallCount() {
	blueBallCount = $("#blueBallCount").val();
}
//普通投注机选红球
function redRand_nokill() {
	for (var i = 1; i <= 33; i += 1) SetBallState_nokill("r", GetBallNum(i), false, 'clearBall');
	var redBallArray = new Array();
	controllRedBallCount();
	for (var i = 1; i <= redBallCount; i += 1) {
		var redRandNum = parseInt(Math.random() * 33) + 1;

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
//拖码区得到机选红球与篮球的个数
var TuoMablueBallCount = 0;
var TuoMabredBallCount = 0;
function TuoMabcontrollRedBallCount() {
	TuoMabredBallCount = $("#tuoMaredBallCount").val();
}
function TuoMabcontrollBlueBallCount() {
	TuoMablueBallCount = $("#tuoMablueBallCount").val();
}

//机选红球拖码
function TuoMaRedRand() {
	var ssq_danTuo_code = "";
	var danMa_BallNum = "";
	var array = new Array();
	//获取红球胆码的数
	for (var i = 1; i <= 33; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum, 'danMa')) {
			if (danMa_BallNum.substring(0, 1) == "0") {
				array.push(danMa_BallNum.substring(1, 2));
			} else {
				array.push(danMa_BallNum);
			}
		}
	}

	for (var i = 1; i <= 33; i += 1) SetDanTuoRedBallState("r", GetBallNum(i), false, "tuoMa");
	var redBallArray = new Array();
	TuoMabcontrollRedBallCount();
	for (var i = 1; i <= TuoMabredBallCount; i += 1) {
		var redRandNum = parseInt(Math.random() * 33) + 1;

		if (contain(redBallArray, redRandNum)) {
			i -= 1;
			continue;
		} else if (contain(array, redRandNum)) {
			i -= 1;
			continue;
		} else {
			redBallArray[i - 1] = redRandNum;
		}
		if (redRandNum < 10) {
			$("#td_r_0" + redRandNum + "_tuoMa").click();
		} else {
			$("#td_r_" + redRandNum + "_tuoMa").click();
		}
	}
}
//胆拖区机选篮球
function TuoMaBlueRand() {
	for (var i = 1; i <= 16; i += 1) SetDanTuoRedBallState("b", GetBallNum(i), false, "");
	//SetBallState("b", GetBallNum(i), false);
	var blueBallArray = new Array();

	TuoMabcontrollBlueBallCount();
	for (var i = 1; i <= TuoMablueBallCount; i += 1) {

		var bluerandNum = parseInt(Math.random() * 16) + 1;

		if (contain(blueBallArray, bluerandNum)) {
			i -= 1;
			continue;
		} else {
			blueBallArray[i - 1] = bluerandNum;
		}

		if (bluerandNum < 10) {
			$("#td_b_0" + bluerandNum + "_").click();
		} else {
			$("#td_b_" + bluerandNum + "_").click();
		}
	}
}
//普通投注机选篮球 
function blueRand_nokill() {
	for (var i = 1; i <= 16; i += 1) SetBallState_nokill("b", GetBallNum(i), false, 'clearBall');
	var blueBallArray = new Array();

	controllBlueBallCount();
	for (var i = 1; i <= blueBallCount; i += 1) {

		var bluerandNum = parseInt(Math.random() * 16) + 1;

		if (contain(blueBallArray, bluerandNum)) {
			i -= 1;
			continue;
		} else {
			blueBallArray[i - 1] = bluerandNum;
		}

		if (bluerandNum < 10) {
			$("#td_b_0" + bluerandNum).click();
		} else {
			$("#td_b_" + bluerandNum).click();
		}
	}
}

//    
//    双色球单式和复式获取玩法值传给后台
//    @return 玩法
//    
function getWanfa() {
	var RedCount = 0;
	var BlueCount = 0;
	var wanfa = "";
	for (var i = 1; i <= 33; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}
	for (var i = 1; i <= 16; i++) {
		if (GetBallState("b", GetBallNum(i))) BlueCount++;
	}
	if (RedCount == 6 && BlueCount == 1) {
		wanfa = "00";
	} else if (RedCount > 6 && BlueCount == 1) {
		wanfa = "10";
	} else if (RedCount == 6 && BlueCount > 1) {
		wanfa = "20";
	} else if (RedCount > 6 && BlueCount > 1) {
		wanfa = "30";
	}
	return wanfa;
}

//普通投注添加到号码栏
function btn_2_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var tatol = ssq_GetLotteryInvestNum() * 2;
	if ($("#btn_2_Add").attr('isdisabled') == 'true') {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n请选择至少6个红球和至少1个蓝球，红球数+蓝球数至少为7。")));
		return;

	}
	if (ssq_GetLotteryInvestNum() < 1) {
		openAlert(decodeURI(EncodeUtf8("您选择的不是一注复式或单式票！")));
		return false;
	}
	if (tatol > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	ssq_CheckFull();
	var lotteryNumber = "";
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryInvest = ssq_GetLotteryInvestNum();
	var lotteryView = GetFrontLot();
	lotteryView = lotteryView.substring(0, lotteryView.length - 1);
	//判断玩法 //将字符串显示成2,2,2,2|3,3的样式，并显示在号码栏中
	var wanfa;
	var PU_view;
	if (getWanfa() == "00") {
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('单式')) + ']' + lotteryView + '</span><span class="jieguo1">' + decodeURI(EncodeUtf8('  1注　　共2元')) + '</span>';
	} else {
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('复式')) + ']' + lotteryView + '</span><span class="jieguo1">  ' + lotteryInvest + decodeURI(EncodeUtf8('注　　共')) + 2 * lotteryInvest + decodeURI(EncodeUtf8('元')) + '</span>';
	}
	var view = lotteryView + "|" + lotteryInvest + decodeURI(EncodeUtf8('注　　共')) + 2 * lotteryInvest + decodeURI(EncodeUtf8('元'));
	lotteryNumber = ssq_GetLotteryNumber();
	var opt = new Option(view, lotteryNumber);
	var frontLot = lotteryView;

	if (lotteryInvest == 1) {
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 1 * 2);
		click++;
	} else if (lotteryInvest > 1) {
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('zhushu', lotteryInvest);
		opt.setAttribute('money', 2 * lotteryInvest);
	}
	opt.setAttribute('wangFang', getWanfa());

	totalMoney += 2 * lotteryInvest;
	opt.setAttribute('delMoney', 2 * lotteryInvest);
	lotteryListSelect[0].options.add(opt);
	add_codes(PU_view, lotteryNumber);

	ClearSelect();
	$("#btn_2_Add").attr('isdisabled', 'true');
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * lotteryInvest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	totalLotteryInvest += lotteryInvest;
	$("#lab_Num").html(totalLotteryInvest);
	//		$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注，0元。")));
	ssq_CheckFull();
	if ($("#shuangseqiu_invert")) {
		//			$("#shuangseqiu_invert").html(decodeURI(EncodeUtf8("0注，0元。")));
		ssq_CheckFull();
	}
	if ($("#daiGouHemai") != null && $("#qishuList") != null && $("#daiGouHemai").val() == "zhuihao") {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	chooseBallToMoney();
}

//danTuo.js============================================================
//根据胆拖区球的类型点击后变换球的颜色
function danTuo_selectBall(BallColor, BallNum, BallType) {
	var Selected = danTuo_getBallState(BallColor, BallNum, BallType);

	if (Selected) {
		ssq_danTuo_setBallState(BallColor, BallNum, false, BallType);
		danTuo_checkFull();
		return;
	}
	ssq_danTuo_setBallState(BallColor, BallNum, true, BallType);
	if (BallColor == "r") {
		if (BallType == "danMa") {
			ssq_danTuo_setBallState(BallColor, BallNum, false, "tuoMa");
		} else {
			ssq_danTuo_setBallState(BallColor, BallNum, false, "danMa");
		}
	}
	danTuo_checkFull();
	return;
}
//获取胆拖投注选区中球是否被选中的状态
function danTuo_getBallState(BallColor, BallNum, BallType) {
	var isSelectedAttr;
	if (BallType != "") {
		isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_" + BallType).attr('isselected');
	} else {
		isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_").attr('isselected');
	}
	var isSelected = isSelectedAttr == 'true' ? true: false;

	return isSelected;
}
//设置胆拖区中球的状态
function ssq_danTuo_setBallState(BallColor, BallNum, SelectState, BallType) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_" + BallType);
	if (SelectState) {
		if (BallColor == 'r' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if (BallType == 'danMa') {
				if (getBallCount("r", "danMa", 33) > 4) {
					openAlert(decodeURI(EncodeUtf8("红球最多只能选择5个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_r';
		}
		if (BallColor == 'b' && BallType == "") {
			ball[0].className = 'ball_num_b';
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
	$('#y_zhu').html(invest);
	$('#y_yuan').html(p);
	var danmacount = getDanTuoBallCount('r', 'danMa', 33);
	var tuomacount = getDanTuoBallCount('r', 'tuoMa', 33);
	var bluecount = getDanTuoBallCount('b', '', 16);
	$('#y_danma').html(danmacount);
	$('#y_tuoma').html(tuomacount);
	$('#y_blueballs').html(bluecount);
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

// 
// 得到红球胆码拖码、蓝球胆码拖码的个数
// BallColor 球的颜色
// BallType 球的类型
// BallLength 球的个数
// /
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
	var firstRedCount = getBallCount('r', 'danMa', 33);
	var secondRedCount = getBallCount('r', 'tuoMa', 33);
	var BlueCount = getBallCount('b', '', 16);
	var InvestNum = 1;

	if (firstRedCount < 1 || secondRedCount < 2 || firstRedCount > 5 || secondRedCount > 20 || (firstRedCount + secondRedCount) < 7 || (firstRedCount + secondRedCount) > 25 || BlueCount < 1) {
		return 0;
	}
	if ((firstRedCount + secondRedCount) < 7 || (firstRedCount + secondRedCount) > 25) {
		return BlueCount;
	}

	InvestNum = zuhe(6 - firstRedCount, secondRedCount) * zuhe(1, BlueCount);
	return InvestNum;
}
function danTuo_getBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}
function getCheck_ballNumber() {
	var ssq_danTuo_code = "";
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	var blue_BallNum;
	var ball1;
	var red1;
	var red2;
	var blue;
	var blue1;
	for (var i = 1; i <= 33; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum, 'danMa')) {
			LotteryNumber += (danMa_BallNum + " ");
			if (danMa_BallNum.substring(0, 1) == "0") {
				ssq_danTuo_code += danMa_BallNum.substring(1, 2) + ",";
			} else {
				ssq_danTuo_code += danMa_BallNum + ",";
			}
		}
	}
	LotteryNumber += "* ";
	ssq_danTuo_code += "*";
	for (var i = 1; i <= 33; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (tuoMa_BallNum + " ");
			if (tuoMa_BallNum.substring(0, 1) == "0") {
				ssq_danTuo_code += tuoMa_BallNum.substring(1, 2) + ",";
			} else {
				ssq_danTuo_code += tuoMa_BallNum + ",";
			}
		}
	}
	LotteryNumber += "~ ";
	ssq_danTuo_code += "~";
	for (var i = 1; i <= 16; i++) {
		blue_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blue_BallNum, '')) {
			LotteryNumber += (blue_BallNum + " ");
			if (blue_BallNum.substring(0, 1) == "0") {
				ssq_danTuo_code += blue_BallNum.substring(1, 2) + ",";
			} else {
				ssq_danTuo_code += blue_BallNum + ",";
			}
		}

		ball1 = ssq_danTuo_code;
		var conBall1 = ball1.lastIndexOf("*");
		red1 = ssq_danTuo_code.substring(0, conBall1 - 1);

		var conBall2 = ssq_danTuo_code.lastIndexOf("*");
		var conBall3 = ssq_danTuo_code.lastIndexOf("~");
		red2 = ssq_danTuo_code.substring(conBall2, conBall3 - 1);

		var conBlue1 = ssq_danTuo_code.lastIndexOf("~");
		blue1 = ssq_danTuo_code.substring(conBlue1, ssq_danTuo_code.length);
		var conBlue = blue1.lastIndexOf(",");
		blue = blue1.substring(0, conBlue);
	}
	ssq_danTuo_code = red1 + red2 + blue + "^";
	return ssq_danTuo_code;
}
function getFrontLottery() {
	var LotteryNumber = "";
	var danMa_BallNum;
	var tuoMa_BallNum;
	var blue_BallNum;
	for (var i = 1; i <= 33; i++) {
		danMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', danMa_BallNum, 'danMa')) {
			LotteryNumber += (danMa_BallNum + " ");
		}
	}
	LotteryNumber += "* ";
	for (var i = 1; i <= 33; i++) {
		tuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', tuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (tuoMa_BallNum + " ");
		}
	}
	LotteryNumber += "~ ";
	for (var i = 1; i <= 16; i++) {
		blue_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blue_BallNum, '')) {
			LotteryNumber += (blue_BallNum + " ");
		}
	}
	return LotteryNumber;
}
function ClearCheck() {
	for (var i = 1; i <= 33; i++) ssq_danTuo_setBallState("r", danTuo_getBallNum(i), false, "danMa");
	for (var i = 1; i <= 33; i++) ssq_danTuo_setBallState("r", danTuo_getBallNum(i), false, "tuoMa");
	for (var i = 1; i <= 16; i++) ssq_danTuo_setBallState("b", danTuo_getBallNum(i), false, "");
	danTuo_checkFull();
}
//添加到号码蓝显示
function addDanTuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var firstRedCount = 0;
	var secondRedCount = 0;
	var BlueCount = 0;
	for (var i = 1; i <= 33; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'danMa')) firstRedCount++;
	}
	for (var i = 1; i <= 33; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'tuoMa')) secondRedCount++;
	}

	for (var i = 1; i <= 16; i++) {
		if (danTuo_getBallState("b", danTuo_getBallNum(i), '')) BlueCount++;
	}
	if (firstRedCount < 1 || firstRedCount > 5) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n胆码：至少选择1个，最多5个")));
		return false;
	}
	if (secondRedCount < 2 || secondRedCount > 20) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n拖码：至少选择2个，最多20个")));
		return false;
	}
	if ((firstRedCount + secondRedCount) < 7 || (firstRedCount + secondRedCount) > 25) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n胆码加拖码总数不能小于7个红球、不能大于25个红球")));
		return false;
	}
	if (BlueCount < 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n至少选择1个蓝球")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryNumber = getCheck_ballNumber(); //后台的串
	var zhuShu = getZhuShu();
	var lotteryView = getFrontLottery(); //前台的窜
	var frontLot = lotteryView;
	if (zhuShu > 1) {
		//lotteryView = decodeURI(EncodeUtf8('[胆拖] ')) + lotteryView + ' [' + zhuShu + decodeURI(EncodeUtf8('注，共')) + 
		lotteryView = '<span class="jieguo0">[<font class="red1">' + decodeURI(EncodeUtf8('胆')) + '</font>] ' + getSSQDanTuoBalls('r', 'danMa', 33) + '&nbsp;[<font class="red1">' + decodeURI(EncodeUtf8('拖')) + '</font>] ' + getSSQDanTuoBalls('r', 'tuoMa', 33) + '&nbsp;[<font class="blue">' + decodeURI(EncodeUtf8('蓝')) + '</font>] ' + getSSQDanTuoBalls('b', '', 16) + '</span><span class="jieguo1">  ' + zhuShu + decodeURI(EncodeUtf8('注　　共')) + 2 * zhuShu + decodeURI(EncodeUtf8('元')) + '</span>';
	}
	totalMoney += 2 * zhuShu;
	var view = getSSQDanTuoBalls('r', 'danMa', 33) + "|" + getSSQDanTuoBalls('r', 'tuoMa', 33) + "|" + getSSQDanTuoBalls('b', '', 16) + "|" + zhuShu + decodeURI(EncodeUtf8('注　　共')) + zhuShu * 2 + decodeURI(EncodeUtf8('元'));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	if (BlueCount == 1) {
		opt.setAttribute('wangFang', "40");
	} else {
		opt.setAttribute('wangFang', "50");
	}
	opt.setAttribute('zhushu', zhuShu);
	opt.setAttribute('money', 2 * zhuShu);
	opt.setAttribute('delMoney', 2 * zhuShu);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNumber);
	ClearCheck();

	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * zhuShu);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	totalLotteryInvest += zhuShu;
	$("#lab_Num").html(totalLotteryInvest);

	if ($("#daiGouHemai") != null && $("#qishuList") != null && $("#daiGouHemai").val() == "zhuihao") {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	chooseBallToMoney();
	return true;
}
//新增方法======================================================
//计算胆拖投注区红球，篮球，拖码，胆码的个数
function getDanTuoBallCount(BallColor, BallType, BallLength) {
	var ballcount = 0;
	for (var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i), BallType)) {

			ballcount++;
		}
	}
	return ballcount;
}
//计算普通投注区红球，篮球，拖码，胆码的个数
function getPuTongBallCount(BallColor, BallLength) {
	var ballcount = 0;
	for (var i = 1; i <= BallLength; i++) {
		if (GetBallState(BallColor, GetBallNum(i))) {

			ballcount++;
		}
	}
	return ballcount;
}

//胆拖投注区获取选中的号码球
function getSSQDanTuoBalls(BallColor, BallType, BallLength) {
	var ballnum = '';
	for (var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i), BallType)) {
			ballnum += danTuo_getBallNum(i) + ",";
		}
	}
	ballnum = ballnum.substring(0, ballnum.length - 1);
	return ballnum;
}

//清空所有选好区
function clear() {
	ClearCheck();
	ClearSelect();
}

////////////////////////////////////////定胆杀号/////////////////////////////////////////
//杀号的选球功能
function SelectBall(BallColor, BallNum) {
	var Selected = GetBallState_sh(BallColor, BallNum);
	if (Selected) {
		SetBallState_sh(BallColor, BallNum, false);
		getNum_sh(BallColor);
		ssq_CheckFull("sh");
		return;
	}
	SetBallState_sh(BallColor, BallNum, true);
	getNum_sh(BallColor);
	ssq_CheckFull();
	return;
}

//杀号的选球功能
function SetBallState_sh(BallColor, BallNum, SelectState, clearBall) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_sh");
	if (clearBall == null || clearBall == "") {
		if (SelectState) {

			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num_sh';
				ball.attr('isselected', 'false');
			} else if (ball[0].className == "ball_num_sh") {
				ball[0].className = 'ball_num';
				ball.attr('isselected', 'false');
			} else {
				ball[0].className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
				ball.attr('isselected', 'true');
			}

		} else {
			if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
				ball[0].className = 'ball_num_sh';
			} else {
				ball[0].className = 'ball_num';
			}
			ball.attr('isselected', 'false');
		}
	} else {
		ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}
//判断球是否是选中状态
function GetBallState_sh(BallColor, BallNum) {
	var isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_sh").attr('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}

//计算胆拖投注区红球，篮球，拖码，胆码的个数
//    function getDanTuoBallCount_sh(BallColor,BallType,BallLength){
//   	var ballcount=0;
//       for ( var i = 1; i <= BallLength; i++) {
//    		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i),BallType)){

//    			ballcount++;
//    		}
//    	}
//    	return ballcount;
//    }

//	    function ClearSelect_sh() {
//        for (var i = 1; i <= 33; i++){
//            SetBallState_sh("r", GetBallNum(i), false,'clearBall');
//			}
//        for (var i = 1; i <= 16; i++){
//            SetBallState_sh("b", GetBallNum(i), false,'clearBall');
//			}
//       	ssq_CheckFull('sh');
//    }
//得到红球选中个数
function GetRedBallSelectedNum_sh() {
	var Count = 0;
	for (var i = 1; i <= 33; i++) {
		if (GetBallState_sh("r", GetBallNum(i))) Count++;
	}
	return Count;
}
//得到蓝球选中个数
function GetBlueBallSelectedNum_sh() {
	var Count = 0;
	for (var i = 1; i <= 16; i++) {
		if (GetBallState_sh("b", GetBallNum(i))) Count++;
	}
	return Count;
}

//得到机选红球或蓝球个数，并将机选数值减少相应个数

function getNum_shs(ballColor, BallNum) {
	if (ballColor == 'r') {
		////////////红球//////////////////
		//得到选中球的个数
		/*var number = GetRedBallSelectedNum_sh();  
		if(number>5){
				//改变球的状态
				$("#td_"+ballColor+"_"+BallNum+"_sh").attr("class","ball_num");
				$("#td_"+ballColor+"_"+BallNum+"_sh").attr('isselected','false');
				
				$("#tishiyu").text(decodeURI(EncodeUtf8("您好，红球最多只能定5个胆码，红球（6）是否作为杀号选择？")));
				$("#ballColor").val(ballColor);
				$("#ballNum").val(BallNum);
				if($("#checkState").val()=='0'){
					openShaHao();
					return;
				};
				$("#td_"+ballColor+"_"+BallNum+"_sh").attr("class","ball_num_sh");
				$("#td_"+ballColor+"_"+BallNum+"_sh").attr('isselected','false');
				return ;
		};*/
		//获取杀号球
		var killBall;
		for (var i = 0; i < 33; i++) killBall = getUserBlackNum('td_r_', 33, 'ball_num_sh', 'sh');
		var length = killBall.length;
		/*if(length>27){
			openAlert(decodeURI(EncodeUtf8("对不起，红球最多只能杀27个号码！")));
		}*/
		var rednum = $("#redBallCount_sh"); //机选红球数
		var val = rednum.val() - 1;
		if (val >= 0) {
			rednum.prepend("<option value='" + val + "' selected>" + val + "</option>");
			$("#redBallCount_sh option:last").remove();
			setTimeout(function() {
				$("#redBallCount_sh").val(val);
			},
			1);
		}
	} else if (ballColor == 'b') {
		////////////蓝球//////////////////
		//得到选中球的个数
		//var number = GetRedBallSelectedNum_sh();  

		//获取杀号球
		var killBall;
		for (var i = 0; i < 16; i++) killBall = getUserBlackNum('td_b_', 16, 'ball_num_sh', 'sh');
		var length = killBall.length;
		/*if(length>15){
			openAlert(decodeURI(EncodeUtf8("蓝球最多只能杀15个号码！")));
		}*/
		var rednum = $("#blueBallCount_sh"); //机选蓝球数
		var val = rednum.val() - 1;
		if (val >= 0) {
			rednum.prepend("<option value='" + val + "' selected>" + val + "</option>");
			$("#blueBallCount_sh option:last").remove();
			setTimeout(function() {
				$("#blueBallCount_sh").val(val);
			},
			1);
		}
	}

}
//计算注数
function ssq_GetLotteryInvestNum_sh(RedCount, BlueCount) {
	if ((RedCount < 6) || (BlueCount < 1)) {
		return 0;
	} else if (RedCount == 6) {
		var InvestNum = BlueCount;
		return InvestNum;
	} else {
		InvestNum = 1;
		for (var k = 7; k <= RedCount; k++) InvestNum *= k;

		for (var d = 2; d <= (RedCount - 6); d++) InvestNum = Math.round(InvestNum / d);
		InvestNum *= BlueCount;

		return InvestNum;
	}
}

//（杀号）双色球单式和复式获取玩法值传给后台
//    @return 玩法
//    
function getWanfa_sh(RedCount, BlueCount) {
	var wanfa = "";
	if (parseInt(RedCount) == 6 && parseInt(BlueCount) == 1) {
		wanfa = "00";
	} else if (parseInt(RedCount) > 6 && parseInt(BlueCount) == 1) {
		wanfa = "10";
	} else if (parseInt(RedCount) == 6 && parseInt(BlueCount) > 1) {
		wanfa = "20";
	} else if (parseInt(RedCount) > 6 && parseInt(BlueCount) > 1) {
		wanfa = "30";
	}
	return wanfa;
}

//有杀号的机选功能  (暂时未使用)
function redRand() {
	//1.提取选中的红球和蓝球，在机选时排除
	//var redBallNumCodes = getUserSelectBall('r',33);//alert(redBallNumCodes.length);
	//var blueBallNumCodes = getUserSelectBall('b',16);
	for (var i = 1; i <= 33; i += 1) {
		SetBallState_sh("r", GetBallNum(i), false, 'clearBall');
	};
	//获取选的球数
	var rednum = $("#redBallCount_sh").val();
	//var  bluenum = $("#blueBallCount_sh").val();
	//2.调用算球的方法随机生成的红球和蓝球
	var finalRed = getRandBall_nokill('td_', '', rednum, 'r', 33, 'ball_num', 'ball_num_sh', 27, 'sh');
	//var finalBlue = getRandBall_nokill('td_','',bluenum,'b',16,'ball_num','ball_num_sh',15,'sh');
	//var redBallArray=new Array();

	//for(var i=1;i<=rednum;i+=1){
	//	var redRandNum=parseInt(Math.random()*33)+1;

	//	if(contain(redBallArray,redRandNum)){
	//		i-=1;
	//		continue;
	//	}else{
	//		redBallArray[i-1]=redRandNum;	
	//	}
	//	if(redRandNum<10){
	//		$("#td_r_0"+redRandNum+"_sh").click();
	//	}else{
	//		$("#td_r_"+redRandNum+"_sh").click();
	//	}
	//}
	return finalRed;
}
//带有杀号功能的机选(暂时未使用)
function blueRand() {
	for (var i = 1; i <= 16; i += 1) SetBallState_sh("b", GetBallNum(i), false, 'clearBall');
	var blueBallArray = new Array();
	var bluenum = $("#blueBallCount_sh").val();
	var finalBlue = getRandBall_nokill('td_', '', bluenum, 'b', 16, 'ball_num', 'ball_num_sh', 15, 'sh');
	//for(var i=1;i<=bluenum;i+=1){

	//var bluerandNum=parseInt(Math.random()*16)+1;

	//if(contain(blueBallArray,bluerandNum)){
	//	i-=1;
	//	continue;
	//}else{
	//	blueBallArray[i-1]=bluerandNum;	
	//}

	//	if(bluerandNum<10){
	//		$("#td_b_0"+bluerandNum+"_sh").click();
	//	}else{
	//		$("#td_b_"+bluerandNum+"_sh").click();
	//	}
	//}
	return finalBlue;
}

//计算杀号投注区红球，篮球，拖码，胆码的个数   **********
function getPuTongBallCount_sh(BallColor, BallLength) {
	var ballcount = 0;
	for (var i = 1; i <= BallLength; i++) {
		if (GetBallState_sh(BallColor, GetBallNum(i))) {

			ballcount++;
		}
	}
	return ballcount;
}
//杀号机选中获取用户选中的篮球以及红球  
function GetFrontLot_sh() {
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 33; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState_sh("r", BallNum)) {
			LotteryNumber += (BallNum + ",");
		}
	}
	LotteryNumber = LotteryNumber.substring(0, LotteryNumber.length - 1);
	LotteryNumber += "|";
	for (var i = 1; i <= 16; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState_sh("b", BallNum)) {
			LotteryNumber += (BallNum + ",");
		}
	}
	return LotteryNumber;
}

//将号码设置成杀号状态
function addShahao() {
	//得到check的状态和隐藏域的值
	var state = $("#checkState").val();
	var ballColor = $("#ballColor").val();
	var ballNum = $("#ballNum").val();

	if (state == '1') {
		$("#td_" + ballColor + "_" + ballNum + "_sh").attr("class", 'ball_num_sh');
	} else {
		$("#td_" + ballColor + "_" + ballNum + "_sh").attr("class", 'ball_num_sh');
		$("#td_" + ballColor + "_" + ballNum + "_sh").attr("selected", false);
	}
	closeAjaxLogin('openshahao');
}

//根据checkbox的状态设置隐藏域的值  1为选中  0为未选中
function checkboxstate() {
	var state = $("#checkState").val();
	if (state == '1') {
		$("#checkState").val("0");
	} else {
		$("#checkState").val("1");
	}

}
//删除指定值不是value的option
function deleSelect(id, value) {
	while (true) {
		var getvalues = $("#" + id).val();
		if (getvalues == value) {
			break;
		} else {
			$("#" + id + " option[value='" + getvalues + "']").remove();
			setTimeout(function() {
				$("#" + id).val(value);
			},
			1);
		}
	}
}

//增加option
function addSelect(id, value) {
	while (true) {
		var getvalues = $("#" + id + " option:last").val();
		if (getvalues == value) {
			break;
		} else {
			var i = parseInt(getvalues) + 1;
			$("#" + id).append("<option value='" + i + "'>" + i + "</option>");
		}
	}
}

//清除选号区
function ClearRedAndBlue_sh() {
	for (var i = 1; i <= 33; i++) {
		SetBallState_sh("r", GetBallNum(i), false, 'clearBall');
	};
	$("#checkState").val("0"); //将隐藏域的值设为默认值0
	for (var i = 1; i <= 16; i++) {
		SetBallState_sh("b", GetBallNum(i), false, 'clearBall');
	};
	getNum_sh("r");
	getNum_sh("b");
	ssq_CheckFull('sh');

	//clearRedSelect('sh');
	//clearBlueSelect('sh');
	//ssq_CheckFull('sh');
}
//获取杀号红球的个数
function getKillRedNum() {
	var count;
	for (var i = 0; i < 33; i++) {
		count = getUserBlackNum('td_r_', 33, 'ball_num_sh', 'sh');
	}

	return count.length;
}
//获取杀号蓝球的个数
function getKillBlueNum() {
	var count;
	for (var i = 0; i < 16; i++) {
		count = getUserBlackNum('td_b_', 16, 'ball_num_sh', 'sh');
	}

	return count.length;
}
//动态的改变select选框的值
//思路：获取用户选中球的个数，以及用户杀号的个数，来决定select选框中的最大最小值
function getNum_sh(ballColor) {
	//1.获取杀号的红球个数
	var kill_rednum = getKillRedNum();
	//1.获取杀号的蓝球个数
	var kill_bluenum = getKillBlueNum();
	//1.获取选号的红球个数
	var select_rednum = GetRedBallSelectedNum_sh();
	//1.获取选号的篮球个数
	var select_bluenum = GetBlueBallSelectedNum_sh();

	//红球选框的最小值
	var redSelect_min = 6 - select_rednum;
	if (redSelect_min <= 0) {
		redSelect_min = 0;
	}
	//红球选框的最大值
	var redSelect_max = 16 - select_rednum;
	//未选中的红球
	var redSelect_left = 33 - select_rednum - kill_rednum;
	//如果未选中的红球小于最大值，则最大值就是未选中的红的个数
	if (redSelect_max > redSelect_left) {
		redSelect_max = redSelect_left;
	}
	//如果最大值小于最小值的时候，将最小值赋给最大值，最小值就等于剩余为选的球的个数
	if (redSelect_min >= redSelect_max) {
		redSelect_max = redSelect_left;
		redSelect_min = redSelect_left;
	}
	if (redSelect_max <= 0) {
		redSelect_max = 0;
	}
	//蓝球选框的最小值
	var blueSelect_min = 1 - select_bluenum;
	if (blueSelect_min <= 0) {
		blueSelect_min = 0;
	}
	//蓝球选框的最大值
	var blueSelect_max = 16 - select_bluenum;
	var blueSelect_left = 16 - select_bluenum - kill_bluenum;
	if (blueSelect_max > blueSelect_left) {
		blueSelect_max = blueSelect_left;
	}
	//如果最大值小于最小值的时候，将最小值赋给最大值，最小值就等于剩余为选的球的个数
	if (blueSelect_min >= blueSelect_max) {
		blueSelect_max = blueSelect_left;
		blueSelect_min = blueSelect_left;
	}
	if (blueSelect_max <= 0) {
		blueSelect_max = 0;
	}
	//获取红球选框对象
	var redObj = $("#redBallCount_sh");
	//获取红球选框对象
	var blueObj = $("#blueBallCount_sh ");
	if (ballColor.indexOf("r") > -1) {
		while ($("#redBallCount_sh option").length) {
			$("#redBallCount_sh option").remove();
		}
		for (var i = redSelect_min; i <= redSelect_max; i++) {
			redObj.append("<option value='" + i + "'  >" + i + "</option>");
		}
	} else {

		while ($("#blueBallCount_sh option").length) {
			$("#blueBallCount_sh option").remove();
		}

		for (var i = blueSelect_min; i <= blueSelect_max; i++) {
			blueObj.append("<option value='" + i + "'  >" + i + "</option>");
		}
	}

}


/**********************************************添加了全年追号套餐的内容*********************************************************/
//双色球全年追号套餐机选
function zc_blueRand(blueBallCount) {
	for (var i = 1; i <= 16; i += 1) SetBallState_nokill("b", GetBallNum(i), false, 'clearBall');
	var blueBallArray = new Array();

	for (var i = 1; i <= blueBallCount; i += 1) {

		var bluerandNum = parseInt(Math.random() * 16) + 1;

		if (contain(blueBallArray, bluerandNum)) {
			i -= 1;
			continue;
		} else {
			blueBallArray[i - 1] = bluerandNum;
		}

		if (bluerandNum < 10) {
			$("#td_b_0" + bluerandNum).click();
		} else {
			$("#td_b_" + bluerandNum).click();
		}
	}
}
function zc_redRand(redBallCount) {
	for (var i = 1; i <= 33; i += 1) SetBallState_nokill("r", GetBallNum(i), false, 'clearBall');
	var redBallArray = new Array();
	for (var i = 1; i <= redBallCount; i += 1) {
		var redRandNum = parseInt(Math.random() * 33) + 1;

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
//全年追号套餐投注添加到号码栏
function btn_2_AddClick_allYears() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	ssq_CheckFull();
	var lotteryNumber = "";
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryInvest = ssq_GetLotteryInvestNum();
	var lotteryView = GetFrontLot();
	lotteryView = lotteryView.substring(0, lotteryView.length - 1);
	//判断玩法 //将字符串显示成2,2,2,2|3,3的样式，并显示在号码栏中
	var wanfa;
	var PU_view;
	if (getWanfa() == "00") {
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('单式')) + ']' + lotteryView + '</span><span class="jieguo1">' + decodeURI(EncodeUtf8('  1注　　共2元')) + '</span>';
	} else {
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('复式')) + ']' + lotteryView + '</span><span class="jieguo1">  ' + lotteryInvest + decodeURI(EncodeUtf8('注　　共')) + 2 * lotteryInvest + decodeURI(EncodeUtf8('元')) + '</span>';
	}
	var view = lotteryView + "|" + lotteryInvest + decodeURI(EncodeUtf8('注　　共')) + 2 * lotteryInvest + decodeURI(EncodeUtf8('元'));
	lotteryNumber = ssq_GetLotteryNumber();
	var opt = new Option(view, lotteryNumber);
	var frontLot = lotteryView;

	if (lotteryInvest == 1) {
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 1 * 2);
		click++;
	} else if (lotteryInvest > 1) {
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('zhushu', lotteryInvest);
		opt.setAttribute('money', 2 * lotteryInvest);
	}
	opt.setAttribute('wangFang', getWanfa());

	totalMoney += 2 * lotteryInvest;
	opt.setAttribute('delMoney', 2 * lotteryInvest);
	lotteryListSelect[0].options.add(opt);
	add_codes(PU_view, lotteryNumber);

	ClearSelect();
	$("#btn_2_Add").attr('isdisabled', 'true');
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(2 * lotteryInvest);
	var partial_money = $("#investField").html();
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	totalLotteryInvest += lotteryInvest;
	$("#lab_Num").html(totalLotteryInvest);
	//		$("#lab_2_Selected").html(decodeURI(EncodeUtf8("0注，0元。")));
	ssq_CheckFull();
	if ($("#shuangseqiu_invert")) {
		//			$("#shuangseqiu_invert").html(decodeURI(EncodeUtf8("0注，0元。")));
		ssq_CheckFull();
	}
	setQishuList(55,'152',false,'qishuList','F47104');
	/*if ($("#daiGouHemai") != null && $("#qishuList") != null && $("#daiGouHemai").val() == "zhuihao") {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}*/
}