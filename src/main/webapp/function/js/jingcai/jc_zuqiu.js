//定义变量allMatch（选择的赛事）
var allMatch = Number($("#matchNum").html());
//checkZhuma为基本的注码校验和计算方法，每次有操作的时候，都会调用该方法

//当点击“包”和“清”的时候，全部改变按钮的颜色（样式）
function changeColorCheckbox(day, stat, week) {
	if ($("#checkbox_" + day + "_" + stat).text()=="包") {
		$("#checkbox_" + day + "_" + stat).text("清");	
		$("#ball3_" + day + "_" + stat).removeClass("result_3");
		$("#ball0_" + day + "_" + stat).removeClass("result_3");
		$("#ball1_" + day + "_" + stat).removeClass("result_3");
		$("#ball3_" + day + "_" + stat).addClass("result_1");
		$("#ball0_" + day + "_" + stat).addClass("result_1");
		$("#ball1_" + day + "_" + stat).addClass("result_1");
	} else {
		$("#checkbox_" + day + "_" + stat).text("包");
		$("#ball3_" + day + "_" + stat).removeClass("result_1");
		$("#ball0_" + day + "_" + stat).removeClass("result_1");
		$("#ball1_" + day + "_" + stat).removeClass("result_1");
		$("#ball3_" + day + "_" + stat).addClass("result_3");
		$("#ball0_" + day + "_" + stat).addClass("result_3");
		$("#ball1_" + day + "_" + stat).addClass("result_3");
	}
	checkZhuma();
	addMatchForRight($("#ball3_" + day + "_" + stat), day, stat, 3, week);
	addMatchForRight($("#ball1_" + day + "_" + stat), day, stat, 1, week);
	addMatchForRight($("#ball0_" + day + "_" + stat), day, stat, 0, week);
}

//当点击按钮的时候，改变按钮的颜色（样式），同时检查按钮是否全部选定，相应的进行“包”和“清”的转变 --- spf-------
function checkColorButton(object, day, type, stat,week) {
	if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_1") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
	} else if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_3") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
	}
	if ($("#ball0" + "_" + day + "_" + stat).attr("class") == "result_1" || $("#ball1" + "_" + day + "_" + stat).attr("class") == "result_1" || $("#ball3" + "_" + day + "_" + stat).attr("class") == "result_1") {
		$("#checkbox_" + day + "_" + stat).text("清");
	} else {
		$("#checkbox_" + day + "_" + stat).text("包");
	}
	checkZhuma();
	addMatchForRight(object, day, stat, type, week);
}
//当点击按钮的时候，改变按钮的颜色（样式）-------zjq
function checkButton_touzhu(object, day, type, stat, week){
	if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_0") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_0").addClass("result_2");
	} else if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_2") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_2").addClass("result_0");
	}
	
	checkZhuma();
	addMatchForRight_zjq(object, day, stat, type, week);
}
//当点击按钮的时候，改变按钮的颜色（样式）-------bf
function checkButton_touzhu_bf(object, day, type, stat, week){
	if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_1") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
	} else if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_3") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
	}
	var sflag = false;
	var pflag = false;
	var fflag = false;
	for(var i=1;i<6;i++){
		for(var j=0;j<3;j++){
			if(i==1 && j>0 || i==2 && j>1){
				break;
			}else{
				if($("#ball"+i+j+"_" + day + "_" + stat).attr("class") == "result_1"){
					sflag = true;
				}
			}
		}
	}
	if($("#ball00_" + day + "_" + stat).attr("class") == "result_1"||$("#ball11_" + day + "_" + stat).attr("class") == "result_1"||$("#ball22_" + day + "_" + stat).attr("class") == "result_1"||$("#ball33_" + day + "_" + stat).attr("class") == "result_1"||$("#ball99_" + day + "_" + stat).attr("class") == "result_1"){
		pflag = true;
	}
	for(var i=0;i<3;i++){
		for(var j=1;j<6;j++){
			if(i==1 && j<2 || i==2 && j<3){
			}else{
				if($("#ball"+i+j+"_" + day + "_" + stat).attr("class") == "result_1"){
					fflag = true;
				}
			}
		}
	}
	if(sflag){
		$("#checkbox3_" + day + "_" + stat).attr("checked", true);	
	}else{
		$("#checkbox3_" + day + "_" + stat).removeAttr("checked");
	}
	if(pflag){
		$("#checkbox1_" + day + "_" + stat).attr("checked", true);
	}else{
		$("#checkbox1_" + day + "_" + stat).removeAttr("checked");
	}
	if(fflag){
		$("#checkbox0_" + day + "_" + stat).attr("checked", true);
	}else{
		$("#checkbox0_" + day + "_" + stat).removeAttr("checked");
	}
	checkZhuma();
	addMatchForRight_bf(object, day, stat, type, week);
}
//当点击胜、平、负复选框的时候，全部改变按钮的颜色（样式）
function checkbox_all_bf(object,day, stat, week,type) {
	var b = $("#checkbox"+type+"_" + day + "_" + stat).attr("checked");
	if (type == "3") {
		if(b == "checked"){
			$("#ball10_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball20_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball21_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball30_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball31_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball32_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball40_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball41_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball42_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball50_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball51_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball52_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball90_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
		} else {
			$("#ball10_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball20_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball21_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball30_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball31_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball32_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball40_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball41_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball42_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball50_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball51_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball52_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball90_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
		}
	}else if(type == "1"){
		if(b == "checked"){
			$("#ball00_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball11_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball22_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball33_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball99_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
		}else{
			$("#ball00_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball11_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball22_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball33_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball99_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
		}
	}else if(type == "0"){
		if(b == "checked"){
			$("#ball01_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball02_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball12_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball03_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball13_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball23_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball04_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball14_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball24_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball05_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball15_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball25_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
			$("#ball09_" + day + "_" + stat).removeClass("result_3").addClass("result_1");
		}else{
			$("#ball01_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball02_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball12_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball03_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball13_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball23_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball04_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball14_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball24_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball05_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball15_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball25_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
			$("#ball09_" + day + "_" + stat).removeClass("result_1").addClass("result_3");
		}
	}
	checkZhuma();
	addMatchForRight_bf(object, day, stat, type,week);
	
}
//当点击按钮的时候，改变按钮的颜色（样式）-------bqc
function checkButton_touzhu_bqc(object, day, type, stat, week){
	if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_0") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_0").addClass("result_2");
	} else if ($("#ball" + type + "_" + day + "_" + stat).attr("class") == "result_2") {
		$("#ball" + type + "_" + day + "_" + stat).removeClass("result_2").addClass("result_0");
	}
	
	checkZhuma();
	addMatchForRight_bqc(object, day, stat, type, week);
}
//注码校验和计算注数
//计算注数的方法
function checkZhuma() {
	var jcType = $("#jcType").val();
	$("option", $("#list_LotteryNumber")).remove();
	$("#codes li").remove();
	var zhuma = "",
	matchDate = "",
	matchWeek = "",
	match = "";

	//循环遍历取得时间的数组
	var daArr = [];
	$("input[name='day']").each(function(i) {
		daArr[i] = $(this).val();
	});

	//循环遍历取得总的赛事的值
	var count = 0;
	$("input[name='count']").each(function(i) {
		count += Number($(this).val());
	});
    var isDingDan = false;
	for (var i = 1; i <= count; i++) {
		for (var j = 0; j < daArr.length; j++) {
			var day = daArr[j];
			var spfStr = "";
			if(jcType != null && jcType == "zjq"){
				if($("#ball0_" + day + "_" + i).attr("class") == "result_0" || $("#ball1_" + day + "_" + i).attr("class") == "result_0" || $("#ball2_" + day + "_" + i).attr("class") == "result_0" || $("#ball3_" + day + "_" + i).attr("class") == "result_0" || $("#ball4_" + day + "_" + i).attr("class") == "result_0" || $("#ball5_" + day + "_" + i).attr("class") == "result_0" || $("#ball6_" + day + "_" + i).attr("class") == "result_0" || $("#ball7_" + day + "_" + i).attr("class") == "result_0" ){
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
				}
				if ($("#ball0_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"0";
				}
				if ($("#ball1_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"1";
				}
				if ($("#ball2_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"2";
				}
				if ($("#ball3_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"3";
				}
				if ($("#ball4_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"4";
				}
				if ($("#ball5_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"5";
				}
				if ($("#ball6_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"6";
				}
				if ($("#ball7_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"7";
				}
				//加定胆标识："$"
				if($("#dingdan_"+day+"_"+i).attr("checked")){
					if(zhuma.indexOf("$")>-1){
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^"+zhuma;
					}else{
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^$"+zhuma;
					}
					isDingDan = true;
				}else{
					if ($("#ball0_" + day + "_" + i).attr("class") == "result_0" || $("#ball1_" + day + "_" + i).attr("class") == "result_0" || $("#ball2_" + day + "_" + i).attr("class") == "result_0" || $("#ball3_" + day + "_" + i).attr("class") == "result_0" || $("#ball4_" + day + "_" + i).attr("class") == "result_0" || $("#ball5_" + day + "_" + i).attr("class") == "result_0" || $("#ball6_" + day + "_" + i).attr("class") == "result_0" || $("#ball7_" + day + "_" + i).attr("class") == "result_0") {
						zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match + "|"+spfStr+"^";
					}
				}
			}else if(jcType != null && jcType == "bf"){
				var flag = false;
				for(var k=0;k<3;k++){
					for(var m=0;m<6;m++){
						if($("#ball"+k+m+"_" + day + "_" + i).attr("class") == "result_1"){
							matchDate = $("#day_" + day + "_" + i).val();
							matchWeek = $("#weekid_" + day + "_" + i).val();
							match = $("#no_" + day + "_" + i).html();
							spfStr = spfStr+k+m;
							flag = true;
						}
					}
				}
				for(var k=3;k<6;k++){
					for(var m=0;m<3;m++){
						if($("#ball"+k+m+"_" + day + "_" + i).attr("class") == "result_1"){
							matchDate = $("#day_" + day + "_" + i).val();
							matchWeek = $("#weekid_" + day + "_" + i).val();
							match = $("#no_" + day + "_" + i).html();
							spfStr = spfStr+k+m;
							flag = true;
						}
					}
				}
				if ($("#ball33_" + day + "_" + i).attr("class") == "result_1") {
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
					spfStr = spfStr+"33";
					flag = true;
				}
				if ($("#ball90_" + day + "_" + i).attr("class") == "result_1") {
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
					spfStr = spfStr+"90";
					flag = true;
				}
				if ($("#ball99_" + day + "_" + i).attr("class") == "result_1") {
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
					spfStr = spfStr+"99";
					flag = true;
				}
				if ($("#ball09_" + day + "_" + i).attr("class") == "result_1") {
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
					spfStr = spfStr+"09";
					flag = true;
				}
				//加定胆标识："$"
				if($("#dingdan_"+day+"_"+i).attr("checked")){
					if(zhuma.indexOf("$")>-1){
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^"+zhuma;
					}else{
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^$"+zhuma;
					}
					isDingDan = true;
				}else{
					if (flag){
						zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match + "|"+spfStr+"^";
					}
				}
			}else if(jcType != null && jcType == "bqc"){
				if($("#ball33_" + day + "_" + i).attr("class") == "result_0" || $("#ball31_" + day + "_" + i).attr("class") == "result_0" || $("#ball30_" + day + "_" + i).attr("class") == "result_0" || $("#ball13_" + day + "_" + i).attr("class") == "result_0" || $("#ball11_" + day + "_" + i).attr("class") == "result_0" || $("#ball10_" + day + "_" + i).attr("class") == "result_0" || $("#ball03_" + day + "_" + i).attr("class") == "result_0" || $("#ball01_" + day + "_" + i).attr("class") == "result_0" || $("#ball00_" + day + "_" + i).attr("class") == "result_0"){
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
				}
				if ($("#ball33_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"33";
				}
				if ($("#ball31_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"31";
				}
				if ($("#ball30_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"30";
				}
				if ($("#ball13_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"13";
				}
				if ($("#ball11_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"11";
				}
				if ($("#ball10_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"10";
				}
				if ($("#ball03_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"03";
				}
				if ($("#ball01_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"01";
				}
				if ($("#ball00_" + day + "_" + i).attr("class") == "result_0") {
					spfStr = spfStr+"00";
				}
				//加定胆标识："$"
				if($("#dingdan_"+day+"_"+i).attr("checked")){
					if(zhuma.indexOf("$")>-1){
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^"+zhuma;
					}else{
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^$"+zhuma;
					}
					isDingDan = true;
				}else{
					if($("#ball33_" + day + "_" + i).attr("class") == "result_0" || $("#ball31_" + day + "_" + i).attr("class") == "result_0" || $("#ball30_" + day + "_" + i).attr("class") == "result_0" || $("#ball13_" + day + "_" + i).attr("class") == "result_0" || $("#ball11_" + day + "_" + i).attr("class") == "result_0" || $("#ball10_" + day + "_" + i).attr("class") == "result_0" || $("#ball03_" + day + "_" + i).attr("class") == "result_0" || $("#ball01_" + day + "_" + i).attr("class") == "result_0" || $("#ball00_" + day + "_" + i).attr("class") == "result_0"){
						zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match + "|"+spfStr+"^";
					}
				}
			}else{
				if ($("#ball0_" + day + "_" + i).attr("class") == "result_1" || $("#ball1_" + day + "_" + i).attr("class") == "result_1" || $("#ball3_" + day + "_" + i).attr("class") == "result_1") {
					matchDate = $("#day_" + day + "_" + i).val();
					matchWeek = $("#weekid_" + day + "_" + i).val();
					match = $("#no_" + day + "_" + i).html();
				}
				if ($("#ball0_" + day + "_" + i).attr("class") == "result_1") {
					spfStr = spfStr+"0";
				}
				if ($("#ball1_" + day + "_" + i).attr("class") == "result_1") {
					spfStr = spfStr+"1";
				}
				if ($("#ball3_" + day + "_" + i).attr("class") == "result_1") {
					spfStr = spfStr+"3";
				}
				//加定胆标识："$"
				if($("#dingdan_"+day+"_"+i).attr("checked")){
					if(zhuma.indexOf("$")>-1){
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^"+zhuma;
					}else{
						zhuma = matchDate + "|" + matchWeek + "|" + match + "|"+spfStr +"^$"+zhuma;
					}
					isDingDan = true;
				}else{
					if ($("#ball0_" + day + "_" + i).attr("class") == "result_1" || $("#ball1_" + day + "_" + i).attr("class") == "result_1" || $("#ball3_" + day + "_" + i).attr("class") == "result_1") {
						zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match + "|"+spfStr+"^";
					}
				}
			}
		}
	}
	var lotteryListSelect = $("#list_LotteryNumber");
	var opt;
	var wanfa = saleMa(isDingDan);
	if (wanfa.indexOf("|") != -1) {
		for (var k = 0; k < wanfa.split("|").length; k++) {
			opt = new Option(zhuma, zhuma);
			opt.setAttribute('wangFang', wanfa.split("|")[k]);
			add_codes(zhuma, zhuma);
			lotteryListSelect[k].options.add(opt);
		}
	} else {
		opt = new Option(zhuma, zhuma);
		opt.setAttribute('wangFang', wanfa);
		add_codes(zhuma, zhuma);
		lotteryListSelect[0].options.add(opt);
	}

	//添加到弹出框的注码
	$("#alert_zhuma").text(zhuma);
}

//加载页面时的清空操作
function cleanReadySPF() {
	
	$("#allWanfa").html("");
	$("option", $("#list_LotteryNumber")).remove();
	$(".result_1").removeClass("result_1").addClass("result_3");
	$(".result_0").removeClass("result_0").addClass("result_2");
	$("input[name='checkbox']").attr("checked", false);
	//胜平负
	$("#lab_Num_standrad").text(0);
	$("#investField_standrad").text(0);
	$('#tb_Multiple_standrad').val(1);
	$("#buyAmt").val(0);
	$("#safeAmt").val(0);
	$("#buyAmt_bili").html(0);
	$("#safeAmt_bili").html(0);
	$("#minAmt").val(1);
	$("#isAllSafeAmt").removeAttr("checked");
	$("#isMinAmt").removeAttr("checked");
	$("#safeAmt").removeAttr("disabled");
	$("#commisionRatio option:eq(9)").attr("selected",true);
	$("#matchNum").html(0);
	//总进球
	$("#lab_Num_standrad_zjq").text(0);
	$("#investField_standrad_zjq").text(0);
	$('#tb_Multiple_standrad_zjq').val(1);
	$("#buyAmt_zjq").val(0);
	$("#safeAmt_zjq").val(0);
	$("#buyAmt_bili_zjq").html(0);
	$("#safeAmt_bili_zjq").html(0);
	$("#minAmt_zjq").val(1);
	$("#isAllSafeAmt_zjq").removeAttr("checked");
	$("#isMinAmt_zjq").removeAttr("checked");
	$("#safeAmt_zjq").removeAttr("disabled");
	$("#commisionRatio_zjq option:eq(9)").attr("selected",true);
	$("#matchNum_zjq").html(0);
	//比分
	$("#lab_Num_standrad_bf").text(0);
	$("#investField_standrad_bf").text(0);
	$('#tb_Multiple_standrad_bf').val(1);
	$("#buyAmt_bf").val(0);
	$("#safeAmt_bf").val(0);
	$("#buyAmt_bili_bf").html(0);
	$("#safeAmt_bili_bf").html(0);
	$("#minAmt_bf").val(1);
	$("#isAllSafeAmt_bf").removeAttr("checked");
	$("#isMinAmt_bf").removeAttr("checked");
	$("#safeAmt_bf").removeAttr("disabled");
	$("#commisionRatio_bf option:eq(9)").attr("selected",true);
	$("#matchNum_bf").html(0);
	//半全场
	$("#lab_Num_standrad_bqc").text(0);
	$("#investField_standrad_bqc").text(0);
	$('#tb_Multiple_standrad_bqc').val(1);
	$("#buyAmt_bqc").val(0);
	$("#safeAmt_bqc").val(0);
	$("#buyAmt_bili_bqc").html(0);
	$("#safeAmt_bili_bqc").html(0);
	$("#minAmt_bqc").val(1);
	$("#isAllSafeAmt_bqc").removeAttr("checked");
	$("#isMinAmt_bqc").removeAttr("checked");
	$("#safeAmt_bqc").removeAttr("disabled");
	$("#commisionRatio_bqc option:eq(9)").attr("selected",true);
	$("#matchNum_bqc").html(0);
	
		
	
	
	
	$("#PassFreedom dl").each(function(i){
		$(this).css("display","none");
		if($(this).hasClass("Switch")){
			$(this).removeClass("CheckBox light Switch").addClass("CheckBox light");
		}
		if($(this).hasClass("DisabledNormal")){
			$(this).removeClass("DisabledNormal");
		}
	});
	$(".PassSeries dl").each(function(j){
		$(this).css("display","none");
		if($(this).hasClass("Switch")){
			$(this).removeClass("RadioButton light Switch").addClass("RadioButton light");
		}
		if($(this).hasClass("DisabledNormal")){
			$(this).removeClass("DisabledNormal");
		}
	});
	allMatch = 0;
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

//倍数验证

function multipleValidateJC() {
	var jcType = $("#jcType").val();
	var multiple_stand = "tb_Multiple_standrad";
	if(jcType != null && jcType == "zjq"){
		multiple_stand = "tb_Multiple_standrad_zjq";
	}else if(jcType == "bf"){
		multiple_stand = "tb_Multiple_standrad_bf";
	}else if(jcType == "bqc"){
		multiple_stand = "tb_Multiple_standrad_bqc";
	}
	// 如用户倍数框留空，光标离开倍数输入框，则倍数输入框默认为1.
	if ($('#'+multiple_stand).val() == '' || $('#'+multiple_stand).val() == undefined || $('#'+multiple_stand).val() == null || Number($('#'+multiple_stand).val()) <= 0) {
		$('#'+multiple_stand).val(1);
		$("#tb_Multiple").val(1);
		$('#'+multiple_stand).focus();
		$('#'+multiple_stand).select();
	}

	//判断倍数是否在1-10万倍之间
	if (Number($('#'+multiple_stand).val()) >100000) {
		$('#'+multiple_stand).val(100000);
		$("#tb_Multiple").val(100000);
		$('#'+multiple_stand).focus();
		$('#'+multiple_stand).select();
	}

	//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
	var pattern = /^-?\d+$/;
	if (isNaN($('#'+multiple_stand).val()) || $('#'+multiple_stand).val().search(pattern) != 0) {
		$('#'+multiple_stand).val(1);
		$("#tb_Multiple").val(1);
		$('#'+multiple_stand).focus();
		$('#'+multiple_stand).select();
		return false;
	}
	return true;
}

//修改总金额
function updateMultipleTotalMoney() {
	var lab_num_sd =  "lab_Num_standrad"; //注数
	var multiple_stand = "tb_Multiple_standrad";  //倍数
	var investFiled_sd = "investField_standrad";//总金额
	var current_money =  "current_money";
	var jctype = $("#jcType").val();
	if(jctype != null && jctype == "zjq"){
		lab_num_sd = "lab_Num_standrad_zjq";
		multiple_stand = "tb_Multiple_standrad_zjq";
		investFiled_sd = "investField_standrad_zjq";//总金额
		current_money =  "current_money_zjq";
	}else if(jctype == "bf"){
		lab_num_sd = "lab_Num_standrad_bf";
		multiple_stand = "tb_Multiple_standrad_bf";
		investFiled_sd = "investField_standrad_bf";//总金额
		current_money =  "current_money_bf";
	}else if(jctype == "bqc"){
		lab_num_sd = "lab_Num_standrad_bqc";
		multiple_stand = "tb_Multiple_standrad_bqc";
		investFiled_sd = "investField_standrad_bqc";//总金额
		current_money =  "current_money_bqc";
	}
	
	var zhuShu = Number($("#"+lab_num_sd).html());
	var beishu = $("#"+multiple_stand).attr("value");
	$("#tb_Multiple").val(beishu);
	totalMoney = parseInt(2 * beishu * zhuShu);
	$("#"+investFiled_sd).html(totalMoney);
	$("#"+current_money).html(totalMoney);
	if (parseInt(($("#touzhu_money").html()) - ($("#"+current_money).html())) < 0) {
		$("#final_money").html("0");
	} else {
		$("#final_money").html(parseInt(($("#touzhu_money").html()) - ($("#"+current_money).html())));
	}
}

//点击赛事添加右侧的js (a代表id标号，b代表胜-3，平-1，负-0,week代表星期几)
function addMatchForRight(object, day, a, b,week) {
	if (object.attr("class") != "result_1") {
		if (($("#CheckWin-" + day + "-" + a).hasClass("selected") != true && $("#CheckTie-" + day + "-" + a).hasClass("selected") != true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") == true) || ($("#CheckWin-" + day + "-" + a).hasClass("selected") == true && $("#CheckTie-" + day + "-" + a).hasClass("selected") != true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") != true) || ($("#CheckWin-" + day + "-" + a).hasClass("selected") != true && $("#CheckTie-" + day + "-" + a).hasClass("selected") == true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") != true)) {
			$("#choose_" + day + "_" + a).remove();
			allMatch -= 1;
			dingDanCheckbox();//定胆复选框的状态改变
		} else {
			if (b == 3) {
				$("#CheckWin-" + day + "-" + a).removeClass("selected");
			} else if (b == 1) {
				$("#CheckTie-" + day + "-" + a).removeClass("selected");
			} else if (b == 0) {
				$("#CheckLoss-" + day + "-" + a).removeClass("selected");
			}
		}
		if (allMatch < 8) {
			if(allMatch < 2){
				$("#tzTip").css("display","");
			}else{
				$("#tzTip").css("display","none");
			}
			for (var i = allMatch; i < 9; i++) {
				$("#r" + (allMatch + 1) + "c1").css("display", "none");
				$("#r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
				if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
					$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));

					$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
				}
			}
			//定义数组存放多串投注方式时的id编号
			var more = ["r3c3,r3c4", "r4c4,r4c5,r4c6,r4c11", "r5c5,r5c6,r5c10,r5c16,r5c20,r5c26", "r6c6,r6c7,r6c15,r6c20,r6c22,r6c35,r6c42,r6c50,r6c57", "r7c7,r7c8,r7c21,r7c35,r7c120", "r8c8,r8c9,r8c28,r8c56,r8c70,r8c247"];
			if (allMatch > 1) {
				for (var j = allMatch; j < 8; j++) {
					for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
						var id = more[allMatch - 2].split(",")[m];
						$("#" + id).css("display", "none");
						$("#" + id).children().removeClass();
						if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
							$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
						}
					}
				}
			}
		}

	} else {
		if ($("#choose_" + day + "_" + a).length < 1) {
									
			if($("#erjiwanfa").val()=="单关投注"){
				$("#choose_list").append("<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult($(this)," + day + "," + a + ",3,1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='homeTeam-" + day + "-" + a + "'></td><td><span id='CheckWin-" + day + "-" + a + "' class='CheckWin' onclick='removeThisResult($(this)," + day + "," + a + ",3,0);'>胜</span><span id='CheckTie-" + day + "-" + a + "' class='CheckTie' onclick='removeThisResult($(this)," + day + "," + a + ",1,0)'>平</span><span id='CheckLoss-" + day + "-" + a + "' class='CheckLoss' onclick='removeThisResult($(this)," + day + "," + a + ",0,0)'>负</span></td><td><input class='dingdan_checkbox' disabled='disabled' id='dingdan_" + day + "_" + a + "' type='checkbox' name='checkbox' value='checkbox' onclick='dingDanChoose($(this)," + day + "," + a + ")'></td></tr>");
			}else if($("#erjiwanfa").val()=="过关投注"){
				$("#choose_list").append("<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult($(this)," + day + "," + a + ",3,1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='homeTeam-" + day + "-" + a + "'></td><td><span id='CheckWin-" + day + "-" + a + "' class='CheckWin' onclick='removeThisResult($(this)," + day + "," + a + ",3,0);'>胜</span><span id='CheckTie-" + day + "-" + a + "' class='CheckTie' onclick='removeThisResult($(this)," + day + "," + a + ",1,0)'>平</span><span id='CheckLoss-" + day + "-" + a + "' class='CheckLoss' onclick='removeThisResult($(this)," + day + "," + a + ",0,0)'>负</span></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' name='checkbox' value='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")'></td></tr>");
			}
			
			if (b == 3) {
				$("#CheckWin-" + day + "-" + a).addClass("selected");
			} else if (b == 1) {
				$("#CheckTie-" + day + "-" + a).addClass("selected");
			} else if (b == 0) {
				$("#CheckLoss-" + day + "-" + a).addClass("selected");
			}
			allMatch += 1;
			dingDanCheckbox();//定胆复选框的状态改变
		} else {
			if (b == 3) {
				$("#CheckWin-" + day + "-" + a).addClass("selected");
			} else if (b == 1) {
				$("#CheckTie-" + day + "-" + a).addClass("selected");
			} else if (b == 0) {
				$("#CheckLoss-" + day + "-" + a).addClass("selected");
			}
		}
		if (allMatch > 10) {
			openAlert(decodeURI(EncodeUtf8("您好，单个方案最多只能选择10场比赛进行投注！")));
			$("#choose_" + day + "_" + a).remove();
			$("#checkbox_" + day + "_" + a).attr("checked", false);
			allMatch -= 1;
			$("#ball" + b + "_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			if (b == 3) {
				$("#CheckWin-" + day + "-" + a).removeClass("selected");
			} else if (b == 1) {
				$("#CheckTie-" + day + "-" + a).removeClass("selected");
			} else if (b == 0) {
				$("#CheckLoss-" + day + "-" + a).removeClass("selected");
			}
			checkZhuma();
		} else {
			var no = $("#no_" + day + "_" + a).html();
			var homeTeam = $("#hteam_" + day + "_" + a).html();

			if (allMatch < 9) {
				if(allMatch < 2){
					$("#tzTip").css("display","");
				}else{
					$("#tzTip").css("display","none");
				}
				for (var i = 2; i <= allMatch; i++) {
					$("#r" + allMatch + "c1").css("display", "");
				}

				//定义数组存放多串投注方式时的id编号
				if (allMatch == 3) {
					var more = ["3", "4"];
				} else if (allMatch == 4) {
					var more = ["4", "5", "6", "11"];
				} else if (allMatch == 5) {
					var more = ["5", "6", "10", "16", "20", "26"];
				} else if (allMatch == 6) {
					var more = ["6", "7", "15", "20", "22", "35", "42", "50", "57"];
				} else if (allMatch == 7) {
					var more = ["7", "8", "21", "35", "120"];
				} else if (allMatch == 8) {
					var more = ["8", "9", "28", "56", "70", "247"];
				}

				for (var j = 3; j <= allMatch; j++) {
					for (var m = 0; m < more.length; m++) {
						var id = "r" + allMatch + "c" + more[m];
						$("#" + id).css("display", "");
					}
				}
			}
			$("#no-" + day + "-" + a).html(week+no);
			$("#homeTeam-" + day + "-" + a).html(homeTeam);
		}
	}

	$("#matchNum").html(allMatch);
	var wanfa = $("#allWanfa").val();
	guoGuanWays(wanfa, 0);
	danguanCount();
}

//计算单关投注时的注数和金额数
function danguanCount(){
	if($("#erjiwanfa").val()=="单关投注" || $("#bf_r1c1").hasClass("Switch")){
		var zhushu=0;
		var beishu = $("#tb_Multiple_standrad").attr("value");
		
		if($("#jcType").val() != null && $("#jcType").val() == "zjq"){
			$("#zjq_choose_list tbody tr td .selected").each(function(){
				zhushu+=1;
			});
			$("#lab_Num_standrad_zjq").html(zhushu);
			$("#investField_standrad_zjq").html(zhushu * beishu * 2);
		}else if($("#jcType").val() != null && $("#jcType").val() == "bf"){
			$("#bf_choose_list tbody tr td .selected").each(function(){
				zhushu+=1;
			});
			$("#lab_Num_standrad_bf").html(zhushu);
			$("#investField_standrad_bf").html(zhushu * beishu * 2);
		}else if($("#jcType").val() != null && $("#jcType").val() == "bqc"){
			$("#bqc_choose_list tbody tr td .selected").each(function(){
				zhushu+=1;
			});
			$("#lab_Num_standrad_bqc").html(zhushu);
			$("#investField_standrad_bqc").html(zhushu * beishu * 2);
		}else{
			$("#choose_list tbody tr td .selected").each(function(){
				zhushu+=1;
			});
			$("#lab_Num_standrad").html(zhushu);
			$("#investField_standrad").html(zhushu * beishu * 2);
		}
	}else if($("#jcType").val() == "bf" && !$("#bf_r1c1").hasClass("Switch")){
		$("#lab_Num_standrad_bf").html(0);
		$("#investField_standrad_bf").html(0);
	}
};
//点击右侧赛事去掉选中的该结果object（当前对象）、 a（球的位置）、 b（胜平负代码310）、key（选择的是否是删除整场所有结果的选择按钮）
function removeThisResult(object, day, a, b, key) {
	if (key == 1) {
		$("#ball3_" + day + "_" + a).removeClass("result_1").addClass("result_3");
		$("#ball1_" + day + "_" + a).removeClass("result_1").addClass("result_3");
		$("#ball0_" + day + "_" + a).removeClass("result_1").addClass("result_3");
		$("#checkbox_" + day + "_" + a).text("包");
		$("#choose_" + day + "_" + a).remove();
		allMatch -= 1;
	} else if (key == 0) {
		$("#ball" + b + "_" + day + "_" + a).removeClass("result_1").addClass("result_3");
		if (($("#CheckWin-" + day + "-" + a).hasClass("selected") != true && $("#CheckTie-" + day + "-" + a).hasClass("selected") != true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") == true) || ($("#CheckWin-" + day + "-" + a).hasClass("selected") == true && $("#CheckTie-" + day + "-" + a).hasClass("selected") != true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") != true) || ($("#CheckWin-" + day + "-" + a).hasClass("selected") != true && $("#CheckTie-" + day + "-" + a).hasClass("selected") == true && $("#CheckLoss-" + day + "-" + a).hasClass("selected") != true)) {
			$("#choose_" + day + "_" + a).remove();
			$("#checkbox_" + day + "_" + a).text("包");
			allMatch -= 1;
		} else {
			object.removeClass("selected");
		}
	}

	$("#checkbox_" + day + "_" + a).attr("checked", false);
	checkZhuma();

	$("#matchNum").html(allMatch);
	if (allMatch < 8) {
		for (var i = allMatch; i < 9; i++) {
			$("#r" + (allMatch + 1) + "c1").css("display", "none");
			$("#r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
			if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
				$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));
				$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
			}
		}

		//定义数组存放多串投注方式时的id编号
		var more = ["r3c3,r3c4", "r4c4,r4c5,r4c6,r4c11", "r5c5,r5c6,r5c10,r5c16,r5c20,r5c26", "r6c6,r6c7,r6c15,r6c20,r6c22,r6c35,r6c42,r6c50,r6c57", "r7c7,r7c8,r7c21,r7c35,r7c120", "r8c8,r8c9,r8c28,r8c56,r8c70,r8c247"];
		if (allMatch > 1) {
			for (var j = allMatch; j < 8; j++) {
				for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
					var id = more[allMatch - 2].split(",")[m];
					$("#" + id).css("display", "none");
					$("#" + id).children().removeClass();
					if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
						$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
					}
				}
			}
		}
	}

	var wanfa = $("#allWanfa").val();
	guoGuanWays(wanfa, 0);
	danguanCount();
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

/* var a = [1, 2, 3];
 	document.write('<h1>'+a.join()+'里选3个进行排列组合的实例如下：</h1>');
 	document.write('<h1>排列</h1><ol><li>' + combAndArrange(a, 3, 'p').join('</li><li>') + '</li></ol>');
 	document.write('<h1>组合</h1><ol><li>' + combAndArrange(a, 3, 'c').join('</li><li>') + '</li></ol>');
 */
function combAndArrange(a, r, t) {

	function arrangeFirst(arr) {
		var len = arr.length;
		if (len == 2) {
			var a = arr[0],
			b = arr[1];
			return [a + b, b + a];
		} else if (len == 1) {
			return arr;
		} else {
			var strRtn = "";
			for (var i = 0; i < len; i++) {
				strRtn += merge(arr[i], arguments.callee(arr.slice(0, i).concat(arr.slice(i + 1, len)))).join(" , ") + " , ";
			}
			return strRtn.replace(/ \,$ /, "").split(" , ");
		}

		function merge(head, arr) {
			for (var i = 0; i < arr.length; i++) {
				arr[i] = head + arr[i];
			}
			return arr;
		}
	}

	function arrange(o, r) {
		var result = [];
		while (o.length) {
			var tmp = o.pop();
			if (tmp.length == r) result.push(tmp);
		}
		return result;
	}

	function combination(a, r, s) {
		var ret = [];
		s = s || [];

		if (r == 0) {
			return [s];
		}

		for (var i = 0; i <= a.length - r; i++) {
			ret = ret.concat(arguments.callee(a.slice(i + 1), r - 1, s.slice(0).concat(a[i])));
		}
		return ret;
	}
	var la = combination(a, r);

	if (t == "c") {
		return la;
	} else if (t == "p") {
		var pret = [];
		for (var j = 0,
		l = la.length; j < l; j++) {
			Array.prototype.push.apply(pret, arrange(arrangeFirst(la[j].join("-").split("-")), r));
		}
		return pret;
	}
}

function chuan2_1(a,b) {
	var chuan2_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan2_1.length; m++) {
		k = chuan2_1[m].toString().replace(',', '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 2) {
			keke = Number(k[n]) * Number(k[n + 1]);
		}
		ji += keke;
	}
	return ji;
}
function chuan2_1_dan(a,d,b) {
	var chuan2_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan2_1.length; m++) {
		k = chuan2_1[m].toString().replace(',', '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n < k.length - 1; n++) {
			keke = Number(k[n]) *Number( k[n+1]);
		}
		ji += keke;
	}
	return ji;
}
function chuan3_1_dan(a,d,b) {
	var chuan3_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan3_1.length; m++) {
		k = chuan3_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n < 1; n++) {
			keke = Number(k[n])*Number(k[n+1])*Number(k[n+2]);
		}
		ji += keke;
	}
	return ji;
}
function chuan4_1_dan(a,d,b) {
	var chuan4_1 = combAndArrange(a, b, 'c');
	
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan4_1.length; m++) {
		k = chuan4_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n < 1; n++) {
			keke =Number(k[n])*Number(k[n+1])*Number(k[n+2])*Number(k[n + 3]);
		}
		ji += keke;
	}
     
	return ji;
}
function chuan5_1_dan(a,d,b) {
	var chuan5_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan5_1.length; m++) {
		k = chuan5_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n < 1; n++) {
			keke =Number(k[n])*Number(k[n+1])*Number(k[n+2])*Number(k[n + 3])*Number(k[n + 4]);
		}
		ji += keke;
	}
	return ji;
}
function chuan6_1_dan(a,d,b) {
	var chuan6_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan6_1.length; m++) {
		k = chuan6_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n <1; n++) {
			keke = Number(k[n])*Number(k[n+1])*Number(k[n+2])*Number(k[n + 3])*Number(k[n + 4])*Number(k[n + 5]);
		}
		ji += keke;
	}
	return ji;
}
function chuan7_1_dan(a,d,b) {
	var chuan7_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan7_1.length; m++) {
		k = chuan7_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n <1; n++) {
			keke = Number(k[n])*Number(k[n+1])*Number(k[n+2])*Number(k[n + 3])*Number(k[n + 4])*Number(k[n + 5])*Number(k[n + 6]);
		}
		ji += keke;
	}
	return ji;
}
function chuan8_1_dan(a,d,b) {
	var chuan8_1 = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan8_1.length; m++) {
		k = chuan8_1[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < d.length; j++) {
			var karr = d[j];
			k.splice(0,0,karr+"");
		}
		var keke = 0;
		for (var n = 0; n <  1; n++) {
			keke = Number(k[n])*Number(k[n+1])*Number(k[n+2])*Number(k[n + 3])*Number(k[n + 4])*Number(k[n + 5])*Number(k[n + 6])*Number(k[n + 7]);
		}
		ji += keke;
	}
	return ji;
}
function chuan3_1(a) {
	var chuan3_1 = combAndArrange(a, 3, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan3_1.length; m++) {
		k = chuan3_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 3) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]);
		}
		ji += keke;
	}
	return ji;
}
function chuan4_1(a) {
	var chuan4_1 = combAndArrange(a, 4, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan4_1.length; m++) {
		k = chuan4_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 4) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]) * Number(k[n + 3]);
		}
		ji += keke;
	}
	return ji;
}
function chuan5_1(a) {
	var chuan5_1 = combAndArrange(a, 5, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan5_1.length; m++) {
		k = chuan5_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 5) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]) * Number(k[n + 3]) * Number(k[n + 4]);
		}
		ji += keke;
	}
	return ji;
}
function chuan6_1(a) {
	var chuan6_1 = combAndArrange(a, 6, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan6_1.length; m++) {
		k = chuan6_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 6) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]) * Number(k[n + 3]) * Number(k[n + 4]) * Number(k[n + 5]);
		}
		ji += keke;
	}
	return ji;
}
function chuan7_1(a) {
	var chuan7_1 = combAndArrange(a, 7, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan7_1.length; m++) {
		k = chuan7_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 7) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]) * Number(k[n + 3]) * Number(k[n + 4]) * Number(k[n + 5]) * Number(k[n + 6]);
		}
		ji += keke;
	}
	return ji;
}
function chuan8_1(a) {
	var chuan8_1 = combAndArrange(a, 8, 'c');
	var k = [];
	var ji = 0;
	for (var m = 0; m < chuan8_1.length; m++) {
		k = chuan8_1[m].toString().replace(/\,/g, '*').split("*");
		var keke = 0;
		for (var n = 0; n < k.length - 1; n += 8) {
			keke = Number(k[n]) * Number(k[n + 1]) * Number(k[n + 2]) * Number(k[n + 3]) * Number(k[n + 4]) * Number(k[n + 5]) * Number(k[n + 6]) * Number(k[n + 7]);
		}
		ji += keke;
	}
	return ji;
}
//定胆，过关复选框的状态
function dingDanCheckbox(){
	var wfType = "r";
	var type = $("#jcType").val();
	if(type != null && type == "zjq"){
		wfType = "zjq_r";
	}else if(type != null && type == "bf"){
		wfType = "bf_r";
	}
	var ddNum = 0;  //被定胆的场数
	$(".dingdan_checkbox").each(function(i){
		if($(this).attr("checked")){
			ddNum++;
		}
	});
	//由选择的玩法影响定胆复选框是否可用
	if($(".PassFreedom").hasClass("selected")){
		for(var m=2;m<=8;m++){
			if($("#"+wfType+m+"c1").hasClass("Switch")){
				if(m-1 == ddNum){
					$(".dingdan_checkbox").each(function(i){
						if(!$(this).attr("checked")){
							$(this).attr("disabled",true);
						}
					});
					for(var i=2;i<=ddNum;i++){
						$("#"+wfType+i+"c1").unbind("click").removeAttr("onclick");
						$("#"+wfType+i+"c1").addClass("DisabledNormal");
					}
					return false;
				}
			}
		}
	}
	$(".dingdan_checkbox").each(function(i){
		//设置过关复选框不可用状态
		if(allMatch>2 && ddNum >= 2){
			for(var j=2;j<=ddNum;j++){
				//自由过关
				$("#"+wfType+j+"c1").unbind("click").removeAttr("onclick");
				$("#"+wfType+j+"c1").addClass("DisabledNormal");
				//多串过关
				if(ddNum>2 && j>2){
					var danxuan = 4;
					for(var l=3;l<= danxuan;l++){
						$("#"+wfType+j+"c"+l).unbind("click").removeAttr("onclick");
						$("#"+wfType+j+"c"+l).addClass("DisabledNormal");
						if(j == 4)
							danxuan = 11;
						else if(j == 5)
							danxuan = 26;
						else if(j == 6)
							danxuan = 57;
						else if(j == 7)
							danxuan = 120;
						else if(j == 8)
							danxuan = 247;
					}
				}
				var radio = 4;
				for(var m=ddNum+1;m<=radio;m++){
					var ind = j+1;
					$("#"+wfType+ind+"c"+m).removeClass("DisabledNormal");
					$("#"+wfType+ind+"c"+m).attr("onclick","RadioButton($(this));guoGuanWays('|"+ind+"串"+m+"',1);");
					if(ind == 4)
						radio = 11;
					else if(ind == 5)
						radio = 26;
					else if(ind == 6)
						radio = 57;
					else if(ind == 7)
						radio = 120;
					else if(ind == 8)
						radio = 247;
				}
			}
			//自由过关
			for(var k=ddNum+1;k<allMatch;k++){
				$("#"+wfType+k+"c1").removeClass("DisabledNormal");
				$("#"+wfType+k+"c1").attr("onclick","CheckBox($(this));guoGuanWays('|"+k+"串1',1);");
			}
		}else{
			//自由过关
			$("#"+wfType+"2c1").removeClass("DisabledNormal");
			$("#"+wfType+"2c1").attr("onclick","CheckBox($(this));guoGuanWays('|2串1',1);");
			//多串过关
			$("#"+wfType+"3c3").removeClass("DisabledNormal");
			$("#"+wfType+"3c3").attr("onclick","RadioButton($(this));guoGuanWays('|3串3',1);");
			$("#"+wfType+"3c4").removeClass("DisabledNormal");
			$("#"+wfType+"3c4").attr("onclick","RadioButton($(this));guoGuanWays('|3串4',1);");
		}
		//定胆复选框状态
		if(allMatch-1<=ddNum && !$(this).attr("checked")){
			$(this).attr("disabled",true);
		}else{
			if($("#erjiwanfa").val()!="单关投注"){				
				$(this).removeAttr("disabled");
			}		
		}
	});
}
//定胆，object为当前对象,day为日期，id为id标号
function dingDanChoose(object,day,id){
	dingDanCheckbox();
	checkZhuma();
	var bool = $("#dingdan_" + day + "_" + id).attr("checked"); 
	if( $("#allWanfa").val() == ""){
		guoGuanWays($("#allWanfa").val(), 0);
	}else{
		guoGuanWays($("#allWanfa").val(), 1);
	}
}

//n 为过关方式 比如：2串1,getNum为选的结果数的数组
function guoGuanWays(wanfa, key) {
	var wfType = "r";
	var type = $("#jcType").val();
	var multiple_standrad = "tb_Multiple_standrad";
	if(type != null && type == "zjq"){
		wfType = "zjq_r";
		multiple_standrad = "tb_Multiple_standrad_zjq";
	}else if(type != null && type == "bf"){
		wfType = "bf_r";
		multiple_standrad = "tb_Multiple_standrad_bf";
	}else if(type != null && type == "bqc"){
		wfType = "bqc_r";
		multiple_standrad = "tb_Multiple_standrad_bqc";
	}
	//自由过关的变量
	var zhushu1_1 = 0;
	var zhushu2_1 = 0,zhushu3_1 = 0,zhushu4_1 = 0,zhushu5_1 = 0,zhushu6_1 = 0,zhushu7_1 = 0,zhushu8_1 = 0;//多串过关的变量
	var zhushu3_3 = 0,zhushu3_4 = 0,zhushu4_4 = 0,zhushu4_5 = 0,zhushu4_6 = 0,zhushu4_11 = 0,zhushu5_5 = 0,zhushu5_6 = 0,zhushu5_10 = 0,zhushu5_16 = 0,zhushu5_20 = 0,zhushu5_26 = 0,zhushu6_6 = 0,zhushu6_7 = 0,zhushu6_15 = 0,zhushu6_20 = 0,zhushu6_22 = 0,zhushu6_35 = 0,zhushu6_42 = 0,zhushu6_50 = 0,zhushu6_57 = 0,zhushu7_7 = 0,zhushu7_8 = 0,zhushu7_21 = 0,zhushu7_35 = 0,zhushu7_120 = 0,
					zhushu8_8 = 0,zhushu8_9 = 0,zhushu8_28 = 0,zhushu8_56 = 0,zhushu8_70 = 0,zhushu8_247 = 0;
	
	
	//注数
	var zhushu =0;
	if(type != null && type == "bf"){
		danguanCount();
		zhushu1_1 = Number($("#lab_Num_standrad_bf").html());
		zhushu = zhushu + zhushu1_1;
	}
	//设置三级玩法,key为0时不设置，为1时设置
	if (key == 0 && wanfa != "|1串1") {
		zhushu = 0;
	} else if (key == 1) {
		if (wanfa == "|2串1" || wanfa == "|3串1" || wanfa == "|4串1" || wanfa == "|5串1" || wanfa == "|6串1" || wanfa == "|7串1" || wanfa == "|8串1") {
			var setWanfa = $("#allWanfa").val();
			if ($("#"+wfType + wanfa.substring(1, 2) + "c" + wanfa.substring(wanfa.indexOf('串') + 1)).hasClass("Switch")) {
				//定胆复选框状态
				var wfnum = Number(wanfa.substring(1, 2));
				if(allMatch == wfnum){
					var ggNum = 0;   //过关数
					for(var ci=2;ci<wfnum;ci++){
						if($("#"+wfType+ci+"c1").hasClass("Switch")){
							ggNum++;
						}
					}
					if(ggNum<1){
						for(var i=2;i<wfnum;i++){
							$("#"+wfType+i+"c1").removeClass("DisabledNormal");
							$("#"+wfType+i+"c1").attr("onclick","CheckBox($(this));guoGuanWays('|"+i+"串1',1);");
						}
						//当选中的玩法的串数等于选中的场次数，且只选中了这一种玩法时，所有定胆复选框不可用。
						$(".dingdan_checkbox").each(function(i){
							$(this).attr("disabled",true);
							$(this).removeAttr("checked");
						});
					}
				}else{
					dingDanCheckbox();
				}
				if ($("#allWanfa").val().indexOf(wanfa.substring(1)) != -1) {
					$("#allWanfa").val(setWanfa);
				} else {
					setWanfa = setWanfa + "|" + wanfa.substring(1);
					$("#allWanfa").val(setWanfa);
				}
			} else {
				setWanfa = setWanfa.substring(0, setWanfa.indexOf(wanfa.substring(1)) - 1) + setWanfa.substring(setWanfa.indexOf(wanfa.substring(1)) + wanfa.substring(1).length);
				$("#allWanfa").val(setWanfa);
				//定胆复选框状态
				var wfnum = Number(wanfa.substring(1, 2));
				var ggNum = 0;   //过关数
				var wfInd = 0;   //被选中的玩活的串数
				for(var ci=2;ci<=allMatch;ci++){
					if($("#"+wfType+ci+"c1").hasClass("Switch")){
						ggNum++;
						wfInd = ci;
					}
				}
				if(ggNum<1){//没有选择玩法时，所有的定胆复选框可用
					$(".dingdan_checkbox").each(function(i){
						$(this).removeAttr("disabled");
					});
				}else if(ggNum==1 && wfInd==allMatch){//只有最后一个玩法被选中时，所有的定胆复选框不可用
					$(".dingdan_checkbox").each(function(i){
						$(this).attr("disabled",true);
						$(this).removeAttr("checked");
					});
				}else{
					dingDanCheckbox();
				}
			}
		} else if (wanfa == "") {
			$("#allWanfa").val();
			zhushu = 0;
		} else if(wanfa == "|1串1" && type == "bf"){
			var setWanfa = $("#allWanfa").val();
			if($("#bf_r1c1").hasClass("Switch")){
				if ($("#allWanfa").val().indexOf(wanfa.substring(1)) != -1) {
					$("#allWanfa").val(setWanfa);
				} else {
					setWanfa = setWanfa + "|" + wanfa.substring(1);
					$("#allWanfa").val(setWanfa);
				}
			}else{
				setWanfa = setWanfa.substring(0, setWanfa.indexOf(wanfa.substring(1)) - 1) + setWanfa.substring(setWanfa.indexOf(wanfa.substring(1)) + wanfa.substring(1).length);
				$("#allWanfa").val(setWanfa);
			}
		}else {
			var setWanfa = wanfa;
			$("#allWanfa").val(setWanfa);
			zhushu = 0;
		}
	}
	//----------比分--单关不定胆--start---------
	var ggNum = 0;   //过关数
	var wfInd = 0;   //被选中的玩活的串数
	for(var ci=1;ci<=allMatch;ci++){
		if($("#"+wfType+ci+"c1").hasClass("Switch")){
			ggNum++;
			wfInd = ci;
		}
	}
	if(ggNum == 1 && wfInd == 1){
		$(".dingdan_checkbox").each(function(i){
			$(this).attr("disabled",true);
			$(this).removeAttr("checked");
		});
	}
	if(wanfa == "|1串1" && type == "bf" && ggNum == 0){
		$(".dingdan_checkbox").each(function(i){
			$(this).removeAttr("disabled");
		});
	}
	//----------比分--单关不定胆--end---------
	wanfa = $("#allWanfa").val();//对玩法重新赋值

	//得到注码
	var view = $("#list_LotteryNumber > option").text();
	var getNum = [];
	var getTuoNum = [];
	var getDanNum = [];
	var danmaunm = 0;
	var isDingdan = false; 
	var lotno = $("#lotNo").val();
	if(view.indexOf('$')>0){
		var danma = view.split("$")[0];
		var tuoma = view.split("$")[1];
		var tuomanum = tuoma.split("^");
		danmaunm = danma.split("^").length-1;
		for ( var t = 0; t < tuomanum.length-1; t++) {
			var num = tuomanum[t].split("|")[3].length;
			if(lotno == "J00002" || lotno == "J00004")
				num = num/2;
			getTuoNum[t] = num;
		}
		for ( var t = 0; t <danmaunm; t++) {
			var num =  danma.split("^")[t].split("|")[3].length;
			if(lotno == "J00002" || lotno == "J00004")
				num = num/2;
			getDanNum[t] = num;
		}
		isDingdan = true;
	}else{
		var singleMatch = view.split("^");
		for (var i = 0; i < singleMatch.length - 1; i++) {
			var num = singleMatch[i].split("|")[3].length;
			if(lotno == "J00002" || lotno == "J00004")
				num = num/2;
			getNum[i] = num;
		}
		isDingdan = false;
	}
	
	var beishu = $("#"+multiple_standrad).attr("value");
	$("#tb_Multiple").val(beishu);
	for (var i = 1; i < wanfa.split("|").length; i++) {
		n = wanfa.split("|")[i];
		if (n == "2串1") {
			if ($("#"+wfType+"2c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu2_1 = chuan2_1(getNum,2);
				}else{
					zhushu2_1 = chuan2_1_dan(getTuoNum,getDanNum,2-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu2_1 = -chuan2_1(getNum,b);
				}else{
					zhushu2_1 = -chuan2_1_dan(getTuoNum,getDanNum,2-danmaunm);
				}
			}
		} else if (n == "3串1") {
			if ($("#"+wfType+"3c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu3_1 = chuan3_1(getNum,3);
				}else{
					zhushu3_1 = chuan3_1_dan(getTuoNum,getDanNum,3-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu3_1 = -chuan3_1(getNum,3);
				}else{
					zhushu3_1 = -chuan3_1_dan(getTuoNum,getDanNum,3-danmaunm);
				}
			}
		} else if (n == "4串1") {
			if ($("#"+wfType+"4c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu4_1 = chuan4_1(getNum,4);
				}else{
					zhushu4_1 = chuan4_1_dan(getTuoNum,getDanNum,4-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu4_1 = -chuan4_1(getNum,4);
				}else{
					zhushu4_1 = -chuan4_1_dan(getTuoNum,getDanNum,4-danmaunm);
				}
				
			}
		} else if (n == "5串1") {
			if ($("#"+wfType+"5c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu5_1 = chuan5_1(getNum,5);
				}else{
					zhushu5_1 = chuan5_1_dan(getTuoNum,getDanNum,5-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu5_1 = -chuan5_1(getNum,5);
				}else{
					zhushu5_1 = -chuan5_1_dan(getTuoNum,getDanNum,5-danmaunm);
				}
			}
		} else if (n == "6串1") {
			if ($("#"+wfType+"6c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu6_1 = chuan6_1(getNum,6);
				}else{
					zhushu6_1 = chuan6_1_dan(getTuoNum,getDanNum,6-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu6_1 = -chuan6_1(getNum,6);
				}else{
					zhushu6_1 = -chuan6_1_dan(getTuoNum,getDanNum,6-danmaunm);
				}
			}
		} else if (n == "7串1") {
			if ($("#"+wfType+"7c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu7_1 = chuan7_1(getNum,7);
				}else{
					zhushu7_1 = chuan7_1_dan(getTuoNum,getDanNum,7-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu7_1 = -chuan7_1(getNum,7);
				}else{
					zhushu7_1 = -chuan7_1_dan(getTuoNum,getDanNum,7-danmaunm);
				}
			}
		} else if (n == "8串1") {
			if ($("#"+wfType+"8c1").hasClass("Switch")) {
				if(isDingdan==false){
					zhushu8_1 = chuan8_1(getNum,8);
				}else{
					zhushu8_1 = chuan8_1_dan(getTuoNum,getDanNum,8-danmaunm);
				}
			} else {
				if(isDingdan==false){
					zhushu8_1 = -chuan8_1(getNum,8);
				}else{
					zhushu8_1 = -chuan8_1_dan(getTuoNum,getDanNum,8-danmaunm);
				}
			}
		} else if (n == "3串3") {
			if(isDingdan==false){
				var zhumaArr = combAndArrange(getNum, 3, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu3_3 += chuan2_1(zhumaArr[k],2);
				}
			}else{
				if( 3-danmaunm == 0){
					zhushu3_3 = 0;
				}else{
					var chuan3_3 = combAndArrange(getTuoNum, 3-danmaunm, 'c');
					var k = [];
					var ji = 0;
					var klist = [];
					for (var m = 0; m < chuan3_3.length; m++) {
						k = chuan3_3[m].toString().replace(/\,/g, '*').split("*");
						for ( var j = 0; j < getDanNum.length; j++) {
							var karr = getDanNum[j];
						     k.splice(0,0,karr+"");
						}
						klist[m] = k;
					}
					var chuan3_3_list = [];
					for ( var n = 0; n <klist.length; n++) {
						zhushu3_3 += chuan2_1(klist[n], 2);
					}
			}
			}
		} else if (n == "3串4") {
			if(isDingdan==false){
				var zhumaArr = combAndArrange(getNum, 3, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu3_4 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu3_4 += chuan3_1(zhumaArr[k],3);
				}
			}else{
				if( 3-danmaunm == 0){
					zhushu3_4 = 0;
				}else{
					var chuan3_4  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,3-danmaunm);
					var chuanList = [];
					for ( var n = 0; n <chuan3_4.length; n++) {
						var comArr = combAndArrange(chuan3_4[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan3_4.length; n1++) {
						chuanList.splice(0, 0, chuan3_4[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
						var c = chuanList[k];
						var zhushu3_4_0 =1 ;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushu3_4_0 = zhushu3_4_0*parseInt(c[i2]);
						}
						zhushu3_4 =zhushu3_4 + zhushu3_4_0;
					}
			}
			}
		} else if (n == "4串4") {//539
			if(isDingdan==false){
				var zhumaArr = combAndArrange(getNum, 4, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_4 += chuan3_1(zhumaArr[k],3);
				}
			}else{//639
				if( 4-danmaunm == 0){
					zhushu4_4 = 0;
				}else{
					var chuan4_4  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,4-danmaunm);
					var chuanList = [];
					//c(4,3)
					for ( var n = 0; n <chuan4_4.length; n++) {
						var comArr = combAndArrange(chuan4_4[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
						var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu4_4 = zhushu4_4+zhushucj;
					}
		     }
			}
		} else if (n == "4串5") {//540
			if(isDingdan==false){
				var zhumaArr = combAndArrange(getNum, 4, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_5 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_5 += chuan4_1(zhumaArr[k],4);
 				}
			}else{	//640
				if( 4-danmaunm == 0){
					zhushu4_5 = 0;
				}else{
					var chuan4_5  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,4-danmaunm);
					var chuanList = [];
					//c(4,3)
					for ( var n = 0; n <chuan4_5.length; n++) {
						var comArr = combAndArrange(chuan4_5[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan4_5.length; n1++) {
						chuanList.splice(0, 0, chuan4_5[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu4_5 = zhushu4_5+zhushucj;
					}
				}
			}
		} else if (n == "4串6") {  //528
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 4, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_6 += chuan2_1(zhumaArr[k],2);
				}
			}else{//628
				if( 4-danmaunm == 0){
					zhushu4_6 = 0;
				}else{
					var chuan4_6  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,4-danmaunm);
					var chuanList = [];
					////c(4,2)
					for ( var n = 0; n <chuan4_6.length; n++) {
						var comArr = combAndArrange(chuan4_6[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                var zhushu4_6 = 0;
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu4_6 = zhushu4_6+zhushucj;
					}
				}
			}
		} else if (n == "4串11") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 4, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_11 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_11 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu4_11 += chuan4_1(zhumaArr[k],4);
				}
			}else{
				if( 4-danmaunm == 0){
					zhushu4_11 = 0;
				}else{
					var chuan4_11  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,4-danmaunm);
					var chuanList = [];
					//c(4,3)
					for ( var n = 0; n <chuan4_11.length; n++) {
						var comArr = combAndArrange(chuan4_11[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					////c(4,2)
					for ( var n = 0; n <chuan4_11.length; n++) {
						var comArr = combAndArrange(chuan4_11[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan4_11.length; n1++) {
						chuanList.splice(0, 0, chuan4_11[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu4_11 = zhushu4_11+zhushucj;
					}
				}
			}
		} else if (n == "5串5") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_5 += chuan4_1(zhumaArr[k],4);
				}
			}else{
				if( 5-danmaunm == 0){
					zhushu5_5 = 0;
				}else{
					var chuan5_5  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,3)
					for ( var n = 0; n <chuan5_5.length; n++) {
						var comArr = combAndArrange(chuan5_5[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu5_5 = zhushu5_5+zhushucj;
					}
				}
			}
		} else if (n == "5串6") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_6 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_6 += chuan5_1(zhumaArr[k],5);
				}
			}else{

				if( 5-danmaunm == 0){
					zhushu5_6 = 0;
				}else{
					var chuan5_6  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,3)
					for ( var n = 0; n <chuan5_6.length; n++) {
						var comArr = combAndArrange(chuan5_6[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan5_6.length; n1++) {
						chuanList.splice(0, 0, chuan5_6[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj*parseInt(c[i2]);
						}
						zhushu5_6 = zhushu5_6+zhushucj;
					}
				}
				
				
			}
		} else if (n == "5串10") {
			if(isDingdan==false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_10 += chuan2_1(zhumaArr[k],2);
				}
			}else{
				if( 5-danmaunm == 0){
					zhushu5_10 = 0;
				}else{
					var chuan5_10  =	getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,2)
					for ( var n = 0; n <chuan5_10.length; n++) {
						var comArr = combAndArrange(chuan5_10[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu5_10 = zhushu5_10+zhushucj;
					}
				}
				
				
			}
		} else if (n == "5串16") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_16 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_16 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_16 += chuan5_1(zhumaArr[k],5);
				}
			}else{
				if( 5-danmaunm == 0){
					zhushu5_16 = 0;
				}else{
					var chuan5_16  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,4)
					for ( var n = 0; n <chuan5_16.length; n++) {
						var comArr = combAndArrange(chuan5_16[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,3)
					for ( var n = 0; n <chuan5_16.length; n++) {
						var comArr = combAndArrange(chuan5_16[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,5)
					for ( var n1 = 0; n1 <chuan5_16.length; n1++) {
						chuanList.splice(0, 0, chuan5_16[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu5_16 = zhushu5_16+zhushucj;
					}
				}
				
				
			}
		} else if (n == "5串20") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_20 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_20 += chuan3_1(zhumaArr[k],3);
				}
			}else{
				if( 5-danmaunm == 0){
					zhushu5_20 = 0;
				}else{
					var chuan5_20  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,3)
					for ( var n = 0; n <chuan5_20.length; n++) {
						var comArr = combAndArrange(chuan5_20[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,2)
					for ( var n = 0; n <chuan5_20.length; n++) {
						var comArr = combAndArrange(chuan5_20[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
				
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu5_20 = zhushu5_20+zhushucj;
					}
				}
				
			}
		} else if (n == "5串26") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 5, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_26 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_26 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_26 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu5_26 += chuan5_1(zhumaArr[k],5);
				}
			}else{
				if( 5-danmaunm == 0){
					zhushu5_26 = 0;
				}else{
					var chuan5_26  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,5-danmaunm);
					var chuanList = [];
					//c(5,4)
					for ( var n = 0; n <chuan5_26.length; n++) {
						var comArr = combAndArrange(chuan5_26[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,3)
					for ( var n = 0; n <chuan5_26.length; n++) {
						var comArr = combAndArrange(chuan5_26[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,2)
					for ( var n = 0; n <chuan5_26.length; n++) {
						var comArr = combAndArrange(chuan5_26[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(5,5)
					for ( var n1 = 0; n1 <chuan5_26.length; n1++) {
						chuanList.splice(0, 0, chuan5_26[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu5_26 = zhushu5_26+zhushucj;
					}
				}
			}
		} else if (n == "6串6") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_6 += chuan5_1(zhumaArr[k],5);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_6 = 0;
				}else{
					var chuan6_6  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,5)
					for ( var n = 0; n <chuan6_6.length; n++) {
						var comArr = combAndArrange(chuan6_6[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_6 = zhushu6_6+zhushucj;
					}
				}
			}
		} else if (n == "6串7") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_7 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_7 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_7 = 0;
				}else{
					var chuan6_7  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,5)
					for ( var n = 0; n <chuan6_7.length; n++) {
						var comArr = combAndArrange(chuan6_7[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,6)
					for ( var n1 = 0; n1 <chuan6_7.length; n1++) {
						chuanList.splice(0, 0, chuan6_7[n1]);
					}
					
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_7 = zhushu6_7+zhushucj;
					}
				}
			}
		} else if (n == "6串15") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_15 += chuan2_1(zhumaArr[k]);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_15 = 0;
				}else{
					var chuan6_15  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,2)
					for ( var n = 0; n <chuan6_15.length; n++) {
						var comArr = combAndArrange(chuan6_15[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_15 = zhushu6_15+zhushucj;
					}
				}
			}
		} else if (n == "6串20") {
			if(isDingdan == false ){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_20 += chuan3_1(zhumaArr[k],3);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_20 = 0;
				}else{
					var chuan6_20  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,3)
					for ( var n = 0; n <chuan6_20.length; n++) {
						var comArr = combAndArrange(chuan6_20[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_20 = zhushu6_20+zhushucj;
					}
				}
			}
		
		} else if (n == "6串22") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_22 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_22 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_22 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_22 = 0;
				}else{
					var chuan6_22  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,5)
					for ( var n = 0; n <chuan6_22.length; n++) {
						var comArr = combAndArrange(chuan6_22[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,4)
					for ( var n = 0; n <chuan6_22.length; n++) {
						var comArr = combAndArrange(chuan6_22[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan6_22.length; n1++) {
						chuanList.splice(0, 0, chuan6_22[n1]);
					}
					
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_22 = zhushu6_22+zhushucj;
					}
				}
			}
			
		} else if (n == "6串35") {
			if(isDingdan ==false ){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_35 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_35 += chuan3_1(zhumaArr[k],3);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_35 = 0;
				}else{
					var chuan6_35  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,3)
					for ( var n = 0; n <chuan6_35.length; n++) {
						var comArr = combAndArrange(chuan6_35[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,2)
					for ( var n = 0; n <chuan6_35.length; n++) {
						var comArr = combAndArrange(chuan6_35[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_35 = zhushu6_35+zhushucj;
					}
				}
				
			}
		} else if (n == "6串42") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_42 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_42 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_42 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_42 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_42 = 0;
				}else{
					var chuan6_42  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,3)
					for ( var n = 0; n <chuan6_42.length; n++) {
						var comArr = combAndArrange(chuan6_42[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,4)
					for ( var n = 0; n <chuan6_42.length; n++) {
						var comArr = combAndArrange(chuan6_42[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,5)
					for ( var n = 0; n <chuan6_42.length; n++) {
						var comArr = combAndArrange(chuan6_42[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan6_42.length; n1++) {
						chuanList.splice(0, 0, chuan6_42[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_42 = zhushu6_42+zhushucj;
					}
				}
				
			}
		
		} else if (n == "6串50") {
			if(isDingdan == false){
				
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_50 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_50 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_50 += chuan4_1(zhumaArr[k],4);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_50 = 0;
				}else{
					var chuan6_50  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,3)
					for ( var n = 0; n <chuan6_50.length; n++) {
						var comArr = combAndArrange(chuan6_50[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,4)
					for ( var n = 0; n <chuan6_50.length; n++) {
						var comArr = combAndArrange(chuan6_50[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,2)
					for ( var n = 0; n <chuan6_50.length; n++) {
						var comArr = combAndArrange(chuan6_50[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_50 = zhushu6_50+zhushucj;
					}
				}
				
			}
		} else if (n == "6串57") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 6, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_57 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_57 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_57 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_57 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu6_57 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 6-danmaunm == 0){
					zhushu6_57 = 0;
				}else{
					var chuan6_57  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,6-danmaunm);
					var chuanList = [];
					//c(6,5)
					for ( var n = 0; n <chuan6_57.length; n++) {
						var comArr = combAndArrange(chuan6_57[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,4)
					for ( var n = 0; n <chuan6_57.length; n++) {
						var comArr = combAndArrange(chuan6_57[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,3)
					for ( var n = 0; n <chuan6_57.length; n++) {
						var comArr = combAndArrange(chuan6_57[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(6,2)
					for ( var n = 0; n <chuan6_57.length; n++) {
						var comArr = combAndArrange(chuan6_57[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan6_57.length; n1++) {
						chuanList.splice(0, 0, chuan6_57[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu6_57 = zhushu6_57+zhushucj;
					}
				}
			}
		} else if (n == "7串7") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 7, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_7 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 7-danmaunm == 0){
					zhushu7_7 = 0;
				}else{
					var chuan7_7  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,7-danmaunm);
					var chuanList = [];
					//c(7,6)
					for ( var n = 0; n <chuan7_7.length; n++) {
						var comArr = combAndArrange(chuan7_7[n],6,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                 	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu7_7 = zhushu7_7+zhushucj;
					}
				}
			}
		} else if (n == "7串8") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 7, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_8 += chuan6_1(zhumaArr[k],6);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_8 += chuan7_1(zhumaArr[k],7);
				}
			}else{
				if( 7-danmaunm == 0){
					zhushu7_7 = 0;
				}else{
					var chuan7_8  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,7-danmaunm);
					var chuanList = [];
					//c(7,6)
					for ( var n = 0; n <chuan7_8.length; n++) {
						var comArr = combAndArrange(chuan7_8[n],6,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					
					for ( var n1 = 0; n1 <chuan7_8.length; n1++) {
						chuanList.splice(0, 0, chuan7_8[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu7_8 = zhushu7_8+zhushucj;
					}
				}
			}
		} else if (n == "7串21") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 7, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_21 += chuan5_1(zhumaArr[k],5);
				}
			}else{
				if( 7-danmaunm == 0){
					zhushu7_21 = 0;
				}else{
					var chuan7_21  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,7-danmaunm);
					var chuanList = [];
					//c(7,5)
					for ( var n = 0; n <chuan7_21.length; n++) {
						var comArr = combAndArrange(chuan7_21[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu7_21 = zhushu7_21+zhushucj;
					}
				}
			}
		} else if (n == "7串35") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 7, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_35 += chuan4_1(zhumaArr[k],4);
				}
			}else{
				if( 7-danmaunm == 0){
					zhushu7_35 = 0;
				}else{
					var chuan7_35  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,7-danmaunm);
					var chuanList = [];
					//c(7,5)
					for ( var n = 0; n <chuan7_35.length; n++) {
						var comArr = combAndArrange(chuan7_35[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu7_35 = zhushu7_35+zhushucj;
					}
				}
			}
		} else if (n == "7串120") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 7, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan6_1(zhumaArr[k],6);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu7_120 += chuan7_1(zhumaArr[k],7);
				}
			}else{
				if( 7-danmaunm == 0){
					zhushu7_120 = 0;
				}else{
					var chuan7_120   = getcombAndArrangeDingdan(getTuoNum,getDanNum ,7-danmaunm);
					var chuanList = [];
					//c(7,6)
					for ( var n = 0; n <chuan7_120.length; n++) {
						var comArr = combAndArrange(chuan7_120[n],6,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n = 0; n <chuan7_120.length; n++) {
						var comArr = combAndArrange(chuan7_120[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n = 0; n <chuan7_120.length; n++) {
						var comArr = combAndArrange(chuan7_120[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n = 0; n <chuan7_120.length; n++) {
						var comArr = combAndArrange(chuan7_120[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n = 0; n <chuan7_120.length; n++) {
						var comArr = combAndArrange(chuan7_120[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan7_120.length; n1++) {
						chuanList.splice(0, 0, chuan7_120[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu7_120 = zhushu7_120+zhushucj;
					}
				}
			}
		} else if (n == "8串8") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_8 += chuan7_1(zhumaArr[k],7);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_8 = 0;
				}else{
					var chuan8_8   = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(7,6)
					for ( var n = 0; n <chuan8_8.length; n++) {
						var comArr = combAndArrange(chuan8_8[n],7,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_8 = zhushu8_8+zhushucj;
					}
				}
			}
		} else if (n == "8串9") {
			if(isDingdan ==false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_9 += chuan7_1(zhumaArr[k],7);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_9 += chuan8_1(zhumaArr[k],8);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_9 = 0;
				}else{
					var chuan8_9   = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(7,6)
					for ( var n = 0; n <chuan8_9.length; n++) {
						var comArr = combAndArrange(chuan8_9[n],7,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					for ( var n1 = 0; n1 <chuan8_9.length; n1++) {
						chuanList.splice(0, 0, chuan8_9[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_9 = zhushu8_9+zhushucj;
					}
				}
			}
		} else if (n == "8串28") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_28 += chuan6_1(zhumaArr[k],6);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_28 = 0;
				}else{
					var chuan8_28   = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(8,6)
					for ( var n = 0; n <chuan8_28.length; n++) {
						var comArr = combAndArrange(chuan8_28[n],6,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_28 = zhushu8_28+zhushucj;
					}
				}
			}
		} else if (n == "8串56") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_56 += chuan5_1(zhumaArr[k],5);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_56 = 0;
				}else{
					var chuan8_56  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(8,5)
					for ( var n = 0; n <chuan8_56.length; n++) {
						var comArr = combAndArrange(chuan8_56[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_56 = zhushu8_56+zhushucj;
					}
				}
			}
		} else if (n == "8串70") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_70 += chuan4_1(zhumaArr[k],4);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_70 = 0;
				}else{
					var chuan8_70  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(8,4)
					for ( var n = 0; n <chuan8_70.length; n++) {
						var comArr = combAndArrange(chuan8_70[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_70 = zhushu8_70+zhushucj;
					}
				}
				
			}
		} else if (n == "8串247") {
			if(isDingdan == false){
				var zhumaArr = combAndArrange(getNum, 8, 'c');
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan2_1(zhumaArr[k],2);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan3_1(zhumaArr[k],3);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan4_1(zhumaArr[k],4);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan5_1(zhumaArr[k],5);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan6_1(zhumaArr[k],6);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan7_1(zhumaArr[k],7);
				}
				for (var k = 0; k < zhumaArr.length; k++) {
					zhushu8_247 += chuan8_1(zhumaArr[k],8);
				}
			}else{
				if( 8-danmaunm == 0){
					zhushu8_247 = 0;
				}else{
					var chuan8_247  = getcombAndArrangeDingdan(getTuoNum,getDanNum ,8-danmaunm);
					var chuanList = [];
					//c(8,2)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],2,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,3)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],3,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,4)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],4,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,5)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],5,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,6)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],6,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,7)
					for ( var n = 0; n <chuan8_247.length; n++) {
						var comArr = combAndArrange(chuan8_247[n],7,'c');
						for ( var m = 0; m < comArr.length; m++) {
							chuanList.splice(0,0,comArr[m]);
						}
					}
					//c(8,8)
					for ( var n1 = 0; n1 <chuan8_247.length; n1++) {
						chuanList.splice(0, 0, chuan8_247[n1]);
					}
	                for ( var k = 0; k < chuanList.length; k++) {
	                	var c = chuanList[k];
						var zhushucj = 1;
						for ( var i2 = 0; i2 < c.length; i2++) {
							zhushucj = zhushucj* parseInt(c[i2]);
						}
						zhushu8_247 = zhushu8_247+zhushucj;
					}
				}
			}
		}
	}
	zhushu = zhushu + zhushu2_1 + zhushu3_1 + zhushu4_1 + zhushu5_1 + zhushu6_1 + zhushu7_1 + zhushu8_1 + zhushu3_3 + zhushu3_4 + zhushu4_4 + zhushu4_5 + zhushu4_6 + zhushu4_11 + zhushu5_5 + zhushu5_6 + zhushu5_10 + zhushu5_16 + zhushu5_20 + zhushu5_26 + zhushu6_6 + zhushu6_7 + zhushu6_15 + zhushu6_20 + zhushu6_22 + zhushu6_35 + zhushu6_42 + zhushu6_50 + zhushu6_57 + zhushu7_7 + zhushu7_8 + zhushu7_21 + zhushu7_35 + zhushu7_120 + zhushu8_8 + zhushu8_9 + zhushu8_28 + zhushu8_56 + zhushu8_70 + zhushu8_247;
	
	if(type != null && type == "zjq"){
		$("#lab_Num_standrad_zjq").html(zhushu);
		$("#investField_standrad_zjq").html(zhushu * beishu * 2);
		$("#current_money_zjq").html(zhushu * beishu * 2);
	}else if(type != null && type == "bf"){
		$("#lab_Num_standrad_bf").html(zhushu);
		$("#investField_standrad_bf").html(zhushu * beishu * 2);
		$("#current_money_bf").html(zhushu * beishu * 2);
	}else if(type != null && type == "bqc"){
		$("#lab_Num_standrad_bqc").html(zhushu);
		$("#investField_standrad_bqc").html(zhushu * beishu * 2);
		$("#current_money_bqc").html(zhushu * beishu * 2);
	}else{
		$("#lab_Num_standrad").html(zhushu);
		$("#investField_standrad").html(zhushu * beishu * 2);
		$("#current_money").html(zhushu * beishu * 2);
	}
		
	
	zhushu = 0;//  运算完成之后 对注数归0处理， 以防上次结果缓存
	checkZhuma();
	
}

function getcombAndArrange (a,b){

	var  chuanlist = combAndArrange(a, b, 'c');
	var k = [];
	var ji = 0;
	var klist = [];
	for (var m = 0; m < chuanlist.length; m++) {
		k = chuanlist[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < b.length; j++) {
			var karr = b[j];
		     k.splice(0,0,karr+"");
		}
		klist[m] = k;
	}
	return klist;
}
function getcombAndArrangeDingdan (a,b,d){
	var  chuanlist = combAndArrange(a,d, 'c');
	var k = [];
	var ji = 0;
	var klist = [];
	for (var m = 0; m < chuanlist.length; m++) {
		k = chuanlist[m].toString().replace(/\,/g, '*').split("*");
		for ( var j = 0; j < b.length; j++) {
			var karr = b[j];
			k.splice(0,0,karr+"");
		}
		klist[m] = k;
	}
	return klist;
}


function saleMa(flag) {
	var allWanfa = "";
	if ($("#allWanfa").val().indexOf("|") != -1) {
		var wanfaArr = $("#allWanfa").val().split("|");
		for (var m = 1; m < wanfaArr.length; m++) {
			if(wanfaArr[m] == "1串1"){
				wanfaArr[m] = "500";
			}
			if (wanfaArr[m] == "2串1") {
				if(flag){
					wanfaArr[m] = "602";
				}else{
					wanfaArr[m] = "502";
				}
			} else if (wanfaArr[m] == "3串1") {
				if(flag && allMatch != 3){
					wanfaArr[m] = "603";
				}else{
					wanfaArr[m] = "503";
				}
			} else if (wanfaArr[m] == "4串1") {
				if(flag && allMatch != 4){
					wanfaArr[m] = "604";
				}else{
					wanfaArr[m] = "504";
				}
			} else if (wanfaArr[m] == "5串1") {
				if(flag && allMatch != 5){
					wanfaArr[m] = "605";
				}else{
					wanfaArr[m] = "505";
				}
			} else if (wanfaArr[m] == "6串1") {
				if(flag && allMatch != 6){
					wanfaArr[m] = "606";
				}else{
					wanfaArr[m] = "506";
				}
			} else if (wanfaArr[m] == "7串1") {
				if(flag && allMatch != 7){
					wanfaArr[m] = "607";
				}else{
					wanfaArr[m] = "507";
				}
			} else if (wanfaArr[m] == "8串1") {
				if(flag && allMatch != 8){
					wanfaArr[m] = "608";
				}else{
					wanfaArr[m] = "508";
				}
			} else if (wanfaArr[m] == "3串3") {
				if(flag){
					wanfaArr[m] = "626";
				}else{
					wanfaArr[m] = "526";
				}
			} else if (wanfaArr[m] == "3串4") {
				if(flag){
					wanfaArr[m] = "627";
				}else{
					wanfaArr[m] = "527";
				}
			} else if (wanfaArr[m] == "4串6") {
				if(flag){
					wanfaArr[m] = "628";
				}else{
					wanfaArr[m] = "528";
				}
			} else if (wanfaArr[m] == "4串11") {
				if(flag){
					wanfaArr[m] = "629";
				}else{
					wanfaArr[m] = "529";
				}
			} else if (wanfaArr[m] == "5串10") {
				if(flag){
					wanfaArr[m] = "630";
				}else{
					wanfaArr[m] = "530";
				}
			} else if (wanfaArr[m] == "5串20") {
				if(flag){
					wanfaArr[m] = "631";
				}else{
					wanfaArr[m] = "531";
				}
			} else if (wanfaArr[m] == "5串26") {
				if(flag){
					wanfaArr[m] = "632";
				}else{
					wanfaArr[m] = "532";
				}
			} else if (wanfaArr[m] == "6串15") {
				if(flag){
					wanfaArr[m] = "633";
				}else{
					wanfaArr[m] = "533";
				}
			} else if (wanfaArr[m] == "6串35") {
				if(flag){
					wanfaArr[m] = "634";
				}else{
					wanfaArr[m] = "534";
				}
			} else if (wanfaArr[m] == "6串50") {
				if(flag){
					wanfaArr[m] = "635";
				}else{
					wanfaArr[m] = "535";
				}
			} else if (wanfaArr[m] == "6串57") {
				if(flag){
					wanfaArr[m] = "636";
				}else{
					wanfaArr[m] = "536";
				}
			} else if (wanfaArr[m] == "7串120") {
				if(flag){
					wanfaArr[m] = "637";
				}else{
					wanfaArr[m] = "537";
				}
			} else if (wanfaArr[m] == "8串247") {
				if(flag){
					wanfaArr[m] = "638";
				}else{
					wanfaArr[m] = "538";
				}
			} else if (wanfaArr[m] == "4串4") {
				if(flag){
					wanfaArr[m] = "639";
				}else{
					wanfaArr[m] = "539";
				}
			} else if (wanfaArr[m] == "4串5") {
				if(flag){
					wanfaArr[m] = "640";
				}else{
					wanfaArr[m] = "540";
				}
			} else if (wanfaArr[m] == "5串16") {
				if(flag){
					wanfaArr[m] = "641";
				}else{
					wanfaArr[m] = "541";
				}
			} else if (wanfaArr[m] == "6串20") {
				if(flag){
					wanfaArr[m] = "642";
				}else{
					wanfaArr[m] = "542";
				}
			} else if (wanfaArr[m] == "6串42") {
				if(flag){
					wanfaArr[m] = "643";
				}else{
					wanfaArr[m] = "543";
				}
			} else if (wanfaArr[m] == "5串5") {
				if(flag){
					wanfaArr[m] = "644";
				}else{
					wanfaArr[m] = "544";
				}
			} else if (wanfaArr[m] == "5串6") {
				if(flag){
					wanfaArr[m] = "645";
				}else{
					wanfaArr[m] = "545";
				}
			} else if (wanfaArr[m] == "6串22") {
				if(flag){
					wanfaArr[m] = "646";
				}else{
					wanfaArr[m] = "546";
				}
			} else if (wanfaArr[m] == "7串35") {
				if(flag){
					wanfaArr[m] = "647";
				}else{
					wanfaArr[m] = "547";
				}
			} else if (wanfaArr[m] == "8串70") {
				if(flag){
					wanfaArr[m] = "648";
				}else{
					wanfaArr[m] = "548";
				}
			} else if (wanfaArr[m] == "6串6") {
				if(flag){
					wanfaArr[m] = "649";
				}else{
					wanfaArr[m] = "549";
				}
			} else if (wanfaArr[m] == "6串7") {
				if(flag){
					wanfaArr[m] = "650";
				}else{
					wanfaArr[m] = "550";
				}
			} else if (wanfaArr[m] == "7串21") {
				if(flag){
					wanfaArr[m] = "651";
				}else{
					wanfaArr[m] = "551";
				}
			} else if (wanfaArr[m] == "8串56") {
				if(flag){
					wanfaArr[m] = "652";
				}else{
					wanfaArr[m] = "552";
				}
			} else if (wanfaArr[m] == "7串7") {
				if(flag){
					wanfaArr[m] = "653";
				}else{
					wanfaArr[m] = "553";
				}
			} else if (wanfaArr[m] == "7串8") {
				if(flag){
					wanfaArr[m] = "654";
				}else{
					wanfaArr[m] = "554";
				}
			} else if (wanfaArr[m] == "8串28") {
				if(flag){
					wanfaArr[m] = "655";
				}else{
					wanfaArr[m] = "555";
				}
			} else if (wanfaArr[m] == "8串8") {
				if(flag){
					wanfaArr[m] = "656";
				}else{
					wanfaArr[m] = "556";
				}
			} else if (wanfaArr[m] == "8串9") {
				if(flag){
					wanfaArr[m] = "657";
				}else{
					wanfaArr[m] = "557";
				}
			}
			allWanfa += wanfaArr[m] + "-";
		}
		allWanfa = allWanfa.substring(0, allWanfa.length - 1);
	} else {
		allWanfa = $("#allWanfa").val();
	}

	return allWanfa;
}

function removeSelectWays(key) {
	if (key == "PassFreedom") {
		$("#PassFreedom dl").removeClass("CheckBox light Switch").addClass("CheckBox light");
	} else if (key == "PassSeries") {
		$("#PassSeries dl").children().removeClass("selected");
		
	}
	dingDanCheckbox();
	
	$("#lab_Num_standrad").html(0);
	$("#investField_standrad").html(0);
	$("#current_money").html(0);
	$("#lab_Num_standrad_zjq").html(0);
	$("#investField_standrad_zjq").html(0);
	$("#current_money_zjq").html(0);
	$("#lab_Num_standrad_bf").html(0);
	$("#investField_standrad_bf").html(0);
	$("#current_money_bf").html(0);
	$("#allWanfa").val("");
}

	$(document).ready(function () {
		$(".ChannelBuyPannelHead-wrap").hide();
		$(".OPenhemai").click(function(){
			$(".closebutton").hide();
			$(".ChannelBuyPannelHead-wrap").show();
		});
		$(".quxiao-hemai").click(function(){
			$("#daiGouHemai").val("daigou");
			$("#goumaifangshi").val("代购");
			$(".ChannelBuyPannelHead-wrap").hide();
			$(".closebutton").show();
			});
	});
	//隐藏的比赛场数
	var hidenum=0;
	$(document).ready(function(){
		//联赛选择下拉框
		$(".race_select").click(function(){
				$(".race_select_cont").css("display","block");
			});
		$(".race_select").hover(function(){
			
		},function(){
			$(".race_select_cont").css("display","none");
		});
		//联赛选择--全选
		$(".for_select_all").click(function() {
			chooseFuifu();
		});
		//联赛选择--反选
		/*$(".for_select_no").click(function(){
			$(".race_select_cont ul li").each(function(){
				var str=$.trim($(this).text());
				if($(this).children().attr("checked")){
					$(this).children().attr("checked",false);
					hideLeague(str);
				}else{
					$(this).children().attr("checked",true);
					showLeague(str);
				}
			});
		});*/
	});
	//点击显示此联赛的赛事
	function showLeague(league){
		$(".hide_show_content tr .league").each(function(){
			if($(this).text()==league){
				if($(this).parent().attr("style")=="display:none"){
					hidenum-=1;
				}
				$(this).parent().attr("style","");			
			}
		});
		$("#hideNum").text(hidenum);
	}
	//点击隐藏此联赛的赛事
	function hideLeague(league){
		$(".hide_show_content tr .league").each(function(){
			if($(this).text()==league){
				if($(this).parent().attr("style")!="display:none"){
					hidenum+=1;
				}
				$(this).parent().attr("style","display:none");	
				var valstr = $(this).parent().attr("ControlTarget");
				$(".bf-none").each(function(){
					if($(this).attr("ControlTarget") == valstr){
						$(this).css("display","none");
						$("#"+valstr+" span").text($(this).text() == "展开选项" ? "隐藏选项" : "展开选项");
						if(!$("#"+valstr+" span").hasClass("hideselectOpen")){
							$("#"+valstr+" span").addClass("hideselectOpen");
						}
					}
				});
			}
		});
		$("#hideNum").text(hidenum);
	}
	//点击恢复显示所有的比赛（包括让球的和非让球的）
	function chooseFuifu(){
		$(".rangqiu").attr("checked","checked");
		$(".feirangqiu").attr("checked","checked");
		$(".hide_show_content tr").each(function(){
			if(!$(this).hasClass("bf-none")){
				$(this).attr("style","");
			}
		});
		hidenum=0;
		$("#hideNum").text(hidenum);
		$(".quxiaoduizhen").children().attr("checked","checked");
		$(".race_select_cont input").attr("checked",true);
	}
	//点击按钮来决定是否显示“让球”的比赛
	/*function chooseRang(){
		if($(".rangqiu").attr("checked")=="checked"){
			$(".hide_show_content tr").each(function(){
				if($(this).children(".rangfenshu").text()!=0){
					if($(this).attr('style')=="display:none"){
						hidenum-=1;
					}
					$(this).attr("style","");
				}
			});	
		}else{
			$(".hide_show_content tr").each(function(){
				if($(this).children(".rangfenshu").text()!=0){
					if($(this).attr('style')!="display:none"){
						hidenum+=1;
					}
					$(this).attr("style","display:none");			
				}
			});	
		}
		$("#hideNum").text(hidenum);
	}*/
	
	//联赛选择--点击某一个的显示和隐藏
	function liansaiOne(object){
		var str=$.trim(object.parent().text());
		if(object.attr("checked")){
			showLeague(str);
		}else{
			hideLeague(str);
		}
	}
	//联赛选择--反选
	function fanxuan(){
		$(".race_select_cont ul li").each(function(){
			var str=$.trim($(this).text());
			if($(this).children().attr("checked")){
				$(this).children().attr("checked",false);
				hideLeague(str);
			}else{
				$(this).children().attr("checked",true);
				showLeague(str);
			}
		});
	}
	//点击按钮来决定是否显示“非让球”的比赛
	/*function chooseFeiRang(){
		if($(".feirangqiu").attr("checked")=="checked"){
			$(".hide_show_content tr").each(function(){
				if($(this).children(".rangfenshu").text()==0){
					if($(this).attr('style')=="display:none"){
						hidenum-=1;
					}
					$(this).attr("style","");
				}
			});	
		}else{
			$(".hide_show_content tr").each(function(){
				if($(this).children(".rangfenshu").text()==0){
					if($(this).attr('style')!="display:none"){
						hidenum+=1;
					}
					$(this).attr("style","display:none");
				}
			});	
		}
		$("#hideNum").text(hidenum);
	}*/
	function clickl(){
		$("#upload").val("");
		$("#ifchangci").val("nochangci");
		$("option", $("#list_LotteryNumber")).remove();
		$(".titonebot li input").each(function(){
			$(this).removeAttr("checked");
		});
		$(".wjsctopTwoL li").each(function(){
			$(this).attr("style","display:none");
		});
		
		$(".saishi-wrap").show();
		$(this).attr("checked","checked");
		$(".head-input-r").removeAttr("checked");
	}
	function clickr(){
		$("#upload").val("");
		$("#ifchangci").val("youchangci");
		bianlifuzhi();
		$(".saishi-wrap").hide();
		$(".wjsctopTwoL li").each(function(){
			$(this).removeAttr("style");
			$(this).children("input").removeAttr("checked");
		});
		$(this).attr("checked","checked");
		$(".head-input-l").removeAttr("checked");
		$("#saishinumber").val(0);
		$("#guoguanNum").val(0);		
	}
	function bianlifuzhi(){
		$("option", $("#list_LotteryNumber")).remove();
		//循环遍历取得时间的数组
		var daArr = [];
		var zhuma="";
		$("input[name='day']").each(function(i) {
			daArr[i] = $(this).val();
		});
		
		//循环遍历取得总的赛事的值
		var count = 0;
		$("input[name='count']").each(function(i) {
			count += Number($(this).val());
		});
		for (var j = 0; j < daArr.length; j++) {
			for (var i = 1; i <= count; i++) {			
				var day = daArr[j];
				if($("#day_"+ day + "_" + i).val()!=undefined){
					var matchDate = $("#day_" + day + "_" + i).val();
					var matchWeek = $("#weekid_" + day + "_" + i).val();
					var match = $("#no_" + day + "_" + i).html();
					zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match+"^";
				}						
			}
		}
		
		var lotteryListSelect = $("#list_LotteryNumber");
		var opt;
		opt = new Option(zhuma,zhuma);
		opt.setAttribute('wangFang',saleMa(false));
		var value=$("#list_LotteryNumber option").attr("value");
		if(value==undefined){
			lotteryListSelect[0].options.add(opt);
		}
		$("#matchNum").html(count);
		$("#matchNum_zjq").html(count);
		$("#matchNum_bf").html(count);
	}
	function multipleValidate2(){
		if ($('#tb_Multiple2').val() == '' || $('#tb_Multiple2').val() == undefined || $('#tb_Multiple2').val() == null || Number($('#tb_Multiple2').val()) <= 0) {
			$('#tb_Multiple2').val(1);
			$('#tb_Multiple2').focus();
			$('#tb_Multiple2').select();
		}

		//判断倍数是否在1-100000倍之间
		if (Number($('#tb_Multiple2').val()) > 100000) {
			$('#tb_Multiple2').val(100000);
			$('#tb_Multiple2').focus();
			$('#tb_Multiple2').select();
		}

		//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
		var pattern = /^-?\d+$/;
		if (isNaN($('#tb_Multiple2').val()) || $('#tb_Multiple2').val().search(pattern) != 0) {
			$('#tb_Multiple2').val(1);
			$('#tb_Multiple2').focus();
			$('#tb_Multiple2').select();
			return false;
		}
		
		$("#investField").text(Number($("#lab_Num").text())*2*Number($("#tb_Multiple2").val()));
		$("#tb_Multiple").val($("#tb_Multiple2").val());
	}
	function checkGameNum(){
		var num=Number($("#saishinumber").val());
		if($(".head-input-l").attr("checked")=="checked"){
			if(num<2){
				openAlert(decodeURI(EncodeUtf8("请至少选择两场比赛！")));
				return false;
			}
		}else{
			var flag=true;
			$(".wjsctopTwoL input").each(function(){
				if($(this).attr("checked")=="checked"){
					$(this).click();
					flag=false;
				}
			});
			if(flag){
				openAlert(decodeURI(EncodeUtf8("请选择过关方式！")));
				return false;
			}
		}
		return true;
	}
	function checksaishi(obj){
		var num=Number($("#saishinumber").val());
		if(obj.attr("checked")=="checked"){
			num+=1;
		}else{
			num-=1;
		}
		
		var lotno=$("#lotNo").val();		
		if(num<=15){
			$("option", $("#list_LotteryNumber")).remove();
			$("#allWanfa").val("");
			$(".wjsctopTwoL li").attr("style","display:none");
			$(".wjsctopTwoL li input").removeAttr("checked");
			
			if(lotno=="J00002"){
				if(num>1&&num<5){
					$("#guoguanNum").val(num);
					$(".guoguan"+num).attr("checked","checked");
					$("#allWanfa").val("|"+$(".guoguan"+num).parent().children("span").html().trim());
					for(var i=2;i<=num;i++){
						$(".guoguan"+i).parent().removeAttr("style");
					}
				}else if(num>=5){
					$("#guoguanNum").val("4");
					$(".wjsctopTwoL li").removeAttr("style");
					$(".guoguan4").attr("checked","checked");			
					$("#allWanfa").val("|"+$(".guoguan4").parent().children("span").html().trim());
				}
			}else{
				if(num>1&&num<9){
					$("#guoguanNum").val(num);
					$(".guoguan"+num).attr("checked","checked");
					$("#allWanfa").val("|"+$(".guoguan"+num).parent().children("span").html().trim());
					for(var i=2;i<=num;i++){
						$(".guoguan"+i).parent().removeAttr("style");
					}
				}else if(num>=9){
					$("#guoguanNum").val("8");
					$(".wjsctopTwoL li").removeAttr("style");
					$(".guoguan8").attr("checked","checked");			
					$("#allWanfa").val("|"+$(".guoguan8").parent().children("span").html().trim());
				}
			}
			
			//循环遍历取得时间的数组
			var daArr = [];
			var zhuma="";
			$("input[name='day']").each(function(i) {
				daArr[i] = $(this).val();
			});
			
			//循环遍历取得总的赛事的值
			var count = 0;
			$("input[name='count']").each(function(i) {
				count += Number($(this).val());
			});
			for (var j = 0; j < daArr.length; j++) {
				for (var i = 1; i <= count; i++) {			
					var day = daArr[j];	
					if($("#ball_" + day + "_" + i).attr("checked")=="checked"){
						var matchDate = $("#day_" + day + "_" + i).val();
						var matchWeek = $("#weekid_" + day + "_" + i).val();
						var match = $("#no_" + day + "_" + i).html();
						zhuma = zhuma + matchDate + "|" + matchWeek + "|" + match+"^";
					}			
				}
			}
			
			var lotteryListSelect = $("#list_LotteryNumber");
			var opt;
			opt = new Option(zhuma,zhuma);
			opt.setAttribute('wangFang',saleMa(false));
			var value=$("#list_LotteryNumber option").attr("value");
			if(value==undefined){
				lotteryListSelect[0].options.add(opt);
			}
			
			$("#saishinumber").val(num);
			$("#matchNum").html(num);
			$("#matchNum_zjq").html(num);
			$("#matchNum_bf").html(num);
		}else{
			openAlert(decodeURI(EncodeUtf8("您好，单式方案最多只能选择15场比赛进行投注！")));
		}		
	}	
	function qingkong(way,obj){
		$("#allWanfa").attr("value",way);
		$("#list_LotteryNumber option").attr("wangFang",saleMa(false));
		$("#guoguanNum").val(way.substring(way.indexOf("|")+1,way.indexOf("|")+2));
		obj.parent().parent().children().children().removeAttr("checked");
		obj.attr("checked","checked");
	}
	

	//点击进球数添加右侧的js (a代表id标号，b代表进球数,week代表星期几)-------总进球---------
	function addMatchForRight_zjq(object, day, a, b,week){
		if (object.attr("class") != "result_0") {
			var count = 0;
			for(var i=0;i<8;i++){
				if($("#CheckNum-" + day + "-" + a + "-" + i).hasClass("selected"))
					count++;
			}
			if(count == 1){
				$("#jinqiuNum_" + day + "_" + a).remove();
				$("#choose_" + day + "_" + a).remove();
				allMatch -= 1;
				dingDanCheckbox();//定胆复选框的状态改变
			} else {
				$("#CheckNum-" + day + "-" + a + "-" + b).removeClass("selected");
			}
			if (allMatch < 6) {
				if(allMatch < 2){
					$("#zjqTip").css("display","");
				}else{
					$("#zjqTip").css("display","none");
				}
				for (var i = allMatch; i < 9; i++) {
					$("#zjq_r" + (allMatch + 1) + "c1").css("display", "none");
					$("#zjq_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
					if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
						$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));

						$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
					}
				}
				//定义数组存放多串投注方式时的id编号
				var more = ["zjq_r3c3,zjq_r3c4", "zjq_r4c4,zjq_r4c5,zjq_r4c6,zjq_r4c11", "zjq_r5c5,zjq_r5c6,zjq_r5c10,zjq_r5c16,zjq_r5c20,zjq_r5c26", "zjq_r6c6,zjq_r6c7,zjq_r6c15,zjq_r6c20,zjq_r6c22,zjq_r6c35,zjq_r6c42,zjq_r6c50,zjq_r6c57"];
				if (allMatch > 1) {
					for (var j = allMatch; j < 8; j++) {
						for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
							var id = more[allMatch - 2].split(",")[m];
							$("#" + id).css("display", "none");
							$("#" + id).children().removeClass();
							if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
								$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
							}
						}
					}
				}
			}

		} else {
			if ($("#choose_" + day + "_" + a).length < 1) {
										
				if($("#erjiwanfa").val()=="单关投注"){
					var tab_tr = "<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult_zjq($(this)," + day + "," + a + ","+b+",1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='matchTeam-" + day + "-" + a + "'></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' disabled='disabled' name='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")' value='checkbox'></td></tr><tr id='jinqiuNum_" + day + "_" + a + "'><td colspan='3'><span id='CheckNum-" + day + "-" + a + "-0" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",0,0);'>0</span><span id='CheckNum-" + day + "-" + a + "-1" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",1,0)'>1</span><span id='CheckNum-" + day + "-" + a + "-2" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",2,0)'>2</span><span id='CheckNum-" + day + "-" + a + "-3" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",3,0);'>3</span><span id='CheckNum-" + day + "-" + a + "-4" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + 
					",4,0);'>4</span><span id='CheckNum-" + day + "-" + a + "-5" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",5,0);'>5</span><span id='CheckNum-" + day + "-" + a + "-6" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",6,0);'>6</span><span id='CheckNum-" + day + "-" + a + "-7" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",7,0);'>7</span</td></tr>";
					$("#zjq_choose_list").append(tab_tr);
				}else if($("#erjiwanfa").val()=="过关投注"){
					var tab_tr = "<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult_zjq($(this)," + day + "," + a + ","+b+",1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='matchTeam-" + day + "-" + a + "'></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' name='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")' value='checkbox'></td></tr><tr id='jinqiuNum_" + day + "_" + a + "'><td colspan='3'><span id='CheckNum-" + day + "-" + a + "-0" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",0,0);'>0</span><span id='CheckNum-" + day + "-" + a + "-1" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",1,0)'>1</span><span id='CheckNum-" + day + "-" + a + "-2" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",2,0)'>2</span><span id='CheckNum-" + day + "-" + a + "-3" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",3,0);'>3</span><span id='CheckNum-" + day + "-" + a + "-4" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + 
",4,0);'>4</span><span id='CheckNum-" + day + "-" + a + "-5" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",5,0);'>5</span><span id='CheckNum-" + day + "-" + a + "-6" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",6,0);'>6</span><span id='CheckNum-" + day + "-" + a + "-7" + "' class='CheckWin' onclick='removeThisResult_zjq($(this)," + day + "," + a + ",7,0);'>7</span</td></tr>";
					$("#zjq_choose_list").append(tab_tr);
				}
				
				$("#CheckNum-" + day + "-" + a+"-"+b).addClass("selected");
				allMatch += 1;
				dingDanCheckbox();//定胆复选框的状态改变
			} else {
				$("#CheckNum-" + day + "-" + a+"-"+b).addClass("selected");
			}
			if (allMatch > 10) {
				openAlert(decodeURI(EncodeUtf8("您好，单个方案最多只能选择10场比赛进行投注！")));
				$("#choose_" + day + "_" + a).remove();
				$("#jinqiuNum_" + day + "_" + a).remove();
				allMatch -= 1;
				$("#ball" + b + "_" + day + "_" + a).removeClass("result_0").addClass("result_2");
				$("#CheckNum-" + day + "-" + a+"-"+b).removeClass("selected");
				checkZhuma();
			} else {
				var no = $("#no_" + day + "_" + a).html();
				var homeTeam = $("#hteam_" + day + "_" + a).html();
	            var vteam = $("#vteam_"+ day + "_" + a).html();
				if (allMatch < 7) {
					if(allMatch < 2){
						$("#zjqTip").css("display","");
					}else{
						$("#zjqTip").css("display","none");
					}
					for (var i = 2; i <= allMatch; i++) {
						$("#zjq_r" + allMatch + "c1").css("display", "");
					}

					//定义数组存放多串投注方式时的id编号
					if (allMatch == 3) {
						var more = ["3", "4"];
					} else if (allMatch == 4) {
						var more = ["4", "5", "6", "11"];
					} else if (allMatch == 5) {
						var more = ["5", "6", "10", "16", "20", "26"];
					} else if (allMatch == 6) {
						var more = ["6", "7", "15", "20", "22", "35", "42", "50", "57"];
					} 

					for (var j = 3; j <= allMatch; j++) {
						for (var m = 0; m < more.length; m++) {
							var id = "zjq_r" + allMatch + "c" + more[m];
							$("#" + id).css("display", "");
						}
					}
				}
				$("#no-" + day + "-" + a).html(week+no);
				$("#matchTeam-" + day + "-" + a).html(homeTeam+"VS"+vteam);
			}
		}

		$("#matchNum_zjq").html(allMatch);
		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
		danguanCount();
	}
	//点击进球数添加右侧的js (a代表id标号，b代表进球数,week代表星期几,type代表胜、平、负及比分)-------比分---------
	function addMatchForRight_bf(object, day, a, b,week){
		    var bf1 = "";
		    var bf2 = "";
		    if(b.length >1){
		    	bf1 = b.substring(0,1);
				bf2 = b.substring(1,2);
		    }
		    var bool = false;
		    if(object.hasClass("result_1") || object.hasClass("result_3")){
		    	if(object.attr("class") == "result_3")
		    		bool = true;
		    }else if(object.attr("checked") != "checked"){
		    	bool = true;
		    }
			if (bool) {
				var count = 0; 
				for(var i=0;i<3;i++){
					for(var j=0;j<6;j++){
						if($("#CheckNum-" + day + "-" + a+"-"+i+j).hasClass("selected")){
							count++;
						}
					}
				}
				for(var i=3;i<6;i++){
					for(var j=0;j<3;j++){
						if($("#CheckNum-" + day + "-" + a+"-"+i+j).hasClass("selected")){
							count++;
						}
					}
				}
				if($("#CheckNum-" + day + "-" + a+"-33").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-09").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-99").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-90").hasClass("selected")){
					count++;
				}
				if(count == 1){
					$("#bifenTR_" + day + "_" + a).remove();
					$("#choose_" + day + "_" + a).remove();
					allMatch -= 1;
					dingDanCheckbox();//定胆复选框的状态改变
				}else if($("#checkbox3_" + day + "_" + a).attr("checked")!="checked" && $("#checkbox1_" + day + "_" + a).attr("checked")!="checked" && $("#checkbox0_" + day + "_" + a).attr("checked")!="checked"){
					$("#bifenTR_" + day + "_" + a).remove();
					$("#choose_" + day + "_" + a).remove();
					allMatch -= 1;
					dingDanCheckbox();//定胆复选框的状态改变
				}else if(b == "3"){
					for(var i=1;i<6;i++){
			    		for(var j=0;j<3;j++){
			    			if(i==1 && j>0 || i==2 && j>1){
			    				break;
			    			}else{
			    				$("#CheckNum-" + day + "-" + a+"-"+i+j).css("display","none");
							    $("#CheckNum-" + day + "-" + a+"-"+i+j).removeClass("selected");
			    			}
			    		}
			    	}
				    $("#CheckNum-" + day + "-" + a+"-90").removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-90").css("display","none");
				}else if(b == "1"){
					$("#CheckNum-" + day + "-" + a+"-00").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-00").removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-11").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-11").removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-22").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-22").removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-33").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-33").removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-99").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-99").removeClass("selected");
				}else if(b == "0"){
					for(var i=0;i<3;i++){
			    		for(var j=1;j<6;j++){
			    			if(i==1 && j<2 || i==2 && j<3){
			    				
			    			}else{
			    				$("#CheckNum-" + day + "-" + a+"-"+i+j).css("display","none");
							    $("#CheckNum-" + day + "-" + a+"-"+i+j).removeClass("selected");
			    			}
			    		}
			    	}
			    	$("#CheckNum-" + day + "-" + a+"-09").css("display","none");
				    $("#CheckNum-" + day + "-" + a+"-09").removeClass("selected");
				}else{
					$("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).removeClass("selected");
				    $("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).css("display","none");
				}
				if (allMatch < 4) {
					$("#bf_r" + (allMatch + 1) + "c1").css("display", "none");
					$("#bf_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
					if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
						$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));

						$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
					}
					//定义数组存放多串投注方式时的id编号
					var more = ["bf_r3c3,bf_r3c4", "bf_r4c4,bf_r4c5,bf_r4c6,bf_r4c11" ];
					if (allMatch > 1) {
						for (var j = allMatch; j < 8; j++) {
							for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
								var id = more[allMatch - 2].split(",")[m];
								$("#" + id).css("display", "none");
								$("#" + id).children().removeClass();
								if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
									$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
								}
							}
						}
					}
				}

		} else {
			if ($("#choose_" + day + "_" + a).length < 1) {
										
				if($("#erjiwanfa").val()=="过关投注"){
					var tab_tr = "<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult_bf($(this)," + day + "," + a + ","+b+",1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='matchTeam-" + day + "-" + a + "'></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' name='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")' value='checkbox'></td></tr>";
					$("#bf_choose_list").append(tab_tr);
					tab_tr = "<tr id='bifenTR_" + day + "_" + a + "'><td id='bifen_" + day + "_" + a + "' colspan='3'></td></tr>";
					$("#bf_choose_list").append(tab_tr);
					var tab_span_10 = "<span id='CheckNum-" + day + "-" + a + "-10"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"10\"" + ",0);'>1:0</span>";
				    var tab_span_20 = "<span id='CheckNum-" + day + "-" + a + "-20"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"20\"" + ",0);'>2:0</span>";
				    var tab_span_21 = "<span id='CheckNum-" + day + "-" + a + "-21"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"21\"" + ",0);'>2:1</span>";
				    var tab_span_30 = "<span id='CheckNum-" + day + "-" + a + "-30"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"30\"" + ",0);'>3:0</span>";
				    var tab_span_31 = "<span id='CheckNum-" + day + "-" + a + "-31"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"31\"" + ",0);'>3:1</span>";
				    var tab_span_32 = "<span id='CheckNum-" + day + "-" + a + "-32"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"32\"" + ",0);'>3:2</span>";
				    var tab_span_40 = "<span id='CheckNum-" + day + "-" + a + "-40"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"40\"" + ",0);'>4:0</span>";
				    var tab_span_41 = "<span id='CheckNum-" + day + "-" + a + "-41"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"41\"" + ",0);'>4:1</span>";
				    var tab_span_42 = "<span id='CheckNum-" + day + "-" + a + "-42"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"42\"" + ",0);'>4:2</span>";
				    var tab_span_50 = "<span id='CheckNum-" + day + "-" + a + "-50"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"50\"" + ",0);'>5:0</span>";
				    var tab_span_51 = "<span id='CheckNum-" + day + "-" + a + "-51"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"51\"" + ",0);'>5:1</span>";
				    var tab_span_52 = "<span id='CheckNum-" + day + "-" + a + "-52"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"52\"" + ",0);'>5:2</span>";
				    var tab_span_90 = "<span id='CheckNum-" + day + "-" + a + "-90"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"90\"" + ",0);'>9:0</span>";
				    var tab_span_00 = "<span id='CheckNum-" + day + "-" + a + "-00"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"00\"" + ",0);'>0:0</span>";
				    var tab_span_11 = "<span id='CheckNum-" + day + "-" + a + "-11"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"11\"" + ",0);'>1:1</span>";
				    var tab_span_22 = "<span id='CheckNum-" + day + "-" + a + "-22"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"22\"" + ",0);'>2:2</span>";
				    var tab_span_33 = "<span id='CheckNum-" + day + "-" + a + "-33"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"33\"" + ",0);'>3:3</span>";
				    var tab_span_99 = "<span id='CheckNum-" + day + "-" + a + "-99"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"99\"" + ",0);'>9:9</span>";
				    var tab_span_01 = "<span id='CheckNum-" + day + "-" + a + "-01"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"01\"" + ",0);'>0:1</span>";
				    var tab_span_02 = "<span id='CheckNum-" + day + "-" + a + "-02"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"02\"" + ",0);'>0:2</span>";
				    var tab_span_12 = "<span id='CheckNum-" + day + "-" + a + "-12"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"12\"" + ",0);'>1:2</span>";
				    var tab_span_03 = "<span id='CheckNum-" + day + "-" + a + "-03"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"03\"" + ",0);'>0:3</span>";
				    var tab_span_13 = "<span id='CheckNum-" + day + "-" + a + "-13"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"13\"" + ",0);'>1:3</span>";
				    var tab_span_23 = "<span id='CheckNum-" + day + "-" + a + "-23"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"23\"" + ",0);'>2:3</span>";
				    var tab_span_04 = "<span id='CheckNum-" + day + "-" + a + "-04"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"04\"" + ",0);'>0:4</span>";
				    var tab_span_14 = "<span id='CheckNum-" + day + "-" + a + "-14"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"14\"" + ",0);'>1:4</span>";
				    var tab_span_24 = "<span id='CheckNum-" + day + "-" + a + "-24"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"24\"" + ",0);'>2:4</span>";
				    var tab_span_05 = "<span id='CheckNum-" + day + "-" + a + "-05"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"05\"" + ",0);'>0:5</span>";
				    var tab_span_15 = "<span id='CheckNum-" + day + "-" + a + "-15"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"15\"" + ",0);'>1:5</span>";
				    var tab_span_25 = "<span id='CheckNum-" + day + "-" + a + "-25"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"25\"" + ",0);'>2:5</span>";
				    var tab_span_09 = "<span id='CheckNum-" + day + "-" + a + "-09"+  "' class='CheckWin ' style='display: none;' onclick='removeThisResult_bf($(this)," + day + "," + a + "," + "\"09\"" + ",0);'>0:9</span>";
				    $("#bifen_" + day +"_" + a).append(tab_span_10+tab_span_20+tab_span_21+tab_span_30+tab_span_31+tab_span_32+tab_span_40+tab_span_41+tab_span_42+tab_span_50+tab_span_51+tab_span_52+tab_span_90+tab_span_00+tab_span_11+tab_span_22+tab_span_33+tab_span_99+tab_span_01+tab_span_02+tab_span_12+tab_span_03+tab_span_13+tab_span_23+tab_span_04+tab_span_14+tab_span_24+tab_span_05+tab_span_15+tab_span_25+tab_span_09);
				   
				}
				allMatch += 1;
				dingDanCheckbox();//定胆复选框的状态改变
			}
			if(b == "3"){
		    	for(var i=1;i<6;i++){
		    		for(var j=0;j<3;j++){
		    			if(i==1 && j>0 || i==2 && j>1){
		    				break;
		    			}else{
		    				$("#CheckNum-" + day + "-" + a+"-"+i+j).css("display","");
						    $("#CheckNum-" + day + "-" + a+"-"+i+j).addClass("selected");
		    			}
		    		}
		    	}
			    $("#CheckNum-" + day + "-" + a+"-90").addClass("selected");
			    $("#CheckNum-" + day + "-" + a+"-90").css("display","");
		    }else if(b == "1"){
				$("#CheckNum-" + day + "-" + a+"-00").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-00").addClass("selected");
			    $("#CheckNum-" + day + "-" + a+"-11").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-11").addClass("selected");
			    $("#CheckNum-" + day + "-" + a+"-22").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-22").addClass("selected");
			    $("#CheckNum-" + day + "-" + a+"-33").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-33").addClass("selected");
			    $("#CheckNum-" + day + "-" + a+"-99").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-99").addClass("selected");
		    }else if(b == "0"){
		    	for(var i=0;i<3;i++){
		    		for(var j=1;j<6;j++){
		    			if(i==1 && j<2 || i==2 && j<3){
		    				
		    			}else{
		    				$("#CheckNum-" + day + "-" + a+"-"+i+j).css("display","");
						    $("#CheckNum-" + day + "-" + a+"-"+i+j).addClass("selected");
		    			}
		    		}
		    	}
		    	$("#CheckNum-" + day + "-" + a+"-09").css("display","");
			    $("#CheckNum-" + day + "-" + a+"-09").addClass("selected");
		    }else{
		    	$("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).css("display","");
			    $("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).addClass("selected");
		    }
			if (allMatch > 10) {
				openAlert(decodeURI(EncodeUtf8("您好，单个方案最多只能选择10场比赛进行投注！")));
				$("#choose_" + day + "_" + a).remove();
				$("#bifenTR_" + day + "_" + a).remove();
				allMatch -= 1;
				$("#ball" + b + "_" + day + "_" + a).removeClass("result_1").addClass("result_3");
				$("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).removeClass("selected");
				$("#CheckNum-" + day + "-" + a+"-"+bf1+bf2).css("display","none");
				checkZhuma();
			} else {
				var no = $("#no_" + day + "_" + a).html();
				var homeTeam = $("#hteam_" + day + "_" + a).html();
	            var vteam = $("#vteam_"+ day + "_" + a).html();
				if (allMatch < 5) {
					for (var i = 1; i <= allMatch; i++) {
						$("#bf_r" + allMatch + "c1").css("display", "");
					}

					//定义数组存放多串投注方式时的id编号
					if (allMatch == 3) {
						var more = ["3", "4"];
					} else if (allMatch == 4) {
						var more = ["4", "5", "6", "11"];
					}

					for (var j = 3; j <= allMatch; j++) {
						for (var m = 0; m < more.length; m++) {
							var id = "bf_r" + allMatch + "c" + more[m];
							$("#" + id).css("display", "");
						}
					}
				}
				$("#no-" + day + "-" + a).html(week+no);
				$("#matchTeam-" + day + "-" + a).html(homeTeam+"VS"+vteam);
			}
		}

		$("#matchNum_bf").html(allMatch);
		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
	}
	//点击进球数添加右侧的js (a代表id标号，b代表进球数,week代表星期几)-------总进球---------
	function addMatchForRight_bqc(object, day, a, b,week){
		if (object.attr("class") != "result_0") {
			var count = 0;
			for(var i=0;i<4;i++){
				for(var j=0;j<4;j++){
					if(i==2 || j == 2){
						
					}else{
						if($("#CheckNum-" + day + "-" + a + "-" +i+j).hasClass("selected")){
							count++;
						}
					}
				}
			}
			if(count == 1){
				$("#bqcTr_" + day + "_" + a).remove();
				$("#choose_" + day + "_" + a).remove();
				allMatch -= 1;
				dingDanCheckbox();//定胆复选框的状态改变
			} else {
				$("#CheckNum-" + day + "-" + a + "-" + b).removeClass("selected");
				$("#CheckNum-" + day + "-" + a + "-" + b).css("display","none");
			}
			if (allMatch < 6) {
				if(allMatch < 2){
					$("#bqcTip").css("display","");
				}else{
					$("#bqcTip").css("display","none");
				}
				for (var i = allMatch; i < 9; i++) {
					$("#bqc_r" + (allMatch + 1) + "c1").css("display", "none");
					$("#bqc_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
					if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
						$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));

						$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
					}
				}
				//定义数组存放多串投注方式时的id编号
				var more = ["bqc_r3c3,bqc_r3c4", "bqc_r4c4,bqc_r4c5,bqc_r4c6,bqc_r4c11"];
				if (allMatch > 1) {
					for (var j = allMatch; j < 8; j++) {
						for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
							var id = more[allMatch - 2].split(",")[m];
							$("#" + id).css("display", "none");
							$("#" + id).children().removeClass();
							if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
								$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
							}
						}
					}
				}
			}

		} else {
			if ($("#choose_" + day + "_" + a).length < 1) {
										
				if($("#erjiwanfa").val()=="单关投注"){
					var tab_tr = "<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult_bqc($(this)," + day + "," + a + ","+b+",1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='matchTeam-" + day + "-" + a + "'></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' disabled='disabled' name='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")' value='checkbox'></td></tr>";
					$("#bqc_choose_list").append(tab_tr);
					tab_tr = "<tr id='bqcTr_" + day + "_" + a + "'><td id='bqc_" + day + "_" + a + "' colspan='3'></td></tr>";
					$("#bqc_choose_list").append(tab_tr);
					var td_span33 = "<span id='CheckNum-" + day + "-" + a + "-33" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"33\"" + ",0);'>胜胜</span>";
					var td_span31 = "<span id='CheckNum-" + day + "-" + a + "-31" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"31\"" + ",0);'>胜平</span>";
					var td_span30 = "<span id='CheckNum-" + day + "-" + a + "-30" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"30\"" + ",0);'>胜负</span>";
					var td_span13 = "<span id='CheckNum-" + day + "-" + a + "-13" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"13\"" + ",0);'>平胜</span>";
					var td_span11 = "<span id='CheckNum-" + day + "-" + a + "-11" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"11\"" + ",0);'>平平</span>";
					var td_span10 = "<span id='CheckNum-" + day + "-" + a + "-10" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"10\"" + ",0);'>平负</span>";
					var td_span03 = "<span id='CheckNum-" + day + "-" + a + "-03" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"03\"" + ",0);'>负胜</span>";
					var td_span01 = "<span id='CheckNum-" + day + "-" + a + "-01" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"01\"" + ",0);'>负平</span>";
					var td_span00 = "<span id='CheckNum-" + day + "-" + a + "-00" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"00\"" + ",0);'>负负</span>";
				    $("#bqc_" + day + "_" + a).append(td_span33+td_span31+td_span30+td_span13+td_span11+td_span10+td_span03+td_span01+td_span00);
				}else if($("#erjiwanfa").val()=="过关投注"){
					var tab_tr = "<tr id='choose_" + day + "_" + a + "'><td><dl class='CheckBox light Switch' onclick='CheckBox($(this));removeThisResult_bqc($(this)," + day + "," + a + ","+b+",1);'><dt></dt><dd id='no-" + day + "-" + a + "'></dd></dl></td><td id='matchTeam-" + day + "-" + a + "'></td><td><input class='dingdan_checkbox' id='dingdan_" + day + "_" + a + "' type='checkbox' name='checkbox' onclick='dingDanChoose($(this)," + day + "," + a +")' value='checkbox'></td></tr>";
					$("#bqc_choose_list").append(tab_tr);
					tab_tr = "<tr id='bqcTr_" + day + "_" + a + "'><td id='bqc_" + day + "_" + a + "' colspan='3'></td></tr>";
					$("#bqc_choose_list").append(tab_tr);
					var td_span33 = "<span id='CheckNum-" + day + "-" + a + "-33" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"33\"" + ",0);'>胜胜</span>";
					var td_span31 = "<span id='CheckNum-" + day + "-" + a + "-31" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"31\"" + ",0);'>胜平</span>";
					var td_span30 = "<span id='CheckNum-" + day + "-" + a + "-30" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"30\"" + ",0);'>胜负</span>";
					var td_span13 = "<span id='CheckNum-" + day + "-" + a + "-13" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"13\"" + ",0);'>平胜</span>";
					var td_span11 = "<span id='CheckNum-" + day + "-" + a + "-11" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"11\"" + ",0);'>平平</span>";
					var td_span10 = "<span id='CheckNum-" + day + "-" + a + "-10" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"10\"" + ",0);'>平负</span>";
					var td_span03 = "<span id='CheckNum-" + day + "-" + a + "-03" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"03\"" + ",0);'>负胜</span>";
					var td_span01 = "<span id='CheckNum-" + day + "-" + a + "-01" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"01\"" + ",0);'>负平</span>";
					var td_span00 = "<span id='CheckNum-" + day + "-" + a + "-00" + "' class='CheckWin' style='display: none;' onclick='removeThisResult_bqc($(this)," + day + "," + a + "," + "\"00\"" + ",0);'>负负</span>";
				    $("#bqc_" + day + "_" + a).append(td_span33+td_span31+td_span30+td_span13+td_span11+td_span10+td_span03+td_span01+td_span00);
				}
				
				$("#CheckNum-" + day + "-" + a+"-"+b).addClass("selected");
				$("#CheckNum-" + day + "-" + a+"-"+b).css("display","");
				allMatch += 1;
				dingDanCheckbox();//定胆复选框的状态改变
			} else {
				$("#CheckNum-" + day + "-" + a+"-"+b).addClass("selected");
				$("#CheckNum-" + day + "-" + a+"-"+b).css("display","");
			}
			if (allMatch > 10) {
				openAlert(decodeURI(EncodeUtf8("您好，单个方案最多只能选择10场比赛进行投注！")));
				$("#choose_" + day + "_" + a).remove();
				$("#bqcTr_" + day + "_" + a).remove();
				allMatch -= 1;
				$("#ball" + b + "_" + day + "_" + a).removeClass("result_0").addClass("result_2");
				$("#CheckNum-" + day + "-" + a+"-"+b).removeClass("selected");
				$("#CheckNum-" + day + "-" + a+"-"+b).css("display","none");
				checkZhuma();
			} else {
				var no = $("#no_" + day + "_" + a).html();
				var homeTeam = $("#hteam_" + day + "_" + a).html();
	            var vteam = $("#vteam_"+ day + "_" + a).html();
				if (allMatch < 7) {
					if(allMatch < 2){
						$("#bqcTip").css("display","");
					}else{
						$("#bqcTip").css("display","none");
					}
					for (var i = 2; i <= allMatch; i++) {
						$("#bqc_r" + allMatch + "c1").css("display", "");
					}

					//定义数组存放多串投注方式时的id编号
					if (allMatch == 3) {
						var more = ["3", "4"];
					} else if (allMatch == 4) {
						var more = ["4", "5", "6", "11"];
					} 

					for (var j = 3; j <= allMatch; j++) {
						for (var m = 0; m < more.length; m++) {
							var id = "bqc_r" + allMatch + "c" + more[m];
							$("#" + id).css("display", "");
						}
					}
				}
				$("#no-" + day + "-" + a).html(week+no);
				$("#matchTeam-" + day + "-" + a).html(homeTeam+"VS"+vteam);
			}
		}

		$("#matchNum_bqc").html(allMatch);
		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
		danguanCount();
	}
	//点击右侧赛事去掉选中的该结果object（当前对象）、 a（球的位置）、 b（进球数01234567）、key（选择的是否是删除整场所有结果的选择按钮）---总进球-----------
	function removeThisResult_zjq(object, day, a, b, key){
		if (key == 1) {
			$("#ball0_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball1_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball2_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball3_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball4_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball5_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball6_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball7_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#choose_" + day + "_" + a).remove();
			$("#jinqiuNum_" + day + "_" + a).remove();
			allMatch -= 1;
		} else if (key == 0) {
			$("#ball" + b + "_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			var count= 0;
			for(var i=0;i<8;i++){
				if($("#CheckNum-" + day + "-" + a +"-"+i).hasClass("selected") == true)
					count++;
			}
			if (count == 1) {
				$("#choose_" + day + "_" + a).remove();
				$("#jinqiuNum_" + day + "_" + a).remove();
				allMatch -= 1;
			} else {
				object.removeClass("selected");
			}
		}

		checkZhuma();

		$("#matchNum_zjq").html(allMatch);
		if (allMatch < 6) {
			for (var i = allMatch; i < 9; i++) {
				$("#zjq_r" + (allMatch + 1) + "c1").css("display", "none");
				$("#zjq_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
				if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
					$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));
					$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
				}
			}

			//定义数组存放多串投注方式时的id编号
			var more = ["zjq_r3c3,zjq_r3c4", "zjq_r4c4,zjq_r4c5,zjq_r4c6,zjq_r4c11", "zjq_r5c5,zjq_r5c6,zjq_r5c10,zjq_r5c16,zjq_r5c20,zjq_r5c26", "zjq_r6c6,zjq_r6c7,zjq_r6c15,zjq_r6c20,zjq_r6c22,zjq_r6c35,zjq_r6c42,zjq_r6c50,zjq_r6c57", "zjq_r7c7,zjq_r7c8,zjq_r7c21,zjq_r7c35,zjq_r7c120", "zjq_r8c8,zjq_r8c9,zjq_r8c28,zjq_r8c56,zjq_r8c70,zjq_r8c247"];
			if (allMatch > 1) {
				for (var j = allMatch; j < 8; j++) {
					for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
						var id = more[allMatch - 2].split(",")[m];
						$("#" + id).css("display", "none");
						$("#" + id).children().removeClass();
						if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
							$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
						}
					}
				}
			}
		}

		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
		danguanCount();
	}	
	//点击右侧赛事去掉选中的该结果object（当前对象）、 a（球的位置）、 b（进球数01234567）、key（选择的是否是删除整场所有结果的选择按钮）-----比分--------------
	function removeThisResult_bf(object, day, a, b, key){
		if (key == 1) {
			for(var i=0;i<3;i++){
				for(var j=0;j<6;j++){
					$("#ball"+i+j+"_" + day + "_" + a).removeClass("result_1").addClass("result_3");
				}
			}
			for(var i=3;i<6;i++){
				for(var j=0;j<3;j++){
					$("#ball"+i+j+"_" + day + "_" + a).removeClass("result_1").addClass("result_3");
				}
			}
			$("#ball33_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			$("#ball09_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			$("#ball99_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			$("#ball90_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			$("#choose_" + day + "_" + a).remove();
			$("#bifenTR_" + day + "_" + a).remove();
			allMatch -= 1;
		} else if (key == 0) {
			$("#ball" + b + "_" + day + "_" + a).removeClass("result_1").addClass("result_3");
			var count= 0;
			for(var i=0;i<3;i++){
				for(var j=0;j<6;j++){
					if($("#CheckNum-" + day + "-" + a+"-"+i+j).hasClass("selected"))
						count++;
				}
			}
			for(var i=3;i<6;i++){
				for(var j=0;j<3;j++){
					if($("#CheckNum-" + day + "-" + a+"-"+i+j).hasClass("selected"))
					count++;
				}
			}
			if($("#CheckNum-" + day + "-" + a+"-33").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-09").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-99").hasClass("selected") || $("#CheckNum-" + day + "-" + a+"-90").hasClass("selected")){
				count++;
			}
			if (count == 1) {
				$("#choose_" + day + "_" + a).remove();
				$("#bifenTR_" + day + "_" + a).remove();
				allMatch -= 1;
			} else {
				object.removeClass("selected");
				object.css("display","none");
			}
		}

		checkZhuma();

		$("#matchNum_bf").html(allMatch);
		if (allMatch < 4) {
			$("#bf_r" + (allMatch + 1) + "c1").css("display", "none");
			$("#bf_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
			if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
				$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));
				$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
			}

			//定义数组存放多串投注方式时的id编号
			var more = ["bf_r3c3,bf_r3c4", "bf_r4c4,bf_r4c5,bf_r4c6,bf_r4c11"];
			if (allMatch > 1) {
				for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
					var id = more[allMatch - 2].split(",")[m];
					$("#" + id).css("display", "none");
					$("#" + id).children().removeClass();
					if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
						$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
					}
				}
			}
		}

		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
		danguanCount();
	}	

	//点击右侧赛事去掉选中的该结果object（当前对象）、 a（球的位置）、 b（进球数01234567）、key（选择的是否是删除整场所有结果的选择按钮）---总进球-----------
	function removeThisResult_bqc(object, day, a, b, key){
		if (key == 1) {
			$("#ball33_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball31_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball30_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball13_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball11_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball10_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball03_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball01_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#ball00_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			$("#choose_" + day + "_" + a).remove();
			$("#bqcTr_" + day + "_" + a).remove();
			allMatch -= 1;
		} else if (key == 0) {
			$("#ball" + b + "_" + day + "_" + a).removeClass("result_0").addClass("result_2");
			var count= 0;
			for(var i=0;i<4;i++){
				for(var j=0;j<4;j++){
					if(i==2 || j == 2){
						continue;
					}else{
						if($("#CheckNum-" + day + "-" + a + "-" +i+j).hasClass("selected"))
							count++;
					}
				}
			}
			if (count == 1) {
				$("#choose_" + day + "_" + a).remove();
				$("#bqcTr_" + day + "_" + a).remove();
				allMatch -= 1;
			} else {
				object.removeClass("selected");
				object.css("display","none");
			}
		}

		checkZhuma();

		$("#matchNum_bqc").html(allMatch);
		if (allMatch < 6) {
			for (var i = allMatch; i < 9; i++) {
				$("#bqc_r" + (allMatch + 1) + "c1").css("display", "none");
				$("#bqc_r" + (allMatch + 1) + "c1").removeClass("CheckBox light Switch").addClass("CheckBox light");
				if ($("#allWanfa").val().indexOf((allMatch + 1) + "串1") != -1) {
					$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf((allMatch + 1) + "串1") - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf((allMatch + 1) + "串1") + ((allMatch + 1) + "串1").length));
					$("#list_LotteryNumber option:eq(0)").attr("wangFang", $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring(0, $("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) - 1) + $("#list_LotteryNumber option:eq(0)").attr("wangFang").substring($("#list_LotteryNumber option:eq(0)").attr("wangFang").indexOf("50" + (allMatch + 1)) + 3));
				}
			}

			//定义数组存放多串投注方式时的id编号
			var more = ["bqc_r3c3,bqc_r3c4", "bqc_r4c4,bqc_r4c5,bqc_r4c6,bqc_r4c11"];
			if (allMatch > 1) {
				for (var j = allMatch; j < 8; j++) {
					for (var m = 0; m < more[allMatch - 2].split(",").length; m++) {
						var id = more[allMatch - 2].split(",")[m];
						$("#" + id).css("display", "none");
						$("#" + id).children().removeClass();
						if ($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) != -1) {
							$("#allWanfa").val($("#allWanfa").val().substring(0, $("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) - 1) + $("#allWanfa").val().substring($("#allWanfa").val().indexOf(id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)) + (id.substring(id.indexOf("r") + 1, id.indexOf("c")) + "串" + id.substring(id.indexOf("c") + 1)).length));
						}
					}
				}
			}
		}

		var wanfa = $("#allWanfa").val();
		guoGuanWays(wanfa, 0);
		danguanCount();
	}	
	function showaddr(){
		var name=document.getElementById("upload").value;
		name=name.substring(name.lastIndexOf("\\")+1);
		$(".showaddress").text(name);
	}
