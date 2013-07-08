//============================合买使用的js===================================
//切换排序
var lishiTH = "";
function orderByImg(th){
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").removeClass("SortDown");
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").removeClass("SortUp");
	$("#title_hemai >th >span[class^=AllTogetherBuyBox]").addClass("SortDisabled");
	$("#"+th+">span").removeClass("SortDisabled");
	if(lishiTH==th){//第二次点击
		$("#"+th+">span").addClass("SortUp");
		lishiTH="";
		$("#orderDir").val("ASC");//向上正序
	}else{//第一次点击
		$("#"+th+">span").addClass("SortDown");
		lishiTH=th;
		$("#orderDir").val("DESC");//向下倒序
	}
	
	//取得要排序的字段
	var orderBy = "";
	if(th=="fanganjine"){
		orderBy="totalAmt";
	}else if(th=="jindu"){
		orderBy="((buyAmtByStarterPUTINbuyAmtByFollowerPUTINsafeAmt)*100/totalAmt)";
	}else if(th=="renshu"){
		orderBy="participantCount";
	}else if(th=="zhanji"){
		orderBy="a.effectiveAchievementPUTINa.ineffectiveAchievement";
	}else{
		$("#orderDir").val("");
		orderBy="";
	}
	$("#orderBy").val(orderBy);
	$('#CaseSelectForm').submit();
}
function checkDesc() {

	var desc = $("#description").val(); // 合买宣传语
	if (desc.length > 500) {
		openAlert(decodeURI(EncodeUtf8("方案宣传不能超过500个字符")));
		$("#description").val($("#description").val().substring(0, 500));
		return false;
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
	//openStaticPopup("openTouzhu", 1000, "touzhuOpen1");
	loginShow('touzhuOpen1', false);

}
//比例计算a*100/b
function bili(idstr) {
	var re = /^[\d]+$/;
	var a = $("#" + idstr).val();
	if (!(a=="")&&!(re.test(a))) {
		openAlert(decodeURI(EncodeUtf8("请输入整数！")));
		$("#" + idstr).val("");
		$("#" + idstr).focus();
		$("#safeAmt_bili").html(0);
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
//到合买提交
function toHemaiSubmit() {
	var amt_caseId = $("#amt_caseId").val();
	var amt = 0;
	var caseId = "";
	if (amt_caseId.indexOf("$")) {
		amt = amt_caseId.split("$")[0];
		caseId = amt_caseId.split("$")[1];
	}

	toHemai(amt, caseId);
}
//点击确认购买 显示为认购中
function tohemairengou() {
	$("#queding").hide();
	$("#rengouzhong").show();
	$("#yueBuzu").hide();
	$("#quxiao").hide();
	$("#closequeding").hide();
	toHemaiSubmit();
}
//提交参与和买的内容
function toHemai(amt, caseId, safeAmt) {
	var parameters = "amt=" + amt + "&caseId=" + caseId;
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
		openAlert(decodeURI(EncodeUtf8("您好，请填写认购金额!")));
		$("#amt").focus();
		return false;
	}else if (!testNum.test(amt)) {
		openAlert(decodeURI(EncodeUtf8("您好，请填写认购金额!")));
		$("#amt").focus();
		return false;
	} else if(parseInt(amt)<parseInt($("#minamt").val())){
		openAlert("您好！此方案的最低认购金额为"+$("#minamt").val()+"元！");
		$("#amt").focus();
		return false;
	}else if ($("#xieyi") != null || $("#xieyi") != undefined) {
		if ($("#xieyi").attr('checked') != 'checked') {
			openAlert(decodeURI(EncodeUtf8("请您同意用户代购合买协议！")));
			return false;
		}
	}
	if ($("#fengxiang")) {
		if ($("#fengxiang").attr('checked') != undefined && $("#fengxiang").attr('checked') != 'checked') {
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
	if(safeAmt==""){
		$("#rengou_safeAmt").text("0");
	}else{
		$("#rengou_safeAmt").text(safeAmt);
	}
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
//按期号查询
function changeBathcode(value)	{
	var value1 = value;
	if (value != null && value != '' && value.indexOf("$") > -1) {
		value1 = value.split("$")[0];
	}
	//$('#nolimit1').removeAttr("selected");
	//$('#nolimit').attr("selected",true);
	$('#selectBatchCode').val(value1);
	$('#CaseSelectForm').submit();
}
//查看玩家发起方案记录
function fanganListToUser(userno,nickname,lotno) {
	$("#Fangan_userno").val(userno);
	$("#winBigAmt").val("");
	$("#Fangan_title").html(decodeURI(EncodeUtf8("查看"+nickname+"的投注记录")));
	ajaxFromFanganListToUser("CaseFanganSelectForm", "fangan_Html");
	hemaiInfoSelect(lotno);
	loginShow("fanganList_Alert", false);
}
function hemaiWinBigAmt(userno,nickname,amt,lotno) {
	$("#Fangan_userno").val(userno);
	$("#winBigAmt").val(amt);
	$("#Fangan_title").html(decodeURI(EncodeUtf8("查看"+nickname+"的中奖记录")));
	ajaxFromFanganListToUser("CaseFanganSelectForm", "fangan_Html");
	hemaiInfoSelect(lotno);
	loginShow("fanganList_Alert", false);
}
//ajax处理合买历史筛选请求
function ajaxFromFanganListToUser(formId, divId) {
	var parameters = $("#" + formId).serialize();
	var winBigAmt = $('#winBigAmt').val();
	if (!winBigAmt == "" || !winBigAmt == "null") {
		parameters = encodeURI(parameters) + "&winBigAmt=0";
	}
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
	var canshu = GetQueryString("canshu");
	if (!canshu == "" || !canshu == "null") {
		setGoumaifangshi('合买');
		tabHemaiAndDaigou('hemai');
		$("#controlHemai").addClass("selected");
		$("#controlHemai").siblings().removeClass("selected");
		$("#followHemai").addClass("selected");
		$("#followHemai").siblings().removeClass("selected");
	}
}
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
	} else if (lotno == "J00013" || lotno == "J00001" || lotno == "J00003") {
		$("#JINGCAI").addClass("selected");
		$("#JINGCAI").siblings().removeClass("selected");
		$("#followJingCai").addClass("selected");
		$("#followJingCai").siblings().removeClass("selected");
	}
	if(!(lotno=="")){
	$("#" + lotno).addClass("selected");
	$("#" + lotno).siblings().removeClass("selected");
	}
}
//获取合买中心的公告
function getCaseNews(divId) {
	$.ajax({
		url: '/include/hemaiCenter_gonggao.html',
		type: "GET",
		//数据发送方式
		dataType: 'html',
		success: function(data) {
			$("#" + divId).html(data);
		}
	});
}
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
			initTime(); //倒计时使用
		}
	});
}

//切换足彩投注/合买
function tabHemaiAndDaigou(a) {
	$("#daiGouHemai").val(a);
	if (a == "daigou") {
		$("#sub1").attr("class", "none");
		$("#sub").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由购买人自行全额购买彩票。")));
	} else if (a == "hemai") {
		$("#sub").attr("class", "none");
		$("#sub1").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("由多人出资购买彩票。")));
	} else if (a == "zhuihao") {
		$("#sub1").attr("class", "none");
		$("#sub").removeAttr("class");
		$("#gmzh_text").text(decodeURI(EncodeUtf8("连续多期购买同一注（组）号码。")));
		setQishuList(55, $('#betchZhuihaoNum').val(), false, 'qishuList', $('#lotNo').val());
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
//============================合买使用的js=========END=======================

function init() {
	var view = GetQueryString("view");
	$("#" + view).attr("class", "expanded");

}

//获取包括当前期的前6场期号
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
			$("#issueSelect option[0]").val("当前期"+$("#issueSelect option[0]").val());
		}
	});
}

//=========================================彩种结束时间=================================================

function initTime() {
    var temper = $("#endTime").text();
    var tms = [];
    var dt = new Date(temper.replace(/-/g, "/"));
    var td = dt.getTime();
    tms[0] = td - (new Date()).getTime();

    //计算天、时、分、秒、
    var days = Math.floor(tms[0] / (1000 * 60 * 60 * 24));
    var hours = Math.floor(tms[0] / (1000 * 60 * 60)) % 24;
    var minutes = Math.floor(tms[0] / (1000 * 60)) % 60;
    var seconds = (Math.floor(tms[0] / 1000) % 60) - 1;
    if (days < 0) days = 0;
    if (hours < 0) hours = 0;
    if (minutes < 0) minutes = 0;
    if (seconds < 0) seconds = 0;
    //将天、时、分、秒插入到html中
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);
}
function takeCount() {
    var temper = $("#endTime").text();
    var tms = [];
    var dt = new Date(temper.replace(/-/g, "/"));
    var td = dt.getTime();
    tms[0] = td - (new Date()).getTime();

    for (var i = 0,j = tms.length; i < j; i++) {
        setTimeout("takeCount()", 1000);
        tms[i] -= 1000;
        //计算天、时、分、秒、
        var days = Math.floor(tms[i] / (1000 * 60 * 60 * 24));
        var hours = Math.floor(tms[i] / (1000 * 60 * 60)) % 24;
        var minutes = Math.floor(tms[i] / (1000 * 60)) % 60;
        var seconds = Math.floor(tms[i] / 1000) % 60;
        if (days < 0) days = 0;
        if (hours < 0) hours = 0;
        if (minutes < 0) minutes = 0;
        if (seconds < 0) seconds = 0;
        //将天、时、分、秒插入到html中
        $("#day").html(days);
        $("#hour").html(hours);
        $("#minute").html(minutes);
        $("#second").html(seconds);
    }
}
setTimeout("takeCount()", 1000);


//足彩合买获取期号

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
				$("#qihao" + (4 - i)).html(msg[i].batchcode);

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
//初始化投注页面的所有金额以及登录状态
function touzhuInitStatic() {
	if (isLogin()) { //登录情况下
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
			$('#touzhu_money').html((msg.deposit_amount).toFixed(2)); //deposit_amount 底部的可用余额
			$('#topLogin_money').html((msg.deposit_amount).toFixed(2)); //deposit_amount头部的 可用余额
			$("#refresh_touzhu_money").css('display', 'none');
		}
	});
}
function getCanyuList(formId, divId) {
	var parameters = $("#" + formId).serialize() + "&sortStateFlag=0&isAjax=ajax";
	for (b in $.browser) if (b == 'msie') {
		parameters = encodeURI(parameters) + "&msie=1";
	}
	$.ajax({
		url: basepath + "/function/selectAll!getCanYuUserList",
		//后台处理程序
		type: "POST",
		//数据发送方式
		data: parameters,
		//参数
		dataType: 'html',
		success: function(html) {
			$("#" + divId).html(html);
		}
	});
	return false;
}
function getCanyuList1(caselotid) {
	$.ajax({
		url: '/rchlw/function/selectAll!getCanYuUserList?caselotid='+caselotid,
		type: 'post',
		//数据发送方式   
		async: false,
		dataType: 'html',
		success: function(msg) {
			$('#canyulist').html(msg); 
		}
	});
}

