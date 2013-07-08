//以下为胜负彩的js方法，checkZhuma为基本的注码校验和计算方法，每次有操作的时候，都会调用该方法

//当勾选和取消勾选的时候，全部改变按钮的颜色（样式）
function changeColorCheckbox(stat) {
	if ($("#checkbox_" + stat).attr("checked")) {
		$("#ball3_" + stat).removeClass("quan_3");
		$("#ball0_" + stat).removeClass("quan_3");
		$("#ball1_" + stat).removeClass("quan_3");
		$("#ball3_" + stat).addClass("quan_1");
		$("#ball0_" + stat).addClass("quan_1");
		$("#ball1_" + stat).addClass("quan_1");
	} else {
		$("#ball3_" + stat).removeClass("quan_1");
		$("#ball0_" + stat).removeClass("quan_1");
		$("#ball1_" + stat).removeClass("quan_1");
		$("#ball3_" + stat).addClass("quan_3");
		$("#ball0_" + stat).addClass("quan_3");
		$("#ball1_" + stat).addClass("quan_3");
	}
	checkZhuma();
}

//当点击按钮的时候，改变按钮的颜色（样式），同时检查按钮是否全部选定，相应的改变checkbox的勾选状态
function checkColorButton(type, stat) {
	if ($("#ball" + type + "_" + stat).attr("class") == "quan_1") {
		$("#ball" + type + "_" + stat).removeClass("quan_1").addClass("quan_3");
	} else if ($("#ball" + type + "_" + stat).attr("class") == "quan_3") {
		$("#ball" + type + "_" + stat).removeClass("quan_3").addClass("quan_1");
	}

	if ($("#ball0" + "_" + stat).attr("class") == "quan_1" && $("#ball1" + "_" + stat).attr("class") == "quan_1" && $("#ball3" + "_" + stat).attr("class") == "quan_1") {
		$("#checkbox_" + stat).attr("checked", true);
	} else {
		$("#checkbox_" + stat).attr("checked", false);
	}

	checkZhuma();

}

//清除所有选中按钮
function clean() {
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	checkZhuma();
}
//加载页面时的清空操作
function cleanReady14() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$("#xuanhaokuang").hide();
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");
}

//单个全选
function selectSingleAll14(num) {
	var total = 0;
	for (var i = 1; i <= 14; i++) {
		if ($("#ball" + num + "_" + i).attr("class") == "quan_1") {
			total = total + 1;
		}
	}
	if (total == 14) {
		for (var i = 1; i <= 14; i++) {
			$("#ball" + num + "_" + i).removeClass("quan_1").addClass("quan_3");
		}
	} else {
		for (var i = 1; i <= 14; i++) {
			$("#ball" + num + "_" + i).removeClass("quan_3").addClass("quan_1");
		}
	}

	for (var i = 1; i <= 14; i++) {
		if ($("#ball0_" + i).attr("class") == "quan_1" && $("#ball1_" + i).attr("class") == "quan_1" && $("#ball3_" + i).attr("class") == "quan_1") {
			$("#checkbox_" + i).attr("checked", true);
		} else {
			$("#checkbox_" + i).attr("checked", false)
		}
	}

	checkZhuma();
}

//checkbox全选
function selectCheckboxAll14() {
	var total = 0;
	for (var i = 1; i <= 14; i++) {
		if ($("#checkbox_" + i).attr("checked")) {
			total = total + 1;
		}
	}

	if (total == 14) {
		$(".quan_1").removeClass("quan_1").addClass("quan_3");
		$("input[name='checkbox']").attr("checked", false);
	} else {
		$(".quan_3").removeClass("quan_3").addClass("quan_1");
		$("input[name='checkbox']").attr("checked", true);
	}

	checkZhuma();
}

//注码校验和计算注数
//计算注数的方法是每位的长度相乘
function checkZhuma() {
	var reg = /^((013|01|03|13|[013])[,]){14}$/;
	var reg2 = /^[0-9]*[1-9][0-9]*$/; //正则 正整数
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	var beishu2 = $("#tb_Multiple_standrad").attr("value");
	$("#tb_Multiple").attr("value", beishu2);
	if (!reg2.exec(beishu2)) {
		$("#tb_Multiple").attr("value", "1");
		$("#tb_Multiple_standrad").attr("value", "1");
		$("#tb_Multiple_standrad").select();
	}
	if (Number(beishu2)>10000) {
		$("#tb_Multiple").attr("value", "10000");
		$("#tb_Multiple_standrad").attr("value", "10000");
		$("#tb_Multiple_standrad").select();
	}
	var zhuma = "";

	for (var i = 1; i <= 14; i++) {
		if ($("#ball0_" + i).attr("class") == "quan_1") {
			zhuma = zhuma + "0";
		}
		if ($("#ball1_" + i).attr("class") == "quan_1") {
			zhuma = zhuma + "1";
		}
		if ($("#ball3_" + i).attr("class") == "quan_1") {
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
		var beishu = $("#tb_Multiple_standrad").attr("value");
		$("#tb_Multiple").attr("value", beishu);
		if (reg2.exec(beishu)) {
			money = Number(beishu) * Number(zhushu) * 2;
		}

		$("#two").text(two);
		$("#all").text(all);
		$("#lab_Num").text(zhushu);
		$("#lab_Num_standrad").text(zhushu);
		$("#investField").text(money);
		$("#investField_standrad").text(money);

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

//以下为四场的js方法，checkZhumaSichang为基本的注码校验和计算方法，每次有操作的时候，都会调用该方法

//当点击按钮的时候，改变按钮的颜色（样式），同时检查按钮是否全部选定，相应的改变checkbox的勾选状态
function changeColorButtonSichang(type, stat, clazz) {
	if ($("#ball" + type + "_" + stat + "_" + clazz).attr("class") == "quan_1") {
		$("#ball" + type + "_" + stat + "_" + clazz).removeClass("quan_1").addClass("quan_3");
	} else if ($("#ball" + type + "_" + stat + "_" + clazz).attr("class") == "quan_3") {
		$("#ball" + type + "_" + stat + "_" + clazz).removeClass("quan_3").addClass("quan_1");
	}

	if ($("#ball0" + "_" + stat + "_" + clazz).attr("class") == "quan_1" && $("#ball1" + "_" + stat + "_" + clazz).attr("class") == "quan_1" && $("#ball3" + "_" + stat + "_" + clazz).attr("class") == "quan_1" && $("#ball2" + "_" + stat + "_" + clazz).attr("class") == "quan_1") {
		$("#checkbox_" + stat + "_" + clazz).attr("checked", true);
	} else {
		$("#checkbox_" + stat + "_" + clazz).attr("checked", false);
	}
	checkZhumaSichang();
}

//当勾选和取消勾选的时候，全部改变按钮的颜色（样式）
function changeColorCheckboxSichang(stat, clazz) {
	if ($("#checkbox_" + stat + "_" + clazz).attr("checked")) {
		$("#ball3_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball0_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball1_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball2_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball3_" + stat + "_" + clazz).addClass("quan_1");
		$("#ball0_" + stat + "_" + clazz).addClass("quan_1");
		$("#ball1_" + stat + "_" + clazz).addClass("quan_1");
		$("#ball2_" + stat + "_" + clazz).addClass("quan_1");
	} else {
		$("#ball3_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball0_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball1_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball2_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball3_" + stat + "_" + clazz).addClass("quan_3");
		$("#ball0_" + stat + "_" + clazz).addClass("quan_3");
		$("#ball1_" + stat + "_" + clazz).addClass("quan_3");
		$("#ball2_" + stat + "_" + clazz).addClass("quan_3");
	}
	checkZhumaSichang();
}

//清除所有选中按钮
function cleanSichang() {
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	checkZhumaSichang();
}

//加载页面时的清空操作
function cleanReady4() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$("#xuanhaokuang").hide();
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");

}

//单个全选
function selectSingleAll4(num) {
	var total = 0;
	for (var i = 1; i <= 4; i++) {
		if ($("#ball" + num + "_" + i + "_1").attr("class") == "quan_1") {
			total = total + 1;
		}
		if ($("#ball" + num + "_" + i + "_2").attr("class") == "quan_1") {
			total = total + 1;
		}
	}
	if (total == 8) {
		for (var i = 1; i <= 4; i++) {
			$("#ball" + num + "_" + i + "_1").removeClass("quan_1").addClass("quan_3");
			$("#ball" + num + "_" + i + "_2").removeClass("quan_1").addClass("quan_3");
		}
	} else {
		for (var i = 1; i <= 4; i++) {
			$("#ball" + num + "_" + i + "_1").removeClass("quan_3").addClass("quan_1");
			$("#ball" + num + "_" + i + "_2").removeClass("quan_3").addClass("quan_1");
		}
	}

	for (var i = 1; i <= 4; i++) {
		if ($("#ball0_" + i + "_1").attr("class") == "quan_1" && $("#ball1_" + i + "_1").attr("class") == "quan_1" && $("#ball2_" + i + "_1").attr("class") == "quan_1" && $("#ball3_" + i + "_1").attr("class") == "quan_1") {
			$("#checkbox_" + i + "_1").attr("checked", true);
		} else {
			$("#checkbox_" + i + "_1").attr("checked", false);
		}
		if ($("#ball0_" + i + "_2").attr("class") == "quan_1" && $("#ball1_" + i + "_2").attr("class") == "quan_1" && $("#ball2_" + i + "_2").attr("class") == "quan_1" && $("#ball3_" + i + "_2").attr("class") == "quan_1") {
			$("#checkbox_" + i + "_2").attr("checked", true);
		} else {
			$("#checkbox_" + i + "_2").attr("checked", false);
		}

	}
	checkZhumaSichang();
}

//checkbox全选
function selectCheckboxAll4() {
	var total = 0;
	for (var i = 1; i <= 4; i++) {
		if ($("#checkbox_" + i + "_1").attr("checked")) {
			total = total + 1;
		}
		if ($("#checkbox_" + i + "_2").attr("checked")) {
			total = total + 1;
		}
	}

	if (total == 8) {
		$(".quan_1").removeClass("quan_1").addClass("quan_3");
		$("input[name='checkbox']").attr("checked", false);
	} else {
		$(".quan_3").removeClass("quan_3").addClass("quan_1");
		$("input[name='checkbox']").attr("checked", true);
	}

	checkZhumaSichang();
}

//校验四场的注码格式和计算注数
//注数计算方法为每位注码长度相乘
function checkZhumaSichang() {
	var reg = /^(([0123]|0[123]|1[23]|23|01[23]|123|023|0123)[,]){8}$/;
	var reg2 =  /^[0-9]*[1-9][0-9]*$/;
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();

	var beishu2 = $("#tb_Multiple_standrad").attr("value");
	$("#tb_Multiple").attr("value", beishu2);
	if (!reg2.exec(beishu2)) {
		$("#tb_Multiple").attr("value", "1");
		$("#tb_Multiple_standrad").attr("value", "1");
		$("#tb_Multiple_standrad").select();
	}
	if (Number(beishu2)>10000) {
		$("#tb_Multiple").attr("value", "10000");
		$("#tb_Multiple_standrad").attr("value", "10000");
		$("#tb_Multiple_standrad").select();
	}
	var zhuma = "";

	for (var i = 1; i <= 4; i++) {
		for (var j = 1; j <= 2; j++) {
			if ($("#ball0_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "0";
			}
			if ($("#ball1_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "1";
			}
			if ($("#ball2_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "2";
			}
			if ($("#ball3_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "3";
			}
			zhuma = zhuma + ',';
		}
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
			} else if (zhumas[i].length == 4) {
				all = all + 1;
			}
		}
		var money = "";
		var beishu = $("#tb_Multiple_standrad").attr("value");
		$("#tb_Multiple").attr("value", beishu);
		if (reg2.exec(beishu)) {
			money = Number(beishu) * Number(zhushu) * 2;
		}

		$("#two").text(two);
		$("#all").text(all);
		$("#lab_Num").text(zhushu);
		$("#lab_Num_standrad").text(zhushu);
		$("#investField").text(money);
		$("#investField_standrad").text(money);

		var lotteryListSelect = $("#list_LotteryNumber");
		var opt;
		if (zhushu == 1) {
			opt = new Option(zhuma, "180" + zhuma);
			opt.setAttribute('wangFang', "0");
			add_codes(zhuma, "180" + zhuma);
		} else if (zhushu > 1) {
			opt = new Option( + zhuma, "181" + zhuma);
			opt.setAttribute('wangFang', "1");
			add_codes(zhuma, "181" + zhuma);
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

//以下为六场半的js方法，checkZhumaLiuchang为基本的注码校验和计算方法，每次有操作的时候，都会调用该方法

//当点击按钮的时候，改变按钮的颜色（样式），同时检查按钮是否全部选定，相应的改变checkbox的勾选状态
function changeColorButtonLiuchang(type, stat, clazz) {
	if ($("#ball" + type + "_" + stat + "_" + clazz).attr("class") == "quan_1") {
		$("#ball" + type + "_" + stat + "_" + clazz).removeClass("quan_1").addClass("quan_3");
	} else if ($("#ball" + type + "_" + stat + "_" + clazz).attr("class") == "quan_3") {
		$("#ball" + type + "_" + stat + "_" + clazz).removeClass("quan_3").addClass("quan_1");
	}

	if ($("#ball0" + "_" + stat + "_" + clazz).attr("class") == "quan_1" && $("#ball1" + "_" + stat + "_" + clazz).attr("class") == "quan_1" && $("#ball3" + "_" + stat + "_" + clazz).attr("class") == "quan_1") {
		$("#checkbox_" + stat + "_" + clazz).attr("checked", true);
	} else {
		$("#checkbox_" + stat + "_" + clazz).attr("checked", false);
	}

	checkZhumaLiuchang();
}

//当勾选和取消勾选的时候，全部改变按钮的颜色（样式）
function changeColorCheckboxLiuchang(stat, clazz) {
	if ($("#checkbox_" + stat + "_" + clazz).attr("checked")) {
		$("#ball3_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball0_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball1_" + stat + "_" + clazz).removeClass("quan_3");
		$("#ball3_" + stat + "_" + clazz).addClass("quan_1");
		$("#ball0_" + stat + "_" + clazz).addClass("quan_1");
		$("#ball1_" + stat + "_" + clazz).addClass("quan_1");
	} else {
		$("#ball3_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball0_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball1_" + stat + "_" + clazz).removeClass("quan_1");
		$("#ball3_" + stat + "_" + clazz).addClass("quan_3");
		$("#ball0_" + stat + "_" + clazz).addClass("quan_3");
		$("#ball1_" + stat + "_" + clazz).addClass("quan_3");
	}
	checkZhumaLiuchang();
}

//清除所有选中按钮
function cleanLiuchang() {
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	checkZhumaLiuchang();
}

//加载页面时的清空操作
function cleanReady6() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$("#xuanhaokuang").hide();
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");

}

function selectSingleAll6(num) {
	var total = 0;
	for (var i = 1; i <= 6; i++) {
		if ($("#ball" + num + "_" + i + "_1").attr("class") == "quan_1") {
			total = total + 1;
		}
		if ($("#ball" + num + "_" + i + "_2").attr("class") == "quan_1") {
			total = total + 1;
		}
	}
	if (total == 12) {
		for (var i = 1; i <= 6; i++) {
			$("#ball" + num + "_" + i + "_1").removeClass("quan_1").addClass("quan_3");
			$("#ball" + num + "_" + i + "_2").removeClass("quan_1").addClass("quan_3");
		}
	} else {
		for (var i = 1; i <= 6; i++) {
			$("#ball" + num + "_" + i + "_1").removeClass("quan_3").addClass("quan_1");
			$("#ball" + num + "_" + i + "_2").removeClass("quan_3").addClass("quan_1");
		}
	}

	for (var i = 1; i <= 6; i++) {
		if ($("#ball0_" + i + "_1").attr("class") == "quan_1" && $("#ball1_" + i + "_1").attr("class") == "quan_1" && $("#ball3_" + i + "_1").attr("class") == "quan_1") {
			$("#checkbox_" + i + "_1").attr("checked", true);
		} else {
			$("#checkbox_" + i + "_1").attr("checked", false);
		}
		if ($("#ball0_" + i + "_2").attr("class") == "quan_1" && $("#ball1_" + i + "_2").attr("class") == "quan_1" && $("#ball3_" + i + "_2").attr("class") == "quan_1") {
			$("#checkbox_" + i + "_2").attr("checked", true);
		} else {
			$("#checkbox_" + i + "_2").attr("checked", false);
		}

	}
	checkZhumaLiuchang();
}

function selectCheckboxAll6() {
	var total = 0;
	for (var i = 1; i <= 6; i++) {
		if ($("#checkbox_" + i + "_1").attr("checked")) {
			total = total + 1;
		}
		if ($("#checkbox_" + i + "_2").attr("checked")) {
			total = total + 1;
		}
	}

	if (total == 12) {
		$(".quan_1").removeClass("quan_1").addClass("quan_3");
		$("input[name='checkbox']").attr("checked", false);
	} else {
		$(".quan_3").removeClass("quan_3").addClass("quan_1");
		$("input[name='checkbox']").attr("checked", true);
	}
	checkZhumaLiuchang();
}

//校验六场注码和注数计算
//注数计算方法为每位注码长度相乘
function checkZhumaLiuchang() {
	var reg = /^((013|01|03|13|[013])[,]){12}$/;
	var reg2 =  /^[0-9]*[1-9][0-9]*$/;
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	var beishu2 = $("#tb_Multiple_standrad").attr("value");
	$("#tb_Multiple").attr("value", beishu2);
	if (!reg2.exec(beishu2)) {
		$("#tb_Multiple").attr("value", "1");
		$("#tb_Multiple_standrad").attr("value", "1");
		$("#tb_Multiple_standrad").select();
	}
	
	if (Number(beishu2)>10000) {
		$("#tb_Multiple").attr("value", "10000");
		$("#tb_Multiple_standrad").attr("value", "10000");
		$("#tb_Multiple_standrad").select();
	}
	var zhuma = "";

	for (var i = 1; i <= 6; i++) {
		for (var j = 1; j <= 2; j++) {
			if ($("#ball0_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "0";
			}
			if ($("#ball1_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "1";
			}
			if ($("#ball3_" + i + "_" + j).attr("class") == "quan_1") {
				zhuma = zhuma + "3";
			}
			zhuma = zhuma + ',';
		}
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
		var beishu = $("#tb_Multiple_standrad").attr("value");
		$("#tb_Multiple").attr("value", beishu);
		if (reg2.exec(beishu)) {
			money = Number(beishu) * Number(zhushu) * 2;
		}

		$("#two").text(two);
		$("#all").text(all);
		$("#lab_Num").text(zhushu);
		$("#lab_Num_standrad").text(zhushu);
		$("#investField").text(money);
		$("#investField_standrad").text(money);

		var lotteryListSelect = $("#list_LotteryNumber");
		var opt;
		if (zhushu == 1) {
			opt = new Option(zhuma, "160" + zhuma);
			opt.setAttribute('wangFang', "0");
			add_codes(zhuma, "160" + zhuma);
		} else if (zhushu > 1) {
			opt = new Option(zhuma, "161" + zhuma);
			opt.setAttribute('wangFang', "1");
			add_codes(zhuma, "161" + zhuma);
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

//以下为任九场的js方法，checkZhumaRenjiu为基本的注码校验和计算方法，每次有操作的时候，都会调用该方法
function changeColorCheckboxRenjiu(stat) {
	checkZhumaRenjiu();
}

//当点击按钮的时候，改变按钮的颜色（样式），同时检查按钮是否全部选定，相应的改变checkbox的勾选状态
function checkColorButtonRenjiu(type, stat) {
	if ($("#ball" + type + "_" + stat).attr("class") == "quan_1") {
		$("#ball" + type + "_" + stat).removeClass("quan_1").addClass("quan_3");
	} else if ($("#ball" + type + "_" + stat).attr("class") == "quan_3") {
		$("#ball" + type + "_" + stat).removeClass("quan_3").addClass("quan_1");
	}

	if ($("#ball0" + "_" + stat).attr("class") == "quan_1" || $("#ball1" + "_" + stat).attr("class") == "quan_1" || $("#ball3" + "_" + stat).attr("class") == "quan_1") {
		$("#checkbox_" + stat).attr("disabled", false);
	} else {
		$("#checkbox_" + stat).attr("disabled", true);
	}
	checkZhumaRenjiu();

}

//清除所有选中的按钮
function cleanRenjiu() {
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("input[name='checkbox']").attr("disabled", true);
	checkZhumaRenjiu();
}

//加载页面时的清空操作
function cleanReady9() {
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$("#xuanhaokuang").hide();
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("input[name='checkbox']").attr("disabled", true);
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");
}

//单个全选
function selectSingleAll9(num) {
	var total = 0;
	for (var i = 1; i <= 14; i++) {
		if ($("#ball" + num + "_" + i).attr("class") == "quan_1") {
			total = total + 1;
		}
	}
	if (total == 14) {
		for (var i = 1; i <= 14; i++) {
			$("#ball" + num + "_" + i).removeClass("quan_1").addClass("quan_3");
		}
	} else {
		for (var i = 1; i <= 14; i++) {
			$("#ball" + num + "_" + i).removeClass("quan_3").addClass("quan_1");
		}
	}
	for (var i = 1; i <= 14; i++) {
		if ($("#ball0_" + i).attr("class") == "quan_1" || $("#ball1_" + i).attr("class") == "quan_1" || $("#ball3_" + i).attr("class") == "quan_1") {
			$("#checkbox_" + i).attr("disabled", false);
		} else {
			$("#checkbox_" + i).attr("disabled", true)
		}
	}
	checkZhumaRenjiu();
}

//任九场的注码格式校验和注数计算
//注码计算分为三种情况，普通投注，胆拖和转九
//普通投注的注码计算方法为每位注码长度相乘
//胆拖和转九见下
function checkZhumaRenjiu() {
	var reg2 =  /^[0-9]*[1-9][0-9]*$/;
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();

	var beishu2 = $("#tb_Multiple_standrad").attr("value");
	$("#tb_Multiple").attr("value", beishu2);
	if (!reg2.exec(beishu2)) {
		$("#tb_Multiple").attr("value", "1");
		$("#tb_Multiple_standrad").attr("value", "1");
		$("#tb_Multiple_standrad").select();
	}
	if (Number(beishu2)>10000) {
		$("#tb_Multiple").attr("value", "10000");
		$("#tb_Multiple_standrad").attr("value", "10000");
		$("#tb_Multiple_standrad").select();
	}
	$("#zucai_tishi").text("");
	var danma = "";
	var tuoma = "";
	var danmaSelected = 0;
	var tuomaSelected = 0;

	var one = 0,
	two = 0,
	all = 0,
	flag = 0;
	for (var i = 1; i <= 14; i++) {
		if ($("#checkbox_" + i).attr("disabled") == 'disabled') {
			danma = danma + "#" + ",";
			tuoma = tuoma + "#" + ",";
		} else {
			if ($("#checkbox_" + i).attr("checked") == 'checked') {
				danmaSelected = danmaSelected + 1;
				flag = 0;
				if ($("#ball0_" + i).attr("class") == "quan_1") {
					danma = danma + "0";
					flag = flag + 1;
				}
				if ($("#ball1_" + i).attr("class") == "quan_1") {
					danma = danma + "1";
					flag = flag + 1;
				}
				if ($("#ball3_" + i).attr("class") == "quan_1") {
					danma = danma + "3";
					flag = flag + 1;
				}
				danma = danma + ",";
				tuoma = tuoma + "#" + ",";
				if (flag == 2) {
					two = two + 1;
				} else if (flag == 3) {
					all = all + 1;
				}
			} else {
				tuomaSelected = tuomaSelected + 1;
				flag = 0;
				if ($("#ball0_" + i).attr("class") == "quan_1") {
					tuoma = tuoma + "0";
					flag = flag + 1;
				}
				if ($("#ball1_" + i).attr("class") == "quan_1") {
					tuoma = tuoma + "1";
					flag = flag + 1;
				}
				if ($("#ball3_" + i).attr("class") == "quan_1") {
					tuoma = tuoma + "3";
					flag = flag + 1;
				}
				tuoma = tuoma + ",";
				danma = danma + "#" + ",";
				if (flag == 2) {
					two = two + 1;
				} else if (flag == 3) {
					all = all + 1;
				}
			}
		}

	}

	if (tuomaSelected + danmaSelected >= 9) {

		danma = danma.substring(0, danma.length - 1);
		tuoma = tuoma.substring(0, tuoma.length - 1);
		var zhushu = 1;
		if (danmaSelected == 0) {
			if (tuomaSelected == 9) {
				zhushu = standardRenjiu(tuoma);
			} else {
				zhushu = convertNine(tuoma);
				if (tuomaSelected == 10) {
					$("#zucai_tishi").text(decodeURI(EncodeUtf8("10转9最高可中10注一等奖")));
				} else if (tuomaSelected == 11) {
					$("#zucai_tishi").text(decodeURI(EncodeUtf8("11转9最高可中55注一等奖")));
				} else if (tuomaSelected == 12) {
					$("#zucai_tishi").text(decodeURI(EncodeUtf8("12转9最高可中220注一等奖")));
				} else if (tuomaSelected == 13) {
					$("#zucai_tishi").text(decodeURI(EncodeUtf8("13转9最高可中715注一等奖")));
				} else if (tuomaSelected == 14) {
					$("#zucai_tishi").text(decodeURI(EncodeUtf8("14转9最高可中2002注一等奖")));
				}

			}
		} else {
			zhushu = dantuo(danma, tuoma);
		}
		var money = "";
		var beishu = $("#tb_Multiple_standrad").attr("value");
		$("#tb_Multiple").attr("value", beishu);
		if (reg2.exec(beishu)) {
			money = Number(beishu) * Number(zhushu) * 2;
		}

		$("#two").text(two);
		$("#all").text(all);
		$("#lab_Num").text(zhushu);
		$("#lab_Num_standrad").text(zhushu);
		$("#investField").text(money);
		$("#investField_standrad").text(money);

		var lotteryListSelect = $("#list_LotteryNumber");
		var zhuma;
		if (danmaSelected == 0) {
			zhuma = tuoma;
		} else {
			zhuma = danma + "$" + tuoma;
		}
		var opt;
		if (zhuma.indexOf("$") > -1) {
			opt = new Option(zhuma, "192" + zhuma);
			opt.setAttribute('wangFang', "2");
			add_codes(zhuma, "192" + zhuma);
		} else {
			if (zhushu == 1) {
				opt = new Option(zhuma, "190" + zhuma);
				opt.setAttribute('wangFang', "0");
				add_codes(zhuma, "190" + zhuma);
			} else {
				opt = new Option(zhuma, "191" + zhuma);
				opt.setAttribute('wangFang', "1");
				add_codes(zhuma, "191" + zhuma);
			}
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

//基本计算

//阶乘
function multiplyByStep(m, n) {
	if (m < 0 || n < 0) {
		return - 1;
	}
	var result = 1;

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

//幂运算
function exp(d, z) {
	var result = 1;
	for (var i = 0; i < z; i++) {
		result = result * d;
	}
	return result;
}

//组合公式
function nchoosek(n, k) {
	if (n <= 0 || k < 0 || n < k) {
		return - 1;
	}
	if (k == 0 || n == k) {
		return 1;
	}
	if (k > n / 2) {
		k = n - k;
	}
	var result = multiplyByStep(n, n - k + 1) / multiplyByStep(k, 1);
	return result;
}

//转九计算
//选出全部的能组成任九场的注码，计算注数累加之和
function convertNine(betcode) {
	var z1 = 0,
	z2 = 0,
	z3 = 0;
	var zhumas = new Array();
	zhumas = betcode.split(",");
	for (var i = 0; i < zhumas.length; i++) {
		if (! (zhumas[i] == "#")) {
			if (zhumas[i].length == 1) {
				z1 = z1 + 1;
			} else if (zhumas[i].length == 2) {
				z2 = z2 + 1;
			} else if (zhumas[i].length == 3) {
				z3 = z3 + 1;
			}
		}
	}

	var result = 0;
	for (var i = 0; i <= z1; i++) {
		for (var j = 0; j <= z2; j++) {
			var k = 9 - i - j;
			if (k <= z3 && k >= 0) {
				var nk1, nk2, nk3, exp1, exp2;
				nk1 = (z1 == 0 ? 1 : nchoosek(z1, i)); //
				nk2 = (z2 == 0 ? 1 : nchoosek(z2, j));
				nk3 = (z3 == 0 ? 1 : nchoosek(z3, k));
				exp1 = exp(2, j);
				exp2 = exp(3, k);
				result = result + nk1 * nk2 * nk3 * exp1 * exp2;
			}
		}
	}
	return result;
}

//胆拖计算
//胆码全部使用，从托码中选择对应的个数（使之与胆码能组成任就格式的注码）的全部可能，计算注数之和
function dantuo(danma, tuoma) {
	var dtotal = 0,
	d2 = 0,
	d3 = 0,
	t1 = 0,
	t2 = 0,
	t3 = 0,
	choose = 0;
	var danmas = new Array();
	danmas = danma.split(",");
	for (var i = 0; i < danmas.length; i++) {
		if (! (danmas[i] == "#")) {
			dtotal = dtotal + 1;
			if (danmas[i].length == 2) {
				d2 = d2 + 1;
			} else if (danmas[i].length == 3) {
				d3 = d3 + 1;
			}
		}
	}

	var tuomas = new Array();
	tuomas = tuoma.split(",");
	for (var i = 0; i < tuomas.length; i++) {
		if (! (tuomas[i] == "#")) {
			if (tuomas[i].length == 1) {
				t1 = t1 + 1;
			} else if (tuomas[i].length == 2) {
				t2 = t2 + 1;
			} else if (tuomas[i].length == 3) {
				t3 = t3 + 1;
			}
		}
	}
	choose = 9 - dtotal;
	var m = exp(2, d2);
	var n = exp(3, d3);
	var result = 0;
	for (var i = 0; i <= t1; i++) {
		for (var j = 0; j <= t2; j++) {
			var k = choose - i - j;
			if (k <= t3 && k >= 0) {
				var nk1, nk2, nk3, exp1, exp2;
				nk1 = (t1 == 0 ? 1 : nchoosek(t1, i)); //
				nk2 = (t2 == 0 ? 1 : nchoosek(t2, j));
				nk3 = (t3 == 0 ? 1 : nchoosek(t3, k));
				exp1 = exp(2, j);
				exp2 = exp(3, k);
				result = result + nk1 * nk2 * nk3 * exp1 * exp2;
			}
		}
	}
	if (m > 0) {
		result = result * m;
	}
	if (n > 0) {
		result = result * n;
	}
	return result;
}

//任九场普通玩法注数计算，计算方法为每位注码长度相乘
function standardRenjiu(betcode) {
	var betcodes = new Array();
	betcodes = betcode.split(",");
	var betzhushu = 1;
	for (var i = 0; i < betcodes.length; i++) {
		betzhushu = betzhushu * betcodes[i].length;
	}
	return betzhushu;
}

//获取包括当前期的进6场期号
function getIssueByLotNo(lotno) {
	$.ajax({
		type: "GET",
		url: "/rchlw/function/zucai!getRecentIssue",
		data: "lotno=" + lotno,
		success: function(msg) {
			var issueArray = new Array();
			issueArray = msg.split(",");
			for (var i = 0; i < issueArray.length; i++) {
				if (issueArray[i].indexOf('^') > -1) {
					var val = issueArray[i].substring(1, issueArray[i].length);
					$("#issueSelect").append("<option style='color:#f00;' value='" + val + "' id='" + val + "'>" + val + "</option>");
				} else {
					$("#issueSelect").append("<option value='" + issueArray[i] + "' id='" + issueArray[i].split("$")[0] + "'>" + issueArray[i].split("$")[0] + "</option>");
				}

			}
		}
	});
}

//根据期号查询对阵和结果，如果是往期，显示结果，并且不能点选，当前期，能投注
function getFldate(lotno, batchData, clickEvent, keyupEvent, flag, index) {
	var recent1 = $("#qihao1").text();
	var recent2 = $("#qihao2").text();
	var recent3 = $("#qihao3").text();
	var recent4 = $("#qihao4").text();

	$("#zucai_danshi").hide();
	$("#zucai_area").show();
	$("#xuanhaokuang").hide();
	$("#zucai_money").show();
	$("#buyways").show();
	if (flag == 1) {
		$("#" + batchData).attr("selected", "selected");
	}
	switchDiv('zucai_area', 'zucai_danshi', lotno);

	if (batchData == recent1 || batchData == recent2 || batchData == recent3|| batchData == recent4) {
		$("#zucai_money").show();
		$("#buyways").show();
		$.ajax({
			type: "GET",
			url: "/rchlw/function/zucai!getFlData",
			data: "lotno=" + lotno + "&batchData=" + batchData,
			success: function(msg) {
				if (index == "") {
					if ($("#issueSelect").val() == $("#qihao3").text()) {
						index = "0";
					} else if ($("#issueSelect").val() == $("#qihao2").text()) {
						index = "1";
					} else if ($("#issueSelect").val() == $("#qihao1").text()) {
						index = "2";
					} else {
						index = "0";
					}
				}
				$.ajax({
					type: "POST",
					url: "/rchlw/function/zucai!getCheckIssue",
					data: "lotNo=" + lotno + "&index=" + Number(index),
					dataType: 'json',
					//接受数据格式
					async: false,
					success: function(msg) {
						$("#endTime").html(msg.endtime);
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
						initTime(); //倒计时使用
					}
				});

				$("#zucai_standrad").remove();
				$("#zucai_area").append(msg);
			}
		});
	} else {
		$("#zucai_money").hide();
		$("#buyways").hide();
		$("#standard").addClass('selected');

		$.ajax({
			type: "GET",
			url: "/rchlw/function/zucai!getFlDataByBatchCode",
			data: "lotno=" + lotno + "&batchData=" + batchData,
			success: function(msg) {
				//判断是否是当前期给index赋值
				if ($("#issueSelect").val() == $("#qihao3").text()) {
					index = "2";
				} else if ($("#issueSelect").val() == $("#qihao2").text()) {
					index = "1";
				} else if ($("#issueSelect").val() == $("#qihao1").text()) {
					index = "0";
				} else {
					index = "0";
				}
				$.ajax({
					type: "POST",
					url: "/rchlw/function/zucai!getCheckIssue",
					data: "lotNo=" + lotno + "&index=" + Number(index),
					dataType: 'json',
					//接受数据格式
					async: false,
					success: function(msg) {
						$("#endTime").html(msg.endtime);
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
						initTime(); //倒计时使用
					}
				});

				$("#zucai_standrad").remove();
				$("#zucai_area").append(msg);
			}
		});
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

			}
			$("#endTime").html(msg[msg.length - 1].endtime);
			$("#sysTime").val(msg[msg.length - 1].sysTime); //获取当前系统时间的毫秒数
			$("#sysTimenow").val(msg[msg.length - 1].sysTimenow);
			if (msg[msg.length - 1].end_time != null && msg[msg.length - 1].end_time != "") {
				var jirikaijiangriqi = msg[msg.length - 1].end_time + "";
				//获取当前日期
				var nowDate = getNowFormatDate("-");
				if (jirikaijiangriqi.indexOf(nowDate) > -1) { //是否当前时间 
					$("#jinrikaijiangId").html("<img src='/rchlw/function/images/jrkaijiang.gif' />");
				}
			}
			initTime(); //倒计时使用
			// $("#sf").addClass("zucai_nowload");
			if ($("#qihao1").html() != "") {
				$("#qh1").css("display", "block");
			}
			if ($("#qihao2").html() != "") {
				$("#qh2").css("display", "block");
			}
		}
	});
}

function switchDiv(show, hide, lotno) {
	var recent = $("#qihao").text();
	var selectIuuse = $("#issueSelect").val();
	if (recent != selectIuuse) {
		return;
	}

	$("#" + hide).hide();
	$("#" + show).show();
	if (show == "zucai_area") {
		$("#erjiwanfa").attr("value", decodeURI(EncodeUtf8("普通投注")));
		$("#xuanhaokuang").hide();
		$("#zucai_money").show();
	}
	if (show == "zucai_danshi") {
		$("#erjiwanfa").attr("value", decodeURI(EncodeUtf8("单式上传")));
		$("#xuanhaokuang").show();
		$("#zucai_money").hide();
	}

	//cleandatas
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	$(".quan_1").removeClass("quan_1").addClass("quan_3");
	$("input[name='checkbox']").attr("checked", false);
	$("#two").text(0);
	$("#all").text(0);
	$("#lab_Num").text(0);
	$("#lab_Num_standrad").text(0);
	$("#investField").text("0");
	$("#investField_standrad").text("0");
	$("#zucai_tishi").text();
	$("#tb_Multiple_standrad").val("1");
	if (lotno == 'T01004') {
		$("input[name='checkbox']").attr("disabled", true);
		$("#zucai_tishi").text("");
	}

}

//绑定事件
function bindEvent(clickEvent, keyupEvent) {
	$("#cleanSelect").bind("click", clickEvent);
	$("#tb_Multiple_standrad").bind("keyup", keyupEvent);
}

//接触绑定
function unbindEvent() {
	$("#cleanSelect").unbind("click").removeAttr("onclick");
	$("#tb_Multiple_standrad").unbind("keyup").removeAttr("onkeyup");

}

function updateMultipleTotalMoney() {
	var zhuShu = Number($("#lab_Num").html());
	initMultiple = Number($("#tb_Multiple").val());
	totalMoney = parseInt(2 * initMultiple * zhuShu);
	$("#investField").html(totalMoney);
	$("#current_money").html(totalMoney);
	if (parseInt(($("#touzhu_money").html()) - ($("#current_money").html())) < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(parseInt(($("#touzhu_money").html()) - ($("#current_money").html())));
	}
}

//切换点击当前期的图标的样式
function changeCheckQiCss(it) {
	$("span").find(".zucai_nowload").removeClass("zucai_nowload");
	it.find("font").addClass("zucai_nowload");
}