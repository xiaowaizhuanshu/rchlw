function LTrim(str){
    var i;
    for(i=0;i<str.length;i++)
    {
        if(str.charAt(i)!=" "&&str.charAt(i)!=" ")break;
    }
    str=str.substring(i,str.length);
    return str;
}
function RTrim(str){
    var i;
    for(i=str.length-1;i>=0;i--)
    {
        if(str.charAt(i)!=" "&&str.charAt(i)!=" ")break;
    }
    str=str.substring(0,i+1);
    return str;
}
function Trim(str){
    return LTrim(RTrim(str));
}

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
//---------------主要是集合登陆 注册 找回密码三个功能模块-----------------
//验证用户名是否可用
  var nameflag=0;
  //bl 为true  表示需要用户存在    为false 表示不需要这个用户名存在
	function checkName(id,bl){
		var patt=/^(([a-zA-Z0-9_]|[0-9]|[\u4e00-\u9fa5]){2,16})+$/;
		var getusername=$("#"+id).val();
		if(getusername!=Trim(getusername)){
			addWrongImages(id,id+'Image',id+'Tip','用户不支持输入空格，请重新输入！');
			nameflag=0;
			return false;
		}
		if(Length(getusername)<4 || Length(getusername)>16){
			addWrongImages(id,id+'Image',id+'Tip','用户名长度至少为4个，最多16个字符！');
			nameflag=0;
			return false;
		}
		if(patt.test(getusername)==false){
			addWrongImages(id,id+'Image',id+'Tip','用户名仅支持4-16位字母、汉字、数字、下划线！');
			nameflag=0;
			return false;
		}
		var params = "username="+getusername+"&isIe=中文";
		for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
		$.ajax({
			url:'/rchlw/function/tuserinfoAction!queryUserName',
			type:"POST",
			data:params,
			async:false,
			dataType:'text',
			error: function(data){
					openAlert("网络出现异常");
					addWrongImages(id,id+'Image',id+'Tip','网络出现异常');
					nameflag=0;
					return false;},
			success:function(data){
				if(data=='0'){  
					//用户不存在
					//查询昵称是否存在
					var para = "nickname="+getusername+"&isIe=中文";
					for(b in $.browser) if(b=='msie'){para=para+"&msie=1";};
					$.ajax({
						url:'/rchlw/function/tuserinfoAction!queryNickName',
						type:"POST",
						data:para,
						async: false,
						dataType:'text',
						error:function(){openAlert("网络出现异常");
								addWrongImages(id,id+'Image',id+'Tip','网络出现异常');
								nameflag=0;
								return false;},
						success:function(data){
							if(data =="1"){
								if(bl=="false"){
									addWrongImages(id,id+'Image',id+'Tip','用户名已存在，请更换用户名！');
									nameflag=0;
									return false;
								}else if(bl=="true"){
									addRightImages(id+'Image',id+'Tip');
									nameflag=1;
									return true;
								}
								
							}else if(data=='0'){
								if(bl=="false"){
									addRightImages(id+'Image',id+'Tip');
									nameflag=1;
									return true;
								}else if(bl=="true"){
									addWrongImages(id,id+'Image',id+'Tip','用户名不存在！');
									nameflag=0;
									return false;
								}
							}
					
						}
					});
					
				}else if(data =='1'){   //用户存在
					if(bl=="false"){
						addWrongImages(id,id+'Image',id+'Tip','用户名已存在，请更换用户名！');
						nameflag=0;
						return false;
					}else if(bl=="true"){
						addRightImages(id+'Image',id+'Tip');
						nameflag=1;
						return true;
					}
					
				}else{
					addWrongImages(id,id+'Image',id+'Tip',data);
					nameflag=0;
					return false;
				}
			}		
		});
		

	}
	
	
var passflag =0;
function checkPassword(uid,pid){
	var username = $("#"+uid).val();
	var password = $("#"+pid).val();
	if(username==null || username == "undefind" || username ==""){
		addWrongImages(pid,pid+'Image',pid+'Tip','请先输入用户名！');
		return false;
	}else{
		$.ajax({
			type:"get",
			url:"/rchlw/function/tuserinfoAction!getPasswordByUserName?username="+username+"&reg_password="+password,
			datatype:'html',
			success:function(data){
				if(data=="true"){
					addRightImages(pid+'Image',pid+'Tip');
					passflag=1;
					return true;
				}else{
					addWrongImages(pid,pid+'Image',pid+'Tip','输入密码有误，请重新输入！');
				return false;
				}
			}
		});
	}
}

function checkNewPassword(uid,pid){
	var password = $("#"+pid).val();
	if(password!= Trim(password)){
		addWrongImages(pid,pid+'Image',pid+'Tip','空格不可做为密码输入！');
		passflag=0;
		//realpassflag=0;
		//addWrongImages('realPass','realPassImage','realpasswordTip','两次输入密码不相同。');
		return false;
	}
	if(Length(password)<6 || Length(password)>16){
		addWrongImages(pid,pid+'Image',pid+'Tip','密码长度必须是6-16个字符！');
		passflag=0;
		
		return false;
	}
	
	addRightImages(pid+'Image',pid+'Tip');
	passflag=1;
	return true;
}

function selectToAction(){
	var radioOne = $("#radioNumone").attr("checked");
	var radiotwo = $("#radioNumtwo").attr("checked");
	var inputyzm = $("#inputyzm").val();
	var name = $("#name").val();//新建的用户名
	var password = $("#password").val();
	var username = $("#username").val(); //原有账户的用户名
	if(radiotwo == true){
		//已有如意彩账户
		if(passflag==1){
			$.ajax({
				type:'post',
				url:'/rchlw/function/unitedLogin!userInfoBind?username='+username+"&password="+password,
				async:false,
				success:function (data){
					window.location.href=data;
				}
			});
		}else{
			openAlert(decodeURI(EncodeUtf8("信息有误，请根据提示修改信息！")));
			return;
		}
		
	}else if(radioOne == true){
		//新创建账户
		if(passflag==0){
			openAlert(decodeURI(EncodeUtf8("请根据错误提示修改用户信息！")));
			return ;
		}
		if ($("#registerXieyi").attr("checked")!='checked') {
			openAlert('您没有同意《如意彩服务协议》！');
			return;
		}
		if(name=="" || name=="undefined"){
			openAlert(decodeURI(EncodeUtf8("用户名不可为空！")));
			return;
		};
		registerUser(name,password,inputyzm);
		

	}

}

function registerUser(name,password,inputyzm){
	var parameters ="username="+name+"&inputyzm="+inputyzm+"&password="+password+"&isIe="+decodeURI(EncodeUtf8("中"));
	for(b in $.browser) if(b=='msie'){parameters=encodeURI(parameters)+"&msie=1";};
	$.ajax({
		type:'post',
		url:'/rchlw/function/unitedLogin!registerUser',
		async:false,
		data:parameters,
		success:function (data){
			if(data=="success"){
				//注册成功，绑定用户
				$.ajax({
				type:'get',
				url:'/rchlw/function/unitedLogin!userBindInfo',
				async:false,
				error:function(data){alert("绑定用户出现异常");},
				success:function(data){
					if(data=="success"){
						window.location.href='/rchlw/index.jsp';
					}else if(data=="yzmwrong"){
						window.location.href='/rchlw/function/user/setNickName_logistics.jsp';
					}else{
						window.location.href=data;
					}
				}
			
				});
			}else if(data=="inforegistered"){
				alert("您的支付宝信息在本站已被注册！");
				window.location.href='/rchlw/function/user/setNickName_logistics.jsp';
			}else if(data=="loginfailed"){
				alert("登录失败,请重新登录！");
				window.location.href='/rchlw/function/user/setNickName_logistics.jsp';
			}else{
				alert("注册用户失败，请重新填写信息！");
				window.location.href='/rchlw/function/user/setNickName_logistics.jsp';
			}
		}
	});
	
}

function setNickName(){
	var nickname = $("#nickname").val();
	var parameters ="nickname="+nickname+"&isIe="+decodeURI(EncodeUtf8("中"));
		for(b in $.browser) if(b=='msie'){parameters=encodeURI(parameters)+"&msie=1";};
	$.ajax({
		type:'post',
		url:'/rchlw/function/tuserinfoAction!appsetNickName',
		async:false,
		data:parameters,//参数
		success:function (data){
			if(data=="success")
				window.location.href="/rchlw/index.jsp";
		}
	});

}
//------------------------- register.js开始---------------------

//登录验证
function loginFormValidator(){
	$.formValidator.initConfig({
		formid:"userLoginForm",
		onError:function(){
			alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));
			return false;
		}
	});
	
	//用户名验证
	$("#username").formValidator({
		onshow : decodeURI(EncodeUtf8("请输入邮箱或手机号！")),
		onfocus : decodeURI(EncodeUtf8("请输入你的用户名，不可为空！")),
		oncorrect : decodeURI(EncodeUtf8("该用户名格式正确。"))
	}).regexValidator({
		regexp : "(^(13[0-9]|15[0-9]|18[0-9])\\d{8})|(^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?))$",
		onerror : decodeURI(EncodeUtf8("你输入的用户名格式不正确！"))
		
	});

	//密码验证
	$("#pwd").formValidator({
		onshow : decodeURI(EncodeUtf8("请输入密码！")),
		onfocus : decodeURI(EncodeUtf8("密码不能为空，密码长度 6- 16位。")),
		oncorrect : decodeURI(EncodeUtf8("密码合法。"))
	}).inputValidator({
			min : 6,
			max : 16,
			empty : {
				leftempty : false,
				rightempty : false,
				emptyerror : decodeURI(EncodeUtf8("密码两边不能有空符号！"))
			},
			onerror :decodeURI(EncodeUtf8("密码长度范围为6-16。"))
		}).regexValidator({
			regexp : "^[a-z0-9_]+$",
			onerror : decodeURI(EncodeUtf8("密码只由小写英文字母、阿拉伯数字、下划线混合。"))
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
		oncorrect : decodeURI(EncodeUtf8("该用户名格式正确！"))
	}).regexValidator({
		regexp : "^[a-z]{1}[a-z0-9_]{3,20}$",
		onerror : decodeURI(EncodeUtf8("你输入的真实姓名格式不正确！"))
		
	});
	
	//身份证验证
	$("#userID").formValidator({
		onshow : decodeURI(EncodeUtf8("领奖取现的重要凭证，请认真填写，或在以后完善信息！")),
		onfocus : decodeURI(EncodeUtf8("输入 15或 18位的身份证。")) ,
		oncorrect : decodeURI(EncodeUtf8("输入正确。"))
	}).functionValidator({
		fun : isCardID
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
//验证用户名
function checkUsername(){
	var username = $("#username").val();
	//var userflage =0;
	if(username.indexOf("@")==-1){
		var telePattern=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
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
	//var username = $("#username").val();
	//var passflage = 0;
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
		openAlert(decodeURI(EncodeUtf8("请输入正确的用户名！")));
		$("#rank_id").css("display","");
		$("#rank_value").val("1"); 
		return false;
	};
	var passOk = checkPWD();
	if(!passOk){
		openAlert(decodeURI(EncodeUtf8("请输入正确的密码！")));
		$("#rank_id").css("display","");
		$("#rank_value").val("1"); 
		return false;
	};
	var yzOk = checkYZ();
	if(!yzOk){
		openAlert(decodeURI(EncodeUtf8("请输入正确的验证码！")));
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
		var params=$('#userLoginForm').serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
		// 发送请求
		$.ajax({
			url	: '/rchlw/function/tuserinfoAction!loginForm',
			type:"POST",//数据发送方式
			data:params,//参数
			dataType:'html',//接受数据格式
			success:function(data){

					//此处判断跳转的的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
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

//----------------------用户登录---------------------------------
//pageType目前分为0首页、1投注页、2其他页3种，根据三种情况可能对当前页面进行用户数据的初始化
function loginAjax(pageType,formid){
	//登录表单验证插件
	//loginFormValidator();
	// 验证输入的用户名、密码是否正确
	var params=$('#'+formid).serialize(); //这里直接就序列化了表单里面的值；直接获取到表单元素的值   
	// 发送请求
	$.ajax({
		url	: '/rchlw/function/tuserinfoAction!loginForm',
		type:"POST",//数据发送方式
		data:params,//参数
		dataType:'html',//接受数据格式
		success:function(data){				
				//此处判断跳转的的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
				if(data.indexOf("{success}")==-1){
					if(pageType==0){
						openAlert(decodeURI(EncodeUtf8(data)));
					}else{
						$("#msg").html(data);
						$("#msg").css("display","");
						$("#rank_id").css("display","");
						$("#rank_value").val("1");
						change("magLogin");
						$("#pwd").unbind("onKeyDown");
					}
				}else{
						if(data.indexOf("{success}")!=-1 && data.indexOf("{nickname}") != -1){
							window.location.href="/rchlw/function/user/ruyicai_setNickName.jsp";
						}
						if(data.indexOf("{success}")>-1 && data.indexOf("{requrl}") > -1&&!(window.location.href.split("com")[1]==$("#reqUrl").val())){
							window.location.href=$("#reqUrl").val();
						}
						totalLotteryInvest=parseInt($("#lab_Num").html());
						totalMoney = Number($("#current_money").html());//记录当前选号后的投注所需金额
						if($("#lotNo").length>0){
						touzhuInitStatic();//对页面做用户登录状态初始化
						}
						//还原初始化之前用户的投注金额，并计算当前用户余额减去投注金额的剩余金额
						var a = parseFloat(touzhu_balance - totalMoney);
						$("#current_money").html(totalMoney.toFixed());
						if(a<0){
							$("#final_money").html("0");
						}else{
						  $("#final_money").html(a.toFixed());
						}
						//初始化最新开奖页面
						if($("#zuijingc").length>0){
							reHtml(46,'','false','zuijingc');
						}
						$("#userDivDis").css("diplay","block");
						$("#userDivNone").css("diplay","none");
						topLogin();
						indexRight();
						if(pageType==1){
							loginShow();
						}
						//获取当前请求的地址若为频道页面时不请求
						if($("#lotNo").length<=0){
							window.location.reload(decodeURIComponent($("#reqUrl").val()));
						}
					
				}
			}		
	});
}

//修改密码页面的显示强弱的函数
 function passStrong(){
	 var num = new RegExp('[0-9]');
	 var pinyin = new RegExp('[A-Za-z]');
	 var teshu = new RegExp('[_]');
	 var tiao = '';
	 var countT = 0;
	 
	 var pwd =$("#newpassWord").val();
	 if(pwd!=null){
	 	if(num.test(pwd)||pinyin.test(pwd)){
		 $("#showStrong").text(decodeURI(EncodeUtf8("弱")));
		 countT = countT + 3;
		 	if(num.test(pwd)&&pinyin.test(pwd)){
		 		$("#showStrong").text(decodeURI(EncodeUtf8("中")));
				countT = countT + 3;
		 			if(teshu.test(pwd)){
		 				$("#showStrong").text(decodeURI(EncodeUtf8("强")));
						countT = countT + 4;
			 			}
			 	}
		 }
		 
	for ( var i = 0; i < 10; i++) {
		if (i < countT) {
			tiao = tiao + '<li class="ziliao_hong">&nbsp;</li>';
		} else {
			tiao = tiao + '<li class="ziliao_hui">&nbsp;</li>';
		}
		$("#tiao").html(tiao);
	}
		 
	}else{
			 $("#showStrong").text("");
			 $("#tiao").html('<li class="re_pass_hui">&nbsp;</li>');
			 }


 }

	//打开邮箱内的链接
function openEmail(url){

    window.location.href="http://"+url;
}
//找回密码步骤验证，没有则进入默认的页面
 /**暂未用*/
 function checkLogin(url){
 
  if($("#username").val()==""||$("#username").val()==null){
	  openAlert(decodeURI(EncodeUtf8('操作非法！请按照正常的流程操作！')));
	  window.location.href="/rchlw/function/rules/findPwd_new.jsp?"+url;
  }
 }


//联合登录页面的密码强弱的函数

function passStrength(){
	var num = new RegExp('[0-9]');
	var pinyin = new RegExp('[A-Za-z]');
	var teshu = new RegExp('[_]');
	var password =$("#password").val();
	if(password!=null || !password==""){
	if(num.test(password)||pinyin.test(password)){
	$("#tips_data").text("弱");
	$("#line").html('<ul><li>&#160;</li><li>&#160;</li></ul>');
	if(num.test(password)&&pinyin.test(password)){
	$("#tips_data").text("中");
	$("#line").html('<ul><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li></ul>');
		if(teshu.test(password)){
			$("#tips_data").text("强");
			$("#line").html(
		'<ul><li>&#160;</li><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li>'+
		'<li>&#160;</li><li>&#160;</li></ul>');
			}
	}
	}
	}
}
 
 function phoneBandCheck(){
	 var mobile=$("#userMobile").val();
	 if(pageFlashNum==0){
			pageFlashNum++;
	$.ajax({
		url : '/rchlw/user/tuserinfoAction!phoneBandSendMessage?usermobile='+mobile,
		type:"POST",//数据发送方式
		dataType:'html',//接受数据格式
		success:function(data){
			if(data=='error'){
				$("#phoneBandMsg").text(decodeURI(EncodeUtf8("抱歉 ！每天一个手机号只发送3次短信，已经向该手机号发送3次短信！")));
				$("#phoneBandMsg").css("color" , "red");
				$("#accept").hide();
			}
		}
		});
	 }
 }
 /*--------------------用户积分使用--------------------------- */
 function getUserScore(divid){
	$.ajax({
		url : '/rchlw/user/tuserinfoAction!getUserScore',
		type:"POST",//数据发送方式
		async:false,
		dataType:'json',
		success:function(data){
			$("#"+divid).html(data.score);
		}
		});
 }
 function checkScore(divid){
		var score=$("#"+divid).val();
		var re = /^[\d]+$/;
		if (!(score=="")&&!(re.test(score))) {
			openAlert(decodeURI(EncodeUtf8("请输入整数！")));
			$("#"+divid).val("");
			$("#"+divid).focus();
			return false;
		}else if(parseInt(score)%500!=0){
			openAlert(decodeURI(EncodeUtf8("请输入500的倍数！")));
			$("#"+divid).val("");
			$("#"+divid).focus();
			return false;
		}else{
			return true;
		}
	 }
 function makescoreToM(divid){
	 if(!checkScore("socoreNum")){
		 return false;
	 }
	 var parameters ="scoreNum="+$("#"+divid).val();
		$.ajax({
			url : '/rchlw/user/tuserinfoAction!transScore2Money',
			type:"POST",//数据发送方式
			data: parameters,
			async: false,
			//参数
			dataType: 'text',
			success:function(data){
				openAlert(decodeURI(EncodeUtf8(data)));
				//getUserScore("scores");
				$("#"+divid).val("");
			}
			});
	 }
