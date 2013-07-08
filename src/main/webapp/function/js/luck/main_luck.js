var shengXiaoList = new Array(12); //生肖list
var xingZuoList = new Array(12); //星座list
var xingMingList = new Array(100); //姓名list
var shengRiList = new Array(100); //生日list
var shouJiList = new Array(100); //手机list
var xingZuoMaxNumTemp = 0;
var shengXiaoMaxNumTemp = 0;
var xingMingMaxNumTemp = 0;
var shengRiMaxNumTemp = 0;
var shouJiMaxNumTemp = 0;

//选择玩法
function selectWF() {
	if ($("#dxLi").attr("class") == "mouseOver1") {
		return "DX";
	}
	if ($("#yxLi").attr("class") == "mouseOver1") {
		return "YX";
	}
	if ($("#exLi").attr("class") == "mouseOver1") {
		return "EX";
	}
	if ($("#sxLi").attr("class") == "mouseOver1") {
		return "SX";
	}
	if ($("#wxLi").attr("class") == "mouseOver1") {
		return "WX";
	}
}

function xingZuoSubmit() { //星座选号
	var lotteryType = selectLottery();
	if (lotteryType == 'SSQ') {
		count = 7;
		maxNum = 33;
	}
	var flag = 0;

	if (xingZuoMaxNumTemp == maxNum) {
		flag = 0;
	} else {
		flag = 1;
		xingZuoMaxNumTemp = maxNum;
	}
	for (var j = 0; j < count; j++) {
		if (lotteryType == "pl3") {
			$("#code99" + j).text("");
		} else if (lotteryType == "dlt") {
			$("#code33" + j).text("");
		} else {
			$("#code" + maxNum + j).text("");
		}
	}
	$("#xingZuo option").each(function() {
		if ($(this).attr("selected") == 'selected') {
			var codesList = new Array();
			if (xingZuoList[$(this).val()] == "" || xingZuoList[$(this).val()] == undefined || 
					xingZuoList[$(this).val()] == "" || flag == 1) { //星座list中没有此星座的号码
				xingZuoList[$(this).val()] = "";
				codesList = selectByMachineOne(count, lotteryType);
				showSelectCodes(0, codesList, lotteryType);
				xingZuoList[$(this).val()] = codesList.toString();
			} else { //星座list中有此星座的号码
				codesList = xingZuoList[$(this).val()].split(";");
				showSelectCodes(0, codesList[0].split(","), lotteryType);
			}
		}
	});

}
function shenXiaoSubmit() { //生肖选号
	var shengXiao = $("#shengXiao");
	var lotteryType = selectLottery();
	if (lotteryType == 'SSQ') {
		count = 7;
		maxNum = 33;
	}
	var flag = 0;

	if (shengXiaoMaxNumTemp == maxNum) {
		flag = 0;
	} else {
		flag = 1;
		shengXiaoMaxNumTemp = maxNum;
	}

	for (var j = 0; j < count; j++) {
		if (lotteryType == "pl3") {

			$("#code99" + j).text("");
		} else if (lotteryType == "dlt") {

			$("#code33" + j).text("");
		} else {
			$("#code" + maxNum + j).text("");
		}
	}
	$("#shengXiao option").each(function() {
		if ($(this).attr("selected") == 'selected') {
			var codesList = new Array();
			if (shengXiaoList[$(this).val()] == null || shengXiaoList[$(this).val()] == "" || shengXiaoList[$(this).val()] == undefined || flag == 1) { //星座list中没有此星座的号码
				shengXiaoList[$(this).val()] = "";
				codesList = selectByMachineOne(count, lotteryType);
				showSelectCodes(0, codesList, lotteryType);
				shengXiaoList[$(this).val()] = codesList.toString();
			} else { //星座list中有此星座的号码
				codesList = shengXiaoList[$(this).val()].split(";");
				showSelectCodes(0, codesList[0].split(","), lotteryType);
			}
		}
	});

}

function showSelectCodes(num, codeList, lotteryType) {
	//显示号码
	for (var i = 0; i < codeList.length; i++) {

		if (codeList[i] != undefined) {
			if (lotteryType == "pl3") {
				$("#code99" + i).text(codeList[i]);
			} else if (lotteryType == "dlt") {

				$("#code333" + i).text(codeList[i]);
			} else if (lotteryType == "ssc") {
				var wf = selectWF();
				if (wf == "SX") {
					$("#code" + maxNum + maxNum + i).text(codeList[i]);
				} else if (wf == "WX") {
					$("#code" + maxNum + maxNum + maxNum + i).text(codeList[i]);
				} else {
					$("#code" + maxNum + i).text(codeList[i]);
				}
			} else {
				$("#code" + maxNum + i).text(codeList[i]);
			}
		}

	}
}
function getRandomNum(max) { //产生一个0到max之间的随机整数
	var i = Math.round(Math.random() * max);
	if (i > max) i = max;
	return i;
}

function matchMun(a, b) { //判断数组中有无重复的数
	for (var i = 0; i < a.length; i++) {
		if (a[i] == b) {
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
}
//验证输入的字符是否是汉字、英文（a－z）
function validateCharEare(charName) {
	var regu = "^[A-za-z\u4e00-\u9fa5]+$";
	var re = new RegExp(regu);
	if (!re.test(charName)) {
		return false;
	}
	return true;
}

//  验证输入的字符长度
function validateCharLength(charName, start, end) {
	if (charName.length < start || charName.length > end) {
		return false;
	}
	return true;
}

function checkRegisterName(name) {
	userLoginName = name.replace(/[^\x00-\xff]/g, "11");
	if (!validateCharLength(userLoginName, 1, 10)) {
		return false;
	}
	return true;
}

function xingMingSubmit() {
	//姓名选号
	var codesList = "";
	var lotteryType = selectLottery();
	var flag = 0;
	if (lotteryType == 'SSQ') {
		count = 7;
		maxNum = 33;
	}
	if (xingMingMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		xingMingMaxNumTemp = maxNum;

	}

	var xingMing = $("#xingMing").val();
	if (!validateCharEare(xingMing)) {
		alert(decodeURI(EncodeUtf8("姓名必须是英文或中文")));
		return;
	}

	if (!checkRegisterName(xingMing)) {
		alert(decodeURI(EncodeUtf8("姓名长度必须小于 10个字符")));
		return;
	}
	for (var j = 0; j < count; j++) {
		if (lotteryType == "pl3") {

			$("#code99" + j).text("");
		} else if (lotteryType == "dlt") {

			$("#code33" + j).text("");
		} else {
			$("#code" + maxNum + j).text("");
		}
	}
	for (var i = 0; i < xingMingList.length; i++) {
		if (xingMingList[i] != null && flag == 0) {
			if (xingMingList[i].containsKey(xingMing)) { //有这个姓名
				codesList = xingMingList[i].get(xingMing).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), lotteryType);
			}
		}
	}
	//没有这个姓名			
	for (var j = 0; j < count; j++) {

		var code = selectByMachineOne(count, lotteryType);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(xingMing, codesList);
	for (var j = 0; j < xingMingList.length; j++) {
		if (xingMingList[j] == undefined) {
			xingMingList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), lotteryType);
}
//自定义Map
function Map() {
	this.elements = new Array();
	this.size = function() {
		return this.elements.length;
	};
	this.put = function(_key, _value) {
		this.elements.push({
			key: _key,
			value: _value
		});
	};

	this.remove = function(_key) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					this.elements.splice(i, 1);
					return true;
				}
			}
		} catch(e) {
			bln = false;
		}
		return bln;
	};

	this.containsKey = function(_key) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					bln = true;
				}
			}
		} catch(e) {
			bln = false;
		}
		return bln;
	};

	this.get = function(_key) {
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return this.elements[i];
				}
			}
		} catch(e) {
			return null;
		}
	};
}

function shengRiSubmit() {
	//生日选号
	var lotteryType = selectLottery();
	if (lotteryType == 'SSQ') {
		count = 7;
		maxNum = 33;
	}
	var flag = 0;
	if (shengRiMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		shengRiMaxNumTemp = maxNum;

	}
	var codesList = "";
	var shengRi = $("#shengRi").val();
	if (shengRi == null || shengRi == "") {
		alert(decodeURI(EncodeUtf8("请输入生日")));
		return;
	}
	for (var j = 0; j < count; j++) {
		if (lotteryType == "pl3") {

			$("#code99" + j).text("");
		} else if (lotteryType == "dlt") {

			$("#code33" + j).text("");
		} else {
			$("#code" + maxNum + j).text("");
		}
	}
	for (var i = 0; i < shengRiList.length; i++) {
		if (shengRiList[i] != null && flag == 0) {
			if (shengRiList[i].containsKey(shengRi)) { //有这个生日
				codesList = shengRiList[i].get(shengRi).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), lotteryType);
				return;
			}
		}
	}
	//没有这个生日		
	for (var j = 0; j < count; j++) {
		var code = selectByMachineOne(count, lotteryType);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(shengRi, codesList);
	for (var j = 0; j < shengRiList.length; j++) {
		if (shengRiList[j] == undefined) {
			shengRiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), lotteryType);
}
function shouJiSubmit() {
	//手机选号
	var codesList = "";
	var lotteryType = selectLottery();

	if (lotteryType == 'SSQ') {
		count = 7;
		maxNum = 33;
	}
	var flag = 0;

	if (shouJiMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		shouJiMaxNumTemp = maxNum;

	}
	var reg = /^1[3,5,8]\d{9}$/;
	var shouJi = $("#shouJi").val();
	if (shouJi == null || shouJi == "") {
		alert(decodeURI(EncodeUtf8("请输入手机号")));
		$("#shouJi").attr("value", "");
		return;
	} else if (reg.test(shouJi) == false) {
		alert(decodeURI(EncodeUtf8("请输入正确的手机号！")));
		$("#shouJi").attr("value", "");
		return;
	} else if (shouJi.length > 11 || shouJi.length < 11) {
		alert(decodeURI(EncodeUtf8("您输入的手机号位数不正确")));
		$("#shouJi").attr("value", "");
		return;
	}
	for (var j = 0; j < count; j++) {
		if (lotteryType == "pl3") {

			$("#code99" + j).text("");
		} else if (lotteryType == "dlt") {

			$("#code33" + j).text("");
		} else {
			$("#code" + maxNum + j).text("");
		}
	}
	for (var i = 0; i < shouJiList.length; i++) {
		if (shouJiList[i] != null && flag == 0) {
			if (shouJiList[i].containsKey(shouJi)) { //有这个手机
				codesList = shouJiList[i].get(shouJi).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), lotteryType);
				return;
			}
		}
	}
	//没有这个手机		
	for (var j = 0; j < count; j++) {
		var code = selectByMachineOne(count, lotteryType);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(shouJi, codesList);
	for (var j = 0; j < shouJiList.length; j++) {
		if (shouJiList[j] == undefined) {
			shouJiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), lotteryType);
}

//选择不同的方式去产生幸运号码
function produceNumMethod(method) {

	for (var i = 0; i < 7; i++) {
		$("#code33" + i).text("");
	}
	for (var i = 0; i < 7; i++) {
		$("#code333" + i).text("");
	}
	for (var i = 0; i < 7; i++) {
		$("#code30" + i).text("");
	}
	for (var i = 0; i < 3; i++) {
		$("#code9" + i).text("");
	}
	for (var i = 0; i < 3; i++) {
		$("#code99" + i).text("");
	}

	$("#xingZuo01").attr("class", "");
	$("#shengXiao01").attr("class", "");
	$("#xingMing01").attr("class", "");
	$("#shengRi01").attr("class", "");
	$("#shouJiHao01").attr("class", "");
	if (method == "xingZuo01") { //选择星座方式
		$("#xingZuo01").attr("class", "mouseOver1");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "inline-block");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shengXiao01") { //选择生肖方式
		$("#shengXiao01").attr("class", "mouseOver1");
		$("#shengXiao02").css("display", "inline-block");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "xingMing01") { ////选择姓名方式
		$("#xingMing01").attr("class", "mouseOver1");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "inline-block");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shengRi01") { //选择生日方式
		$("#shengRi01").attr("class", "mouseOver1");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "inline-block");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shouJiHao01") { //选择手机方式
		$("#shouJiHao01").attr("class", "mouseOver1");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "inline-block");
	}
}

function selectByMachineOne(num, lotteryType) {
	//机选一注钮调用的方法
	var list = new Array();
	var listFlag = new Array();
	var index = 0;

	if (lotteryType == 'ssc' && selectWF() == 'DX') {
		var arr = new Array('大', '小', '单', '双');

		for (var i = 0; i < 2; i++) {
			var index = Math.round(Math.random() * 3);
			list[i] = arr[index];
		}
	} else {
		while (list.length < num) { //产生7个不重复随机号
			var rednum = getRandomNum(maxNum);
			if (lotteryType == 'SSQ' || lotteryType == 'QLC' || lotteryType == 'dlt') {
				if (rednum == 0) { //如果随机数为0的话忽略
					continue;
				}
			}

			if (lotteryType == 'D3') {
				list[index] = rednum;
				index++;

			} else if (lotteryType == 'pl3') {
				list[index] = rednum;

				index++;

			} else if (matchMun(list, rednum)) { //是否重复
				if ((rednum.toString()).length < 2) rednum = "0" + rednum;
				list[index] = rednum;
				index++;

			}

		}

		//排序
		if (lotteryType == 'SSQ' || lotteryType == 'QLC' || lotteryType == 'dlt') {
			for (var i = 0; i < list.length; i++) {
				listFlag[i] = parseInt(list[i], 10);
			}
			paixv(listFlag); //排序
		}
		for (var i = 0; i < listFlag.length; i++) { //将个位数前面补零
			if (listFlag[i].toString().length == 1 && lotteryType != 'D3') {
				if (lotteryType != 'pl3') {
					list[i] = "0" + listFlag[i];
				} else {
					list[i] = listFlag[i];
				}

			} else {
				list[i] = listFlag[i];
			}
		}

		if (lotteryType == "SSQ") {
			var blue = getRandomNum(16);
			if (blue == 0) blue = 1;
			if (blue.toString().length == 1) {
				list[6] = "0" + blue;
			} else {
				list[6] = blue;
			}

		}
		if (lotteryType == "dlt") {
			var blue1 = parseInt(Math.random() * 11 + 1);

			var blue2 = parseInt(Math.random() * (12 - (blue1 + 1) + 1) + (blue1 + 1));

			if (blue1 == 0) blue1 = 1;

			if (blue2 == 0) blue2 = 1;

			if (blue1.toString().length == 1) {
				list[5] = "0" + blue1;
			} else {
				list[5] = blue1;
			}

			if (blue2.toString().length == 1) {
				list[6] = "0" + blue2;
			} else {
				list[6] = blue2;
			}

		}

	}
	return list;
}

var count = "";
var maxNum = "";
var lotteryType;
function selectType(produceType) {
	$("#ssqLi").attr("class", "");
	$("#3DLi").attr("class", "");
	$("#qlcLi").attr("class", "");
	$("#pl3Li").attr("class", "");
	$("#dltLi").attr("class", "");
	lotteryType = produceType;
	if (produceType == 'ssq') {
		$("#ssqLi").attr("class", "mouseOver");
		cleanList();
		cleanCodeShow(lotteryType);
	} else if (produceType == '3D') {
		$("#3DLi").attr("class", "mouseOver");
		cleanList();
		cleanCodeShow(lotteryType);
	} else if (produceType == 'qlc') {
		$("#qlcLi").attr("class", "mouseOver");
		cleanList();
		cleanCodeShow(lotteryType);
	} else if (produceType == 'pl3') {
		$("#pl3Li").attr("class", "mouseOver");
		cleanList();
		cleanCodeShow(lotteryType);
	} else if (produceType == 'dlt') {
		$("#dltLi").attr("class", "mouseOver");
		cleanList();
		cleanCodeShow(lotteryType);
	}
}

function cleanCodeShow(lotteryType) {
	if (lotteryType == 'ssq') {
		for (var j = 0; j < 7; j++) {
			$("#code33" + j).text("");
		}
	} else if (lotteryType == 'qlc') {
		for (var j = 0; j < 7; j++) {
			$("#code30" + j).text("");
		}
	} else if (lotteryType == '3D') {
		for (var j = 0; j < 3; j++) {
			$("#code9" + j).text("");
		}
	} else if (lotteryType == 'pl3') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (lotteryType == 'dlt') {
		for (var j = 0; j < 7; j++) {
			$("#code333" + j).text("");
		}
	}
	if (lotteryType == '3D') {
		count = "3";
		maxNum = "9";
		$("#d3Table").css("display", "inline-block");
		$("#ssqTable").css("display", "none");
		$("#dltTable").css("display", "none");
		$("#qlcTable").css("display", "none");
		$("#pailie3Table").css("display", "none");
	} else if (lotteryType == 'qlc') {
		count = "7";
		maxNum = "30";
		$("#d3Table").css("display", "none");
		$("#ssqTable").css("display", "none");
		$("#dltTable").css("display", "none");
		$("#qlcTable").css("display", "inline-block");
		$("#pailie3Table").css("display", "none");
	} else if (lotteryType == 'pl3') {
		count = "3";
		maxNum = "9";
		$("#d3Table").css("display", "none");
		$("#ssqTable").css("display", "none");
		$("#dltTable").css("display", "none");
		$("#qlcTable").css("display", "none");
		$("#pailie3Table").css("display", "inline-block");
	} else if (lotteryType == 'dlt') {
		count = "7";
		maxNum = "33";
		$("#d3Table").css("display", "none");
		$("#ssqTable").css("display", "none");
		$("#dltTable").css("display", "inline-block");
		$("#qlcTable").css("display", "none");
		$("#pailie3Table").css("display", "none");
	} else {
		count = "7";
		maxNum = "33";
		$("#d3Table").css("display", "none");
		$("#ssqTable").css("display", "inline-block");
		$("#dltTable").css("display", "none");
		$("#qlcTable").css("display", "none");
		$("#pailie3Table").css("display", "none");
	}
}

//选择不同的方式去产生幸运号码
function produceNumMethod2(method) {

	for (var i = 0; i < 2; i++) {
		$("#code5" + i).text("");
	}
	for (var i = 0; i < 1; i++) {
		$("#code9" + i).text("");
	}
	for (var i = 0; i < 2; i++) {
		$("#code18" + i).text("");
	}
	for (var i = 0; i < 3; i++) {
		$("#code99" + i).text("");
	}
	for (var i = 0; i < 5; i++) {
		$("#code999" + i).text("");
	}

	$("#xingMing").val("");
	$("#shengRi").val("");
	$("#shouJi").val("");

	$("#xingZuo01").attr("class", "");
	$("#shengXiao01").attr("class", "");
	$("#xingMing01").attr("class", "");
	$("#shengRi01").attr("class", "");
	$("#shouJiHao01").attr("class", "");
	if (method == "xingZuo01") { //选择星座方式
		$("#xingZuo01").attr("class", "mouseOver");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "inline-block");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shengXiao01") { //选择生肖方式
		$("#shengXiao01").attr("class", "mouseOver");
		$("#shengXiao02").css("display", "inline-block");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "xingMing01") { ////选择姓名方式
		$("#xingMing01").attr("class", "mouseOver");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "inline-block");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shengRi01") { //选择生日方式
		$("#shengRi01").attr("class", "mouseOver");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "inline-block");
		$("#shouJiHao02").css("display", "none");
	} else if (method == "shouJiHao01") { //选择手机方式
		$("#shouJiHao01").attr("class", "mouseOver");
		$("#shengXiao02").css("display", "none");
		$("#xingZuo02").css("display", "none");
		$("#xingMing02").css("display", "none");
		$("#shengRi02").css("display", "none");
		$("#shouJiHao02").css("display", "inline-block");
	}
}

var WanFa;
function selectWanFa(wanfa) {
	$("#dxLi").attr("class", "");
	$("#yxLi").attr("class", "");
	$("#exLi").attr("class", "");
	$("#sxLi").attr("class", "");
	$("#wxLi").attr("class", "");
	WanFa = wanfa;
	if (wanfa == 'dx') {
		$("#dxLi").attr("class", "mouseOver1");
		cleanList();
		cleanCodeShow_wanfa(WanFa);
	} else if (wanfa == 'yx') {
		$("#yxLi").attr("class", "mouseOver1");
		cleanList();
		cleanCodeShow_wanfa(WanFa);
	} else if (wanfa == 'ex') {
		$("#exLi").attr("class", "mouseOver1");
		cleanList();
		cleanCodeShow_wanfa(WanFa);
	} else if (wanfa == 'sx') {
		$("#sxLi").attr("class", "mouseOver1");
		cleanList();
		cleanCodeShow_wanfa(WanFa);
	} else if (wanfa == 'wx') {
		$("#wxLi").attr("class", "mouseOver1");
		cleanList();
		cleanCodeShow_wanfa(WanFa);
	}
}

function cleanCodeShow_wanfa(WanFa) {
	if (WanFa == 'dx') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (WanFa == 'yx') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (WanFa == 'ex') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (WanFa == 'sx') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (WanFa == 'wx') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	if (WanFa == 'dx') {
		count = "2";
		maxNum = "5";
		$("#dxTable").css("display", "inline-block");
		$("#yxTable").css("display", "none");
		$("#exTable").css("display", "none");
		$("#sxTable").css("display", "none");
		$("#wxTable").css("display", "none");
	} else if (WanFa == 'yx') {
		count = "1";
		maxNum = "9";
		$("#dxTable").css("display", "none");
		$("#yxTable").css("display", "inline-block");
		$("#exTable").css("display", "none");
		$("#sxTable").css("display", "none");
		$("#wxTable").css("display", "none");
	} else if (WanFa == 'ex') {
		count = "2";
		maxNum = "18";
		$("#dxTable").css("display", "none");
		$("#yxTable").css("display", "none");
		$("#exTable").css("display", "inline-block");
		$("#sxTable").css("display", "none");
		$("#wxTable").css("display", "none");
	} else if (WanFa == 'sx') {
		count = "3";
		maxNum = "9";
		$("#dxTable").css("display", "none");
		$("#yxTable").css("display", "none");
		$("#exTable").css("display", "none");
		$("#sxTable").css("display", "inline-block");
		$("#wxTable").css("display", "none");
	} else {
		count = "5";
		maxNum = "9";
		$("#dxTable").css("display", "none");
		$("#yxTable").css("display", "none");
		$("#exTable").css("display", "none");
		$("#sxTable").css("display", "none");
		$("#wxTable").css("display", "inline-block");
	}
}

function cleanList() {
	shengXiaoList = new Array(12);
	xingZuoList = new Array(12);
	xingMingList = new Array(100);
	shengRiList = new Array(100);
	shouJiList = new Array(100);
}

//选择彩种
function selectLottery() {
	if ($("#qlcLi").attr("class") == "mouseOver") {
		return "QLC";
	}
	if ($("#ssqLi").attr("class") == "mouseOver") {
		return "SSQ";
	}
	if ($("#pl3Li").attr("class") == "mouseOver") {
		return "pl3";
	}
	if ($("#3DLi").attr("class") == "mouseOver") {
		return "D3";
	}
	if ($("#dltLi").attr("class") == "mouseOver") {
		return "dlt";
	}
}

function ssc_xingZuoSubmit() { //星座选号
	var wanfa = selectWF();
	var Lottery = 'ssc';
	var flag = 0;

	if (xingZuoMaxNumTemp == maxNum) {
		flag = 0;
	} else {
		flag = 1;
		xingZuoMaxNumTemp = maxNum;
	}
	if (wanfa == 'DX') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (wanfa == 'YX') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (wanfa == 'EX') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (wanfa == 'SX') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (wanfa == 'WX') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	$("#xingZuo option").each(function() {
		if ($(this).attr("selected") == 'selected') {
			var codesList = new Array();
			if (xingZuoList[$(this).val()] == "" || xingZuoList[$(this).val()] == undefined || xingZuoList[$(this).val()] == "" || flag == 1) { //星座list中没有此星座的号码
				xingZuoList[$(this).val()] = "";
				codesList = selectByMachineOne(count, Lottery);
				showSelectCodes(0, codesList, Lottery);
				xingZuoList[$(this).val()] = codesList.toString();
			} else { //星座list中有此星座的号码
				codesList = xingZuoList[$(this).val()].split(";");
				showSelectCodes(0, codesList[0].split(","), Lottery);
			}
		}
	});

}
function ssc_shenXiaoSubmit() { //生肖选号
	var shengXiao = $("#shengXiao");
	var wanfa = selectWF();
	var Lottery = 'ssc';
	var flag = 0;

	if (shengXiaoMaxNumTemp == maxNum) {
		flag = 0;
	} else {
		flag = 1;
		shengXiaoMaxNumTemp = maxNum;
	}

	if (wanfa == 'DX') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (wanfa == 'YX') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (wanfa == 'EX') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (wanfa == 'SX') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (wanfa == 'WX') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	$("#shengXiao option").each(function() {
		if ($(this).attr("selected") == 'selected') {
			var codesList = new Array();
			if (shengXiaoList[$(this).val()] == null || shengXiaoList[$(this).val()] == "" || shengXiaoList[$(this).val()] == undefined || flag == 1) { //星座list中没有此星座的号码
				shengXiaoList[$(this).val()] = "";
				codesList = selectByMachineOne(count, Lottery);
				showSelectCodes(0, codesList, Lottery);
				shengXiaoList[$(this).val()] = codesList.toString();
			} else { //星座list中有此星座的号码
				codesList = shengXiaoList[$(this).val()].split(";");
				showSelectCodes(0, codesList[0].split(","), Lottery);
			}
		}
	});

}
function ssc_xingMingSubmit() {
	//姓名选号
	var codesList = "";
	var wanfa = selectWF();
	var Lottery = 'ssc';
	var flag = 0;

	if (xingMingMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		xingMingMaxNumTemp = maxNum;

	}

	var xingMing = $("#xingMing").val();
	if (!validateCharEare(xingMing)) {
		alert(decodeURI(EncodeUtf8("姓名必须是英文或中文")));
		return;
	}

	if (!checkRegisterName(xingMing)) {
		alert(decodeURI(EncodeUtf8("姓名长度必须小于 10个字符")));
		return;
	}
	if (wanfa == 'DX') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (wanfa == 'YX') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (wanfa == 'EX') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (wanfa == 'SX') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (wanfa == 'WX') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	for (var i = 0; i < xingMingList.length; i++) {
		if (xingMingList[i] != null && flag == 0) {
			if (xingMingList[i].containsKey(xingMing)) { //有这个姓名
				codesList = xingMingList[i].get(xingMing).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), Lottery);
			}
		}
	}
	//没有这个姓名			
	for (var j = 0; j < count; j++) {

		var code = selectByMachineOne(count, Lottery);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(xingMing, codesList);
	for (var j = 0; j < xingMingList.length; j++) {
		if (xingMingList[j] == undefined) {
			xingMingList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), Lottery);
}

function ssc_shengRiSubmit() {
	//生日选号
	var Lottery = 'ssc';
	var wanfa = selectWF();
	var flag = 0;
	if (shengRiMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		shengRiMaxNumTemp = maxNum;

	}
	var codesList = "";
	var shengRi = $("#shengRi").val();
	if (shengRi == null || shengRi == "") {
		alert(decodeURI(EncodeUtf8("请输入生日")));
		return;
	}
	if (wanfa == 'DX') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (wanfa == 'YX') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (wanfa == 'EX') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (wanfa == 'SX') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (wanfa == 'WX') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	for (var i = 0; i < shengRiList.length; i++) {
		if (shengRiList[i] != null && flag == 0) {
			if (shengRiList[i].containsKey(shengRi)) { //有这个生日
				codesList = shengRiList[i].get(shengRi).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), Lottery);
				return;
			}
		}
	}
	//没有这个生日		
	for (var j = 0; j < count; j++) {
		var code = selectByMachineOne(count, Lottery);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(shengRi, codesList);
	for (var j = 0; j < shengRiList.length; j++) {
		if (shengRiList[j] == undefined) {
			shengRiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), Lottery);
}

function ssc_shouJiSubmit() {
	//手机选号
	var codesList = "";
	var wanfa = selectWF();
	var Lottery = 'ssc';

	var flag = 0;

	if (shouJiMaxNumTemp == maxNum) {
		flag = 0;

	} else {
		flag = 1;
		shouJiMaxNumTemp = maxNum;

	}
	var reg = /^1[3,5,8]\d{9}$/;
	var shouJi = $("#shouJi").val();
	if (shouJi == null || shouJi == "") {
		alert(decodeURI(EncodeUtf8("请输入手机号")));
		$("#shouJi").attr("value", "");
		return;
	} else if (reg.test(shouJi) == false) {
		alert(decodeURI(EncodeUtf8("请输入正确的手机号！")));
		$("#shouJi").attr("value", "");
		return;
	} else if (shouJi.length > 11 || shouJi.length < 11) {
		alert(decodeURI(EncodeUtf8("您输入的手机号位数不正确")));
		$("#shouJi").attr("value", "");
		return;
	}
	if (wanfa == 'DX') {
		for (var j = 0; j < 2; j++) {
			$("#code5" + j).text("");
		}
	} else if (wanfa == 'YX') {
		for (var j = 0; j < 1; j++) {
			$("#code9" + j).text("");
		}
	} else if (wanfa == 'EX') {
		for (var j = 0; j < 2; j++) {
			$("#code18" + j).text("");
		}
	} else if (wanfa == 'SX') {
		for (var j = 0; j < 3; j++) {
			$("#code99" + j).text("");
		}
	} else if (wanfa == 'WX') {
		for (var j = 0; j < 5; j++) {
			$("#code999" + j).text("");
		}
	}
	for (var i = 0; i < shouJiList.length; i++) {
		if (shouJiList[i] != null && flag == 0) {
			if (shouJiList[i].containsKey(shouJi)) { //有这个手机
				codesList = shouJiList[i].get(shouJi).value;
				codesList = codesList.split(";");
				showSelectCodes(0, codesList[0].split(","), Lottery);
				return;
			}
		}
	}
	//没有这个手机		
	for (var j = 0; j < count; j++) {
		var code = selectByMachineOne(count, Lottery);
		codesList += code.toString() + ";";
	}
	var testmap = new Map();
	testmap.put(shouJi, codesList);
	for (var j = 0; j < shouJiList.length; j++) {
		if (shouJiList[j] == undefined) {
			shouJiList[j] = testmap;
			break;
		}
	}
	//显示号码
	codesList = codesList.split(";");
	showSelectCodes(0, codesList[0].split(","), Lottery);
}

var root;
var lotteryType;

//------获取选中的号码，跳到的相应的彩种页并将所选号码添加到号码篮中
function luck_stake(flag) {

	//选择彩种
	lotteryType = selectLottery();
	if (lotteryType == "") {
		alert("");
		return false;
	}
	//页面显示的号码样式
	var viewBall = "";
	//隐藏的号码样式
	var listBall = "";
	//用于判断用户是否选择号码
	var string = "";
	//要跳转的彩种地址
	var url = "";
	if ("SSQ" == lotteryType) {
		for (var i = 0; i < 7; i++) {
			var codeball = $("#code" + 33 + i).text();

			if (i > 0) {
				if ("SSQ" == lotteryType && i == 6) {
					viewBall += "|";
					listBall += "~";
				} else {
					viewBall += ",";
					listBall += ",";
				}
			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			listBall += codeball;
			string += codeball;
		}
		listBall += "^";
		url = "/rchlw/lottery/ruyicai_channel_ssq.jsp";
	} else if ("dlt" == lotteryType) {
		viewBall = "";
		for (var i = 0; i < 7; i++) {
			var codeball = $("#code3" + 33 + i).text();
			if (i > 0) {
				if ("dlt" == lotteryType && i == 5) {
					viewBall += "|";
					listBall += "-";
				} else {
					viewBall += ",";
					listBall += ",";
				}
			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			listBall += codeball;
			string += codeball;
		}
		listBall += ";";
		url = "/rchlw/lottery/ruyicai_channel_dlt.jsp";
	} else if ("D3" == lotteryType) {
		listBall = "00";
		viewBall = "";
		for (var i = 0; i < 3; i++) {
			var codeball = $("#code" + 9 + i).text();
			if (i > 0) {

				viewBall += "|";
				listBall += ",";

			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			listBall += codeball;
			string += codeball;

		}
		listBall += "^";
		url = "/rchlw/lottery/ruyicai_channel_3D.jsp";
	} else if ("QLC" == lotteryType) {
		viewBall = "";
		for (var i = 0; i < 7; i++) {
			var codeball = $("#code" + 30 + i).text();
			if (i > 0) {

				viewBall += ",";
				listBall += ",";
			}
			viewBall += codeball;
			if (codeball.substring(0, 1) == "0") {
				codeball = codeball.substring(1, 2);
			}
			listBall += codeball;
			string += codeball;

		}
		listBall += "^";
		url = "/rchlw/lottery/ruyicai_channel_qlc.jsp";
	} else if ("pl3" == lotteryType) {
		listBall = "01";
		viewBall = "";
		for (var i = 0; i < 3; i++) {
			var codeball = $("#code9" + 9 + i).text();
			if (i > 0) {

				viewBall += "|";
				listBall += ",";

			}
			viewBall += codeball;
			listBall += codeball;
			string += codeball;

		}
		listBall += ";";
		url = "/rchlw/lottery/ruyicai_channel_qls.jsp";

	}
	if (string == null || string == "") {
		alert(decodeURI(EncodeUtf8("请您先选择幸运号码！")));
		return false;
	} else {
		top.location.href = url + "?views=" + EncodeUtf8(viewBall) + "&listView=" + EncodeUtf8(listBall) + "&url=" + EncodeUtf8(url);

	}

}