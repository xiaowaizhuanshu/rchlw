// 其中合并了 原来的 js.js、userleft.js、script.js、register.js,主要针对用户中心模块使用的js


//----------------------js.js  开始----------------------
//修改密码页面验证
//$(function() {
//	$.formValidator.initConfig( {
//		formid : "form1",
//		onError : function() {
//			alert("校验没有通过，具体错误请看错误提示");
//		}
//	});
//
//	$("#old_pass").formValidator( {
//		onshow : "请输入密码",
//		onfocus : "密码不能为空,密码长度6-15位",
//		oncorrect : "密码合法"
//	}).inputValidator( {
//		min : 6,
//		max : 15,
//		empty : {
//			leftempty : false,
//			rightempty : false,
//			emptyerror : "密码两边不能有空符号"
//		},
//		onerror : "密码不合法,请确认"
//	});
//
//	$("#new_pass").formValidator( {
//		onshow : "请输入密码",
//		onfocus : "密码不能为空,密码长度6-15位",
//		oncorrect : "密码合法"
//	}).inputValidator( {
//		min : 6,
//		max : 15,
//		empty : {
//			leftempty : false,
//			rightempty : false,
//			emptyerror : "密码两边不能有空符号"
//		},
//		onerror : "密码不合法,请确认"
//	});
//	$("#real_pass").formValidator( {
//		min : 6,
//		max : 15,
//		onshow : "请输入重复密码",
//		onfocus : "两次密码必须一致哦",
//		oncorrect : "密码一致"
//	}).inputValidator( {
//		min : 6,
//		max : 15,
//		empty : {
//			leftempty : false,
//			rightempty : false,
//			emptyerror : "重复密码两边不能有空符号"
//		},
//		onerror : "重复密码不能为空,请确认"
//	}).compareValidator( {
//		desid : "new_pass",
//		operateor : "=",
//		onerror : "2次密码不一致,请确认"
//	});
//});
//-------------------------js.js  结束-------------------------

//------------------- userleft.js 开始----------------------
var LastLeftID = "";
function menuFix() {  //初始化
GetMenuID(); //*这两个function的顺序要注意一下，不然在Firefox里GetMenuID()不起效果
var obj = document.getElementById("nav").getElementsByTagName("li");
 for (var i=0; i<obj.length; i++) {
  obj[i].onmouseover=function() {
   this.className+=(this.className.length>0? " ": "") + "sfhover";
  };
  obj[i].onMouseDown=function() {
   this.className+=(this.className.length>0? " ": "") + "mousehover";
  };
  obj[i].onMouseUp=function() {
   this.className+=(this.className.length>0? " ": "") + "sfhover";
  };
  obj[i].onmouseout=function() {
   this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
  }; 
 }
 //初始化左侧列表连接背景色样式
	var key = 23;
	var keyP = GetQueryString("key");
	if(keyP!=null && keyP!="undefined"){
		key = keyP;
	}
	$("#left_"+key).attr("class","mousehover");
}

function init(){
	var view = GetQueryString("view");
	$("#"+view).attr("class","expanded");
	changeStyle(GetQueryString("style"));
}

function DoMenu(emid)
{
 var obj = document.getElementById(emid); 
 //obj.className = (obj.className.toLowerCase() == "expanded"?"collapsed":"expanded");
 if(obj.className.toLowerCase() == "expanded"){
	obj.className = "collapsed";
	$("obj>span").addClass("nochoose");
 }else{
	obj.className = "expanded";
	$("obj>span").addClass("choose");
 }
 if((LastLeftID!="")&&(emid!=LastLeftID)) //关闭上一个Menu
 {
  document.getElementById(LastLeftID).className = "collapsed";
 }
 LastLeftID = emid;
}
function changeStyle(menu){
		$("#menu1").attr("class","nochoose");
		$("#menu2").attr("class","nochoose");
		$("#menu3").attr("class","nochoose");
		$("#menu4").attr("class","nochoose");
		if(menu=="menu1"){$("#menu1").attr("class","choose");}
		else if(menu=="menu2"){$("#menu2").attr("class","choose");}
		else if(menu=="menu3"){$("#menu3").attr("class","choose");}
		else if(menu=="menu4"){$("#menu4").attr("class","choose");}
}
function GetMenuID() {
	var MenuID = "";
	var _paramStr = new String(window.location.href);
	var _sharpPos = _paramStr.indexOf("#");

	if (_sharpPos >= 0 && _sharpPos < _paramStr.length - 1) {
		_paramStr = _paramStr.substring(_sharpPos + 1, _paramStr.length);
	} else {
		_paramStr = "";
	}

	if (_paramStr.length > 0) {
		var _paramArr = _paramStr.split("&");
		if (_paramArr.length > 0) {
			var _paramKeyVal = _paramArr[0].split("=");
			if (_paramKeyVal.length > 0) {
				MenuID = _paramKeyVal[1];
			}
		}
 }	
 
 if (MenuID != "") {
		DoMenu(MenuID);
	}
}
//GetMenuID(); /这两个function的顺序要注意一下，不然在Firefox里GetMenuID()不起效果
//menuFix();

//--------------------- userleft.js 结束---------------------------

//------------------- script.js 开始--------------------------

//查询是否是dna绑定用户
var addFont ='0';    //银行卡充值返回操作用到
var toChargeFlag='0';  //在银行卡充值页跳转到其它充值页用到
function chargeOnload(key) {
	if(key=="" || key=='65' || key==65){
		key=65;
	};
	$.ajax({
	        url:'/rchlw/user/tuserinfoAction!toCharge', 
	        type:'post',   
	        dataType:'json',  
	        success:(function(json){ //回传函数实体，参数为XMLhttpRequest.responseText
	        	if(json.objDNABind!=null && json.objDNABind!="" && json.objDNABind.state=="0"){
					//白名单
					addFont = '0';
    				reHtml(key,'',true,"bankDiv",false);					
    			}else{
					//灰名单  已绑定状态
					addFont = '1';
					reHtml(key,'',true,"bankDiv",false);
					
				}
    		 })
			 
	});
};
function changeDiv(id){
	var divid = "div"+id;
	$("#"+divid).css("display","none");

	var nextid = "div"+(Number(id)+1);
	$("#"+nextid).css("display","block");

}
var t_name='0';
function testName(){
	//查询用户真实姓名
	var username = $("#username1").val().trim();
	$("#realnameImage").children().remove();
	$("#realnamefont").text("");
	if(username==""){
		addWrongImages("username1","realnameImage","realnamefont","真实姓名不能为空，请输入真实姓名！");
		t_name="0";
		return false;
	};
	var params = "username="+username;
	params = params+"&isIe="+decodeURI(EncodeUtf8("中文"));
	for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
	$.ajax({
		url:'/rchlw/user/tuserinfoAction!testUserName?'+params,  //后台处理程序
		type:'post',   
		dataType:'json',   
		success:function(data){
			if(data==true){
				addRightImages("realnameImage");
				t_name="1";
				return true;
			}else{
				addWrongImages("username1","realnameImage","realnamefont","真实姓名与注册时所填写的真实姓名不一致，请重新输入！");
				t_name="0";
				return false;
			}
		}
	});	
}

var t_card="0";
function testcard(){
	 var re=/^\d{14}(\d|X)$/i;
	 var reg =/^\d{17}(\d|X)$/i; 
	 var usercardid = $("#cardId").val().trim();
	 $("#cardIdImage").children().remove();
	 $("#cardIdfont").text("");
	if(usercardid==""){
		addWrongImages("cardId","cardIdImage","cardIdfont","身份证号码不能不空，请填写正确信息");
		t_card = "0";
		return false;
	}
	if(usercardid =="111111111111111111" || usercardid =="111111111111111"){
			addWrongImages("cardId","cardIdImage","cardIdfont","身份证号码输入有误，请重新输入");
			t_card = "0";
			return false;
	};
	 
	if(!reg.test(usercardid) && !re.test(usercardid) ){ 
		addWrongImages("cardId","cardIdImage","cardIdfont","身份证号码输入有误，请重新输入！");
		t_card = "0";
		return false;
	};
	var params="cardid="+usercardid;
	params = params+"&isIe="+decodeURI(EncodeUtf8("中文"));
	for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
	$.ajax({
		url:'/rchlw/user/tuserinfoAction!testPersonId',  //后台处理程序
		type:'post',    //数据发送方式 
		data:params, 
		dataType:'json',
		success:function(data){
			if(data==true){
				addRightImages("cardIdImage");
				t_card = "1";
				return true;
			}else{
				addWrongImages("cardId","cardIdImage","cardIdfont","身份证号码输入有误，请重新输入！");
				t_card = "0";
				return false;
			}
		}
	});
}

function testbank(){
	var bankname = $("#bank_name").val();
	$("#banknameImage").children().remove();
	$("#bankfont").text("");
	if(bankname=="" || bankname=="undefined"){
		addWrongImages("bank_name","banknameImage","bankfont","请选择银行名称！");
		return false;
	}
	addRightImages("banknameImage");
	return true;
}

function jumpNextTest(){
	if(t_name=="1" && t_card=="1" && checkDocumentAddress()  && cardNumberCheck() && testbank()){
		//getDnaParams_first
		var params = $("#dnaForm").serialize(); 
		params = params+"&isIe="+"中文";
		for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
		$.ajax({
			url:'/rchlw/user/tuserinfoAction!getDnaParams_first', 
			type:'post', 
			data:params, 
			success:function(data){
				if(data=="success"){
					//reHtml(65,'',true,"",false);
					chargeOnload(65);
					return true;
				}else{
					openAlert(data);
					return false;
				}
			}
		});

	}else{
		openAlert(decodeURI(EncodeUtf8("输入信息有误，请根据提示修改错误信息！")));
	}
}

//验证密码  passwordImage 
var passwordMark = 0;
function testpassword(){
	var password = $("#password").val().trim();
	if(password==""||password == null){
		addWrongImages("password","passwordImage","passwordfont","登录密码为必填！");
		passwordMark = 0;
		return false;
	}
	$.ajax({
		 url:'/rchlw/user/tuserinfoAction!testPassword?password='+password,  //后台处理程序
         type:'post',    //数据发送方式
         dataType:'text',   //接受数据格式
        // data:params,   //要传递的数据;就是上面序列化的值
         success:function(data){
			$("#passwordImage").children().remove();
			$("#passwordfont").text("");
			if(data!="true"){
				addWrongImages("password","passwordImage","passwordfont","密码与登录密码不一致，请重新输入！");
				passwordMark = 0;
				return false;
			}
			addRightImages("passwordImage");
			passwordMark =1;
			return true;
		 }
	});
}

function jumpthreeUrl(){
	if(amountCheck() && telCheck() && (passwordMark==1)){
		//changeDiv('2');
		var params = $("#dnaForm").serialize(); 
		params = params+"&isIe="+decodeURI(EncodeUtf8("中文"));
		for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
		$.ajax({
			url:'/rchlw/user/tuserinfoAction!getDnaParams_sescond',  //后台处理程序
			type:'post',    //数据发送方式 
			async:false,
			data:params, 
			success:function(data){
				if(data=="success"){
					reHtml(66,'',true,"",false);	
					return true;
				}else{
					openAlert(data);
					return false;
				}
			}
		});

	}else{
		openAlert(decodeURI(EncodeUtf8("输入数据有误，请根据错误提示修改信息！")));
	}
}

//===========================================================================
//得到radio按钮验证的值
function disDiv(radioID){
	var radio=document.getElementsByName(radioID);//得到卡的类型
	var c;
	 if(radio.length){  
		for(var i=0;i <radio.length;i++){ 
		   if(radio[i].checked){  
			    c =radio[i].value; 
			    break; 
		  }       
		} 
	}
   return c;
}
// 网上银行充值开始
function bankRadioCharge(radioID){
	var c = $("#"+radioID).val();
     if(c=='minShengBanks'){
         $("#dis").html(decodeURI(EncodeUtf8("中国民生银行")));
     }else if(c=='0600'|| c=='0602'){
		 $("#dis").html(decodeURI(EncodeUtf8("上海银联电子支付")));
	 }else if(c=='yeepay'){
         $("#dis").html(decodeURI(EncodeUtf8("易宝支付")));
     }else if(c=='00'){
    	 $("#dis").html(decodeURI(EncodeUtf8("联动优势")));
     } else{
         $("#dis").html(decodeURI(EncodeUtf8("支付宝")));
     }

}

//验证
function checkMinsheng(){
	var bankMoneyPattern = /^([1-9]{1}[0-9]*)$/;
	var bankMoney = $("#minshengMoney").val().trim();
	if (bankMoney == null || bankMoney == "") {
		openAlert(decodeURI(EncodeUtf8("请您输入充值金额！")));
		return false;
	}
	if (isNaN(bankMoney)) {
		openAlert(decodeURI(EncodeUtf8("充值金额必须是数字！")));
		return false;
	}
	if(!bankMoneyPattern.test(bankMoney)){
		openAlert(decodeURI(EncodeUtf8("充值金额必须是正整数！")));
		return false;
	}
	if (bankMoney<5) {
		openAlert(decodeURI(EncodeUtf8("对不起，网上银行充值每笔交易最低5元。")));
		return false;
	}
	if (bankMoney < 1 || bankMoney > 9223372036854775807) {
		openAlert(decodeURI(EncodeUtf8("必须是大于等于 1的数字！")));
		return false;
	}
	return true;
}

function changeClass(n){
	$("#radio"+n).parents().find("span").removeClass("bankkuang_xuan");
	$("#radio"+n).next().addClass("bankkuang_xuan");
}
//银行卡充值
function ChargeTruePage(){
	var classid = $("#radiobutton").attr("class");
	var values = $("#minshengMoney").val().trim();
	var bankValue = $("#radiobutton").val().trim();
	var ladderflage = $("#ladderflag").attr("checked");
	if(!checkMinsheng()){
	   return false;
	}
	if(bankValue=="zfbyy"){
		if($("#isMobile").val() == null  || $("#isMobile").val().trim() == '' || $("#isMobile").val() == 'null'){
			openAjaxPopup("openTishi",1000,"/rchlw/function/rules/chargeTishi.html");
			return false;
		}
	}
	ajaxMinshengFill(bankValue,values,ladderflage);
	if(chargeflag == "0"){
		return false;	
	}else{
		reHtmljsp(63,'',true,"right_text",false);
		document.getElementById("formurl").action=requrl;
		$("#ddclass").removeClass();
		$("#ddclass").addClass(classid);
		$("#chargeMoney").text(values);
		if(mac!=""){
			$("#macId").append('<input type="hidden" name="orderinfo" id="orderinfo" value="'+mac+'"/>');
		}
		
	}
}
//----------手机话费充值start-----------------------
function chargeByMobileHuafei(money){
	var ladderflage = $("#ladderflag").attr("checked");
	ajaxMobileHuafeiFill(money,ladderflage);
	if(mobilechargeflag == "0"){
		return false;	
	}else{
		reHtmljsp(92,'',true,"right_text",false);
		$("#form_url").attr("action",reqUrl);
		$("#goodsId").attr("value",goodsId);
		$("#amtType").attr("value",amtType);
		$("#merId").attr("value",merId);
		$("#version").attr("value",version);
		$("#merDate").attr("value",merDate);
		$("#sign").attr("value",sign);
		$("#amount").attr("value",amount);
		$("#bankType").attr("value",bankType);
		$("#merPriv").attr("value",merPriv);
		$("#retUrl").attr("value",retUrl);
		$("#notifyUrl").attr("value",notifyUrl);
		$("#orderId").attr("value",orderId);
		var choose = "";
		if(money=="30"){
			choose="money30";
			$("#chargeMoney").text("20");
		}
		else{
			choose="money3";
			$("#chargeMoney").text("2");
		}
			
		$(".chargeType dd").each(function(i){
			if($(this).hasClass(choose)){
				$(this).css("display", "").siblings().css("display","none");
			}
		});
	}
}
function ajaxMobileHuafeiFill(amt,ladderflag){
	$.ajax({
		 url:'/rchlw/user/tuserinfoAction!mobileHuafeiCharge?money='+amt+"&ladderflag="+ladderflag, 
		 type:'post',    //数据发送方式
		 dataType:'json',   //接受数据格式
		 async:false,
		 success:mobileHuafeiCharge_Result, //回传函数(这里是函数名) 
		 error:function(){
			openAlert(decodeURI(EncodeUtf8("充值操作出现异常，请联系客服！")));
			repeat('minshSubmit',decodeURI(EncodeUtf8('立即充值')));
			chargeflag = 0;
		 }
	 });
}
var mobilechargeflag = 0;
var reqUrl = '';
var goodsId = "";
var amtType = "";
var merId = "";
var version ="";
var merDate = "";
var sign = "";
var amount = "";
var bankType = "";
var merPriv = "";
var retUrl = "";
var notifyUrl = "";
var orderId = "";
function mobileHuafeiCharge_Result(json){ //回传函数实体，参数为XMLhttpRequest.responseText
	if(json.flag){
		mobilechargeflag = 1;
		reqUrl = json.objUmpay.reqUrl;
		goodsId = json.objUmpay.goodsId;
		amtType = json.objUmpay.amtType;
		merId = json.objUmpay.merId;
		version = json.objUmpay.version;
		merDate = json.objUmpay.merDate;
		sign = json.objUmpay.sign;
		amount = json.objUmpay.amount;
		bankType = json.objUmpay.bankType;
		merPriv = json.objUmpay.merPriv;
		retUrl = json.objUmpay.retUrl;
		notifyUrl = json.objUmpay.notifyUrl;
		orderId = json.objUmpay.orderId;
	 }else{
		 mobilechargeflag = 0;
		repeat('minshSubmit',decodeURI(EncodeUtf8('立即充值')));
		openAlert(json.message);
	 }
}
//-----------------手机话费充值end----------------------------------------
function putBankUrl(){
	$("#minshSubmit").val(decodeURI(EncodeUtf8('充值中')));
	$("#minshSubmit").attr("disabled", true);
	var appendText ="";
	if($("#minshSubmit").hasClass("mobile"))
		appendText = '<div class="AlertWindow BalanceWindow WindowCenter" ><div class="WindowTittle"><h3>'+decodeURI(EncodeUtf8("完成充值"))+'</h3><span class="Alertclose" onclick="closeChargeTishi();">&#160;</span></div><div class="InsideBorder" style="padding-top:30px;"><table class="BalanceTable"><thead><tr><th width="100">&#160;</th><td style="font-size:15px; line-height:40px; font-weight:bold;">'+decodeURI(EncodeUtf8("请您在新打开的页面上完成充值"))+'</td></tr><tr><th>&#160;</th><td>'+decodeURI(EncodeUtf8("充值完成前请不要关闭此窗口，"))+'<br />'+decodeURI(EncodeUtf8("完成充值后请根据您的情况点击下面的按钮；"))+'<br />'+decodeURI(EncodeUtf8("或者"))+'<a href="/rchlw/function/rules/user.jsp?key=4" style="color:#1f376D;">'+decodeURI(EncodeUtf8("选择其他支付方式"))+'</a>。</td></tr></thead><tbody><tr><th colspan="2">&#160;</th></tr><tr><th colspan="2"><a class="BaseBtn" href="/rchlw/function/rules/user.jsp?key=6">'+decodeURI(EncodeUtf8("完成充值"))+'</a><a class="BaseBtn" href="/rchlw/function/rules/customMessage.jsp" target="_blank">'+decodeURI(EncodeUtf8("遇到问题"))+'</a></th></tr></tbody></table></div></div>';
	else
		appendText = '<div class="AlertWindow BalanceWindow WindowCenter" ><div class="WindowTittle"><h3>'+decodeURI(EncodeUtf8("完成充值"))+'</h3><span class="Alertclose" onclick="closeChargeTishi();">&#160;</span></div><div class="InsideBorder" style="padding-top:30px;"><table class="BalanceTable"><thead><tr><th width="100">&#160;</th><td style="font-size:15px; line-height:40px; font-weight:bold;">'+decodeURI(EncodeUtf8("请您在新打开的网上银行页面上完成充值"))+'</td></tr><tr><th>&#160;</th><td>'+decodeURI(EncodeUtf8("充值完成前请不要关闭此窗口，"))+'<br />'+decodeURI(EncodeUtf8("完成充值后请根据您的情况点击下面的按钮；"))+'<br />'+decodeURI(EncodeUtf8("或者"))+'<a href="/rchlw/function/rules/user.jsp?key=4" style="color:#1f376D;">'+decodeURI(EncodeUtf8("选择其他支付方式"))+'</a>。</td></tr></thead><tbody><tr><th colspan="2">&#160;</th></tr><tr><th colspan="2"><a class="BaseBtn" href="/rchlw/function/rules/user.jsp?key=6">'+decodeURI(EncodeUtf8("完成充值"))+'</a><a class="BaseBtn" href="/rchlw/function/rules/customMessage.jsp" target="_blank">'+decodeURI(EncodeUtf8("遇到问题"))+'</a></th></tr></tbody></table></div></div>';
	$("body").append(appendText);
	$(".AlertWindow BalanceWindow WindowCenter").show();	

	WindowCenter();
	
}
function closeChargeTishi(){
	closeAjaxLogin('openTishi');
	window.location.href="/rchlw/function/rules/user.jsp?key=6";
}

function ajaxMinshengFill(bankValue,amt,ladderflag){
	$.ajax({
		 url:'/rchlw/user/tuserinfoAction!minshengCharge?radiobutton='+bankValue+'&chargeBean.transaction_money='+amt+"&ladderflag="+ladderflag, 
		 type:'post',    //数据发送方式
		 dataType:'json',   //接受数据格式
		 async:false,
		 success:minshengCharge_Result, //回传函数(这里是函数名) 
		 error:function(){
			openAlert(decodeURI(EncodeUtf8("充值操作出现异常，请联系客服！")));
			repeat('minshSubmit',decodeURI(EncodeUtf8('立即充值')));
			chargeflag = 0;
		 }
	 });
	
}
var chargeflag = 0;
var requrl = '';
var mac = '';
function minshengCharge_Result(json){ //回传函数实体，参数为XMLhttpRequest.responseText
	if(json.flag){
		chargeflag = 1;
		if(json.bankOrSound == 'minShengBanks'){
		
			requrl = json.objMinsheng.requrl;
			mac=json.objMinsheng.msBank_Mac;
		}else if(json.bankOrSound == 'shangHaiBanks'){
			
			requrl = json.objShangHai.pay_url;
			mac='';
		}else if(json.bankOrSound == 'yinLianBanks'){
		
			requrl = json.objYinLian.pay_url;
			mac='';
		}else if(json.bankOrSound == 'yeepay'){
		
			requrl = json.jsonYeepay.requrl;
			mac='';
		}else if(json.bankOrSound == 'zfbzx'){
		
			requrl = json.jsonAlipay.requrl;
			mac='';
		}else if(json.bankOrSound == 'umpay'){
			requrl = json.objUmpay.pay_url;
			mac='';
		}else{
			chargeflag = 0;
			mac='';
			repeat('minshSubmit',decodeURI(EncodeUtf8('立即充值')));
			openAlert(json.message);
		};
	 }else{
		chargeflag = 0;
		mac='';
		repeat('minshSubmit',decodeURI(EncodeUtf8('立即充值')));
		openAlert(json.message);
		
	 }
}

//点卡按钮
function pointRadio(radioID){
	var c = disDiv(radioID);
	if(c =='SZX'){
		$("#huafei").show();
		$("#game").hide();
		$("#liantong").hide();
		$("#yidong").show();
		$("#liantongs").hide();
		$("#dianxin").hide();
		
	}if(c=='UNICOM'){
		$("#liantong").show();
		$("#game").hide();
		$("#huafei").hide();
		$("#yidong").hide();
		$("#liantongs").show();
		$("#dianxin").hide();
		
	}if(c=='DXJFK'){
		$("#game").show();
		$("#huafei").hide();
		$("#liantong").hide();
		$("#yidong").hide();
		$("#liantongs").hide();
		$("#dianxin").show();
	}
}

// 充值时点卡卡号验证	
function chargeCardNoCheck(){
	var cardNo = $("#cardNoPoint").val();
	if (cardNo == null || cardNo == "") {
		openAlert(decodeURI(EncodeUtf8("请您输入充值卡卡号！")));
		return false;
	}
	if (cardNo.length > 30) {
		openAlert(decodeURI(EncodeUtf8("卡号必须是小于 30位！")));
		return false;
	}
	return true;
}
// 充值时点卡密码验证
function chargePassCheck(){
	var cardPass = $("#cardPassword").val();//document.getElementById("cardPassword").value;
	if (cardPass == null || cardPass == "") {
		openAlert(decodeURI(EncodeUtf8("请您输入您的充值卡密码")));
		return false;
	}
	return true;
}
// 验证充值卡面值
function chargeallmoneyCheck(){
	var  bankMoneyPattern = /^([1-9]{1}[0-9]*)$/;
	var bankMoney = $("#mzmoney1").val();//document.getElementById("mzmoney1").value;
	if (bankMoney == null || bankMoney == "") {
		openAlert(decodeURI(EncodeUtf8("请您输入充值卡面值！")));
		return false;
	}
	if (isNaN(bankMoney)) {
		openAlert(decodeURI(EncodeUtf8("充值卡面值必须是数字！")));
		return false;
	}
	if (bankMoney < 1 || bankMoney > 5000) {
		openAlert(decodeURI(EncodeUtf8("充值卡面值必须为整数！")));
		return false;
	}
	return true;
}
//验证用户是否选择充值面额
function checkMoneys(){
	if($("#huafei").css("display")=="block"){
		if($("#mzmoney").val()!=""){
			return true;
		}else{
			openAlert(decodeURI(EncodeUtf8("请选择充值面额！")));
			return false;
		}
	}else if ($("#liantong").css("display")=="block"){
		if($("#mzmoney1").val()!=""){
			return true;
			}else{
				openAlert(decodeURI(EncodeUtf8("请选择充值面额！")));
				return false;
			}
	}else if ($("#game").css("display")=="block"){
		if($("#mzmoney2").val()!=""){
			return true;
		}else{
			openAlert(decodeURI(EncodeUtf8("请选择充值面额！")));
			return false;
		}
	}
return true;
}
function ajaxPointFill(){
	var c = $("#netCharge_type").val();
	if(c =='SZX' || c=='UNICOM' || c=='DXJFK'){
		if(!checkMoneys()){return;}
		if(!chargeCardNoCheck()){return;}
		if(!chargePassCheck()){return;}
	}else{
		openAlert(decodeURI(EncodeUtf8("请选择充值卡类型！")));
		return ;
	}
	var params=$('#pointForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值
		notRepeat('pointSubmit','over',decodeURI(EncodeUtf8('充值中')));
	    $.ajax({
	         url:'/rchlw/user/tuserinfoAction!pointCharge',  //后台处理程序
	         type:'post',    //数据发送方式
	         dataType:'json',   //接受数据格式
	         data:params,   //要传递的数据;就是上面序列化的值
	         success:point_Result, //回传函数(这里是函数名) 
			 error:function(){
				repeat('pointSubmit',decodeURI(EncodeUtf8('下一步')));
				openAlert(decodeURI(EncodeUtf8("充值失败，请重新输入充值卡号和充值密码！")));
			 }
	     });
}
function point_Result(data){
	if(data.flag){
		var error_code = data.jsonValue.error_code;
		if(error_code=="0"){
			repeat('pointSubmit',decodeURI(EncodeUtf8('下一步')));
			openAlert(decodeURI(EncodeUtf8("充值中，请稍后查询余额！")));
			$("#cardNoPoint").val("");
			$("#cardPassword").val("");
		}else{
			repeat('pointSubmit',decodeURI(EncodeUtf8('下一步')));
			openAlert(decodeURI(EncodeUtf8("充值失败，请重新充值！")));
			$("#cardNoPoint").val("");
			$("#cardPassword").val("");
		}
	}else{
		repeat('pointSubmit',decodeURI(EncodeUtf8('下一步')));
		openAlert(data.message);
		$("#cardNoPoint").val("");
		$("#cardPassword").val("");
	}
	
}
//话费、游戏卡充值结束



// dna充值开始

//验证充值的金额   amount  amountImage   amountfont
function amountCheck()// 充值时数据验证	
{
	var bankMoneyPattern = /^([1-9]{1}[0-9]*)$/;
	var bankMoney = $("#amount").val();//document.getElementById("amount").value;
	$("#amountImage").children().remove();
	$("#amountfont").text("");
	if (bankMoney == null || bankMoney == "") {
		addWrongImages("amount","amountImage","amountfont","请您输入充值金额！");
		//openAlert(decodeURI(EncodeUtf8("请您输入充值金额！")));
		return false;
	}
	if (isNaN(bankMoney)) {
		addWrongImages("amount","amountImage","amountfont","充值金额必须是数字！");
		//openAlert(decodeURI(EncodeUtf8("充值金额必须是数字！")));
		return false;
	}
	if(!bankMoneyPattern.test(bankMoney)){
		addWrongImages("amount","amountImage","amountfont","充值金额必须是整数！");
		//openAlert(decodeURI(EncodeUtf8("充值金额必须是整数！")));
		return false;
	}
	if (bankMoney < 20 || bankMoney > 9223372036854775807) {
		addWrongImages("amount","amountImage","amountfont","银行卡电话充值最少 20元！");
		//openAlert(decodeURI(EncodeUtf8("银行卡电话充值最少 20元")));
		return false;
	}
	addRightImages("amountImage");
	return true;
}

//验证银行卡号  cardNumber  bankcardImage   bankcardfont
function cardNumberCheck(){
	var cardNumber=$("#cardNumber").val().trim();
	var reg = /^([0-9]{16,21})/;  
	$("#bankcardImage").children().remove();
	$("#bankcardfont").text("");
	if (cardNumber == null || cardNumber == "") {
		addWrongImages("cardNumber","bankcardImage","bankcardfont","请您输入银行卡卡号！");
		return false;
	}
	if(!reg.test(cardNumber) ){
		addWrongImages("cardNumber","bankcardImage","bankcardfont","请你输入正确的银行账号！");
		return false;
	}
	addRightImages("bankcardImage");
	return true;

}

//验证电话号码  tel telImage  telfont
function telCheck(){
	var phone = $("#tel").val();//document.getElementById("tel").value;

	var phonePattern1=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	var phonePattern2=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	$("#telImage").children().remove();
	$("#telfont").text("");
	if(phone==null||phone==""){
		addWrongImages("tel","telImage","telfont","请输入电话号码！");
		return false;
	}
	if(isNaN(phone)){
		addWrongImages("tel","telImage","telfont","请正确输入电话号码！"); 
		return false;
	}
	if(phone.length!=11){
		addWrongImages("tel","telImage","telfont","请正确输入电话号码！");  
		return false;
	}
	addRightImages("telImage"); 
	return true;
}

//验证用户名
function checkUserName(){
	var userName = $("#userName").val();//document.getElementById("userName").value;
	if(userName==null || userName==""){
		openAlert(decodeURI(EncodeUtf8("请输入持卡人姓名！")));
		return false;
	}
	if(userName.length>20){
		openAlert(decodeURI(EncodeUtf8("用户名不能超过  20个字符！")));
		return false;
	}
	return true;
}
//身份证户籍所在地 documentImage   documentfont
function checkDocumentAddress(){
	var documentNumber=$("#documentAddress").val().trim();
	$("#documentImage").children().remove();
	$("#documentfont").text("");
	if(documentNumber==null||documentNumber==""){
		addWrongImages("documentAddress","documentImage","documentfont","请输入身份证所在地！");
		return false;
	}
	addRightImages("documentImage");
	return true;
	
}
function ajaxDnaFill(){
	 var params=$('#dnaForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值
	 notRepeat('dnaSubmit','over',decodeURI(EncodeUtf8('充值中')));
	 $("#dnareturnfont").css('display','none');
	 for(b in $.browser) if(b=='msie'){params=params+"&msie=1";}
	    $.ajax({
	         url:'/rchlw/user/tuserinfoAction!dnaCharge',  //后台处理程序
	         type:'post',    //数据发送方式
	         dataType:'json',   //接受数据格式
	         data:params,   //要传递的数据;就是上面序列化的值
	         success:dna_Result, //回传函数(这里是函数名) 
			 error:function(){
				repeat('dnaSubmit',decodeURI(EncodeUtf8('下一步')));
			 }
	     });
}
function dna_Result(json){
	if(json.flag){
		var error_code = json.jsonValue.error_code;
		if(error_code=="0000" || error_code=="00A3"){
			$("#div1").css("display","none");
			$("#div4").css("display","");

			//$("#lastmobile").html($("#ttel").val());
			ymPrompt.succeedInfo({title:decodeURI(EncodeUtf8("温馨提示")),message:decodeURI(EncodeUtf8('银行卡订单提交已成功！请等待中国银行02096585的来电，并按语音电话提示输入银行卡密码进行支付。')),width:396,height:217});
		}else if(error_code=="500" ){
			$("#dnareturnfont").css('display','');
			repeat('dnaSubmit',decodeURI(EncodeUtf8('下一步')));
			openAlert(decodeURI(EncodeUtf8("银联手机支付出现问题，请您联系客服！")));
		}else if(error_code=="T437" || error_code=="T438"){
			//$("#displayAll").css('display','block');//显示用户详细信息
			$("#hiddenName").val("grayList");
			$("#dnareturnfont").css('display','');
			repeat('dnaSubmit',decodeURI(EncodeUtf8('下一步')));
			openAlert(decodeURI(EncodeUtf8("您首次使用银联手机支付，请补全信息！")));
		}else{
			$("#dnareturnfont").css('display','');
			repeat('dnaSubmit',decodeURI(EncodeUtf8('下一步')));
			openAlert(json.jsonValue.remark);
		}
	}else{
		$("#dnareturnfont").css('display','');
		repeat('dnaSubmit',decodeURI(EncodeUtf8('下一步')));	
		openAlert(json.message);
	}
	
}
// dna充值结束


// 博雅彩点卡充值开始

//博雅彩点卡充值 
function chargeCardNoCheck2(){
	var cardNo = document.getElementById("cardNoRyc").value;
	var cardNoPattern = /^[0-9]{16}$/;
	var cno = document.getElementById("rycMessage");
	if (cardNo == null || cardNo == "") {
		cno.innerHTML = decodeURI(EncodeUtf8("请您输入博雅彩充值卡卡号"));
		return false;
	}
	if (!cardNoPattern.test(cardNo)) {
		cno.innerHTML = decodeURI(EncodeUtf8("卡号必须是 16位的数字字符串"));
		return false;
	}
	cno.innerHTML = "";
	return true;
}
//充值时点卡密码验证
function chargePassCheck2(){
	var cardPass = document.getElementById("cardPasswordRyc").value;
	var cardPassPattern = /^[0-9]{6}$/;
	var cpass = document.getElementById("rycMessage");
	if (cardPass == null || cardPass == "") {
		cpass.innerHTML = decodeURI(EncodeUtf8("充值密码必须填写"));
		return false;
	}
	if (!cardPassPattern.test(cardPass)) {
		cpass.innerHTML = decodeURI(EncodeUtf8("密码必须是  6位的数字字符串"));
		return false;
	}
	cpass.innerHTML = "";
	return true;
}
function ajaxRycPointFill(){
	if(!chargeCardNoCheck2()){return;}
	if(!chargePassCheck2()){return;}
    var params=$('#ruyicaiForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值
    $.ajax({
         url:'/rchlw/ajax/ajaxCharge!rycPointCharge',  //后台处理程序
         type:'post',    //数据发送方式
         dataType:'json',   //接受数据格式
         data:params,   //要传递的数据;就是上面序列化的值
         success:rycPoint_Result //回传函数(这里是函数名) 
     });
}
function rycPoint_Result(json){ //回传函数实体，参数为XMLhttpRequest.responseText
 if(json.flag){
	 if(json.jsonValue.error_code=="000000"){
		 $("#rycMessage").html(decodeURI(EncodeUtf8("充值成功，请稍后查询余额！")));
	 }else if(json.jsonValue.error_code=="000012"){
		 $("#rycMessage").html(decodeURI(EncodeUtf8("对不起，您的充值卡无效！")));
	 }
 }else{
	 $("#rycMessage").html(json.message);
 }
}
// 博雅彩点卡充值结束



function fun(){
	   var city=new Array();
	   city[decodeURI(EncodeUtf8('选择开户账号的省份--'))]=[decodeURI(EncodeUtf8('选择开户账号的城市--'))];
	   city[decodeURI(EncodeUtf8('北京市'))]=[decodeURI(EncodeUtf8('东城区')),decodeURI(EncodeUtf8('丰台区')),decodeURI(EncodeUtf8('大兴区')),decodeURI(EncodeUtf8('宣武区')),decodeURI(EncodeUtf8('崇文区')),decodeURI(EncodeUtf8('平谷区')),decodeURI(EncodeUtf8('怀柔区')),decodeURI(EncodeUtf8('房山区')),decodeURI(EncodeUtf8('昌平区')),decodeURI(EncodeUtf8('朝阳区')),decodeURI(EncodeUtf8('海淀区')),decodeURI(EncodeUtf8('石景山区')),decodeURI(EncodeUtf8('西城区')),decodeURI(EncodeUtf8('通州区')),decodeURI(EncodeUtf8('门头沟区')),decodeURI(EncodeUtf8('顺义区'))];
	   city[decodeURI(EncodeUtf8('上海市'))]=[decodeURI(EncodeUtf8('南汇区')),decodeURI(EncodeUtf8('卢湾区')),decodeURI(EncodeUtf8('嘉定区')),decodeURI(EncodeUtf8('奉贤区')),decodeURI(EncodeUtf8('宝山区')),decodeURI(EncodeUtf8('徐汇区')),decodeURI(EncodeUtf8('普陀区')),decodeURI(EncodeUtf8('杨浦区')),decodeURI(EncodeUtf8('松江区')),decodeURI(EncodeUtf8('浦东新区')),decodeURI(EncodeUtf8('虹口区')),decodeURI(EncodeUtf8('金山区')),decodeURI(EncodeUtf8('长宁区')),decodeURI(EncodeUtf8('闵行区')),decodeURI(EncodeUtf8('闸北区')),decodeURI(EncodeUtf8('青浦区')),decodeURI(EncodeUtf8('静安区')),decodeURI(EncodeUtf8('黄浦区'))];
	   city[decodeURI(EncodeUtf8('重庆市'))]=[decodeURI(EncodeUtf8('万州区')),decodeURI(EncodeUtf8('万盛区')),decodeURI(EncodeUtf8('九龙坡区')),decodeURI(EncodeUtf8('北碚区')),decodeURI(EncodeUtf8('南岸区')),decodeURI(EncodeUtf8('南川区')),decodeURI(EncodeUtf8('双桥区')),decodeURI(EncodeUtf8('合川区')),decodeURI(EncodeUtf8('大渡口区')),decodeURI(EncodeUtf8('巴南区')),decodeURI(EncodeUtf8('永川区')),decodeURI(EncodeUtf8('江北区')),decodeURI(EncodeUtf8('江津区')),decodeURI(EncodeUtf8('沙坪坝区')),decodeURI(EncodeUtf8('涪陵区')),decodeURI(EncodeUtf8('渝中区')),decodeURI(EncodeUtf8('渝北区')),decodeURI(EncodeUtf8('长寿区')),decodeURI(EncodeUtf8('黔江区'))];
	   city[decodeURI(EncodeUtf8('天津市'))]=[decodeURI(EncodeUtf8('东丽区')),decodeURI(EncodeUtf8('北城区')),decodeURI(EncodeUtf8('南开区')),decodeURI(EncodeUtf8('和平区')),decodeURI(EncodeUtf8('塘沽区')),decodeURI(EncodeUtf8('大港区')),decodeURI(EncodeUtf8('宝坻区')),decodeURI(EncodeUtf8('武清区')),decodeURI(EncodeUtf8('汉沽区')),decodeURI(EncodeUtf8('河东区')),decodeURI(EncodeUtf8('河北区')),decodeURI(EncodeUtf8('河西区')),decodeURI(EncodeUtf8('津南区')),decodeURI(EncodeUtf8('虹桥区')),decodeURI(EncodeUtf8('西青区'))];
	   city[decodeURI(EncodeUtf8('黑龙江省'))]=[decodeURI(EncodeUtf8('七台河市')),decodeURI(EncodeUtf8('伊春市')),decodeURI(EncodeUtf8('佳木斯市')),decodeURI(EncodeUtf8('双鸭山市')),decodeURI(EncodeUtf8('哈尔滨市')),decodeURI(EncodeUtf8('大兴安岭地区')),decodeURI(EncodeUtf8('大庆市')),decodeURI(EncodeUtf8('牡丹江市')),decodeURI(EncodeUtf8('绥化市')),decodeURI(EncodeUtf8('鸡西市')),decodeURI(EncodeUtf8('鹤岗市')),decodeURI(EncodeUtf8('黑河市')),decodeURI(EncodeUtf8('齐齐哈尔市'))];
	   city[decodeURI(EncodeUtf8('云南省'))]=[decodeURI(EncodeUtf8('临沧市')),decodeURI(EncodeUtf8('丽江市')),decodeURI(EncodeUtf8('保山市')),decodeURI(EncodeUtf8('大理白族自治州')),decodeURI(EncodeUtf8('德宏傣族景颇族自治州')),decodeURI(EncodeUtf8('怒江傈僳族自治州')),decodeURI(EncodeUtf8('文山壮族苗族自治州')),decodeURI(EncodeUtf8('昆明市')),decodeURI(EncodeUtf8('昭通市')),decodeURI(EncodeUtf8('普洱市')),decodeURI(EncodeUtf8('曲靖市')),decodeURI(EncodeUtf8('楚雄傣族自治州')),'',decodeURI(EncodeUtf8('玉溪市')),decodeURI(EncodeUtf8('红河哈尼族傣族自治州')),decodeURI(EncodeUtf8('西双版纳傣族自治州')),decodeURI(EncodeUtf8('迪庆藏族自治州'))];
	   city[decodeURI(EncodeUtf8('吉林省'))]=[decodeURI(EncodeUtf8('吉林市')),decodeURI(EncodeUtf8('四平市')),decodeURI(EncodeUtf8('延边朝鲜族自治州')),decodeURI(EncodeUtf8('松原市')),decodeURI(EncodeUtf8('白城市')),decodeURI(EncodeUtf8('白山市')),decodeURI(EncodeUtf8('辽源市')),decodeURI(EncodeUtf8('通化市')),decodeURI(EncodeUtf8('长春市'))];
	   city[decodeURI(EncodeUtf8('安徽省'))]=[decodeURI(EncodeUtf8('毫州市')),decodeURI(EncodeUtf8('六安市')),decodeURI(EncodeUtf8('合肥市')),decodeURI(EncodeUtf8('安庆市')),decodeURI(EncodeUtf8('宣城市')),decodeURI(EncodeUtf8('宿州市')),decodeURI(EncodeUtf8('巢湖市')),decodeURI(EncodeUtf8('池州市')),decodeURI(EncodeUtf8('淮北市')),decodeURI(EncodeUtf8('淮南市')),decodeURI(EncodeUtf8('滁州市')),decodeURI(EncodeUtf8('芜湖市')),decodeURI(EncodeUtf8('蚌埠市')),decodeURI(EncodeUtf8('铜陵市')),decodeURI(EncodeUtf8('阜阳市')),decodeURI(EncodeUtf8('马鞍山市')),decodeURI(EncodeUtf8('黄山市'))];
	   city[decodeURI(EncodeUtf8('山东省'))]=[decodeURI(EncodeUtf8('东营市')),decodeURI(EncodeUtf8('临沂市')),decodeURI(EncodeUtf8('威海市')),decodeURI(EncodeUtf8('德州市')),decodeURI(EncodeUtf8('日照市')),decodeURI(EncodeUtf8('枣庄市')),decodeURI(EncodeUtf8('泰安市')),decodeURI(EncodeUtf8('济南市')),decodeURI(EncodeUtf8('济宁市')),decodeURI(EncodeUtf8('淄博市')),decodeURI(EncodeUtf8('滨州市')),decodeURI(EncodeUtf8('潍坊市')),decodeURI(EncodeUtf8('烟台市')),decodeURI(EncodeUtf8('聊城市')),decodeURI(EncodeUtf8('莱芜市')),decodeURI(EncodeUtf8('菏泽市')),decodeURI(EncodeUtf8('青岛市'))];
	   city[decodeURI(EncodeUtf8('山西省'))]=[decodeURI(EncodeUtf8('临汾市')),decodeURI(EncodeUtf8('吕梁市')),decodeURI(EncodeUtf8('大同市')),decodeURI(EncodeUtf8('太原市')),decodeURI(EncodeUtf8('忻州市')),decodeURI(EncodeUtf8('晋中市')),decodeURI(EncodeUtf8('晋城市')),decodeURI(EncodeUtf8('朔州市')),decodeURI(EncodeUtf8('运城市')),decodeURI(EncodeUtf8('长治市')),decodeURI(EncodeUtf8('阳泉市'))];
	   city[decodeURI(EncodeUtf8('广东省'))]=[decodeURI(EncodeUtf8('东莞市')),decodeURI(EncodeUtf8('云浮市')),decodeURI(EncodeUtf8('中山市')),decodeURI(EncodeUtf8('佛山市')),decodeURI(EncodeUtf8('广州市')),decodeURI(EncodeUtf8('惠州市')),decodeURI(EncodeUtf8('揭阳市')),decodeURI(EncodeUtf8('梅州市')),decodeURI(EncodeUtf8('汕头市')),decodeURI(EncodeUtf8('汕尾市')),decodeURI(EncodeUtf8('江门市')),decodeURI(EncodeUtf8('河源市')),decodeURI(EncodeUtf8('深圳市')),decodeURI(EncodeUtf8('清远市')),decodeURI(EncodeUtf8('湛江市')),decodeURI(EncodeUtf8('潮州市')),decodeURI(EncodeUtf8('珠海市')),decodeURI(EncodeUtf8('肇庆市')),decodeURI(EncodeUtf8('茂名市')),decodeURI(EncodeUtf8('阳江市')),decodeURI(EncodeUtf8('韶关市'))];
	   city[decodeURI(EncodeUtf8('广西壮族自治区'))]=[decodeURI(EncodeUtf8('北海市')),decodeURI(EncodeUtf8('南宁市')),decodeURI(EncodeUtf8('崇左市')),decodeURI(EncodeUtf8('来宾市')),decodeURI(EncodeUtf8('柳州市')),decodeURI(EncodeUtf8('桂林市')),decodeURI(EncodeUtf8('梧州市')),decodeURI(EncodeUtf8('河池市')),decodeURI(EncodeUtf8('玉林市')),decodeURI(EncodeUtf8('百色市')),decodeURI(EncodeUtf8('贵港市')),decodeURI(EncodeUtf8('贺州市')),decodeURI(EncodeUtf8('钦州市')),decodeURI(EncodeUtf8('防城港市'))];
	   city[decodeURI(EncodeUtf8('江苏省'))]=[decodeURI(EncodeUtf8('南京市')),decodeURI(EncodeUtf8('南通市')),decodeURI(EncodeUtf8('宿迁市')),decodeURI(EncodeUtf8('常州市')),decodeURI(EncodeUtf8('扬州市')),decodeURI(EncodeUtf8('徐州市')),decodeURI(EncodeUtf8('无锡市')),decodeURI(EncodeUtf8('泰州市')),decodeURI(EncodeUtf8('淮安市')),decodeURI(EncodeUtf8('盐城市')),decodeURI(EncodeUtf8('苏州市')),decodeURI(EncodeUtf8('连云港市')),decodeURI(EncodeUtf8('镇江市'))];
	   city[decodeURI(EncodeUtf8('江西省'))]=[decodeURI(EncodeUtf8('上饶市')),decodeURI(EncodeUtf8('九江市')),decodeURI(EncodeUtf8('南昌市')),decodeURI(EncodeUtf8('吉安市')),decodeURI(EncodeUtf8('宜春市')),decodeURI(EncodeUtf8('抚州市')),decodeURI(EncodeUtf8('新余市')),decodeURI(EncodeUtf8('景德镇市')),decodeURI(EncodeUtf8('萍乡市')),decodeURI(EncodeUtf8('赣州市')),decodeURI(EncodeUtf8('鹰潭市'))];
	   city[decodeURI(EncodeUtf8('河北省'))]=[decodeURI(EncodeUtf8('保定市')),decodeURI(EncodeUtf8('廊坊市')),decodeURI(EncodeUtf8('唐山市')),decodeURI(EncodeUtf8('张家口市')),decodeURI(EncodeUtf8('承德市')),decodeURI(EncodeUtf8('沧州市')),decodeURI(EncodeUtf8('石家庄市')),decodeURI(EncodeUtf8('秦皇岛市')),decodeURI(EncodeUtf8('衡水市')),decodeURI(EncodeUtf8('邢台市')),decodeURI(EncodeUtf8('邯郸市'))];
	   city[decodeURI(EncodeUtf8('河南省'))]=[decodeURI(EncodeUtf8('三门峡市')),decodeURI(EncodeUtf8('信阳市')),decodeURI(EncodeUtf8('南阳市')),decodeURI(EncodeUtf8('周口市')),decodeURI(EncodeUtf8('商丘市')),decodeURI(EncodeUtf8('安阳市')),decodeURI(EncodeUtf8('平顶山市')),decodeURI(EncodeUtf8('开封市')),decodeURI(EncodeUtf8('新乡市')),decodeURI(EncodeUtf8('洛阳市')),decodeURI(EncodeUtf8('漯河市')),decodeURI(EncodeUtf8('濮阳市')),decodeURI(EncodeUtf8('焦作市')),decodeURI(EncodeUtf8('许昌市')),decodeURI(EncodeUtf8('郑州市')),decodeURI(EncodeUtf8('驻马店市')),decodeURI(EncodeUtf8('鹤壁市'))];
	   city[decodeURI(EncodeUtf8('浙江省'))]=[decodeURI(EncodeUtf8('丽水市')),decodeURI(EncodeUtf8('台州市')),decodeURI(EncodeUtf8('嘉兴市')),decodeURI(EncodeUtf8('宁波市')),decodeURI(EncodeUtf8('杭州市')),decodeURI(EncodeUtf8('温州市')),decodeURI(EncodeUtf8('湖州市')),decodeURI(EncodeUtf8('绍兴市')),decodeURI(EncodeUtf8('舟山市')),decodeURI(EncodeUtf8('衢州市')),decodeURI(EncodeUtf8('金华市'))];
	   city[decodeURI(EncodeUtf8('海南省'))]=[decodeURI(EncodeUtf8('三亚市')),decodeURI(EncodeUtf8('海口市')),decodeURI(EncodeUtf8('省直辖及县级行政单位'))];
	   city[decodeURI(EncodeUtf8('湖北省'))]=[decodeURI(EncodeUtf8('武汉市')),decodeURI(EncodeUtf8('黄石市')),decodeURI(EncodeUtf8('十堰市')),decodeURI(EncodeUtf8('宜昌市')),decodeURI(EncodeUtf8('襄樊市')),decodeURI(EncodeUtf8('鄂州市')),decodeURI(EncodeUtf8('荆门市')),decodeURI(EncodeUtf8('黄冈市')),decodeURI(EncodeUtf8('咸宁市')),decodeURI(EncodeUtf8('随州市')),decodeURI(EncodeUtf8('恩施土家族苗族自治州')),decodeURI(EncodeUtf8('省直辖行政单位')),decodeURI(EncodeUtf8('孝感市')),decodeURI(EncodeUtf8('荆州市'))];
	   city[decodeURI(EncodeUtf8('湖南省'))]=[decodeURI(EncodeUtf8('长沙市')),decodeURI(EncodeUtf8('株洲市')),decodeURI(EncodeUtf8('湘潭市')),decodeURI(EncodeUtf8('衡阳市')),decodeURI(EncodeUtf8('邵阳市')),decodeURI(EncodeUtf8('岳阳市')),decodeURI(EncodeUtf8('常德市')),decodeURI(EncodeUtf8('张家界市')),decodeURI(EncodeUtf8('益阳市')),decodeURI(EncodeUtf8('郴州市')),decodeURI(EncodeUtf8('永州市')),decodeURI(EncodeUtf8('怀化市')),decodeURI(EncodeUtf8('娄底市')),decodeURI(EncodeUtf8('湘西土家族苗族自治州'))];
	   city[decodeURI(EncodeUtf8('甘肃省'))]=[decodeURI(EncodeUtf8('兰州市')),decodeURI(EncodeUtf8('嘉峪关市')),decodeURI(EncodeUtf8('金昌市')),decodeURI(EncodeUtf8('白银市')),decodeURI(EncodeUtf8('天水市')),decodeURI(EncodeUtf8('武威市')),decodeURI(EncodeUtf8('张掖市')),decodeURI(EncodeUtf8('平凉市')),decodeURI(EncodeUtf8('酒泉市')),decodeURI(EncodeUtf8('庆阳市')),decodeURI(EncodeUtf8('定西市')),decodeURI(EncodeUtf8('陇南市')),decodeURI(EncodeUtf8('临夏回族自治州')),decodeURI(EncodeUtf8('甘南藏族自治州')),'','','',''];
	   city[decodeURI(EncodeUtf8('福建省'))]=[decodeURI(EncodeUtf8('福州市')),decodeURI(EncodeUtf8('厦门市')),decodeURI(EncodeUtf8('莆田市')),decodeURI(EncodeUtf8('三明市')),decodeURI(EncodeUtf8('泉州市')),decodeURI(EncodeUtf8('漳州市')),decodeURI(EncodeUtf8('南平市')),decodeURI(EncodeUtf8('龙岩市')),decodeURI(EncodeUtf8('宁德市'))];
	   city[decodeURI(EncodeUtf8('四川省'))]=[decodeURI(EncodeUtf8('成都市')),decodeURI(EncodeUtf8('自贡市')),decodeURI(EncodeUtf8('攀枝花市')),decodeURI(EncodeUtf8('泸州市')),decodeURI(EncodeUtf8('德阳市')),decodeURI(EncodeUtf8('绵阳市')),decodeURI(EncodeUtf8('广元市')),decodeURI(EncodeUtf8('遂宁市')),decodeURI(EncodeUtf8('内江市')),decodeURI(EncodeUtf8('乐山市')),decodeURI(EncodeUtf8('南充市')),decodeURI(EncodeUtf8('眉山市')),decodeURI(EncodeUtf8('宜宾市')),decodeURI(EncodeUtf8('广安市')),decodeURI(EncodeUtf8('达州市')),decodeURI(EncodeUtf8('雅安市')),decodeURI(EncodeUtf8('巴中市')),decodeURI(EncodeUtf8('资阳市')),decodeURI(EncodeUtf8('阿坝藏族羌族自治州')),decodeURI(EncodeUtf8('连山傣族自治州')),decodeURI(EncodeUtf8('甘孜藏族自治州'))];
	   city[decodeURI(EncodeUtf8('贵州省'))]=[decodeURI(EncodeUtf8('贵阳市')),decodeURI(EncodeUtf8('六盘水市')),decodeURI(EncodeUtf8('遵义市')),decodeURI(EncodeUtf8('安顺市')),decodeURI(EncodeUtf8('铜仁地区')),decodeURI(EncodeUtf8('黔西南布依族苗族自治州')),decodeURI(EncodeUtf8('毕节地区')),decodeURI(EncodeUtf8('黔东南苗族侗族自治州')),decodeURI(EncodeUtf8('黔南布依族苗族自治州'))];
	   city[decodeURI(EncodeUtf8('辽宁省'))]=[decodeURI(EncodeUtf8('沈阳市')),decodeURI(EncodeUtf8('大连市')),decodeURI(EncodeUtf8('鞍山市')),decodeURI(EncodeUtf8('抚顺市')),decodeURI(EncodeUtf8('本溪市')),decodeURI(EncodeUtf8('丹东市')),decodeURI(EncodeUtf8('锦州市')),decodeURI(EncodeUtf8('营口市')),decodeURI(EncodeUtf8('阜新市')),decodeURI(EncodeUtf8('辽阳市')),decodeURI(EncodeUtf8('盘锦市')),decodeURI(EncodeUtf8('铁岭市')),decodeURI(EncodeUtf8('朝阳市')),decodeURI(EncodeUtf8('葫芦岛市'))];
	   city[decodeURI(EncodeUtf8('陕西省'))]=[decodeURI(EncodeUtf8('西安市')),decodeURI(EncodeUtf8('铜川市')),decodeURI(EncodeUtf8('宝鸡市')),decodeURI(EncodeUtf8('咸阳市')),decodeURI(EncodeUtf8('渭南市')),decodeURI(EncodeUtf8('延安市')),decodeURI(EncodeUtf8('汉中市')),decodeURI(EncodeUtf8('榆林市')),decodeURI(EncodeUtf8('安康市')),decodeURI(EncodeUtf8('商洛市'))];
	   city[decodeURI(EncodeUtf8('青海省'))]=[decodeURI(EncodeUtf8('西宁市')),decodeURI(EncodeUtf8('海东地区')),decodeURI(EncodeUtf8('海北藏族自治州')),decodeURI(EncodeUtf8('黄南藏族自治州')),decodeURI(EncodeUtf8('海南藏族自治州')),decodeURI(EncodeUtf8('果洛藏族自治州')),decodeURI(EncodeUtf8('玉树藏族自治州')),decodeURI(EncodeUtf8('海西蒙古族藏族自治州'))];
	   city[decodeURI(EncodeUtf8('宁夏回族自治区'))]=[decodeURI(EncodeUtf8('银川市')),decodeURI(EncodeUtf8('石嘴山市')),decodeURI(EncodeUtf8('吴忠市')),decodeURI(EncodeUtf8('固原市')),decodeURI(EncodeUtf8('中卫市'))];
	   city[decodeURI(EncodeUtf8('西藏自治区'))]=[decodeURI(EncodeUtf8('拉萨市')),decodeURI(EncodeUtf8('昌都地区')),decodeURI(EncodeUtf8('山南地区')),decodeURI(EncodeUtf8('日喀则地区')),decodeURI(EncodeUtf8('那曲地区')),decodeURI(EncodeUtf8('阿里地区')),decodeURI(EncodeUtf8('林芝地区'))];
	   city[decodeURI(EncodeUtf8('新疆维吾尔自治区'))]=[decodeURI(EncodeUtf8('乌鲁木齐市')),decodeURI(EncodeUtf8('克拉玛依市')),decodeURI(EncodeUtf8('吐鲁番地区')),decodeURI(EncodeUtf8('哈密地区')),decodeURI(EncodeUtf8('昌吉回族自治州')),decodeURI(EncodeUtf8('博尔塔拉蒙古自治州')),decodeURI(EncodeUtf8('巴音郭楞蒙古自治州')),decodeURI(EncodeUtf8('阿克苏地区')),decodeURI(EncodeUtf8('克孜勒苏柯尔克孜自治州')),decodeURI(EncodeUtf8('喀什地区')),decodeURI(EncodeUtf8('和田地区')),decodeURI(EncodeUtf8('伊犁哈萨克自治州')),decodeURI(EncodeUtf8('塔城地区')),decodeURI(EncodeUtf8('阿勒泰地区')),decodeURI(EncodeUtf8('省直辖行政单位'))];
	   city[decodeURI(EncodeUtf8('内蒙古自治区'))]=[decodeURI(EncodeUtf8('呼和浩特市')),decodeURI(EncodeUtf8('包头市')),decodeURI(EncodeUtf8('乌海市')),decodeURI(EncodeUtf8('赤峰市')),decodeURI(EncodeUtf8('通辽市')),decodeURI(EncodeUtf8('鄂尔多斯市')),decodeURI(EncodeUtf8('呼伦贝尔市')),decodeURI(EncodeUtf8('巴彦淖尔市')),decodeURI(EncodeUtf8('乌兰察布市')),decodeURI(EncodeUtf8('兴安盟')),decodeURI(EncodeUtf8('锡林郭勒盟')),decodeURI(EncodeUtf8('阿拉善盟'))];
	   city[decodeURI(EncodeUtf8('香港特别行政区'))]=[decodeURI(EncodeUtf8('香港特别行政区'))];
	   city[decodeURI(EncodeUtf8('澳门特别行政区'))]=[decodeURI(EncodeUtf8('澳门特别行政区'))];
	   city[decodeURI(EncodeUtf8('台湾省'))]=[decodeURI(EncodeUtf8('台湾省'))];  
	 //  var sheng=document.getElementById("shengFeng").value;
	   var shengBank=document.getElementById("shengFengBank").value;
	   var op1;
	   var op2;
	   //document.getElementById("city").options.length=0;
	   document.getElementById("cityBank").options.length=0;
	   /**for(var i in city[sheng]){
	      op1=new Option(city[sheng][i],city[sheng][i]);
		  document.getElementById("city").options.add(op1);
	    }*/
	   for(var i in city[shengBank]){
		   op2=new Option(city[shengBank][i],city[shengBank][i]);
		  document.getElementById("cityBank").options.add(op2);
	    }
	   
} 


//查询余额
var countdiaoyong = 0;
function findBalance(){
	//if($('#deposit_amount_user').length>0&&$('#valid_amount_user').length>0&&$('#freeze_amout_user').length>0)
	if($('#deposit_amount_user').length>0&&$('#freeze_amout_user').length>0)
	{
		$.ajax({   
				url:'/rchlw/user/tuserinfoAction!ajaxFindAccount',  
				type:'post', //数据发送方式   
				dataType:'json',
				success: function(msg){
					$('#deposit_amount_user').html((msg.deposit_amount).toFixed(2)+"");
					//$('#valid_amount_user').html(msg.valid_amount+"");
					$('#freeze_amout_user').html((msg.freeze_amout).toFixed(2)+"");
				}
		}); 	 
	}
}

//基本资料页面头部显示的完整度的函数

function topShow() {
	var address = $("#address").val();
	var qq = $("#qq").val();
	var countB = 50;
	var countT = 5;
	var tiao = '';
	if (address.length > 0) {
		countB = countB + 25;
		countT = countT + 2;

	}
	if (qq.length > 0) {
		countB = countB + 25;
		countT = countT + 3;
	}
	for ( var i = 0; i < countT; i++) {
			tiao = tiao + '<li>&nbsp;</li>';
	}
	$("#tip").text(countB + "%");
	$("#percentage").html(tiao);
}

// 安全资料页面头部显示的完整度的函数
 
 function upd_data(){
	 var num = new RegExp('[0-9]');
	 var pinyin = new RegExp('[A-Za-z]');
	 var teshu = new RegExp('[_]');
	 var word =$("#word").val();
	 if(word!=null || !word==""){
	 	if(num.test(word)||pinyin.test(word)){
		 $("#tips_data").text(decodeURI(EncodeUtf8("弱")));
		 $("#line").html('<li>&nbsp;</li>'+
					'<li>&nbsp;');
		 	if(num.test(word)&&pinyin.test(word)){
		 		$("#tips_data").text(decodeURI(EncodeUtf8("中")));
		 		$("#line").html('<li>&nbsp;</li>'+
					'<li >&nbsp;'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>');
		 			if(teshu.test(word)){
		 				$("#tips_data").text(decodeURI(EncodeUtf8("强")));
		 				$("#line").html('<li>&nbsp;</li>'+
					'<li>&nbsp;'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>">&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>'+
					'<li>&nbsp;</li>');
			 			}
			 	}
		 }
	 } 
}

//修改密码页面新密码后显示强弱的函数
 
 function upd(){
	 var num = new RegExp('[0-9]');
	 var pinyin = new RegExp('[A-Za-z]');
	 var teshu = new RegExp('[_]');
	 var pwd =$("#new_pass").val();
	 
	 if(pwd!=null || !pwd.equals("")){
	 	if(num.test(pwd)||pinyin.test(pwd)){
		 $("#tips").text(decodeURI(EncodeUtf8("弱")));
		 	if(num.test(pwd)&&pinyin.test(pwd)){
		 		$("#tips").text(decodeURI(EncodeUtf8("中")));
		 			if(teshu.test(pwd)){
		 				$("#tips").text(decodeURI(EncodeUtf8("强")));
			 			}
			 	}
		 }else{
			 $("#tips").text("");
			 }
	 } 
 }


//-------------------- script.js 结束---------------------
function Length(str) {  
    var len = 0;  
    for (var i=0; i<str.length; i++) {
        if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {  
            len += 2;  
        } else {  
            len ++;  
        }  
    }  
    return len;  
}
//新版安全资料   begin
var nickflag=1;
	function checknickname(){
		var nickname = $("#nickname").val();
		var patt=/^(([a-zA-Z0-9]|[0-9]|[\u4e00-\u9fa5]){2,16})+$/;
		if(nickname!=Trim(nickname)){
			addWrongImages('nickname','nicknameImage','nicknameTip','空格不可做为昵称输入！');
			nickflag = 0;
			return false;
		}
		if(Length(nickname)<4 || Length(nickname)>16){
			addWrongImages('nickname','nicknameImage','nicknameTip','昵称长度至少为4个，最多16个字符！');
			nickflag = 0;
			return false;
		}
		if(patt.test(nickname)!=true){
			addWrongImages('nickname','nicknameImage','nicknameTip','昵称为4-16个字符，且仅支持数字、英文、汉字组合！');
			nickflag = 0;
			return false;
		}
	
			var params = "nickname="+nickname+"&isIe=中文";
			for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
			$.ajax({
				url:'/rchlw/function/tuserinfoAction!queryNickName',
				type:"POST",
				data:params,
				dataType:'json',
				async: false,
				error:function(){openAlert("网络出现异常");
						addWrongImages('nickname','nicknameImage','nicknameTip','网络出现异常');
						nickflag = 0;
						return false;},
				success:function(json){
					if(json =="1"){
						addWrongImages('nickname','nicknameImage','nicknameTip','昵称已存在，请换个昵称！');
						nickflag = 0;
						return false;
						
					}else if(json=='0'){
						var para = "username="+nickname+"&isIe=中文";
						for(b in $.browser) if(b=='msie'){para=para+"&msie=1";};
						$.ajax({
							url:'/rchlw/function/tuserinfoAction!changeUserName',
							type:"POST",
							data:para,
							async:false,
							dataType:'json',
							error: function(data){
									openAlert("网络出现异常");
									addWrongImages('nickname','nicknameImage','nicknameTip','网络出现异常');
									nickflag = 0;
									return false;},
							success:function(data){
								if(data=='0'){  //用户不存在
									addRightImages("nicknameImage","nicknameTip");
									nickflag = 1;
									return true;
								}else if(data =='1'){   //用户存在
									addWrongImages('nickname','nicknameImage','nicknameTip','用户名已存在，请更新用户名！');
									nickflag = 0;
									return false;
								}else{
									addWrongImages('nickname','nicknameImage','nicknameTip',data);
									nickflag = 0;
									return false;
								}
							}		
						});
						
					}
				}
			});
	}
	//验证真实姓名
	var realflag=1;
	function checkusername(){
	    var nameReal = $("#name").val();
		//var  reg= "`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？  ";//空格也在内
		var patt =/^([\u4e00-\u9fa5]+)[·]?[\u4e00-\u9fa5]+$/;		
		if(!patt.test(nameReal)){
			addWrongImages('name','nameImage','nameTip','真实姓名只可填写汉字！');
			realflag = 0;
			return false;
		}

		if(nameReal!=null && nameReal!=""){
			if(Length(nameReal)>30){
				addWrongImages('name','nameImage','nameTip','用户名长度不能超过30个字符。');
				realflag = 0;
				return false;
			}
			if(Length(nameReal)<4){
				addWrongImages('name','nameImage','nameTip','用户名长度不能低于4字符。');
				realflag = 0;
				return false;
			}
		}

		addRightImages("nameImage","nameTip");
		realflag = 1;
		return true;
	}
	
	// 验证身份证号码
	var certid = 1;
	function checkcardId(){
		var cardid = $("#cardid").val();
		if(cardid.trim()=="" ){
			addWrongImages('cardid','cardidImage','cardidTip','身份证号不可输入空格。');
			return false;
		}
		var userNoPattern1 = /^[0-9]{15}$/;
		var userNoPattern2 = /^[0-9]{17}[0-9]{1}|x{1}|X{1}$/;
		var isOk1 = userNoPattern1.test(cardid);
		var isOk2 = userNoPattern2.test(cardid);
		if(!isOk1 && !isOk2){
			addWrongImages('cardid','cardidImage','cardidTip','身份证号格式错误！');
			certid = 0;
			return false;
		}
		
		var revalue = checkID(cardid);
		if(revalue==""){
			addRightImages("cardidImage","cardidTip");
			certid = 1;
			return true;
		}else{
			addWrongImages('cardid','cardidImage','cardidTip',revalue);
			certid = 0;
			return false;
		}
	}
	
	//--身份证号码验证-支持新的带x身份证

	function checkID(id){
		var idNum = id;
		var errors=new Array(
		"验证通过",
		"身份证号码位数不对",
		"身份证含有非法字符",
		"身份证号码校验错误",
		"身份证地区非法");
		//身份号码位数及格式检验
		var re;
		var len = idNum.length;
		//身份证位数检验
		if(len != 15 && len != 18){
			return errors[1];
		}else if(len == 15){
			re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
		}else{
			re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/);
		}
		var area={11:"北京",12:"天津",13:"河北",14:"山西",
		15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",
		32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",
		37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",
		45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",
		53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",
		64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",
		91:"国外"};
		var idcard_array = new Array();
		idcard_array = idNum.split("");
		//idcard_array = area.split("");
		//地区检验
		if(area[parseInt(idNum.substr(0,2))]==null) {
			return errors[4];
		}
		//出生日期正确性检验
		var a = idNum.match(re);
		if (a != null){
			if (len==15){
				var DD = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
				var flag = DD.getYear()==a[3]&&(DD.getMonth()+1)==a[4]&&DD.getDate()==a[5];
			}else if(len == 18){
				var DD = new Date(a[3]+"/"+a[4]+"/"+a[5]);
				var flag = DD.getFullYear()==a[3]&&(DD.getMonth()+1)==a[4]&&DD.getDate()==a[5];
			}
			if (!flag) {
				return "身份证出生日期不对！";
			}
			if(new Date().getYear()-DD.getYear()<18){
				return "未满18周岁！";
			}
			//检验校验位
			if(len == 18){
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2+ parseInt(idcard_array[7]) * 1+ parseInt(idcard_array[8]) * 6+ parseInt(idcard_array[9]) * 3 ;
				Y = S%11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y,1);//判断校验位
				//检测ID的校验位
				if(M == idcard_array[17]){
					return "";
				}else{
					return errors[3];
				}
			}
		}else{
			return errors[2];
		}
		return "";
	}
	
	//验证手机号
	var telflag = 1;
	function checkMobile(){
		var tel = $("#mobile").val();
		var patt=/(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;

		if(!patt.test(tel)){
			addWrongImages('mobile','mobileImage','mobileTip','不是完整的11位手机号或者正确的手机号');
			telflag = 0;
			return false;
		}
		addRightImages("mobileImage","mobileTip");
		telflag = 1;
		return true;	
	}
	
	//验证邮箱
	var emailflag = 1;
	function checkEmail(){
		var email = $("#email").val();
		 var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if(reg.test(email)){
			addRightImages("emailImage","emailTip");
			emailflag = 1;
			return true;
		}
		addWrongImages('email','emailImage','emailTip','邮箱格式错误！');
		emailflag = 0;
		return false;
	}

function saveUserInfo(){
	var nickname = $("#nickname").val().trim();
		var name = $("#name").val().trim();
		var cardid = $("#cardid").val().trim();
//		var mobile = $("#mobile").val().trim();
		var email = $("#email").val().trim();
		
//		if(nickname=="" && name=="" && cardid=="" && mobile=="" && email==""){
		if(nickname=="" && name=="" && cardid==""&& email==""){
			openAlert("请填写资料信息！");
			return ;
		}else{
			var params ="isIe=中文";
			for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
			params =params+"&nickname="+nickname+"&name="+name+"&cardid="+cardid+"&email="+email+"&flag=userinfo";
//			params =params+"&nickname="+nickname+"&name="+name+"&cardid="+cardid+"&tel="+mobile+"&email="+email+"&flag=userinfo";
			if(nickflag==1 && realflag==1 && certid==1&& emailflag==1){
				$.ajax({
					url	: '/rchlw/function/tuserinfoAction!modifyUserInfo',
					type:"POST",
					data:params,
					dataType:'text',
					async: false, 
					error: function(){openAlert("网络异常，修改用户信息失败！");},
					success:function(json){
						if(json=="success"){
							openAlert("保存用户信息成功");
							window.location.href='/rchlw/function/rules/user.jsp?key=33';
						}else if(json=="failed"){
							openAlert("修改用户信息失败！");
						}else{
							openAlert(json);
						}	
					}
				});
			}else{
				openAlert("请根据提示填写用户信息！");
			}
		}
	
}
//新版安全资料   end
//------------------- register.js 开始----------------

//个人信息修改

function editUserValidator(){
$.formValidator.initConfig({formid:"form2",onError:function(){alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));}});
$("#mobile_code").formValidator({
	onshow : decodeURI(EncodeUtf8("请确认正确填写，注册后不可更改！")),
	onfocus : decodeURI(EncodeUtf8("请输入你的手机号码，不可为空！")),
	oncorrect : decodeURI(EncodeUtf8("该手机号格式正确。"))
}).inputValidator({
	min : 11,
	max : 11,
	onerror : decodeURI(EncodeUtf8("手机号码必须是 11位的，请确认！"))
}).regexValidator({
	regexp : "mobile",
	datatype : "enum",
	onerror : decodeURI(EncodeUtf8("你输入的手机号码格式不正确！"))
});
//真实姓名验证
	$("#name").formValidator({
		onshow : decodeURI(EncodeUtf8("4-12位汉字、字母组合，不区分大小写！")),
		onfocus : decodeURI(EncodeUtf8("请输入你的真实姓名，不可为空！")),
		oncorrect : decodeURI(EncodeUtf8("该用户名格式正确。"))
	}).regexValidator({
		regexp : "[A-Za-z\u4e00-\u9fa5]{4,12}([·][A-Za-z\u4e00-\u9fa5]{4,12})*",
		onerror : decodeURI(EncodeUtf8("你输入的真实姓名格式不正确。"))
		
	});
$("#realPass").formValidator({
	min : 6,
	max : 15,
	onshow : decodeURI(EncodeUtf8("请输入重复密码！")),
	onfocus : decodeURI(EncodeUtf8("两次密码必须一致哦！")),
	oncorrect : decodeURI(EncodeUtf8("密码一致。"))
}).inputValidator({
	min : 6,
	max : 15,
	empty : {
		leftempty : false,
		rightempty : false,
		emptyerror : decodeURI(EncodeUtf8("重复密码两边不能有空符号！"))
	},
	onerror : decodeURI(EncodeUtf8("重复密码不能为空，请确认！"))
}).compareValidator({
	desid : "passLogin",
	operateor : "=",
	onerror : decodeURI(EncodeUtf8("2次密码不一致，请确认！"))
});
	
	$("#userID").formValidator({
				onshow : decodeURI(EncodeUtf8("领奖取现的重要凭证，请认真填写，或在以后完善信息！")),
				onfocus : decodeURI(EncodeUtf8("输入 15或 18位的身份证。")),
				oncorrect : decodeURI(EncodeUtf8("输入正确。"))
			}).functionValidator({
				fun : isCardID
			});
	$("#email").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的邮箱，可以为空！")),
		onfocus : decodeURI(EncodeUtf8("邮箱至少 6个字符，最多 100个字符。")),
		oncorrect : decodeURI(EncodeUtf8("邮箱格式输入正确。"))
			//defaultvalue : "@"
		}).inputValidator({
				min : 6,
				max : 100,
				onerror : decodeURI(EncodeUtf8("你输入的邮箱长度非法，请确认！"))
			}).regexValidator({
		regexp : "^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
		onerror : decodeURI(EncodeUtf8("你输入的邮箱格式不正确！"))
	});
	
	$("#nickName").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的昵称，可以为空。")),
		onfocus : decodeURI(EncodeUtf8("请输入你想要的昵称。")),
		oncorrect : decodeURI(EncodeUtf8("昵称输入完成。"))
			//defaultvalue : "@"
		}).inputValidator({
				min : 0,
				max : 20,
				onerror : decodeURI(EncodeUtf8("昵称不能超过 10个字符！"))
		});
	
	$("#user_address").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的地址，可以为空。")),
		onfocus : decodeURI(EncodeUtf8("请输入你的地址。")),
		oncorrect : decodeURI(EncodeUtf8("地址输入完成。"))
			//defaultvalue : "@"
		}).inputValidator({
				min : 0,
				max : 60,
				onerror : decodeURI(EncodeUtf8("地址不能超过 40个英文字符( 20个汉字)！"))
		});
	
	$("#qq").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的QQ，可以为空。")),
		onfocus : decodeURI(EncodeUtf8("请输入您的QQ。")),
		oncorrect : decodeURI(EncodeUtf8("输入正确。"))
			//defaultvalue : "@"
		}).inputValidator({
				min : 4,
				max : 10,
				onerror : decodeURI(EncodeUtf8("你输入的QQ长度非法，请确认！"))
			}).regexValidator({
		regexp : "^[1-9]*[1-9][0-9]*$",
		onerror : decodeURI(EncodeUtf8("你输入的QQ格式不正确！"))
	});
	
	$("#msn").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的MSN，可以为空。")),
		onfocus : decodeURI(EncodeUtf8("请输入您的MSN。")),
		oncorrect : decodeURI(EncodeUtf8("输入正确。"))
			//defaultvalue : "@"
		}).inputValidator({
				min : 6,
				max : 100,
				onerror : decodeURI(EncodeUtf8("你输入的MSN长度非法，请确认！"))
			}).regexValidator({
		regexp : "/^[0-9a-zA-Z]+([\.\-\_][0-9a-zA-Z]+)*@[0-9a-zA-Z]+([\.\-][0-9a-zA-Z]+)*.[a-zA-Z]$/",
		onerror : decodeURI(EncodeUtf8("你输入的MSN格式不正确！"))
	});
	$("#old_pass").formValidator( {
		onshow : decodeURI(EncodeUtf8("请输入密码。")),
		onfocus : decodeURI(EncodeUtf8("密码不能为空,密码长度 6-15位。")),
		oncorrect : decodeURI(EncodeUtf8("密码合法。"))
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : decodeURI(EncodeUtf8("密码两边不能有空符号！"))
		},
		onerror : decodeURI(EncodeUtf8("密码不合法，请确认！"))
	});

	$("#new_pass").formValidator( {
		onshow : decodeURI(EncodeUtf8("请输入密码。")),
		onfocus : decodeURI(EncodeUtf8("密码不能为空，密码长度 6-15位。")),
		oncorrect : decodeURI(EncodeUtf8("密码合法。"))
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : decodeURI(EncodeUtf8("密码两边不能有空符号！"))
		},
		onerror : decodeURI(EncodeUtf8("密码不合法，请确认！"))
	});
	$("#real_pass").formValidator( {
		min : 6,
		max : 15,
		onshow : decodeURI(EncodeUtf8("请输入重复密码。")),
		onfocus : decodeURI(EncodeUtf8("两次密码必须一致哦！")),
		oncorrect : decodeURI(EncodeUtf8("密码一致。"))
	}).inputValidator( {
		min : 6,
		max : 15,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : decodeURI(EncodeUtf8("重复密码两边不能有空符号！"))
		},
		onerror : decodeURI(EncodeUtf8("重复密码不能为空，请确认！"))
	}).compareValidator( {
		desid : "new_pass",
		operateor : "=",
		onerror : decodeURI(EncodeUtf8("2次密码不一致，请确认！"))
	});
	
}

//实名制认证验证
function realFormValidator(){
	$.formValidator.initConfig({
		formid:"realForm",
		onError:function(){
			alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));
			return false;
		}
	});
	
	//真实姓名验证
	$("#name").formValidator({
		onshow : decodeURI(EncodeUtf8("4-12位汉字、字母、数字组合，不区分大小写！")),
		onfocus : decodeURI(EncodeUtf8("请输入你的真实姓名，可为空！")),
		oncorrect : decodeURI(EncodeUtf8("该用户名格式正确。"))
	}).regexValidator({
		regexp : "^[a-z]{1}[a-z0-9_]{3,20}$",
		onerror : decodeURI(EncodeUtf8("你输入的真实姓名格式不正确。"))
		
	});
	
	//身份证验证
	$("#userID").formValidator({
		onshow : decodeURI(EncodeUtf8("领奖取现的重要凭证，请认真填写，或在以后完善信息！")),
		onfocus : decodeURI(EncodeUtf8("输入 15或 18位的身份证。")) ,
		oncorrect : decodeURI(EncodeUtf8("输入正确。"))
	}).regexValidator({
		regexp : "d{15}|d{18}",
		onerror : decodeURI(EncodeUtf8("你输入的身份证格式不正确！"))
	});
	
	//邮箱验证
	$("#email").formValidator({
		empty : true,
		onshow : decodeURI(EncodeUtf8("请输入你的邮箱，可以为空！")),
		onfocus : decodeURI(EncodeUtf8("邮箱至少 6个字符，最多 100个字符。")),
		oncorrect : decodeURI(EncodeUtf8("邮箱格式输入正确。"))
		}).inputValidator({
				min : 6,
				max : 100,
				onerror : decodeURI(EncodeUtf8("你输入的邮箱长度非法，请确认！"))
			}).regexValidator({
		regexp : "^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
		onerror : decodeURI(EncodeUtf8("你输入的邮箱格式不正确！"))
	});
}

//---------------- register.js 结束----------------

//------------------------ cashScript.js   用户提现  开始-------------------
function ajaxCash(){
	
}
// 验证金额
var check_money=0;
function checkMoney(){
	$("#mnoImage").children().remove();
	$("#mno").text("");
	var money = $("#withdrawel_money").val(); //提现金额
	var Valid_amount = $("#Valid_amount").text(); //可提现金额
	var money100 = money * 100;
	var Valid_amount100 = Valid_amount * 100;
	var moneyPattern = /^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/;
	var patt =/\d+\.\d{3}/;
	var mno = document.getElementById("mno");
	if(money==null || money == ""){
		addWrongImages("withdrawel_money","mnoImage","mno","请输入提现金额！");
		check_money=0;
		return false;
	}
	if(! moneyPattern.test(money)){
		addWrongImages("withdrawel_money","mnoImage","mno","金额必须是大于0的数字！");
		check_money=0;
		return false;
	}
	
	if(patt.test(money)){
		addWrongImages("withdrawel_money","mnoImage","mno","提现金额不可超过2位小数！");
		check_money=0;
		return false;
	}
	if(parseInt(money100)>parseInt(Valid_amount100)){
		addWrongImages("withdrawel_money","mnoImage","mno","提现金额大于可提现金额！");
		check_money=0;
		return false;
	}
	
	if(Number(Valid_amount)>10 && Number(money)<10){
		addWrongImages("withdrawel_money","mnoImage","mno","可提现金额大于10元时，每次提现最少10元！");
		check_money=0;
		return false;
	}
	
	if(Number(Valid_amount)<10 ){
		if(Number(Valid_amount)!=Number(money)){
			addWrongImages("withdrawel_money","mnoImage","mno","可提现金额小于10元时，请一次性提清！");
			check_money=0;
			return false;
		}
	}
	if(money<=0){
		addWrongImages("withdrawel_money","mnoImage","mno","提现金额必须大于0！");
		check_money=0;
		return false;
	}
	
	addRightImages("mnoImage");	
	check_money=1;
	return true;
}
    var check_bankName = 0;
	function checkBankName()//验证开户行名称
	{	$("#banknoImage").children().remove();
	$("#bankNo").text("");
		var bankName=$("#bank_name").val();
		if((bankName==null||bankName=="")&&$("#DNA").val()=="0")
		{
			addWrongImages("bank_name","banknoImage","bankNo","开户行名称必须输入！");
			check_bankName = 0;
			return false;
	    }
		addRightImages("banknoImage");
		check_bankName = 1;
		return true;
	}
	
	
	var check_Bankno = 0;
	function checkBankNO()// 验证银行账号
	{
		$("#bnoImage").children().remove();
		$("#bno").text("");
		var bankNo = document.getElementById("bank_number").value;
		var bankNoPattern=/^([0-9]{16,21})/;
		if(bankNo==null || bankNo=="")
		{
			addWrongImages("bank_number","bnoImage","bno","请您输入银行卡账号！");
			check_Bankno=0;
			return false;
		}
		//自动转换为半角，不支持标点、小数点以及英文字母等其他输入。
		 var pattern = /^-?\d+$/;
		if(isNaN($('#bank_number').val()) || $('#bank_number').val().search(pattern)!=0){
			$('#bank_number').val('');
			$('#bank_number').focus();
			check_Bankno=0;
			return false;
		}
		if(!bankNoPattern.test(bankNo)){
			addWrongImages("bank_number","bnoImage","bno","请你输入正确的银行账号！");
			check_Bankno=0;
			return false;
		}
		addRightImages("bnoImage");
		check_Bankno=1;
		return true;
	}
	
	function checkUserNo()// 验证身份证号码
	{	
		var userNo = document.getElementById("ID_number").value;
		var uno = document.getElementById("uno");
		if(userNo==null || userNo=="" )
		{
			uno.innerHTML = decodeURI(EncodeUtf8("身份证号码必须输入！"));
			uno.style.color="#FF0000";
			return false;
		}
		var userNoPattern1 = /^[0-9]{15}$/;
		var userNoPattern2 = /^[0-9]{17}[0-9]{1}|x{1}|X{1}$/;
		var isOk1 = userNoPattern1.test(userNo);
		var isOk2 = userNoPattern2.test(userNo);
		if(!isOk1 && !isOk2)
		{
			uno.innerHTML = decodeURI(EncodeUtf8("身份证号格式错误！！"));
			uno.style.color="#FF0000";
			return false;
		}
		uno.innerHTML = "";
		return true;
	}
	
	var t_realname = 0;
	function testRealName(){
	    var nameReal = $("#real_name").val().trim();
	    $("#realnameImage").children().remove();
		$("#realnamefont").text("");
		if(nameReal==null || nameReal ==""){
			 addWrongImages("real_name","realnameImage","realnamefont","此处填写安全资料中绑定的真实姓名，开卡人姓名为必填！");
			 t_realname=0;
			 return false;
		}
		var params = "username="+nameReal;
		params = params+"&isIe="+decodeURI(EncodeUtf8("中文"));
		for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
		$.ajax({
			url:'/rchlw/user/tuserinfoAction!testUserName?'+params,  //后台处理程序
			type:'post',   
			dataType:'json',
			async:false,
			success:function(data){
				if(data==true){
					addRightImages("realnameImage");
					t_realname=1;
					return true;
				}else{
					addWrongImages("real_name","realnameImage","realnamefont","开卡人姓名与安全资料中所填写的真实姓名不一致！");
					t_realname=0;
					return false;
				}
			}
		});	
	}
	
	function checkName_real(){
	    var nameReal = $("#real_name").val().trim();
		var uname = document.getElementById("realName");
		uname.innerHTML = "";
		var  reg= "`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？ 　";
		if(nameReal.length >0){
			var i=0;
			var j=1;
			for(;j<=nameReal.length;i++,j++){
				if(reg.indexOf(nameReal.substring(i,j))>-1){
					uname.innerHTML = decodeURI(EncodeUtf8("真实姓名不能包含特殊字符！"));
					uname.style.color="#FF0000";
					return false;	   
				}
			}
		}

		if(nameReal==null || nameReal==""){
			uname.innerHTML = decodeURI(EncodeUtf8("真实姓名必须输入！"));
			uname.style.color="#FF0000";
			//alert(uname);
			return false;
		}
		if(nameReal!=null && nameReal!=""){
			if(Length(nameReal)>30){
				uname.innerHTML = decodeURI(EncodeUtf8("用户名不能超过30个字符。"));
				uname.style.color="#FF0000";
				return false;
			}
		}
		var flag=0;
		var parameters ="real_name="+nameReal+"&isIe="+decodeURI(EncodeUtf8("中"));
		for(b in $.browser) if(b=='msie'){parameters=encodeURI(parameters)+"&msie=1";};
		$.ajax({
			url:'/rchlw/user/tuserinfoAction!changeRealName',
			type:'POST',
			data:parameters,//参数
			async:false,
			error:function(){openAlert(decodeURI(EncodeUtf8("真实姓名验证出现问题，请联系客服！")));},
			success:function(data){
				if(data=="false"){
					uname.innerHTML = decodeURI(EncodeUtf8("真实姓名与身份证绑定姓名不相符！"));
					uname.style.color="#FF0000";
					flag=1;
					//return false;
				}

			}
		
		});
		if(flag==1){
			return false;
		};
		
		uname.innerHTML=""; 
		return true;
	}
	

	
	//提交验证
	function checkAll(){
		var tsname = $("#tsname").text();
		var money = $("#withdrawel_money").text();
		notRepeat('tikuan_botton','tikuanzhong_botton','');
		 $.ajax({
			url:'/rchlw/user/tuserinfoAction!cash',
			type:'POST',
			error:function(){
				openAlert("提现失败！");
				repeat('tikuan_botton',"");
			},
			success:function (data){
				if(data=="cashsuccess"){
					$("#account_content1").html("<p class='tikuan_suc'><span class='chzhsuc_img'><img src='/rchlw/function/images/duigou.gif'/></span><span class='chzhsuc_zi'>"+decodeURI(EncodeUtf8("恭喜"))+"<font class='red2'>"+tsname+"</font>"+decodeURI(EncodeUtf8('，您的提款申请已提交！'))+"</span></p><p class='tikuan_tishi'> "+decodeURI(EncodeUtf8("我们会尽快将"))+"<font class='red2'>"+money+decodeURI(EncodeUtf8("元"))+"</font>"+decodeURI(EncodeUtf8("转到您指定的银行账户。"))+"<br/>"+decodeURI(EncodeUtf8("如有任何疑问，请拨打客服热线咨询："))+"<font class='red2'>400-856-1000</font>"+decodeURI(EncodeUtf8("。 "))+"</p>");
				}else if(data=="casherror"){
					openAlert("提现失败！");
					repeat('tikuan_botton',"");
				}else{
					openAlert(data);
					repeat('tikuan_botton',"");
				}
			  
		 }
	 });
		
	}
	
	//提交修改验证
	function checkAllUpdate(){
		if(!checkMoney() || !checkBankNO()||!checkName_real() || !checkBankName()){
		   return;
		}
	    var money = document.getElementById("withdrawel_money").value;
		var bankName=document.getElementById("bank_name");
		var bankNo = document.getElementById("bank_number").value;
		var nameReal = document.getElementById("real_name");
		if(money!=""&&bankName!=""&&bankNo!=""&&nameReal!=""){
			 $.ajax({
				url:'/rchlw/user/tuserinfoAction!doUpdateCashDetail?cashBean.withdrawel_money='+money+'&cashBean.ID_number='+bankNo+'&cashBean.real_name='+encodeURI(encodeURI(nameReal.value))+'&cashBean.bank_name='+encodeURI(encodeURI(bankName.value)),
				type:'POST',
				success:function (data){
				 if(data.indexOf("{success}")==-1){
					 openAlert(decodeURI(EncodeUtf8(data)));
				 }else{
					$("#right_text").html(data.replace("{success}", ""));
				 }
			 }

		 });
		}
		
	}
	
	function cashCert(){
		var params = $('#form2').serialize();
		$.ajax({
				type:'post',
				url:'/rchlw/user/tuserinfoAction!cashCert',
				data:params,//参数
				success:function (data){
					if(data=='请您登录'){
						openAlert(data);
						window.location.href='/login.html';
					}else if(data=='cash'){
						window.location.href='/rchlw/function/rules/user.jsp?key=11';
					}else if(data!='cash'){
						openAlert(data);
					}
				}
			});
	
	}
	//撤销提现 
	function cancelCash(id){
		var params ="orderid="+ $('#'+id).val();
		$.ajax({
				type:'post',
				url:'/rchlw/user/tuserinfoAction!cancelCash',
				data:params,//参数
				success:function (data){
					if(data=='erroe'){
						openAlert("撤销提现失败！");
					}else if(data=='succes'){
						openAlert("撤销提现成功 ！");
					}
					reHtml(12,'');
				}
			});
	
	}


	//------------------- cashScript.js 结束-----------
	
	
	
	 //修改邮箱绑定时的js
	 
	 function updateOldEmail(){
		 var oldEmail = $("#old_email").val();
		 var rightEmail = $("#rightemail").val();
		 if(oldEmail!=rightEmail){
			 $("#sipw").text(decodeURL(EncodeUtf8("对不起，您输入的电子邮箱有误，请您输入正确的邮箱地址！")));
			 $("#old_email").onfocus();
		 }
		 
	 }
	 
		//开奖详情页面点击期号查询信息
	 function getdrawalotteryInfo (divID){
		var lotno=$("#"+divID+"lotno").val();
		var batchcode = $("#"+divID+"select").val();
		window.location.href='./kaijianggonggao.html?key=53&lotno='+lotno+"&batchcode="+batchcode;

	 }
	 
	 
	//开奖公告页面单击期号查开奖信息
	 function getOnedrawalottery (divID){
		var lotno=$("#"+divID+"lotno").val();
		var batchcode = $("#"+divID+"select").val();
		
		$.ajax({
			type:'POST',
			url:'/rchlw/function/selectAll!getOnelottery?lotno='+lotno+"&batchcode="+batchcode,
			dataType:'json',
			error:function(){$("#"+divID+"time").html("  ");$("#"+divID+"haoma").html(decodeURI(EncodeUtf8("等待开奖")));$("#"+divID+"totalMoney").html("  ");},
			success:function(data){
					$("#"+divID+"time").html(data.rtnMap.lotteryTime.substring(0,10)+"&nbsp;");//开奖时间
					$("#"+divID+"totalMoney").html(data.rtnMap.betTotalMoney);
					//注码
					if(lotno=="F47103"){
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+Number(data.winbasecode.substring(0,2))+"</li>" 
								+ "<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(2,4))+"</li>" 
								+ "<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(4,6))+"</li></ul>");

					}else if(lotno=="F47104"){
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+data.winbasecode.substring(0,2)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(2,4)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(4,6)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(6,8)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(8,10)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(10,12)+"</li>"+
										"<li class='kj_lanqiu'>"+data.winspecialcode+"</li></ul>");					
					}else if(lotno=="T01002"){
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+parseInt(data.winbasecode.substring(0,1))+"</li>" +
										"<li class='kj_hongqiu'>"+parseInt(data.winbasecode.substring(1,2))+"</li>" +
										"<li class='kj_hongqiu'>"+parseInt(data.winbasecode.substring(2,3))+"</li></ul>");
						$("#"+divID+"totalMoney").html(data.rtnMap.betTotalMoney.split("；")[0]);
					
					}else if(lotno=="T01011"){
						$("#"+divID+"time").html(data.rtnMap.lotteryTime.substring(0,10)+"&nbsp;");
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+parseInt(data.winbasecode.substring(0,1))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(1,2))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(2,3))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(3,4))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(4,5))+"</li></ul>");
					
					}else if(lotno=="T01009"){
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+Number(data.winbasecode.substring(0,1))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(1,2))+"</li>" +
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(2,3))+"</li>"+
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(3,4))+"</li>"+
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(4,5))+"</li>"+
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(5,6))+"</li>"+
										"<li class='kj_hongqiu'>"+Number(data.winbasecode.substring(6,7))+"</li></ul>");
					
					}else if(lotno=="F47102"){
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+data.winbasecode.substring(0,2)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(2,4)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(4,6)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(6,8)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(8,10)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(10,12)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(12,14)+"</li>"+
										"<li class='kj_lanqiu'>"+data.winspecialcode+"</li></ul>");
					
					}else if(lotno=="T01001"){
						
						$("#"+divID+"haoma").html("<ul><li class='kj_hongqiu'>"+data.winbasecode.substring(0,2)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(2,4)+"</li>" +
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(4,6)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(6,8)+"</li>"+
										"<li class='kj_hongqiu'>"+data.winbasecode.substring(8,10)+"</li>"+
										"<li class='kj_lanqiu'>"+data.winbasecode.substring(11,13)+"</li>"+
										"<li class='kj_lanqiu'>"+data.winbasecode.substring(13,15)+"</li></ul>");
					}
					
			}
			
		});

	 }
	 var a=0;
	 var b=0;
	 var c=0;
	 function checkpass(){
			var oldpass = $("#old_pass").val();
			
			if(oldpass.length!=Trim(oldpass).length){
				$("#oldimages").children().remove();
				var node = $("#oldimages");
				var img = $(node>'img');
				if(img.length<=0){
					$("#oldimages").append("<img  src='/rchlw/function/images/icon_chahao.gif'/>");
					$("#oldpromt").text(decodeURI(EncodeUtf8("密码不支持输入空格！")));
					//$("#old_pass").val("");
					a=0;
				}
				return false;
			}else{
				var params=$('#form2').serialize();
				$.ajax({
				url:'/rchlw/user/tuserinfoAction!changeoldpassword',
				type:'POST',
				data:params,
				datatype:'string',
				success:function(data){		
					$("#oldimages").children().remove();
					if(data=='true') {
						var node = $("#oldimages");
						var img = $(node>'img');
						if(img.length<=0){
							$("#oldimages").append("<img src='/rchlw/function/images/lvduigou.gif'/>");
							$("#oldpromt").text("");
							a=1;
						}
						return true;
					}else if(data=='false'){
						var node = $("#oldimages");
						var img = $(node>'img');
						if(img.length<=0){
							$("#oldimages").append("<img  src='/rchlw/function/images/icon_chahao.gif'/>");
							$("#oldpromt").text(decodeURI(EncodeUtf8("密码输入有误，请重新输入！")));
							//$("#old_pass").val("");
							a=0;
						}
						return false;
					}
				}
				});
			}
			
		 }
		function parse (data){
			 return (new Function("return (" + data + ")"))();
		}
		 function checknewpass(){
			var newpas = $("#passLogin").val();
			$("#newpassimage").children().remove();
			if(newpas!=''){
				 if(newpas.length<6 || newpas.length>16){
					$("#newpassimage").append("<img src='/rchlw/function/images/icon_chahao.gif'>");
					$("#newpromt").text(decodeURI(EncodeUtf8("密码长度不合法！")));
					b=0;
					return false;
				}/**else if(newpas.search("^[a-z0-9_]+$")==-1){
					$("#newpassimage").append("<img src='/rchlw/function/images/icon_chahao.gif'>");
					$("#newpromt").text(decodeURI(EncodeUtf8("密码格式错误！")));
					b=0;
					return false;
				}*/else{
					$("#newpassimage").append("<img src='/rchlw/function/images/lvduigou.gif'>");
					$("#newpromt").text("");
					b=1;
					return true;
				}
				return true;
			}else if(newpas==''){
				var node = $("#newpassimage");
				var img = $(node>'img');
				if(img.length<=0){
					$("#newpassimage").append("<img  src='/rchlw/function/images/icon_chahao.gif'/>");
					$("#newpromt").text(decodeURI(EncodeUtf8("密码为空，请输入新密码！")));
					//$("#passLogin").val("");
					b=0;
				}
				return false;
			};
		 }
		 
		 	//修改密码点击保存
	function updataPassword(){
		if(a==1 && b==1 && c==1){
			var param = $("#form2").serialize();
			 $.ajax({
				url:'/rchlw/user/tuserinfoAction!changePassword',
				type:'POST',
				data:param,
				datatype : 'string',
				error:function(data){openAlert(decodeURI(EncodeUtf8("修改密码出现异常，请联系客服！")));},
				success:function (data){
					if(data=="changePasswordSuccess"){
						$("#formId").html('<div class="alter_content" id="successId"><div class="alter_tu"><span><img src="/rchlw/function/images/duigou.gif" /></span><span class="mimatishi"><img src="/rchlw/function/images/mimatishi.gif" /></span></div><div class="mima_zi">'+decodeURI(EncodeUtf8("请牢记您的登录密码。"))+'<a href="#" onclick="ajaxOutToLogin();"> '+decodeURI(EncodeUtf8("重新登录"))+'</a></div>');
					}else{
					 openAlert(data);}
				}
		 });
		}else{
			openAlert(decodeURI(EncodeUtf8("请根据提示修改填写信息！")));
			
		}		
	}

		 
	function jumpurl(){
		var mobile = $("#hiddenmobile").val();
		var username = $("#usertd").text();
		var valid_amount = $("#Valid_amount").text();
		var withdrawel_money = $("#withdrawel_money").val();
		var real_name = $("#real_name").val();
		var bank_name = $("#bank_name").val();
		var cardnumber = $("#bank_number").val();
		testRealName();//加载这个方法  验证
		if(mobile==null ||mobile=="null"||mobile==""){
			openAlert(decodeURI(EncodeUtf8("为了您的提款安全，请您先绑定手机号码！")));
			return false;
		}
	
		if(passwordMark==0||t_realname == 0||t_realname==0||check_money==0||checkBankNO()==false ||checkBankName()==false){
			openAlert(decodeURI(EncodeUtf8("您填写的提现信息没能全部通过验证，请根据错误提示修改后再提交。")));
			return false;
		}
		var params ="username="+username+"&valid_amount="+valid_amount+"&real_name="+real_name+"&withdrawel_money="+withdrawel_money+"&bank_name="+bank_name+"&cardnumber="+cardnumber+"&isIe="+decodeURI(EncodeUtf8("中文"));
		for(b in $.browser) if(b=='msie'){params=encodeURI(params)+"&msie=1";};
		$.ajax({
			url	: '/rchlw/user/tuserinfoAction!getParam?'+params,
			type:"POST",
			data:params,
			success:function(data){
				if(data!="cash_next"){
					openAlert("提现跳转页面出现异常，请联系客服！");
				}else{
					reHtmljsp(64,'',true,'right_text',false);
				}
			}		
		});	
	}
		 
	function checkrealpass(){
	var newpass = $("#passLogin").val();
	var new_pass = $("#real_pass").val();
	$("#realimages").children().remove();
	if(newpass==new_pass){
		
		var node = $("#realimages");
		var img = $(node>'img');//node.getElementsByTagName("img");
		if(new_pass.length<4 || new_pass.length>16){
			$("#realimages").append("<img src='/rchlw/function/images/icon_chahao.gif'>");
			$("#realpromt").text(decodeURI(EncodeUtf8("重复密码长度不合法！")));
			//$("#real_pass").val("");
			c=0;
			return false;
		}else if(new_pass.search("[a-z0-9_]+$")==-1){
			$("#realimages").append("<img src='/rchlw/function/images/icon_chahao.gif'>");
			$("#realpromt").text(decodeURI(EncodeUtf8("重复密码格式错误！")));
			//$("#real_pass").val("");
			c=0;
			return false;
		}else{
			$("#realimages").append("<img src='/rchlw/function/images/lvduigou.gif' />");
			$("#realpromt").text("");
			c=1;
			return true;
		}
		return true;
	}else{
		var node = $("#realimages");
		var img = $(node>'img');
		if(img.length<=0){
			$("#realimages").append("<img src='/rchlw/function/images/icon_chahao.gif' />");
			$("#realpromt").text(decodeURI(EncodeUtf8("新密码两次输入不一致，请重新输入确认新密码！")));
			//$("#real_pass").val("");
			c=0;
		}
		return false;
	}

	}

		 

 function CustomMessage() {    
		var re = /^[\d]+$/;
			if($("#contents").val()==null||$("#contents").size()==0||$("#contents").val()==""||$("#contents").val()==" "||$("#contents").val().trim()==""){
				openAlert(decodeURI(EncodeUtf8("您还没有输入留言内容，请输入！")));
				return;
			}else{
				if($("#contents").val().length>500){
					openAlert(decodeURI(EncodeUtf8("留言内容最多500字，您输入的内容过长，请重新输入！")));
					return;
				}
			}
			if($("#qq").val().length>0&&!(re.test($("#qq").val()))){
					openAlert(decodeURI(EncodeUtf8("您输入的QQ号格式不正确，请重新输入！")));
					return false;
			}
			if($("#userphone").val().length>0){
				var telePattern=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
				if(!telePattern.test($("#userphone").val())){
					openAlert(decodeURI(EncodeUtf8("您输入的手机号码格式不正确，请重新输入！")));
					return false;
				}
			}
				var params=$('#customMessage').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
				// 发送请求
				$.ajax({
					url	: '/rchlw/function/custom!newCustomMessage',
					type:"POST",//数据发送方式
					data:params,//参数
					dataType:'html',//接受数据格式
					success:function(data){
						if(data="SUCC"){
							openAlert("谢谢您的支持，我们会尽快给您答复!");
						}else{
							openAlert("留言出现错误，请稍后再试！");
						}
						getList("list","listCont");
					}		
				});

		}
 function getList(formId, divId) {
		var parameters = $("#" + formId).serialize() ; 
		for (b in $.browser) if (b == 'msie') {
			parameters = encodeURI(parameters) + "&msie=1";
		}
		$.ajax({
			url: "/rchlw/function/custom!getMsgList",
			//后台处理程序
			type: "post",
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
 //修改密码中的密码强度
 function updatePasswordStrong(){
	 var num = new RegExp('[0-9]');
	 var pinyin = new RegExp('[A-Za-z]');
	 var teshu = new RegExp('[_]');
	 var tiao = '';
	 var countT = 0;
	 var i = 0;
	 var color = '';
	 var nocolor = '';
	 
	 var pwd =$("#passLogin").val();
	 if(pwd!=null || !pwd.equals("")){
	 	if(num.test(pwd)||pinyin.test(pwd)){
		 $("#showStrong").text(decodeURI(EncodeUtf8("弱")));
			 color='<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>';
		 	if(num.test(pwd)&&pinyin.test(pwd)){
		 		$("#showStrong").text(decodeURI(EncodeUtf8("中")));
					 color='<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>';
		 			if(teshu.test(pwd)){
		 				$("#showStrong").text(decodeURI(EncodeUtf8("强")));
							 color='<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>'+
							 '<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>';
			 			}
			 	}
		 	$("#tiao").html(color);
		 }else{
			 $("#showStrong").text("");
			 for(i=0;i<10;i++){
				 color+='<li>&nbsp;</li>';
			 }
			 $("#tiao").html(color);
		 }		 
	}else{
		
			 $("#showStrong").text("");
			 for(i=0;i<10;i++){
				 color+='<li>&nbsp;</li>';
			 }
			 $("#tiao").html(color);
			 }


 }
 
 function updatePasswordsStrong(){
	 $("#registerPassStrong").css("display","block");
	 updatePasswordStrong();
 }
 
 
 function channelKJ(id,param){	
		var getState = $("#"+id).attr("class"); //true 取消定制  false 同意定制
		var state = "";  //是否有效 0:不发送,1:发送
		if(getState.indexOf("Switch")>=0){
			state = 1;
		}else{
			state = 0;
		};
		$.ajax({
				url	: '/rchlw/function/tuserinfoAction!setSMS?smstype='+param+'&state='+state,
				type:'POST',//数据发送方式
				success:function(data){					
					if(data=="success"){
						openAlert(decodeURI(EncodeUtf8("设置成功！")));
						selectSMS(id,param);
					}else{
						openAlert(decodeURI(EncodeUtf8("设置失败！")));
						selectSMS(id,param);
					}
				}		
			});
	
	}
	
	function selectSMS(id,param){
		$.ajax({
			url : '/rchlw/function/tuserinfoAction!findSMS?smstype='+param+'&a='+Math.random(),
			type:'GET',
			error:function(data){openAlert(decodeURI(EncodeUtf8("查询短信设置失败！")));},
			success:function(data){
				if(data!="error"){
					if(data=='1'){
						$("#"+id).addClass("Switch");
						$("#info_"+id).text(decodeURI(EncodeUtf8("已定制")));
					}else if(data=='0'){
						$("#"+id).removeClass("Switch");
						$("#info_"+id).text(decodeURI(EncodeUtf8("已取消定制")));
					}
				}else{
					openAlert(decodeURI(EncodeUtf8("查询开奖设置失败！")));
					$("#"+id).addClass("Switch");
					$("#info_"+id).text(decodeURI(EncodeUtf8("已定制")));
				}
			}
		});
	}
	//统一提示方法
	function openWindow(msg,msgid,openid){
		$("#"+msgid).html(msg);
		loginShow(openid,false);
	}
	//手机号解绑
	function phoneUnBundling(){
		$.ajax({
			url : '/rchlw/function/tuserinfoAction!phoneUnBundling',
			type:'post',
			error:function(data){openAlert("解除手机绑定发生异常！");},
			success:function(data){
				if(data=="success"){
					openWindow('您已经成功解除绑定手机！','unBundling_Msg','unBundling_Alert');
				}else if(data=="failed"){
					openAlert("解除绑定手机失败！");
				}else{
					openAlert("解除绑定手机发生异常！");
				}
			}
		});
	}