var totalMoney = 0.00;
var totalLotteryInvest = 0;
var click = 0;
var betcode = "";
//初始化代购 和 追号
function chushihuaRedio() {
	document.getElementById("daiGou").checked = true;
	document.getElementById("zuiHao").checked = false;
	$("#zuiHaoDIV").hide();
}
//判读彩种
function judgeCaizhong() {
	if ($("#caiZhong").val() == "ssq") {
		if ($("#sub_nav_1").is(":visible")) {
			ClearSelect();
		} else if ($("#sub_nav_2").is(":visible")) {
			ClearCheck();
		}
	} else if ($("#caiZhong").val() == "3D") {
		if ($("#sub_nav_1").is(":visible")) { //单选
			ClearAll(1, 2);
			ClearAll(1, 0);
			ClearAll(1, 1);
			ClearZiHeSelect();
			ClearZu3Select();
			ClearSelect();
			if ($("#zxpt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} //
			else if ($("#zxhz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zxds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		} else if ($("#sub_nav_3").is(":visible")) { //组六
			ClearAll(3, 0);
			if ($("#zlpt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} //
			else if ($("#zlhz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zlds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		} else if ($("#sub_nav_2").is(":visible")) { //组三
			ClearAll(2, 0);
			if ($("#zspt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} //
			else if ($("#zshz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zsds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		}
	} else if ($("#caiZhong").val() == "dlt") {
		if ($("#sub_nav_1").is(":visible")) {
			ClearSelect();
		} else if ($("#sub_nav_2").is(":visible")) {
			ClearCheck();
		} else if ($("#sub_nav_3").is(":visible")) {
			Animal_ClearSelect();
		}
	} else if ($("#caiZhong").val() == "pls") {
		if ($("#sub_nav_1").is(":visible")) { //普通
			ClearAll(1, 2);
			ClearAll(1, 0);
			ClearAll(1, 1);
			ClearZiHeSelect();
			ClearZu3Select();
			ClearZu6Select();
			if ($("#zxpt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} //
			else if ($("#zxhz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zxds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		} else if ($("#sub_nav_3").is(":visible")) { //组六
			ClearAll(3, 0);
			if ($("#zlpt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} //
			else if ($("#zlhz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zlds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		} else if ($("#sub_nav_2").is(":visible")) { //组三
			ClearAll(2, 0);
			if ($("#zspt").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('复式')));
			} else if ($("#zshz").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('和值')));
			} else if ($("#zsds").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('单式上传')));
			}
		}
	} else if ($("#caiZhong").val() == 'ssc') {
		if ($("#sub_nav_1").is(":visible")) { //大小单双
			ClearAllDXDS(0);
			ClearAllDXDS(1);
		} else if ($("#sub_nav_2").is(":visible")) { //一星
			ClearAllYX(0);
		} else if ($("#sub_nav_3").is(":visible") || $("#sub_nav_4").is(":visible") || $("#sub_nav_5").is(":visible")) { //二星
			for (var i = 0; i < 2; i += 1) {
				ClearAll("rxzf", i);
			}
			ClearAll('rxzxf', 0);
			ClearSelect_rxzxh();
			if ($("#sub_nav_3").is(":visible")) {
				setErjiwanfa(decodeURI(EncodeUtf8('直选复式')));
			} //
			else if ($("#sub_nav_4").is(":visible")) {
				setErjiwanfa(decodeURI(EncodeUtf8('组选复式')));
			} else if ($("#sub_nav_5").is(":visible")) {
				setErjiwanfa(decodeURI(EncodeUtf8('组选和值')));
			}
		} else if ($("#sub_nav_6").is(":visible")) { //三星
			for (var i = 0; i < 3; i += 1) {
				ClearAllSX(i);
			}
			setErjiwanfa(decodeURI(EncodeUtf8('直选')));
		} else if ($("#sub_nav_7").is(":visible") || $("#sub_nav_8").is(":visible")) { //五星
			for (var i = 0; i < 5; i += 1) {
				if ($("#sub_nav_7").is(":visible")) {
					ClearAll("wt", i);
				} else {
					ClearAll("wttx", i);
				}
			}
			if ($("#sub_nav_7").is(":visible")) {
				setErjiwanfa(decodeURI(EncodeUtf8('直选复式')));
			} //
			else if ($("#sub_nav_8").is(":visible")) {
				setErjiwanfa(decodeURI(EncodeUtf8('组选复式')));
			}
		}
	} else if ($("#caiZhong").val() == 'qlc') {
		clear();
	}else if ($("#caiZhong").val() == 'eexw') {
		clear();
	} else if ($("#caiZhong").val() == 'qxc') {
		ClearAll(8, 0);
		ClearAll(8, 1);
		ClearAll(8, 2);
		ClearAll(8, 3);
		ClearAll(8, 4);
		ClearAll(8, 5);
		ClearAll(8, 6);
	} else if ($("#caiZhong").val() == 'plw') {
		ClearAll(8, 0);
		ClearAll(8, 1);
		ClearAll(8, 2);
		ClearAll(8, 3);
		ClearAll(8, 4);
	} else if ($("#caiZhong").val() == '11xuan5' || $("#caiZhong").val() == 'syydj') {
		if ($("#sub_nav_1").is(":visible")) { //前一直选
			setErjiwanfa(decodeURI(EncodeUtf8('前一直选')));
		} else if ($("#sub_nav_2").is(":visible")) { //选二
			if ($("#sub_nav_2_QEZhiF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前二直选复式')));
			} //
			else if ($("#sub_nav_2_QEZF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前二组选复式')));
			} else if ($("#sub_nav_2_QEZD").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前二组选胆拖')));
			} else if ($("#sub_nav_2_REF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选二复式')));
			} //
			else if ($("#sub_nav_2_RED").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选二胆拖')));
			}
		} else if ($("#sub_nav_3").is(":visible")) { //选三
			if ($("#sub_nav_3_QSZhiF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前三直选复式')));
			} //
			else if ($("#sub_nav_3_QSZF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前三组选复式')));
			} else if ($("#sub_nav_3_QSZD").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('前三组选胆拖')));
			} else if ($("#sub_nav_3_RSF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选三复式')));
			} //
			else if ($("#sub_nav_3_RSD").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选三胆拖')));
			}
		} else if ($("#sub_nav_4").is(":visible")) { //任选四
			if ($("#sub_nav_4_RSF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选四复式')));
			} //
			else if ($("#sub_nav_4_RSF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选四胆拖')));
			}
		} else if ($("#sub_nav_5").is(":visible")) { //任选五
			if ($("#sub_nav_5_RWF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选五复式')));
			} //
			else if ($("#sub_nav_5_RWF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选五胆拖')));
			}
		} else if ($("#sub_nav_6").is(":visible")) { //任选六
			if ($("#sub_nav_6_RLF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选六复式')));
			} //
			else if ($("#sub_nav_6_RLD").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选六胆拖')));
			}
		} else if ($("#sub_nav_7").is(":visible")) { //任选七
			if ($("#sub_nav_7_RQF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选七复式')));
			} //
			else if ($("#sub_nav_7_RQF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选七胆拖')));
			}
		} else if ($("#sub_nav_8").is(":visible")) { //任选八
			if ($("#sub_nav_8_RBF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选八复式')));
			} //
			else if ($("#sub_nav_8_RBF").hasClass("selected")) {
				setErjiwanfa(decodeURI(EncodeUtf8('任选八胆拖')));
			}
		}
	}
	else if($("#caiZhong").val() == 'jingcaizuqiu'){
			cleanReadySPF();
	}
}

function initLotno() {
	if ($("#caiZhong").val() == "ssq") {
		//初始化双色球页面
		$("#ssq_pttz").attr("checked", true);
	} else if ($("#caiZhong").val() == "3D") {
		$("#zxpt").attr("checked", true);
		$("#zlpt").attr("checked", true);
		$("#zspt").attr("checked", true);
	} else if ($("#caiZhong").val() == "pls") {
		$("#zxpt").attr("checked", true);
		$("#zlpt").attr("checked", true);
		$("#zspt").attr("checked", true);
	} else if ($("#caiZhong").val() == "dlt") {
		$("#dlt_pttz").attr("checked", true);
	}
}

function initDP() {
	$("#zxpt").attr("checked", true);
	$("#zlpt").attr("checked", true);
	$("#zspt").attr("checked", true);

}
//选中的li添加样式
function add_css(li) {
	li.siblings().removeClass("numberlan");
	li.addClass("numberlan");
	$("#codes li").click(function() {
		var index = $("#codes li").index(this);
		$("#list_LotteryNumber > option").eq(index).attr("selected", true);
	});

}
//获取注码 并拼接提示层需要的号码样式
function addMouseOver(obj) {
	var index = $("#codes li").index(obj);
	var view = $("#list_LotteryNumber > option").eq(index).text();
	splitZhuma(view);

}
function splitZhuma(zhuma) {
	var zhumaStr = zhuma.split("|");
	var str;

	if ($("#caiZhong").val() == "dlt" && zhumaStr.length == 5) {
		str = '<span><font class="red1">[' + decodeURI(EncodeUtf8('前区|胆')) + ']</font><font>' + zhumaStr[0] + '</font></span><span class="tuolist"><font class="red2tuo">[' + decodeURI(EncodeUtf8('前区|拖')) + ']</font><font class="tuoma">' + zhumaStr[1] + ' </font></span><span><font class="blue">[' + decodeURI(EncodeUtf8('后区|胆')) + ']</font><font>' + zhumaStr[2] + '</font></span><span><font class="blue">[' + decodeURI(EncodeUtf8('后区|拖')) + ']</font><font>' + zhumaStr[3] + '</font></span><span>' + zhumaStr[4] + '</span>';
		if ((zhumaStr[0] + "," + zhumaStr[1] + "," + zhumaStr[2]).length > 26) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if ($("#caiZhong").val() == "ssq" && zhumaStr.length == 4) {
		str = '<span><font class="red1">[' + decodeURI(EncodeUtf8('胆')) + ']</font><font>' + zhumaStr[0] + '</font></span><span><font class="red1">[' + decodeURI(EncodeUtf8('拖')) + ']</font><font>' + zhumaStr[1] + ' </font></span><span><font class="blue">[' + decodeURI(EncodeUtf8('蓝')) + ']</font><font>' + zhumaStr[2] + '</font></span><span>' + zhumaStr[3] + '</span>';

		if ((zhumaStr[0] + "," + zhumaStr[1] + "," + zhumaStr[2]).length > 53) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if ($("#caiZhong").val() == "qlc" && zhumaStr.length == 3) {
		str = '<span><font class="red1">[' + decodeURI(EncodeUtf8('胆')) + ']</font><font>' + zhumaStr[0] + '</font></span><span><font class="red1">[' + decodeURI(EncodeUtf8('拖')) + ']</font><font>' + zhumaStr[1] + ' </font></span><span>' + zhumaStr[2] + '</span>';

		if ((zhumaStr[0] + "," + zhumaStr[1]).length > 51) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if ($("#caiZhong").val() == "ssq" || $("#caiZhong").val() == "dlt" && zhumaStr.length == 3) {
		str = '<span class="tuolist"><font class="red2tuo">[' + decodeURI(EncodeUtf8('复式')) + ']</font><font class="tuoma">' + zhumaStr[0] + '|' + zhumaStr[1] + '</font></span><span>' + zhumaStr[2] + '</span>	';

		if ((zhumaStr[0] + "," + zhumaStr[1]).length > 60) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if (zhumaStr.length == 4 && ($("#caiZhong").val() == "11xuan5" || $("#caiZhong").val() == "syydj")) {

		str = '<span class="tuolist"><font class="red2tuo">[' + zhumaStr[0] + ']</font><font class="tuoma">' + zhumaStr[1] + '|' + zhumaStr[2] + '</font></span><span>' + zhumaStr[3] + '</span>	';
		if ((zhumaStr[0] + zhumaStr[1] + zhumaStr[2]).length > 60) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if (($("#caiZhong").val() == "11xuan5" || $("#caiZhong").val() == "syydj") && zhumaStr.length == 5) {
		str = '<span class="tuolist"><font class="red2tuo">[' + zhumaStr[0] + ']</font><font class="tuoma">' + zhumaStr[1] + '|' + zhumaStr[2] + '|' + zhumaStr[3] + '</font></span><span>' + zhumaStr[4] + '</span>	';
		if ((zhumaStr[0] + zhumaStr[1] + zhumaStr[2] + zhumaStr[3]).length > 60) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");
		}

	} else if ($("#caiZhong").val() == "3D" || $("#caiZhong").val() == "pls") {

		str = '<span class="tuolist"><font class="red2tuo">[' + zhumaStr[0] + ']</font><font class="tuoma">' + zhumaStr[1] + '</font></span><span>' + zhumaStr[2] + '</span>	';
		if (zhuma.indexOf(decodeURI(EncodeUtf8('复式'))) < 0) {
			if ((zhumaStr[0] + zhumaStr[1]).length > 65 && zhumaStr.length == 3) {
				$(".touzhutk_nr").html(str);
				$(".touzhutk").css("display", "block");

			}
		}

	} else if ($("#caiZhong").val() == "ssc") {
		str = '<span class="tuolist"><font class="red2tuo">' + zhumaStr[0] + '</font></span><span>' + zhumaStr[1] + '</font></span><span>' + zhumaStr[2] + '</span>	';
		if ((zhumaStr[0] + zhumaStr[1]).length > 70 && zhumaStr.length == 3) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");

		}

	} else {
		str = '<span class="tuolist"><font class="red2tuo">[' + decodeURI(EncodeUtf8('复式')) + ']</font><font class="tuoma">' + zhumaStr[0] + '</font></span><span>' + zhumaStr[1] + '</span>	';
		if (zhumaStr[0].length > 60) {
			$(".touzhutk_nr").html(str);
			$(".touzhutk").css("display", "block");

		}
	}

}
//鼠标移除li时 隐藏提示层
function mouseOut() {
	$(".touzhutk").css("display", "none");
}
//层随鼠标移动的事件
function initMouseMove() {
	if (!document.all) {
		document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = mouseMove;
}
function mouseMove(e) {
	var x, y;
	if (!document.all) {
		x = e.pageX;
		y = e.pageY;
	} else {
		x = document.body.scrollLeft + event.clientX + document.documentElement.scrollLeft;
		y = document.body.scrollTop + event.clientY + document.documentElement.scrollTop;
	}
	$(".touzhutk").css("left", x);
	$(".touzhutk").css("top", y);
}
//添加号码到新的选择器中
function add_codes(lotteryView, lotteryNumber) {
	// var $li = $('<li onmouseover="add_css($(this));" class="numberlan"><div onclick=getZhumaView("'+lotteryNumber+'");'+'><span class="numberhao">'+lotteryView+'</span></div><a href="javascript:btn_ClearSelectClick()" id="btn_ClearSelect" title="'+decodeURI(EncodeUtf8('删除'))+'"><span class="numberdel">'+decodeURI(EncodeUtf8('删除'))+'</span></a></li>');

	var $li = $('<li onmouseover="add_css($(this)),initMouseMove(),addMouseOver($(this));" onmouseout="mouseOut()" class="numberlan"><div class="numberhao" onclick=getZhumaView("' + lotteryNumber + '");' + '>' + lotteryView + ' </div> <span class="numberdel"><a href="javascript:btn_ClearSelectClick()" id="btn_ClearSelect" title="' + decodeURI(EncodeUtf8('删除')) + '">' + decodeURI(EncodeUtf8('删除')) + '</a></span> </li>');
	$("#codes").append($li);
}

//删除选中
function btn_ClearSelectClick() {
	if ($("#codes li").length == 0) {
		openAlert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));

		//alert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
		return true;
	}
	if (! ($("#codes li.numberlan"))) {
		openAlert(decodeURI(EncodeUtf8("请单击选中要删除的投注内容。")));

		//alert(decodeURI(EncodeUtf8("请单击选中要删除的投注内容。")));
		return true;
	}

	var multiple = Number($("#tb_Multiple").val());
	var Len;
	var codeLen = $("#codes li").length;
	var optionLen = $("#list_LotteryNumber option").length;
	Len = codeLen;
	optionLen = Len;
	var selectLot = $("#list_LotteryNumber>option:selected").get(0).text; //选中框框里面的注数
	var a = selectLot.lastIndexOf(",");
	var b = selectLot.substring(0, a + 2);
	var c = b.lastIndexOf("]");
	var delLot = b.substring(c + 1, c.length);

	var zhushu = $("#list_LotteryNumber>option:selected").get(0).getAttribute("zhushu");
	var animal_zhushu = 0;
	var animal_Money = 0;
	totalLotteryInvest = $("#lab_Num").html();
	totalMoney = $("#investField").html();
	if ($("#zhuijia").is(":visible")) {
		dltCheckBox();
		var delMoney = $("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney");
		var old_zhuShu = Number($("#lab_Num").html()); //总共注数
		totalLotteryInvest = old_zhuShu - zhushu;
		if (!$("#sub_nav_3").is(":visible")) {
			if (oneMoney == 3) {
				if ($("#list_LotteryNumber>option:selected").get(0).getAttribute("wangfang") == "3") {
					//获取生肖乐注数
					animal_zhushu = Number(zhushu);
					totalLotteryInvest = old_zhuShu - animal_zhushu;
					totalMoney = $("#investField").html() - 2 * animal_zhushu * multiple;
				} else {
					totalMoney = Number($("#investField").html() - oneMoney * zhushu * multiple);
				}
			} else {
				totalMoney = Number($("#investField").html() - oneMoney * zhushu * multiple);
			}
		} else {
			totalLotteryInvest -= Number($("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney")) / 2;
			totalMoney -= Number($("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney")) * multiple;
		}
	} else {
		animal_zhushu = Number(zhushu);
		totalLotteryInvest = $("#lab_Num").html() - animal_zhushu;
		totalMoney = Number($("#investField").html() - Number($("#list_LotteryNumber>option:selected").get(0).getAttribute("delMoney")) * multiple);

	}

	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到
	getFinalMoney();
	if ($("#list_LotteryNumber option").length == 1) {
		totalMoney = 0;
		totalLotteryInvest = 0;
		$("#investField").html(totalMoney.toFixed());
		$("#current_money").html(totalMoney.toFixed());
		//调用公共方法让购彩以后的金额得到并将其转换为两位小数
		getFinalMoney();
		$("#tb_Multiple").val(1);
	}

	$("option:selected", $("#list_LotteryNumber")).remove();
	$("#codes li.numberlan").remove();

	$("#lab_Num").html(parseInt(totalLotteryInvest));
	//删除追号计算器
	clearDIV();

	if ($("#daiGouHemai") != null && $("#qishuList") != null && ($("#daiGouHemai").val() == "zhuihao" || $("#daiGouHemai").val() == "ziyouZhuihao")) {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	//ClearSelect();
	mouseOut();
	chooseBallToMoney();
}

function btn_Clear(){
	$("#codes li").remove();
	$("#lab_Num").html(0);
	$("#investField").html("0");
	$("#current_money").html("0");
	$("#tb_Multiple").val(1);
	$("#tb_Multiple2").val(1);
}

function btn_ClearClick() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	totalMoney = 0;
	totalLotteryInvest = 0;
	$("#lab_Num").html(0);
	$("#investField").html("0");
	$("#current_money").html("0");
	$("#tb_Multiple").val(1);
	//调用公共方法让购彩以后的金额得到并将其转换为两位小数
	getFinalMoney();
	clearDIV();
	if ($("#daiGouHemai") != null && $("#qishuList") != null && ($("#daiGouHemai").val() == "zhuihao" || $("#daiGouHemai").val() == "ziyouZhuihao")) {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	chooseBallToMoney();
	//ClearSelect(); 
}

// 倍数验证

function multipleValidate() {
	// 如用户倍数框留空，光标离开倍数输入框，则倍数输入框默认为1.
	if ($("#codes li").length == 0) {
		$("#tb_Multiple").val("1");
		openAlert(decodeURI(EncodeUtf8("您还没有输入投注内容。")));
		return false;
	}
	if ($('#tb_Multiple').val() == '' || $('#tb_Multiple').val() == undefined || $('#tb_Multiple').val() == null || Number($('#tb_Multiple').val()) <= 0) {
		$('#tb_Multiple').val(1);
		$('#tb_Multiple').focus();
		$('#tb_Multiple').select();
	}

	//判断倍数是否在1-10000倍之间(体彩10000倍，福彩10000倍)
	var lotno = $("#lotNo").val();
	if (Number($('#tb_Multiple').val()) > 10000) {
		$('#tb_Multiple').val(10000);
		$('#tb_Multiple').focus();
		$('#tb_Multiple').select();
	}
//	if (lotno == "T01010" || lotno == "T01007" || lotno == "T01012") {
//		if (Number($('#tb_Multiple').val()) > 9999) {
//			$('#tb_Multiple').val(9999);
//			$('#tb_Multiple').focus();
//			$('#tb_Multiple').select();
//		}
//	} else if (lotno == "F47104" || lotno == "F47103" || lotno == "F47102") {
//		if (Number($('#tb_Multiple').val()) > 50) {
//			$('#tb_Multiple').val(50);
//			$('#tb_Multiple').focus();
//			$('#tb_Multiple').select();
//		}
//	} else {
//		if (Number($('#tb_Multiple').val()) > 99) {
//			$('#tb_Multiple').val(99);
//			$('#tb_Multiple').focus();
//			$('#tb_Multiple').select();
//		}
//	}

	//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
	var pattern = /^-?\d+$/;
	if (isNaN($('#tb_Multiple').val()) || $('#tb_Multiple').val().search(pattern) != 0) {
		$('#tb_Multiple').val(1);
		$('#tb_Multiple').focus();
		$('#tb_Multiple').select();
		return false;
	}
	if ($("#daiGouHemai") != null && $("#qishuList") != null && ($("#daiGouHemai").val() == "zhuihao" || $("#daiGouHemai").val() == "ziyouZhuihao")) {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
	return true;
}

// 所有投注的公共方法

function touzhuPublic() {

	//清空投注登录框
	$("#mobilePOP").val("");
	$("#passwordPOP").val("");
	$("#validatePOP").val("");
	
	
	var current_money = "current_money";
	var investField_standrad = "investField_standrad";
	var tb_Multiple_standrad = "tb_Multiple_standrad";
	//针对竞彩足球--文件上传的
	var lotno=$("#lotNo").val();
	if(lotno == "J00003"){
		current_money =  "current_money_zjq";
		investField_standrad = "investField_standrad_zjq";
		tb_Multiple_standrad = "tb_Multiple_standrad_zjq";
	}else if(lotno == "J00002"){
		current_money =  "current_money_bf";
		investField_standrad = "investField_standrad_bf";
		tb_Multiple_standrad = "tb_Multiple_standrad_bf";
	}else if(lotno == "J00004"){
		current_money =  "current_money_bqc";
		investField_standrad = "investField_standrad_bqc";
		tb_Multiple_standrad = "tb_Multiple_standrad_bqc";
	}
	if(lotno=="J00001" || lotno=="J00003" || lotno=="J00013" || lotno=="J00002" || lotno=="J00004"){
		if($("#codes li").length==0){
			openAlert(decodeURI(EncodeUtf8("请您至少选择一注号码后再购买！")));
			return false;
		}
	}
	//得到下拉列表的值
	var listLottery = $("#list_LotteryNumber");
	if ($("#list_LotteryNumber option").length == 0) {		
		openAlert(decodeURI(EncodeUtf8("请您至少选择一注号码后再购买！")));
		return false;
	}
	if($("#erjiwanfa").val()!="单关投注"){
		if ($("#lotNo").val() == "J00013"||$("#lotNo").val() == "J00001" || $("#lotNo").val() == "J00003"|| $("#lotNo").val() == "J00002"|| $("#lotNo").val() == "J00004") {
			if($("#lotNo").val() == "J00003"){
				if ($("#matchNum_zjq").html() < 2) {
					openAlert(decodeURI(EncodeUtf8("您好，请至少选择2场比赛！")));
					return false;
				}
			}else if($("#lotNo").val() == "J00002"){
				if ($("#matchNum_bf").html() < 1) {
					openAlert(decodeURI(EncodeUtf8("您好，请至少选择1场比赛！")));
					return false;
				}
			}else if ($("#lotNo").val() == "J00004") {
				if( $("#matchNum_bqc").html() < 2){
					openAlert(decodeURI(EncodeUtf8("您好，请至少选择2场比赛！")));
					return false;
				}
			}
			else if ($("#matchNum").html() < 2) {
				openAlert(decodeURI(EncodeUtf8("您好，请至少选择2场比赛！")));
				return false;
			}
			if ($("#allWanfa").val() == "" || $("#allWanfa").val() == "|") {
				openAlert(decodeURI(EncodeUtf8("您好，请选择过关方式！")));
				return false;
			}
		}
	}
	
	//判断协议是否选中
	if ($("#fengxiang") != null || $("#xieyi") != undefined) {
		if ($("#xieyi").attr('checked') != 'checked') {
			openAlert(decodeURI(EncodeUtf8("请您同意用户代购合买协议！")));
			return false;
		}
	}
	if ($("#fengxiang").attr('checked') == undefined ) {
		if ($("#fengxiang").attr('checked') != 'checked') {
			if ($("#lotNo").val() == "T01002") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对排列3进行限号管理，您是否同意网站《排列3投注风险须知》？")));
				return false;
			} else if ($("#lotNo").val() == "F47103") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对福彩3D进行限号管理，您是否同意网站《福彩3D投注风险须知》？")));
				return false;
			} else if ($("#lotNo").val() == "T01010") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对江西11选5进行限号管理，您是否同意网站《江西11选5投注风险须知》？")));
				return false;
			} else if ($("#lotNo").val() == "T01007") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对时时彩进行限号管理，您是否同意网站《时时彩投注风险须知》？")));
				return false;
			} else if ($("#lotNo").val() == "T01012") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对十一运夺金限号管理，您是否同意网站《十一运夺金投注风险须知》？")));
				return false;
			}
			
		}
	}
	//判断  单倍  金额不能超过2万元tb_Multiple_standrad
	if ($("#"+current_money).html() != null || $("#"+current_money).html() != undefined) {
		if (Number($("#"+investField_standrad).html())/Number($("#"+tb_Multiple_standrad).val()) > 20000 && $("#lotNo").val() != "T01007") {
			openAlert(decodeURI(EncodeUtf8("您好，单倍方案金额不能超过2万元！")));
			return false;
		}
	}
	//判断用户是否登录       
	if (!isLogin()) {
		$("#touzhu_money").html(0);
		$("#final_money").html(0);
		//弹出层
		loginRequrl();
		return false;
	}
	return true;
}

//执行普通投注功能
function touzhu() {
	//判断条件是否返回true
	if (!touzhuPublic()) {
		return false;
	}
	var betcode = "";
	var wanfa = "";
	var i = 0;
	var lotno = $("#lotNo").val();
	var qihao = $("#qihao").text();

	while ($("#list_LotteryNumber option:eq(" + i + ")").length > 0) {
		if ($("#list_LotteryNumber option:eq(" + i + ")").attr("wangFang") == "") {
			var wanfa = saleMa();
			alert(wanfa);
			if (wanfa.indexOf("|") != -1) {
				for (var k = 0; k < wanfa.split("|").length; k++) {
					wanfa += wanfa.split("|")[k] + "+";
				}
			} else {
				wanfa = wanfa + "+";
			}
		} else {
			wanfa += $("#list_LotteryNumber option:eq(" + i + ")").attr("wangFang") + "+";
		}

		if (lotno == "J00013"||lotno == "J00001" || lotno == "J00003" || lotno == "J00002" || lotno == "J00004") {
			betcode += wanfa + $("#list_LotteryNumber option:eq(" + i + ")").val();
		} else {
			betcode += $("#list_LotteryNumber option:eq(" + i + ")").val();
		}
		i++;
	}
	
	if (lotno == "F47104"||lotno == "T01001"||lotno == "F47102"||lotno=="T01009") {
		if($("#zengSong").hasClass("selected")){
			//得到赠彩用户的祝福语
			var blessing = "";
			var beishuArr = "";
			for(var k=1;k<21;k++){
				if(reg.test(Number($("#multiple"+k).val()))){
					var luck = encodeURI($("#luck"+k).val());
					luck = encodeURI($("#luck"+k).val());
					blessing +=  luck+ "@";
					beishuArr += $("#multiple"+k).val()+",";
				}
			}
			blessing = blessing.substring(0,blessing.length-1);
			if($("#ownCheck").attr('checked') == 'checked'){
				beishuArr = beishuArr + $("#ownMultiple").val();
			}
		}
	}
	wanfa = wanfa.substring(0, wanfa.length - 1);

	var jsonString = "";
	if (lotno == "F47104"||lotno == "T01001"||lotno == "F47102"||lotno=="T01009") {
		if($("#zengSong").hasClass("selected")){
			if(userRightList.substring(userRightList.length-1)==","){
				userRightList=userRightList.substring(0, userRightList.length-1);
			}
			jsonString = "{betcode:\"" + betcode + "\",lotno:\"" + lotno + "\",wanfa:\"" + wanfa + "\",qihao:\"" + qihao + "\",userRightList:\"" + userRightList  
			+ "\",beishuArr:\"" + beishuArr + "\",blessing:\"" + blessing  + "\"}";
		}else{
			jsonString = "{betcode:\"" + betcode + "\",lotno:\"" + lotno + "\",wanfa:\"" + wanfa + "\",qihao:\"" + qihao + "\"}";
		}
	}else{
		jsonString = "{betcode:\"" + betcode + "\",lotno:\"" + lotno + "\",wanfa:\"" + wanfa + "\",qihao:\"" + qihao + "\"}";
	}
	$("#jsonString").val(jsonString);
	$("#BettingForm").submit();
}
//初始化投注页面的所有金额以及登录状态
function touzhuInitStatic() {
	//初始化所有彩种
	if (isLogin()) { //登录情况下
		if($("#jcType").val() != null && $("#jcType").val() == "zjq"){
			//设置第一行
			$("#loginStaticInTouZhu_zjq").html('&#8220;<span id="this_username_zjq"></span>&#8221;' + decodeURI(EncodeUtf8('，您的账户余额为')) + '<span class="red">¥' + '</span><span id="touzhu_money" class="red">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元 ')) + '<a href="javascript:;" id="refresh_touzhu_money" onclick="refresh_touzhu_panle()" style="display:none;cursor:pointer;">刷新金额</a>' + decodeURI(EncodeUtf8('【')) + '<span class="buy_blue"><a href="javascript:;"  onclick="refresh_touzhu_button();" title="' + decodeURI(EncodeUtf8('立即充值')) + '">' + decodeURI(EncodeUtf8('立即充值')) + '</a></span>' + decodeURI(EncodeUtf8('】')));
			balanceDivDis("touzhu_money", "", "");
			//设置第二行
			$("#loginStaticInMoney_zjq").html(decodeURI(EncodeUtf8('本次投注金额为')) + '<span class="buy_red" id="current_money">0</span>' + decodeURI(EncodeUtf8('元，购买后您的账户余额为')) + '<span class="buy_red" id="final_money">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元')));
			$("#loginStaticInMoney_zjq").css("display", "none");
			$("#userDivDis").css("display", "block");
			$("#userDivNone").css("display", "none");
		}else if($("#jcType").val() != null && $("#jcType").val() == "bf"){
			//设置第一行
			$("#loginStaticInTouZhu_bf").html('&#8220;<span id="this_username_bf"></span>&#8221;' + decodeURI(EncodeUtf8('，您的账户余额为')) + '<span class="red">¥' + '</span><span id="touzhu_money" class="red">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元 ')) + '<a href="javascript:;" id="refresh_touzhu_money" onclick="refresh_touzhu_panle()" style="display:none;cursor:pointer;">刷新金额</a>' + decodeURI(EncodeUtf8('【')) + '<span class="buy_blue"><a href="javascript:;"  onclick="refresh_touzhu_button();" title="' + decodeURI(EncodeUtf8('立即充值')) + '">' + decodeURI(EncodeUtf8('立即充值')) + '</a></span>' + decodeURI(EncodeUtf8('】')));
			balanceDivDis("touzhu_money", "", "");
			//设置第二行
			$("#loginStaticInMoney_bf").html(decodeURI(EncodeUtf8('本次投注金额为')) + '<span class="buy_red" id="current_money">0</span>' + decodeURI(EncodeUtf8('元，购买后您的账户余额为')) + '<span class="buy_red" id="final_money">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元')));
			$("#loginStaticInMoney_bf").css("display", "none");
			$("#userDivDis").css("display", "block");
			$("#userDivNone").css("display", "none");
		}else if($("#jcType").val() != null && $("#jcType").val() == "bqc"){
			//设置第一行
			$("#loginStaticInTouZhu_bqc").html('&#8220;<span id="this_username_bqc"></span>&#8221;' + decodeURI(EncodeUtf8('，您的账户余额为')) + '<span class="red">¥' + '</span><span id="touzhu_money" class="red">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元 ')) + '<a href="javascript:;" id="refresh_touzhu_money" onclick="refresh_touzhu_panle()" style="display:none;cursor:pointer;">刷新金额</a>' + decodeURI(EncodeUtf8('【')) + '<span class="buy_blue"><a href="javascript:;"  onclick="refresh_touzhu_button();" title="' + decodeURI(EncodeUtf8('立即充值')) + '">' + decodeURI(EncodeUtf8('立即充值')) + '</a></span>' + decodeURI(EncodeUtf8('】')));
			balanceDivDis("touzhu_money", "", "");
			//设置第二行
			$("#loginStaticInMoney_bqc").html(decodeURI(EncodeUtf8('本次投注金额为')) + '<span class="buy_red" id="current_money">0</span>' + decodeURI(EncodeUtf8('元，购买后您的账户余额为')) + '<span class="buy_red" id="final_money">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元')));
			$("#loginStaticInMoney_bqc").css("display", "none");
			$("#userDivDis").css("display", "block");
			$("#userDivNone").css("display", "none");
		}else{

			//设置第一行
			$("#loginStaticInTouZhu").html('&#8220;<span id="this_username"></span>&#8221;' + decodeURI(EncodeUtf8('，您的账户余额为')) + '<span class="red">¥' + '</span><span id="touzhu_money" class="red">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元 ')) + '<a href="javascript:;" id="refresh_touzhu_money" onclick="refresh_touzhu_panle()" style="display:none;cursor:pointer;">刷新金额</a>' + decodeURI(EncodeUtf8('【')) + '<span class="buy_blue"><a href="javascript:;"  onclick="refresh_touzhu_button();" title="' + decodeURI(EncodeUtf8('立即充值')) + '">' + decodeURI(EncodeUtf8('立即充值')) + '</a></span>' + decodeURI(EncodeUtf8('】')));
			balanceDivDis("touzhu_money", "", "");
			//设置第二行
			$("#loginStaticInMoney").html(decodeURI(EncodeUtf8('本次投注金额为')) + '<span class="buy_red" id="current_money">0</span>' + decodeURI(EncodeUtf8('元，购买后您的账户余额为')) + '<span class="buy_red" id="final_money">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元')));
			$("#loginStaticInMoney").css("display", "none");
			$("#userDivDis").css("display", "block");
			$("#userDivNone").css("display", "none");
		}
		
	
	}
}
//添加刷新按钮
function refresh_touzhu_button() {
	$("#refresh_touzhu_money").css('display', '');
	window.open('/rchlw/function/rules/user.jsp?key=4');
}
function refresh_touzhu_panle() {
	$.ajax({
		url: '/rchlw/ajax/selectAll!ajaxFindAccount',
		type: 'post',
		//数据发送方式   
		async: false,
		dataType: 'json',
		success: function(msg) {
			$('#touzhu_money').html(msg.deposit_amount); //deposit_amount 底部的可用余额
			$('#topLogin_money').html(msg.deposit_amount); //deposit_amount头部的 可用余额
			$("#refresh_touzhu_money").css('display', 'none');
		}
	});
}
function changeTab(tab) {
	if ($("#list_LotteryNumber option").length != 0) {
		if (confirm(decodeURI(EncodeUtf8("切换彩种将放弃你刚刚投注的票！确定更改？")))) {
			if (tab == "ssq") {
				toggle_nav(1, 'weixuan', 'xuan', 3);
			} else if (tab == "3D") {
				toggle_nav(2, 'weixuan', 'xuan', 3);
			} else if (tab == "dlt") {
				toggle_nav(3, 'weixuan', 'xuan', 3);
			}
			$("option", $("#list_LotteryNumber")).remove();
			totalMoney = 0;
			totalLotteryInvest = 0;
			$("#lab_Num").html(0);
			$("#tb_Multiple").val(1);
		}
	} else {
		if (tab == "ssq") {
			toggle_nav(1, 'weixuan', 'xuan', 3);
		} else if (tab == "3D") {
			toggle_nav(2, 'weixuan', 'xuan', 3);
		} else if (tab == "dlt") {
			toggle_nav(3, 'weixuan', 'xuan', 3);
		}
	}
}
//--------- 原DIV_SHOW.js 文件内容------------------
//导航栏切换  idname id的名字   hout 鼠标离开时的样式  hover 鼠标悬停时或点击是的样式   length 要切换的div的个数 此方法移至util.js
//两层之间显示与隐藏

function divBlock(divXS, divYC, divUp) {
	$(divXS).css('display', 'block');
	$(divYC).css('display', 'none');
	$(divUp).css('display', 'none');
	if ($("#caiZhong").val() == '3D') {
		clear();
	}
}

function daiGou_heMai() {
	//$("#daiGou").attr('checked')==undefined
	if ($("#daiGou").attr('checked') == 'checked') {
		$("#betchNum option").remove();
		$("#betchNum").append('<option value="1">1</option>');
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由购买人自行全额购买彩票")));
		$("#zuiHaoDIV").hide();
	} else if ($("#zuiHao").attr('checked') == 'checked') {
		$("#betchNum option").remove();
		$('#betchNum').append('<option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="99">99</option>');
		$("#gmzh_text").text(decodeURI(EncodeUtf8("连续多期购买同一注（组）号码。")));
		$("#zuiHaoDIV").show();

	}
}

//可以将这两个方法去掉  funCommon() funDantuo()，这里两个方法换成divBlock()d
//文件上传

//选择彩种，获取期号
function getBatchCode(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!batchCodeSelect",
		data: "lotNo=" + lotNo,
		dataType: 'json',
		//接受数据格式
		success: function(msg) {
			$("#qihao").html(msg.batchCode);
			$("#endTime").html(msg.end_time);
			$("#sysTime").val(msg.sysTime); //获取当前系统时间的毫秒数
			$("#sysTimenow").val(msg.sysTimenow);
			if (msg.end_time != null && msg.end_time != "") {
				var jirikaijiangriqi = msg.end_time + "";
				//获取当前日期
				var nowDate = getNowFormatDate("-");
				if (jirikaijiangriqi.indexOf(nowDate) > -1) { //是否当前时间 
					$("#jinrikaijiangId").html("<img src='/rchlw/function/images/jrkaijiang.gif' />");
				}
			}
			//获取遗漏
			var wanfa = "";
			if (msg.batchCode != null || msg.batchCode != "") {
				if(lotNo == "T01001"){
					//2012017   大乐透
					getQianQumissValue(62,'lotno=T01001&wanfa=MV_X'+'&batchcode='+msg.batchCode, false, 'dlt_qq1,dlt_qq2,dlt_qq3,dlt_qiandt1,dlt_qiandt2,dlt_qiandt3,dlt_qiantuma1,dlt_qiantuma2,dlt_qiantuma3,dlt_xhqq1,dlt_xhqq2,dlt_xhqq3','dlt_hq1,dlt_hq2,dlt_hq3,dlt_sxl1,dlt_sxl2,dlt_sxl3,dlt_houdt1,dlt_houdt2,dlt_houdt3,dlt_houtuma1,dlt_houtuma2,dlt_houtuma3,dlt_xhhq1,dlt_xhhq2,dlt_xhhq3',12,'');

				}else if(lotNo=="T01002"){					
					getplsmissValue(62, 'lotno=T01002&wanfa=MV_Z36HZ'+'&batchcode='+msg.batchCode, false,'pls_zlhz1,pls_zlhz2',11,'zhlhz');				
					get11X5missValue(68, 'lotno=T01002&batchcode=' + msg.batchCode, false,10);
					
				}else if(lotNo=="T01011"){
					getOmission(62, 'lotno=T01011&wanfa=MV_ZX'+'&batchcode='+msg.batchCode, false,'plw_wan,plw_qian,plw_bai,plw_shi,plw_ge','',10);
				}else if(lotNo=="T01009"){
					getOmission(62, 'lotno=T01009&wanfa=MV_ZX'+'&batchcode='+msg.batchCode, false, 'qxc_baiwan,qxc_shiwan,qxc_wan,qxc_qian,qxc_bai,qxc_shi,qxc_ge','',10)
				}else if(lotNo=="F47104"){					
					get11X5missValue(68, 'lotno=F47104&batchcode=' + msg.batchCode, false,15);
					
				}else if(lotNo=="F47103"){
					getplsmissValue(62, 'lotno=F47103&wanfa=MV_Z36HZ'+'&batchcode='+msg.batchCode, false,'3d_z6hz1,3d_z6hz2',11,'zhlhz');
					get11X5missValue(68, 'lotno=F47103&batchcode=' + msg.batchCode, false,14);
					
				}else if(lotNo=="F47102"){
					get11X5missValue(68, 'lotno=F47102&batchcode=' + msg.batchCode, false,15);
				}else if(lotNo == "T01010"){
					get11X5missValue(68, 'lotno=T01010&batchcode=' + msg.batchCode, false,11);
				}
			}
			initTime(); //倒计时使用
		}
	});
}
function getBeforeBatchCode(lotNo,num,time) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!beforeBatchCodeSelect",
		data: "lotNo=" + lotNo+"&num="+num,
		dataType: 'json',
		//接受数据格式
		success: function(msg) {
			var object1 = msg[1];
			var batchCode1 = object1.batchCode;
			$.ajax({
				type: "POST",
				url: "/rchlw/function/selectAll!getNMKSWinInfo",
				data: "lotno=" + lotNo+"&batchcode="+batchCode1,
				dataType: 'json',
				//接受数据格式
				success: function(m1){
					if(m1.winbasecode!=null){//如果当前期的上一期已经开奖
						var winbasecode = m1.winbasecode;
						var code1 = winbasecode.substring(1,2);
						var code2 = winbasecode.substring(3,4);
						var code3 = winbasecode.substring(5,6);
						var hezhi = parseInt(code1)+parseInt(code2)+parseInt(code3);
						var xingtai = "";
						if(code1==code2&&code1==code3)
							xingtai = "三同号";
						else if(code1==code2||code1==code3||code2==code3)
							xingtai = "二同号";
						else 
							xingtai = "三不同号";
						var shaizi = "";
						for(var i=1;i<7;i++){
							if(code1==i)
								shaizi+="<img src='/rchlw/function/images/nmks/shai-"+i+".png' width='53' height='53' />";

						}
						for(var i=1;i<7;i++){
							if(code2==i)
								shaizi+="<img src='/rchlw/function/images/nmks/shai-"+i+".png' width='53' height='53' />";

						}
						for(var i=1;i<7;i++){
							if(code3==i)
								shaizi+="<img src='/rchlw/function/images/nmks/shai-"+i+".png' width='53' height='53' />";

						}
						$("#code1").html(code1);
						$("#code2").html(code2);
						$("#code3").html(code3);
						$("#hezhi").html(hezhi);
						$("#xingtai").html(xingtai);
						$('div:#shaizi').html(shaizi);
						var object0 = msg[0];
						$("#kaijiangqihao").html(batchCode1);//显示上一期的开奖期号
						var tem= parseInt(object0.endbettime);
						var temp = parseInt(time)*1000;
						var temper= (tem+temp);
						$("#kaijiangtime").html(temper);
						initKaiJiangTime(); //倒计时使用显示当前期的开奖剩余时间
					}else{//如果当前期的上一期未开奖,得到上上期的信息
						var object2 = msg[2];
						var batchCode2 = object2.batchCode;
						$.ajax({//查询开奖号码
							type: "POST",
							url: "/rchlw/function/selectAll!getNMKSWinInfo",
							data: "lotno=" + lotNo+"&batchcode="+batchCode2,
							dataType: 'json',
							//接受数据格式
							success: function(m2){
								if(m2.winbasecode!=null){
									$("#kaijiang").html(m2.winbasecode);
									var object2 = msg[2];
									//显示上上期的开奖期号
									$("#kaijiangqihao").html(object2.batchCode);
									var tem= parseInt(object1.endbettime);
									var temp = parseInt(time)*1000;
									var temper= (tem+temp);
									$("#kaijiangtime").html(temper);
									initKaiJiangTime(); //倒计时使用显示上期的开奖剩余时间
								}
								
								}
						
							});
					}
					
					}
			
				});
			
		}
	});
}

//选择彩种，获取期号
function getGaoPinBatchCode(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!batchCodeSelect",
		data: "lotNo=" + lotNo,
		dataType: 'json',
		//接受数据格式
		success: function(msg) {
			$("#qihao").html(msg.batchCode);
			$("#endTime").html(msg.end_time);
			$("#sysTime").val(msg.sysTime); //获取当前系统时间的毫秒数
			$("#sysTimenow").val(msg.sysTimenow);
			if (msg.end_time != null && msg.end_time != "") {
				var jirikaijiangriqi = msg.end_time + "";
				//获取当前日期
				var nowDate = getNowFormatDate("-");
				if (jirikaijiangriqi.indexOf(nowDate) > -1) { //是否当前时间 
					$("#jinrikaijiangId").html("<img src='/rchlw/function/images/jrkaijiang.gif' />");
				}
			}
			//获取遗漏
			var wanfa = "";
			var wFlag = "";
			if (msg.batchCode != null || msg.batchCode != "") {
				if (lotNo == "T01012") {
					// 采用的分部 踩点是调用
					wanfa = "MV_Q3"; //访问是的默认玩法
					wFlag = "Q3_bai,Q3_shi,Q3_ge";
					getSYYDJOmission(62, 'lotno=' + lotNo + '&batchcode=' + msg.batchCode + '&wanfa=' + wanfa, false, wFlag);
				} else if (lotNo == "T01007") {
					//采用的是一次性调用
					getOmission(62, 'lotno=T01007&wanfa=MV_DD&batchcode=' + msg.batchCode, false, 'DXDS_geDX,DXDS_shiDX');
					getOmission(62, 'lotno=T01007&wanfa=MV_5X&batchcode=' + msg.batchCode, false, 'YX_ge,EXZX_shi,EXZX_ge,SX_bai,SX_shi,SX_ge,WX_wan,WX_qian,WX_bai,WX_shi,WX_ge,WXTX_wan,WXTX_qian,WXTX_bai,WXTX_shi,WXTX_ge');
				}
			}
			initTime(); //倒计时使用
		}
	});
}
//按clen长度生成随机号码
function RandCode(clen, Number) {
	var rsl = "";
	while (rsl.length < clen) {
		var va = Math.ceil(Math.random() * Number - 1);
		rsl += va;
	}
	return rsl;
}

function init() {
	var view = GetQueryString("view");
	$("#" + view).attr("class", "expanded");

}
//将获取的幸运选号的号码添加到选号栏中
function luckSumit(view, listView, url) {
	var arr = new Array(10);
	arr = view.split(",");
	var lotteryNumber = "";
	//计算用户的金额
	totalMoney += 2 * Number($("#tb_Multiple").val());
	totalLotteryInvest = 1;
	$("#investField").html(totalMoney.toFixed());
	$("#current_money").html(totalMoney.toFixed());
	//调用公共方法让购彩以后的金额得到
	getFinalMoney();
	if (url.split(".")[0] == "/pailie3") {
		wanfa = "010";
	} else if (url.split(".")[0] == "/fucai3D") {
		listView = listView.substring(0, listView.length - 1) + listView.substring(listView.length - 1, listView.length);
		wanfa = "00";

	} else if (url.split(".")[0] == "/daletou") {
		wanfa = "0";

	} else {
		wanfa = "00";
	}
	//拿到页面上号码蓝的对象
	var lotteryListSelect = $("#list_LotteryNumber");
	var opt = new Option(view, listView);
	opt.setAttribute('allLot', view);
	opt.setAttribute('backLot', listView);
	opt.setAttribute('wangFang', wanfa);
	opt.setAttribute('zhushu', "1");
	opt.setAttribute('money', 2);
	opt.setAttribute('delMoney', 2);
	lotteryListSelect[0].options.add(opt);
	if (url.split(".")[0] == "/pailie3" || url.split(".")[0] == "/fucai3D") {
		view = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[直选单式]')) + view + "</span><span class='jieguo1'>&nbsp;&nbsp;" + decodeURI(EncodeUtf8("1注　　共2元")) + "</span>";
	} else if (url.split(".")[0] == "/dlt") {
		view = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[单式]')) + view + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　　")) + "</span>";
	} else {
		view = "<span class='jieguo0'>" + decodeURI(EncodeUtf8('[单式]')) + view + "</span><span class='jieguo1'>" + decodeURI(EncodeUtf8("  1注　　共2元")) + "</span>";
	}
	add_codes(view, listView);
	$("#lab_Num").html(totalLotteryInvest);

}

//频道页悬停时显示颜色
function getColor(sender, classOver, classOut) {
	if (sender.className == classOver) {
		sender.className = classOut;
	}
}

//时时彩彩种页左侧的开奖公告
function compare() {
	if ($("#date").val() < ($("#qihao").text() - 1)) {
		$("#tremDate").text($("#qihao").text() - 1);
		$("#openDate").text(decodeURI(EncodeUtf8("未开奖")));
		$("#lotteryCode").text(decodeURI(EncodeUtf8("等待开奖")));
		$("#lotteryCode").css("color", "red");
	}
}

//删除---623----
function btn_ClearSelectdanshi(okNum, rmb) {
	$("option:selected", $("#list_LotteryNumber")).remove();
	$("#codes li.numberlan").remove();
	var resNum = parseInt($("#lab_Num").html()) - parseInt(okNum);
	var resField = parseInt($("#investField").html()) - parseInt(rmb);
	$("#lab_Num").text(resNum);
	$("#investField").text(resField);
	$("#current_money").text(resField);
	$.ajax({
		type: "POST",
		url: "/rchlw/function/upload!deleteFile?path=" + path
	});

}
//删除---623----
function btn_ClearSelectdanshio(okNum, rmb, path) {
	var multiple = Number($("#tb_Multiple").val());
	var lotno=$("#lotNo").val();
	if (lotno != "J00013" && lotno != "J00001" && lotno != "J00003") {
		$("option:selected", $("#list_LotteryNumber")).remove();
	}	
	$("#codes li.numberlan").remove();
	var resNum = Number($("#lab_Num").html()) - Number(okNum);
	var resField = 0;
	if ($("#oneMoney").attr("checked") == 'checked' && $("#zhuijia").is(":visible")) {
		resField = Number($("#investField").html()) - Number(rmb) * multiple * 3 / 2;
	} else {
		resField = Number($("#investField").html()) - Number(rmb) * multiple;
	}

	$("#lab_Num").text(resNum);
	$("#investField").text(resField);
	$("#current_money").text(resField);
	if ($("#codes li").length == 0) {
		$("#tb_Multiple").val("1");
		$("#tb_Multiple2").val("1");
	}
	$.ajax({
		type: "POST",
		url: "/rchlw/function/upload!deleteFile?path=" + path
	});

}

/////*******************************回显注码内容***********************************/
//获取注码循环显示页面
function getZhumaView(lotteryNumber) {
	lotteryNumber = lotteryNumber.substring(0, lotteryNumber.length - 1);
	var lotno = $("#lotNo").val();
	//双色球
	if (lotno == 'F47104') {
		//清空所有内容包括球选中状态、注数和金额
		ClearSelect();
		ClearCheck();
		//胆拖
		if (lotteryNumber.indexOf("*") > -1) {
			var codes = lotteryNumber.split("~");
			var redCode = codes[0].split("*");
			var danma = redCode[0].split(",");
			var tuoma = redCode[1].split(",");
			var blueCode = codes[1].split(",");
			for (var i = 0; i < danma.length; i++) {
				ssq_danTuo_setBallState("r", danTuo_getBallNum(danma[i]), true, "danMa");
			}
			for (var i = 0; i < tuoma.length; i++) {
				ssq_danTuo_setBallState("r", danTuo_getBallNum(tuoma[i]), true, "tuoMa");
			}
			for (var i = 0; i < blueCode.length; i++) {
				ssq_danTuo_setBallState("b", danTuo_getBallNum(blueCode[i]), true, "");
			}
			danTuo_checkFull();

			//直选
		} else {
			var codes = lotteryNumber.split("~");
			var redCode = codes[0].split(",");
			var blueCode = codes[1].split(",");
			for (var i = 0; i < redCode.length; i++) {
				SetBallState("r", GetBallNum(redCode[i]), true);
			}

			for (var i = 0; i < blueCode.length; i++) {
				SetBallState("b", GetBallNum(blueCode[i]), true);
			}
			ssq_CheckFull();
		}

		//福彩3D 001,3,2^
	} else if (lotno == 'F47103') {
		//获取注码剔除前面的玩法
		var wanfa = lotteryNumber.substring(0, 2);
		//普通投注"td1_2_" + row + "_" + col
		if ($("#sub_nav_1").is(":visible")) {
			//直选单式
			if (wanfa == "00") {
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				for (var i = 0; i < 3; i++) {
					ClearAll(1, i);
				} //清空所有的内容
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(i, codes[i]), true);
				}
				CheckFullZhiF();
				//直选复式
			} else if (wanfa == "20") {
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				for (var i = 0; i < 3; i += 1) {
					ClearAll(1, i);
				} //清空所有的内容
				var codes = lotteryNumber.split("~");
				var hunderedCodes = codes[0].split(",");
				var tenCodes = codes[1].split(",");
				var unitCodes = codes[2].split(",");
				for (var i = 0; i < hunderedCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(0, hunderedCodes[i]), true);
				}
				for (var i = 0; i < tenCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(1, tenCodes[i]), true);
				}
				for (var i = 0; i < unitCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(2, unitCodes[i]), true);
				}
				CheckFullZhiF();

				//和值
			} else if (wanfa == "10") {

				ClearZiHeSelect(); //清空所有的和值数

				var codes = lotteryNumber.split("^");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_ziXuanHe(GetBallObject(codes[i].substring(2, codes[i].length)), true);
				}
				CheckFull_ziXuanHe();
			}

			//组六
		} else if ($("#sub_nav_2").is(":visible")) {
			if (wanfa == "02" || wanfa == "32") { //组六单式和复式
				ClearAll(3, 0); //清空
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					SetBallStateZu6F(GetBallObjectZu6F(0, codes[i]), true);
				}
				CheckFullZu6F();
				//和值
			} else if (wanfa == "12") {

				ClearSelect(); //清空所有的和值数
				var codes = lotteryNumber.split("^");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_zu6He(GetBallObject_zu6He(codes[i].substring(2, codes[i].length)), true);
				}
				CheckFull_zu6();
			}
			//组三
		} else if ($("#sub_nav_3").is(":visible")) {
			if (wanfa == "31" || wanfa == "01") { //组三单式和复式
				ClearAll(2, 0); //清空
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					SetBallStateZu3F(GetBallObjectZu3F(0, codes[i]), true);
				}
				CheckFullZu3F();
				//和值
			} else if (wanfa == "11") {

				ClearSelect(); //清空所有的和值数
				var codes = lotteryNumber.split("^");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_zuXuanHe(GetBallObject_zu3He(codes[i].substring(2, codes[i].length) - 1), true);
				}
				CheckFull_zuHe();
			}
		}

	} else if (lotno == 'F47102') {
		//七乐彩  

		//清空所有内容包括球选中状态、注数和金额
		ClearSelect();
		ClearCheck();
		//胆拖 3,8,19,22,23*20,21,25
		if (lotteryNumber.indexOf("*") > -1) {

			var codes = lotteryNumber.split("*");
			var danma = codes[0].split(",");
			var tuoma = codes[1].split(",");

			for (var i = 0; i < danma.length; i++) {
				danTuo_setBallState("r", danTuo_getBallNum(danma[i]), true, "danMa");
			}
			for (var i = 0; i < tuoma.length; i++) {
				danTuo_setBallState("r", danTuo_getBallNum(tuoma[i]), true, "tuoMa");
			}

			danTuo_checkFull();

			//直选 6,11,12,17,23,27,29
		} else {
			var codes = lotteryNumber.split(",");

			for (var i = 0; i < codes.length; i++) {
				SetBallState("r", GetBallNum(codes[i]), true);
			}
			CheckFull();
		}

	} else if (lotno == 'T01002') {
		//排列3
		//获取注码剔除前面的玩法
		var wanfa = lotteryNumber.substring(0, 2);
		//普通投注"td1_2_" + row + "_" + col
		if ($("#sub_nav_1").is(":visible")) {
			//直选单式  013-2,3-2,3;
			if (wanfa == "01") {

				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				for (var i = 0; i < 3; i += 1) {
					ClearAll(1, i);
				} //清空所有的内容
				if (lotteryNumber.indexOf("-") > -1) {
					var codes = lotteryNumber.split("-");
					var hunderedCodes = codes[0].split(",");
					var tenCodes = codes[1].split(",");
					var unitCodes = codes[2].split(",");
				} else {
					var codes = lotteryNumber.split(",");
					var hunderedCodes = codes[0];
					var tenCodes = codes[1];
					var unitCodes = codes[2];
				}
				for (var i = 0; i < hunderedCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(0, hunderedCodes[i]), true);
				}
				for (var i = 0; i < tenCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(1, tenCodes[i]), true);
				}
				for (var i = 0; i < unitCodes.length; i++) {
					SetBallStateZhiF(GetBallObjectZhiF(2, unitCodes[i]), true);
				}
				CheckFullZhiF();

				//和值
			} else if (wanfa == "S1") {
				ClearZiHeSelect(); //清空所有的和值数
				var codes = lotteryNumber.split(";");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_ziXuanHe(GetBallObjectzh(codes[i].substring(2, codes[i].length)), true);
				}
				CheckFull_ziXuanHe();
			}

			//组六
		} else if ($("#sub_nav_2").is(":visible")) {
			if (wanfa == "06" || wanfa == "F6") { //组六单式和复式
				ClearAll(3, 0); //清空
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					SetBallStateZu6F(GetBallObjectZu6F(0, codes[i]), true);
				}
				CheckFullZu6F();
				//和值
			} else if (wanfa == "S6") {

				ClearSelect(); //清空所有的和值数
				var codes = lotteryNumber.split(";");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_zu6He(GetBallObject_zu6He(codes[i].substring(2, codes[i].length)), true);
				}
				CheckFull_zu6();
			}
			//组三
		} else if ($("#sub_nav_3").is(":visible")) {

			if (wanfa == "06" || wanfa == "F3") { //组三单式和复式
				ClearAll(2, 0); //清空
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					SetBallStateZu3F(GetBallObjectZu3F(0, codes[i]), true);
				}
				CheckFullZu3F();
				//和值
			} else if (wanfa == "S3") {

				ClearSelect(); //清空所有的和值数
				var codes = lotteryNumber.split(";");
				for (var i = 0; i < codes.length; i++) {
					SetBallState_zuXuanHe(GetBallObject_zu3He(codes[i].substring(2, codes[i].length)), true);
				}
				CheckFull_zuHe();
			}
		}

	} else if (lotno == 'T01009') {

		for (var i = 0; i < 7; i++) {
			ClearAll(8, i); //清空所选的內容
			//获取各个位上选择的号码
			if (lotteryNumber.indexOf("-") > -1) {
				var codes = lotteryNumber.split("-");
				var firstedCodes = codes[0].split(",");
				var secondCodes = codes[1].split(",");
				var threeCodes = codes[2].split(",");
				var fourCodes = codes[3].split(",");
				var fiveCodes = codes[4].split(",");
				var sixCodes = codes[5].split(",");
				var sevenCodes = codes[6].split(",");
			} else {
				var codes = lotteryNumber.split(",");
				var firstedCodes = codes[0];
				var secondCodes = codes[1];
				var threeCodes = codes[2];
				var fourCodes = codes[3];
				var fiveCodes = codes[4];
				var sixCodes = codes[5];
				var sevenCodes = codes[6];
			}

			//回显号码
			for (var j = 0; j < firstedCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(0, firstedCodes[j]), true);

			}
			for (var j = 0; j < secondCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(1, secondCodes[j]), true);

			}
			for (var j = 0; j < threeCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(2, threeCodes[j]), true);

			}
			for (var j = 0; j < fourCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(3, fourCodes[j]), true);

			}
			for (var j = 0; j < fiveCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(4, fiveCodes[j]), true);

			}
			for (var j = 0; j < sixCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(5, sixCodes[j]), true);

			}
			for (var j = 0; j < sevenCodes.length; j++) {
				qxc_setBallState(GetBallObjectZhiF(6, sevenCodes[j]), true);

			}
			CheckFullZhiF();
		}

	} else if (lotno == 'T01011') { //排列5回显
		for (var i = 0; i < 5; i += 1) {
			ClearAll(8, i);
		} //清空所有的内容
		if (lotteryNumber.indexOf("-") > -1) {
			var codes = lotteryNumber.split("-");
			var myriad = codes[0].split(",");
			var thousand = codes[1].split(",");
			var hunderedCodes = codes[2].split(",");
			var tenCodes = codes[3].split(",");
			var unitCodes = codes[4].split(",");
		} else {
			var codes = lotteryNumber.split(",");
			var myriad = codes[0];
			var thousand = codes[1];
			var hunderedCodes = codes[2];
			var tenCodes = codes[3];
			var unitCodes = codes[4];

		}
		for (var i = 0; i < myriad.length; i++) {
			plw_setBallState(GetBallObjectZhiF(0, myriad[i]), true);
		}
		for (var i = 0; i < thousand.length; i++) {
			plw_setBallState(GetBallObjectZhiF(1, thousand[i]), true);
		}
		for (var i = 0; i < hunderedCodes.length; i++) {
			plw_setBallState(GetBallObjectZhiF(2, hunderedCodes[i]), true);
		}
		for (var i = 0; i < tenCodes.length; i++) {
			plw_setBallState(GetBallObjectZhiF(3, tenCodes[i]), true);
		}
		for (var i = 0; i < unitCodes.length; i++) {
			plw_setBallState(GetBallObjectZhiF(4, unitCodes[i]), true);
		}
		CheckFullZhiF();

	} else if (lotno == 'T01001') { //大乐透回显
		clear();
		if ($("#sub_nav_1").is(":visible")) {
			var codes = lotteryNumber.split("-");
			var danCodes = codes[0].split(",");
			var tuoCodes = codes[1].split(",");
			for (var i = 0; i < danCodes.length; i++) {
				SetBallState("r", GetBallNum(danCodes[i]), true);
			}
			for (var i = 0; i < tuoCodes.length; i++) {
				SetBallState("b", GetBallNum(tuoCodes[i]), true);
			}
			CheckFull();

		} else if ($("#sub_nav_2").is(":visible")) {
			//"5,17,29$9,13,15,27,30-3$6,10;"
			var codes = lotteryNumber.split("-");
			var danCodes;
			var tuoCodes;
			var qian_dan;
			var qian_tuo;
			var hou_dan;
			var hou_tuo;
			if(codes[1].indexOf>-1){
			 danCodes = codes[0].split("$");
			 tuoCodes = codes[1].split("$");
			 qian_dan = danCodes[0].split(",");
			 qian_tuo = danCodes[1].split(",");
			  hou_dan = tuoCodes[0].split(",");
			  hou_tuo = tuoCodes[1].split(",");
			}else{
				 danCodes = codes[0].split("$");
				 tuoCodes = codes[1].split("$");
				 qian_dan = danCodes[0].split(",");
				 qian_tuo = danCodes[1].split(",");
				 hou_dan = "";
				 hou_tuo = tuoCodes[0].split(",");
			}
			for (var i = 0; i < qian_dan.length; i++) {
				danTuo_setBallState("r", danTuo_getBallNum(qian_dan[i]), true, "danMa");
			}
			for (var i = 0; i < qian_tuo.length; i++) {
				danTuo_setBallState("r", danTuo_getBallNum(qian_tuo[i]), true, "tuoMa");
			}
			if (! (hou_dan == null || hou_dan == "" || hou_dan == " ")) {
				for (var i = 0; i < hou_dan.length; i++) {
					danTuo_setBallState("b", danTuo_getBallNum(hou_dan[i]), true, "danMa");
				}
			}

			for (var i = 0; i < hou_tuo.length; i++) {
				danTuo_setBallState("b", danTuo_getBallNum(hou_tuo[i]), true, "tuoMa");
			}
			danTuo_checkFull();

		} else if ($("#sub_nav_3").is(":visible")) {
			var codes = lotteryNumber.split(",");
			for (var i = 0; i < codes.length; i++) {
				Animal_SetBallState("r", Animal_GetBallNum(codes[i]), true);
			}
			Animal_CheckFull();
		}
	} else if (lotno == 'T01007') { //时时彩回显
		var wanfa = lotteryNumber.substring(0, 2);
		if ($("#sub_nav_1").is(":visible")) {
			if (wanfa == "DD") {
				//  大小单双
				// （十位）大小单双  DD2,1（大 小） DD5,4（单 双）   2 1 5 4
				// （十位）大小单双  tddxds_2_0_                     0 1 2 3

				// （个位）大小单双  DD2,1（大 小） DD5,4（单 双）   2 1 5 4
				// （个位）大小单双  tddxds_2_0_                     0 1 2 3
				ClearAllDXDS(0);
				ClearAllDXDS(1);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					var code = codes[i];
					if (codes[i] == "2") {
						code = "0";
					}
					if (codes[i] == "5") {
						code = "2";
					}
					if (codes[i] == "4") {
						code = "3";
					}
					SetBallStateZhiFDXDS(GetBallObjectZhiFDXDS(i, code), true, i);
				}
				CheckFullZhiFDXDS();

			}

		} else if ($("#sub_nav_2").is(":visible")) {
			if (wanfa == "1D") {
				// 一星
				//1D1,3,5
				ClearAllYX(0);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					var code = codes[i];
					SetBallStateZhiFYX(GetBallObjectZhiFYX(0, code), true);
				}
				CheckFullZhiFYX();

			}

		} else if ($("#sub_nav_3").is(":visible") || $("#sub_nav_4").is(":visible") || $("#sub_nav_5").is(":visible")) {
			if (wanfa == "2D") {
				//二星 直选复式
				//2D3-4,5
				ClearAll('rxzf', 0);
				ClearAll('rxzf', 1);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";

				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					codeshiwei = codes[0].split(",");
					codegewei = codes[1].split(",");
				} else {
					codes = lotteryNumber.split(",");
					codeshiwei = codes[0].split(",");
					codegewei = codes[1].split(",");
				}

				for (var i = 0; i < codeshiwei.length; i++) {
					var code = codeshiwei[i];
					SetBallState_rxzf(GetBallObject_rxzf(0, code), true);
				}
				for (var i = 0; i < codegewei.length; i++) {
					var code = codegewei[i];
					SetBallState_rxzf(GetBallObject_rxzf(1, code), true);
				}
				CheckFull_rxzf();

			} else if (wanfa == "F2") {
				//二星 组选复式
				//F21,3,4,5
				ClearAll('rxzxf', 0);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = lotteryNumber.split(",");
				for (var i = 0; i < codes.length; i++) {
					var code = codes[i];
					SetBallState_rxzxf(GetBallObject_rxzxf(0, code), true);
				}
				CheckFull_rxzxf();

			} else if (wanfa == "S2") {
				//二星 组选和值
				//S21;S212;S213
				ClearSelect_rxzxh();
				//lotteryNumber = lotteryNumber.substring(2,lotteryNumber.length);

				var codes = lotteryNumber.split(";");
				for (var i = 0; i < codes.length; i++) {
					var code = codes[i];
					code = code.substring(2, code.length);
					SetBallState_rxzxh(GetBallObject_rxzxh(code), true);
				}
				CheckFull_rxzxh();

			}

		} else if ($("#sub_nav_6").is(":visible")) {
			if (wanfa == "3D") {
				// 三星 直选
				//3D1,2-3,4-4
				ClearAllSX(2);
				ClearAllSX(0);
				ClearAllSX(1);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codebaiwei = "";
				var codeshiwei = "";
				var codegewei = "";

				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					codebaiwei = codes[0].split(",");
					codeshiwei = codes[1].split(",");
					codegewei = codes[2].split(",");
				} else {
					codes = lotteryNumber.split(",");
					codebaiwei = codes[0].split(",");
					codeshiwei = codes[1].split(",");
					codegewei = codes[2].split(",");
				}
				for (var i = 0; i < codebaiwei.length; i++) {
					var code = codebaiwei[i];
					SetBallStateZhiFSX(GetBallObjectZhiFSX(0, code), true);
				}
				for (var i = 0; i < codeshiwei.length; i++) {
					var code = codeshiwei[i];
					SetBallStateZhiFSX(GetBallObjectZhiFSX(1, code), true);
				}
				for (var i = 0; i < codegewei.length; i++) {
					var code = codegewei[i];
					SetBallStateZhiFSX(GetBallObjectZhiFSX(2, code), true);
				}
				CheckFullZhiFSX();

			}

		} else if ($("#sub_nav_7").is(":visible") || $("#sub_nav_8").is(":visible")) {
			if (wanfa == "5D") {
				// 五星 直选
				//5D2-3-2-2,3-3,4
				ClearAll('wt', 0);
				ClearAll('wt', 1);
				ClearAll('wt', 2);
				ClearAll('wt', 3);
				ClearAll('wt', 4);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codewanwei = "";
				var codeqianwei = "";
				var codebaiwei = "";
				var codeshiwei = "";
				var codegewei = "";

				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					codewanwei = codes[0].split(",");
					codeqianwei = codes[1].split(",");
					codebaiwei = codes[2].split(",");
					codeshiwei = codes[3].split(",");
					codegewei = codes[4].split(",");
				} else {
					codes = lotteryNumber.split(",");
					codewanwei = codes[0].split(",");
					codeqianwei = codes[1].split(",");
					codebaiwei = codes[2].split(",");
					codeshiwei = codes[3].split(",");
					codegewei = codes[4].split(",");
				}
				for (var i = 0; i < codewanwei.length; i++) {
					var code = codewanwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(0, code), true);
				}
				for (var i = 0; i < codeqianwei.length; i++) {
					var code = codeqianwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(1, code), true);
				}
				for (var i = 0; i < codebaiwei.length; i++) {
					var code = codebaiwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(2, code), true);
				}
				for (var i = 0; i < codeshiwei.length; i++) {
					var code = codeshiwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(3, code), true);
				}
				for (var i = 0; i < codegewei.length; i++) {
					var code = codegewei[i];
					ssc_setBallState(GetBallObjectZhiFWX(4, code), true);
				}
				CheckFullZhiFWX();

			} else if (wanfa == "5T") {
				// 五星 通选
				//5T3-3,4-4-5-4
				ClearAll('wttx', 0);
				ClearAll('wttx', 1);
				ClearAll('wttx', 2);
				ClearAll('wttx', 3);
				ClearAll('wttx', 4);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codewanwei = "";
				var codeqianwei = "";
				var codebaiwei = "";
				var codeshiwei = "";
				var codegewei = "";

				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					codewanwei = codes[0].split(",");
					codeqianwei = codes[1].split(",");
					codebaiwei = codes[2].split(",");
					codeshiwei = codes[3].split(",");
					codegewei = codes[4].split(",");
				} else {
					codes = lotteryNumber.split(",");
					codewanwei = codes[0].split(",");
					codeqianwei = codes[1].split(",");
					codebaiwei = codes[2].split(",");
					codeshiwei = codes[3].split(",");
					codegewei = codes[4].split(",");
				}
				for (var i = 0; i < codewanwei.length; i++) {
					var code = codewanwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(0, code), true);
				}
				for (var i = 0; i < codeqianwei.length; i++) {
					var code = codeqianwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(1, code), true);
				}
				for (var i = 0; i < codebaiwei.length; i++) {
					var code = codebaiwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(2, code), true);
				}
				for (var i = 0; i < codeshiwei.length; i++) {
					var code = codeshiwei[i];
					ssc_setBallState(GetBallObjectZhiFWX(3, code), true);
				}
				for (var i = 0; i < codegewei.length; i++) {
					var code = codegewei[i];
					ssc_setBallState(GetBallObjectZhiFWX(4, code), true);
				}
				CheckFullZhiFWX();

			}

		}

	} else if (lotno == 'T01010') { //江西11选5  前一直选号码回显
		var wanfa = lotteryNumber.substring(0, 2);
		if ($("#sub_nav_1").is(":visible")) {
			ClearAll(1, 1);
			lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
			var codes = lotteryNumber.split(",");
			for (var i = 0; i < codes.length; i++) {
				SetBallStateX1_ZhiF(GetBallObjectZhiF(1, codes[i]), true);
			}
			CheckFullZhiF();
		}
		if ($("#sub_nav_2").is(":visible")) {
			if (wanfa == "Q2") {
				//前二直选复式 或者机选  Q23,5-5,6,7;Q25-7;
				ClearAll('Q2', 2);
				ClearAll('Q2', 3);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateQ2(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateQ2(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateQ2(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateQ2(codegewei, true, 3);
					}
					CheckFullQ2zhixuan();
				}
			} else if (wanfa == "Z2") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//前二组选胆拖  Z23$4,5;
					ClearAll('Z2', 2);
					ClearAll('Z2', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateZ2_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateZ2_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateZ2_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateZ2_dantuo(codegewei, true, 3);
					}
					CheckFullZ2dantuo();

				} else {
					//前二组选复式 Z22,4,5; Z22,4;
					ClearAll('Z2', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateZ2_ZhiF(GetBallObjectZ2ZhiF(1, codes[i]), true);
						}
						CheckFullZ2ZhiF();
					}
				}

			} else if (wanfa == "R2") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任二组选胆拖  R23$4,5;
					ClearAll('R2', 2);
					ClearAll('R2', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR2_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR2_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR2_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR2_dantuo(codegewei, true, 3);
					}
					CheckFullR2dantuo();

				} else {
					//任二组选复式 R22,4,5; R22,4;
					ClearAll('R2', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR2_ZhiF(GetBallObjectR2ZhiF(1, codes[i]), true);
						}
						CheckFullR2ZhiF();
					}
				}

			}

		}
		if ($("#sub_nav_3").is(":visible")) {
			if (wanfa == "Q3") {
				//前二直选复式 或者机选  Q34-5-4,6;
				ClearAll('Q3', 2);
				ClearAll('Q3', 3);
				ClearAll('Q3', 4);
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				var mowei = "";
				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					var mowei2 = codes[2];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateQ3(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateQ3(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateQ3(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateQ3(codegewei, true, 3);
					}
					if (mowei2.indexOf(",") > -1) {
						mowei = mowei2.split(",");
						for (var i = 0; i < mowei.length; i++) {
							SetBallStateQ3(mowei[i], true, 4);
						}

					} else {
						mowei = mowei2;
						SetBallStateQ3(mowei, true, 4);
					}
					CheckFullQ3zhixuan();
				}
			} else if (wanfa == "Z3") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				var mowei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//前三组选胆拖  Z33$4,5;
					ClearAll('Z3', 2);
					ClearAll('Z3', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];

					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateZ3_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateZ3_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateZ3_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateZ3_dantuo(codegewei, true, 3);
					}

					CheckFullZ3dantuo();

				} else {
					//前三组选复式 Z32,4,5; Z32,4;
					ClearAll('Z3', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateZ3_ZhiF(GetBallObjectZ3ZhiF(1, codes[i]), true);
						}
						CheckFullZ3ZhiF();
					}
				}

			} else if (wanfa == "R3") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任三组选胆拖  R23$4,5;
					ClearAll('R3', 2);
					ClearAll('R3', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR3_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR3_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR3_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR3_dantuo(codegewei, true, 3);
					}
					CheckFullR3dantuo();

				} else {
					//任三组选复式 R32,4,5; R32,4;
					ClearAll('R3', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR3_ZhiF(GetBallObjectR3ZhiF(1, codes[i]), true);
						}
						CheckFullR3ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_4").is(":visible")) {
			if (wanfa == "R4") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任四组选胆拖  R23$4,5;
					ClearAll(4, 2);
					ClearAll(4, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR4_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR4_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR4_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR4_dantuo(codegewei, true, 3);
					}
					CheckFullR4dantuo();

				} else {
					//任四组选复式 R42,4,5，6; R42,4,5,7;
					ClearAll(4, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR4_ZhiF(GetBallObjectR4ZhiF(1, codes[i]), true);
						}
						CheckFullR4ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_5").is(":visible")) {
			if (wanfa == "R5") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任五组选胆拖  R53$4,5;
					ClearAll(5, 2);
					ClearAll(5, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR5_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR5_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR5_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR5_dantuo(codegewei, true, 3);
					}
					CheckFullR5dantuo();

				} else {
					//任五组选复式 R52,4,5，6; R52,4,5,7;
					ClearAll(5, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR5_ZhiF(GetBallObjectR5ZhiF(1, codes[i]), true);
						}
						CheckFullR5ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_6").is(":visible")) {
			if (wanfa == "R6") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任六组选胆拖  R63$4,5;
					ClearAll(6, 2);
					ClearAll(6, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR6_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR6_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR6_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR6_dantuo(codegewei, true, 3);
					}
					CheckFullR6dantuo();

				} else {
					//任六组选复式 R62,4,5，6; R62,4,5,7;
					ClearAll(6, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR6_ZhiF(GetBallObjectR6ZhiF(1, codes[i]), true);
						}
						CheckFullR6ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_7").is(":visible")) {
			if (wanfa == "R7") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任七组选胆拖  R73$4,5;
					ClearAll(7, 2);
					ClearAll(7, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR7_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR7_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR7_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR7_dantuo(codegewei, true, 3);
					}
					CheckFullR7dantuo();

				} else {
					//任七组选复式 R72,4,5，6; R72,4,5,7;
					ClearAll(7, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR7_ZhiF(GetBallObjectR7ZhiF(1, codes[i]), true);
						}
						CheckFullR7ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_8").is(":visible")) {
			if (wanfa == "R8") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(2, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任八组选胆拖  R83$4,5;
					ClearAll(8, 2);
					ClearAll(8, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR8_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR8_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR8_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR8_dantuo(codegewei, true, 3);
					}
					CheckFullR8dantuo();

				} else {
					//任八组选复式 R82,4,5，6; R82,4,5,7;
					ClearAll(8, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR8_ZhiF(GetBallObjectR8ZhiF(1, codes[i]), true);
						}
						CheckFullR8ZhiF();
					}
				}

			}
		}
	} else if (lotno == 'T01012') { //十一运夺金  前一直选号码回显
		var wanfa = lotteryNumber.substring(0, 3);
		if ($("#sub_nav_1").is(":visible")) {
			ClearAll(1, 1);
			lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
			var codes = lotteryNumber.split(",");
			for (var i = 0; i < codes.length; i++) {
				SetBallStateX1_ZhiF(GetBallObjectZhiF(1, codes[i]), true);
			}
			CheckFullZhiF();
		}
		if ($("#sub_nav_2").is(":visible")) {
			if (wanfa == "141" || wanfa == "142") {
				//前二直选复式 或者机选  144@3,5-5,6,7;141!5-7;
				ClearAll('Q2', 2);
				ClearAll('Q2', 3);
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateQ2(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateQ2(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateQ2(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateQ2(codegewei, true, 3);
					}
					CheckFullQ2zhixuan();
				}
			} else if (wanfa == "108" || wanfa == "131" || wanfa == "133") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//前二组选胆拖  133@3$4,5;
					ClearAll('Z2', 2);
					ClearAll('Z2', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateZ2_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateZ2_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateZ2_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateZ2_dantuo(codegewei, true, 3);
					}
					CheckFullZ2dantuo();

				} else {
					//前二组选复式 108@2,4,5; Z22,4;
					ClearAll('Z2', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateZ2_ZhiF(GetBallObjectZ2ZhiF(1, codes[i]), true);
						}
						CheckFullZ2ZhiF();
					}
				}

			} else if (wanfa == "102" || wanfa == "111" || wanfa == "121") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任二组选胆拖  121@3$4,5;
					ClearAll('R2', 2);
					ClearAll('R2', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR2_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR2_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR2_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR2_dantuo(codegewei, true, 3);
					}
					CheckFullR2dantuo();

				} else {
					//任二组选复式 102@2,4,5; 102!2,4;
					ClearAll('R2', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR2_ZhiF(GetBallObjectR2ZhiF(1, codes[i]), true);
						}
						CheckFullR2ZhiF();
					}
				}

			}

		}
		if ($("#sub_nav_3").is(":visible")) {
			if (wanfa == "162" || wanfa == "161") {
				//前 三直选复式 或者机选  161@4-5-4,6;
				ClearAll('Q3', 2);
				ClearAll('Q3', 3);
				ClearAll('Q3', 4);
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				var mowei = "";
				if (lotteryNumber.indexOf("-") > -1) {
					codes = lotteryNumber.split("-");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					var mowei2 = codes[2];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateQ3(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateQ3(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateQ3(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateQ3(codegewei, true, 3);
					}
					if (mowei2.indexOf(",") > -1) {
						mowei = mowei2.split(",");
						for (var i = 0; i < mowei.length; i++) {
							SetBallStateQ3(mowei[i], true, 4);
						}

					} else {
						mowei = mowei2;
						SetBallStateQ3(mowei, true, 4);
					}
					CheckFullQ3zhixuan();
				}
			} else if (wanfa == "151" || wanfa == "109" || wanfa == "153") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				var mowei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//前三组选胆拖  153@3$4,5;
					ClearAll('Z3', 2);
					ClearAll('Z3', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];

					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateZ3_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateZ3_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateZ3_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateZ3_dantuo(codegewei, true, 3);
					}

					CheckFullZ3dantuo();

				} else {
					//前三组选复式 109@2,4,5; 109!2,4;
					ClearAll('Z3', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateZ3_ZhiF(GetBallObjectZ3ZhiF(1, codes[i]), true);
						}
						CheckFullZ3ZhiF();
					}
				}

			} else if (wanfa == "112" || wanfa == "103" || wanfa == "122") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任三组选胆拖  122@3$4,5;
					ClearAll('R3', 2);
					ClearAll('R3', 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR3_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR3_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR3_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR3_dantuo(codegewei, true, 3);
					}
					CheckFullR3dantuo();

				} else {
					//任三组选复式 103@2,4,5; 103!2,4;
					ClearAll('R3', 1);
					var codes = "";
					var codeshiwei = "";
					var codegewei = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR3_ZhiF(GetBallObjectR3ZhiF(1, codes[i]), true);
						}
						CheckFullR3ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_4").is(":visible")) {
			if (wanfa == "113" || wanfa == "104" || wanfa == "123") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任四组选胆拖  123@3$4,5;
					ClearAll(4, 2);
					ClearAll(4, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR4_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR4_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR4_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR4_dantuo(codegewei, true, 3);
					}
					CheckFullR4dantuo();

				} else {
					//任四组选复式 104@2,4,5，6; 104!2,4,5,7;
					ClearAll(4, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR4_ZhiF(GetBallObjectR4ZhiF(1, codes[i]), true);
						}
						CheckFullR4ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_5").is(":visible")) {
			if (wanfa == "114" || wanfa == "105" || wanfa == "124") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任五组选胆拖  124@3$4,5;
					ClearAll(5, 2);
					ClearAll(5, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR5_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR5_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR5_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR5_dantuo(codegewei, true, 3);
					}
					CheckFullR5dantuo();

				} else {
					//任五组选复式105@2,4,5，6; 105!2,4,5,7;
					ClearAll(5, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR5_ZhiF(GetBallObjectR5ZhiF(1, codes[i]), true);
						}
						CheckFullR5ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_6").is(":visible")) {
			if (wanfa == "115" || wanfa == "106" || wanfa == "125") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任六组选胆拖  125@3$4,5;
					ClearAll(6, 2);
					ClearAll(6, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR6_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR6_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR6_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR6_dantuo(codegewei, true, 3);
					}
					CheckFullR6dantuo();

				} else {
					//任六组选复式 106@2,4,5，6; 106!2,4,5,7;
					ClearAll(6, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR6_ZhiF(GetBallObjectR6ZhiF(1, codes[i]), true);
						}
						CheckFullR6ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_7").is(":visible")) {
			if (wanfa == "116" || wanfa == "107" || wanfa == "126") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				if (lotteryNumber.indexOf("$") > -1) {
					//任七组选胆拖  126@3$4,5;
					ClearAll(7, 2);
					ClearAll(7, 3);
					codes = lotteryNumber.split("$");
					var codeshiwei1 = codes[0];
					var codegewei2 = codes[1];
					if (codeshiwei1.indexOf(",") > -1) {
						codeshiwei = codeshiwei1.split(",");
						for (var i = 0; i < codeshiwei.length; i++) {
							SetBallStateR7_dantuo(codeshiwei[i], true, 2);
						}

					} else {
						codeshiwei = codeshiwei1;
						SetBallStateR7_dantuo(codeshiwei, true, 2);
					}
					if (codegewei2.indexOf(",") > -1) {
						codegewei = codegewei2.split(",");
						for (var i = 0; i < codegewei.length; i++) {
							SetBallStateR7_dantuo(codegewei[i], true, 3);
						}

					} else {
						codegewei = codegewei2;
						SetBallStateR7_dantuo(codegewei, true, 3);
					}
					CheckFullR7dantuo();

				} else {
					//任七组选复式 107@2,4,5，6; 107!2,4,5,7;
					ClearAll(7, 1);
					var codes = "";
					if (lotteryNumber.indexOf(",") > -1) {
						codes = lotteryNumber.split(",");
						for (var i = 0; i < codes.length; i++) {
							SetBallStateR7_ZhiF(GetBallObjectR7ZhiF(1, codes[i]), true);
						}
						CheckFullR7ZhiF();
					}
				}

			}
		}
		if ($("#sub_nav_8").is(":visible")) {
			if (wanfa == "117") {
				var codes = "";
				var codeshiwei = "";
				var codegewei = "";
				lotteryNumber = lotteryNumber.substring(4, lotteryNumber.length);
				//任八组选复式 117@2,4,5，6; R82,4,5,7;
				ClearAll(8, 1);
				var codes = "";
				if (lotteryNumber.indexOf(",") > -1) {
					codes = lotteryNumber.split(",");
					for (var i = 0; i < codes.length; i++) {
						SetBallStateR8_ZhiF(GetBallObjectR8ZhiF(1, codes[i]), true);
					}
					CheckFullR8ZhiF();
				}

			}
		}
	}
}
//初始化注数和投注金额
function init_touzhu() {
	totalLotteryInvest += parseInt($("#lab_Num").html());
	totalMoney += parseInt($("#investField").html());
}

//=========================================定胆机选、杀号机选和范围机选功能所需公共方法=======================================//
///
//
//获取用户选中的球 红色球的集合
//@param ballColor 页面传入的球的样式，例如:红球"r",蓝球"b"
//@param ballCount 各个组合一共多少球，例如双色球红球区33个，蓝球区16个
//@return 
//
function getUserSelectBall_sh(ballColor, ballCount) {
	var selectBallNum = new Array();
	for (var i = 1; i <= ballCount; i++) {
		var ballNum = GetBallNum(i); //将小于10的球补“0”
		if (GetBallState_sh(ballColor, ballNum)) {
			selectBallNum.push(ballNum);
		}
	}
	return selectBallNum;
}

//获取用户选中的球 红色球的集合
//@param ballColor 页面传入的球的样式，例如:红球"r",蓝球"b"
//@param ballCount 各个组合一共多少球，例如双色球红球区33个，蓝球区16个
//@param wanfa   如果wanfa等于“sh”则是定胆杀号机选功能，如果没有则是普通玩法的定胆机选
//@return 
//
function getUserSelectBall(ballColor, ballCount, wanfa) {
	var selectBallNum = new Array();
	for (var i = 1; i <= ballCount; i++) {
		var ballNum = GetBallNum(i); //将小于10的球补“0”
		if (wanfa == "sh") {
			if (GetBallState_sh(ballColor, ballNum)) {
				selectBallNum.push(ballNum);
			}
		} else {
			if (GetBallState(ballColor, ballNum)) {
				selectBallNum.push(ballNum);
			}
		}
	}

	return selectBallNum;
}

//
//
//获取用户选中的杀号球黑色球的数组集合 
//@param id 球的id 例：id=td_r_
//@param ballCount 各个区域中球的个数 
//		例如双色球红球区33个，蓝球区16个
//@param blackStyle 球的样式 "ball_num_sh"
//@param wanfa 球的玩法   sh代表是杀号
//@return
//
function getUserBlackNum(id, ballCount, blackStyle, wanfa) {
	var blackNum = new Array();
	if (wanfa == "3D") {
		for (var i = 0; i <= ballCount; i++) {
			if (wanfa == 'sh') {
				var ball = $("#" + id + i + "_sh");
			} else {
				var ball = $("#" + id + i);
			};
			if (ball[0].className == blackStyle) {
				blackNum.push(i);
			}
		}

	} else {
		for (var i = 1; i <= ballCount; i++) {
			var ballNum = GetBallNum(i); //将小于10的球补“0”
			if (wanfa == 'sh') {
				var ball = $("#" + id + ballNum + "_sh");
			} else {
				var ball = $("#" + id + ballNum);
			};
			if (ball[0].className == blackStyle) {
				blackNum.push(ballNum);
			}
		}
	}
	return blackNum;
}

/////
//在指定的数中机选指定的个数
//@param redBallNumCodes 用户选中的球
//@param ballCount 单式所需球数例如双色球红球6个
//@return 从选中的球中获取所需个数注码

function getSelectedBalls(redBallNumCodes, ballCount) {
	var finalBall = new Array(ballCount);
	var end = redBallNumCodes.length - 1;
	var strTemp = "40#";
	for (var i = 0; i < ballCount; i++) {
		var vNum = Math.random();
		var num = Math.round(vNum * end);
		if (strTemp.indexOf("#") > -1) {
			var strtm = strTemp.split("#");
			for (var k = 0; k < strtm.length; k++) {
				if (parseInt(num, 10) == parseInt(strtm[k], 10)) { //判断是否有重复
					var vNum1 = Math.random();
					num = Math.round(vNum1 * end);
					k = 0;
					continue;
				}
			}
			finalBall[i] = redBallNumCodes[num];
			redBallNumCodes[num] = redBallNumCodes[end];
		} else {
			finalBall[i] = redBallNumCodes[num];
			redBallNumCodes[num] = redBallNumCodes[end];
		}

		strTemp += num + "#";
	}
	finalBall.sort(); //排序
	return finalBall;
}

///
//获取没有选中的球
//@param id 注码id 例如双色球id为'td_'
//@param ballCount 球的个数
//@param ballClor 球id中例如双色球 r代表红球，b代表蓝球
//@param styleName 样式名称
//@param wanfa 玩法：sh代表是杀号
//@return 没有选中的球的数组集合
//
function getDefaultBall(id, ballCount, ballColor, styleName, wanfa) {
	var defaultBall = new Array();
	if (wanfa == "3D") {
		for (var i = 0; i < ballCount; i++) {
			var ball;
			if (wanfa == 'sh') {
				ball = $("#" + id + ballColor + "_" + i + "_sh");
			} else {
				ball = $("#" + id + ballColor + "_" + i);
			}
			if (ball[0].className == styleName) {
				defaultBall.push(i);
			}
		}

	} else {
		for (var i = 1; i <= ballCount; i++) {
			var ballNum = GetBallNum(i); //将小于10的球补“0”
			var ball;
			if (wanfa == 'sh') {
				ball = $("#" + id + ballColor + "_" + ballNum + "_sh");
			} else {
				ball = $("#" + id + ballColor + "_" + ballNum);
			}
			if (ball[0].className == styleName) {
				defaultBall.push(ballNum);
			}
		}
	}
	defaultBall.sort();
	return defaultBall;
}

///
//
//获取随机注码
//@param id 注码id 例如双色球id为'td_'
//@param redBallNumCodes 用户所选中的注码 
//@param selectBallCount 组成注数所用的球 例如双色球红球选择6个
//@param ballColor id中包含的样式 例如 双色球红球"r"
//@param lotteryCount 注码的总个数 例如 双色球红球总个数为33个
//@param defaultStyle 默认样式为 ball_num
//@param blackStyle 黑色球的样式为  ball_num_sh
//@param killBallCount 杀号球的个数上限 双色球上限为27个
//

function getRandBall(id, redBallNumCodes, selectBallCount, ballColor, lotteryCount, defaultStyle, blackStyle, killBallCount, wanfa) {
	var finalRed = new Array();
	//情况一：用户选择6个红球
	if (redBallNumCodes.length == selectBallCount) {
		finalRed = redBallNumCodes;

		//情况二：用户选择大于6个红球在六个红球中随机选取6个
	} else if (redBallNumCodes.length > selectBallCount) {
		finalRed = getSelectedBalls(redBallNumCodes, selectBallCount);

		//情况三：用户选择小于6个红球
	} else if (redBallNumCodes.length < selectBallCount) {
		var defaultBallReds = getDefaultBall(id, lotteryCount, ballColor, defaultStyle, wanfa); //获取未选中的球

		if (blackStyle != "") {
			//获取杀号球
			var killBall = getUserBlackNum(id + ballColor + '_', lotteryCount, blackStyle, wanfa);
			if (killBall.length > killBallCount) { //杀球大于27个
				for (var s = 0; s < killBall.length; s++) {
					defaultBallReds.push(killBall[s]); //重组默认值
				}
			}
		}
		//在未选中的球中机选所剩球
		if (redBallNumCodes.length > 0) {

			finalRed.push(redBallNumCodes);
		}
		finalRed.push(getSelectedBalls(defaultBallReds, (selectBallCount - redBallNumCodes.length)));

		var redStr = finalRed;
		redStr = redStr + "";
		if (redStr.indexOf(",") > -1) {
			var finalRed2 = new Array();
			var redStrcodes = redStr.split(",");
			for (var i = 0; i < redStrcodes.length; i++) {
				finalRed2.push(redStrcodes[i]);
			}
			finalRed = finalRed2.sort();
		}
	}
	finalRed.sort();
	return finalRed;
}
//
//获取随机注码
//@param id 注码id 例如双色球id为'td_'
//@param redBallNumCodes 用户所选中的注码 
//@param selectBallCount 组成注数所用的球 例如双色球红球选择6个
//@param ballColor id中包含的样式 例如 双色球红球"r"
//@param lotteryCount 注码的总个数 例如 双色球红球总个数为33个
//@param defaultStyle 默认样式为 ball_num
//@param blackStyle 黑色球的样式为  ball_num_sh
//@param killBallCount 杀号球的个数上限 双色球上限为27个
//
function getRandBall_nokill(id, redBallNumCodes, selectBallCount, ballColor, lotteryCount, defaultStyle, blackStyle, killBallCount, wanfa) {
	var finalRed = new Array();
	//情况一：用户选择6个红球
	if (redBallNumCodes.length == selectBallCount) {
		finalRed = redBallNumCodes;

		//情况二：用户选择大于6个红球在六个红球中随机选取6个
	} else if (redBallNumCodes.length > selectBallCount) {
		finalRed = getSelectedBalls(redBallNumCodes, selectBallCount);

		//情况三：用户选择小于6个红球
	} else if (redBallNumCodes.length < selectBallCount) {
		var defaultBallReds = getDefaultBall(id, lotteryCount, ballColor, defaultStyle, wanfa); //获取未选中的球

		//获取杀号球
		var killBall = getUserBlackNum(id + ballColor + '_', lotteryCount, blackStyle, wanfa);
		if (killBall.length > killBallCount) { //杀球大于27个
			for (var s = 0; s < killBall.length; s++) {
				defaultBallReds.push(killBall[s]); //重组默认值
			}
		}
		//在未选中的球中机选所剩球
		if (redBallNumCodes.length > 0) {
			finalRed.push(redBallNumCodes);
		}
		finalRed.push(getSelectedBalls(defaultBallReds, (selectBallCount - redBallNumCodes.length)));
		var redStr = finalRed;
		redStr = redStr + "";
		if (redStr.indexOf(",") > -1) {
			var finalRed2 = new Array();
			var redStrcodes = redStr.split(",");
			for (var i = 0; i < redStrcodes.length; i++) {
				finalRed2.push(redStrcodes[i]);
			}
			finalRed = finalRed2.sort();
		}
	}
	finalRed.sort();
	return finalRed;
}
///
//去除不足10的注码去0
//@param arr 传入的注码 
//@return
//
function getEndCodes(arr) {
	var arrCodes = (arr + "").split(",");
	var endCode = "";
	//拼接传到后台的注码格式
	for (var j = 0; j < arrCodes.length; j++) {
		if ((arrCodes[j] + "").substring(0, 1) == "0") {
			endCode += (arrCodes[j] + "").substring(1, 2) + ",";
		} else {
			endCode += arrCodes[j] + ",";
		}
	}
	endCode = endCode.substring(0, endCode.length - 1);
	return endCode;
}

////
//
//获取机选的号码
//@param lottery 总个数-用户选择的个数（例如：总个数双色球红球区单注为6，蓝球区单注为1）
//@param count 各区球的个数作为随机算出的球数，例如双色球红球区为33个，蓝球区为16个
//@param zero 默认传1
//@param selectBallNum 用户选择的球
//@param order 默认传false;
//@return
//
function getRollBall(lottery, count, zero, selectBallNum, order) {

	var redTable = GetBallNum(GetRandNumber(count) - zero);
	//红球机选号码与用户选择的号码进行比较
	for (var r = 0; r < selectBallNum; r++) {
		if (redTable == selectBallNum[r]) {
			redTable = Number(redTable) + 1;
			if (redTable < 10) {
				redTable = "0" + redTable;
			}
		}
	}

	for (var i = 1; count > 0 && i < lottery; i++) {
		var temp = GetBallNum(GetRandNumber(count) - zero);
		for (var r = 0; r < selectBallNum; r++) {
			if (temp == selectBallNum[r]) {
				temp = Number(temp) + 1;
				if (temp < 10) {
					temp = "0" + temp;
				}
			}
		}
		while (!order && (redTable + "").indexOf(temp) >= 0) temp = GetBallNum(GetRandNumber(count) - zero);
		for (var r = 0; r < selectBallNum; r++) {
			if (temp == selectBallNum[r]) {
				temp = Number(temp) + 1;
				if (temp < 10) {
					temp = "0" + temp;
				}
			}
		}
		redTable += '|' + temp;
	}

	return redTable;
}
//
///
//
//
//
//
function getCodesSort(arr) {
	//将传入的注码转换为string格式根据“,”拆分并将其放入数组中排序
	var arrCodes = (arr + "").split(",");
	var arrCode = new Array();
	for (var i = 0; i < arrCodes.length; i++) {
		if (arrCodes[i] == "") {
			continue;
		}
		arrCode.push(arrCodes[i]);
	}
	arrCode.sort();
	return arrCode;
}
//根据参数获取号码球
function GetBallNum(i) {
	var BallNum = "" + i;
	if (BallNum.length == 1) BallNum = "0" + BallNum;

	return BallNum;
}

function norepeat(aa) {
	//$(aa).removeClass("queding_btn1");
	$(aa).attr("class","BtnDisableNew");
	$(aa).val("");
	$(aa).attr("disabled", true);
}

function clearDIV() {
	if ($("#zhuihaoDIV") != null) {

		$("#zhuihaoDIV").html("");

		$("#zhuihaoJson").val('');
	}
}
function setdaigouOrzhuihao(a) {
	if ($("#daiGouHemai") != null && $("#daiGouHemai") != "undefinde") {
		$("#daiGouHemai").val(a);
	}
	if ($("#daiGouHemai") != null && $("#qishuList") != null && ($("#daiGouHemai").val() == "zhuihao" || $("#daiGouHemai").val() == "ziyouZhuihao")) {
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	}
}

//切换足彩投注/合买
function tabHemaiAndDaigou(a) {
	$("#daiGouHemai").val(a);
	if (a == "daigou") {
		$("#hiddenBeishu").show();
		$("#sub1").attr("class", "none");
		$("#sub").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由购买人自行全额购买彩票。")));
	} else if (a == "hemai") {
		$("#hiddenBeishu").show();
		$("#sub").attr("class", "none");
		$("#sub1").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由多人出资购买彩票。")));
	} else if (a == "zhuihao") {
		$("#hiddenBeishu").show();
		$("#sub1").attr("class", "none");
		$("#sub").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("连续多期购买同一注（组）号码。")));
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
	} else if (a == "zengcai") {
		$("#hiddenBeishu").hide();
		$("#sub1").attr("class", "none");
		$("#sub").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由购买人赠送好友彩票")));
	}
}
//============================合买使用的js===================================
//切换足彩投注/合买
function tabHemaiAndDaigou_jc(a) {
	$("#goumaifangshi").val("合买");
	$("#daiGouHemai").val(a);
}
function faqiHemai_jc() {
	if (!touzhuPublic()) { //合买投注追号通用判断
		return false;
	}
	//获取用户余额
	var touzhu_money = parseInt($("#touzhu_money").html());
    
	var allAmt = 0;// 总金额
	var buyAmt = 0;// 购买金额
	var safeAmt = 0;// 保底金额
	var commisionRatio = 0; // 佣金
	var visibility = ""; // 保密类型
	var minAmt = 0; // 最小购买金额
	var desc = ""; // 合买宣传语
	var jctype = $("#jcType").val(); //当前玩法
	var isMinAmt ;
	var isAllSafeAmt;
	if(jctype != null && jctype == "zjq"){
		allAmt = $("#investField_standrad_zjq").html();
		buyAmt = $("#buyAmt_zjq").val(); // 购买金额
		safeAmt = $("#safeAmt_zjq").val(); // 保底金额
		commisionRatio = $("#commisionRatio_zjq").val(); // 佣金
		visibility = $("input[name='visibility_zjq']:checked").val(); // 保密类型
		minAmt = $("#minAmt_zjq").val(); // 最小购买金额
		desc = $("#description_zjq").val(); // 合买宣传语
		isMinAmt = $("#isMinAmt_zjq").is(':checked');
		isAllSafeAmt = $("#isAllSafeAmt_zjq").is(':checked');
	}else if(jctype != null && jctype == "bf"){
		allAmt = $("#investField_standrad_bf").html();
		buyAmt = $("#buyAmt_bf").val(); // 购买金额
		safeAmt = $("#safeAmt_bf").val(); // 保底金额
		commisionRatio = $("#commisionRatio_bf").val(); // 佣金
		visibility = $("input[name='visibility_bf']:checked").val(); // 保密类型
		minAmt = $("#minAmt_bf").val(); // 最小购买金额
		desc = $("#description_bf").val(); // 合买宣传语
		isMinAmt = $("#isMinAmt_bf").is(':checked');
		isAllSafeAmt = $("#isAllSafeAmt_bf").is(':checked');
	}else if(jctype != null && jctype == "bqc"){
		allAmt = $("#investField_standrad_bqc").html();
		buyAmt = $("#buyAmt_bqc").val(); // 购买金额
		safeAmt = $("#safeAmt_bqc").val(); // 保底金额
		commisionRatio = $("#commisionRatio_bqc").val(); // 佣金
		visibility = $("input[name='visibility_bqc']:checked").val(); // 保密类型
		minAmt = $("#minAmt_bqc").val(); // 最小购买金额
		desc = $("#description_bqc").val(); // 合买宣传语
		isMinAmt = $("#isMinAmt_bqc").is(':checked');
		isAllSafeAmt = $("#isAllSafeAmt_bqc").is(':checked');
	}else if(jctype == "spf"){
		allAmt = $("#investField_standrad").html();
		buyAmt = $("#buyAmt").val(); // 购买金额
		safeAmt = $("#safeAmt").val(); // 保底金额
		commisionRatio = $("#commisionRatio").val(); // 佣金
		visibility = $("input[name='visibility']:checked").val(); // 保密类型
		minAmt = $("#minAmt").val(); // 最小购买金额
		desc = $("#description").val(); // 合买宣传语
		isMinAmt = $("#isMinAmt").is(':checked');
		isAllSafeAmt = $("#isAllSafeAmt").is(':checked');
	}
	
	
	
	// 如果用戶沒有选择是否设置最低跟单金额则设置为0
	if (!isMinAmt) {
		minAmt = 1;
	}

	//校验合买数据
	var testNum = /^[0-9]|[1-9]d*$/;
	if ((buyAmt == "" || buyAmt == "0") && (safeAmt == "" || safeAmt == "0")) {
		openAlert(decodeURI(EncodeUtf8("你好，认购金额与保底金额至少填写其中一个！")));
		if(jctype != null && jctype == "zjq"){
			$("#buyAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#buyAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#buyAmt_bqc").focus();
		}else{
			$("#buyAmt").focus();
		}
		return false;
	} else if (parseInt(allAmt)<6) {
		openAlert(decodeURI(EncodeUtf8("最低合买方案金额应不小于6元，最少选择3注彩票完成合买。")));
		if(jctype != null && jctype == "zjq"){
			$("#buyAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#buyAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#buyAmt_bqc").focus();
		}else{
			$("#buyAmt").focus();
		}
		return false; 
	} else if (!testNum.test(buyAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，认购金额只能填写数字！")));
		if(jctype != null && jctype == "zjq"){
			$("#buyAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#buyAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#buyAmt_bqc").focus();
		}else{
			$("#buyAmt").focus();
		}
		return false;
	} else if (!isAllSafeAmt && !testNum.test(safeAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，保底金额只能填写数字！")));
		if(jctype != null && jctype == "zjq"){
			$("#safeAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#safeAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#safeAmt_bqc").focus();
		}else{
			$("#safeAmt").focus();
		}
		return false;
	} else if (isMinAmt && !testNum.test(minAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，最低跟单金额必须为数字！")));
		if(jctype != null && jctype == "zjq"){
			$("#minAmt_zjq").val(2);
			$("#minAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#minAmt_bf").val(2);
			$("#minAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#minAmt_bqc").val(2);
			$("#minAmt_bqc").focus();
		}else{
			$("#minAmt").val(2);
			$("#minAmt").focus();
		}
		return false;
	} else if (isMinAmt && minAmt > (parseInt(allAmt) / 2)) {
		openAlert(decodeURI(EncodeUtf8("你好，最低认购金额不能超过方案金额的一半！")));
		if(jctype != null && jctype == "zjq"){
			$("#minAmt_zjq").val(parseInt($("#investField").html()) / 2);
			$("#minAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#minAmt_bf").val(parseInt($("#investField").html()) / 2);
			$("#minAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#minAmt_bf").val(parseInt($("#investField").html()) / 2);
			$("#minAmt_bf").focus();
		}else{
			$("#minAmt").val(parseInt($("#investField").html()) / 2);
			$("#minAmt").focus();
		}
		return false;
	} else if (isMinAmt && minAmt < 2) {
		openAlert(decodeURI(EncodeUtf8("你好，最低认购金额设置最低为2元！")));
		if(jctype != null && jctype == "zjq"){
			$("#minAmt_zjq").val(2);
			$("#minAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#minAmt_bf").val(2);
			$("#minAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#minAmt_bqc").val(2);
			$("#minAmt_bqc").focus();
		}else{
			$("#minAmt").val(2);
			$("#minAmt").focus();
		}
		return false;
	} else if (touzhu_money < (parseInt(buyAmt) + parseInt(safeAmt))) {
		openAjaxPopup("openTishi", 1000, "/rchlw/function/rules/tishi.html?key=2&num=3");
		if(jctype != null && jctype == "zjq"){
			$("#buyAmt_zjq").focus();
		}else if(jctype != null && jctype == "bf"){
			$("#buyAmt_bf").focus();
		}else if(jctype != null && jctype == "bqc"){
			$("#buyAmt_bqc").focus();
		}else{
			$("#buyAmt").focus();
		}
		return false;
	}
	var jsonObj = '{"buyAmt":"' + buyAmt + '","safeAmt":"' + safeAmt + '","commisionRatio":"' + commisionRatio + '","desc":"' + desc + '","visibility":"' + visibility + '","minAmt":"' + minAmt + '","isIe":"' + decodeURI(EncodeUtf8("中")) + '"}';
	$("#jsonStringCLR").val(jsonObj);
	htmlMsg(); //给 弹出层设置相关数据
	connPath();
	loginShow('touzhuOpen1', false);
}
//竞彩比例计算a*100/b
function bili_jc(idstr) {
	var re = /^[\d]+$/;
	var a = 0;
	var jctype = $("#jcType").val();
	if(jctype != null && jctype == "zjq"){
		a = $("#" + idstr + "_zjq").val();
	}else if(jctype == "bf"){
		a = $("#" + idstr + "_bf").val();
	}else if(jctype == "bqc"){
		a = $("#" + idstr + "_bqc").val();
	}else{
		a = $("#" + idstr).val();
	}
	if (!(a=="")&&!(re.test(a))) {
		openAlert(decodeURI(EncodeUtf8("请输入整数！")));
		
		if(jctype != null && jctype == "zjq" ){
			$("#" + idstr + "_zjq").val("");
			$("#" + idstr + "_zjq").focus();
			$("#safeAmt_bili_zjq").html(0);
		}else if(jctype == "bf"){
			$("#" + idstr + "_bf").val("");
			$("#" + idstr + "_bf").focus();
			$("#safeAmt_bili_bf").html(0);
		}else if(jctype == "bqc"){
			$("#" + idstr + "_bqc").val("");
			$("#" + idstr + "_bqc").focus();
			$("#safeAmt_bili_bqc").html(0);
		}else{
			$("#" + idstr).val("");
			$("#" + idstr).focus();
			$("#safeAmt_bili").html(0);
		}
		return false;
	}
	a = Number(a);
	var b = 0 ; //总金额
	var safeAmt = 0;
	if(jctype != null && jctype == "zjq" ){
		var b = Number($("#investField_standrad_zjq").html());
		safeAmt = Number($("#safeAmt_zjq").val());
		//如果认购金额大于投注总金额 设为投注金额
		if (a > b) {
			a = b;
			$("#" + idstr+"_zjq").val(a);
		}
		//如果认购金额加保底金额大于总金额，则将保底金额设为总金额减去认购金额
		if (a + safeAmt > b && (idstr == "buyAmt" || idstr == "amt")) {
			safeAmt = b - a;
			$("#safeAmt_zjq").val(safeAmt);
		} else if (idstr == "safeAmt") {
			if ($("#buyAmt_zjq") && (a + Number($("#buyAmt_zjq").val()) > b)) {
				$("#buyAmt_zjq").val(b - a);
			} else if ($("#amt") && (a + Number($("#amt").val()) > b)) {
				$("#amt").val(b - a);
			}
		}
		if (b == 0) {
			openAlert(decodeURI(EncodeUtf8("您好，合买方案总金额为0元，请您先选号或选择过关方式！")));
			$("#" + idstr+"_zjq").val("");
			return;
		}
		$("#" + idstr + "_bili_zjq").html(round(a * 100 / b, 2));
		if ($("#isAllSafeAmt_zjq").is(':checked')) {
			$("#safeAmt_zjq").val(b - a);
			$("#safeAmt_bili_zjq").html(round((100 - (a * 100 / b)), 2));
		} else if ($("#safeAmt_zjq").val() == 0) {
			$("#safeAmt_bili_zjq").html(0);
		}
	}else if(jctype != null && jctype == "bf" ){
		var b = Number($("#investField_standrad_bf").html());
		safeAmt = Number($("#safeAmt_bf").val());
		//如果认购金额大于投注总金额 设为投注金额
		if (a > b) {
			a = b;
			$("#" + idstr+"_bf").val(a);
		}
		//如果认购金额加保底金额大于总金额，则将保底金额设为总金额减去认购金额
		if (a + safeAmt > b && (idstr == "buyAmt" || idstr == "amt")) {
			safeAmt = b - a;
			$("#safeAmt_bf").val(safeAmt);
		} else if (idstr == "safeAmt") {
			if ($("#buyAmt_bf") && (a + Number($("#buyAmt_bf").val()) > b)) {
				$("#buyAmt_bf").val(b - a);
			} else if ($("#amt") && (a + Number($("#amt").val()) > b)) {
				$("#amt").val(b - a);
			}
		}
		if (b == 0) {
			openAlert(decodeURI(EncodeUtf8("您好，合买方案总金额为0元，请您先选号或选择过关方式！")));
			$("#" + idstr+"_bf").val("");
			return;
		}
		$("#" + idstr + "_bili_bf").html(round(a * 100 / b, 2));
		if ($("#isAllSafeAmt_bf").is(':checked')) {
			$("#safeAmt_bf").val(b - a);
			$("#safeAmt_bili_bf").html(round((100 - (a * 100 / b)), 2));
		} else if ($("#safeAmt_bf").val() == 0) {
			$("#safeAmt_bili_bf").html(0);
		}
	}else if(jctype != null && jctype == "bqc" ){
		var b = Number($("#investField_standrad_bqc").html());
		safeAmt = Number($("#safeAmt_bqc").val());
		//如果认购金额大于投注总金额 设为投注金额
		if (a > b) {
			a = b;
			$("#" + idstr+"_bqc").val(a);
		}
		//如果认购金额加保底金额大于总金额，则将保底金额设为总金额减去认购金额
		if (a + safeAmt > b && (idstr == "buyAmt" || idstr == "amt")) {
			safeAmt = b - a;
			$("#safeAmt_bqc").val(safeAmt);
		} else if (idstr == "safeAmt") {
			if ($("#buyAmt_bqc") && (a + Number($("#buyAmt_bqc").val()) > b)) {
				$("#buyAmt_bqc").val(b - a);
			} else if ($("#amt") && (a + Number($("#amt").val()) > b)) {
				$("#amt").val(b - a);
			}
		}
		if (b == 0) {
			openAlert(decodeURI(EncodeUtf8("您好，合买方案总金额为0元，请您先选号或选择过关方式！")));
			$("#" + idstr+"_bqc").val("");
			return;
		}
		$("#" + idstr + "_bili_bqc").html(round(a * 100 / b, 2));
		if ($("#isAllSafeAmt_bqc").is(':checked')) {
			$("#safeAmt_bqc").val(b - a);
			$("#safeAmt_bili_bqc").html(round((100 - (a * 100 / b)), 2));
		} else if ($("#safeAmt_bqc").val() == 0) {
			$("#safeAmt_bili_bqc").html(0);
		}
	}
	else if(jctype == "spf"){
		b = Number($("#investField_standrad").html());
		safeAmt = Number($("#safeAmt").val());
		//如果认购金额大于投注总金额 设为投注金额
		if (a > b) {
			a = b;
			$("#" + idstr).val(a);
		}
		//如果认购金额加保底金额大于总金额，则将保底金额设为总金额减去认购金额
		if (a + safeAmt > b && (idstr == "buyAmt" || idstr == "amt")) {
			safeAmt = b - a;
			$("#safeAmt").val(safeAmt);
		} else if (idstr == "safeAmt") {
			if ($("#buyAmt") && (a + Number($("#buyAmt").val()) > b)) {
				$("#buyAmt").val(b - a);
			} else if ($("#amt") && (a + Number($("#amt").val()) > b)) {
				$("#amt").val(b - a);
			}
		}
		if (b == 0) {
			openAlert(decodeURI(EncodeUtf8("您好，合买方案总金额为0元，请您先选号或选择过关方式！")));
			$("#" + idstr).val("");
			return;
		}
		$("#" + idstr + "_bili").html(round(a * 100 / b, 2));
		if ($("#isAllSafeAmt").is(':checked')) {
			$("#safeAmt").val(b - a);
			$("#safeAmt_bili").html(round((100 - (a * 100 / b)), 2));
		} else if ($("#safeAmt").val() == 0) {
			$("#safeAmt_bili").html(0);
		}
	}

}
//竞彩  判断一个复选框是否已勾选，如果勾选则使某组件失效
function ifAllSafeAmt_jc(a, b) {
	var jctype = $("#jcType").val();
	var investField_standrad = "investField_standrad";
	var buyAmt = "buyAmt";
	if(jctype != null && jctype == "zjq"){
		investField_standrad = "investField_standrad_zjq";
		buyAmt = "buyAmt_zjq";
	}else if(jctype == "bf"){
		investField_standrad = "investField_standrad_bf";
		buyAmt = "buyAmt_bf";
	}else if(jctype == "bqc"){
		investField_standrad = "investField_standrad_bqc";
		buyAmt = "buyAmt_bqc";
	}
	if ($("#" + a).is(':checked')) {
		$("#" + b).attr("disabled", "disabled");
		$("#" + b).val(Number($("#"+investField_standrad).html()) - Number($("#"+buyAmt).val()));
	} else {
		$("#" + b).removeAttr("disabled");
	}
}
function checkDesc() {

	var desc = ""; // 合买宣传语
	var jctype = $("#jcType").val();
	if(jctype != null && jctype == "zjq"){
		desc = $("#description_zjq").val(); // 合买宣传语
		if (desc.length > 500) {
			openAlert(decodeURI(EncodeUtf8("方案宣传不能超过500个字符")));
			$("#description_zjq").val($("#description_zjq").val().substring(0, 500));
			return false;
		}
	}else if(jctype != null && jctype == "bf"){
		desc = $("#description_bf").val(); // 合买宣传语
		if (desc.length > 500) {
			openAlert(decodeURI(EncodeUtf8("方案宣传不能超过500个字符")));
			$("#description_bf").val($("#description_bf").val().substring(0, 500));
			return false;
		}
	}else if(jctype != null && jctype == "bqc"){
		desc = $("#description_bqc").val(); // 合买宣传语
		if (desc.length > 500) {
			openAlert(decodeURI(EncodeUtf8("方案宣传不能超过500个字符")));
			$("#description_bqc").val($("#description_bqc").val().substring(0, 500));
			return false;
		}
	}else if(jctype == "spf"){
		desc = $("#description").val(); // 合买宣传语
		if (desc.length > 500) {
			openAlert(decodeURI(EncodeUtf8("方案宣传不能超过500个字符")));
			$("#description").val($("#description").val().substring(0, 500));
			return false;
		}
	}
	
}
function faqiHemai() {

	if (!touzhuPublic()) { //合买投注追号通用判断
		return false;
	}
	//获取用户余额
	var touzhu_money = parseInt($("#touzhu_money").html());

	var buyAmt = $("#buyAmt").val(); // 购买金额
	var safeAmt = $("#safeAmt").val(); // 保底金额
	var commisionRatio = $("#commisionRatio").val(); // 佣金
	var visibility = $("input[name='visibility']:checked").val(); // 保密类型
	var minAmt = $("#minAmt").val(); // 最小购买金额
	var desc = $("#description").val(); // 合买宣传语
	// 如果用戶沒有选择是否设置最低跟单金额则设置为0
	if (!$("#isMinAmt").is(':checked')) {
		minAmt = 1;
	}

	//校验合买数据
	var testNum = /^[0-9]|[1-9]d*$/;
	if ((buyAmt == "" || buyAmt == "0") && (safeAmt == "" || safeAmt == "0")) {
		openAlert(decodeURI(EncodeUtf8("你好，认购金额与保底金额至少填写其中一个！")));
		$("#buyAmt").focus();
		return false;
	} else if (parseInt($("#investField").html())<6) {
		openAlert(decodeURI(EncodeUtf8("最低合买方案金额不小于6元，最少选择3注彩票完成合买。")));
		$("#buyAmt").focus();
		return false; 
	} else if (!testNum.test(buyAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，认购金额只能填写数字！")));
		$("#buyAmt").focus();
		return false;
	} else if (!$("#isAllSafeAmt").is(':checked') && !testNum.test(safeAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，保底金额只能填写数字！")));
		$("#safeAmt").focus();
		return false;
	} else if ($("#isMinAmt").is(':checked') && !testNum.test(minAmt)) {
		openAlert(decodeURI(EncodeUtf8("你好，最低跟单金额必须为数字！")));
		$("#minAmt").val(2);
		$("#minAmt").focus();
		return false;
	} else if ($("#isMinAmt").is(':checked') && minAmt > (parseInt($("#investField").html()) / 2)) {
		openAlert(decodeURI(EncodeUtf8("你好，最低认购金额不能超过方案金额的一半！")));
		$("#minAmt").val(parseInt($("#investField").html()) / 2);
		$("#minAmt").focus();
		return false;
	} else if ($("#isMinAmt").is(':checked') && minAmt < 2) {
		openAlert(decodeURI(EncodeUtf8("你好，最低认购金额设置最低为2元！")));
		$("#minAmt").val(2);
		$("#minAmt").focus();
		return false;
	} else if (touzhu_money < (parseInt(buyAmt) + parseInt(safeAmt))) {
		openAjaxPopup("openTishi", 1000, "/rchlw/function/rules/tishi.html?key=2&num=3");
		$("#buyAmt").focus();
		return false;
	}
	var jsonObj = '{"buyAmt":"' + buyAmt + '","safeAmt":"' + safeAmt + '","commisionRatio":"' + commisionRatio + '","desc":"' + desc + '","visibility":"' + visibility + '","minAmt":"' + minAmt + '","isIe":"' + decodeURI(EncodeUtf8("中")) + '"}';
	$("#jsonStringCLR").val(jsonObj);

	htmlMsg(); //给 弹出层设置相关数据
	connPath();
	loginShow('touzhuOpen1', false);

}
//比例计算a*100/b
function bili(idstr) {
	var re = /^[\d]+$/;
	var a = $("#" + idstr).val();
	if (!(a=="")&&!(re.test(a))) {
		openAlert(decodeURI(EncodeUtf8("请输入数字！")));
		$("#" + idstr).val("");
		$("#" + idstr).focus();
		return false;
	}
	a = Number(a);
	var b = Number($("#investField").html());
	var safeAmt = Number($("#safeAmt").val());
	//如果认购金额大于投注总金额 设为投注金额
	if (a > b) {
		a = b;
		$("#" + idstr).val(a);
	}
	//如果认购金额加保底金额大于总金额，则将保底金额设为总金额减去认购金额
	if (a + safeAmt > b && (idstr == "buyAmt" || idstr == "amt")) {
		safeAmt = b - a;
		$("#safeAmt").val(safeAmt);
	} else if (idstr == "safeAmt") {
		if ($("#buyAmt") && (a + Number($("#buyAmt").val()) > b)) {
			$("#buyAmt").val(b - a);
		} else if ($("#amt") && (a + Number($("#amt").val()) > b)) {
			$("#amt").val(b - a);
		}
	}
	if (b == 0) {
		openAlert(decodeURI(EncodeUtf8("你好，请您先选号！")));
		$("#" + idstr).val("");
		return;
	}
	$("#" + idstr + "_bili").html(round(a * 100 / b, 2));
	if ($("#isAllSafeAmt").is(':checked')) {
		$("#safeAmt").val(b - a);
		$("#safeAmt_bili").html(round((100 - (a * 100 / b)), 2));
	} else if ($("#safeAmt").val() == 0) {
		$("#safeAmt_bili").html(0);
	}
}
//按期号查询
function	changeBathcode(value)	{
	var value1 = value;
	if (value != null && value != '' && value.indexOf("$") > -1) {
		value1 = value.split("$")[0];
	}
	$('#selectBatchCode').val(value1);
	$('#CaseSelectForm').submit();
}
//判断一个复选框是否已勾选，如果勾选则使某组件失效
function ifAllSafeAmt(a, b) {
	if ($("#" + a).is(':checked')) {
		$("#" + b).attr("disabled", "disabled");
		$("#" + b).val(Number($("#investField").html()) - Number($("#buyAmt").val()));
	} else {
		$("#" + b).removeAttr("disabled");
	}
}
//ajax处理筛选请求
function ajaxFromToHemai(formId, divId) {
	var parameters = $("#" + formId).serialize() + "&isAjax=ajax";
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	$.ajax({
		url: basepath + "/function/selectAll!getCaselotsByWhere",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		dataType: 'html',
		//接受数据格式
		beforeSend: function() {
			loginShow("ajax_hemai_pop", false);
		},
		success: function(html) {
			loginShow("ajax_hemai_pop", true);
			$("#" + divId).html(html);
		}
	});
	return false;
}

//ajax处理筛选请求
function ajaxFromToHemaiCenter(formId, divId) {
	var parameters = $("#" + formId).serialize() + "&sortStateFlag=0&isAjax=ajax";
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	$.ajax({
		url: basepath + "/function/hemaiCenter!getCaselotsByWhere",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		dataType: 'html',
		//接受数据格式
		beforeSend: function() {
			loginShow("ajax_hemai_pop", false);
		},
		success: function(html) {
			loginShow("ajax_hemai_pop", false);
			$("#" + divId).html(html);
		}
	});
	return false;
}
//参与合买验证确认
function canyuHemai(caseId,lotno) {
	var amt = $("#canyu_amt_" + caseId).val();
	if (!testNum.exec(Number(amt))) {
		openAlert(decodeURI(EncodeUtf8("你好，请输入整数！")));
		$("#canyu_amt_" + caseId).val("");
		$("#canyu_amt_" + caseId).focus();
		return false;
	}
	//判断用户是否登录   
	if (!isLogin()) {
		//弹出层
		loginRequrl();
		return false;
	}
	$("#amt_caseId").val(amt + "$" + caseId);
	$("#blancemoney").text($("#topLogin_money").html());
	$("#buymoney").text(amt);
	$("#lotno").val(lotno);
	if (Number(amt) > Number($("#topLogin_money").html())) {
		$("#queding").hide();
		$("#closequeding").hide();
		$("#yueBuzu").show();
		$("#quxiao").show();
	} else {
		$("#queding").show();
		$("#yueBuzu").hide();
		$("#quxiao").hide();
		$("#closequeding").hide();
	}
	canyuHemaiShow();
}
function toHemaiSubmit(lotno) {
	var amt_caseId = $("#amt_caseId").val();
	var amt = 0;
	var caseId = "";
	if (amt_caseId.indexOf("$")) {
		amt = amt_caseId.split("$")[0];
		caseId = amt_caseId.split("$")[1];
	}

	toHemai(amt,caseId,0,lotno);
}
//点击确认购买 显示为认购中
function tohemairengou() {
	$("#queding").hide();
	$("#rengouzhong").show();
	$("#yueBuzu").hide();
	$("#quxiao").hide();
	$("#closequeding").hide();
	var lotno = $("#lotno").val();
	toHemaiSubmit(lotno);
}
//提交参与和买的内容
function toHemai(amt, caseId, safeAmt,lotno) {
	var parameters = "amt=" + amt + "&caseId=" + caseId+"&lotno="+lotno;
	if (safeAmt) {
		parameters += "&safeAmt=" + safeAmt;
	}
	$.ajax({
		url: basepath + "/user/bet!toHemai",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		dataType: 'json',
		//接受数据格式
		beforeSend: function() {
			$("#button_" + caseId).attr("disabled", "true"); //使提交按钮失效
		},
		success: function(json) {
			$("#button_" + caseId).removeAttr("disabled");
			$("#rengouzhong").hide();
			$("#closequeding").show();
			$("#queding").hide();
			$("#yueBuzu").hide();
			$("#quxiao").hide();
			if (json.errorCode == "502") {
				$("#message").html(json.message);
			} else if (json.errorCode == "501") {
				$("#buymoney").text(json.amt);
				$("#blancemoney").text(json.deposit_amount);
				$("#message").html(json.message);
			} else if (json.errorCode == "500") {
				$("#message").html(json.message);
				return false;
			} else if (json.errorCode == "0") {
				$("#message").html(json.message);
			} else {
				$("#message").html("网络错误！请稍后再试！");
				return false;
			}
		}
	});
}
//参与合买验证确认
function infoCanyuHemai(lotno, caseId) {
	var amt = $("#amt").val();
	var safeAmt = $("#safeAmt").val();
	var testNum = /[1-9]d*/;;
	if (!testNum.test(amt) && !testNum.test(safeAmt)) {
		$("#amt").focus();
		openAlert(decodeURI(EncodeUtf8("你好，请至少选择认购或保底其中一项，填写金额后认购！")));
		return false;
	} else if ($("#xieyi") != null || $("#xieyi") != undefined) {
		if ($("#xieyi").attr('checked') != 'checked') {
			openAlert(decodeURI(EncodeUtf8("请您同意用户代购合买协议！")));
			return false;
		}
	}
	if ($("#fengxiang")) {
		if ($("#fengxiang").attr('checked') != 'checked') {
			if (lotno == "T01002") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对排列3进行限号管理，您是否同意网站《排列3投注风险须知》？")));
			} else if (lotno == "F47103") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对福彩3D进行限号管理，您是否同意网站《福彩3D投注风险须知》？")));
			}
			return false;
		}
	}
	//判断用户是否登录   
	if (!isLogin()) {
		//弹出层
		loginRequrl();
		return false;
	}
	$("#rengou_buymoney").text(amt);
	loginShow("rengouTiShishow", false); //弹出认购提示
	return false;
}
//撤单
function chedan(caseId) {
	$.ajax({
		url: basepath + "/user/bet!cancelCaselot",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: "caseId=" + caseId,
		//参数
		dataType: 'json',
		//接受数据格式
		beforeSend: function() {
			$("#button_chedan").attr("disabled", "true"); //使提交按钮失效
		},
		success: function(json) {
			$("#button_chedan").removeAttr("disabled");
			if (json.errorCode == "500") {
				openAlert(json.message);
				return false;
			} else if (json.errorCode == "0") {
				openAlert(json.message);
				$("#cd_t").attr("class", "none");
				$("#cd_b").attr("class", "none");
				$("#chedanstate").html(decodeURI(EncodeUtf8("撤单")));
				window.location.reload();
				return false;
			} else {
				openAlert(decodeURI(EncodeUtf8("网络错误！请稍后再试！")));
				return false;
			}
		}
	});
}
//撤资
function chezi(caseId) {
	$.ajax({
		url: basepath + "/user/bet!cancelCaselotbuy",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: "caseId=" + caseId,
		//参数
		dataType: 'json',
		//接受数据格式
		beforeSend: function() {
			$("#button_chezi").attr("disabled", "true"); //使提交按钮失效
		},
		success: function(json) {
			$("#button_chezi").removeAttr("disabled");
			if (json.errorCode == "500") {
				openAlert(json.message);
				return false;
			} else if (json.errorCode == "0") {
				openAlert(json.message);
				$("#canyuAmt").text(0);
				window.location.reload();
				return false;
			} else {
				openAlert(decodeURI(EncodeUtf8("网络错误！请稍后再试！")));
				return false;
			}
		}
	});
}
//查看玩家发起方案记录
function fanganListToUser(userno, nickname) {
	$("#Fangan_userno").val(userno);
	$("#Fangan_title").html(decodeURI(EncodeUtf8("查看"+nickname+"的投注记录")));
	ajaxFromFanganListToUser("CaseFanganSelectForm", "fangan_Html");
	hemaiInfoSelect();
	loginShow("fanganList_Alert", false);
}
//ajax处理合买历史筛选请求
function ajaxFromFanganListToUser(formId, divId) {
	var parameters = $("#" + formId).serialize();
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	$.ajax({
		url: basepath + "/function/selectAll!getFangAnListToUser",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		async: false,
		beforeSend: function() {
			$("#" + divId).html(decodeURI(EncodeUtf8("查询中..."))); //使提交按钮失效
		},
		dataType: 'html',
		//接受数据格式
		success: function(html) {
			$("#" + divId).html(html);
		}
	});
	return false;
}

//查看用户盈利战绩记录
function yingliListToUser(userno, lotno, nickname, displayIcon_index, lotno_cn) {
	$("#Yingli_userno").val(userno);
	$("#Yingli_lotno").val(lotno);
	$("#Yingli_nickname").html(nickname);
	$("#Yingli_displayIcon").html($("#" + displayIcon_index).html());
	$("#Yingli_lotno_cn").html(lotno_cn + decodeURI(EncodeUtf8("战绩：")));
	$("#Yingli_lotno_cn_df").val(decodeURI(EncodeUtf8(lotno_cn)));
	$("#Yingli_state").val("-1");
	$("#BtnYl").attr("class", "BaseBtn");
	ajaxFromYingliListToUser("CaseYingliSelectForm", "yingli_Html");
	loginShow("yingliList_Alert", false);
}
//ajax处理盈利战绩筛选请求
function ajaxFromYingliListToUser(formId, divId) {
	var parameters = $("#" + formId).serialize();
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	$.ajax({
		url: basepath + "/function/selectAll!getYingLiListToUser",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		async: false,
		beforeSend: function() {
			$("#" + divId).html(decodeURI(EncodeUtf8("查询中..."))); //使提交按钮失效
		},
		dataType: 'html',
		//接受数据格式
		success: function(html) {
			$("#" + divId).html(html);
		}
	});
	return false;
}
//发起和买的页面跳转方法、
function faqiHemaiTiaozhuan(lonto) {
	var url;
	if (lonto == "F47104") {
		url = "/rchlw/lottery/ruyicai_channel_ssq.jsp";
	} else if (lonto == "F47103") {
		url = "/rchlw/lottery/ruyicai_channel_3D.jsp";
	} else if (lonto == "F47102") {
		url = "/rchlw/lottery/ruyicai_channel_qlc.jsp";
	} else if (lonto == "T01001") {
		url = "/rchlw/lottery/ruyicai_channel_dlt.jsp";
	} else if (lonto == "T01002") {
		url = "/rchlw/lottery/ruyicai_channel_pls.jsp";
	} else if (lonto == "T01011") {
		url = "/rchlw/lottery/ruyicai_channel_plw.jsp";
	} else if (lonto == "T01009") {
		url = "/rchlw/lottery/ruyicai_channel_qxc.jsp";
	} else if (lonto == "T01003") {
		url = "/rchlw/lottery/ruyicai_channel_shengfucai.jsp";
	} else if (lonto == "T01005") {
		url = "/rchlw/lottery/ruyicai_channel_sichang.jsp";
	} else if (lonto == "T01004") {
		url = "/rchlw/lottery/ruyicai_channel_renjiuchang.jsp";
	} else if (lonto == "T01006") {
		url = "/rchlw/lottery/ruyicai_channel_liuchangban.jsp";
	}
	window.location.href = url + "?canshu=hemai#BettingForm";
}
//点击发起合买进入投注页面的初始化方法
function hemaiInit() {
	if(document.readyState == "complete"){
		var canshu = GetQueryString("canshu");
			if (!canshu == "" || !canshu == "null") {
				if(canshu=="hemai"){
					setGoumaifangshi('合买');
					tabHemaiAndDaigou('hemai');
					$("#controlHemai").addClass("selected");
					$("#controlHemai").siblings().removeClass("selected");
					$("#followHemai").addClass("selected");
					$("#followHemai").siblings().removeClass("selected");
				}else if(canshu=="zengsong"){
					setGoumaifangshi('赠送');
					tabHemaiAndDaigou('zengcai');
					$("#zengSong").addClass("selected");
					$("#checkzengcai").addClass("selected");
					$("#checkzengcai").siblings().removeClass("selected");
					$("#zengSong").siblings().removeClass("selected");
					$("#ZSDiv").addClass("selected");
					$("#ZSDiv").siblings().removeClass("selected");
				}
			}
	}else{  
		setTimeout("hemaiInit()", 500);
	}
}
//合买方案详情页面，查看发起人记录 根据彩种显示不同的页面查询信息
function hemaiInfoSelect() {
	var lotno = $("#Fangan_lotno").val();
	if (lotno == "T01003" || lotno == "T01004" || lotno == "T01005" || lotno == "T01006") {
		$("#Football").addClass("selected");
		$("#Football").siblings().removeClass("selected");
		$("#followFootball").addClass("selected");
		$("#followFootball").siblings().removeClass("selected");
	} else if (lotno == "F47104" || lotno == "F47103" || lotno == "F47102") {
		$("#FUCAI").addClass("selected");
		$("#FUCAI").siblings().removeClass("selected");
		$("#followFuCai").addClass("selected");
		$("#followFuCai").siblings().removeClass("selected");
	} else if (lotno == "T01001" || lotno == "T01009" || lotno == "T01002" || lotno == "T01011") {
		$("#TICAI").addClass("selected");
		$("#TICAI").siblings().removeClass("selected");
		$("#followTiCai").addClass("selected");
		$("#followTiCai").siblings().removeClass("selected");
	}
	if(!(lotno=="")){
		$("#" + lotno).addClass("selected");
		$("#" + lotno).siblings().removeClass("selected");
		}
}
//============================合买使用的js=========END=======================

//用动态在html中写入flash的方式实现音乐开始 前提是flash是自动播放的 兼容IE6,FF,Chrome IE78待测
function FlashMusicStart() {
	if ($(".FlashMusicBox").length > 0) {
		if ($(".FlashMusic").length < 1) {
			$("#FlashMusicBox").append("<object class='FlashMusic' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='990' height='222'> <param name='movie' value='/flash/kaijing_bgmusic.swf' /> <param name='quality' value='high' /> <param name='wmode' value='transparent' />  <param name='LOOP' value='0' /> <embed class='FlashMusic' src='/flash/kaijing_bgmusic.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='990' height='222' wmode='transparent' loop='-1' ></embed></object>");
		}
	}
};

//用移除object标签的方式实现停止音乐 这是完全的stop 不是puase 也就是说再打开是重新播放
function FlashMusicStop() {
	$(".FlashMusic").remove();
};

//创建FlashMusic的父容器 创造写入flash的环境
function FlashMusicOn() {
	if ($(".FlashMusicBox").length < 1) {
		$("body").append("<div id='FlashMusicBox' class='FlashMusicBox' style='position:absolute; overflow:hidden; left:-10000px; top:-10000px; width:10px; height:10px; border:solid 1px #F00;'>&#160;</div>");
	}
};

//移除FlashMusic的父容器 达到再按开始也无法创建flash并播放的效果
function FlashMusicOff() {
	if ($(".FlashMusicBox").length > 0) {
		$(".FlashMusicBox").remove();
	}
};

//控制按钮的出现
function playon() {
	$("#onORoff").empty();
	$("#onORoff").append('<span class="HighFrequencySoundOff" onclick="FlashMusicOn();playoff();" title="' + decodeURI(EncodeUtf8('点击该按钮可以开启声音。')) + '"></span>');
}
function playoff() {
	$("#onORoff").empty();
	$("#onORoff").append('<span class="HighFrequencySoundOn" onclick="FlashMusicOff();playon();" title="' + decodeURI(EncodeUtf8('点击该按钮可以关闭声音。')) + '"></span>');
}


/******************************************************以下为赠彩功能用到的js***********************************************************/
//添加到列表的所有受赠人列表
var userRightList = "";
//受赠人数
var friendNum = 0;
//赠送金额
var zengMoney = 0;
//赠送总倍数
var zengMultiple = 0;
//自购金额
var ownMoney = 0;
//自购总倍数
var ownMultiple = 0;
//总金额（自购金额+赠送金额）
var lastMoney = zengMoney + Number($("#ownMoney1").html());;
//索引的数组
var abc = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var indexArr = [];
//判断是不是数字的正则表达式
var reg = /^[\d]+$/;


//验证受赠人
function shouzengren(idstr) {
	$("#userListError").find("li").remove();
	var singleArr = $("#" + idstr).val().replace(/\，/g,",").split(",");
	var investField = Number($("#investField").html());
	var allMultiple = Number($("#allMultiple").val());
	
	var sameUser = "";
	var userError = "";
	var zhijieadd = "";
	
	if($("#" + idstr).val()==""){
		openAlert(decodeURI(EncodeUtf8("请输入受赠人！")));
		return false;
	}else if(singleArr.length>20){
		openAlert(decodeURI(EncodeUtf8("受赠人最多为20个！")));
		return false;
	}else{
		//判断输入的受赠人格式是否正确
		if($("#" + idstr).val()=="可填写最多20个手机号，以逗号分隔"){
			zhijieadd = "受赠人不能为空";
		}else{
			for(var i=0;i<singleArr.length;i++){
				var single = singleArr[i];
				if(single!=""||single.length!=0){
					
					var telePattern=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
					if(!telePattern.test(single)){
						userError += single + ",";
					}else{
						if(userRightList.indexOf(single)!=-1){
							sameUser += single + ",";
						}else{
							userRightList += single + ",";
							friendNum += 1;
							var key = 1;
							if(abc.length==1){
								key=abc[0];
							}else{
								key = abc[(Math.floor((Math.random()*(abc.length-1)+1)))];
							}
							$("#zengsonglist").append("<tr id='user"+key+"'><td>"+single+"</td><td>赠送<input class='TextInputMini' type='text' id='multiple"+key+"' value='"+allMultiple+"' onkeyup=multipleValidateZengCai('multiple"+key+"');changeSingleMultiple('multiple"+key+"','money"+key+"','','"+key+"'); />倍 </td><th><i>￥</i><i id='money"+key+"'>0</i></th><th><input class='TextInput' type='text' id='luck"+key+"' onkeyup=blessingLimit('"+key+"'); value='祝您好运中大奖！'/></th><th><span onmouseover='HoverOver($(this))' onmouseout='HoverOut($(this))' onclick=deleteUser('"+single+"','"+key+"')>删除</span></th></tr>");
							$("#money"+key).html(Number($("#multiple"+key).val())*investField);
							zengMoney += Number($("#money"+key).html());
							zengMultiple += Number($("#multiple"+key).val());
							$("#zengMultiple").html(zengMultiple);
							$("#zengMoney").html(zengMoney);
							
							var b=0;
							for(var a=0;a<abc.length;a++){
								if(key==abc[a]){
									b=a;
								}
							}
							var m=abc.slice(0,b);
							var n=abc.slice(Number(b)+1,abc.length);
							abc=indexArr.concat(m,n);
						}
					}
				}
			}
		}
		
		//在错误提示层中添加错误提示信息
		if(userError!=""){
			for(var a=0;a<userError.split(",").length-1;a++){
				$("#userListError").append("<li id='matchError'>账号："+userError.split(",")[a]+"格式错误</li>");
			}
		}else if(sameUser!=""){
			/*for(var b=0;b<sameUser.split(",").length-1;b++){
				if(sameUser.indexOf(sameUser.split(",")[b])!=-1){
					sameUser=sameUser.substring(0, sameUser.indexOf(sameUser.split(",")[b])-1) + sameUser.substring(sameUser.indexOf(sameUser.split(",")[b])+sameUser.split(",")[b].length);
					$("#userListError").append("<li id='haved'>账号："+sameUser.split(",")[b]+"已添加</li>");
				}
			}*/
			for(var b=0;b<sameUser.split(",").length-1;b++){
				$("#userListError").append("<li id='haved'>账号："+sameUser.split(",")[b]+"已添加</li>");
			}
		}else if(zhijieadd!=""){
			$("#userListError").append("<li id='notUser'>"+zhijieadd+"</li>");
		}
		
		$("#friendNum").html(friendNum);
		$("#lastMoney").html(Number($("#zengMoney").html())+Number($("#ownMoney1").html()));
		
	}
	
}
//清空受赠人列表的提示语
function clearTishiyu(id){
	if($("#"+id).val()=="可填写最多20个手机号，以逗号分隔"){
		$("#"+id).val("");
	}
}
//从列表中删除该受赠人
function deleteUser(user,index){
	friendNum -= 1;
	user += "";
	userRightList = userRightList.substring(0, userRightList.indexOf(user)-1) + userRightList.substring(userRightList.indexOf(user)+user.length);
	zengMoney -= Number($("#money"+index).html());
	zengMultiple -= Number($("#multiple"+index).val());
	$("#zengMultiple").html(zengMultiple);
	$("#friendNum").html(friendNum);
	$("#zengMoney").html(zengMoney);
	
	$("#lastMoney").html(Number($("#zengMoney").html())+Number($("#ownMoney1").html()));
	abc=abc.concat(index);
	$("#user"+index).remove();
}
//改变总受赠送倍数以及相应的金额
function changeAllMultiple(){
	//投注总倍数
	var allMultiple = Number($("#allMultiple").val());
	//投注总金额
	var investField = Number($("#investField").html());
	//自购金额
	ownMoney = Number($("#ownMoney1").html()); 
	for(var i=1;i<21;i++){
		$("#multiple"+i).val(allMultiple);
		$("#money"+i).html(allMultiple*investField);
	}
	zengMultiple = allMultiple*friendNum;
	zengMoney = allMultiple*friendNum*investField;
	$("#zengMultiple").html(allMultiple*friendNum);
	$("#zengMoney").html(allMultiple*friendNum*investField);
	$("#lastMoney").html(ownMoney+allMultiple*friendNum*investField);
}
//改变单个倍数，更改相应的金额
function changeSingleMultiple(multipleDiv,moneyDiv,isSingle,index){
	//multipleDiv += "";
	//moneyDiv += "";
	//投注总金额
	var investField = Number($("#investField").html());
	var singleMultiple = Number($("#"+multipleDiv).val());
	var singleMoney = singleMultiple * investField;
	if(isSingle=="own"){
		ownMoney = singleMoney;
		$("#"+moneyDiv+"1").html(singleMoney);
		$("#"+moneyDiv+"2").html(singleMoney);
	}else{
		zengMoney = 0;
		zengMultiple = 0;
		$("#"+moneyDiv).html(singleMoney);
		for(var i=1;i<21;i++){
			if(reg.test(Number($("#multiple"+i).val()))){
				zengMultiple += Number($("#multiple"+i).val());
			}
		}
		zengMoney = zengMultiple * investField;
		
		$("#zengMultiple").html(zengMultiple);
		$("#zengMoney").html(zengMoney);
	}
	
	$("#lastMoney").html(Number($("#zengMoney").html())+Number($("#ownMoney1").html()));
}

//选择号码后改变相应的金额
function chooseBallToMoney(n){
	ownMultiple = Number($("#ownMultiple").val());
	var allMultiple = Number($("#allMultiple").html());
	var investField = Number($("#investField").html());
	
	ownMoney = ownMultiple * investField;
	zengMoney = zengMultiple * investField;
	for(var i=1;i<21;i++){
		if(reg.test(Number($("#multiple"+i).val()))){
			$("#money"+i).html(Number($("#multiple"+i).val()) * investField);
		}
	}
	if($("#ownCheck").attr('checked') == 'checked'){
		$("#ownMoney1").html(ownMoney);
		$("#ownMoney2").html(ownMoney);
		$("#zengMoney").html(zengMoney);
		$("#lastMoney").html(zengMoney+ownMoney);
	}else{
		$("#zengMoney").html(zengMoney);
		$("#lastMoney").html(zengMoney);
	}
}

//统计自购的金额和倍数
function ownMessage(){
	//disabled
	if($("#ownCheck").attr('checked') != 'checked'){
		$("#ownMoney1").html(0);
		$("#ownMoney2").html(0);
		$("#ownMultiple").attr('disabled','disabled');
		$("#ownMultiple").val("1");
		$("#lastMoney").html(zengMoney);
		$("#zengMoney").html(zengMoney);
	}else{
		$("#ownMultiple").attr('disabled',false);
		$("#ownMoney1").html(ownMoney);
		$("#ownMoney2").html(ownMoney);
		$("#ownMultiple").val(ownMultiple);
		$("#lastMoney").html(zengMoney+ownMoney);
		$("#zengMoney").html(zengMoney);
	}
}


//倍数验证

function multipleValidateZengCai(multipleDiv) {
	//multipleDiv += "";
	// 如用户倍数框留空，光标离开倍数输入框，则倍数输入框默认为1.
	if ($('#'+multipleDiv).val() == '' || $('#'+multipleDiv).val() == undefined || $('#'+multipleDiv).val() == null || Number($('#'+multipleDiv).val()) <= 0) {
		$('#'+multipleDiv).val(1);
		$("#tb_Multiple").val(1);
		$('#'+multipleDiv).focus();
		$('#'+multipleDiv).select();
	}

	//判断倍数是否在1-50倍之间
	if (Number($('#'+multipleDiv).val()) > 50) {
		$('#'+multipleDiv).val(50);
		$("#tb_Multiple").val(50);
		$('#'+multipleDiv).focus();
		$('#'+multipleDiv).select();
	}

	//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
	var pattern = /^-?\d+$/;
	if (isNaN($('#'+multipleDiv).val()) || $('#'+multipleDiv).val().search(pattern) != 0) {
		$('#'+multipleDiv).val(1);
		$("#tb_Multiple").val(1);
		$('#'+multipleDiv).focus();
		$('#'+multipleDiv).select();
		return false;
	}
	return true;
}

function blessingLimit(id){
	var luck = $("#luck"+id).val();
	if(luck.indexOf("@")!=-1){
		openAlert(decodeURI(EncodeUtf8("祝福语不允许输入@，请您重新输入!")));
		$("#luck"+id).val("祝您好运中大奖！");
	}
	if(luck.length>20){
		$("#luck"+id).val("祝您好运中大奖！");
	}
}

function zengcaiInit(){
	if($("#lotNo").val()=="F47104"||$("#lotNo").val()=="T01001"){
		$("#ZengSong").show();
		$("#ZengSong").hide();
	}else{
		$("#zengSong").hide();
		$("#ZengSong").hide();
		//$("#ZSDiv").hide();
	}
}

function addStatus(){
	$("#zengSong").click();
}
function deleteStatus(){
	$("#daiGou").click();
}
function checkzengcaiInit(flag){
	if(flag=="1"){
		if(!$("#checkdaigou").hasClass("selected")){
			$("#checkdaigou").addClass("selected");
			$("#checkdaigou").siblings().removeClass("selected");
		}
	}else if(flag=="2"){
		if(!$("#checkzengcai").hasClass("selected")){
			$("#checkzengcai").addClass("selected");
			$("#checkzengcai").siblings().removeClass("selected");
		}
	}
}
function clearData(){
	var len = $("#fangAn").find("tr").length;
	$("#fangAn").find("tr").slice(1,len).remove();
	$("#fangAnTitle").attr("rowspan","2");
}