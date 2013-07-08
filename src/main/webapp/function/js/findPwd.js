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
pwdArray[0]= basepath + "/function/user/findPassword_findByphone.jsp";//找回密码选择找回方式
pwdArray[1]= basepath + "/function/user/findPassword_sendMessageByphone.jsp";//找回密码手机发送验证码
pwdArray[2]= basepath + "/function/user/findPassword_resetPassword.jsp";//找回密码-重置密码
pwdArray[3]= basepath + "/function/user/findPassword_findSuccess.jsp";//找回密码成功页面
pwdArray[4]= basepath + "/function/user/findPassword_sendMessageByEmail.jsp";//找回密码邮箱发送验证码

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

//弹出一个AJAX的对话框，name为这个弹出框指定一个名字，用于对弹出框控制，width为弹出框指定宽度，url指定要弹出的页面的地址
function openAjaxPopup(name,width,url) {
	var PopUpWindow=$("#"+name);
	var PopUpWindowTop=(document.documentElement.clientHeight-PopUpWindow.height())/2+document.documentElement.scrollTop;
	var PopUpWindowLeft=(document.documentElement.clientWidth-PopUpWindow.width())/2+document.documentElement.scrollLeft;
	$(PopUpWindow).css({margin:0,padding:0,top:PopUpWindowTop+"px",left:PopUpWindowLeft+"px"});
	$.openPopupLayer({name: name,width: PopUpWindowLeft,url: url});
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
function openAlert(msg){
	$("#AlertMsg").html(msg);
	loginShow("Shouye_Alert",false);
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
function  findpwdValidator(){
	 $.formValidator.initConfig({formid:"findPwdForm",onError:function(){alert("校验没有通过，具体错误请看错误提示。");}});

	 if($("#inputMobile").val().indexOf("@")==-1){
	 	 $("#inputMobile").formValidator({
	 		}).regexValidator({
	 			regexp : "mobile",
	 			datatype : "enum",
	 			onerror : "对不起，输入的用户名格式非法！"
	 			
	 		});
	 }else{
	 	$("#inputMobile").formValidator({
	 	}).regexValidator({
	 		regexp : "email",
	 		datatype : "enum",
	 		onerror :"对不起，输入的用户名格式非法！"
	 		
	 	});
	 	 
	 }
}

//找回密码跳转链接
function jumpUrl(url){
	var params=$('#findPwdForm').serialize(); 
	$.ajax({
		url	: '/rchlw/function/findtuser2!ryc_FindPwdWays',
		type:"POST",
		data:params,
		dataType:'text',
		//async: false, 
		success:function(json){
			if(json =="1"){
				reHtml_common('','','','body',pwdArray,url);
			}
			else{
				openAlert(json);
				change('findimg');
			}
		}
	});	
}

//------用户找回密码时选择的找回密码的方式-----
function tGFindPwd(url) {
	if(url.indexOf('=')!=-1){
		url = url.substring(4,5);
	};
	//判断用户使用哪种方式进行找回密码
	if($("#phone").attr("checked")=='checked'){
		//判断用户是否绑定手机
	   if($("#phoneBind1").val()=="1"){
			getSendMessageAgain(url);
	   }else{
			openAlert('您未绑定手机号，请选择其他方式找回密码！');
	   }
	}else if($("#email").attr("checked")=='checked'){
		//判断用户是否绑定邮箱
		 if($("#emailBind1").val()=="1"){
			getSendEmail(url);
		 }else{
			openAlert('您未绑定邮箱，请选择其他方式找回密码！');
		 }
	}

}
//---------------找回密码---验证手机验证码----------
function checkRand(){
	$.formValidator.initConfig({
		formid:"callbackForm",
		onError:function(){
	openAjaxPopup("openAlert",1000,"/rchlw/function/rules/alert.html?tishi='校验没有通过，具体错误请看错误提示。'");
		}
	});
	$("#passRegister").formValidator({
		min : 4,
		max : 4,
		onshow : "请输入您手机收到的4位数字验证码。",
		onfocus : "必须和您手机收到的保持一致！",
		oncorrect : "验证码一致。"
	}).inputValidator({
		min : 4,
		max : 4,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "验证码两边不能有空符号！"
		},
		onerror : "验证码不能为空，请确认！"
	});
}
function tGPhoneCheck(url) {
	if(url.indexOf('=')!=-1){
		url = url.substring(4,5);
	};
	checkRand();
	var regValid = jQuery.formValidator.pageIsValid('1');
	if (!regValid) {
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
			//此处判断跳转的的jsp中显示的数据是否有{success}字样，如果有的话，则认为是成功的
			if(data==1){				
				reHtml_common('','','','body',pwdArray,url);
			}else{
				openAlert(data);
			}
		}		
	});
}

//-----------找回密码----通过手机找回---重置密码------------

function checkPwd(){
$.formValidator.initConfig({formid:"updatePasswordForm",onError:function(){
	openAjaxPopup("openAlert",1000,"/rchlw/function/rules/alert.html?tishi='校验没有通过，具体错误请看错误提示。'");
	//alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示")));
	}});
	$("#passLogin").formValidator( {
		onshow : "请输入密码！",
		onfocus : "6-16个字符，可由小写英文字母、阿拉伯数字、下划线混合。",
		oncorrect : "密码合法。"
	}).inputValidator( {
		min : 6,
		max : 16,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "密码两边不能有空符号！"
		},
		onerror : "密码长度不合法，请确认！"
	});
	$("#real_pass").formValidator( {
		min : 6,
		max : 16,
		onshow : "请输入重复密码！",
		onfocus : "两次密码必须一致哦！",
		oncorrect : "密码一致。"
	}).inputValidator( {
		min : 6,
		max : 16,
		empty : {
			leftempty : false,
			rightempty : false,
			emptyerror : "重复密码两边不能有空符号！"
		},
		onerror : "重复密码长度不合法，请确认！"
	}).compareValidator( {
		desid : "passLogin",
		operateor : "=",
		onerror : "2次密码不一致，请确认！"
	});	


}
	//打开邮箱内的链接
function openEmail(url){
	window.location.href="http://"+url;
}

//注册页面的密码强弱的函数
 function blockPassStrong(){
	 $("#registerPassStrong").css("display","block");
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
	 var nocolor = '';
	 
	 var pwd =$("#passLogin").val();
	 if(pwd!=null || !pwd.equals("")){
	 	if(num.test(pwd)||pinyin.test(pwd)){
		 $("#showStrong").text("弱");
			 color='<li class="ziliao_hong">&nbsp;</li><li class="ziliao_hong">&nbsp;</li><li class="ziliao_hong">&nbsp;</li>';
			 nocolor='<li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li>'+
			 '<li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li>';
		 	if(num.test(pwd)&&pinyin.test(pwd)){
		 		$("#showStrong").text("中");
					 color='<li class="ziliao_huang">&nbsp;</li><li class="ziliao_huang">&nbsp;</li><li class="ziliao_huang">&nbsp;</li><li class="ziliao_huang">&nbsp;</li><li class="ziliao_huang">&nbsp;</li><li class="ziliao_huang">&nbsp;</li>';
					 nocolor='<li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li><li class="ziliao_bai">&nbsp;</li>';
		 			if(teshu.test(pwd)){
		 				$("#showStrong").text("强");
							 color='<li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li>'+
							 '<li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li><li class="ziliao_lv">&nbsp;</li>';
							 nocolor='';
			 			}
			 	}
		 	$("#tiao").html(color+nocolor);
		 }else{
			 $("#showStrong").text("");
			 for(i=0;i<10;i++){
				 color+='<li class="ziliao_bai">&nbsp;</li>';
			 }
			 $("#tiao").html(color);
		 }		 
	}else{	
		 $("#showStrong").text("");
		 for(i=0;i<10;i++){
			 color+='<li class="ziliao_bai">&nbsp;</li>';
		 }
		 $("#tiao").html(color);
		 }
 }
//------------如意彩找回密码------------重置密码------------
function tGPhoneCheckPwd(url) {
	if(url.indexOf('=')!=-1){
		url = url.substring(4,5);
	};
	checkPwd();
	var regValid = jQuery.formValidator.pageIsValid('1');
	if (!regValid) {
		return;
	}
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
				reHtml_common('','','','body',pwdArray,url);
			}else{
				openAlert(data);
				window.location.href="/rchlw/function/rules/findPwd.html";
			}
		}		
	});
	
}

// ----------找回密码-------通过手机找回---------发送/重新发送验证码------------
 
function getSendMessageAgain(url){
	if(url.indexOf('=')!=-1){
		url = url.substring(4,5);
	};
	notRepeat('findPwdinput','givesend_bottom','');
	$.ajax({
		url : '/rchlw/function/findtuser2!ryc_sengmsgByphone',
		type:"POST",//数据发送方式
		dataType:'text',//接受数据格式
		async: false,
		success:function(data){
			if(data==1){	
				reHtml_common('','','','body',pwdArray,url);
			}else{
				openAlert(data);
				repeat('findPwdinput');
			}
		}			
	});
}
// ---------找回密码------------通过邮件找回---------发送邮件-----------

function getSendEmail(){
	notRepeat('findPwdinput','givesend_bottom','');
	$.ajax({
		url : '/rchlw/function/findtuser2!ryc_sendMessageByEmail',
		type:"POST",
		dataType:'text',
		async: false,
		success:function(data){
			if(data==1){
				reHtml_common('','','','body',pwdArray,'4');
			}else{
				openAlert(data);
				repeat('findPwdinput');
			}
		}		
	});
}

//----------如意彩----------找回密码------通过邮箱修改密码----------------
function tGPhoneCheckPwdByEmail(url) {
	if(url.indexOf('=')!=-1){
		url = url.substring(4,5);
	};
	checkPwd();
	var regValid = jQuery.formValidator.pageIsValid('1');
	if (!regValid) {
		return;
	}
	var params=$('#updatePasswordForm').serialize(); 
	$.ajax({
		url	: '/rchlw/function/findtuser2!ryc_resetPwdByEmail',
		type:"POST",
		async:false, 
		data:params,
		dataType:'text',
		success:function(data){
			if(data==1){ 
				reHtml_common('','','','successId',pwdArray,url);
			}else{
				openAlert(data);
				window.location.href="/rchlw/function/rules/findPwd.html";
			}
		}		
	});
}