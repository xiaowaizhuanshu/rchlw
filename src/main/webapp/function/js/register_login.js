var basepath = "/rchlw";//项目地址
var pageArrayNum = 0; 
var regArray=new Array();
regArray[0]= "http://users.ruyicai.com/register/register_new.jsp";//手机注册第一个页面***
regArray[1]= "/rchlw/function/rules/emailRegisterIndex.html";//邮箱注册第一个页面***
regArray[2]= basepath + "/function/user/phoneRegisterNext.jsp";//手机注册第二个页面
regArray[3]= basepath + "/function/user/emailRegisterNext.jsp";//邮箱注册第二个页面
regArray[4]= basepath + "/function/user/registerSuccess.jsp";//手机注册第成功页面

// 投注时查询余额
function getBalance(){
  $.ajax({
	   type: "POST",
	   url: "/rchlw/ajax/selectAll!ajaxFindAccount",
	   dataType:'json',
	   success: function(json){
			$("#touzhu_money").html(json.deposit_amount+"");
			$("#final_money").html(json.deposit_amount+"");
			$("#this_username").html(json.userName);
		 }
	   });
}
//根据id获取焦点
function focuns(id){
	if($("#"+id).val()==""||$("#"+id).val()==null){
	   $("#"+id).focus();
	}
} 
 
//注册的第一个页面的样式的focus事件
function registerFocus(i){
	$("#zc"+i).siblings().removeClass("zhclisthover");
	$("#zc"+i).addClass("zhclisthover");
}
  
function reHtml_common(key,parameters,loading,divId,arry,defualtKey){
	var defaultArray = new Array(); //定义默认的数组
	var defaultkey = '23'; //定义默认的key 
	if(arry == '' || arry == null){
		defaultArray = urlArray; //给默认数组赋值
	}
	else{
		defaultArray = arry; //使用传入的数组
	}
	if(defualtKey != ''){
		defaultkey = defualtKey; //使用传入的默认key
	}
	var str = "";
	if(key=='' || key=='0'){//从URL中获取参数
		var keyP = GetQueryString("key");
		if(key=='0'){keyP=defaultkey;key=defaultkey;}
		if(keyP==''){keyP=defaultkey;key=defaultkey;}
		if(keyP!=null && keyP!="undefined"){
			key = keyP;
		}else{
			key =defaultkey;
		}
	}
	var j=0;
	for(var i=0;i<defaultArray.length;i++){
		if(key != i){
			j++;
		}
	}
	
	if(j==defaultArray.length){
		key=defaultkey;
	}
	if(divId==null||divId==''){
		divId = "right_text";
	}
	pageArrayNum = key;//将当前页面的数组值更新为当前页面的值
	for(b in $.browser) if(b=='msie'){parameters=encodeURI(parameters)+"&msie=1";}
	$.ajax({
		url:defaultArray[key],//后台处理程序
		type:"POST",//数据发送方式		
		data:parameters,//参数
		dataType:'html',//接受数据格式
		beforeSend:function(){if(loading!=false){$("#"+divId).html('<img src="/rchlw/function/images/loading.gif"  />');}},
		success:function(data){
			$("#"+divId).html(data);
			$("#right_text").html(data.replace("{success}", ""));
			}	
		});	
	return false;
}

var repeatId = "";
function notRepeat(id,aclass,world){
	var rclass = $("#"+id).attr("class");
	repeatId = rclass;
	$("#"+id).removeClass(rclass);
	$("#"+id).addClass(aclass);
	$("#"+id).val(world);
	$("#"+id).attr("disabled", true);
}

function repeat(id,world){
	var rclass = $("#"+id).attr("class");
	$("#"+id).removeClass(rclass);
	$("#"+id).addClass(repeatId);
	$("#"+id).val(world);
	$("#"+id).attr("disabled",false);
}

/*******************offen.js***********************/
function HoverOver(n){n.addClass("over");}
function HoverOut(n) {n.removeClass("over");}

$(function() {
	$(".light").hover(function(){
		$(this).addClass("over");
	},
	function(){
		$(this).removeClass("over");
	});
});
/*************************************************/
  
function phoneRegister_jumpUrl(url,check){

// 验证输入的用户名、密码、手机号码、邮箱是否正确
var regValid = jQuery.formValidator.pageIsValid('1');
if(!regValid){
	/**if(check == 13){
		alert(decodeURI(EncodeUtf8('您填写的注册信息没能全部通过验证，请根据错误提示修改后再提交。')));
	}else{*/
		openAlert('您填写的注册信息没能全部通过验证，\n 请根据错误提示修改后再提交。');
	//}
	change("magPassRegister");
	return;
}
	
	//验证博雅彩点卡信息
	/**if($("#checkCard").hasClass("Switch")){
		//得到页面上点卡的信息
		 var params = "cardid="+$("#cardid").val()+"&cardpwd="+$("#cardpwd").val();
			// 发送请求
			$.ajax({
				url	: '/rchlw/function/tuserinfoAction!getChannel',
				type:"POST",//数据发送方式
				data:params,//参数
				dataType:'text',//接受数据格式
				async: false, 
				success:function(json){
					if(json =="2"){
						//用户注册协议
						if ($("#registerXieyi").attr("checked") != true && $("#registerXieyi").attr("checked") != "checked") {	
							openAlert(decodeURI(EncodeUtf8('您没有同意《博雅彩服务协议》！')));
							 return;
					    }
						
					 	if( url == "key=2"){
							notRepeat('phoneregister_submit','zhcezhongbtn','');
							
							var params=$('#userPhoneRegisterForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
							// 发送请求
							$.ajax({
								url	: '/rchlw/function/tuserinfoAction!ryc_Register',
								type:"POST",//数据发送方式
								data:params,//参数
								dataType:'text',//接受数据格式
								async: false, 
								success:function(json){
									if(json =="1"){
										getBalance();
										window.location.href="/rules/register.html?"+url;
									}else{
										openAlert(json);
										repeat('phoneregister_submit');
										change("magPassRegister");
										
									}
								}
							});
							
						}else if( url == "key=3"){
							notRepeat('emailregister_submit','zhcezhongbtn','');
							var params=$('#userEmailRegisterForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
							// 发送请求
							$.ajax({
								url	: '/rchlw/function/tuserinfoAction!ryc_Register',
								type:"POST",//数据发送方式
								data:params,//参数
								dataType:'text',//接受数据格式
								async: false, 
								success:function(json){
								if(json =="1"){
									window.location.href="/rules/emailRegisterIndex.html?"+url;
								}
								else{
									openAlert(json);
									repeat('emailregister_submit');
									change("magPassRegister");
								}
								}
							});
						} 
					}else{
						openAlert(json);
						return ;
					}
				}
			});
	}else{*/
	
	//用户注册协议
	if ($("#registerXieyi").attr("checked") != true && $("#registerXieyi").attr("checked") != "checked") {	
		openAlert('您没有同意《博雅彩服务协议》！');
		 return;
    }
	var params='';
	if( url == "key=2"){
		notRepeat('phoneregister_submit','zhcezhongbtn','');
		params=$('#userPhoneRegisterForm').serialize(); 
	}else if( url == "key=3"){
		notRepeat('emailregister_submit','zhcezhongbtn','');
		params=$('#userEmailRegisterForm').serialize(); 
	}
	$.ajax({
			url	: '/rchlw/function/tuserinfoAction!ryc_Register',
			type:"POST",//数据发送方式
			data:params,//参数
			dataType:'text',//接受数据格式
			error:function (){repeat('emailregister_submit');change("magPassRegister");},
			//async: false, 
			success:function(json){
				if( url == "key=2"){
					if(json =="1"){
						getBalance();
						reHtml_common('','','','right_text',regArray,'2');
					}else{
						openAlert(json);
						repeat('phoneregister_submit');
						change("magPassRegister");	
					}
				}else if( url == "key=3"){
					if(json =="1"){
					reHtml_common('','','','right_text',regArray,'3');
					}
					else{
						openAlert(json);
						repeat('emailregister_submit');
						change("magPassRegister");
					}
				}
			}
		});	
	//}
}

//注册跳转链接
//var sendSmsCount = 0;
//var oldPhone="";
var sendCount=0;
var pageFlashNum=0;

//博雅彩注册时向用户发送手机短信
function getSend(){
	if(pageFlashNum==0){
		pageFlashNum++;
		$.ajax({
			url : '/rchlw/function/tuserinfoAction!sendMessage',
			type:"POST",//数据发送方式
			dataType:'html',//接受数据格式
			success:function(data){
				sendCount=data;
				if(parseInt(sendCount)>=3){
					$("#smsMessage").text("抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信");
					$("#smsMessage").css("color" , "red");
					$("#accept").hide();
				}
		  }
				
		});
	}
}

//博雅彩注册时向用户发送邮箱验证
function getEmailSend(){
	if(pageFlashNum==0){
		pageFlashNum++;
	$.ajax({
		url : '/rchlw/function/tuserinfoAction!sendEmailMessage',
		type:"POST",//数据发送方式
		dataType:'html',//接受数据格式
		success:function(data){
		sendCount=data;
		if(parseInt(sendCount)>=3){
			$("#emailRegisterMessage").html("抱歉 ！每天一个邮箱号只发送3次信息，已经向该邮箱号发送3次短信 ！");
			$("#emailRegisterMessage").css("color" , "red");
			$("#accept").hide();
			}
		}
	});
	}
}


function PhoneCheck(url) {
	// 验证输入的验证码是否正确
	var regValid = jQuery.formValidator.pageIsValid('1');
	if (!regValid) {
		return;
	}
	//-------------用户注册----------------
	var params=$('#realForm').serialize(); 
	notRepeat('renzheng_submit','zhcezhongbtn','');
	$.ajax({
		url	: '/rchlw/function/tuserinfoAction!phoneCheck',
		type:"POST",//数据发送方式
		data:params,//参数
		dataType:'html',//接受数据格式
		success:function(data){
			//此处判断跳转的的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
			if(data.indexOf("{success}")==-1){
				openAlert(data);
				repeat('renzheng_submit');
			}else{
				data = data.replace("{success}","");
				$("#right_text").html(data);
			}
		}		
	});
}
	//打开邮箱内的链接
function openEmail(url){
	window.location.href="http://"+url;
}
//发送验证码倒计时   begin
jQuery.fn.countdown = function(options) {
	/**
	 * app init
	*/	
	if(!options) options = '()';
	if(jQuery(this).length == 0) return false;
	var obj = this;	

	/**
	 * break out and execute callback (if any)
	 */
	if(options.seconds < 0 || options.seconds == 'undefined')
	{
		if(options.callback) eval(options.callback);
		return null;
	}

	/**
	 * recursive countdown
	 */
	window.setTimeout(
		function() {
			jQuery(obj).html(String(options.seconds));
			--options.seconds;
			jQuery(obj).countdown(options);
		}
		, 1000
	);	
    return this;
} ;
//发送验证码倒计时   end

//===================================================================
//统一提示方法
function openAlert(msg){
	$("#AlertMsg").html(msg);
	loginShow("Shouye_Alert",false);
}
//更改验证码头部验证码加载
function change(mag){
	var d=new Date();
	var imageUrl = "/rchlw/function/common/image.jsp?id="+d.getDate()+Math.random();
	$("#"+mag).attr('src',imageUrl);
}
//调用支付宝登录方法
function zfbLogin(){
	$.ajax({
		url:'http://users.ruyicai.com/function/unitedLogin!alipayHandyLogin',
		type:"POST",//数据发送方式
		dataType:'html',
		error:function(){alert("error");},
		success:function(data){
			window.location.href=data;
			//window.open(data);
		}
	});
}

//调用QQ登录方法
function qqUnitedLogin(){
	$.ajax({
		url:'http://users.ruyicai.com/function/unitedLogin!qqUnitedHandlyLogin',
		type:"POST",//数据发送方式
		dataType:'html',
		error:function(){alert("error");},
		success:function(data){
			window.location.href=data;
		}
	});
}
function inputSelect (){	
	$("input[type ='text']").each(function() {
		$(this).focus(function() {
			$(this).select();
			});
	});	
}
//获取URL地址中的参数
function GetQueryString(name){ 
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
var r = window.location.search.substr(1).match(reg); 
if (r!=null) return unescape(r[2]); return null; 
}

//点击首页头部登录让登录层显示
$(function(){
	$(".BodyBG").css({'display':'none'});
	WindowCenter();
	window.onresize=WindowCenter;
	window.onscroll=WindowCenter;	
});

function loginShow(name,isPage){
	var PopUpWindow=$("#login_pop");
	if(name){PopUpWindow=$("#"+name);}
	var PopUpBG=$(".BodyBG");
	$(PopUpBG).toggle();
	$(PopUpWindow).toggle();
	
	if(!isPage){
		WindowCenter();
	}
	if(!isPage){
		focuns();
	}
}

function WindowCenter(){
	$(".WindowCenter").each(function(){
		if($(this).css("display")!="none"){
			var PopUpWindowTop=(document.documentElement.clientHeight-$(this).height())/2+document.documentElement.scrollTop+document.body.scrollTop;
			var PopUpWindowLeft=(document.documentElement.clientWidth-$(this).width())/2+document.documentElement.scrollLeft;
			$(this).css({ 'position':'absolute','z-index':'999999','margin':'0','padding':'0',top:PopUpWindowTop+"px",left:PopUpWindowLeft+"px"});
		}
	});
	if (window.innerWidth)
	{ winWidth = window.innerWidth; }
	else if ((document.body) && (document.body.clientWidth))
	{ winWidth = document.body.clientWidth; };
								   
	if (window.innerHeight)
	{ winHeight = window.innerHeight; }
	else if ((document.body) && (document.body.clientHeight))
	{ winHeight = document.body.clientHeight; };
	
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
	{ winHeight = document.documentElement.clientHeight; winWidth = document.documentElement.clientWidth; };
	
	if( winWidth < 950 )
	{ winWidth = 950; };
	
	if( winHeight < document.body.clientHeight )
	{ winHeight = document.body.clientHeight; };
	
	$(".BodyBG").css({
		'position':'absolute','left':'0px','top':'0px','z-index':'9999','width':'100%','background':'#000',opacity:0.4,
		'width':winWidth+'px','height':winHeight+'px'
	});
};

//登录验证
function loginFormValidator(){
	$.formValidator.initConfig({
		formid:"userLoginForm",
		onError:function(){
			alert("校验没有通过，具体错误请看错误提示。");
			return false;
		}
	});
	
	//用户名验证
	$("#username").formValidator({
		onshow : "请输入邮箱或手机号！",
		onfocus : "请输入你的用户名，不可为空！",
		oncorrect : "该用户名格式正确。"
	}).regexValidator({
		regexp : "^(([a-zA-Z0-9_]|[0-9]|[\u4e00-\u9fa5]){2,16})+$",
		onerror : "你输入的用户名格式不正确！"
		
	});

	//密码验证
	$("#pwd").formValidator({
		onshow : "请输入密码！",
		onfocus : "密码不能为空，密码长度 6- 16位。",
		oncorrect : "密码合法。"
	}).inputValidator({
			min : 6,
			max : 16,
			empty : {
				leftempty : false,
				rightempty : false,
				emptyerror : "密码两边不能有空符号！"

			},
			onerror :"密码长度范围为6-16。"
		}).regexValidator({
			regexp : "^[a-z0-9_]+$",
			onerror : "密码只由小写英文字母、阿拉伯数字、下划线混合。"
		});	
}
//验证用户名
function checkUsername(){
	var username = $("#username").val();
	//var userflage =0;
	if(username.indexOf("@")==-1){
		var telePattern=/^(([a-zA-Z0-9_]|[0-9]|[\u4e00-\u9fa5]){2,16})+$/;
		if(!telePattern.test(username)){
			return false;
		}
	}else{
		var telePattern=/(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
		if(!telePattern.test(username)){
			return false;
		}
		
	}
	if(username==null || username==""){
		return false;
	};
	return true;
}

// 验证密码
function checkPWD(){
	var pass = $("#pwd").val();
	if(pass==null || pass==""){
		return false;
	};
	return true;

}

//验证验证码
function checkYZ(){
	if($("#rank_value").val()!=0){
		var pass1 = $("#password1").val();
		if(pass1==null || pass1==""){
			return false;
		}
	}
	return true;
}
// 表单提交验证手机号码和密码
function checkloginformsub(formName){
	var a=true;
	var usernameOk = checkUsername();
	if(!usernameOk){
		openAlert("请输入正确的用户名！");
		$("#rank_id").css("display","");
		$("#rank_value").val("1"); 
		return false;
	};
	var passOk = checkPWD();
	if(!passOk){
		openAlert("请输入正确的密码！");
		$("#rank_id").css("display","");
		$("#rank_value").val("1"); 
		return false;
	};
	var yzOk = checkYZ();
	if(!yzOk){
		openAlert("请输入正确的验证码！");
		$("#rank_id").css("display","");
		$("#rank_value").val("1"); 
		return false;
	};
	if(a == usernameOk && a == passOk && a == yzOk){
		return true;
	};
}
//独立的登录页的登录
function loginIndex(){

	//获取地址栏传入的参数并赋值给隐藏域
	$("#reqUrl").val(GetQueryString("reqUrl"));
	var a = true;
	var b = checkloginformsub("userLoginForm");
	if(a == b){
		var params=$('#userLoginForm').serialize(); 
		$.ajax({
			url	: '/rchlw/function/tuserinfoAction!loginForm',
			type:"POST",//数据发送方式
			data:params,//参数
			dataType:'html',//接受数据格式
			success:function(data){
					//判断跳转的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
					if(data.indexOf("{success}")==-1){
						openAlert(data);
						$("#rank_id").css("display","");
						$("#rank_value").val("1");
						change("magLogin");
						$("#pwd").unbind("onKeyDown");
					}else{
						if(data.indexOf("{nickname}") != -1){
							window.location.href="/rchlw/function/user/ruyicai_setNickName.jsp";
						}else if(data.indexOf("{requrl}") != -1){
							var requrls = (data+"").split(";");
						    window.location.href=requrls[1];
						}else{
							window.location.href="/rchlw/function/rules/user.jsp?key=23&view=ChildMenu1&style=menu1";
						}	
					}
				}		
		});
	}else{
		change('magLogin');
	}
}
