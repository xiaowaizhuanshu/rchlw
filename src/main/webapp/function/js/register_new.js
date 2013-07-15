var basepath = "/rchlw";//项目地址
var pageArrayNum = 0; 
var regArray=new Array();
regArray[0]= "/rchlw/function/user/register_userInfo.jsp";
regArray[1]= "/rchlw/function/user/register_Success.jsp"; 

/*******************offen.js***********************
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
*************************************************/
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

// 投注时查询余额
	function getBalance(){
		$.ajax({
			type: "POST",
			url: "/rchlw/ajax/selectAll!ajaxFindAccount",
			dataType:'json',
			success: function(json){
        		$("#final_money").html(json.freeze_amout+"");
			 }
		});
	}
  
//如意点卡验证 	^([0-9]{16,21})
/**
  function checkCardNo(){
  	var cardNo = $("#card_id").val();
  	if(cardNo.trim()==""){
  		$("#card_idTip").text("卡号不能为空！");
  		return false;
  	}else if(cardNo.trim().length!=16 ){
  		$("#card_idTip").text("如意卡号格式必须是16位数字。");
  		return false;
  	}else if(cardNo.trim().length==16){
  		var re = /^[\d]+$/;
  		var ret = re.test(cardNo);
  		if(!ret){
  			$("#card_idTip").text("如意卡号格式必须是16位数字。");
  			return false;
  		}
  		$("#card_idTip").text("卡号格式正确。");
  		return true;
  	}
  	$("#card_idTip").text("如意卡号格式必须是16位数字。");
  	return false;
  }

  //博雅彩点卡密码验证
  function checkCardPwd(){
  	var cardpwd = $("#card_pwd").val();
  	if(cardpwd.trim()==""){
  		$("#card_pwdTip").html("密码不能为空！");
  		return false;
  	}else if(cardpwd.trim().length!=6 ){
  		$("#card_pwdTip").html("密码长度范围为6位数字。");
  		return false;
  	}else if(cardpwd.trim().length==6){
  		var re = /^[\d]+$/;
  		var ret = re.test(cardpwd);
  		if(!ret){
  			$("#card_pwdTip").html("密码只由数字组成。");
  			return false;
  		};
  		$("#card_pwdTip").html("密码格式正确。");
  		return true;
  	};
  	$("#card_pwdTip").html("密码长度范围为6位数字。");
  	return false;

  }*/
  //直接加载jsp页面
	function reHtmljsp(key,parameters,loading,divId,bloean){
		for(b in $.browser) if(b=='msie'){parameters=parameters+"&msie=1";}
		$.ajax({
				url:regArray[key],//后台处理程序
				type:"POST",//数据发送方式
				data:parameters,//参数
				dataType:'html',//接受数据格式
				async:bloean,//同步执行还是异步执行
				beforeSend:function(){if(loading!=false){$("#"+divId).html('<img src="/rchlw/function/images/loading.gif"  />');}},		
				success:function(data){					 
					if(divId == "right_text"){
						$("#right_text").html(data.replace("{success}", ""));
					}else{  
						$("#"+divId).html(data);
						$("#right_text").html(data.replace("{success}", ""));
					}		
				}	
			});
	}
	
	//更改验证码头部验证码加载
	function change(mag){
		var d=new Date();
		var imageUrl = "/rchlw/function/common/image.jsp?id="+d.getDate()+Math.random();
		$("#"+mag).attr('src',imageUrl);
	}
	
	//使页面上有值的文本框的内容选中
	function inputSelect (){		
		$("input[type ='text']").each(function() {
			$(this).focus(function() {
				$(this).select();
				});
		});			
	}
	
	//id  要改变样式的id   rclass 要替换的样式   aclass要添加的样式
	//改变按钮样式
	var repeatId = "";
	function notRepeat(id,aclass,world){
		$("#"+id).attr("disabled", true);
		var rclass = $("#"+id).attr("class");
		repeatId = rclass;
		$("#"+id).removeClass(rclass);
		$("#"+id).addClass(aclass);
		$("#"+id).val(world);
	}
	//还原按钮样式
	function repeat(id,world){
		$("#"+id).attr("disabled",false);
		var rclass = $("#"+id).attr("class");
		$("#"+id).removeClass(rclass);
		$("#"+id).addClass(repeatId);
		$("#"+id).val(world);	
	}

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
//======================提示框begin=============================	
//统一提示方法
function openAlert(msg){
	//$("#tishi").val(msg);
	$("#AlertMsg").html(msg);
	loginShow("Shouye_Alert",false);
}

//根据id获取焦点
function focuns(id){
	if($("#"+id).val()==""||$("#"+id).val()==null){
	   $("#"+id).focus();
	}
} 
//点击首页头部登录让登录层显示
function loginShow(name,isPage){
	// change('mag');
	var PopUpWindow=$("#login_pop");
	if(name){PopUpWindow=$("#"+name);}
	var PopUpBG=$(".BodyBG");
	$(PopUpBG).toggle();
	$(PopUpWindow).toggle();
	if(!isPage){
		WindowCenterNow();
	}
	if(!isPage){
		focuns();
	}
}
function WindowCenterNow() {
	$(".WindowCenter").each(function() {
		if ($(this).css("display") != "none") {
			var PopUpWindowTop = (document.documentElement.clientHeight - $(this).height()) / 2 + document.documentElement.scrollTop + document.body.scrollTop;
			var PopUpWindowLeft = (document.documentElement.clientWidth - $(this).width()) / 2 + document.documentElement.scrollLeft;
			$(this).css({ 'position':'absolute','z-index':'999999','margin':'0','padding':'0','top':PopUpWindowTop + 'px','left':PopUpWindowLeft + 'px'}).stop();
		}
	});
};

//======================提示框end=============================	

  //验证用户名是否可用
  var nameflag=0;
	function checkUserName(){
		var patt=/^(([a-zA-Z0-9_]|[0-9]|[\u4e00-\u9fa5]){2,16})+$/;
		var getusername=$("#username").val();
		if(getusername!=Trim(getusername)){
			addWrongImages('username','usernameImage','usernameTip','用户不支持输入空格，请重新输入！');
			nameflag=0;
			return false;
		}
		if(Length(getusername)<4 || Length(getusername)>16){
			addWrongImages('username','usernameImage','usernameTip','用户名长度至少为4个，最多16个字符！');
			nameflag=0;
			return false;
		}
		if(patt.test(getusername)==false){
			addWrongImages('username','usernameImage','usernameTip','用户名仅支持4-16位字母、汉字、数字、下划线！');
			nameflag=0;
			return false;
		}
		var params = "username="+getusername+"&isIe=中文";
		for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
		$.ajax({
			url:'/rchlw/function/tuserinfoAction!changeUserName',
			type:"POST",
			data:params,
			//async:false,
			dataType:'text',
			error: function(data){
					openAlert("网络出现异常");
					addWrongImages('username','usernameImage','usernameTip','网络出现异常');
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
								addWrongImages('username','usernameImage','usernameTip','网络出现异常');
								nameflag=0;
								return false;},
						success:function(data){
								if(data =="1"){
									addWrongImages('username','usernameImage','usernameTip','用户名已存在，请更换用户名！');
									nameflag=0;
									return false;
									
								}else if(data=='0'){
									addRightImages("usernameImage","usernameTip");
									nameflag=1;
									return true;
								}
					
						}
					});
					
				}else if(data =='1'){   //用户存在
					addWrongImages('username','usernameImage','usernameTip','用户名已存在，请更换用户名！');
					nameflag=0;
					return false;
				}else{
					addWrongImages('username','usernameImage','usernameTip',data);
					nameflag=0;
					return false;
				}
			}		
		});
		

	}

	//验证用户输入的密码
	var passflag=0;
	var realpassflag=0;
	function checkPassWord(){
		var password = $("#password").val();
		if(password!= Trim(password)){
			addWrongImages('password','passwordImage','passwordTip','空格不可做为密码输入！');
			passflag=0;
			realpassflag=0;
			addWrongImages('realPass','realPassImage','realpasswordTip','两次输入密码不相同。');
			return false;
		}
		if(Length(password)<6 || Length(password)>16){
			addWrongImages('password','passwordImage','passwordTip','密码长度必须是6-16个字符！');
			passflag=0;
			realpassflag=0;
			addWrongImages('realPass','realPassImage','realpasswordTip','两次输入密码不相同。');
			return false;
		}

		addRightImages("passwordImage","passwordTip");
		passflag=1;
		//realpassflag=0;
		//addWrongImages('realPass','realPassImage','realpasswordTip','请再次输入密码');
		
		checkRealPass();
		return true;
		
	}
	
	//验证输入的确认密码
	
	function checkRealPass(){
		var realpasswprd = $("#realPass").val();
		var password = $("#password").val();
		if(realpasswprd!= Trim(realpasswprd)){
			addWrongImages('realPass','realPassImage','realpasswordTip','空格不可做为密码输入！');
			realpassflag=0;
			return false;
		}
		if(realpasswprd !=password){
			addWrongImages('realPass','realPassImage','realpasswordTip','两次输入密码不相同。');
			realpassflag=0;
			return false;
		}
		addRightImages("realPassImage","realpasswordTip");
		realpassflag=1;
		return true;
	}
	
//修改密码页面新密码后显示强弱的函数
 
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
	
	function register(){
	
		if ($("#registerXieyi").attr("checked")!='checked') {
			openAlert('您没有同意《博雅彩服务协议》！');
			return;
		}
		notRepeat('phoneregister_submit','ZhuCe_btnhover','提交中'); 
		if(!(nameflag==1 && passflag==1 && realpassflag==1)){
		//if(!(checkPassWord() && checkRealPass() && checkUserName())){
		
			openAlert('您填写的注册信息没能全部通过验证，请根据错误提示修改后再提交。');
			repeat('phoneregister_submit','立即注册');
			change("magPassRegister");
			return ;
		}
		
		var params=$('#userPhoneRegisterForm').serialize();
		$.ajax({
			url	: '/rchlw/function/tuserinfoAction!new_register',
			type:"POST",
			data:params,
			async:false,
			dataType:'text',
			success:function(data){
				if(data =="cerSuccess"){
					getBalance();  
					//需要加跳转到第二个注册页面的地址
					reHtmljsp(0,'',true,'registerbody',false);
					
				}else if(data=="MMXW"){
					addWrongImages('realPass','realPassImage','realpasswordTip','两次输入密码不相同。');
					realpassflag=0;
					openAlert("密码输入有误，请重新输入！");
					repeat('phoneregister_submit','立即注册');
					return ;
				}else{
					openAlert(data);
					repeat('phoneregister_submit','立即注册');
					change("magPassRegister");
					return ;
				}
			}
		});
	}
	//===============================验证用户信息=======================================
	//验证昵称
	var nickflag=1;
	function checknickname(){
		var nickname = $("#nickname").val();
		var username = $("#username").text();
		var patt=/^(([a-zA-Z0-9]|[0-9]|[\u4e00-\u9fa5]){2,16})+$/;
		if(nickname!=nickname){
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
		if(nickname!=username){
			var params = "nickname="+nickname+"&isIe=中文";
			for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
			$.ajax({
				url:'/rchlw/function/tuserinfoAction!queryNickName',
				type:"POST",
				data:params,//参数
				dataType:'json',//接受数据格式
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
		}else{
			addRightImages("nicknameImage","nicknameTip");
			nickflag = 1;
			return true;
		}
		
		
	}
	//验证真实姓名
	var realflag=1;
	function checkName_real(){
	    var nameReal = $("#name").val();
		//var  reg= "`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？  ";//空格也在内
		var patt =/^([\u4e00-\u9fa5]+)[·]?[\u4e00-\u9fa5]+$/;;		
		if(!patt.test(nameReal)){
			addWrongImages('name','nameImage','nameTip','真实姓名只可填写汉字！');
			realflag = 0;
			return false;
		}
		/**if(nameReal.length >0){
			var i=0;
			var j=1;
			for(;j<=nameReal.length;i++,j++){
				if(reg.indexOf(nameReal.substring(i,j))>-1){
					addWrongImages('name','nameImage','nameTip','真实姓名不能包含特殊字符！');
					return false;
				}
			}
		}

		if(nameReal!=nameReal.trim()){
			addWrongImages('name','nameImage','nameTip','真实姓名不可输入空格！');
			return false;
		}*/
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
		if(Trim(cardid)=="" ){
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
		var patt= /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;

		if(!patt.test(tel)){
			addWrongImages('mobile','mobileImage','mobileTip','不是完整的11位手机号或者正确的手机号');
			telflag = 0;
			return false;
		};
		addRightImages("mobileImage","mobileTip");
		telflag = 1;
		return true;
		
		/**$.ajax({
			url:'/rchlw/function/tuserinfoAction!queryMobile?mobile='+Trim(tel),
			type:'POST',
			dataType:'text',
			error:function(){openAlert("网络出现异常");
					addWrongImages('mobile','mobileImage','mobileTip','网络出现异常');
					telflag = 0;
					return false;},
			success:function(data){
					if(data =="1"){
						addWrongImages('mobile','mobileImage','mobileTip','手机号已被绑定！');
						telflag = 0;
						return false;
						
					}else if(data=='0'){
						addRightImages("mobileImage","mobileTip");
						telflag = 1;
						return true;
					}
		
			}
		});*/
		
			
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

	//验证用户填写的用户信息
	function verifyuserinfo(){
		var nickname = Trim($("#nickname").val());
		var name = Trim($("#name").val());
		var cardid = Trim($("#cardid").val());
		var mobile = Trim($("#mobile").val());
		var email = Trim($("#email").val());
		var params ="isIe=中文";
		for(b in $.browser) if(b=='msie'){params=params+"&msie=1";};
		params =params+"&nickname="+nickname+"&name="+name+"&cardid="+cardid+"&tel="+mobile+"&email="+email;
		if(nickname=="" && name=="" && cardid=="" && mobile=="" && email==""){
			openAlert("如若不填写任何信息，请选择“以后再说”");
			return ;
		}else{
			
			if(nickflag==1 && realflag==1 && certid==1 && telflag==1 && emailflag==1){
				notRepeat('registerbutton','ZhuCe_btnhover','验证中');
				$.ajax({
					url	: '/rchlw/function/tuserinfoAction!modifyUserInfo',
					type:"POST",//数据发送方式
					data:params,//参数
					dataType:'text',//接受数据格式
					async: false, 
					error: function(){openAlert("网络异常，修改用户信息失败！");repeat('registerbutton','提交信息');},
					success:function(json){
						if(json=="success"){
							reHtmljsp(1,'',true,'registerbody',false);
						}else if(json=="failed"){
							openAlert("修改用户信息失败！");
							repeat('registerbutton','提交信息');
						}else{
							openAlert(json);
							repeat('registerbutton','提交信息');	
						}
					}
				});
			}else{
				openAlert("请根据提示修改用户信息，如若不想填写，请选择“以后再说”");
				repeat('registerbutton','立即注册');
				return ;
			}
		}
	}
  
