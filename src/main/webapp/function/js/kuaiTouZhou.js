var basepath = "/rchlw";// 项目地址
var pageArrayNum = 0; 
var urlArray=new Array();
urlArray[0]= basepath + "/function/selectAll!drawalotteryIndex";//开奖公告
urlArray[1]= basepath + "/function/ryc_select_newkj!drawalotteryJc";//竞彩足球开奖信息查询
//-----------------开奖详情js-------------------------
urlArray[43] = basepath + "/user/selectAll!getBetSelect"; //投注记录五条详细信息
urlArray[59] = basepath + "/function/selectAll!getMoreBetSelect"; //投注记录超过五条的详细信息（合买使用的）
urlArray[47] = basepath + "/user/selectAll!getMoreBetSelect"; //投注记录超过五条的详细信息
urlArray[46] = basepath + "/function/selectAll!recentLottery"; // 购彩大厅中的显示购彩
function reHtml(key,parameters,loading,divId,bloean){
	alert(123);
	$.ajax({
			url:urlArray[key],//后台处理程序
			type:"GET",//数据发送方式
			data:parameters,//参数
			dataType:'html',//接受数据格式
			async:bloean,//同步执行还是异步执行
			beforeSend:function(){if(loading!=false){$("#"+divId).html('<img src="/rchlw/function/images/loading.gif"  />');}},
			success:function(data){
				  $("#"+divId).html(data);
				}
		});
	    return false;
}

function reHtml1(key, parameters, loading, divId, bloean) {
	if (bloean == null || bloean == "") {
		bloean = true;
	}
	var str = "";
	if (key == '' || key == '0') { //从URL中获取参数
		var keyP = GetQueryString("key");
		if (keyP != null && keyP != "undefined") {
			key = keyP;
		} else {
			key = 23;
		}
	}
	if (divId == null || divId == "") {
		divId = "right_text";
	}
	//alert(urlArray[key]+"?"+parameters);
	pageArrayNum = key; //将当前页面的数组值更新为当前页面的值
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	if (key == 39) {
		notRepeat('emailsubmitid', 'over', decodeURI(EncodeUtf8("验证中")));
	}
	if (key == 51) {
		notRepeat('phoneBand', 'over', decodeURI(EncodeUtf8("验证中")));
	}
	if (key == 52) {
		notRepeat('renzheng_submit', 'xiabuzhong', '');
	}
	$.ajax({
		url: urlArray[key],
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		dataType: 'html',
		//接受数据格式
		async: bloean,
		//同步执行还是异步执行
		error: function() {
			if (key == 39) {
				repeat('emailsubmitid', 'over', decodeURI(EncodeUtf8("验证中")));
			}
			if (key == 51) {
				repeat('phoneBand', decodeURI(EncodeUtf8("验证")));
			}
			if (key == 52) {
				repeat('renzheng_submit');
			}
		},
		beforeSend: function() {
			if (loading != false) {
				$("#" + divId).html('<img src="/rchlw/function/images/loading.gif"  />');
			}
		},
		success: function(data) {
			if (divId == "right_text") {
				$("#right_text").html(data.replace("{success}", ""));
			} else {
				$("#" + divId).html(data);
				$("#right_text").html(data.replace("{success}", ""));
			}
		}
	});

	return false;
}
//根据制定的参数获取相应接口的数据 (下标，属性名称，属性值，其他参数条件)
function getObjForNameAndValueToKey(key) {
	if (isLogin()) { //判断session是否失效 如果失效跳转到登陆页面
		var flowno = "flowno=" + GetQueryString("flowno");
		var play_name = "play_name=" + GetQueryString("play_name");
		var batchcode = "batchcode=" + GetQueryString("batchcode");
		var type = "type=" + GetQueryString("type");
		var parameters = flowno + "&" + play_name + "&" + batchcode+"&"+type;
		for(b in $.browser) if(b=='msie'){parameters=encodeURI(parameters)+"&msie=1";}
		$.ajax({
			type: "get",
		    url:urlArray[key],
			data:parameters,//参数
			dataType: "html",
			async: false,
			success: function(msg){
				$('#right_text').html(msg);
			}
		});
	} else {
		loginRequrl();
	}
}
//------双色球，大乐透投注使用方法---------
function getRandomNum(max) { //产生一个0到max之间的随机整数
	var i = Math.round(Math.random() * max);
	if (i > max) i = max;
	return i;
}
//判断数组中是否有重复的数字
//arry:要判断的数组，num：数组中的值
function isRepeat(a, num) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] == num) {
			return false;
		}
	}
	return true;
}
function paixv(shuzu) { //冒泡排序法 
	var temp;
	for (var i = 0; i < shuzu.length; i++) {
		for (var j = 0; j < shuzu.length - 1; j++) {
			if (shuzu[j + 1] < shuzu[j]) {
				temp = shuzu[j + 1];
				shuzu[j + 1] = shuzu[j];
				shuzu[j] = temp;
			}
		}
	}
	return shuzu;
}
//获取号码
//num ：选号的个数；rednum:红球的最大数；blue:篮球的最大数;type:彩种
function shuzuarry(num, rednum, bluenum, type) {
	var a = new Array();
	var i = 0;
	while (a.length < num) {
		var temp = getRandomNum(rednum);
		//如果随机数是0，忽略
		if (temp == 0) {
			continue;
		}
		if (temp == "") {
			continue;
		}
		//判断随机数是否重复,如果没有重复就放到数组中，如果重复则继续获取，同时给个位补0。
		if (isRepeat(a, temp)) {
			if (temp.toString().length == 1) {
				a[i] = "0" + temp;
			} else {
				a[i] = temp;
			}
			i++;
		} else {
			continue;
		}
	}
	//排序
	paixv(a);
	//随机产生篮球
	if (type == "dlt") {
		var blue1 = parseInt(Math.random() * 11 + 1);

		var blue2 = parseInt(Math.random() * (12 - (blue1 + 1) + 1) + (blue1 + 1));

		if (blue1 == 0) blue1 = 1;

		if (blue2 == 0) blue2 = 1;

		if (blue1.toString().length == 1) {
			a[5] = "0" + blue1;
		} else {
			a[5] = blue1;
		}

		if (blue2.toString().length == 1) {
			a[6] = "0" + blue2;
		} else {
			a[6] = blue2;
		}

	} else {
		var bule = getRandomNum(bluenum);
		if (bule == 0) {
			bule = 1;
		}
		if (bule.toString().length == 1) {
			a[6] = "0" + bule;
		} else {
			a[6] = bule;
		}

	}
	return a;
}
//机选随机获取号码
var cont = 0;
var id;
function jixuan(num, rednum, bluenum, type) {
	var shuzu = shuzuarry(num, rednum, bluenum, type);
	for (var i = 0; i < 7; i++) {
		$("#" + type + i).val(shuzu[i]);
	}
	//将机选的号码 分开放入数组中、
	getArry(type, num, shuzu);
	cont++;
	if (cont > 10) {
		clearInterval(id);
		cont = 0;
	}
}
//设置定时调用机选方法
function dlt_dingshi() {
	clearInterval(id);
	cont = 0;
	id = setInterval("jixuan('7','35','12','dlt')", 100);
}
function ssq_dingshi() {
	clearInterval(id);
	cont = 0;
	id = setInterval("jixuan('7','33','16','ssq')", 100);
}
//清空号码
function clearall(num, type) {
	for (var i = 0; i < num; i++) {
		$("#" + type + i).val("");
	}
	RebArry = new Array();
	BlueArry = new Array();
}
//判断是否填写的是一注号码
function isOne(type) {
	var count = 0;
	for (var i = 0; i < 7; i++) {
		if ($("#" + type + i).val() == "" || $("#" + type + i).val() == null) {
			continue;
		} else {
			count++;
		}
	}
	return count;
}
//投注方法
function kuaiTouZhu(type) {
	var playtype = "";
	var count = "7";
	var splitCode = ","; //分割符
	var maxNum = "33";
	var balls = "";
	var string = "";
	var url="";
	var viewBall = "";
	var wanfa;
	if (isOne(type) < 7) {
		openAlert(decodeURI(EncodeUtf8("至少选择7个号！")));
		return false;
	}
	//判断选择类型并提交到相应的action，应该是提交到一个action中
	if ("ssq" == type) {
		playtype = "F47104";
		count = "7";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
			var codeball = $("#" + type + i).val();
			if (i > 0) {
				if ("ssq" == type && i == (count - 1)) {
					balls += "~";
					viewBall += "|";
				} else {
					balls += splitCode;
					viewBall += splitCode;
				}
			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			balls += codeball;
			string += codeball;
			url = "/rchlw/lottery/ruyicai_channel_ssq.jsp";

		}
		balls = balls + "^";
		wanfa = "00";
	}
	if ("dlt" == type) {
		playtype = "T01001";
		count = "7";
		splitCode = ",";
		for (var i = 0; i < count; i++) {
			var codeball = $("#" + type + i).val();
			if (i > 0) {
				if ("dlt" == type && i == (count - 2)) {
					balls += "-";
					viewBall += "|";
				} else {
					balls += splitCode;
					viewBall += splitCode;
				}
			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			balls += codeball;
			string += codeball;
			url = "/rchlw/lottery/ruyicai_channel_dlt.jsp";
		}
		balls = balls + ";";
		wanfa = "0";
	}
	var jsonString = "{betcode:\"" + balls + "\",lotno:\"" + playtype + "\",wanfa:\"" + wanfa + "\"}";
	$("#jsonString").val(jsonString);
	$("#type").val("1");
	if (string == null || string == "") {
		openAlert(decodeURI(EncodeUtf8("请选择一注！")));
	} else {
		if (confirm(decodeURI(EncodeUtf8("您选择了一注幸运号，即将投注！\n投注将扣除您账户2元，确定要进行投注吗？")))) {
			if (!isLogin()) {
				loginRequrl();
			} else {
				if ($("#topLogin_money").text() < 2) {
					$("#buymoney_touzhu").text("2");
					$("#blancemoney_touzhu").text($("#topLogin_money").html());
					loginShow("yueTiShi", false);
				} else {
					$("#BettingForm").submit();
				}

			}
		}
	}

}
//选择彩种，获取期号
function getBatchCodesBY(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!batchCodeSelect",
		data: "lotNo=" + lotNo,
		dataType: 'json',
		//接受数据格式
		success: function(msg) {
			if (lotNo == "F47104") {
				$("#ssqqihao").html(msg.batchCode);
				$("#ssqendTime").html(msg.end_time);
			} else {
				$("#dltqihao").html(msg.batchCode);
				$("#dltendTime").html(msg.end_time);
			}
		}
	});
}
//选择彩种，获取期号
function getjinrijiezhi(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/selectAll!nowbatchCodeSelect",
		data: "lotNo=" + lotNo,
		dataType: 'html',
		//接受数据格式
		success: function(msg) {
				$("#goucai_list").html(msg);
		}
	});
}

//验证注码
var RebArry = new Array();
var BlueArry = new Array();
function getArry(type, num, arry) {
	if (type = "ssq") {
		for (var i = 0; i < num - 1; i++) {
			RebArry[i] = arry[i];
		}
		BlueArry[0] = arry[num - 1];
	} else {
		for (var i = 0; i < num - 2; i++) {
			RebArry[i] = arry[i];
		}
		BlueArry[0] = arry[num - 2];
		BlueArry[1] = arry[num - 1];
	}

}
//1：号码不能超过最大数，并且红球不能重复
function checkZhuMa(type, num, obj) {
	var re = /^[\d]+$/
	//2：获取当前填写的注码
	var now = $("#" + type + obj).val();
	if (! (re.test(now))) {
		openAlert(decodeURI(EncodeUtf8("请按照提示输入数字！")));
		$("#" + type + obj).val("");
		$("#" + type + obj).focus();
		return false;
	}
	if (now.substring(0, 1) == "0"&&now.length > 2) {
		now = now.substring(1, 2);
	}
	//1:双色球，验证红球是否重复
	if (type == "ssq") {
		//验证当前输入的是红球
		if (! (obj == "6")) {
			//3:验证所填写的注码是否是在0到33之间，
			if (parseInt(now) < 1 || parseInt(now) > 33) {
				$("#" + type + obj).val("");

				openAlert(decodeURI(EncodeUtf8("请在01到33之间选号！")));
				$("#" + type + obj).focus();
				return false;
			} else if (now.length < 2) {
				now = "0" + now;
				$("#" + type + obj).val(now);
			}
			if (! (isRepeat(RebArry, now))) {
				openAlert(decodeURI(EncodeUtf8("红球中不能有重复号码，请重新选择！")));
				$("#" + type + obj).val("");
				$("#" + type + obj).focus();
				return false;
			}
			RebArry[obj] = now;
		} else {
			//3:验证所填写的注码是否是在0到33之间，
			if (parseInt(now) < 1 || parseInt(now) > 16) {
				$("#" + type + obj).val("");
				openAlert(decodeURI(EncodeUtf8("请在01到16之间选号！")));
				return false;
			} else if (now.length < 2) {
				now = "0" + now;
				$("#" + type + obj).val(now);
			} else {
				BlueArry[0] = now;

			}

		}
	}
	//1:大乐透，验证红球是否重复
	else if (type == "dlt") {
		//验证当前输入的是红球
		if (! (obj == "6") && !(obj == "5")) {
			//3:验证所填写的注码是否是在0到33之间，
			if (parseInt(now) < 1 || parseInt(now) > 33) {
				$("#" + type + obj).val("");
				openAlert(decodeURI(EncodeUtf8("请在01到33之间选号！")));
				return false;
			} else if (now.length < 2) {
				now = "0" + now;
				$("#" + type + obj).val(now);
			}
			if (! (isRepeat(RebArry, now))) {
				openAlert(decodeURI(EncodeUtf8("红球中不能有重复号码，请重新选择！")));
				$("#" + type + obj).val("");
				$("#" + type + obj).focus();
				return false;
			}
			RebArry[obj] = now;
		} else {
			//3:验证所填写的注码是否是在0到33之间，
			if (parseInt(now) < 1 || parseInt(now) > 12) {
				$("#" + type + obj).val("");
				openAlert(decodeURI(EncodeUtf8("请在01到12之间选号！")));
				return false;
			} else if (now.length < 2) {
				now = "0" + now;
				$("#" + type + obj).val(now);
			}
			if (! (isRepeat(BlueArry, now))) {
				openAlert(decodeURI(EncodeUtf8("蓝球中不能有重复号码，请重新选择！")));
				$("#" + type + obj).val("");
				$("#" + type + obj).focus();
				return false;
			}
			BlueArry[(obj - 5)] = now;
		}

	}

}
//----------------------------------------------足彩胜负js----------------------------
//清空所选号码
function cleanZucai() {
	for (var i = 1; i < 15; i++) {
		$("#ball0_" + i).removeClass("Switch");
		$("#ball1_" + i).removeClass("Switch");
		$("#ball3_" + i).removeClass("Switch");
	}
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$("#xuanhaokuang").hide();
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");

}
//计算注数的方法是每位的长度相乘
function checkZhumaShouY() {
	var reg = /^((013|01|03|13|[013])[,]){14}$/;
	var reg2 = /^[1-9][0-9]?$/;
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	var zhuma = "";
	for (var i = 1; i <= 14; i++) {
		if ($("#ball0_" + i).attr("class") == "Switch") {
			zhuma = zhuma + "0";
		}
		if ($("#ball1_" + i).attr("class") == "Switch") {
			zhuma = zhuma + "1";
		}
		if ($("#ball3_" + i).attr("class") == "Switch") {
			zhuma = zhuma + "3";
		}
		zhuma = zhuma + ',';
	}

	if (reg.exec(zhuma)) {

		zhuma = zhuma.substring(0, zhuma.length - 1);
		var zhumas = new Array();
		var zhushu = 1;
		var one = 0,
		two = 0,
		all = 0;
		zhumas = zhuma.split(",");
		for (var i = 0; i < zhumas.length; i++) {
			zhushu = zhushu * zhumas[i].length;
			if (zhumas[i].length == 1) {
				one = one + 1;
			} else if (zhumas[i].length == 2) {
				two = two + 1;
			} else if (zhumas[i].length == 3) {
				all = all + 1;
			}
		}
		var money = "";
		var beishu = $("#tb_Multiple").val();
		if (reg2.exec(beishu)) {
			money = Number(beishu) * Number(zhushu) * 2;
		}
		$("#two").text(two);
		$("#all").text(all);
		$("#lab_Num").text(zhushu);
		$("#lab_Num_standrad").text(zhushu);
		$("#investField").text(money);
		$("#investField_standrad").text(money);
		$("#qihao").text($("#qihao3").text());
		var lotteryListSelect = $("#list_LotteryNumber");
		var opt;
		if (zhushu == 1) {
			opt = new Option(zhuma, "110" + zhuma);
			opt.setAttribute('wangFang', "0");
			add_codes(zhuma, "110" + zhuma);
		} else if (zhushu > 1) {
			opt = new Option(zhuma, "111" + zhuma);
			opt.setAttribute('wangFang', "1");
			add_codes(zhuma, "111" + zhuma);
		}
		lotteryListSelect[0].options.add(opt);

		//添加到弹出框的注码
		$("#alert_zhuma").text(zhuma);

	} else {
		$("#two").text(0);
		$("#all").text(0);
		$("#lab_Num").text(0);
		$("#lab_Num_standrad").text(0);
		$("#investField").text("0");
		$("#investField_standrad").text("0");
	}
}
function connPath() {
	$("#path").val("");
	$("#errorCode").val("");
	$("input[name=hidpath]").each(function() {
		var pe = $(this).attr("value");
		var arr = pe.split("@");
		$("#path").val($("#path").val() + arr[1]);
		$("#errorCode").val($("#errorCode").val() + arr[0]);
	});

}
//统一使用的投注弹出框
function openTouzhu_shouye() {
	if (!touzhuPublic()) {
		return false;
	}
	//判断用户余额是否充足  (投注金额是否大于余额) 
	var current_money = $("#investField").text();
	var goumaifangshi = $("#goumaifangshi").val(); //获取购买方式，如：代购  追号
	var isZhuihao = 0; //获取购买方式，如：代购  追号
	if ($("#isZhuihao") != null) {
		isZhuihao = $("#isZhuihao").val();
	}
	var zhuihaoqishu = 1;
	if (goumaifangshi == '追号' || isZhuihao == 1) {
		zhuihaoqishu = $("#betchNum").val();
	}
	if (parseInt(current_money * zhuihaoqishu) > parseInt($("#topLogin_money").html())) {
		$("#buymoney_touzhu").html(current_money);
		$("#blancemoney_touzhu").html($("#topLogin_money").html());
		loginShow("yueTiShi", false);
		return false;
	}

	htmlMsg(); //给 弹出层设置相关数据
	connPath();
	//openStaticPopup("openTouzhu",1000,"touzhuOpen1");
	loginShow('touzhuOpenShouye', false);
}
function norepeat(aa) {
	//$(aa).removeClass("queding_btn1");
	$(aa).addClass("BtnDisable");
	$(aa).val(decodeURI(EncodeUtf8("投注中")));
	$(aa).attr("disabled", true);
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

		if (lotno == "J00013"||lotno == "J00001" || lotno == "J00003" || lotno == "J00002") {
			betcode += wanfa + $("#list_LotteryNumber option:eq(" + i + ")").val();
		} else {
			betcode += $("#list_LotteryNumber option:eq(" + i + ")").val();
		}

		i++;
	}
	wanfa = wanfa.substring(0, wanfa.length - 1);

	var jsonString = "{betcode:\"" + betcode + "\",lotno:\"" + lotno + "\",wanfa:\"" + wanfa + "\",qihao:\"" + qihao + "\"}";
	$("#jsonString").val(jsonString);
	$("#BettingForm").submit();
}
////余额提示框 方法
function loginShow(name, isPage) {
	// change('mag');
	var PopUpWindow = $("#login_pop");
	if (name) {
		PopUpWindow = $("#" + name);
	}
	var PopUpBG = $(".BodyBG");
	$(PopUpBG).toggle();
	$(PopUpWindow).toggle();
	if (!isPage) {
		WindowCenterNow();
	}
}
//选择足彩彩种，获取期号
function getZCBatchCode(lotNo) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/zucai!getCurrForJsp",
		data: "lotNo=" + lotNo,
		dataType: 'json',
		//接受数据格式
		async: false,
		success: function(msg) {
			for (var i = 0; i < msg.length; i++) {
				$("#qihao" + (3 - i)).html(msg[i].batchcode);
				$("#endTime").html(msg[i].endtime);
			}
		}
	});
}
// 所有投注的公共方法
function touzhuPublic() {

	//清空投注登录框
	$("#mobilePOP").val("");
	$("#passwordPOP").val("");
	$("#validatePOP").val("");
	//得到下拉列表的值
	var listLottery = $("#list_LotteryNumber");
	if ($("#list_LotteryNumber option").length == 0) {
		openAlert(decodeURI(EncodeUtf8("请您至少选择一注号码后再购买！")));
		return false;
	}
	if ($("#lotNo").val() == "J00013"||$("#lotNo").val() == "J00001") {
		if ($("#matchNum").html() < 2) {
			openAlert(decodeURI(EncodeUtf8("您好，请至少选择2场比赛！")));
			return false;
		}
		if ($("#allWanfa").val() == "" || $("#allWanfa").val() == "|") {
			openAlert(decodeURI(EncodeUtf8("您好，请选择过关方式！")));
			return false;
		}
	}

	//判断协议是否选中
	if ($("#xieyi") != null || $("#xieyi") != undefined) {
		if ($("#xieyi").attr('checked') != 'checked') {
			openAlert(decodeURI(EncodeUtf8("请您同意用户代购合买协议！")));
			return false;
		}
	}
	if ($("#fengxiang") != null || $("#fengxiang") != undefined) {
		if ($("#fengxiang").attr('checked') != undefined && $("#fengxiang").attr('checked') != 'checked') {
			if ($("#lotNo").val() == "T01002") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对排列3进行限号管理，您是否同意网站《排列3投注风险须知》？")));
			} else if ($("#lotNo").val() == "F47103") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对福彩3D进行限号管理，您是否同意网站《福彩3D投注风险须知》？")));
			} else if ($("#lotNo").val() == "T01010") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对江西11选5进行限号管理，您是否同意网站《江西11选5投注风险须知》？")));
			} else if ($("#lotNo").val() == "T01007") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对时时彩进行限号管理，您是否同意网站《时时彩投注风险须知》？")));
			} else if ($("#lotNo").val() == "T01012") {
				openAlert(decodeURI(EncodeUtf8("彩票发行中心对十一运夺金限号管理，您是否同意网站《十一运夺金投注风险须知》？")));
			}

			return false;
		}
	}

	//判断单个方案不能超过2万元
	if ($("#current_money").html() != null || $("#current_money").html() != undefined) {
		if ($("#current_money").html() > 20000 && $("#lotNo").val() != "T01007") {
			openAlert(decodeURI(EncodeUtf8("您好，单个方案金额不能超过2万元！")));
			return false;
		}
	}

	//判断用户是否登录       
	if (!isLogin()) {

		$("#touzhu_money").html(0);
		$("#final_money").html(0);
		//弹出层
		loginShow();
		var str ="<form action='http://users.ruyicai.com/login.jsp' id='topjump' method='post' target='_blank'></form>";
		$("body").append(str);
		$("#topjump").submit();
		$("body").remove(str);
		return false;
	}

	return true;
}
//判断登录后执行查询的操作
function isLogin(){
	var check = false ;
	$.ajax({
		url:basepath+"/function/query/isLogin.jsp",//后台处理程序
		type:"POST",//数据发送方式
		async:false, 
		dataType:'html',//接受数据格式
		success:function(data){
			if(data.indexOf("{true}")>0){
				    check = true;
				}else{
					check = false;
				}
		}		
	});
	return check;
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
//添加号码到新的选择器中
function add_codes(lotteryView, lotteryNumber) {
	var $li = $('<li onmouseover="add_css($(this))" class="numberlan"><div class="numberhao" onclick=getZhumaView("' + lotteryNumber + '");' + '>' + lotteryView + ' </div> <span class="numberdel"><a href="javascript:btn_ClearSelectClick()" id="btn_ClearSelect" title="' + decodeURI(EncodeUtf8('删除')) + '">' + decodeURI(EncodeUtf8('删除')) + '</a></span> </li>');
	$("#codes").append($li);
}
//-------------------------其他js------------------
//我已充值
function balanceCompare_shouye() {
	$.ajax({
		url: '/rchlw/ajax/selectAll!ajaxFindAccount',
		type: 'post',
		//数据发送方式   
		async: false,
		dataType: 'json',
		success: function(msg) {
			//$('#touzhu_money').html((msg.deposit_amount).toFixed(2));//deposit_amount 底部的可用余额
			$('#topLogin_money').html(msg.deposit_amount); //deposit_amount头部的 可用余额
			loginShow("yueTiShi", false);
		}
	});
}

//查询余额1.deposit可用余额 2.Valid可提现金额3.freeze冻结金额 如果不获取，设为""
function balanceDivDis(deposit, valid, freeze) {
	$.ajax({
		url: '/rchlw/ajax/selectAll!ajaxFindAccount',
		type: 'post',
		//数据发送方式   
		async: false,
		dataType: 'json',
		success: function(msg) {
			touzhu_balance = msg.valid_amount;
			if (valid != "") {
				$('#' + valid).html(msg.valid_amount); //valid_amount
			}
			if (deposit != "") {
				$('#' + deposit).html(msg.deposit_amount); //deposit_amount
				touzhu_balance = msg.deposit_amount; //设置用户当前可投注金额，用于投注时计算投注后余额
			}
			if (freeze != "") {
				$('#' + freeze).html(msg.freeze_amout); //freeze_amout
			}
			$("#this_username_zjq").html(msg.nickName);
			$("#this_username_bf").html(msg.nickName);
			$("#this_username_bqc").html(msg.nickName);
			$("#this_username").html(msg.nickName);
			
		}
	});
}

//获取奖池金额
function getJiangChi(lotno, divid) {
	$.ajax({
		url: '/rchlw/function/selectAll!getlotteryProgressive?lotno=' + lotno,
		type: 'post',
		//数据发送方式   
		async: false,
		dataType: 'json',
		success: function(msg) {
			if (msg != "") {
				$("#" + divid).text(msg.infos.progressive);
			}
		}
	});

}
//初始化首页头部
function topZuCaiLogin() {
	$.ajax({
		type: "get",
		url: "/rchlw/function/user/zucai_top.jsp?" + Math.random(),
		dataType: "html",
		success: function(msg) {
			$('#top_user').html(msg);
		}
	});
}


//首页加载
function indexRight() {
	$.ajax({
		type: "get",
		url: "/rchlw/function/user/index_right_div.jsp?" + Math.random(),
		dataType: "html",
		success: function(msg) {
			if ($("#top_right").length > 0) {
				$('#top_right').html(msg);
			}
		}
	});
}
//初始化首页头部 div--- 要将内容写进的层的id  ， id---要改变样式的的对象的id
function toplogo(div, id) {
	$.ajax({
		type: "get",
		url: "/rchlw/function/cooperation/coop_top.jsp?" + Math.random(),
		dataType: "html",
		success: function(msg) {
			$('#' + div).html(msg);
			if(!(id=="")){
			     $("."+id).addClass("selected");
				 }
		}
	});
}
//初始化首页头部
function topLogin() {
	$.ajax({
		type: "get",
		url: "/rchlw/function/user/user_top.jsp?" + Math.random(),
		dataType: "html",
		success: function(msg) {
			$('#top_user').html(msg);
		}
	});
}
//使页面上有值的文本框的内容选中
function inputSelect() {

	$("input[type ='text']").each(function() {
		$(this).focus(function() {
			$(this).select();
		});
	});
}
//获取URL地址中的参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
//------------ 解决混淆js中的中文编码问题-----------
function EncodeUtf8(s1) {
	var s = escape(s1);
	var sa = s.split("%");
	var retV = "";
	if (sa[0] != "") {
		retV = sa[0];
	}
	for (var i = 1; i < sa.length; i++) {
		if (sa[i].substring(0, 1) == "u") {
			retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));
			if (sa[i].length > 5) {
				retV += sa[i].substring(5, sa[i].length);
			}

		} else retV += "%" + sa[i];
	}

	return retV;
}
function Str2Hex(s) {
	var c = "";
	var n;
	var ss = "0123456789ABCDEF";
	var digS = "";
	for (var i = 0; i < s.length; i++) {
		c = s.charAt(i);
		n = ss.indexOf(c);
		digS += Dec2Dig(eval(n));

	}
	//return value;
	return digS;
}
function Dec2Dig(n1) {
	var s = "";
	var n2 = 0;
	for (var i = 0; i < 4; i++) {
		n2 = Math.pow(2, 3 - i);
		if (n1 >= n2) {
			s += '1';
			n1 = n1 - n2;
		} else s += '0';

	}
	return s;

}
function Dig2Dec(s) {
	var retV = 0;
	if (s.length == 4) {
		for (var i = 0; i < 4; i++) {
			retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
		}
		return retV;
	}
	return - 1;
}
function Hex2Utf8(s) {
	var retS = "";
	var tempS = "";
	var ss = "";
	if (s.length == 16) {
		tempS = "1110" + s.substring(0, 4);
		tempS += "10" + s.substring(4, 10);
		tempS += "10" + s.substring(10, 16);
		var sss = "0123456789ABCDEF";
		for (var i = 0; i < 3; i++) {
			retS += "%";
			ss = tempS.substring(i * 8, (eval(i) + 1) * 8);

			retS += sss.charAt(Dig2Dec(ss.substring(0, 4)));
			retS += sss.charAt(Dig2Dec(ss.substring(4, 8)));
		}
		return retS;
	}
	return "";
}

//弹出一个对话框，name为这个弹出框指定一个名字，用于对弹出框控制，width为弹出框指定宽度，target指定要弹出的DIV的ID
function openStaticPopup(name, width, target) {
	$.openPopupLayer({
		name: name,
		width: width,
		target: target
	});
}
//弹出一个AJAX的对话框，name为这个弹出框指定一个名字，用于对弹出框控制，width为弹出框指定宽度，url指定要弹出的页面的地址
function openAjaxPopup(name, width, url) {
	var PopUpWindow = $("#" + name);
	var PopUpWindowTop = (document.documentElement.clientHeight - PopUpWindow.height()) / 2 + document.documentElement.scrollTop;
	var PopUpWindowLeft = (document.documentElement.clientWidth - PopUpWindow.width()) / 2 + document.documentElement.scrollLeft;
	$(PopUpWindow).css({
		margin: 0,
		padding: 0,
		top: PopUpWindowTop + "px",
		left: PopUpWindowLeft + "px"
	});
	$.openPopupLayer({
		name: name,
		width: PopUpWindowLeft,
		url: url
	});
}
//弹出一个div
function openStaticPopup(name, width, divId) {
	var PopUpWindow = $("#" + name);
	var PopUpWindowTop = (document.documentElement.clientHeight - PopUpWindow.height()) / 2 + document.documentElement.scrollTop;
	var PopUpWindowLeft = (document.documentElement.clientWidth - PopUpWindow.width()) / 2 + document.documentElement.scrollLeft;
	$(PopUpWindow).css({
		margin: 0,
		padding: 0,
		top: PopUpWindowLeft + "px",
		left: PopUpWindowLeft + "px"
	});
	$.openPopupLayer({
		name: name,
		width: PopUpWindowLeft,
		target: divId
	});
}
//统一使用的登录框弹出
function openAjaxLogin() {
	openAjaxPopup("openLoginAjax", 1000, "/rchlw/function/rules/openlogin.html");
}
//统一提示方法
function openAlert(msg) {
	$("#AlertMsg").html(msg);
	loginShow("Shouye_Alert", false);
}
function orderAlert(msg) {
	$("#AlertMsg").html(msg);
	loginShow("order_Alert", false);
}
//----------------------用户登录---------------------------------
//pageType目前分为0首页、1投注页、2其他页3种，根据三种情况可能对当前页面进行用户数据的初始化
function loginAjax(pageType, formid) {
	//登录表单验证插件
	//loginFormValidator();
	// 验证输入的用户名、密码是否正确
	var params = $('#' + formid).serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
	// 发送请求
	$.ajax({
		url: '/rchlw/function/tuserinfoAction!loginForm',
		type: "POST",
		//数据发送方式
		data: params,
		//参数
		dataType: 'html',
		//接受数据格式
		success: function(data) {
			//此处判断跳转的的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
			if (data.indexOf("{success}") == -1) {
				if (pageType == 0) {
					openAlert(decodeURI(EncodeUtf8(data)));
				} else {
					$("#msg").html(data);
					$("#msg").css("display", "");
					$("#rank_id").css("display", "");
					$("#rank_value").val("1");
					change("magLogin");
					$("#pwd").unbind("onKeyDown");
				}
			} else {
				if (data.indexOf("{success}") > -1 && data.indexOf("{requrl}") > -1 && !(window.location.href.split("com")[1] == $("#reqUrl").val())) {
					window.location.href = $("#reqUrl").val();
				}
				totalLotteryInvest = parseInt($("#lab_Num").html());
				var current = "current_money";
				if($("#lotNo").length > 0 && $("#lotNo") == "zjq"){
					current = "current_money_zjq";
				}else if($("#lotNo").length > 0 && $("#lotNo") == "bf"){
					current = "current_money_bf";
				}
				totalMoney = Number($("#"+current).html()); //记录当前选号后的投注所需金额
				if ($("#lotNo").length > 0) {
					touzhuInitStatic(); //对页面做用户登录状态初始化
				}
				//还原初始化之前用户的投注金额，并计算当前用户余额减去投注金额的剩余金额
				var a = parseFloat(touzhu_balance - totalMoney);
				$("#"+current).html(totalMoney.toFixed());
				if (a < 0) {
					$("#final_money").html("0");
				} else {
					$("#final_money").html(a.toFixed());
				}
				//初始化最新开奖页面
				if ($("#zuijingc").length > 0) {
					reHtml(46, '', 'false', 'zuijingc');
				}
				$("#userDivDis").css("diplay", "block");
				$("#userDivNone").css("diplay", "none");
				topLogin();
				indexRight();
				if (pageType == 1) {
					loginShow();
				}
				//获取当前请求的地址若为频道页面时不请求
				if ($("#lotNo").length <= 0) {
					window.location.reload(decodeURIComponent($("#reqUrl").val()));
				}

			}
		}
	});

}
// 用户退出
//
function ajaxLoginOut() {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/tuserinfoAction!loginOut",
		success: function(msg) {
			location.reload();
			topLogin();
			indexRight();
		}
	});
}
//更改验证码头部验证码加载
function change(mag) {
	var d = new Date();
	var imageUrl = "/rchlw/function/common/image.jsp?id=" + d.getDate() + Math.random();
	$("#" + mag).attr('src', imageUrl);
}
//初始化投注页面的所有金额以及登录状态
var touzhu_balance = 0;
function touzhuInitStatic() {

	//初始化所有彩种
	//initLotno();
	if (isLogin()) { //登录情况下
		if($("#jcType").val() != null && $("#jcType").val() == "zjq"){
			//设置第一行
			$("#loginStaticInTouZhu_zjq").html('&#8220;<span id="this_username"></span>&#8221;' + decodeURI(EncodeUtf8('，您的账户余额为')) + '<span class="red">¥' + '</span><span id="touzhu_money" class="red">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元 ')) + '<a href="javascript:;" id="refresh_touzhu_money" onclick="refresh_touzhu_panle()" style="display:none;cursor:pointer;">刷新金额</a>' + decodeURI(EncodeUtf8('【')) + '<span class="buy_blue"><a href="javascript:;"  onclick="refresh_touzhu_button();" title="' + decodeURI(EncodeUtf8('立即充值')) + '">' + decodeURI(EncodeUtf8('立即充值')) + '</a></span>' + decodeURI(EncodeUtf8('】')));
			balanceDivDis("touzhu_money", "", "");
			//设置第二行
			$("#loginStaticInMoney_zjq").html(decodeURI(EncodeUtf8('本次投注金额为')) + '<span class="buy_red" id="current_money">0</span>' + decodeURI(EncodeUtf8('元，购买后您的账户余额为')) + '<span class="buy_red" id="final_money">' + touzhu_balance + '</span>' + decodeURI(EncodeUtf8('元')));
			$("#loginStaticInMoney_zjq").css("display", "none");
			$("#userDivDis").css("display", "block");
			$("#userDivNone").css("display", "none");
		}else if($("#jcType").val() == "spf"){
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
//---------------------------------------------合买js------------------------------------
//合买方案详情页面，查看发起人记录 根据彩种显示不同的页面查询信息
function hemaiInfoSelect(lotno) {
	//var lotno = $("#Fangan_lotno").val();
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
//查看玩家发起方案记录
function fanganListToUser(userno, nickname,lotno) {
	$("#Fangan_userno").val(userno);
	$("#Fangan_title").html(decodeURI(EncodeUtf8("投注记录查看" + nickname)));
	$("#Fangan_displayState").val("0");
	$("#Fangan_isWinner").val("0");
	ajaxFromFanganListToUser("CaseFanganSelectForm", "fangan_Html");
	hemaiInfoSelect(lotno);
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
function toHemaiSubmit(lotno) {
	var amt_caseId = $("#amt_caseId").val();
	var amt = 0;
	var caseId = "";
	if (amt_caseId.indexOf("$")) {
		amt = amt_caseId.split("$")[0];
		caseId = amt_caseId.split("$")[1];
	}
	toHemai(amt, caseId,0,lotno);
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
				$("#rengouzhong").hide();
				$("#closequeding").show();
				$("#queding").hide();
				$("#yueBuzu").hide();
				$("#quxiao").hide();
				return false;
			}
		}
	});
}
//参与合买验证确认
function canyuHemai(caseId,lotno) {
	var amt = $("#canyu_amt_" + caseId).val();
	var testNum  = /^[1-9][0-9]?$/;
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
//点击确认购买 显示为认购中
function tohemairengou() {
	$("#queding").hide();
	$("#rengouzhong").show();
	$("#yueBuzu").hide();
	$("#quxiao").hide();
	$("#closequeding").hide();
	var lotno =	$("#lotno").val();
	toHemaiSubmit(lotno);
}
//参与合买弹出框
function canyuHemaiShow(name, isPage) {
	// change('mag');
	var PopUpWindow = $("#canyuHemaiDiv");
	if (name) {
		PopUpWindow = $("#" + name);
	}
	var PopUpBG = $(".BodyBG");
	$(PopUpBG).toggle();
	$(PopUpWindow).toggle();
	if (!isPage) {
		WindowCenterNow();
	}
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
	hemaiInfoSelect(lotno);
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
//-----------offen.js--------------------------------
//***********************************************************************************//
//横切全部引用该js的html 
//使所有class为light的tag在mouseover的时候增加名为over的class
//并且在mouseout的时候移除名为over的class
//***********************************************************************************//
function HoverOver(n) {
	n.addClass("over");
}
function HoverOut(n) {
	n.removeClass("over");
}

$(function() {
	$(".light").hover(function() {
		$(this).addClass("over");
	},
	function() {
		$(this).removeClass("over");
	});
});

//***********************************************************************************//
//横切全部引用该js的html 
//使所有class为lightTable的表格内 所有td在mouseover的时候增加名为over的class
//并且在mouseout的时候移除名为over的class
//***********************************************************************************//
$(function() {
	$(".lightTable td").hover(function() {
		$(this).addClass("over");
	},
	function() {
		$(this).removeClass("over");
	});
});
//***********************************************************************************//
//获取叫做ChannelBuyTab的dl下的dt 
//当某个dt被点击的时候清除所有同级dt的selected样式并且为当前点击tag增加selected样式 
//并获取该tag的ControlTarget属性 将ControlTarget的属性作为目标 
//获取和该值相同的class为其所有同级tag去掉selected样式之后 
//再为其增加名为selected的属性
//如果目标也拥有ControlTarget属性 则对其再循环上面的操作
//该js最多适用于2层tab
//***********************************************************************************//
//$(function() {
//	$(".ChannelBuyTab dt").click(function() {
//		var ControlTarget = $(this).attr("ControlTarget");
//		$(this).parent().children().removeClass("selected");
//		$(this).addClass("selected");
//		$("." + ControlTarget).parent().children().removeClass("selected");
//		$("." + ControlTarget).addClass("selected");
//		if ($("." + ControlTarget).attr("ControlTarget")) {
//			var SecondControlTarget = $("." + ControlTarget).attr("ControlTarget");
//			$("." + SecondControlTarget).parent().children().removeClass("selected");
//			$("." + SecondControlTarget).addClass("selected");
//			var ThirdControlTarget = $("." + SecondControlTarget).attr("ControlTarget");
//			$("." + ThirdControlTarget).parent().children().removeClass("selected");
//			$("." + ThirdControlTarget).addClass("selected");
//			var LastControlTarget = $("." + ThirdControlTarget).attr("ControlTarget");
//			$("." + LastControlTarget).parent().children().removeClass("selected");
//			$("." + LastControlTarget).addClass("selected");
//		}
//		judgeCaizhong();
//	});
//});

//凡是带有WindowCenter样式的单位都会获得窗口居中并跟随滚动条及窗口大小改变的效果
//如果需要背景失焦层请在页面内添加<div class="BodyBG">&#160;</div>
$(function() {
	$(".BodyBG").css({
		'display': 'none'
	});
	$(window).resize(function() {
		WindowCenter();
		FocusCover();
	});
	setInterval(function() {
		WindowCenter();
	},
	500);
	WindowCenter();
	FocusCover();
});

function WindowCenter() {
	$(".WindowCenter").each(function() {
		if ($(this).css("display") != "none") {
			var PopUpWindowTop = (document.documentElement.clientHeight - $(this).height()) / 2 + document.documentElement.scrollTop + document.body.scrollTop;
			var PopUpWindowLeft = (document.documentElement.clientWidth - $(this).width()) / 2 + document.documentElement.scrollLeft;
			$(this).css({
				'position': 'absolute',
				'z-index': '999999',
				'margin': '0',
				'padding': '0'
			}).stop();
			$(this).animate({
				'top': PopUpWindowTop + 'px',
				'left': PopUpWindowLeft + 'px'
			},
			300);
		}
	});
};

function WindowCenterNow() {
	$(".WindowCenter").each(function() {
		if ($(this).css("display") != "none") {
			var PopUpWindowTop = (document.documentElement.clientHeight - $(this).height()) / 2 + document.documentElement.scrollTop + document.body.scrollTop;
			var PopUpWindowLeft = (document.documentElement.clientWidth - $(this).width()) / 2 + document.documentElement.scrollLeft;
			$(this).css({
				'position': 'absolute',
				'z-index': '999999',
				'margin': '0',
				'padding': '0',
				'top': PopUpWindowTop + 'px',
				'left': PopUpWindowLeft + 'px'
			}).stop();
		}
	});
};

function FocusCover() {
	if (window.innerWidth) {
		winWidth = window.innerWidth;
	} else if ((document.body) && (document.body.clientWidth)) {
		winWidth = document.body.clientWidth;
	};

	if (window.innerHeight) {
		winHeight = window.innerHeight;
	} else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight;
	};

	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	};

	if (winWidth < 950) {
		winWidth = 950;
	};

	if (winHeight < document.body.clientHeight) {
		winHeight = document.body.clientHeight;
	};

	if (window.innerHeight) {
		SeeHeight = window.innerHeight;
	} else if ((document.body) && (document.body.clientHeight)) {
		SeeHeight = document.body.clientHeight;
	}

	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
		SeeHeight = document.documentElement.clientHeight;
	}

	$(".BodyBG").css({
		'position': 'absolute',
		'left': '0px',
		'top': '0px',
		'z-index': '9999',
		'width': '100%',
		'background': '#000',
		opacity: 0.4,
		'width': winWidth + 'px',
		'height': winHeight + 'px'
	});
};

//凡是带有WindowDrag样式的单位都会获得鼠标拖拽效果
$(function() {
	var x, y, i = 1;
	$(".WindowDrag").mouseover(function() { //鼠标悬浮的动作开始↓
		$(this).css("cursor", "move"); //把鼠标的形状换成可移动十字图标
	}).mousedown(function(e) { //鼠标按下的动作开始↓
		if ($(this).attr("ContorlTarget")) {
			var target = $(this).attr("ContorlTarget");
		} else {
			var target = $(this);
		}
		$(target).css({
			"z-index": "999999",
			opacity: 0.8
		}); //把当前的模块设置为最前面
		var offset = $(this).offset(); //获取当前模块的坐标
		x = e.pageX - offset.left; //计算当前模块和当前鼠标的相对位置
		y = e.pageY - offset.top;
		$(target).bind("mousemove",
		function(ev) { //绑定鼠标移动时的动作    
			var _x = ev.pageX - x; //让当前模块跟着鼠标移动
			var _y = ev.pageY - y;
			$(this).css({
				"left": _x,
				"top": _y
			});
		});
	}).mouseup(function() { //鼠标弹起的动作开始↓
		if ($(this).attr("ContorlTarget")) {
			var target = $(this).attr("ContorlTarget");
		} else {
			var target = $(this);
		}
		$(target).unbind("mousemove"); //解绑鼠标移动功能
		$(target).css({
			"z-index": "99999",
			opacity: 1
		}); //还原模块优先级
	}).mouseout(function() { //鼠标移出的动作开始↓
		//		$(target).unbind("mousemove");				//取消当前模块的鼠标移动事件     
		//		$(target).css("z-index", 99999);			//还原模块优先级
	});
});

//凡是引用onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))"方法的单位在鼠标放上去的时候都会出现悬浮框并且跟随鼠标移动(如果他自己有ControlTarget或者Content的话)
//当鼠标移出的时候消失 注意每个ControlTarget不可相同
function PopupOn(t) {
	//初始化用到的变量
	var x, y = 1;
	//如果对象有Content属性就把Content的内容加载到基础浮窗中(BasePopup)
	//是否有Content等这些判断只影响获取的被控制目标(target)
	//带有Content属性的对象触发的浮窗为js生成 当然 样式用了style标签内的level1选择器 这样方便修改 只要用更高一级的选择器即可覆盖这些默认效果 方便个性化样式
	if (t.attr("Content")) {
		if ($(".BasePopup").length < 1) {
			$("body").append("<style>.BasePopup{padding:5px; border:solid 1px #DEDEDE; background:#F5F5F5; color:#666666;}</style><div class='BasePopup' style='display:none;'>&#160;</div>");
		}
		var con = t.attr("Content");
		var target = $(".BasePopup");
		$(".BasePopup").html(con);
	}
	//如果没有Content属性就需要控制已有的悬浮窗显示和隐藏(ControlTarget内的对象)
	else if (t.attr("ControlTarget")) {
		var target = t.attr("ControlTarget");
	}
	//成功根据触发者的属性获得所需的浮窗对象之后开始为触发者绑定事件使浮窗在触发者上时跟随鼠标并且显示
	//如果触发者没有Offset属性则默认浮窗显示在鼠标右上10像素处 如果写错Offset属性也会使用默认方式显示浮窗
	//反之Offset的属性规则是"位置,x轴偏移量,y轴偏移量"例如Offset="tr,10,-100"意思就是窗口再鼠标上方右侧10像素位置的基础上再向右10像素向上100像素
	if ($(target).attr("Offset")) {
		var Offset = $(target).attr("Offset"); //如果悬浮窗上有偏移属性(Offset),就会按照该偏移量来重置悬浮窗的显示和跟随位置
	} else {
		var Offset = t.attr("Offset"); //如果悬浮窗上没有偏移属性(Offset),就会找触发者身上是否有偏移属性(Offset),如果有就是用它
	}
	if ($(target).attr("BoxStyle")) {
		var BoxStyle = $(target).attr("BoxStyle"); //如果悬浮窗上有偏移属性(Offset),就会按照该偏移量来重置悬浮窗的显示和跟随位置
	} else {
		var BoxStyle = t.attr("BoxStyle"); //如果悬浮窗上没有偏移属性(Offset),就会找触发者身上是否有偏移属性(Offset),如果有就是用它
	}
	if (BoxStyle) {
		$(target).attr("style", BoxStyle);
	}
	t.bind("mousemove",
	function(ev) {
		if (Offset && Offset.indexOf(",") != -1 && Offset.split(",").length >= 3) {
			var tarw = Number($(target).width());
			var tarh = Number($(target).height());
			var offsetAspect = Offset.split(',')[0];
			var offsetX = Number(Offset.split(',')[1]);
			var offsetY = Number(Offset.split(',')[2]);
			if (offsetAspect == "tl") {
				var x = ev.pageX - 10 - tarw + offsetX;
				var y = ev.pageY - 20 - tarh + offsetY;
			} else if (offsetAspect == "tr") {
				var x = ev.pageX + 10 + offsetX;
				var y = ev.pageY - 20 - tarh + offsetY;
			} else if (offsetAspect == "bl") {
				var x = ev.pageX - 10 - tarw + offsetX;
				var y = ev.pageY + 20 + offsetY;
			} else {
				var x = ev.pageX + 10 + offsetX;
				var y = ev.pageY + 20 + offsetY;
			}
		} else {
			var x = ev.pageX + 10;
			var y = ev.pageY - 20 - $(target).height();
		}
		$(target).css({
			"position": "absolute",
			"z-index": "9999",
			"left": x,
			"top": y,
			"display": "block"
		});
	});
};

function PopupOff(t) {
	if (t.attr("Content")) {
		var target = $(".BasePopup");
	} else {
		var target = t.attr("ControlTarget");
	}
	t.unbind("mousemove");
	$(target).css("display", "none");
};

//基础tab样式 给某ul,ol,dl赋予BaseTab样式即可让其内部的li,dt,dd点击时候去掉兄弟姐妹的.selected并给自己加上.selected
$(function() {
	$(".BaseTab").children().click(function() {
		var ControlTarget = $(this).attr("ControlTarget");
		$(this).siblings().removeClass("selected").end().addClass("selected");
		$(ControlTarget).siblings().removeClass("selected").end().addClass("selected");
	});
});
function BaseTab(t) {
	var ControlTarget = t.attr("ControlTarget");
	t.siblings().removeClass("selected").end().addClass("selected");
	$(ControlTarget).siblings().removeClass("selected").end().addClass("selected");
};

//给.CopyToClipboard赋予点击后复制当前网页URL至剪贴板的功能
$(document).ready(function() {
	$(".CopyToClipboard").click(function() {
		var URLcontent = location.href;
		//判断Ie
		if (document.all) {
			window.clipboardData.setData('text', URLcontent);
			alert("已成功复制方案链接至剪贴板！");
		} else {
			alert("您的浏览器不支持剪贴板操作，请换用IE或自行复制。");
		}
	});
});

//切换拥有Switcher样式的ControlTarget的class(class名为Switch)
$(function() {
	$(".Switcher").click(function() {
		var ControlTarget = $(this).attr("ControlTarget");
		$(ControlTarget).toggleClass("Switch");
	});
});
function Switch(n) {
	if (n.attr("ControlTarget")) {
		$(n.attr("ControlTarget")).toggleClass("Switch");
	} else {
		n.toggleClass("Switch");
	}
}

//如果是ie6的话 引用SelectKiller的元素mouseover时会隐藏页面内所有select等待mouseout后再显示
if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
	$(function() {
		$(".SelectKiller").hover(function() {
			$("select").css("display", "none");
		},
		function() {
			$("select").css("display", "");
		});
	});
}
//所有命名为MaxHeight的元素设置了MaxHeight值之后,如果高度超过这个值,则会超出隐藏
//例:<div class="MaxHeight" MaxHeight="80">最高80px</div>
$(function() {
	var HeightPX = $(".MaxHeight").attr("MaxHeight");
	if ($(".MaxHeight").lenght > 0) {
		if ($(".MaxHeight").height() >= HeightPX) {
			$(".MaxHeight").css({
				height: HeightPX + "px",
				overflow: "hidden"
			});
		}
	}
});

function BtnOver(n) {
	n.addClass("BtnOver");
}
function BtnOut(n) {
	n.removeClass("BtnOver").removeClass("BtnDown");
}
function BtnDown(n) {
	n.addClass("BtnDown");
}
function BtnUp(n) {
	n.removeClass("BtnDown");
}

$(function() {
	$(".BaseBtn")
	//拿到.BaseButton,鼠标悬停加ButtonOver,移出后移除ButtonOver,被按下时加ButtonDown,弹起后去掉ButtonDown
	.hover(function() {
		$(this).addClass("BtnOver");
	},
	function() {
		$(this).removeClass("BtnOver");
	}).mousedown(function() {
		$(this).addClass("BtnDown");
	}).mouseup(function() {
		$(this).removeClass("BtnDown");
	});
});

//CheckBox
function CheckBox(n) {
	if (n.attr("ControlTarget")) {
		$(n.attr("ControlTarget")).toggleClass("Switch");
	} else {
		n.toggleClass("Switch");
	}
}

//RadioButton
function RadioButton(n) {
	if (n.is("dt")) {
		n.parent().siblings().children().removeClass("selected");
		n.addClass("selected").siblings().addClass("selected");
	} else if (n.is("dl")) {
		n.siblings().children().removeClass("selected");
		n.children().addClass("selected");
	}
}

//调用支付宝登录方法
function zfbLogin() {
	$.ajax({
		url: 'http://users.ruyicai.com/function/unitedLogin!alipayHandyLogin',
		type: "POST",
		//数据发送方式
		dataType: 'html',
		error: function() {
			alert("error");
		},
		success: function(data) {

			window.location.href = data;
			//window.open(data);
		}
	});

}

//调用QQ登录方法
function qqUnitedLogin() {
	$.ajax({
		url: 'http://users.ruyicai.com/function/unitedLogin!qqUnitedHandlyLogin',
		type: "POST",
		//数据发送方式
		dataType: 'html',
		error: function() {
			alert("error");
		},
		success: function(data) {

			window.location.href = data;
			//window.open(data);
		}
	});

}
//开奖详情页面点击期号查询信息
function getdrawalotteryFTInfo(divID) {
	var lotno = $("#lotno").val();
	var batchcode = $("#" + divID).val();
	window.location.href = '/rchlw/function/ryc_select_newkj!getOnelotteryinfo?lotno=' + lotno + "&batchcode=" + batchcode;

}
//开奖详情页面点击期号查询信息
function getdrawalotteryGPInfo(divID) {
	var lotno = $("#lotno").val();
	var time = $("#" + divID).val();
	window.location.href = '/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=' + lotno + "&time=" + time;

}
//开奖详情页面点击期号查询信息
function getdrawalotteryGPInfoM(issnum, divID) {
	var lotno = $("#lotno").val();
	var time = $("#" + divID).val();
	window.location.href = '/rchlw/function/ryc_select_newkj!drawalotteryInfo?lotno=' + lotno + "&issu=" + issnum + "&time=" + time;
}
//足彩开奖详情页面点击期号查询信息
function getdrawalotteryZCInfo(divID){
	var lotno = $("#lotno").val();
	var batchcode = $("#" + divID).val();
	window.location.href = '/rchlw/function/ryc_select_newkj!drawalotteryZc?lotno=' + lotno + "&batchcode=" + batchcode;;
}
//竞彩开奖详情页面点击日期查询信息
function getdrawalotteryJCInfo(divID) {
	var time = $("#" + divID).val();
	window.location.href = '/rchlw/function/ryc_select_newkj!drawalotteryJc?type=1&date=' + time;

}
//-----------------开奖详情js-------------------------



//根据制定的参数获取相应接口的数据 (下标，属性名称，属性值，其他参数条件)
function getMoreObjForNameAndValueToKey(key) {
	var orderid = "orderid=" + GetQueryString("orderid");
	reHtml(key, orderid, false, '');
}
//新闻页面使用
//更新新闻的点击数
function update_clickCount(id) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/findtuser2!updateClickCount?id=" + id,
		async: false,
		dataType: 'text',
		//接受数据格式
		success: function(msg) {
			//alert(msg);
		}
	});
}
//获取新闻的点击数
function getClickCount(id) {
	$.ajax({
		type: "POST",
		url: "/rchlw/function/findtuser2!getClickCount?id=" + id,
		async: false,
		dataType: 'text',
		//接受数据格式
		success: function(msg) {
			//alert(msg);
			$("#clickCount").text(msg);
		}
	});
}
