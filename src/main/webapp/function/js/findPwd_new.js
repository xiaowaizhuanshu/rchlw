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

//===========================找回密码js=====================================
var basepath = "/rchlw";//项目地址
var pwdArray=new Array();
pwdArray[0]= basepath + "/function/user/findPassword_sendMessageByEmail_new.jsp";//找回密码邮箱发送验证码
pwdArray[1]= basepath + "/function/user/findPassword_sendMessageByphone_new.jsp";//找回密码手机发送验证码
pwdArray[2]= basepath + "/function/user/findPassword_resetPasswordByPhone.jsp";//找回密码-重置密码
pwdArray[3]= basepath + "/function/user/findPassword_findSuccess_new.jsp";//找回密码成功页面

//获取URL地址中的参数
function GetQueryString(name){ 
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
var r = window.location.search.substr(1).match(reg); 
if (r!=null) return unescape(r[2]); return null; 
}
function reHtml_common(key,parameters,loading,divId,arry,defualtKey){
	var defaultArray = new Array(); //定义默认的数组
	var defaultkey = '23'; //定义默认的key 
	if(arry == '' || arry == null){
		defaultArray = pwdArray; //给默认数组赋值
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
		url:defaultArray[key],
		type:"POST",
		data:parameters,
		dataType:'html',
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
//根据id获取焦点
function focuns(id){
	if($("#"+id).val()==""||$("#"+id).val()==null){
	   $("#"+id).focus();
	}
} 
//更改验证码头部验证码加载
function change(mag){
	var d=new Date();
	var imageUrl = "/rchlw/function/common/image.jsp?id="+d.getDate()+Math.random();
	$("#"+mag).attr('src',imageUrl);
}
//统一提示方法
function openAlert(msg,id){
	$("#AlertMsg").html(msg);
	loginShow(id,false);
	//loginShow("Shouye_Alert",false);
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
//*******************************************
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

//***************************************************
//增加对号图片
	function addRightImages(id,textid){
		$("#"+id).children().remove();
		var node = $("#"+id);
		var img = $(node>'img');
		if(img.length<=0){
			$("#"+id).append("<img src='/rchlw/function/images/lvduigou.gif'/>");
			$("#"+textid).text("");
		}
	}
	//增加X号图片及文字描述
	function addWrongImages(valid,id,textid,character){
		$("#"+id).children().remove();
		var node = $("#"+id);
		var img = $(node>'img');
		if(img.length<=0){
			$("#"+id).append("<img  src='/rchlw/function/images/icon_chahao.gif'/>");
			$("#"+textid).text(character);
			//$("#"+valid).val("");
			//$("#"+valid).focus();
			return false;
		}
	}
//***************************************************
//查询用户名是否存在
var checkname = 0 ;
function checkUsername(){
	var inputname = $("#username").val();
	if(inputname=="" || inputname=="undefined"){
		addWrongImages("username","usernameImage","usernameTip","用户名不能不空！");
		checkname = 0 ;
		return false;
	}
	if(Trim(inputname)!=inputname){
		addWrongImages("username","usernameImage","usernameTip","用户名不可输入空！");
		checkname = 0 ;
		return false;
	}
	var para = "username="+inputname+"&isIe=中文";
	for(b in $.browser) if(b=='msie'){para=para+"&msie=1";};
	$.ajax({
		url:'/rchlw/function/tuserinfoAction!queryUserName',
		type:'POST',
		data:para,
		async: false,
		dataType:'text',
		error:function(data){alert("查询用户名失败！");addWrongImages("username","usernameImage","usernameTip","查询用户名失败！");return false;},
		success:function(data){
			if(data=="0"){
				addWrongImages("username","usernameImage","usernameTip","用户名不存在，请核实用户名！");
				checkname = 0 ;
				return false;
			}else if(data=="1"){
				addRightImages("usernameImage","usernameTip");
				checkname = 1;
				return true;
			}else{
				if(data==""){data="用户名查询失败！";};
				addWrongImages("username","usernameImage","usernameTip",data);
				checkname = 0 ;
				return false;
			}
		}
	});
	
}
var checkemail = 0;
function checkFindMethod_Email(){
	var radioOne = $("#radioOne").attr("checked");
	if(radioOne=='checked'){
		var email = $("#email").val();
		 var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		if(reg.test(email)){
			//传到action中比对email
			$.ajax({
				url:'/rchlw/function/tuserinfoAction!checkUserInfo?param='+email,
				type:'POST',
				async: false,
				dataType:'text',
				success:function(data){
					if(data=="1"){
						addRightImages("emailImage","emailTip");
						checkemail = 1;
						return true;
					}else if(data=="0"){
						addWrongImages('email','emailImage','emailTip','邮箱与绑定的邮箱不一致！');
						checkemail = 0;
						return false;
					}else{
						if(data==""){data="查询绑定邮箱失败！";};
						addWrongImages('email','emailImage','emailTip',data);
						checkemail = 0;
						return false;
					}
				}
			});
			
			
		}else{
			addWrongImages('email','emailImage','emailTip','邮箱格式错误！');
			checkemail = 0;
			return false;
		}
		
	}else{
		openAlert("请填写对应选项的内容！","Shouye_Alert");
		checkemail = 0;
		return false;
	}

}

var checkphone = 0 ;
function checkFindMethod_phone(){
	var radiotwo = $("#radioTwo").attr("checked");	
	if(radiotwo=='checked'){
		var mobile = $("#mobile").val();
		 var reg = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
		if(reg.test(mobile)){
			//传到action中比对mobile
			$.ajax({
				url:'/rchlw/function/tuserinfoAction!checkUserInfo?param='+mobile,
				type:'POST',
				async: false,
				dataType:'text',
				success:function(data){
					if(data=='1'){
						addRightImages('mobileImage','mobileTip');
						checkphone = 1 ;
						return true;
					}else if(data=='0'){
						addWrongImages('mobile','mobileImage','mobileTip','手机号码与绑定的手机号码不一致！');
						checkphone = 0 ;
						return false;
					}else{
						if(data==""){data="查询绑定手机"};
						addWrongImages('mobile','mobileImage','mobileTip',data);
						checkphone = 0 ;
						return false;
					}
				}
			});
		}else{
			addWrongImages('mobile','mobileImage','mobilelTip','手机号码输入错误！');
			checkphone = 0 ;
			return false;
		}
		
	}else{
		openAlert("请填写对应选项的内容！","Shouye_Alert");
		checkphone = 0 ;
		return false;
	}
}

function findPwd_next(){
	var yzm = $("#yzm").val();
	if(yzm==""){
		openAlert("请输入验证码！","Shouye_Alert");
		return false;
	}

	if(checkname==1 && (checkemail==1 || checkphone==1)){
		notRepeat("sendMesButton","find_Btn","发送中");
		$.ajax({
			url:'/rchlw/function/tuserinfoAction!sendYZmessage?yzm='+yzm,
			type:'POST',
			dataType:'text',
			success:function(data){
				var flag = data.substring(1,data.length);
				//根据截取到的字符串判断手机号或邮箱的跳转页面
				if(flag == "email"){
					//邮箱发送的页面
					if(data.indexOf("1")>-1){
						reHtml_common('','','','right_text',pwdArray,'0');
					}else{
						openAlert(data,"Shouye_Alert");
						repeat('sendMesButton','下一步');
					}
					
				}else if(flag=="phone"){
					//手机号码验证页面
					if(data.indexOf("1")>-1){
						reHtml_common('','','','right_text',pwdArray,'1');
					}else{
						openAlert(data,"Shouye_Alert");
						repeat('sendMesButton','下一步');
					}
				
				}else{
					openAlert(data,"Shouye_Alert");
					repeat('sendMesButton','下一步');
					return false;
				}
				
			}
		});
	}else{
		openAlert("请根据错误提示修改信息！","Shouye_Alert");
	}

}

//---------------找回密码---验证手机验证码----------
function checkRand(){
	var input_yzm = $("#inputyzm").val();
	if(input_yzm.length!=4){
		addWrongImages("inputyzm","inputyzmImage","inputyzmTip","验证码长度是4位");
		return false;
	}
	if(Trim(input_yzm)!=input_yzm){
		addWrongImages("inputyzm","inputyzmImage","inputyzmTip","验证码不可输入空格");
		return false;
	}
	addRightImages("inputyzmImage","inputyzmTip");
	return true;

}
function tGPhoneCheck(url) {

	if (!checkRand()) {
		return;
	};
	var params=$('#callbackForm').serialize(); 
	$.ajax({
		url	: '/rchlw/function/findtuser2!ryc_checkPhoneRand',
		type:"POST",
		data:params,
		dataType:'text',
		async: false, 
		success:function(data){
			if(data==1){				
				reHtml_common('','','','right_text',pwdArray,url);
			}else{
				openAlert(data,"Shouye_Alert");
			}
		}		
	});
}

//-----------找回密码----通过手机找回---重置密码------------

function checkNewPass(){
	var password = $("#passLogin").val();
	if(password!= Trim(password)){
		addWrongImages('passLogin','passLoginImage','passLoginTip','空格不可做为密码输入！');
		passflag=0;
		return false;
	}
	if(password.length<6 || password.length>16){
		addWrongImages('passLogin','passLoginImage','passLoginTip','密码长度必须是6-16个字符！');
		passflag=0;
		return false;
	}
	
	addRightImages("passLoginImage","passLoginTip");
	passflag=1;
	return true;

}
function checkRealPass(){
	var realpasswprd = $("#realPass").val();
	var password = $("#passLogin").val();
	if(realpasswprd!= Trim(realpasswprd)){
		addWrongImages('realPass','realPassImage','realPassTip','空格不可做为密码输入！');
		return false;
	}
	if(realpasswprd !=password){
		addWrongImages('realPass','realPassImage','realPassTip','两次输入密码不相同。');
		return false;
	}
	addRightImages("realPassImage","realPassTip");
	return true;
}
	//打开邮箱内的链接
function openEmail(url){
	//window.location.href="http://"+url;
	window.open("http://"+url);
}

//注册页面的密码强弱的函数
 function blockPassStrong(){
	 $("#registerPassStrong").css("display","");
	 registerPassStrong();
 }
 
 function registerPassStrong(){
	 var num = new RegExp('[0-9]');
	 var pinyin = new RegExp('[A-Za-z]');
	 var teshu = new RegExp('[_]');
	 var tiao = '';
	 var countT = 0;
	 var i = 0;
	 var color = '';
	 
	 var pwd =$("#passLogin").val();
	 if(pwd!=null || !pwd.equals("")){
	 	if(num.test(pwd)||pinyin.test(pwd)){
		 $("#showStrong").text("弱");
			 color='<li class="ziliao_hong">&#160;</li><li class="ziliao_hong">&#160;</li><li class="ziliao_hong">&#160;</li>';
			 
		 	if(num.test(pwd)&&pinyin.test(pwd)){
		 		$("#showStrong").text("中");
					 color='<li class="ziliao_huang">&#160;</li><li class="ziliao_huang">&#160;</li><li class="ziliao_huang">&#160;</li><li class="ziliao_huang">&#160;</li><li class="ziliao_huang">&#160;</li><li class="ziliao_huang">&#160;</li>';
					 
		 			if(teshu.test(pwd)){
		 				$("#showStrong").text("强");
							 color='<li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li>'+
							 '<li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li><li class="ziliao_lv">&#160;</li>';
							 
			 			}
			 	}
		 	$("#tiao").html(color);
		 }else{
			 $("#showStrong").text("");
			 for(i=0;i<10;i++){
				 color+='<li >&#160;</li>';
			 }
			 $("#tiao").html(color);
		 }		 
	}else{	
		 $("#showStrong").text("");
		 color="";
		 $("#tiao").html(color);
		 }
 }
//------------如意彩找回密码------------重置密码------------
function tGPhoneCheckPwd(url) {

	if(checkNewPass() && checkRealPass()){
		var params=$('#updatePasswordForm').serialize(); 
		$.ajax({
			url	: '/rchlw/function/findtuser2!ryc_resetPwdByPhone',
			type:"POST",
			async:false, 
			data:params,
			dataType:'text',
			 async: false, 
			success:function(data){
				if(data==1){
					reHtml_common('','','','right_text',pwdArray,url);
				}else{
					openAlert(data,"Shouye_Alert");
					window.location.href="/rchlw/function/rules/findPwd_new.jsp";
				}
			}		
		});
	}else{
		openAlert("请根据错误提示修改信息！","Shouye_Alert");
	}
	
}

// ----------找回密码-------通过手机找回---------发送/重新发送验证码------------
 
function getSendMessageAgain(url){
	if($("#count").text()==0){

		$.ajax({
			url : '/rchlw/function/findtuser2!ryc_sengmsgByphone_new',
			type:"POST",//数据发送方式
			dataType:'text',//接受数据格式
			async: false,
			success:function(data){
				if(data.indexOf("phone")<=-1){
					openAlert(data,"Shouye_Alert");
					repeat('findPwdinput');
				}else{
					$("#a1").attr('onclick',oncl);
				}
			}			
		});
	}else{
		openAlert("请等倒计时结束后再点击！","Shouye_Alert");
	}
}
// ---------找回密码------------通过邮件找回---------发送邮件-----------

function getSendEmail(){
	if($("#count").text()==0){
		$.ajax({
			url : '/rchlw/function/findtuser2!ryc_sendMessageByEmail_new',
			type:"POST",
			dataType:'text',
			async: false,
			success:function(data){
				if(data.indexOf("1")<=-1){
					openAlert(data,"Shouye_Alert");
					repeat('findPwdinput');
				}else{
					$("#a1").attr('onclick',oncl);
				}
			}		
		});
	}else{
		openAlert("请等倒计时结束后再点击！","Shouye_Alert");
	}
	
}

//----------如意彩----------找回密码------通过邮箱修改密码----------------
function tGPhoneCheckPwdByEmail(url) {
	if(checkNewPass() && checkRealPass()){
		var params=$('#updatePasswordForm').serialize(); 
		$.ajax({
			url	: '/rchlw/function/findtuser2!ryc_resetPwdByEmail',
			type:"POST",
			async:false, 
			data:params,
			dataType:'text',
			success:function(data){
				if(data==1){ 
					reHtml_common('','','','right_text',pwdArray,url);
				}else{
					openAlert(data,"Shouye_Alert");
					window.location.href="/rchlw/function/rules/findPwd_new.jsp";
				}
			}		
		});
	
	}else{
		openAlert("请根据提示修改密码！","Shouye_Alert");
	}
}