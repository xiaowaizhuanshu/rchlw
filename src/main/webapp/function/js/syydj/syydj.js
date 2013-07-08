//清空所有选号区
function qingkongAll(type) {
	if (type == "all") {
		ClearAll(1, 1);
		ClearAll('Q2', 2);
		ClearAll('Q2', 3);
		ClearAll('Z2', 1);
		ClearAll('Z2', 2);
		ClearAll('Z2', 3);
		ClearAll('R2', 1);
		ClearAll('R2', 2);
		ClearAll('R2', 3);
		ClearAll('Q3', 2);
		ClearAll('Q3', 3);
		ClearAll('Q3', 4);
		ClearAll('Z3', 1);
		ClearAll('Z3', 2);
		ClearAll('Z3', 3);
		ClearAll('R3', 1);
		ClearAll('R3', 2);
		ClearAll('R3', 3);
		ClearAll(4, 1);
		ClearAll(4, 2);
		ClearAll(4, 3);
		ClearAll(5, 1);
		ClearAll(5, 2);
		ClearAll(5, 3);
		ClearAll(6, 1);
		ClearAll(6, 2);
		ClearAll(6, 3);
		ClearAll(7, 1);
		ClearAll(7, 2);
		ClearAll(7, 3);
		ClearAll(8, 1);
		ClearAll(8, 2);
		ClearAll(8, 3);
	}
	if (type == 1) {
		ClearAll(1, 1);
	}
	if (type == 2) {
		ClearAll('Q2', 2);
		ClearAll('Q2', 3);
		ClearAll('Z2', 1);
		ClearAll('Z2', 2);
		ClearAll('Z2', 3);
		ClearAll('R2', 1);
		ClearAll('R2', 2);
		ClearAll('R2', 3);
	}
	if (type == 3) {
		ClearAll('Q3', 2);
		ClearAll('Q3', 3);
		ClearAll('Q3', 4);
		ClearAll('Z3', 1);
		ClearAll('Z3', 2);
		ClearAll('Z3', 3);
		ClearAll('R3', 1);
		ClearAll('R3', 2);
		ClearAll('R3', 3);

	}
	if (type == 4) {
		ClearAll(4, 1);
		ClearAll(4, 2);
		ClearAll(4, 3);
	}
	if (type == 5) {
		ClearAll(5, 1);
		ClearAll(5, 2);
		ClearAll(5, 3);
	}
	if (type == 6) {
		ClearAll(6, 1);
		ClearAll(6, 2);
		ClearAll(6, 3);
	}
	if (type == 7) {
		ClearAll(7, 1);
		ClearAll(7, 2);
		ClearAll(7, 3);
	}
	if (type == 8) {
		ClearAll(8, 1);
		ClearAll(8, 2);
		ClearAll(8, 3);
	}
	return true;
}
//    
//      清空所有的
//      @param jspIndex
//      @param tabIndex
//      @return
//     

function ClearAll(jspIndex, tabIndex) {
	for (var i = 1; i < 12; i++) {
		var id = "td_" + jspIndex + "_" + tabIndex + "_" + i;
		var ball = document.getElementById(id);
		ball.setAttribute('isselected', 'false');
		ball.className = 'ball_num';
	}

	$("#x_zhu").html("0");
	$("#x_yuan").html("0");
	$("#Q2zhixuan_zhu").html("0");
	$("#Q2zhixuan_yuan").html("0");
	$("#Z2zhi_zhu").html("0");
	$("#Z2zhi_yuan").html("0");
	$("#R2zhi_zhu").html("0");
	$("#R2zhi_yuan").html("0");
	$("#Z2dantuo_zhu").html("0");
	$("#Z2dantuo_yuan").html("0");
	$("#R2dantuo_zhu").html("0");
	$("#R2dantuo_yuan").html("0");
	$("#Q3zhixuan_zhu").html("0");
	$("#Q3zhixuan_yuan").html("0");
	$("#Z3zhi_zhu").html("0");
	$("#Z3zhi_yuan").html("0");
	$("#R3zhi_zhu").html("0");
	$("#R3zhi_yuan").html("0");
	$("#Z3dantuo_zhu").html("0");
	$("#Z3dantuo_yuan").html("0");
	$("#R3dantuo_zhu").html("0");
	$("#R3dantuo_yuan").html("0");
	$("#R4zhi_zhu").html("0");
	$("#R4zhi_yuan").html("0");
	$("#R4dantuo_zhu").html("0");
	$("#R4dantuo_yuan").html("0");
	$("#R5zhi_zhu").html("0");
	$("#R5zhi_yuan").html("0");
	$("#R5dantuo_zhu").html("0");
	$("#R5dantuo_yuan").html("0");
	$("#R6zhi_zhu").html("0");
	$("#R6zhi_yuan").html("0");
	$("#R6dantuo_zhu").html("0");
	$("#R6dantuo_yuan").html("0");
	$("#R7zhi_zhu").html("0");
	$("#R7zhi_yuan").html("0");
	$("#R7dantuo_zhu").html("0");
	$("#R7dantuo_yuan").html("0");
	$("#R8zhi_zhu").html("0");
	$("#R8zhi_yuan").html("0");
	$("#R8dantuo_zhu").html("0");
	$("#R8dantuo_yuan").html("0");
}

function updateMultipleTotalMoney() {
	var zhuShu = document.getElementById("lab_Num").innerHTML;
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
//当前二级玩法 如：普通投注、和值
function syydjwanfa(name, flag) {
	$("#syydjWanfa").val(name);
	$("#syydjFlag").val(flag);
	var wanfa = $("#syydjWanfa").val();
	var wFlag = $("#syydjFlag").val();
	var qihao = $("#qihao").html(); //获取期号
	getSYYDJOmission(62, 'lotno=T01012&batchcode=' + qihao + '&wanfa=' + wanfa, false, wFlag);
}
//  十一运夺金  选一、选二、选三、任选四、任选五、任选六、任选七、任选八 机选
//  @param n 机选多少注
//  @return
//
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
	var syydjR1;
	var syydjR2;
	var syydjR3;
	var syydjR4;
	var syydjR5;
	var syydjR6;
	var syydjR7;
	var syydjR8;

	//选一
	if ($("#sub_nav_1").is(":visible")) {
		// 101@*0102^ 机选5注	    
		var arr = rollJx(1, 11, 1, parseInt(n));

		ClearAll(1, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR1 = lottery;
			var controlRed = syydjR1.lastIndexOf(";");
			var red = syydjR1.substring(0, controlRed);
			lotteryNumber = "101@" + parseInt(red, 10) + ";";

			lotteryView = lottery.substring(0, lottery.length - 1);

			//lotteryView = decodeURI(EncodeUtf8(' 前一直选　' ))+lotteryView;//显示的注码串
			//var lotteryView2 = lotteryView.replace(/\,/g,"|");
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "101");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前一直选单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
		//选二
	} else if ($("#sub_nav_2").is(":visible")) {
		if ($("#sub_nav_2_QEZhiF").is(":visible")) {
			// 141@0101^ 前二直 选5注 机选	    
			var arr = rollJx(1, 11, 2, parseInt(n));
			ClearAll('Q2', 2);
			ClearAll('Q2', 3);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR2 = lottery;
				var controlRed = syydjR2.lastIndexOf(";");
				var red = syydjR2.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];

						red2 += parseInt(red4, 10) + "-";

					}
				}
				lotteryNumber = "141@" + red2.substring(0, red2.length - 1) + ";";
				lotteryView = lottery.substring(0, lottery.length - 1);
				//lotteryView = decodeURI(EncodeUtf8(' 前二直选　' ))+lotteryView.replace(/\-/g," ");//显示的注码串
				//var lotteryView2 = lotteryView.replace(/\,/g,"|");
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "141");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二直选单式')) + "]" + lotteryView.replace(/\-/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		} else if ($("#sub_nav_2_QEZF").is(":visible")) {
			// 131@0101^;前二组选5注	    
			var arr = rollJx(1, 11, 2, parseInt(n));
			ClearAll('Z2', 1);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR2 = lottery;
				var controlRed = syydjR2.lastIndexOf(";");
				var red = syydjR2.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];
						red2 += parseInt(red4, 10) + ",";
					}
				}
				lotteryNumber = "131@" + red2.substring(0, red2.length - 1) + ";";

				lotteryView = lottery.substring(0, lottery.length - 1);
				//lotteryView = decodeURI(EncodeUtf8(' 前二组选　' ))+lotteryView.replace(/\,/g," ");//显示的注码串
				//var lotteryView2 = lotteryView.replace(/\,/g,"|");
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "131");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二组选单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		} else if ($("#sub_nav_2_REF").is(":visible")) {
			// 111@0101^;任二单式 5注	    
			var arr = rollJx(1, 11, 2, parseInt(n));
			ClearAll('R2', 1);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR2 = lottery;
				var controlRed = syydjR2.lastIndexOf(";");
				var red = syydjR2.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];
						red2 += parseInt(red4, 10) + ",";
					}
				}
				lotteryNumber = "111@" + red2.substring(0, red2.length - 1) + ";";

				lotteryView = lottery.substring(0, lottery.length - 1);
				//	lotteryView = decodeURI(EncodeUtf8(' 任二单式　' ))+lotteryView.replace(/\,/g," ");//显示的注码串
				//var lotteryView2 = lotteryView.replace(/\,/g,"|");
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "111");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任二单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		}
		//选三
	} else if ($("#sub_nav_3").is(":visible")) {
		if ($("#sub_nav_3_QSZhiF").is(":visible")) {
			// 161@010203^;前三直 选5注 机选	    
			var arr = rollJx(1, 11, 3, parseInt(n));
			ClearAll('Q3', 2);
			ClearAll('Q3', 3);
			ClearAll('Q3', 4);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR3 = lottery;
				var controlRed = syydjR3.lastIndexOf(";");
				var red = syydjR3.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];

						red2 += parseInt(red4, 10) + "-";

					}
				}
				lotteryNumber = "161@" + red2.substring(0, red2.length - 1) + ";";

				lotteryView = lottery.substring(0, lottery.length - 1);
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "161");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三直选单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		} else if ($("#sub_nav_3_QSZF").is(":visible")) {
			// 151@010203^;前三组选5注	    
			var arr = rollJx(1, 11, 3, parseInt(n));
			ClearAll('Z3', 1);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR3 = lottery;
				var controlRed = syydjR3.lastIndexOf(";");
				var red = syydjR3.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];
						red2 += parseInt(red4, 10) + ",";
					}
				}
				lotteryNumber = "151@" + red2.substring(0, red2.length - 1) + ";";

				lotteryView = lottery.substring(0, lottery.length - 1);
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "151");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三组选单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		} else if ($("#sub_nav_3_RSF").is(":visible")) {
			// 112@010203^;任三单式 5注	    
			var arr = rollJx(1, 11, 3, parseInt(n));
			ClearAll('R3', 1);
			for (var i = 0; i < parseInt(n); i++) {
				var lotteryNumber = "";
				var arr1 = arr[i];
				lottery = arr1 + ";";

				syydjR3 = lottery;
				var controlRed = syydjR3.lastIndexOf(";");
				var red = syydjR3.substring(0, controlRed);
				var red2 = "";
				if (red.indexOf(",") > -1) {
					var red3 = red.split(",");
					for (var j = 0; j < red3.length; j++) {
						var red4 = red3[j];
						red2 += parseInt(red4, 10) + ",";
					}
				}
				lotteryNumber = "112@" + red2.substring(0, red2.length - 1) + ";";

				lotteryView = lottery.substring(0, lottery.length - 1);
				var opt = new Option(lotteryView, lotteryNumber);
				var frontLot = lottery;
				opt.setAttribute('allLot', frontLot);
				opt.setAttribute('backLot', lotteryNumber);
				opt.setAttribute('wangFang', "112");
				opt.setAttribute('zhushu', "1");
				opt.setAttribute('money', 2);
				opt.setAttribute('delMoney', 2);
				lotteryListSelect[0].options.add(opt);
				//号码蓝样式
				lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任三单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
				add_codes(lotteryView, lotteryNumber); //用于号码回显
			}
		}
	} else //任四
	if ($("#sub_nav_4").is(":visible")) {
		// 113@01020304^;机选5注	    
		var arr = rollJx(1, 11, 4, parseInt(n));
		ClearAll(4, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR4 = lottery;
			var controlRed = syydjR4.lastIndexOf(";");
			var red = syydjR4.substring(0, controlRed);
			var red2 = "";
			if (red.indexOf(",") > -1) {
				var red3 = red.split(",");
				for (var j = 0; j < red3.length; j++) {
					var red4 = red3[j];
					red2 += parseInt(red4, 10) + ",";
				}
			}
			lotteryNumber = "113@" + red2.substring(0, red2.length - 1) + ";";
			lotteryView = lottery.substring(0, lottery.length - 1);

			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "113");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任四单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
	} else //任五
	if ($("#sub_nav_5").is(":visible")) {
		// 114@0102030405^;机选5注	    
		var arr = rollJx(1, 11, 5, parseInt(n));
		ClearAll(5, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR5 = lottery;
			var controlRed = syydjR5.lastIndexOf(";");
			var red = syydjR5.substring(0, controlRed);
			var red2 = "";
			if (red.indexOf(",") > -1) {
				var red3 = red.split(",");
				for (var j = 0; j < red3.length; j++) {
					var red4 = red3[j];
					red2 += parseInt(red4, 10) + ",";
				}
			}
			lotteryNumber = "114@" + red2.substring(0, red2.length - 1) + ";";
			lotteryView = lottery.substring(0, lottery.length - 1);

			//lotteryView = decodeURI(EncodeUtf8(' 任五单式　' ))+lotteryView.replace(/\,/g," ");//显示的注码串
			//var lotteryView2 = lotteryView.replace(/\,/g,"|");
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "114");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任五单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
	} else //任六
	if ($("#sub_nav_6").is(":visible")) {
		// 115@010203040506^;机选5注	    
		var arr = rollJx(1, 11, 6, parseInt(n));

		ClearAll(6, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR6 = lottery;
			var controlRed = syydjR6.lastIndexOf(";");
			var red = syydjR6.substring(0, controlRed);
			var red2 = "";
			if (red.indexOf(",") > -1) {
				var red3 = red.split(",");
				for (var j = 0; j < red3.length; j++) {
					var red4 = red3[j];
					red2 += parseInt(red4, 10) + ",";
				}
			}
			lotteryNumber = "115@" + red2.substring(0, red2.length - 1) + ";";
			lotteryView = lottery.substring(0, lottery.length - 1);

			//lotteryView = decodeURI(EncodeUtf8(' 任六单式　' ))+lotteryView.replace(/\,/g," ");//显示的注码串
			//var lotteryView2 = lotteryView.replace(/\,/g,"|");
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "115");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任六单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
	} else //任七
	if ($("#sub_nav_7").is(":visible")) {
		// 116@01020304050607^;机选5注	    
		var arr = rollJx(1, 11, 7, parseInt(n));
		ClearAll(7, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR8 = lottery;
			var controlRed = syydjR8.lastIndexOf(";");
			var red = syydjR8.substring(0, controlRed);
			var red2 = "";
			if (red.indexOf(",") > -1) {
				var red3 = red.split(",");
				for (var j = 0; j < red3.length; j++) {
					var red4 = red3[j];
					red2 += parseInt(red4, 10) + ",";
				}
			}
			lotteryNumber = "116@" + red2.substring(0, red2.length - 1) + ";";
			lotteryView = lottery.substring(0, lottery.length - 1);

			//lotteryView = decodeURI(EncodeUtf8(' 任七单式　' ))+lotteryView.replace(/\,/g," ");//显示的注码串
			//var lotteryView2 = lotteryView.replace(/\,/g,"|");
			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "116");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任七单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
	} else //任八
	if ($("#sub_nav_8").is(":visible")) {
		// 117@0102030405060708^;机选5注	    
		var arr = rollJx(1, 11, 8, parseInt(n));
		ClearAll(8, 1);
		for (var i = 0; i < parseInt(n); i++) {
			var lotteryNumber = "";
			var arr1 = arr[i];
			lottery = arr1 + ";";

			syydjR8 = lottery;
			var controlRed = syydjR8.lastIndexOf(";");
			var red = syydjR8.substring(0, controlRed);
			var red2 = "";
			if (red.indexOf(",") > -1) {
				var red3 = red.split(",");
				for (var j = 0; j < red3.length; j++) {
					var red4 = red3[j];
					red2 += parseInt(red4, 10) + ",";
				}
			}
			lotteryNumber = "117@" + red2.substring(0, red2.length - 1) + ";";
			lotteryView = lottery.substring(0, lottery.length - 1);

			var opt = new Option(lotteryView, lotteryNumber);
			var frontLot = lottery;
			opt.setAttribute('allLot', frontLot);
			opt.setAttribute('backLot', lotteryNumber);
			opt.setAttribute('wangFang', "117");
			opt.setAttribute('zhushu', "1");
			opt.setAttribute('money', 2);
			opt.setAttribute('delMoney', 2);
			lotteryListSelect[0].options.add(opt);
			//号码蓝样式
			lotteryView = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任八单式')) + "]" + lotteryView.replace(/\,/g, " ") + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
			add_codes(lotteryView, lotteryNumber); //用于号码回显
		}
	}
}

//
// 十一运夺金  机选核心方法
// @param minNum 最小号码
// @param col 最大号码
// @param row 选择号码个数
// @param lotteryCount 循环几注
// @returns {Array} 返回注码串
// 
function rollJx(minNum, col, row, lotteryCount) {
	var oneOrZero = minNum == 0 ? 1 : 0;
	var bigArray = new Array();
	for (var j = 0; j < lotteryCount; j++) {
		var tempArr = new Array();
		var strTemp = "";
		for (var i = 0; i < row; i++) {
			var colstr = (GetRandNumber(col) - oneOrZero) + "";
			if (strTemp.indexOf("#") > -1) {
				var strtm = strTemp.split("#");
				for (var k = 0; k < strtm.length; k++) {
					if (parseInt(colstr, 10) == parseInt(strtm[k], 10)) { //判断是否有重复
						colstr = ((parseInt(colstr, 10) + 1) > 11 ? 1 : (parseInt(colstr, 10) + 1)) + "";
						if (parseInt(colstr, 10) == parseInt(strtm[0], 10)) {
							colstr = ((parseInt(colstr, 10) + 1) > 11 ? 1 : (parseInt(colstr, 10) + 1)) + "";
						}
						k = 0;
						continue;
					}
				}

			}
			if (colstr.length < 2) {
				colstr = "0" + colstr;
			}
			strTemp += colstr + "#";
			tempArr.push(colstr);
		}
		bigArray.push(tempArr);
	}
	return bigArray;
}
//十一运夺金_选一.js  开始
function SelectBallX1(sender) { //选一直选
	//获取
	var Selected = GetBallStateX1ZhiF(sender);
	if (Selected) {
		SetBallStateX1_ZhiF(sender, false);
		//算钱数
		CheckFullZhiF();
		return;
	}
	SetBallStateX1_ZhiF(sender, true);
	//算钱数
	CheckFullZhiF();
}
function QuickSelectX1ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZhiF(row, i);
		SetBallStateX1_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateX1_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateX1_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateX1_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateX1_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectZhiF(row, i);
			SetBallStateX1_ZhiF(obj, true);
		}
	}
	CheckFullZhiF();
}

function GetBallObjectZhiF(row, col) {
	var obj = document.getElementById("td_1_" + row + "_" + col);
	return obj;
}
//获取 选一的选球个数
function GetBallSelectedNumX1ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZhiF(row, i);
		if (GetBallStateX1ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateX1ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//选一 直选
function SetBallStateX1_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}
var p = 0;
//获取金额
function CheckFullZhiF() {
	var invest = GetLotteryInvestNumX1ZhiF();
	p = invest * 2;
	$("#x_zhu").html(invest + "");
	$("#x_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_2_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_2_Add").setAttribute('isdisabled', 'false');
}
//选一 注码 传给 后台的注码串 
function GetLotteryNumberZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZhiF(1, j);
		if (GetBallStateX1ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	ziXuanCode = "101@" + LotteryNumber + ";";
	return ziXuanCode;
}
//选一 显示的注码串格式
function getFrontX1ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZhiF(1, j);
		if (GetBallStateX1ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp.substring(0, temp.length - 1) + temp.substring(temp.length, temp.length).replace(",", "");
	return LotteryNumber.trim();
}
//获取选1 的注数
function GetLotteryInvestNumX1ZhiF() {
	var InvestNum = 1;
	for (var i = 1; i < 2; i++) InvestNum *= GetBallSelectedNumX1ZhiF(i);
	return InvestNum;
}
//选一  添加到号码栏
function btn_2_AddClickX1ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumX1ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumX1ZhiF(1);
	if (count > 6) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选6个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_2_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontX1ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('前一直选 　')) + lotteryView;
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "101");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前一直选单式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前一直选复式')) + "]" + lotteryView + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(1, 1);
}

//十一运夺金_X1ZiXuan.js 结束

//十一运夺金_Q2ZiXuan.js 开始
//十一运夺金_Q2zhixuan.js 开始
function SelectBallQ2zhixuan(BallNum, BallType) { //前二直选
	//获取
	var Selected = GetBallStateQ2zhixuan(BallNum, BallType);

	if (Selected) {
		SetBallStateQ2(BallNum, false, BallType);
		//算钱数
		CheckFullQ2zhixuan();
		return;
	}
	SetBallStateQ2(BallNum, true, BallType);
	//算钱数
	CheckFullQ2zhixuan();
	return;
}

function QuickSelectQ2zhixuan(sender) {
	var str = sender.id;
	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {

		SetBallStateQ2(i, false, row);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			SetBallStateQ2(i, true, row);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			SetBallStateQ2(i, true, row);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			SetBallStateQ2(i, true, row);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			SetBallStateQ2(i, true, row);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			SetBallStateQ2(i, true, row);
		}
	}
	CheckFullQ2zhixuan();
}

function GetBallObjectQ2DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_Q2_" + row + "_" + col);
	return obj;
}

//获取 前二直选的选球个数
function GetBallSelectedNumQ2zhixuan(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateQ2zhixuan(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateQ2zhixuan(BallNum, BallType) {
	var isSelectedAttr;
	isSelectedAttr = $("#td_Q2_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//前二直选 
function SetBallStateQ2(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_Q2_" + BallType + "_" + BallNum);
	if (SelectState) {
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullQ2zhixuan() {
	var invest = GetLotteryInvestNumQ2zhixuan();
	p = invest * 2;
	$("#Q2zhixuan_zhu").html(invest + "");
	$("#Q2zhixuan_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Q2zhixuan_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Q2zhixuan_Add").setAttribute('isdisabled', 'false');
}
//前二直选 注码 传给 后台的注码串 
function GetLotteryNumberQ2zhixuan() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";

	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(2, j);
		if (GetBallStateQ2zhixuan(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	var shiwei = "a";
	if (temp.indexOf(",") < 0) { //十位数只有一位
		shiwei = temp;
	}
	temp = temp + "-";
	var geweichuan = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(3, j);
		if (GetBallStateQ2zhixuan(j, 3)) {
			temp += parseInt(obj.innerHTML.trim(), 10) + ",";
			geweichuan += parseInt(obj.innerHTML.trim(), 10) + ",";
		}
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	geweichuan = geweichuan.substring(0, geweichuan.length - 1);
	var gewei = "b";
	if (geweichuan.indexOf(",") < 0) { //个位数只有一位
		gewei = geweichuan;
	}
	//如果个位 或者 十位 有一个只有一位  重新拼接注码
	if (shiwei != "a" || gewei != "b") {
		if (shiwei != "a") {
			temp = "";
			for (var j = 0; j < 12; j++) {
				var obj = GetBallObjectQ2DanmaOrTuoma(2, j);
				if (GetBallStateQ2zhixuan(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
			}
			temp = temp.trim();
			ball1 = temp.lastIndexOf(",");
			temp = temp.substring(0, ball1);
			temp = temp + "-";
			for (var j = 0; j < 12; j++) {
				var obj = GetBallObjectQ2DanmaOrTuoma(3, j);
				if (GetBallStateQ2zhixuan(j, 3)) {
					if (parseInt(obj.innerHTML.trim(), 10) != parseInt(shiwei, 10)) {
						temp += parseInt(obj.innerHTML.trim(), 10) + ",";
					}
				}
			}
			temp = temp.trim();
			ball1 = temp.lastIndexOf(",");
			temp = temp.substring(0, ball1);
		} else {
			temp = "";
			for (var j = 0; j < 12; j++) {
				var obj = GetBallObjectQ2DanmaOrTuoma(2, j);
				if (GetBallStateQ2zhixuan(j, 2)) {
					if (parseInt(obj.innerHTML.trim(), 10) != parseInt(gewei, 10)) {
						temp += parseInt(obj.innerHTML.trim(), 10) + ",";
					}
				}
			}
			temp = temp.trim();
			ball1 = temp.lastIndexOf(",");
			temp = temp.substring(0, ball1);
			temp = temp + "-";
			for (var j = 0; j < 12; j++) {
				var obj = GetBallObjectQ2DanmaOrTuoma(3, j);
				if (GetBallStateQ2zhixuan(j, 3)) {
					temp += parseInt(obj.innerHTML.trim(), 10) + ",";
				}
			}
			temp = temp.trim();
			ball1 = temp.lastIndexOf(",");
			temp = temp.substring(0, ball1);
		}
	}
	LotteryNumber += temp;
	//142@010*203^; 
	if (GetLotteryInvestNumQ2zhixuan() == 1) {
		dantuoCode = "141@" + LotteryNumber + ";";
	} else {
		dantuoCode = "142@" + LotteryNumber + ";";
	}
	return dantuoCode;
}
//前二直选 注码 重复个数 
function GetLotteryNumberQ2chongfuzhuma() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(2, j);
		if (GetBallStateQ2zhixuan(j, 2)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			temp += (zhuma + "");
		}
	}
	temp = temp.trim();
	var temp2 = temp;
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(3, j);
		if (GetBallStateQ2zhixuan(j, 3)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp.indexOf(zhuma) < 0) {
				temp += zhuma;
			}
			temp2 += (zhuma + "");
		}
	}
	temp = temp.trim();
	var str = 0;
	str = temp2.length - temp.length;
	return str;
}
//前二直选 显示的注码串格式 k是2.十位类型 还是3.个位类行 
function getFrontQ2zhixuan_shiwei() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(2, j);
		if (GetBallStateQ2zhixuan(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//前二直选 显示的注码串格式 k是2.十位类型 还是3.个位类行 
function getFrontQ2zhixuan_gewei() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectQ2DanmaOrTuoma(3, j);
		if (GetBallStateQ2zhixuan(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取前二直选 的注数
function GetLotteryInvestNumQ2zhixuan() {
	//获取十位
	var danmaCount = GetBallSelectedNumQ2zhixuan(2);
	//获取个位
	var tuomaCount = GetBallSelectedNumQ2zhixuan(3);
	//重复个数  
	var chongfu = GetLotteryNumberQ2chongfuzhuma();
	var InvestNum = 0;
	InvestNum = tuomaCount * danmaCount - chongfu;
	return InvestNum;
}
//前二直选  添加到号码栏
function btn_2_AddClickQ2zhixuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumQ2zhixuan();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}

	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Q2zhixuan_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontQ2zhixuan_shiwei();
	var lotteryView_tuoma = getFrontQ2zhixuan_gewei();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberQ2zhixuan();
	var lotteryView2 = lotteryView.substring(0, lotteryView.length - 1) + "|" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var view = decodeURI(EncodeUtf8('前二直选复式')) + "|" + lotteryView2 + "|" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元"));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "141");
	} else {
		opt.setAttribute('wangFang', "142");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二直选单式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二直选定位复式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Q2', 2);
	ClearAll('Q2', 3);
}
//十一运夺金_Q2zhixuan.js 结束 

//十一运夺金_Q2ZiXuan.js 结束

//十一运夺金_Q2ZuXuan.js 开始
//十一运夺金_Z2ZiXuan.js 开始
function SelectBallZ2(sender) { //前二组选直选
	//获取
	var Selected = GetBallStateZ2ZhiF(sender);
	if (Selected) {
		SetBallStateZ2_ZhiF(sender, false);
		//算钱数
		CheckFullZ2ZhiF();
		return;
	}
	SetBallStateZ2_ZhiF(sender, true);
	//算钱数
	CheckFullZ2ZhiF();
}
function QuickSelectZ2ZhiF(sender) {
	var str = sender.id;
	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZ2ZhiF(row, i);
		SetBallStateZ2_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectZ2ZhiF(row, i);
			SetBallStateZ2_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectZ2ZhiF(row, i);
			SetBallStateZ2_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectZ2ZhiF(row, i);
			SetBallStateZ2_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectZ2ZhiF(row, i);
			SetBallStateZ2_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectZ2ZhiF(row, i);
			SetBallStateZ2_ZhiF(obj, true);
		}
	}
	CheckFullZ2ZhiF();
}

function GetBallObjectZ2ZhiF(row, col) {
	var obj = document.getElementById("td_Z2_" + row + "_" + col);
	return obj;
}
//获取 前二组选的选球个数
function GetBallSelectedNumZ2ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZ2ZhiF(row, i);
		if (GetBallStateZ2ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateZ2ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//前二组选 直选
function SetBallStateZ2_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullZ2ZhiF() {
	var invest = GetLotteryInvestNumZ2ZhiF();
	p = invest * 2;
	$("#Z2zhi_zhu").html(invest + "");
	$("#Z2zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Z2_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Z2_Add").setAttribute('isdisabled', 'false');
}
//前二组选 注码 传给 后台的注码串 
function GetLotteryNumberZ2ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ2ZhiF(1, j);
		if (GetBallStateZ2ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumZ2ZhiF() == 1) {
		ziXuanCode = "131@" + LotteryNumber + ";";
	} else {

		ziXuanCode = "108@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//前二组选 显示的注码串格式
function getFrontZ2ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ2ZhiF(1, j);
		if (GetBallStateZ2ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;
	return LotteryNumber.trim();
}
//获取前二组选 的注数
function GetLotteryInvestNumZ2ZhiF() {
	var Count = GetBallSelectedNumZ2ZhiF(1);

	if (Count < 2) return 0;
	if (Count == 2) return 1;

	var InvestNum = 1;
	for (var i = 3; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 2); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//前二组选  添加到号码栏
function btn_2_AddClickZ2zuxuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumZ2ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Z2_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontZ2ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZ2ZhiF();
	var lotteryView2 = lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "131");
	} else {
		opt.setAttribute('wangFang', "108");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二组选单式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前二组选复式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Z2', 1);
}
//十一运夺金_Z2ZiXuan.js 结束   
//十一运夺金_Q2ZuXuan.js 结束

//十一运夺金_Q2dantuo.js 开始
//十一运夺金_Z2dantuo.js 开始
function SelectBallZ2danTuo(BallNum, BallType) { //前二胆拖
	//获取
	var Selected = GetBallStateZ2dantuo(BallNum, BallType);
	if (Selected) {
		SetBallStateZ2_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullZ2dantuo();
		return;
	}
	SetBallStateZ2_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateZ2_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateZ2_dantuo(BallNum, false, 2);
	}
	//算钱数
	CheckFullZ2dantuo();
	return;
}
function GetBallObjectZ2DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_Z2_" + row + "_" + col);
	return obj;
}

//获取 前二胆拖的选球个数
function GetBallSelectedNumZ2dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateZ2dantuo(i, row)) Count++;
	}

	return Count;
}
//判断是否选中
function GetBallStateZ2dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_Z2_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//前二胆拖 
function SetBallStateZ2_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_Z2_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumZ2dantuo(2) > 0) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过1个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullZ2dantuo() {
	var invest = GetLotteryInvestNumZ2dantuo();
	p = invest * 2;
	$("#Z2dantuo_zhu").html(invest + "");
	$("#Z2dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Z2dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Z2dantuo_Add").setAttribute('isdisabled', 'false');
}
//前二胆拖 注码 传给 后台的注码串 
function GetLotteryNumberZ2dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ2DanmaOrTuoma(2, j);
		if (GetBallStateZ2dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ2DanmaOrTuoma(3, j);
		if (GetBallStateZ2dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//133@01*0203^; 
	dantuoCode = "133@" + LotteryNumber + ";";
	return dantuoCode;
}
//前二胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontZ2dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ2DanmaOrTuoma(2, j);
		if (GetBallStateZ2dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//前二胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontZ2dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ2DanmaOrTuoma(3, j);
		if (GetBallStateZ2dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取前二胆拖 的注数
function GetLotteryInvestNumZ2dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumZ2dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumZ2dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 2, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//前二胆拖  添加到号码栏
function btn_2_AddClickZ2dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumZ2dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumZ2dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有3个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Z2dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontZ2dantuo();
	var lotteryView_tuoma = getFrontZ2dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberZ2dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[前二胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "133");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('前二胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('前二拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('前二胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('前二拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Z2', 2);
	ClearAll('Z2', 3);
}
//十一运夺金_Z2dantuo.js 结束
//十一运夺金_Q2dantuo.js 结束

//十一运夺金_R2ZiXuan.js 开始
//十一运夺金_R2ZiXuan.js 开始
function SelectBallR2(sender) { //任二复式直选
	//获取
	var Selected = GetBallStateR2ZhiF(sender);
	if (Selected) {
		SetBallStateR2_ZhiF(sender, false);
		//算钱数
		CheckFullR2ZhiF();
		return;
	}
	SetBallStateR2_ZhiF(sender, true);
	//算钱数
	CheckFullR2ZhiF();
}
function QuickSelectR2ZhiF(sender) {
	var str = sender.id;
	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR2ZhiF(row, i);
		SetBallStateR2_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR2ZhiF(row, i);
			SetBallStateR2_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR2ZhiF(row, i);
			SetBallStateR2_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR2ZhiF(row, i);
			SetBallStateR2_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR2ZhiF(row, i);
			SetBallStateR2_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR2ZhiF(row, i);
			SetBallStateR2_ZhiF(obj, true);
		}
	}
	CheckFullR2ZhiF();
}

function GetBallObjectR2ZhiF(row, col) {
	var obj = document.getElementById("td_R2_" + row + "_" + col);
	return obj;
}
//获取 任二复式的选球个数
function GetBallSelectedNumR2ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR2ZhiF(row, i);
		if (GetBallStateR2ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR2ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任二复式 直选
function SetBallStateR2_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR2ZhiF() {
	var invest = GetLotteryInvestNumR2ZhiF();
	p = invest * 2;
	$("#R2zhi_zhu").html(invest + "");
	$("#R2zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R2_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R2_Add").setAttribute('isdisabled', 'false');
}
//任二复式 注码 传给 后台的注码串 
function GetLotteryNumberR2ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR2ZhiF(1, j);
		if (GetBallStateR2ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR2ZhiF() == 1) {
		ziXuanCode = "111@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "102@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//任二复式 显示的注码串格式
function getFrontR2ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR2ZhiF(1, j);
		if (GetBallStateR2ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任二复式 的注数
function GetLotteryInvestNumR2ZhiF() {
	var Count = GetBallSelectedNumR2ZhiF(1);

	if (Count < 2) return 0;
	if (Count == 2) return 1;

	var InvestNum = 1;
	for (var i = 3; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 2); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任二复式  添加到号码栏
function btn_2_AddClickR2zuxuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR2ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR2ZhiF(1);
	if (count > 3) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选3个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R2_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR2ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR2ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任二复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "111");
	} else {
		opt.setAttribute('wangFang', "102");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任二单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任二复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('R2', 1);
}
//十一运夺金_R2ZiXuan.js 结束
//十一运夺金_R2ZiXuan.js 结束

//十一运夺金_R2dantuo.js 开始
function SelectBallR2danTuo(BallNum, BallType) { //任二胆拖
	//获取
	var Selected = GetBallStateR2dantuo(BallNum, BallType);

	if (Selected) {
		SetBallStateR2_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR2dantuo();
		return;
	}
	SetBallStateR2_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR2_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR2_dantuo(BallNum, false, 2);
	}

	//算钱数
	CheckFullR2dantuo();
	return;
}
function GetBallObjectR2DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_R2_" + row + "_" + col);
	return obj;
}

//获取 任二胆拖的选球个数
function GetBallSelectedNumR2dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR2dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR2dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_R2_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任二胆拖 
function SetBallStateR2_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_R2_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR2dantuo(2) > 0) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过1个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR2dantuo() {
	var invest = GetLotteryInvestNumR2dantuo();
	p = invest * 2;
	$("#R2dantuo_zhu").html(invest + "");
	$("#R2dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R2dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R2dantuo_Add").setAttribute('isdisabled', 'false');
}
//任二胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR2dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR2DanmaOrTuoma(2, j);
		if (GetBallStateR2dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR2DanmaOrTuoma(3, j);
		if (GetBallStateR2dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//121@01*02030405060708^; 
	dantuoCode = "121@" + LotteryNumber + ";";
	return dantuoCode;
}
//任二胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR2dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR2DanmaOrTuoma(2, j);
		if (GetBallStateR2dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任二胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR2dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR2DanmaOrTuoma(3, j);
		if (GetBallStateR2dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任二胆拖 的注数
function GetLotteryInvestNumR2dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR2dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR2dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 2, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任二胆拖  添加到号码栏
function btn_2_AddClickR2dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR2dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR2dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有3个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R2dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR2dantuo();
	var lotteryView_tuoma = getFrontR2dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR2dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任二胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "121");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任二胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任二拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任二胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任二拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('R2', 2);
	ClearAll('R2', 3);
}
//十一运夺金_R2dantuo.js 结束

//十一运夺金_Q3ZiXuan.js 开始
//十一运夺金_Q3zhixuan.js 开始
function SelectBallQ3zhixuan(BallNum, BallType) { //前三直选
	//获取
	var Selected = GetBallStateQ3zhixuan(BallNum, BallType);

	if (Selected) {
		SetBallStateQ3(BallNum, false, BallType);
		//算钱数
		CheckFullQ3zhixuan();
		return;
	}
	SetBallStateQ3(BallNum, true, BallType);

	//算钱数
	CheckFullQ3zhixuan();
	return;
}

function QuickSelectQ3zhixuan(sender) {
	var str = sender.id;

	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {

		SetBallStateQ3(i, false, row);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			SetBallStateQ3(i, true, row);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			SetBallStateQ3(i, true, row);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			SetBallStateQ3(i, true, row);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			SetBallStateQ3(i, true, row);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			SetBallStateQ3(i, true, row);
		}
	}
	CheckFullQ3zhixuan();
}

function GetBallObjectQ3DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_Q3_" + row + "_" + col);
	return obj;
}

//获取 前三直选的选球个数
function GetBallSelectedNumQ3zhixuan(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateQ3zhixuan(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateQ3zhixuan(BallNum, BallType) {
	var isSelectedAttr;
	isSelectedAttr = $("#td_Q3_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//前三直选 
function SetBallStateQ3(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_Q3_" + BallType + "_" + BallNum);

	if (SelectState) {
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');

	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullQ3zhixuan() {
	var invest = GetLotteryInvestNumQ3zhixuan();
	p = invest * 2;
	$("#Q3zhixuan_zhu").html(invest + "");
	$("#Q3zhixuan_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Q3zhixuan_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Q3zhixuan_Add").setAttribute('isdisabled', 'false');
}
//前三直选 注码 传给 后台的注码串 
function GetLotteryNumberQ3zhixuan() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(2, j);
		if (GetBallStateQ3zhixuan(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "-";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(3, j);
		if (GetBallStateQ3zhixuan(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "-";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(4, j);
		if (GetBallStateQ3zhixuan(j, 4)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//162@01*02*03^; 
	if (GetLotteryInvestNumQ3zhixuan() == 1) {
		dantuoCode = "161@" + LotteryNumber + ";";
	} else {
		dantuoCode = "162@" + LotteryNumber + ";";
	}
	return dantuoCode;
}
//前三直选 第一位和第二位的重复注码个数 
function Q3_1and2() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(2, j);
		if (GetBallStateQ3zhixuan(j, 2)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			temp += (zhuma + "");
		}
	}
	temp = temp.trim();
	var temp2 = temp;
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(3, j);
		if (GetBallStateQ3zhixuan(j, 3)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp.indexOf(zhuma) < 0) {
				temp += zhuma;
			}
			temp2 += (zhuma + "");
		}
	}
	temp = temp.trim();
	var str = 0;
	str = temp2.length - temp.length;
	return str;
}
//前三直选 第一位和第三位的重复注码个数 
function Q3_1and3() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(2, j);
		if (GetBallStateQ3zhixuan(j, 2)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			temp += (zhuma + "");
		}
	}
	temp = temp.trim();
	var temp2 = temp;
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(4, j);
		if (GetBallStateQ3zhixuan(j, 4)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp.indexOf(zhuma) < 0) {
				temp += zhuma;
			}
			temp2 += (zhuma + "");
		}
	}
	temp = temp.trim();
	var str = 0;
	str = temp2.length - temp.length;
	return str;
}
//前三直选 第二位和第三位的重复注码个数 
function Q3_2and3() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(3, j);
		if (GetBallStateQ3zhixuan(j, 3)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			temp += (zhuma + "");
		}
	}
	temp = temp.trim();
	var temp2 = temp;
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(4, j);
		if (GetBallStateQ3zhixuan(j, 4)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp.indexOf(zhuma) < 0) {
				temp += zhuma;
			}
			temp2 += (zhuma + "");
		}
	}
	temp = temp.trim();
	var str = 0;
	str = temp2.length - temp.length;
	return str;
}
//前三直选 三位的重复注码个数 
function Q3_all() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(2, j);
		if (GetBallStateQ3zhixuan(j, 2)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			temp += (zhuma + "");
		}
	}
	temp = temp.trim();
	var temp2 = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(3, j);
		if (GetBallStateQ3zhixuan(j, 3)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp.indexOf(zhuma) > -1) {
				temp2 += (zhuma + "");
			}
		}
	}
	var temp3 = 0;
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(4, j);
		if (GetBallStateQ3zhixuan(j, 4)) {
			var zhuma = parseInt(obj.innerHTML.trim(), 10);
			if (parseInt(obj.innerHTML.trim(), 10) == 1) {
				zhuma = "i";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 10) {
				zhuma = "t";
			}
			if (parseInt(obj.innerHTML.trim(), 10) == 11) {
				zhuma = "e";
			}
			if (temp2.indexOf(zhuma) > -1) {
				temp3++;
			}
		}
	}
	return temp3;
}

//前三直选 显示的注码串格式 k是2.十位类型 还是3.个位类行 
function getFrontQ3zhixuan_shiwei() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(2, j);
		if (GetBallStateQ3zhixuan(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//前三直选 显示的注码串格式 k是2.十位类型 还是3.个位类行 
function getFrontQ3zhixuan_gewei() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(3, j);
		if (GetBallStateQ3zhixuan(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//前三直选 显示的注码串格式 k是2.十位类型 还是3.个位类行 
function getFrontQ3zhixuan_mowei() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectQ3DanmaOrTuoma(4, j);
		if (GetBallStateQ3zhixuan(j, 4)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取前三直选 的注数
function GetLotteryInvestNumQ3zhixuan() {
	//获取十位
	var shiwei = GetBallSelectedNumQ3zhixuan(2);
	//获取个位
	var gewei = GetBallSelectedNumQ3zhixuan(3);
	//末位
	var mowei = GetBallSelectedNumQ3zhixuan(4);

	//重复个数  
	var chongfu_1and2 = Q3_1and2();
	var chongfu_1and3 = Q3_1and3();
	var chongfu_2and3 = Q3_2and3();
	var chongfu_all = Q3_all();

	var InvestNum = 0;
	InvestNum = (gewei * shiwei * mowei) - (shiwei * chongfu_2and3) - (gewei * chongfu_1and3) - (mowei * chongfu_1and2) + (chongfu_all * 2);
	return InvestNum;
}
//前三直选  添加到号码栏
function btn_2_AddClickQ3zhixuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumQ3zhixuan();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Q3zhixuan_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontQ3zhixuan_shiwei();
	var lotteryView_tuoma = getFrontQ3zhixuan_gewei();
	var lotteryView_mowei = getFrontQ3zhixuan_mowei();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberQ3zhixuan();
	var lotteryView2 = lotteryView.substring(0, lotteryView.length - 1) + "|" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "|" + lotteryView_mowei.substring(0, lotteryView_mowei.length - 1);
	var view = decodeURI(EncodeUtf8('前三直选复式')) + "|" + lotteryView2 + "|" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元"));
	var opt = new Option(view, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "161");
	} else {
		opt.setAttribute('wangFang', "162");
	}
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三直选单式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三直选定位复式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Q3', 2);
	ClearAll('Q3', 3);
	ClearAll('Q3', 4);
}
//十一运夺金_Q3zhixuan.js 结束
//十一运夺金_Q3ZiXuan.js 结束

//十一运夺金_Q3ZuXuan.js 开始
//十一运夺金_Z3ZiXuan.js 开始
function SelectBallZ3(sender) { //前三组选
	//获取
	var Selected = GetBallStateZ3ZhiF(sender);
	if (Selected) {
		SetBallStateZ3_ZhiF(sender, false);
		//算钱数
		CheckFullZ3ZhiF();
		return;
	}
	SetBallStateZ3_ZhiF(sender, true);
	//算钱数
	CheckFullZ3ZhiF();
}
function QuickSelectZ3ZhiF(sender) {
	var str = sender.id;
	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZ3ZhiF(row, i);
		SetBallStateZ3_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectZ3ZhiF(row, i);
			SetBallStateZ3_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectZ3ZhiF(row, i);
			SetBallStateZ3_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectZ3ZhiF(row, i);
			SetBallStateZ3_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectZ3ZhiF(row, i);
			SetBallStateZ3_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectZ3ZhiF(row, i);
			SetBallStateZ3_ZhiF(obj, true);
		}
	}
	CheckFullZ3ZhiF();
}

function GetBallObjectZ3ZhiF(row, col) {
	var obj = document.getElementById("td_Z3_" + row + "_" + col);
	return obj;
}
//获取 前三组选的选球个数
function GetBallSelectedNumZ3ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectZ3ZhiF(row, i);
		if (GetBallStateZ3ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateZ3ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//前三组选 直选
function SetBallStateZ3_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullZ3ZhiF() {
	var invest = GetLotteryInvestNumZ3ZhiF();
	p = invest * 2;
	$("#Z3zhi_zhu").html(invest + "");
	$("#Z3zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Z3_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Z3_Add").setAttribute('isdisabled', 'false');
}
//前三组选 注码 传给 后台的注码串 
function GetLotteryNumberZ3ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ3ZhiF(1, j);
		if (GetBallStateZ3ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumZ3ZhiF() == 1) {
		ziXuanCode = "151@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "109@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//前三组选 显示的注码串格式
function getFrontZ3ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ3ZhiF(1, j);
		if (GetBallStateZ3ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取前三组选 的注数
function GetLotteryInvestNumZ3ZhiF() {
	var Count = GetBallSelectedNumZ3ZhiF(1);

	if (Count < 3) return 0;
	if (Count == 3) return 1;

	var InvestNum = 1;
	for (var i = 4; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 3); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//前三组选  添加到号码栏
function btn_2_AddClickZ3zuxuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumZ3ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumZ3ZhiF(1);
	if (count > 9) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选9个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Z3_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontZ3ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberZ3ZhiF();
	var lotteryView2 = lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "151");
	} else {
		opt.setAttribute('wangFang', "109");
	}
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三组选单式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('前三组选复式')) + "]" + lotteryView2 + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Z3', 1);
}
//十一运夺金_Z3ZiXuan.js 结束
//十一运夺金_Q3ZuXuan.js 结束

//十一运夺金_Q3dantuo.js 开始
//十一运夺金_Z3dantuo.js 开始
function SelectBallZ3danTuo(BallNum, BallType) { //前三胆拖
	//获取
	var Selected = GetBallStateZ3dantuo(BallNum, BallType);

	if (Selected) {
		SetBallStateZ3_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullZ3dantuo();
		return;
	}
	SetBallStateZ3_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateZ3_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateZ3_dantuo(BallNum, false, 2);
	}

	//算钱数
	CheckFullZ3dantuo();
	return;
}
function GetBallObjectZ3DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_Z3_" + row + "_" + col);
	return obj;
}

//获取 前三胆拖的选球个数
function GetBallSelectedNumZ3dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateZ3dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateZ3dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_Z3_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//前三胆拖 
function SetBallStateZ3_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_Z3_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumZ3dantuo(2) > 1) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过2个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullZ3dantuo() {
	var invest = GetLotteryInvestNumZ3dantuo();
	p = invest * 2;
	$("#Z3dantuo_zhu").html(invest + "");
	$("#Z3dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_Z3dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_Z3dantuo_Add").setAttribute('isdisabled', 'false');
}
//前三胆拖 注码 传给 后台的注码串 
function GetLotteryNumberZ3dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ3DanmaOrTuoma(2, j);
		if (GetBallStateZ3dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectZ3DanmaOrTuoma(3, j);
		if (GetBallStateZ3dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//153@01*020304^; 
	dantuoCode = "153@" + LotteryNumber + ";";
	return dantuoCode;
}
//前三胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontZ3dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ3DanmaOrTuoma(2, j);
		if (GetBallStateZ3dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//前三胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontZ3dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectZ3DanmaOrTuoma(3, j);
		if (GetBallStateZ3dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取前三胆拖 的注数
function GetLotteryInvestNumZ3dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumZ3dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumZ3dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 3, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//前三胆拖  添加到号码栏
function btn_2_AddClickZ3dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumZ3dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumZ3dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有4个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_Z3dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontZ3dantuo();
	var lotteryView_tuoma = getFrontZ3dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberZ3dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[前三胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "153");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('前三胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('前三拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('前三胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('前三拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('Z3', 2);
	ClearAll('Z3', 3);
}
//十一运夺金_Z3dantuo.js 结束
//十一运夺金_Q3dantuo.js 结束

//十一运夺金_R3ZiXuan.js 开始
//十一运夺金_R3ZiXuan.js 开始
function SelectBallR3(sender) { //任三复式直选
	//获取
	var Selected = GetBallStateR3ZhiF(sender);
	if (Selected) {
		SetBallStateR3_ZhiF(sender, false);
		//算钱数
		CheckFullR3ZhiF();
		return;
	}
	SetBallStateR3_ZhiF(sender, true);
	//算钱数
	CheckFullR3ZhiF();
}
function QuickSelectR3ZhiF(sender) {
	var str = sender.id;
	var row = str.substring(6, 7);
	var Type = str.substring(8, 9);
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR3ZhiF(row, i);
		SetBallStateR3_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR3ZhiF(row, i);
			SetBallStateR3_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR3ZhiF(row, i);
			SetBallStateR3_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR3ZhiF(row, i);
			SetBallStateR3_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR3ZhiF(row, i);
			SetBallStateR3_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR3ZhiF(row, i);
			SetBallStateR3_ZhiF(obj, true);
		}
	}
	CheckFullR3ZhiF();
}

function GetBallObjectR3ZhiF(row, col) {
	var obj = document.getElementById("td_R3_" + row + "_" + col);
	return obj;
}
//获取 任三复式的选球个数
function GetBallSelectedNumR3ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR3ZhiF(row, i);
		if (GetBallStateR3ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR3ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任三复式 直选
function SetBallStateR3_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR3ZhiF() {
	var invest = GetLotteryInvestNumR3ZhiF();
	p = invest * 2;
	$("#R3zhi_zhu").html(invest + "");
	$("#R3zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R3_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R3_Add").setAttribute('isdisabled', 'false');
}
//任三复式 注码 传给 后台的注码串 
function GetLotteryNumberR3ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR3ZhiF(1, j);
		if (GetBallStateR3ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR3ZhiF() == 1) {
		ziXuanCode = "112@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "103@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//任三复式 显示的注码串格式
function getFrontR3ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR3ZhiF(1, j);
		if (GetBallStateR3ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任三复式 的注数
function GetLotteryInvestNumR3ZhiF() {
	var Count = GetBallSelectedNumR3ZhiF(1);
	if (Count < 3) return 0;
	if (Count == 3) return 1;

	var InvestNum = 1;
	for (var i = 4; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 3); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任三复式  添加到号码栏
function btn_2_AddClickR3zuxuan() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR3ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR3ZhiF(1);
	if (count > 4) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选4个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R3_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR3ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR3ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任三复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "112");
	} else {
		opt.setAttribute('wangFang', "103");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任三单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任三复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('R3', 1);
}
//十一运夺金_R3ZiXuan.js 结束
//十一运夺金_R3ZiXuan.js 结束

//十一运夺金_R3dantuo.js 开始
function SelectBallR3danTuo(BallNum, BallType) { //任三胆拖
	//获取
	var Selected = GetBallStateR3dantuo(BallNum, BallType);
	if (Selected) {
		SetBallStateR3_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR3dantuo();
		return;
	}
	SetBallStateR3_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR3_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR3_dantuo(BallNum, false, 2);
	}

	//算钱数
	CheckFullR3dantuo();
	return;
}
function GetBallObjectR3DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_R3_" + row + "_" + col);
	return obj;
}

//获取 任三胆拖的选球个数
function GetBallSelectedNumR3dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR3dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR3dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_R3_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任三胆拖 
function SetBallStateR3_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_R3_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR3dantuo(2) > 1) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过2个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');

	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR3dantuo() {
	var invest = GetLotteryInvestNumR3dantuo();
	p = invest * 2;
	$("#R3dantuo_zhu").html(invest + "");
	$("#R3dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R3dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R3dantuo_Add").setAttribute('isdisabled', 'false');
}
//任三胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR3dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR3DanmaOrTuoma(2, j);
		if (GetBallStateR3dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR3DanmaOrTuoma(3, j);
		if (GetBallStateR3dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//122@01*02030405060708^; 
	dantuoCode = "122@" + LotteryNumber + ";";
	return dantuoCode;
}
//任三胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR3dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR3DanmaOrTuoma(2, j);
		if (GetBallStateR3dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任三胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR3dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR3DanmaOrTuoma(3, j);
		if (GetBallStateR3dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任三胆拖 的注数
function GetLotteryInvestNumR3dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR3dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR3dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 3, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任三胆拖  添加到号码栏
function btn_2_AddClickR3dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR3dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR3dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有4个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R3dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR3dantuo();
	var lotteryView_tuoma = getFrontR3dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR3dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任三胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "122");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任三胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任三拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任三胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任三拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll('R3', 2);
	ClearAll('R3', 3);
}
//十一运夺金_R3dantuo.js 结束

//十一运夺金_R4ZiXuan.js 开始
function SelectBallR4(sender) { //任四复式直选
	//获取
	var Selected = GetBallStateR4ZhiF(sender);
	if (Selected) {
		SetBallStateR4_ZhiF(sender, false);
		//算钱数
		CheckFullR4ZhiF();
		return;
	}
	SetBallStateR4_ZhiF(sender, true);
	//算钱数
	CheckFullR4ZhiF();
}
function QuickSelectR4ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR4ZhiF(row, i);
		SetBallStateR4_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR4ZhiF(row, i);
			SetBallStateR4_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR4ZhiF(row, i);
			SetBallStateR4_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR4ZhiF(row, i);
			SetBallStateR4_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR4ZhiF(row, i);
			SetBallStateR4_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR4ZhiF(row, i);
			SetBallStateR4_ZhiF(obj, true);
		}
	}
	CheckFullR4ZhiF();
}

function GetBallObjectR4ZhiF(row, col) {
	var obj = document.getElementById("td_4_" + row + "_" + col);
	return obj;
}
//获取 任四复式的选球个数
function GetBallSelectedNumR4ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR4ZhiF(row, i);
		if (GetBallStateR4ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR4ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任四复式 直选
function SetBallStateR4_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR4ZhiF() {
	var invest = GetLotteryInvestNumR4ZhiF();
	p = invest * 2;
	$("#R4zhi_zhu").html(invest + "");
	$("#R4zhi_yuan").html(p.toFixed());
	if (invest < 1) document.getElementById("btn_R4_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R4_Add").setAttribute('isdisabled', 'false');
}
//任四复式 注码 传给 后台的注码串 
function GetLotteryNumberR4ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR4ZhiF(1, j);
		if (GetBallStateR4ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR4ZhiF() == 1) {
		ziXuanCode = "113@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "104@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//任四复式 显示的注码串格式
function getFrontR4ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR4ZhiF(1, j);
		if (GetBallStateR4ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任四复式 的注数
function GetLotteryInvestNumR4ZhiF() {
	var Count = GetBallSelectedNumR4ZhiF(1);

	if (Count < 4) return 0;
	if (Count == 4) return 1;

	var InvestNum = 1;
	for (var i = 5; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 4); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任四复式  添加到号码栏
function btn_2_AddClickR4ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR4ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
//	var count = GetBallSelectedNumR4ZhiF(1);
//	if (count > 7) {
//		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选7个号码。")));
//		return false;
//	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R4_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR4ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR4ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任四复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "113");
	} else {
		opt.setAttribute('wangFang', "104");
	}
	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任四单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任四复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(4, 1);
}
//十一运夺金_R4ZiXuan.js 结束

//十一运夺金_R4dantuo.js 开始
function SelectBallR4danTuo(BallNum, BallType) { //任四胆拖
	//获取
	var Selected = GetBallStateR4dantuo(BallNum, BallType);

	if (Selected) {
		SetBallStateR4_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR4dantuo();
		return;
	}
	SetBallStateR4_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR4_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR4_dantuo(BallNum, false, 2);

	}

	//算钱数
	CheckFullR4dantuo();
	return;
}
function GetBallObjectR4DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_4_" + row + "_" + col);
	return obj;
}

//获取 任四胆拖的选球个数
function GetBallSelectedNumR4dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR4dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR4dantuo(BallNum, BallType) {
	var isSelectedAttr;
	isSelectedAttr = $("#td_4_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任四胆拖 
function SetBallStateR4_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_4_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR4dantuo(2) > 2) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过3个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR4dantuo() {
	var invest = GetLotteryInvestNumR4dantuo();
	p = invest * 2;
	$("#R4dantuo_zhu").html(invest + "");
	$("#R4dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R4dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R4dantuo_Add").setAttribute('isdisabled', 'false');
}
//任四胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR4dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR4DanmaOrTuoma(2, j);
		if (GetBallStateR4dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR4DanmaOrTuoma(3, j);
		if (GetBallStateR4dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//123@01*02030405060708^; 
	dantuoCode = "123@" + LotteryNumber + ";";
	return dantuoCode;
}
//任四胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR4dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR4DanmaOrTuoma(2, j);
		if (GetBallStateR4dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任四胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR4dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR4DanmaOrTuoma(3, j);
		if (GetBallStateR4dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任四胆拖 的注数
function GetLotteryInvestNumR4dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR4dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR4dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 4, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任四胆拖  添加到号码栏
function btn_2_AddClickR4dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR4dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR4dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有5个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R4dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR4dantuo();
	var lotteryView_tuoma = getFrontR4dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR4dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任四胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "123");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任四胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任四拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任四胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任四拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(4, 2);
	ClearAll(4, 3);
}
//十一运夺金_R4dantuo.js 结束

//十一运夺金_R5ZiXuan.js 开始
function SelectBallR5(sender) { //任五复式直选
	//获取
	var Selected = GetBallStateR5ZhiF(sender);
	if (Selected) {
		SetBallStateR5_ZhiF(sender, false);
		//算钱数
		CheckFullR5ZhiF();
		return;
	}
	SetBallStateR5_ZhiF(sender, true);
	//算钱数
	CheckFullR5ZhiF();
}
function QuickSelectR5ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR5ZhiF(row, i);
		SetBallStateR5_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR5ZhiF(row, i);
			SetBallStateR5_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR5ZhiF(row, i);
			SetBallStateR5_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR5ZhiF(row, i);
			SetBallStateR5_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR5ZhiF(row, i);
			SetBallStateR5_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR5ZhiF(row, i);
			SetBallStateR5_ZhiF(obj, true);
		}
	}
	CheckFullR5ZhiF();
}

function GetBallObjectR5ZhiF(row, col) {
	var obj = document.getElementById("td_5_" + row + "_" + col);
	return obj;
}
//获取 任五复式的选球个数
function GetBallSelectedNumR5ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR5ZhiF(row, i);
		if (GetBallStateR5ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR5ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任五复式 直选
function SetBallStateR5_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR5ZhiF() {
	var invest = GetLotteryInvestNumR5ZhiF();
	p = invest * 2;
	$("#R5zhi_zhu").html(invest + "");
	$("#R5zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R5_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R5_Add").setAttribute('isdisabled', 'false');
}
//任五复式 注码 传给 后台的注码串 
function GetLotteryNumberR5ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR5ZhiF(1, j);
		if (GetBallStateR5ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR5ZhiF() == 1) {
		ziXuanCode = "114@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "105@" + LotteryNumber + ";";
	}
	return ziXuanCode;
}
//任五复式 显示的注码串格式
function getFrontR5ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR5ZhiF(1, j);
		if (GetBallStateR5ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任五复式 的注数
function GetLotteryInvestNumR5ZhiF() {
	var Count = GetBallSelectedNumR5ZhiF(1);

	if (Count < 5) return 0;
	if (Count == 5) return 1;

	var InvestNum = 1;
	for (var i = 6; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 5); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任五复式  添加到号码栏
function btn_2_AddClickR5ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR5ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR5ZhiF(1);
	if (count > 10) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最多只能选10个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R5_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR5ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR5ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任五复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "114");
	} else {
		opt.setAttribute('wangFang', "105");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任五单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任五复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(5, 1);
}
//十一运夺金_R5ZiXuan.js 结束

//十一运夺金_R5dantuo.js 开始
function SelectBallR5danTuo(BallNum, BallType) { //任五胆拖
	//获取
	var Selected = GetBallStateR5dantuo(BallNum, BallType);
	if (Selected) {
		SetBallStateR5_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR5dantuo();
		return;
	}
	SetBallStateR5_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR5_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR5_dantuo(BallNum, false, 2);

	}

	//算钱数
	CheckFullR5dantuo();
	return;
}
function GetBallObjectR5DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_5_" + row + "_" + col);
	return obj;
}

//获取 任五胆拖的选球个数
function GetBallSelectedNumR5dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR5dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR5dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_5_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任五胆拖 
function SetBallStateR5_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_5_" + BallType + "_" + BallNum);

	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR5dantuo(2) > 3) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过4个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');

	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR5dantuo() {
	var invest = GetLotteryInvestNumR5dantuo();
	p = invest * 2;
	$("#R5dantuo_zhu").html(invest + "");
	$("#R5dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R5dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R5dantuo_Add").setAttribute('isdisabled', 'false');
}
//任五胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR5dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR5DanmaOrTuoma(2, j);
		if (GetBallStateR5dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR5DanmaOrTuoma(3, j);
		if (GetBallStateR5dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//124@01*02030405060708^; 
	dantuoCode = "124@" + LotteryNumber + ";";
	return dantuoCode;
}
//任五胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR5dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR5DanmaOrTuoma(2, j);
		if (GetBallStateR5dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任五胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR5dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR5DanmaOrTuoma(3, j);
		if (GetBallStateR5dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任五胆拖 的注数
function GetLotteryInvestNumR5dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR5dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR5dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 5, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任五胆拖  添加到号码栏
function btn_2_AddClickR5dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR5dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR5dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有6个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R5dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR5dantuo();
	var lotteryView_tuoma = getFrontR5dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR5dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任五胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "124");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任五胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任五拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任五胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任五拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(5, 2);
	ClearAll(5, 3);
}
//十一运夺金_R5dantuo.js 结束

//十一运夺金_R6ZiXuan.js 开始
function SelectBallR6(sender) { //任六复式直选
	//获取
	var Selected = GetBallStateR6ZhiF(sender);
	if (Selected) {
		SetBallStateR6_ZhiF(sender, false);
		//算钱数
		CheckFullR6ZhiF();
		return;
	}
	SetBallStateR6_ZhiF(sender, true);
	//算钱数
	CheckFullR6ZhiF();
}
function QuickSelectR6ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR6ZhiF(row, i);
		SetBallStateR6_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR6ZhiF(row, i);
			SetBallStateR6_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR6ZhiF(row, i);
			SetBallStateR6_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR6ZhiF(row, i);
			SetBallStateR6_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR6ZhiF(row, i);
			SetBallStateR6_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR6ZhiF(row, i);
			SetBallStateR6_ZhiF(obj, true);
		}
	}
	CheckFullR6ZhiF();
}

function GetBallObjectR6ZhiF(row, col) {
	var obj = document.getElementById("td_6_" + row + "_" + col);
	return obj;
}
//获取 任六复式的选球个数
function GetBallSelectedNumR6ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR6ZhiF(row, i);
		if (GetBallStateR6ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR6ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任六复式 直选
function SetBallStateR6_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR6ZhiF() {
	var invest = GetLotteryInvestNumR6ZhiF();
	p = invest * 2;
	$("#R6zhi_zhu").html(invest + "");
	$("#R6zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R6_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R6_Add").setAttribute('isdisabled', 'false');
}
//任六复式 注码 传给 后台的注码串 
function GetLotteryNumberR6ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR6ZhiF(1, j);
		if (GetBallStateR6ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR6ZhiF() == 1) {
		ziXuanCode = "115@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "106@" + LotteryNumber + ";";
	}

	return ziXuanCode;
}
//任六复式 显示的注码串格式
function getFrontR6ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR6ZhiF(1, j);
		if (GetBallStateR6ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任六复式 的注数
function GetLotteryInvestNumR6ZhiF() {
	var Count = GetBallSelectedNumR6ZhiF(1);

	if (Count < 6) return 0;
	if (Count == 6) return 1;

	var InvestNum = 1;
	for (var i = 7; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 6); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任六复式  添加到号码栏
function btn_2_AddClickR6ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR6ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR6ZhiF(1);
	if (count < 6) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最少选择6个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R6_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR6ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR6ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任六复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "115");
	} else {
		opt.setAttribute('wangFang', "106");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任六单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任六复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(6, 1);
}
//十一运夺金_R6ZiXuan.js 结束

//十一运夺金_R6dantuo.js 开始
function SelectBallR6danTuo(BallNum, BallType) { //任六胆拖
	//获取
	var Selected = GetBallStateR6dantuo(BallNum, BallType);

	if (Selected) {
		SetBallStateR6_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR6dantuo();
		return;
	}
	SetBallStateR6_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR6_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR6_dantuo(BallNum, false, 2);
	}
	//算钱数
	CheckFullR6dantuo();
	return;
}
function GetBallObjectR6DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_6_" + row + "_" + col);
	return obj;
}

//获取 任六胆拖的选球个数
function GetBallSelectedNumR6dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR6dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR6dantuo(BallNum, BallType) {
	var isSelectedAttr;
	isSelectedAttr = $("#td_6_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任六胆拖 
function SetBallStateR6_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_6_" + BallType + "_" + BallNum);
	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR6dantuo(2) > 4) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过5个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');

	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR6dantuo() {
	var invest = GetLotteryInvestNumR6dantuo();
	p = invest * 2;
	$("#R6dantuo_zhu").html(invest + "");
	$("#R6dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R6dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R6dantuo_Add").setAttribute('isdisabled', 'false');
}
//任六胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR6dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR6DanmaOrTuoma(2, j);
		if (GetBallStateR6dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR6DanmaOrTuoma(3, j);
		if (GetBallStateR6dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//125@01*02030405060708^; 
	dantuoCode = "125@" + LotteryNumber + ";";
	return dantuoCode;
}
//任六胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR6dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR6DanmaOrTuoma(2, j);
		if (GetBallStateR6dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任六胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR6dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR6DanmaOrTuoma(3, j);
		if (GetBallStateR6dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任六胆拖 的注数
function GetLotteryInvestNumR6dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR6dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR6dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 6, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任六胆拖  添加到号码栏
function btn_2_AddClickR6dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR6dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR6dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有7个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R6dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR6dantuo();
	var lotteryView_tuoma = getFrontR6dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR6dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任六胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "125");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任六胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任六拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任六胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任六拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(6, 2);
	ClearAll(6, 3);
}
//十一运夺金_R6dantuo.js 结束

//十一运夺金_R7ZiXuan.js 开始
function SelectBallR7(sender) { //任七复式直选
	//获取
	var Selected = GetBallStateR7ZhiF(sender);
	if (Selected) {
		SetBallStateR7_ZhiF(sender, false);
		//算钱数
		CheckFullR7ZhiF();
		return;
	}
	SetBallStateR7_ZhiF(sender, true);
	//算钱数
	CheckFullR7ZhiF();
}
function QuickSelectR7ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR7ZhiF(row, i);
		SetBallStateR7_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR7ZhiF(row, i);
			SetBallStateR7_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR7ZhiF(row, i);
			SetBallStateR7_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR7ZhiF(row, i);
			SetBallStateR7_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR7ZhiF(row, i);
			SetBallStateR7_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR7ZhiF(row, i);
			SetBallStateR7_ZhiF(obj, true);
		}
	}
	CheckFullR7ZhiF();
}

function GetBallObjectR7ZhiF(row, col) {
	var obj = document.getElementById("td_7_" + row + "_" + col);
	return obj;
}
//获取 任七复式的选球个数
function GetBallSelectedNumR7ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR7ZhiF(row, i);
		if (GetBallStateR7ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR7ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任七复式 直选
function SetBallStateR7_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR7ZhiF() {
	var invest = GetLotteryInvestNumR7ZhiF();
	p = invest * 2;
	$("#R7zhi_zhu").html(invest + "");
	$("#R7zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R7_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R7_Add").setAttribute('isdisabled', 'false');
}
//任七复式 注码 传给 后台的注码串 
function GetLotteryNumberR7ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR7ZhiF(1, j);
		if (GetBallStateR7ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	if (GetLotteryInvestNumR7ZhiF() == 1) {
		ziXuanCode = "116@" + LotteryNumber + ";";
	} else {
		ziXuanCode = "107@" + LotteryNumber + ";";
	}

	return ziXuanCode;
}
//任七复式 显示的注码串格式
function getFrontR7ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR7ZhiF(1, j);
		if (GetBallStateR7ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任七复式 的注数
function GetLotteryInvestNumR7ZhiF() {
	var Count = GetBallSelectedNumR7ZhiF(1);

	if (Count < 7) return 0;
	if (Count == 7) return 1;

	var InvestNum = 1;
	for (var i = 8; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 7); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任七复式  添加到号码栏
function btn_2_AddClickR7ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR7ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR7ZhiF(1);
	if (count > 9) {
		openAlert(decodeURI(EncodeUtf8("您好！该玩法最多只能选9个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R7_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR7ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR7ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任七复式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	if (invest == 1) {
		opt.setAttribute('wangFang', "116");
	} else {
		opt.setAttribute('wangFang', "107");
	}

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任七单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任七复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(7, 1);
}
//十一运夺金_R7ZiXuan.js 结束

//十一运夺金_R7dantuo.js 开始
function SelectBallR7danTuo(BallNum, BallType) { //任七胆拖
	//获取
	var Selected = GetBallStateR7dantuo(BallNum, BallType);

	if (Selected) {
		SetBallStateR7_dantuo(BallNum, false, BallType);
		//算钱数
		CheckFullR7dantuo();
		return;
	}
	SetBallStateR7_dantuo(BallNum, true, BallType);
	if (BallType == 2) {
		SetBallStateR7_dantuo(BallNum, false, 3);
	}
	if (BallType == 3) {
		SetBallStateR7_dantuo(BallNum, false, 2);
	}

	//算钱数
	CheckFullR7dantuo();
	return;
}
function GetBallObjectR7DanmaOrTuoma(row, col) {
	var obj = document.getElementById("td_7_" + row + "_" + col);
	return obj;
}

//获取 任七胆拖的选球个数
function GetBallSelectedNumR7dantuo(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		if (GetBallStateR7dantuo(i, row)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR7dantuo(BallNum, BallType) {
	var isSelectedAttr;

	isSelectedAttr = $("#td_7_" + BallType + "_" + BallNum).attr('isselected');

	var isSelected = isSelectedAttr == 'true' ? true: false;
	return isSelected;
}
//任七胆拖 
function SetBallStateR7_dantuo(BallNum, SelectState, BallType) {
	var ball = document.getElementById("td_7_" + BallType + "_" + BallNum);
	if (SelectState) {
		if (BallType == 2) {
			if (GetBallSelectedNumR7dantuo(2) > 5) {
				openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过6个！")));
				return false;
			}
		}
		ball.className = 'ball_num_r';
		ball.setAttribute('isselected', 'true');
	} else {
		ball.className = 'ball_num';
		ball.setAttribute('isselected', 'false');
	}
}

//获取金额
function CheckFullR7dantuo() {
	var invest = GetLotteryInvestNumR7dantuo();
	p = invest * 2;
	$("#R7dantuo_zhu").html(invest + "");
	$("#R7dantuo_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R7dantuo_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R7dantuo_Add").setAttribute('isdisabled', 'false');
}
//任七胆拖 注码 传给 后台的注码串 
function GetLotteryNumberR7dantuo() {
	var dantuoCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR7DanmaOrTuoma(2, j);
		if (GetBallStateR7dantuo(j, 2)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	temp = temp + "$";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR7DanmaOrTuoma(3, j);
		if (GetBallStateR7dantuo(j, 3)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;

	//126@01*02030405060708^; 
	dantuoCode = "126@" + LotteryNumber + ";";
	return dantuoCode;
}
//任七胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR7dantuo() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR7DanmaOrTuoma(2, j);
		if (GetBallStateR7dantuo(j, 2)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//任七胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
function getFrontR7dantuo_tuoma() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR7DanmaOrTuoma(3, j);
		if (GetBallStateR7dantuo(j, 3)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任七胆拖 的注数
function GetLotteryInvestNumR7dantuo() {
	//获取胆码
	var danmaCount = GetBallSelectedNumR7dantuo(2);
	//获取拖码
	var tuomaCount = GetBallSelectedNumR7dantuo(3);
	var InvestNum = 0;
	InvestNum = dantuo(tuomaCount, 7, danmaCount);
	if (InvestNum == -1) {
		InvestNum = 0;
	}
	return InvestNum;
}
//任七胆拖  添加到号码栏
function btn_2_AddClickR7dantuo() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR7dantuo();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var zhushu = GetLotteryInvestNumR7dantuo(); //注数1注，即胆码加脱码数量不到5个
	if (zhushu < 2) {
		openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有8个！")));
		return false;
	}

	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R7dantuo_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR7dantuo();
	var lotteryView_tuoma = getFrontR7dantuo_tuoma();
	var frontLot = lotteryView.substring(0, lotteryView.length - 1) + "$" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var lotteryNumber = GetLotteryNumberR7dantuo();
	var lotteryView2 = decodeURI(EncodeUtf8('[任七胆拖][胆码]')) + lotteryView.substring(0, lotteryView.length - 1) + decodeURI(EncodeUtf8('[拖码]')) + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "126");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任七胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任七拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[<font class='red1'>" + decodeURI(EncodeUtf8('任七胆码')) + "</font>]" + lotteryView.substring(0, lotteryView.length - 1) + "[<font class='red1'>" + decodeURI(EncodeUtf8('任七拖码')) + "</font>]" + lotteryView_tuoma.substring(0, lotteryView_tuoma.length - 1) + "</span><span class='jieguo1'>  " + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(7, 2);
	ClearAll(7, 3);
}
//十一运夺金_R7dantuo.js 结束

//十一运夺金_R8ZiXuan.js 开始
function SelectBallR8(sender) { //任八单式
	//获取
	var Selected = GetBallStateR8ZhiF(sender);
	if (Selected) {
		SetBallStateR8_ZhiF(sender, false);
		//算钱数
		CheckFullR8ZhiF();
		return;
	}
	SetBallStateR8_ZhiF(sender, true);
	//算钱数
	CheckFullR8ZhiF();
}
function QuickSelectR8ZhiF(sender) {
	var str = sender.id;
	var row = parseInt(str.substring(5, 6));
	var Type = str.substring(7, 8);

	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR8ZhiF(row, i);
		SetBallStateR8_ZhiF(obj, false);
	}
	if (Type == "Q") {
		for (var i = 1; i < 12; i++) {
			var obj = GetBallObjectR8ZhiF(row, i);
			SetBallStateR8_ZhiF(obj, true);
		}
	}
	if (Type == "D") {
		for (var i = 6; i < 12; i++) {
			var obj = GetBallObjectR8ZhiF(row, i);
			SetBallStateR8_ZhiF(obj, true);
		}
	}
	if (Type == "X") {
		for (var i = 1; i < 6; i++) {
			var obj = GetBallObjectR8ZhiF(row, i);
			SetBallStateR8_ZhiF(obj, true);
		}
	}
	if (Type == "J") {
		for (var i = 1; i < 12; i += 2) {
			var obj = GetBallObjectR8ZhiF(row, i);
			SetBallStateR8_ZhiF(obj, true);
		}
	}
	if (Type == "O") {
		for (var i = 2; i < 12; i += 2) {
			var obj = GetBallObjectR8ZhiF(row, i);
			SetBallStateR8_ZhiF(obj, true);
		}
	}
	CheckFullR8ZhiF();
}

function GetBallObjectR8ZhiF(row, col) {
	var obj = document.getElementById("td_8_" + row + "_" + col);
	return obj;
}
//获取 任八单式的选球个数
function GetBallSelectedNumR8ZhiF(row) {
	var Count = 0;
	for (var i = 1; i < 12; i++) {
		var obj = GetBallObjectR8ZhiF(row, i);
		if (GetBallStateR8ZhiF(obj)) Count++;
	}
	return Count;
}
//判断是否选中
function GetBallStateR8ZhiF(sender) {
	if (sender != null) {
		return sender.getAttribute('isselected') == 'true' ? true: false;
	} else {
		return false;
	}
}
//任八单式
function SetBallStateR8_ZhiF(sender, SelectState) {
	if (!SelectState) {
		sender.className = 'ball_num';
		sender.setAttribute('isselected', 'false');
	} else {
		sender.className = 'ball_num_r';
		sender.setAttribute('isselected', 'true');
	}
}

//获取金额
function CheckFullR8ZhiF() {
	var invest = GetLotteryInvestNumR8ZhiF();
	p = invest * 2;
	$("#R8zhi_zhu").html(invest + "");
	$("#R8zhi_yuan").html(p.toFixed());

	if (invest < 1) document.getElementById("btn_R8_Add").setAttribute('isdisabled', 'true');
	else document.getElementById("btn_R8_Add").setAttribute('isdisabled', 'false');
}
//任八单式 注码 传给 后台的注码串 
function GetLotteryNumberR8ZhiF() {
	var ziXuanCode = "";
	var LotteryNumber = "";
	var ball1;
	var temp = "";
	for (var j = 0; j < 12; j++) {
		var obj = GetBallObjectR8ZhiF(1, j);
		if (GetBallStateR8ZhiF(obj)) temp += parseInt(obj.innerHTML.trim(), 10) + ",";
	}
	temp = temp.trim();
	ball1 = temp.lastIndexOf(",");
	temp = temp.substring(0, ball1);
	LotteryNumber += temp;
	ziXuanCode = "117@" + LotteryNumber + ";";
	return ziXuanCode;
}
//任八单式 显示的注码串格式
function getFrontR8ZiXuan() {
	var LotteryNumber = "";
	var temp = " ";
	for (var j = 1; j < 12; j++) {
		var obj = GetBallObjectR8ZhiF(1, j);
		if (GetBallStateR8ZhiF(obj)) temp += obj.innerHTML.trim() + ",";
	}
	temp = temp.trim();
	LotteryNumber += temp;

	return LotteryNumber.trim();
}
//获取任八单式 的注数
function GetLotteryInvestNumR8ZhiF() {
	var Count = GetBallSelectedNumR8ZhiF(1);

	if (Count < 8) return 0;
	if (Count == 8) return 1;

	var InvestNum = 1;
	for (var i = 9; i <= Count; i++) InvestNum *= i;
	for (var i = 2; i <= (Count - 8); i++) InvestNum = Math.round(InvestNum / i);

	return InvestNum;
}
//任八单式  添加到号码栏
function btn_2_AddClickR8ZhiF() {
	var oldMoney = parseInt($("#investField").html());
	var oldLabNum = parseInt($("#lab_Num").html());

	if (oldMoney != 0) {
		totalMoney = oldMoney;
		totalLotteryInvest = oldLabNum;
	}

	var invest = GetLotteryInvestNumR8ZhiF();
	if (invest < 1) {
		openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
		return false;
	}
	var count = GetBallSelectedNumR8ZhiF(1);
	if (count < 8) {
		openAlert(decodeURI(EncodeUtf8("您好，该玩法最少选择8个号码。")));
		return false;
	}
	if (p > 20000) {
		openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
		return false;
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	if ($("#btn_R8_Add").attr('isdisabled') == 'true') return;
	var lotteryView = getFrontR8ZiXuan();
	var frontLot = lotteryView;
	var lotteryNumber = GetLotteryNumberR8ZhiF();
	var lotteryView2 = decodeURI(EncodeUtf8('任八单式 　')) + lotteryView.substring(0, lotteryView.length - 1);
	var opt = new Option(lotteryView2, lotteryNumber);
	opt.setAttribute('allLot', frontLot);
	opt.setAttribute('backLot', lotteryNumber);

	opt.setAttribute('wangFang', "117");

	opt.setAttribute('zhushu', invest);
	opt.setAttribute('money', 2 * invest);
	opt.setAttribute('delMoney', 2 * invest);
	lotteryListSelect[0].options.add(opt);
	//号码蓝样式
	if (invest == 1) {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任八单式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else {
		lotteryView2 = "<span class='jieguo0'>[" + decodeURI(EncodeUtf8('任八复式')) + "]" + lotteryView.substring(0, lotteryView.length - 1) + "</span><span class='jieguo1'>　　" + invest + decodeURI(EncodeUtf8("注　　共")) + 2 * invest + decodeURI(EncodeUtf8("元")) + "</span>";
	}
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
	ClearAll(8, 1);
}
//十一运夺金_R8ZiXuan.js 结束

/* //十一运夺金_R8dantuo.js 开始
  function SelectBallR8danTuo( BallNum, BallType) {//任八胆拖
  	//获取
      var Selected = GetBallStateR8dantuo( BallNum, BallType);
      
      if (Selected) {
          SetBallStateR8_dantuo( BallNum, false, BallType);
          //算钱数
          CheckFullR8dantuo();
          return;
      }
      SetBallStateR8_dantuo( BallNum, true, BallType);
      if(BallType==2){
    	  SetBallStateR8_dantuo(BallNum, false, 3);
      }
      if(BallType==3){
    	  SetBallStateR8_dantuo(BallNum, false, 2);
    	  
      }
		
    //算钱数
      CheckFullR8dantuo();
      return;
  }
  function GetBallObjectR8DanmaOrTuoma(row,col){
	  var obj = document.getElementById("td_8_" + row + "_" + col);
      return obj;
	  
  }

 
   //获取 任八胆拖的选球个数
  function GetBallSelectedNumR8dantuo(row) {
      var Count = 0;
      for (var i = 1; i < 12; i++) {
          if (GetBallStateR8dantuo(i,row))
              Count++;
      }
     
      return Count;
  }
  //判断是否选中
  function GetBallStateR8dantuo(BallNum,BallType) {
      
	  var isSelectedAttr;
		
		isSelectedAttr = $("#td_8_" + BallType  + "_" + BallNum).attr('isselected');
		
		var isSelected = isSelectedAttr == 'true' ? true : false;
		return isSelected;
      }
  //任八胆拖 
  function SetBallStateR8_dantuo(BallNum, SelectState, BallType) {
	  
	 
	  var ball = document.getElementById("td_8_" + BallType + "_" +BallNum );
	  
	  if (SelectState) {
				if(BallType==2){
				   if(GetBallSelectedNumR8dantuo(2)>6){
					   openAlert(decodeURI(EncodeUtf8("您好，胆码个数不能超过7个！")));
						return false;
					}
				}
			ball.className = 'ball_num_r';
		    ball.setAttribute('isselected', 'true');
		    
		} else {
			ball.className = 'ball_num';
			ball.setAttribute('isselected', 'false');
		}
  }

  //获取金额
  function CheckFullR8dantuo() {
	  
      var invest = GetLotteryInvestNumR8dantuo();
       p= invest * 2; 
      $("#R8dantuo_zhu").html(invest +"");
       $("#R8dantuo_yuan").html(p.toFixed());
  	
      if(invest < 1)document.getElementById("btn_R8dantuo_Add").setAttribute('isdisabled', 'true');
      else document.getElementById("btn_R8dantuo_Add").setAttribute('isdisabled', 'false');
  }
  //任八胆拖 注码 传给 后台的注码串 
  function GetLotteryNumberR8dantuo() {
  	var dantuoCode="";
      var LotteryNumber = "";
      var ball1;
         var temp = "";
          for (var j = 0; j < 12; j++) {
        	  var obj = GetBallObjectR8DanmaOrTuoma(2, j);
              if (GetBallStateR8dantuo(j,2))
                  temp += parseInt(obj.innerHTML.trim(),10)+",";
              }
          temp = temp.trim();
          ball1=temp.lastIndexOf(",");
          temp=temp.substring(0, ball1);
          temp = temp+"$";
          for (var j = 0; j < 12; j++) {
          	  var obj = GetBallObjectR8DanmaOrTuoma(3, j);
                if (GetBallStateR8dantuo(j,3))
                    temp += parseInt(obj.innerHTML.trim(),10)+",";
                }
          temp = temp.trim();
          ball1=temp.lastIndexOf(",");
          temp=temp.substring(0, ball1);
          LotteryNumber += temp;
          
        //R81,2$5,6,7,8,10; 
      	dantuoCode="R8"+LotteryNumber+";";
      return dantuoCode;
  }
  //任八胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
  function getFrontR8dantuo() {
      var LotteryNumber = "";
          var temp = " ";
          for (var j = 1; j < 12; j++) {
              var obj = GetBallObjectR8DanmaOrTuoma(2, j);
              if (GetBallStateR8dantuo(j,2))
                  temp += obj.innerHTML.trim()+",";
              }
          temp = temp.trim();
          LotteryNumber += temp;
         
      return LotteryNumber.trim();
  }
  //任八胆拖 显示的注码串格式 k是2.胆码类型 还是3.拖码类行 
  function getFrontR8dantuo_tuoma() {
  	var LotteryNumber = "";
  	var temp = " ";
  	for (var j = 1; j < 12; j++) {
  		var obj = GetBallObjectR8DanmaOrTuoma(3, j);
  		if (GetBallStateR8dantuo(j,3))
  			temp += obj.innerHTML.trim()+",";
  	}
  	temp = temp.trim();
  	LotteryNumber += temp;
  	
  	return LotteryNumber.trim();
  }
  //获取任八胆拖 的注数
  function GetLotteryInvestNumR8dantuo(){
	  
	//获取胆码
	  var danmaCount = GetBallSelectedNumR8dantuo(2);
	//获取拖码
	  var tuomaCount = GetBallSelectedNumR8dantuo(3);
	  var InvestNum = 0;
	  InvestNum = dantuo(tuomaCount,8,danmaCount);
	  if(InvestNum==-1){
		InvestNum = 0;
	  }
        
      return InvestNum;
  }
  //任八胆拖  添加到号码栏
  function btn_2_AddClickR8dantuo() {
  	
  	
  	var oldMoney = parseInt($("#investField").html());
  	var oldLabNum = parseInt($("#lab_Num").html());
  	
  	if(oldMoney != 0){
  		totalMoney = oldMoney;
  		totalLotteryInvest = oldLabNum;
  	}

  	var invest = GetLotteryInvestNumR8dantuo();
      if (invest < 1) {
  	openAlert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
  	
          //alert(decodeURI(EncodeUtf8("您好！您选择的号码不能构成一注彩票！请检查您选择的号码。")));
          return false;
      }
      if(p>20000){
  	openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
  	
      	//alert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
      	return false;
      }
      var zhushu = GetLotteryInvestNumR8dantuo();//注数1注，即胆码加脱码数量不到5个
      if(zhushu<2){
      	
      	openAlert(decodeURI(EncodeUtf8("您好，胆码加拖码至少要有9个！")));
      	return false;
      }
      
  	var lotteryListSelect = $("#list_LotteryNumber");
      if($("#btn_R8dantuo_Add").attr('isdisabled') == 'true')return;
      var lotteryView = getFrontR8dantuo();
      var lotteryView_tuoma = getFrontR8dantuo_tuoma();
      var frontLot=lotteryView.substring(0,lotteryView.length-1)+"$"+lotteryView_tuoma.substring(0,lotteryView_tuoma.length-1);
      var lotteryNumber=GetLotteryNumberR8dantuo();
      var lotteryView2 = decodeURI(EncodeUtf8('[任八胆拖][胆码]')) + lotteryView.substring(0,lotteryView.length-1)+decodeURI(EncodeUtf8('[拖码]'))+lotteryView_tuoma.substring(0,lotteryView_tuoma.length-1);
      var opt = new Option(lotteryView2,lotteryNumber);
      opt.setAttribute('allLot',frontLot);
  	opt.setAttribute('backLot',lotteryNumber);

      opt.setAttribute('wangFang',"R8");
  	
  	opt.setAttribute('zhushu',invest);
  	opt.setAttribute('money',2 * invest);
  	opt.setAttribute('delMoney', 2 * invest);
  	lotteryListSelect[0].options.add(opt);
  	//号码蓝样式
  	if(invest==1){
		lotteryView2 ="<span class='jieguo0'>[<font class='red1'>"+decodeURI(EncodeUtf8('任八胆码'))+"</font>]"+lotteryView.substring(0,lotteryView.length-1)+"[<font class='red1'>"+decodeURI(EncodeUtf8('任八拖码'))+"</font>]"+lotteryView_tuoma.substring(0,lotteryView_tuoma.length-1)+"</span><span class='jieguo1'>  "+decodeURI(EncodeUtf8("1注　　共2元"))+"</span>";
		}else{
		lotteryView2 ="<span class='jieguo0'>[<font class='red1'>"+decodeURI(EncodeUtf8('任八胆码'))+"</font>]"+lotteryView.substring(0,lotteryView.length-1)+"[<font class='red1'>"+decodeURI(EncodeUtf8('任八拖码'))+"</font>]"+lotteryView_tuoma.substring(0,lotteryView_tuoma.length-1)+"</span><span class='jieguo1'>  "+invest+decodeURI(EncodeUtf8("注　　共"))+2*invest+decodeURI(EncodeUtf8("元"))+"</span>";
		}
  	add_codes(lotteryView2,lotteryNumber);
  	
     	totalMoney+=2 * invest;

     	var multiple=(Number($("#tb_Multiple").val()));
      var check_money=parseInt(2 * invest);
      var partial_money=$("#investField").html();
      totalMoney=parseInt((check_money*multiple)+partial_money*1);
      
     totalLotteryInvest+=invest;
     
     $("#lab_Num").html(totalLotteryInvest);
     $("#investField").html(totalMoney.toFixed());
     $("#current_money").html(totalMoney.toFixed());
      //调用公共方法让购彩以后的金额得到并将其转换为两位小数
  	getFinalMoney();
  	   ClearAll(8,2);ClearAll(8,3);
  } 
  //十一运夺金_R8dantuo.js 结束
*/

//阶乘 核心算法 5*4*3  
function jiecheng(m, n) {
	//数据验证，规定m和n不能小于0
	if (m < 0 || n < 0) {
		return - 1;
	}
	//定义默认返回值
	var result = 1;
	//m大于等于n，从n以1为步长乘到m;m小于n，从m以1为步长乘到n
	if (m >= n) {
		for (var i = n; i <= m; i++) {
			result = result * i;
		}
	} else {
		for (var i = m; i <= n; i++) {
			result = result * i;
		}
	}
	return result;
}
//       |  3|
//组合算法 | C5| 5*4*3/3*2*1 
function zuhe(n, k) { //n: 5 k:3
	//验证传入参数，n不能小于等于0，k不能小于0，n不能小于k；k=0的时候，规定组合数为1
	if (n <= 0 || k < 0 || n < k) {
		return - 1;
	}
	if (k == 0 || n == k) {
		return 1;
	}
	//按照组合数性质，在k大于n/2时，计算从n中选出n-k的值，减少计算量
	if (k > n / 2) {
		k = n - k;
	}
	//通过组合数公式求组合数
	var result = jiecheng(n, n - k + 1) / jiecheng(k, 1);
	return result;
}

//  十一运夺金胆拖 通用算法
//  @param tmCount 拖码个数 5
//  @param wanfa 胆码个数 2
//  @param dmCount 玩法 如 任4 传入4
//  @return 返回注数 10
//  
function dantuo(tmCount, wanfa, dmCount) {
	if (dmCount == 0 || tmCount == 0) {
		return 0;
	}
	return zuhe(tmCount, parseInt(wanfa, 10) - parseInt(dmCount, 10));
}
//十一运夺金   获取最新开奖显示期数
function newinissue(issue) {
	$("#inssuenums").val(issue);
}
     
     