//--------------------------dlt.js开始------------------------------

//生肖乐 与  普通投注之间 切换

var changeMark = 1;
function shengxiaoleChange() {
	if (changeMark == 1) {
		btn_ClearClick();
		changeMark = 0;
	}
}
function putongChange() {
	if (changeMark == 0) {
		btn_ClearClick();
		changeMark = 1;
	}
}

//单注的金额
var oneMoney = 2;
function dltCheckBox() {
	//判断多选框是否被选中
	if ($("#oneMoney").attr("checked") == 'checked'&& $("#zhuijia").is(":visible")) {
		oneMoney = 3;
	} else {
		oneMoney = 2;
	}
}

//大乐透智能机选功能
function btn_2_RandManyClick_ddsh(n) {
	//是否追加
	var isZhuijia = 0;
	//玩法
	var wanfa;
	//获取页面上的金额
	totalMoney = $("#investField").val();
	//循环页面传入的随机的组数添加进option中并在页面显示（一组号码可能是复式也可能是单式）
	for (var i = 0; i < parseInt(n); i++) {

		//提取选中的红球和蓝球
		var redBallNumCodes = getUserSelectBall('r', 35, "sh"); //alert(redBallNumCodes.length);
		var blueBallNumCodes = getUserSelectBall('b', 12, "sh");

		//获取机选的红球的个数
		var hongBall = parseInt($("#ddsh_qianQuBall").val()) + redBallNumCodes.length;
		var lanBall = parseInt($("#ddsh_houQuBall").val()) + blueBallNumCodes.length;
		//提示红球的个数限制
		if (hongBall > 35) {
			openAlert(decodeURI(EncodeUtf8("您好，请正确选择红球的个数！")));
			return;
		}

		//提示蓝球的个数限制
		if (lanBall > 12) {
			openAlert(decodeURI(EncodeUtf8("您好，请正确选择蓝球的个数！")));
			return;
		}

		//调用算球的方法随机生成的红球和蓝球
		var finalRed = getRandBall('td_', redBallNumCodes, hongBall, 'r', 35, 'ball_num', 'ball_num_sh', 30, 'sh');
		var finalBlue = getRandBall('td_', blueBallNumCodes, lanBall, 'b', 12, 'ball_num', 'ball_num_sh', 10, 'sh');
		//获取机选的注数
		totalLotteryInvest += GetLotteryInvestNum_ddsh(finalRed.length, finalBlue.length);
		//获取一组号码的注数
		var OneInvest = GetLotteryInvestNum_ddsh(finalRed.length, finalBlue.length);
		//得到一组机选号码的金额
		var OneMoeny = OneInvest * 2;
		//如果机选
		if (finalRed.length == 5 && finalBlue.length == 2) {
			wanfa = "0";
		} else {
			wanfa = "1";
		}
		//提示定胆的个数限制
		if (ddsh_GetRedBallSelectedNum() > 4) {
			openAlert(decodeURI(EncodeUtf8("您好，前区最多只能定4个胆码！")));
			return;
		}

		//提示前区杀号球的限制
		if (killRedBallNum() > 30) {
			openAlert(decodeURI(EncodeUtf8("您好，前区最多可以杀30个号码球！")));
			return;
		}
		//提示后区杀号球的限制
		if (killBlueBallNum() > 10) {
			openAlert(decodeURI(EncodeUtf8("您好，后区最多可以杀10个号码球！")));
			return;
		}
		if (OneMoeny > 20000) {
			openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
			return;

		}
		//5.拼接显示注码和传递给后台的注码
		var lottery = finalRed + '|' + finalBlue;
		var lottery_view;
		var view;
		if (wanfa == "0") {
			lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + finalRed + '|' + finalBlue + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　")) + "</span>";
		} else {
			lottery_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8("复式")) + "]" + finalRed + '|' + finalBlue + "</span><span class='jieguo1'>  " + OneInvest + decodeURI(EncodeUtf8("注")) + "</span>";
			view = finalRed + '|' + finalBlue + '|' + OneInvest + decodeURI(EncodeUtf8("注"));
		}
		var lotteryNumber = getEndCodes(finalRed + "") + "-" + getEndCodes(finalBlue + "") + ";";
		//将值设置到下拉列表中获取
		var lotteryListSelect = $("#list_LotteryNumber");
		var opt = new Option(view, lotteryNumber);
		opt.setAttribute('allLot', lottery);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', wanfa);
		opt.setAttribute('zhushu', OneInvest);
		if ($("#oneMoney").attr("checked") == 'checked' && $("#zhuijia").is(":visible")) {
			opt.setAttribute('money', parseInt(OneMoeny) + parseInt(OneInvest));
			opt.setAttribute('delMoney', parseInt(OneMoeny) + parseInt(OneInvest));
			isZhuijia = 1;
		} else {
			opt.setAttribute('money', parseInt(OneMoeny));
			opt.setAttribute('delMoney', parseInt(OneMoeny));
		}
		lotteryListSelect[0].options.add(opt);
		//将得到的值设置到层中并在页面显示
		add_codes(lottery_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);

	}

	//调用公共方法让购彩以后的金额得到
	getFinalMoney();
	//设置页面上的购彩金额和购买后的金额
	//计算投注总金额
	totalMoney = totalLotteryInvest * 2;
	$("#investField").html(totalMoney + (isZhuijia * n * Number($("#tb_Multiple").val())));
	$("#current_money").html(totalMoney + (isZhuijia * n * Number($("#tb_Multiple").val())));
	chooseBallToMoney();
}

//生肖乐智能机选
function animalRand(n) {
	//1.获取注数和总金额在页面上显示。
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());
	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	//2.根据用户随机的数算得总注数
	totalLotteryInvest += parseInt(n);
	//算得总金额并将值设置并显示
	totalMoney += parseInt(n) * 2 * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	//调用公共方法让购彩以后的金额得到
	getFinalMoney();

	//3.获取选中的红色球
	var blueBallNumCodes = new Array();
	var codes = GetAnimal_FrontLot(",");
	if (codes != "") {
		var betcodes = codes.substring(0, GetAnimal_FrontLot(",").length - 1).split(",");
		for (var i = 0; i < betcodes.length; i++) {
			blueBallNumCodes.push(betcodes[i]);
		}
	}

	for (var i = 0; i < parseInt(n); i++) {

		//4.调用算球的方法随机生成的红球
		var finalBlue = getRandBall('shxl_', blueBallNumCodes, 2, 'r', 12, 'ball_numsxl', 'ball_numsxl_shh', 10);
		var lotteryNumber = getEndCodes(finalBlue + "");
		var dd_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + finalBlue + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
		lotteryNumber = lotteryNumber + ";";
		//将值设置到下拉列表中获取
		var lotteryListSelect = $("#list_LotteryNumber");
		var opt = new Option(finalBlue, lotteryNumber);
		opt.setAttribute('allLot', finalBlue);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "30");
		opt.setAttribute('zhushu', "1");
		opt.setAttribute('money', 2);
		opt.setAttribute('delMoney', 2);
		lotteryListSelect[0].options.add(opt);
		//将得到的值设置到层中并在页面显示
		add_codes(dd_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	chooseBallToMoney();
}

//大乐透机选号码
function rollJx1(minRed, redCount, minBlue, blueCount, sort, order, redLottery, blueLottery, lotteryCount, redDanNum, blueDanNum) {
	var redZero = minRed == 0 ? 1 : 0;
	var blueZero = minBlue == 0 ? 1 : 0;
	var redTable = '';
	var blueTable = '';
	var bigArray = new Array();
	//获取指定的机选前区个数的号码数组
	for (var a = 0; a < lotteryCount; a++) {
		redTable = GetBallNum(GetRandNumber(redCount) - redZero);
		for (var i = 1; redCount > 0 && i < redLottery; i++) {
			var temp = GetBallNum(GetRandNumber(redCount) - redZero);
			while (!order && redTable.indexOf(temp) >= 0) temp = GetBallNum(GetRandNumber(redCount) - redZero);
			redTable += '|' + temp;
		}
		//前区机选号码与用户选择的号码进行比较
		var redDanNumCodes = (redDanNum + "").split(",");
		for (var r = 0; r < redDanNumCodes.length; r++) {
			if (redTable == redDanNumCodes[r]) {
				redTable = Number(redTable) + 1;
				if (redTable < 10) {
					redTable = "0" + redTable;
				}
			}
		}

		blueTable = GetBallNum(GetRandNumber(blueCount) - blueZero);
		for (var i = 1; blueCount > 0 && i < blueLottery; i++) {
			var temp = GetBallNum(GetRandNumber(blueCount) - blueZero);
			while (!order && blueTable.indexOf(temp) >= 0) temp = GetBallNum(GetRandNumber(blueCount) - blueZero);
			blueTable += '|' + temp;
		}
		//后区机选号码与用户选择的号码进行比较
		var blueDanNumCodes = (blueDanNum + "").split(",");
		for (var r = 0; r < blueDanNumCodes.length; r++) {
			if (blueTable == blueDanNumCodes[r]) {
				blueTable = Number(blueTable) + 1;
				if (blueTable < 10) {
					blueTable = "0" + blueTable;
				}
			}
		}

		var redArray = (redTable + "").split('|');
		var blueArray = (blueTable + "").split('|');
		redArray.sort();
		blueArray.sort();
		bigArray.push(redArray);
		if (blueCount > 0) bigArray.push(blueArray);
	}

	return bigArray;
}

//获取大乐透选中的红球
function getDltRedDanNum() {
	var redDanNum = "";
	var BallNum;
	for (var i = 1; i <= 35; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) {
			redDanNum += (BallNum + ",");
		}
	}
	redDanNum = redDanNum.substring(0, redDanNum.length - 1);
	return redDanNum;
}

//获取大乐透选中的蓝球
function getDltBlueDanNum() {
	var blueDanNum = "";
	var BallNum;
	for (var i = 1; i <= 12; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("b", BallNum)) {
			blueDanNum += (BallNum + ",");
		}
	}
	blueDanNum = blueDanNum.substring(0, blueDanNum.length - 1);
	return blueDanNum;
}

//大乐透定胆机选
function ddjx_dlt_Rand(n) {
	//1.提取选中的前区和后区并算得共多少前区个数和后区个数
	var redBallNumCodes = getUserSelectBall('r', 35, '');
	var blueBallNumCodes = getUserSelectBall('b', 12, '');
	var redBallNumLen = redBallNumCodes.length; //获取选中前区的个数
	var blueBallNumLen = blueBallNumCodes.length; //获取选中后区的个数
	if (getUserSelectBall('r', 35, '') == "") {
		redBallNumLen = 0;
	}
	if (getUserSelectBall('b', 12, '') == "") {
		blueBallNumLen = 0;
	}

	//2.判断用户是否选择胆码
	if (redBallNumLen == 0 && blueBallNumLen == 0) {
		openAlert(decodeURI(EncodeUtf8("请您至少选择1个胆码再机选。")));
		return;
	}
	//3.对个数进行验证
	if (redBallNumLen > 5) {
		openAlert(decodeURI(EncodeUtf8("您所选的前区胆码不能超过5个。")));
		return;
	}
	if (blueBallNumLen > 2) {
		openAlert(decodeURI(EncodeUtf8("您所选的后区胆码不能超过2个。")));
		return;
	}
	if (redBallNumLen + blueBallNumLen > 6) {
		openAlert(decodeURI(EncodeUtf8("您最多只能选择6个胆码（前区+后区）。")));
		return;
	}
	//4.随机算注码,拼接注码串
	var lotteryListSelect = $("#list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		//提取选中的红球和蓝球
		var redBallNumCodes = getUserSelectBall('r', 35, '');
		var blueBallNumCodes = getUserSelectBall('b', 12, '');
		//调用算球的方法随机生成的红球和蓝球
		var finalRed = getRandBall('td_', redBallNumCodes, 5, 'r', 35, 'ball_num', 'ball_num_sh', 30, '');
		var finalBlue = getRandBall('td_', blueBallNumCodes, 2, 'b', 12, 'ball_num', 'ball_num_sh', 10, '');
		var dd_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + finalRed + ' | ' + finalBlue + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　")) + "</span>";
		//拼接显示注码和传递给后台的注码
		var lottery = finalRed + '|' + finalBlue;
		var lotteryNumber = getEndCodes(finalRed + "") + "-" + getEndCodes(finalBlue + "") + ";";
		var opt = new Option(lottery, lotteryNumber);
		opt.setAttribute('allLot', lottery);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		if ($("#oneMoney").attr("checked") == 'checked' && $("#zhuijia").is(":visible")) {
			opt.setAttribute('money', 3);
			opt.setAttribute('delMoney', 3);
		} else {
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
		}
		lotteryListSelect[0].options.add(opt);
		add_codes(dd_view, lotteryNumber);
	}

	//5.算得的注数、金额
	dltCheckBox(); //判断是否追加并获取追加的金额
	totalLotteryInvest += parseInt(n);
	totalMoney += parseInt(n) * oneMoney * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	$("#lab_Num").html(totalLotteryInvest);
	getFinalMoney(); //调用公共方法让购彩以后的金额得到并将其转换为两位小数
	chooseBallToMoney();

}

//大乐透普通机选
function btn_2_RandManyClick(n) {
	if (parseInt(n) == 5) {
		click += 5;
	} else {
		click++;
	}
	dltCheckBox(); //判断是否追加
	totalLotteryInvest += parseInt(n);
	totalMoney += parseInt(n) * oneMoney * Number($("#tb_Multiple").val());
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	var arr = rollJx1(5, 35, 2, 12, true, false, 5, 2, parseInt(n));
	ClearSelect();
	var lotteryListSelect = $("#list_LotteryNumber");
	for (var i = 0; i < parseInt(n); i++) {
		var arrRed = "";
		var arrBlue = "";
		var arr1 = arr[2 * i];
		var arr2 = arr[2 * i + 1];
		var lottery = arr1.join(' ') + ' + ' + arr2.join(' ');
		var frontLot = lottery;

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
		lotteryNumber += red + "-" + blue + ";";
		var dd_view = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('单式')) + "]" + arr1.join(',') + ' | ' + arr2.join(',') + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　")) + "</span>";
		var opt = new Option(frontLot, lotteryNumber);
		opt.setAttribute('allLot', frontLot);
		opt.setAttribute('backLot', lotteryNumber);
		opt.setAttribute('wangFang', "0");
		opt.setAttribute('zhushu', "1");
		if ($("#oneMoney").attr("checked") == 'checked' && $("#zhuijia").is(":visible")) {
			opt.setAttribute('money', 3);
			opt.setAttribute('delMoney', 3);
		} else {
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
		}
		lotteryListSelect[0].options.add(opt);
		add_codes(dd_view, lotteryNumber);
		$("#lab_Num").html(totalLotteryInvest);
	}
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
	chooseBallToMoney();
}
////大乐透生肖乐机选号码
//function rollJx1_animal(minBlue, blueCount, sort, order,blueLottery,lotteryCount,blueDanNum) {
//	var blueZero = minBlue == 0 ? 1 : 0;
//	var bigArray = new Array();
//	for ( var a = 0; a < lotteryCount; a++) {
//		var blueTable = getRollBall(blueLottery,blueCount,blueZero,blueDanNum,order);//获取蓝球随机号码
//		var blueArray = (blueTable+"").split('|');
//		blueArray.sort();
//		if (blueCount > 0)bigArray.push(blueArray);
//	}
//
//	return bigArray;
//}
//
//
//
//生肖乐定胆机选
//function ddjx_animal_Rand(n){
//	
//	 //提取选中的前区和后区并算得共多少前区个数和后区个数
//	var codes = GetAnimal_FrontLot(",").substring(0,GetAnimal_FrontLot(",").length-1);
//	var blueBallNumCodes = codes.split(",");
//	var blueBallNumLen = blueBallNumCodes.length;//获取选中后区的个数
//	if(blueBallNumCodes==""){blueBallNumLen=0;}
//	var blueLen = 2-parseInt(blueBallNumLen);
//	
//   if(blueBallNumCodes==""){
//	   openAlert(decodeURI(EncodeUtf8("请您至少选择1个胆码再机选。")));
//	   return;
//   }
//   if(GetAnimal_FrontLot("").length>2){
//	   openAlert(decodeURI(EncodeUtf8("您最多只能选择1个胆码")));
//       return;
//   }
//   var blackBall = getUserBlackNum('shxl_r_',12,'ball_numsxl_shh');//得到大乐透生肖乐的黑色球
//   if(blackBall.length>10){
//	   openAlert(decodeURI(EncodeUtf8("至少保留两个号码!")));
//       return;
//   }
//
//	var i=0;
//    var lotteryListSelect = $("#list_LotteryNumber");
//    dltCheckBox();//判断是否追加
//	totalLotteryInvest+=parseInt(n);
//	totalMoney+=parseInt(n)*oneMoney*Number($("#tb_Multiple").val());
//	$("#investField").html(totalMoney);
//	$("#current_money").html(totalMoney);
//    getFinalMoney();//调用公共方法让购彩以后的金额得到并将其转换为两位小数
//    
//    var lotteryListSelect = $("#list_LotteryNumber");
//	blackBall.push(blueBallNumCodes);
//    var arr = rollJx1_animal(1, 12, true, false,blueLen,parseInt(n), blackBall);
//    for(var i = 0;i < parseInt(n);i++){
//
//		//如果选择的后区为空取机选的后区
//		var arr2="";
//		if(blueBallNumLen == 2){arr2=blueBallNumCodes;}
//		else{arr2=arr[i]; arr2.push(blueBallNumCodes);}
//		arr2=getCodesSort(arr2);
//		
//		//传入后台Action中的注码
//        var lotteryNumber =getEndCodes(arr2);
//		var opt = new Option(arr2,lotteryNumber);
//		opt.setAttribute('allLot',arr2);
//		opt.setAttribute('backLot',lotteryNumber);
//		opt.setAttribute('wangFang',"30");
//		opt.setAttribute('zhushu',"1");
//		opt.setAttribute('money',2);
//		opt.setAttribute('delMoney', 2);
//		lotteryListSelect[0].options.add(opt); 
//		add_codes(arr2,lotteryNumber);
//		$("#lab_Num").html( totalLotteryInvest);
//    }
//}
//
//
////生肖乐随机生成号码
////按num个数生成随机号码
//function animalRand(n){
//	var oldMoney = parseInt($("#investField").html());
//	var oldLabNum = parseInt($("#lab_Num").html());
//	
//	if(oldMoney != 0){
//		totalMoney = oldMoney;
//		totalLotteryInvest = oldLabNum;
//	}
//
//	dltCheckBox();//判断是否追加
//	totalLotteryInvest+=parseInt(n);
//	totalMoney+=parseInt(n)*oneMoney*Number($("#tb_Multiple").val());
//	$("#investField").html(totalMoney);
//	$("#current_money").html(totalMoney);
//    //调用公共方法让购彩以后的金额得到并将其转换为两位小数
//	getFinalMoney();
//
//	var i=0;
//	var j1, j2;
//	var lotteryNumber="";
//	Animal_ClearSelect();
//    var lotteryListSelect = $("#list_LotteryNumber");
//	while(i<parseInt(n)) {
//		var j1 = parseInt(RandCode(1,12));
//		var j2 = parseInt(RandCode(1,12));
//		var lotteryNumber = j1+","+j2+";";
//		if(j1==j2||j1==0||j2==0){continue;}
//		if(j1<10){j1="0"+j1;}
//		if(j2<10){j2="0"+j2;}
//
//		var code = j1+" "+j2;
//		var arrZusan = code.split(",");
//		var animalCode = arrZusan.sort();
//		lotteryView = decodeURI(EncodeUtf8('[生肖乐] ' ))+ animalCode + decodeURI(EncodeUtf8(' [1注，共2元]'));
//		var opt = new Option(lotteryView,lotteryNumber);
//		opt.setAttribute('allLot',animalCode);
//		opt.setAttribute('backLot',lotteryNumber);
//		opt.setAttribute('wangFang',"30");
//		opt.setAttribute('zhushu',"1");
//		opt.setAttribute('money',2);
//		opt.setAttribute('delMoney', 2);
//		lotteryListSelect[0].options.add(opt); 
//		lotteryView=lotteryNumber;
//		lotteryView= lotteryView.substring(0,lotteryView.length-1);
//		add_codes(j1+","+j2,lotteryNumber);
//
//		i++;
//		$("#lab_Num").html( totalLotteryInvest);
//	}
//}

//追加投注
function updateMultipleTotalMoney() {
	var animal_zhushu = 0;
	var animal_Money = 0;
	var old_zhuShu = Number($("#lab_Num").html()); //总共注数

	for (var i = 0; i < $("#list_LotteryNumber option").length; i++) {
		if ($("#list_LotteryNumber")[0].options[i].getAttribute("wangfang") == "3") {
			//获取生肖乐注数
			animal_zhushu += Number($("#list_LotteryNumber")[0].options[i].getAttribute("zhushu"));
		}

	}
	//普通注数
	var pt_zhushu = old_zhuShu - animal_zhushu;

	dltCheckBox();
	//普通投注金额
	var pt_changeMoney = parseInt(oneMoney * pt_zhushu);
	//生肖乐金额
	animal_Money = 2 * animal_zhushu;
	//倍数
	initMultiple = Number($("#tb_Multiple").val());
	//总金额
	totalMoney = parseInt((pt_changeMoney + animal_Money) * initMultiple);
	$("#lab_Num").html(pt_zhushu + animal_zhushu);
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	chooseBallToMoney();
}
//清空选号区
function ClearSelect() {
	for (var i = 1; i <= 35; i++) SetBallState("r", GetBallNum(i), false, 'clearBall');

	for (var i = 1; i <= 12; i++) SetBallState("b", GetBallNum(i), false, 'clearBall');
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
}
//层之间的现实隐藏
function dltZhuijia() {
	$("#zhuijia").css("display", "none");
}
function dltZhuijiaNone() {
	$("#zhuijia").css("display", "block");
}

//--------------------dlt_commen.js开始------------------------

//选择号码球  BallColor：球的颜色   BallNum：号码
function SelectBall(BallColor, BallNum) {
	var Selected = GetBallState(BallColor, BallNum);
	if (Selected) {
		SetBallState(BallColor, BallNum, false);
		CheckFull();
		return;
	}
	SetBallState(BallColor, BallNum, true);
	CheckFull();
	return;
}
//获取选中红球的个数
function GetRedBallSelectedNum() {
	var Count = 0;
	for (var i = 1; i <= 35; i++) {
		if (GetBallState("r", GetBallNum(i))) Count++;
	}
	return Count;
}
//清空选中红球
function dlt_clearRedSelect() {
	for (var i = 1; i <= 35; i++) {
		SetBallState("r", GetBallNum(i), false);
	}
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
}
//清空选中蓝球
function dlt_clearBlueSelect() {
	for (var i = 1; i <= 12; i++) {
		SetBallState("b", GetBallNum(i), false);
	}
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
}
//获取选中蓝球个数
function GetBlueBallSelectedNum() {
	var Count1 = 0;
	for (var i = 1; i <= 12; i++) {
		if (GetBallState("b", GetBallNum(i))) Count1++;
	}
	return Count1;
}
//根据参数获取号码球
function GetBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;

	return BallNum;
}
//根据号码球的颜色和球号获取号码球的状态
function GetBallState(BallColor, BallNum) {
	var isSelectedAttr = document.getElementById("td_" + BallColor + "_" + BallNum).getAttribute('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}

// 设置号码球的状态
function SetBallState(BallColor, BallNum, SelectState) {
	var ball = document.getElementById("td_" + BallColor + "_" + BallNum);
	if (SelectState) {
		ball.className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

var p = 0;
//获取注数与号码 并现实到页面
function CheckFull() {
	var invest = GetLotteryInvestNum();
	if (invest < 1) document.getElementById("btn_2_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_2_Add").setAttribute('isdisabled', 'false');
	p = invest * 2;
	$("#rqianqu").html(GetRedBallSelectedNum());
	$("#rhouqu").html(GetBlueBallSelectedNum());
	$("#rzhu").html(invest);
	$("#rtotlam").html(p.toFixed());
	if ($("#daletou_invert")) {
		$("#daletou_invert").html(invest + decodeURI(EncodeUtf8('注，')) + p.toFixed() + decodeURI(EncodeUtf8('元。')));
	}
}
//获取彩票号码
function GetLotteryNumber() {
	var dlt_commonCode = "";
	var LotteryNumber = "";
	var BallNum;
	var randBlue;
	for (var i = 1; i <= 35; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + " ");
			if (BallNum.substring(0, 1) == "0") {
				dlt_commonCode += BallNum.substring(1, 2) + ",";
			} else {
				dlt_commonCode += BallNum + ",";
			}
		}
	}
	LotteryNumber += "- ";
	dlt_commonCode += "-";
	var red;
	for (var i = 1; i <= 12; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("b", BallNum)) {
			LotteryNumber += (BallNum + " ");
			if (BallNum.substring(0, 1) == "0") {
				dlt_commonCode += BallNum.substring(1, 2) + ",";
			} else {
				dlt_commonCode += BallNum + ",";
			}
		}
		randBlue = dlt_commonCode;
		var conBall = randBlue.lastIndexOf("-");
		red = dlt_commonCode.substring(0, conBall - 1);

		var conBlue1 = dlt_commonCode.lastIndexOf("-");
		var blue1 = dlt_commonCode.substring(conBlue1, dlt_commonCode.length);
		var conBlue = blue1.lastIndexOf(",");
		var blue = blue1.substring(0, conBlue);
	}
	dlt_commonCode = red + blue + ";";
	return dlt_commonCode;
}
//获取彩票号码
function GetDLT_FrontLot(op) {
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 35; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + op);
		}
	}
	LotteryNumber += "| ";
	for (var i = 1; i <= 12; i++) {
		BallNum = GetBallNum(i);
		if (GetBallState("b", BallNum)) {
			LotteryNumber += (BallNum + op);
		}
	}

	return LotteryNumber;
}
//计算注数
function GetLotteryInvestNum() {
	var RedCount = 0;
	var BlueCount = 0;

	for (var i = 1; i <= 35; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}

	for (var i = 1; i <= 12; i++) {
		if (GetBallState("b", GetBallNum(i))) BlueCount++;
	}
	if (RedCount < 5 || BlueCount < 2) return 0;
	var InvestNum = 1;
	var red = zuhe(5, RedCount);
	var blue = zuhe(2, BlueCount);
	InvestNum = (red * blue);
	return InvestNum;
}

//去重
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
var houQuBall = 0;
var qianQuBall = 0;
//获取要选择的前区号码的个数
function controllQianQuBall() {
	qianQuBall = $("#qianQuBall").val();
}
//获取要选择的后区号码的个数
function controllHouQuBall() {
	houQuBall = $("#houQuBall").val();
}
//机选前区
function qianQuRand() {
	for (var i = 1; i <= 35; i += 1) SetBallState("r", GetBallNum(i), false);
	var redBallArray = new Array();
	controllQianQuBall();
	for (var i = 1; i <= qianQuBall; i += 1) {
		var redRandNum = parseInt(Math.random() * 35) + 1;

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
//机选后区
function houQuRand() {
	for (var i = 1; i <= 12; i += 1) SetBallState("b", GetBallNum(i), false);
	var blueBallArray = new Array();

	controllHouQuBall();
	for (var i = 1; i <= houQuBall; i += 1) {

		var bluerandNum = parseInt(Math.random() * 12) + 1;

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
//将号码添加到选号蓝
function btn_2_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var RedCount = 0;
	var BlueCount = 0;
	for (var i = 1; i <= 35; i++) {
		if (GetBallState("r", GetBallNum(i))) RedCount++;
	}
	for (var i = 1; i <= 12; i++) {
		if (GetBallState("b", GetBallNum(i))) BlueCount++;
	}
	if (RedCount < 5) {
		openAlert(decodeURI(EncodeUtf8("前区号码至少选择 5个")));
		return false;
	}
	if (BlueCount < 2) {
		openAlert(decodeURI(EncodeUtf8("后区号码至少选择 2个")));
		return false;
	}

	if (GetLotteryInvestNum() < 1) {
		openAlert(decodeURI(EncodeUtf8("请正确选择号码进行投注")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过 2万元！")));
		return false;
	}
	var lotteryListSelect = document.getElementById("list_LotteryNumber");
	var lotteryInvest = GetLotteryInvestNum();
	var lotteryNumber = GetLotteryNumber(); //hou
	var lotteryView = GetDLT_FrontLot(" ");
	var frontLot = lotteryView;
	//判断玩法 //将字符串显示成2,2,2,2|3,3的样式，并显示在号码栏中
	var wanfa;
	var PU_view;
	var view;
	var cont = GetDLT_FrontLot(',').lastIndexOf("|");
	lotteryView = GetDLT_FrontLot(',').substring(0, cont - 1) + GetDLT_FrontLot(',').substring(cont, GetDLT_FrontLot(',').length - 1);
	if (RedCount == 5 && BlueCount == 2) {
		wanfa = "0";
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('单式')) + ']' + lotteryView + '</span><span class="jieguo1">  ' + decodeURI(EncodeUtf8('1注　　')) + '</span>';
	} else {
		wanfa = "1";
		PU_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('复式')) + ']' + lotteryView + '</span><span class="jieguo1">  ' + lotteryInvest + decodeURI(EncodeUtf8('注　　')) + '</span>';

	}
	view = lotteryView + '|' + lotteryInvest + decodeURI(EncodeUtf8('注'));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanfa);
	opt.setAttribute('zhushu', lotteryInvest);
	opt.setAttribute('money', 1 * oneMoney);
	opt.setAttribute('delMoney', oneMoney * lotteryInvest);
	lotteryListSelect.options.add(opt);
	add_codes(PU_view, lotteryNumber);
	dltCheckBox();
	totalMoney += oneMoney * lotteryInvest;
	ClearSelect();

	document.getElementById("btn_2_Add").setAttribute('isdisabled', 'true');
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(oneMoney * lotteryInvest);
	var partial_money = document.getElementById("investField").innerHTML;
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	if (parseInt(($("#deposit_amount").html()) - ($("#current_money").html())) < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(parseInt(($("#deposit_amount").html()) - ($("#current_money").html())));
	}
	totalLotteryInvest += lotteryInvest;
	$("#lab_Num").html(totalLotteryInvest);
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
	if ($("#daletou_invert")) {
		$("#daletou_invert").html(decodeURI(EncodeUtf8("0注， 0元。")));
	}
	chooseBallToMoney();
	return true;
}

//----------------dlt_danTuo.js 开始-----------------------------

//
// 得到红球胆码拖码、蓝球胆码拖码的个数
// BallColor 球的颜色
// BallType 球的类型
// BallLength 球的个数
//
//获取号码球的个数
function getBallCount(BallColor, BallType, BallLength) {
	var blueTuoMaCount = 0;
	for (var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i), BallType)) {

			blueTuoMaCount++;
		}
	}
	return blueTuoMaCount;
}
//选择号码球
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
	} else if (BallColor == "b") {
		if (BallType == "danMa") {
			danTuo_setBallState(BallColor, BallNum, false, "tuoMa");
		} else {
			danTuo_setBallState(BallColor, BallNum, false, "danMa");
		}
	}
	danTuo_checkFull();
	return;
}
//获取号码球的状态
function danTuo_getBallState(BallColor, BallNum, BallType) {
	var isSelectedAttr;
	if (BallType != "") {
		isSelectedAttr = $("#td_" + BallColor + "_" + BallNum + "_" + BallType).attr('isselected');
	}
	var isSelected = isSelectedAttr == 'true' ? true: false;

	return isSelected;
}
//设置号码球的状态
function danTuo_setBallState(BallColor, BallNum, SelectState, BallType) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_" + BallType);
	if (SelectState) {
		if (BallColor == 'r' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if (BallType == 'danMa') {
				if (getBallCount("r", "danMa", 35) > 3) {
					openAlert(decodeURI(EncodeUtf8("前区最多只能选择4个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_r';
		}
		if (BallColor == 'b' && (BallType == 'danMa' || BallType == 'tuoMa')) {
			if (BallType == 'danMa') {
				if (getBallCount("b", "danMa", 12) > 0) {
					openAlert(decodeURI(EncodeUtf8("后区最多只能选择1个胆码！")));
					return false;
				}
			}
			ball[0].className = 'ball_num_b';
		}
		ball.attr('isselected', 'true');
	} else {
		ball.attr('class', 'ball_num');
		//ball[0].className = 'ball_num';
		ball.attr('isselected', 'false');
	}
}
//显示用户选中号码的详细信息及金额
var p = 0;
function danTuo_checkFull() {
	var invest = getZhuShu();
	p = invest * 2;
	$("#qdan").html(getBallCount('r', 'danMa', 35));
	$("#qtuo").html(getBallCount('r', 'tuoMa', 35));
	$("#hdan").html(getBallCount('b', 'danMa', 12));
	$("#htuo").html(getBallCount('b', 'tuoMa', 12));
	$("#rzhu1").html(invest);
	$("#totlam").html(p.toFixed());
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

//算注数
function getZhuShu() {
	var redDanMaCount = getBallCount('r', 'danMa', 35);
	var redTuoMaCount = getBallCount('r', 'tuoMa', 35);
	var blueDanMaCount = getBallCount('b', 'danMa', 12);
	var blueTuoMaCount = getBallCount('b', 'tuoMa', 12);

	var InvestNum = 1;
	if (redDanMaCount < 1 || redDanMaCount > 4 || redDanMaCount + redTuoMaCount < 6 || blueDanMaCount > 1 || blueTuoMaCount < 2) {
		return 0;
	}

	var C_r = zuhe(5 - redDanMaCount, redTuoMaCount);
	var C_b = zuhe(2 - blueDanMaCount, blueTuoMaCount);

	InvestNum = parseInt(C_r * C_b);

	return InvestNum;
}
//获取选中号码的个数
function danTuo_getBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}
//获取选中号码
function getCheck_ballNumber() {
	var dlt_danTuoCode = "";
	var LotteryNumber = "";
	var redDanMa_BallNum;
	var redTuoMa_BallNum;
	var blueDanMa_BallNum;
	var blueTuoMa_BallNum;
	var blueDanMa_selected = false;//判断后胆蓝球是否被选中

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
	for (var i = 1; i <= 35; i++) {
		redDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redDanMa_BallNum, 'danMa')) {
		
			LotteryNumber += (redDanMa_BallNum + " ");
			if (redDanMa_BallNum.substring(0, 1) == "0") {
				dlt_danTuoCode += redDanMa_BallNum.substring(1, 2) + ",";
			} else {
				dlt_danTuoCode += redDanMa_BallNum + ",";
			}
		}
	}
	LotteryNumber += "$ ";
	dlt_danTuoCode += "$";
	for (var i = 1; i <= 35; i++) {
		redTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redTuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (redTuoMa_BallNum + " ");
			if (redTuoMa_BallNum.substring(0, 1) == "0") {
				dlt_danTuoCode += redTuoMa_BallNum.substring(1, 2) + ",";
			} else {
				dlt_danTuoCode += redTuoMa_BallNum + ",";
			}
		}
	}
	LotteryNumber += "- ";
	dlt_danTuoCode += "-";

	for (var i = 1; i <= 12; i++) {
		blueDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueDanMa_BallNum, 'danMa')) {
			blueDanMa_selected = true;
			LotteryNumber += (blueDanMa_BallNum + " ");
			if (blueDanMa_BallNum.substring(0, 1) == "0") {
				dlt_danTuoCode += blueDanMa_BallNum.substring(1, 2) + ",";
			} else {
				dlt_danTuoCode += blueDanMa_BallNum + ",";
			}
		}
	}
	if(blueDanMa_selected==true){
		LotteryNumber += "$ ";
		dlt_danTuoCode += "$";
	}else{
		LotteryNumber += " ";
		dlt_danTuoCode += "";
	}
	
	for (var i = 1; i <= 12; i++) {
		blueTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueTuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (blueTuoMa_BallNum + " ");
			if (blueTuoMa_BallNum.substring(0, 1) == "0") {
				dlt_danTuoCode += blueTuoMa_BallNum.substring(1, 2) + ",";
			} else {
				dlt_danTuoCode += blueTuoMa_BallNum + ",";
			}
		}
		ball1 = dlt_danTuoCode;
		var conBall1 ;
		if(blueDanMa_selected==false){
			conBall1 = ball1.lastIndexOf("-");
		}else{
			conBall1 = ball1.lastIndexOf("$");
		}
		qianDanMa = dlt_danTuoCode;//.substring(0, conBall1 - 1);
		hou = dlt_danTuoCode.substring(conBall1, dlt_danTuoCode.length - 1);

		houDanMa = dlt_danTuoCode.substring(conBall1, conBall1.length);
		qianqu = houDanMa.substring(houDanMa, houDanMa.length - 1);

		ball2 = qianDanMa;
		var conBall2 = ball2.lastIndexOf("$");
		qianQu1 = ball2.substring(0, conBall2 - 1);

		qianQu2 = ball2.substring(conBall2, conBall2.length);
		var conBall3 = qianQu2.lastIndexOf("-");
		qianQu3 = qianQu2.substring(0, conBall3 - 1);
		qianQu4 = qianQu2.substring(conBall3, conBall3.length);

		var findJia = qianDanMa.lastIndexOf("-");
		var find$ = qianDanMa.lastIndexOf("$");
		subJia = qianDanMa.substring(findJia - 1, find$);
		subJia2 = qianDanMa.substring(findJia - 1, find$ - 1);
		subJiaHou = qianDanMa.substring(findJia);
		secondCode = qianDanMa.substring(find$, qianDanMa.length);
		
		replace$ = hou.replace("$", "-$");
		var findQianDanMa$ = qianDanMa.indexOf("$");
		var conCount = qianDanMa.substring(findQianDanMa$, qianDanMa);
		var clear$ = secondCode.replace("$", "");
		var cleanDouHou = clear$.substring(0, clear$.length - 1);
		var newSecond = secondCode.substring(secondCode, secondCode.length - 1);
	}
	if (subJiaHou.length <= 3) {
		dlt_danTuoCode = qianQu1 + subJia + subJiaHou + hou + ";";
	}
	if (subJiaHou.length > 3 && qianQu1.length == 0){
		dlt_danTuoCode = cleanDouHou + hou.replace("$", "-") + ";" ;
	} // 1,2不选 
	else if (subJiaHou.length > 3 && qianQu1.length != 0) {
		dlt_danTuoCode = qianQu1 + newSecond+";"; //2不选	
	}
	return dlt_danTuoCode;
}

//获取彩票号码 
function getFrontDanTuo() {
	var LotteryNumber = "";
	var redDanMa_BallNum;
	var redTuoMa_BallNum;
	var blueDanMa_BallNum;
	var blueTuoMa_BallNum;
	for (var i = 1; i <= 35; i++) {
		redDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redDanMa_BallNum, 'danMa')) {
			LotteryNumber += (redDanMa_BallNum + " ");
		}
	}
	if (LotteryNumber != "") LotteryNumber += "$ ";
	for (var i = 1; i <= 35; i++) {
		redTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState('r', redTuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (redTuoMa_BallNum + " ");
		}
	}
	LotteryNumber += "- ";
	var houdan_selected=false;
	for (var i = 1; i <= 12; i++) {
		blueDanMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueDanMa_BallNum, 'danMa')) {
			var houdan_selected=true;
			LotteryNumber += (blueDanMa_BallNum + " ");
		}
	}
	var findJia = LotteryNumber.lastIndexOf("-");
	var subJia = LotteryNumber.substring(findJia);
	if(houdan_selected==true){
		LotteryNumber += "$ ";
	}else{
		LotteryNumber += " ";
	}
	for (var i = 1; i <= 12; i++) {
		blueTuoMa_BallNum = danTuo_getBallNum(i);
		if (danTuo_getBallState("b", blueTuoMa_BallNum, 'tuoMa')) {
			LotteryNumber += (blueTuoMa_BallNum + " ");
		}
	}
	return LotteryNumber;
}
//清空选号区
function ClearCheck() {
	for (var i = 1; i <= 35; i++) danTuo_setBallState("r", danTuo_getBallNum(i), false, "danMa");
	for (var i = 1; i <= 35; i++) danTuo_setBallState("r", danTuo_getBallNum(i), false, "tuoMa");

	for (var i = 1; i <= 12; i++) danTuo_setBallState("b", danTuo_getBallNum(i), false, "danMa");
	for (var i = 1; i <= 12; i++) danTuo_setBallState("b", danTuo_getBallNum(i), false, "tuoMa");
	$("#qdan").html('0');
	$("#qtuo").html('0');
	$("#hdan").html('0');
	$("#htuo").html('0');
	$("#rzhu").html('0');
	$("#totlam").html('0');
}
//将号码添加到号码蓝
function addDanTuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var firstRedCount = 0;
	var secondRedCount = 0;
	var blueDanMaCount = 0;
	var blueTuoMaCount = 0;
	for (var i = 1; i <= 35; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'danMa')) firstRedCount++;
	}
	for (var i = 1; i <= 35; i++) {
		if (danTuo_getBallState("r", danTuo_getBallNum(i), 'tuoMa')) secondRedCount++;
	}
	for (var i = 1; i <= 12; i++) {
		if (danTuo_getBallState("b", danTuo_getBallNum(i), 'danMa')) blueDanMaCount++;
	}
	for (var i = 1; i <= 12; i++) {
		if (danTuo_getBallState("b", danTuo_getBallNum(i), 'tuoMa')) blueTuoMaCount++;
	}

	if (firstRedCount < 1 || firstRedCount > 4 || secondRedCount < 2) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n前区胆码不能为空，最多选择4个，拖码至少选择2个")));
		return false;
	}
	if (blueDanMaCount > 1) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n后区至多选择1个胆码")));
		return false;
	}
	if (blueTuoMaCount < 2) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n后区至少选择2个拖码")));
		return false;
	}
	if (firstRedCount + secondRedCount < 6) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n前区胆码加前区拖码不能少于6个")));
		return false;
	}
	if (firstRedCount + secondRedCount > 28) {
		openAlert(decodeURI(EncodeUtf8("投注提示：\n前区胆码加前区拖码不能大于28个")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryView = getFrontDanTuo();//获取彩票号码
	var frontLot = lotteryView;
	var lotteryNum = getCheck_ballNumber();
	var lotteryListSelect = $("#list_LotteryNumber");
	var zhuShu = getZhuShu();
	dltCheckBox();
	totalMoney += oneMoney * zhuShu;
	lotteryView = '<span class="jieguo0">[<font class="red1">' + decodeURI(EncodeUtf8('前区|胆')) + '</font>] ' + getBall('r', 'danMa', 35) + '&nbsp;[<font class="red1">' + decodeURI(EncodeUtf8('前区|拖')) + '</font>] ' + getBall('r', 'tuoMa', 35) + '&nbsp;[<font class="blue">' + decodeURI(EncodeUtf8('后区|胆')) + '</font>] ' + getBall('b', 'danMa', 12) + '[<font class="blue">' + decodeURI(EncodeUtf8('后区|拖')) + '</font>] ' + getBall('b', 'tuoMa', 12) + '</span><span class="jieguo1">  ' + zhuShu + decodeURI(EncodeUtf8('注　　')) + '</span>';
	var view = getBall('r', 'danMa', 35) + "|" + getBall('r', 'tuoMa', 35) + "|" + getBall('b', 'tuoMa', 12) + "|" + getBall('b', 'tuoMa', 12) + "|" + zhuShu + decodeURI(EncodeUtf8('注　　共')) + zhuShu * oneMoney + decodeURI(EncodeUtf8('元'));
	var opt = new Option(view, lotteryNum);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNum);
	opt.setAttribute('wangFang', "2");
	opt.setAttribute('zhushu', zhuShu);
	opt.setAttribute('money', 1 * oneMoney);
	opt.setAttribute('delMoney', oneMoney * zhuShu);
	lotteryListSelect[0].options.add(opt);
	add_codes(lotteryView, lotteryNum);

	ClearCheck();
	var multiple = (Number($("#tb_Multiple").val()));
	var check_money = parseInt(oneMoney * zhuShu);
	var partial_money = $("#investField").html();
	if (partial_money != 0) {
		totalLotteryInvest = parseInt($("#lab_Num").html());
	}
	totalMoney = parseInt((check_money * multiple) + partial_money * 1);
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
	$("#rzhu1").html('0');
	$("#totlam").html('0');
	chooseBallToMoney();
	return true;
}
//获取前后去机选的号码个数
var houQuBall = 0;
var qianQuBall = 0;
function controllQianQuBall_dan() {
	qianQuBall = $("#danTuo_qianQuBall").val();

}
function controllHouQuBall_dan() {
	houQuBall = $("#danTuo_houQuBall").val();
}
//机选前区
function danTuo_qianQuRand() {
	var array = new Array();
	for (var i = 1; i <= 35; i += 1) {
		if (danTuo_getBallState('r', GetBallNum(i), 'danMa')) {
			if (GetBallNum(i).substring(0, 1) == "0") {
				array.push(GetBallNum(i).substring(1, 2));
			} else {
				array.push(GetBallNum(i));
			}
		}
	}
	for (var i = 1; i <= 35; i += 1) danTuo_setBallState("r", GetBallNum(i), false, 'tuoMa');
	var redBallArray = new Array();
	controllQianQuBall_dan();

	for (var i = 1; i <= qianQuBall; i += 1) {
		var redRandNum = parseInt(Math.random() * 35) + 1;
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
//机选后区
function danTuo_houQuRand() {
	var array = new Array();
	for (var i = 1; i <= 12; i += 1) {
		if (danTuo_getBallState('b', GetBallNum(i), 'danMa')) {
			if (GetBallNum(i).substring(0, 1) == "0") {
				array.push(GetBallNum(i).substring(1, 2));
			} else {
				array.push(GetBallNum(i));
			}
		};
	};
	for (var i = 1; i <= 12; i += 1) danTuo_setBallState("b", GetBallNum(i), false, 'tuoMa');

	var blueBallArray = new Array();

	controllHouQuBall_dan();
	for (var i = 1; i <= houQuBall; i += 1) {

		var bluerandNum = parseInt(Math.random() * 12) + 1;
		if (contain(blueBallArray, bluerandNum)) {
			i -= 1;
			continue;
		} else if (contain(array, bluerandNum)) {
			i -= 1;
			continue;
		} else {
			blueBallArray[i - 1] = bluerandNum;
		}
		if (bluerandNum < 10) {
			$("#td_b_0" + bluerandNum + "_tuoMa").click();
		} else {
			$("#td_b_" + bluerandNum + "_tuoMa").click();
		}
	}
}
//清空所有选中号码
function dlt_clearAll_dan() {
	for (var i = 1; i <= 35; i++) {
		danTuo_setBallState("r", GetBallNum(i), false, 'tuoMa');
	}
	for (var i = 1; i <= 35; i++) {
		danTuo_setBallState("r", GetBallNum(i), false, 'danMa');
	}
	for (var i = 1; i <= 12; i++) {
		danTuo_setBallState("b", GetBallNum(i), false, 'danMa');
	}
	for (var i = 1; i <= 12; i++) {
		danTuo_setBallState("b", GetBallNum(i), false, 'tuoMa');
	}
	$("#qdan").html('0');
	$("#qtuo").html('0');
	$("#hdan").html('0');
	$("#htuo").html('0');
	$("#rzhu").html('0');
	$("#rzhu1").html('0');
	$("#totlam").html('0');
}

//胆拖获取选中的号码球
function getBall(BallColor, BallType, BallLength) {
	var ballnum = '';
	for (var i = 1; i <= BallLength; i++) {
		if (danTuo_getBallState(BallColor, danTuo_getBallNum(i), BallType)) {
			ballnum += danTuo_getBallNum(i) + ",";
		}
	}
	ballnum = ballnum.substring(0, ballnum.length - 1);
	return ballnum;
}

//得到球的状态
function Animal_GetBallState(BallColor, BallNum) {
	var isSelectedAttr = $("#shxl_" + BallColor + "_" + BallNum).attr('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}

//设置球的状态
function Animal_SetBallState(BallColor, BallNum, SelectState) {
	var ball = $("#shx_" + BallColor + "_" + BallNum); //shx_r_01
	if (SelectState) {
		ball.addClass('shx_num_r' + BallNum);
		ball.attr('isselected', 'true');
	} else {
		ball.removeClass('shx_num_r' + BallNum);
		ball.addClass('shx_num_' + BallNum);
		ball.attr('isselected', 'false');
	}
}

//给注码补“0”
function Animal_GetBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;
	return BallNum;
}

var animal = 0;
//设置球的显示
function Animal_SelectBall(BallColor, BallNum) {
	var Selected = Animal_GetBallState(BallColor, BallNum);
	if (Selected) {
		Animal_SetBallState(BallColor, BallNum, false);
		Animal_CheckFull();
		return;
	}
	Animal_SetBallState(BallColor, BallNum, true);
	Animal_CheckFull();
	return;
}
//设置球的状态
function Animal_SetBallState(BallColor, BallNum, SelectState, clearBall) {
	var ball = $("#shxl_" + BallColor + "_" + BallNum); //shx_r_01
	if (clearBall == null || clearBall == "") {
		if (SelectState) {
			if (ball[0].className == "ball_numsxl_r") { //红色
				ball.removeClass().addClass('ball_numsxl_shh');
				ball.attr('isselected', 'false');
			} else if (ball[0].className == "ball_numsxl_shh") { //黑色
				ball.removeClass().addClass('ball_numsxl');
				ball.attr('isselected', 'false');
			} else {
				ball.removeClass().addClass('ball_numsxl_r');
				ball.attr('isselected', 'true');
			}
		} else {
			if (ball[0].className == "ball_numsxl_r") { //红色
				ball.removeClass().addClass('ball_numsxl_shh');
			} else {
				ball.removeClass().addClass('ball_numsxl');
			}
			ball.attr('isselected', 'false');
		}
	} else {
		ball[0].className = 'ball_numsxl';
		ball.attr('isselected', 'false');
	}
}

//得到十二选二的注数
function Animal_GetLotteryInvestNum() {
	var RedCount = 0;
	for (var i = 1; i <= 12; i++) {
		if (Animal_GetBallState("r", GetBallNum(i))) RedCount++;
	}

	//如果球个数小于2返回
	if (RedCount < 2) return 0;
	//算得注数
	var InvestNum = zuhe(2, RedCount);
	return InvestNum;
}
var animal = 0;
//添加注数和金额到显示页面
function Animal_CheckFull() {
	var RedCount1 = 0;
	for (var i = 1; i <= 12; i++) {
		if (Animal_GetBallState("r", GetBallNum(i))){
			RedCount1++;
		}
	}
	var invest = Animal_GetLotteryInvestNum();
	if (invest < 1) $("#animal_btn_2_Add").attr('isdisabled', 'true');
	else $("#animal_btn_2_Add").attr('isdisabled', 'false');
	animal = invest * 2;
	$("#sxl_red").html(RedCount1);
	$("#sxl_zhushu").html(invest);
	$("#sxl_money").html(animal + "");
}

//拼接注码
function GetAnimal_FrontLot(op) {
	var LotteryNumber = "";
	var BallNum;
	for (var i = 1; i <= 12; i++) {
		BallNum = GetBallNum(i);
		if (Animal_GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + op);
		}
	}
	return LotteryNumber;
}
//清空注码
function Animal_ClearSelect() {
	for (var i = 1; i <= 12; i++) {
		Animal_SetBallState("r", GetBallNum(i), false, "clearBall");
	}
	$("#sxl_red").html('0');
	$("#sxl_zhushu").html("0");
	$("#sxl_money").html("0");
}
//获取用户选择的生肖乐的号码
function Animal_GetLotteryNumber() {
	var dlt_commonCode = "";
	var LotteryNumber = "";
	for (var i = 1; i <= 12; i++) {
		var BallNum = GetBallNum(i);
		if (Animal_GetBallState("r", BallNum)) {
			LotteryNumber += (BallNum + " ");
			if (BallNum.substring(0, 1) == "0") {
				dlt_commonCode += BallNum.substring(1, 2) + ",";
			} else {
				dlt_commonCode += BallNum + ",";
			}
		}
	}
	dlt_commonCode = dlt_commonCode.substring(0, dlt_commonCode.lastIndexOf(",")) + ";";
	return dlt_commonCode;
}

//点击添加到号码栏按钮增加注码
function Animal_btn_2_AddClick() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}
	var RedCount = 0;
	for (var i = 1; i <= 12; i++) {
		if (Animal_GetBallState("r", GetBallNum(i))) RedCount++;
	}

	if (RedCount < 2) {
		openAlert(decodeURI(EncodeUtf8("生肖乐至少选择2个号码")));
		return false;
	}

	if (Animal_GetLotteryInvestNum() < 1) {
		openAlert(decodeURI(EncodeUtf8("请正确选择号码进行投注")));
		return false;
	}
	if (animal > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	var lotteryInvest = Animal_GetLotteryInvestNum(); //注数
	var lotteryNumber = Animal_GetLotteryNumber(); //传给action中的注码
	var lotteryView = GetAnimal_FrontLot(" ");
	//判断注码的玩法 并拼接显示在页面的注码
	var wanfa;
	var Anomail_view;
	if (RedCount == 2) {
		wanfa = "30";
		Anomail_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8("单式")) + '] ' + GetAnimal_FrontLot(",").substring(0, GetAnimal_FrontLot(",").length - 1) + '</span><span class="jieguo1">  ' + decodeURI(EncodeUtf8('1注　　')) + '</span>';
	} else {
		wanfa = "31";
		Anomail_view = '<span class="jieguo0">[' + decodeURI(EncodeUtf8('复式')) + '] ' + GetAnimal_FrontLot(",").substring(0, GetAnimal_FrontLot(",").length - 1) + '</span><span class="jieguo1">  ' + lotteryInvest + decodeURI(EncodeUtf8('注　　')) + '</span>';
	}
	var view = GetAnimal_FrontLot(",").substring(0, GetAnimal_FrontLot(",").length - 1) + "|" + lotteryInvest + decodeURI(EncodeUtf8('注　　'));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', lotteryView);
	opt.setAttribute('backLot', lotteryNumber);
	opt.setAttribute('wangFang', wanfa);
	opt.setAttribute('zhushu', lotteryInvest);
	opt.setAttribute('money', 1 * 2);
	opt.setAttribute('delMoney', 2 * lotteryInvest);
	lotteryListSelect[0].options.add(opt);
	add_codes(Anomail_view, lotteryNumber);

	totalMoney += 2 * lotteryInvest; //算总金额
	Animal_ClearSelect();

	$("#Animal_btn_2_Add").attr('isdisabled', 'true');
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
	$("#sxl_red").html('0');
	$("#sxl_zhushu").html("0");
	$("#sxl_money").html("0");
	chooseBallToMoney();
	return true;
}

//清空选号栏
function clear() {
	//清空生肖乐选号去
	Animal_ClearSelect();
	//清空
	ClearSelect();
	ClearCheck();
}
//----------------------------定胆杀号机选-----------------------------
//选择号码球  BallColor：球的颜色   BallNum：号码
function ddsh_SelectBall(BallColor, BallNum) {
	var Selected = GetBallState_sh(BallColor, BallNum);
	if (Selected) {
		ddsh_SetBallState(BallColor, BallNum, false);
		ddsh_selectOption(BallColor);
		ddsh_CheckFull();
		return;
	}
	ddsh_SetBallState(BallColor, BallNum, true);
	ddsh_selectOption(BallColor);
	ddsh_CheckFull();
	return;
}
//获取前区选中的号码球的个数
function ddsh_GetRedBallSelectedNum() {
	var Count = 0;
	for (var i = 1; i <= 35; i++) {
		if (GetBallState_sh("r", GetBallNum(i))) {
			Count++;

		}
	}

	return Count;
}
//清空选中红球
function ddsh_clearRedSelect() {
	for (var i = 1; i <= 35; i++) {
		ddsh_SetBallState("r", GetBallNum(i), false, 'clearBall');
	}
	ddsh_selectOption("r");

	killRedCount = 0; //设置红球杀号的个数
	$("#checkState").val('0');
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");

}
//清空选中蓝球
function ddsh_clearBlueSelect() {
	for (var i = 1; i <= 12; i++) {
		ddsh_SetBallState("b", GetBallNum(i), false, 'clearBall');
	}
	ddsh_selectOption("b");
	killBlueCount = 0; //设置蓝球球杀号的个数
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
}
//获取选中蓝球个数
function ddsh_GetBlueBallSelectedNum() {
	var Count1 = 0;
	for (var i = 1; i <= 12; i++) {
		if (GetBallState_sh("b", GetBallNum(i))) Count1++;
	}
	return Count1;
}
//根据号码球的颜色和球号获取号码球的状态
function GetBallState_sh(BallColor, BallNum) {
	var isSelectedAttr = document.getElementById("td_" + BallColor + "_" + BallNum + "_sh").getAttribute('isselected');
	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//获取红球杀号球的个数

function killRedBallNum() {
	var killRedCount = 0;
	for (var i = 1; i <= 35; i++) {
		if ($("#td_r_" + GetBallNum(i) + "_sh").attr("class") == "ball_num_sh") killRedCount++;
	}
	return killRedCount;
}
//获取蓝球杀号球的个数
function killBlueBallNum() {
	var killBlueCount = 0;
	for (var i = 1; i <= 12; i++) {
		if ($("#td_b_" + GetBallNum(i) + "_sh").attr("class") == "ball_num_sh") killBlueCount++;
	}
	return killBlueCount;
}
// 设置号码球的状态
function ddsh_SetBallState(BallColor, BallNum, SelectState, clearBall) {
	var ball = $("#td_" + BallColor + "_" + BallNum + "_sh");
	if (clearBall == null || clearBall == "") {
		if (SelectState) {
			//判断选中胆码的数量，如果超过四个并且选中了多余的胆码做杀号处理
			if ($("#checkState").attr("value") == "1" && ddsh_GetRedBallSelectedNum() == 4 && BallColor == "r") {
				ball[0].className = 'ball_num_sh';
				ball.attr('isselected', 'false');
			} else {
				if (ball[0].className == "ball_num_r" || ball[0].className == "ball_num_b") {
					ball[0].className = 'ball_num_sh';
					ball.attr('isselected', 'false');
				} else if (ball[0].className == "ball_num_sh") {
					ball[0].className = 'ball_num';
					ball.attr('isselected', 'false');
				} else {
					/*//判断胆码是否超过4个，如果超过就弹出提示
				 if(BallColor == 'r'){
					if(ddsh_GetRedBallSelectedNum()>3){
					openAlert(decodeURI(EncodeUtf8("您好，前区最多只能定4个胆码！")));
					//$("#tishiyu").text(decodeURI(EncodeUtf8("您好，前区最多只能定4个胆码，号码（5）是否做为杀号选择？")));
					$("#ballColor").val(BallColor);
					$("#ballNum").val(BallNum);
					
					if($("#checkState").attr("value")=="0"){
					openShaHao();
					return false;
					}
					ball[0].className = 'ball_num_sh';
					ball.attr('isselected','false');
					 //openAlert(decodeURI(EncodeUtf8("您好，前区最多只能定4个胆码!")));
					 return false;
					}
					
				}*/
					ball[0].className = BallColor == 'r' ? 'ball_num_r': 'ball_num_b';
					ball.attr('isselected', 'true');
					//判断是红球还是蓝球，并相应的改变select的值
					if (BallColor == "r") {
						ddsh_selectOption("r");
					} else {
						ddsh_selectOption("b");
					}
				}
			}
		} else {
			if (ball[0].className == "ball_num_r") {
				/*if(killRedBallNum()>29){
			 openAlert(decodeURI(EncodeUtf8("您好，前区最多可以杀30个号码球！")));
			 return false;
			}*/
				ball[0].className = 'ball_num_sh';
				ddsh_selectOption("ball_r_sh");
				killRedBallNum();
			} else if (ball[0].className == "ball_num_b") {
				/*if(killBlueBallNum()>9){
				 openAlert(decodeURI(EncodeUtf8("您好，后区最多可以杀10个号码球！")));
				 return false;
				}*/
				killBlueBallNum();
				ball[0].className = 'ball_num_sh';
				ddsh_selectOption("ball_b_sh");
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

var p = 0;
//获取注数与号码 并现实到页面
function ddsh_CheckFull() {
	var invest = GetLotteryInvestNum_ddsh();
	if (invest < 1) document.getElementById("btn_2_Add_ddsh").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_2_Add_ddsh").setAttribute('isdisabled', 'false');
	p = invest * 2;
	//$("#rqianqu").html(GetRedBallSelectedNum());
	//$("#rhouqu").html(GetBlueBallSelectedNum());
	$("#lab_Num").html(invest);
	$("#investField").html(p.toFixed());
	//$("#rtotlam").html( p.toFixed());
	if ($("#daletou_invert")) {
		$("#daletou_invert").html(invest + decodeURI(EncodeUtf8('注，')) + p.toFixed() + decodeURI(EncodeUtf8('元。')));
	}
}
//计算注数
function GetLotteryInvestNum_ddsh(RedCount, BlueCount) {
	if (RedCount < 5 || BlueCount < 2) return 0;
	var InvestNum = 1;
	var red = zuhe(5, RedCount);
	var blue = zuhe(2, BlueCount);
	InvestNum = (red * blue);
	return InvestNum;
}
var houQuBall = 0;
var qianQuBall = 0;
//获取要选择的前区号码的个数
function ddsh_controllQianQuBall() {
	qianQuBall = $("#ddsh_qianQuBall").val();
}
//获取要选择的后区号码的个数
function ddsh_controllHouQuBall() {
	houQuBall = $("#ddsh_houQuBall").val();
}
//动态的改变select选框的值
//思路：获取用户选中球的个数，以及用户杀号的个数，来决定select选框中的最大最小值
function ddsh_selectOption(BallColor) {
	//1.获取杀号的红球个数
	var kill_rednum = killRedBallNum();
	//1.获取杀号的蓝球个数
	var kill_bluenum = killBlueBallNum();
	//1.获取选号的红球个数
	var select_rednum = ddsh_GetRedBallSelectedNum();
	//1.获取选号的篮球个数
	var select_bluenum = ddsh_GetBlueBallSelectedNum();

	//红球选框的最小值
	var redSelect_min = 5 - select_rednum;
	if (redSelect_min <= 0) {
		redSelect_min = 0;
	}
	//红球选框的最大值就等于18减去已经选择的红球的数量。如果选框的最大值大于没有被选择的球的个数时，选框的最大值就是剩余为选择球的个数
	var redSelect_max = 18 - select_rednum;
	var redSelect_left = 35 - select_rednum - kill_rednum;
	if (redSelect_max > redSelect_left) {
		redSelect_max = redSelect_left;
	}
	//如果最大值小于最小值的时候，将最小值赋给最大值，最小值就等于剩余为选的球的个数
	if (redSelect_min > redSelect_max) {
		redSelect_max = redSelect_left;
		redSelect_min = redSelect_left;
	}
	if (redSelect_max <= 0) {
		redSelect_max = 0;
	}
	//蓝球选框的最小值
	var blueSelect_min = 2 - select_bluenum;
	if (blueSelect_min <= 0) {
		blueSelect_min = 0;
	}
	//蓝球选框的最大值
	var blueSelect_max = 12 - select_bluenum - kill_bluenum;
	var blueSelect_left = 12 - select_bluenum - kill_bluenum;
	if (blueSelect_max > blueSelect_left) {
		blueSelect_max = blueSelect_left;
	}
	//如果最大值小于最小值的时候，将最小值赋给最大值，最小值就等于剩余为选的球的个数
	if (blueSelect_min > blueSelect_max) {
		blueSelect_max = blueSelect_left;
		blueSelect_min = blueSelect_left;
	}
	if (blueSelect_max <= 0) {
		blueSelect_max = 0;
	}
	//获取红球选框对象
	var redObj = $("#ddsh_qianQuBall");
	//获取红球选框对象
	var blueObj = $("#ddsh_houQuBall ");
	if (BallColor.indexOf("r") > -1) {
		while ($("#ddsh_qianQuBall option").length) {
			$("#ddsh_qianQuBall option").remove();
		}
		for (var i = redSelect_min; i <= redSelect_max; i++) {
			redObj.append("<option value='" + i + "'  >" + i + "</option>");
		}
	} else {
		while ($("#ddsh_houQuBall option").length) {
			$("#ddsh_houQuBall option").remove();
		}
		for (var i = blueSelect_min; i <= blueSelect_max; i++) {
			blueObj.append("<option value='" + i + "'  >" + i + "</option>");
		}
	}

}
//清空选号区
function ddsh_ClearSelect() {
	for (var i = 1; i <= 35; i++) ddsh_SetBallState("r", GetBallNum(i), false, 'clearBall');

	for (var i = 1; i <= 12; i++) ddsh_SetBallState("b", GetBallNum(i), false, 'clearBall');
	ddsh_selectOption("r");
	ddsh_selectOption("b");
	$("#checkState").val("0");
	$("#rqianqu").html("0");
	$("#rhouqu").html("0");
	$("#rzhu").html("0");
	$("#rtotlam").html("0");
}

//将号码设置成杀号状态(提示框方法)
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