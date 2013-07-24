<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩会员注册，您可以使用邮箱注册</title>
<meta name="keywords" content="会员注册，邮箱注册" />
<meta name="description" content="博雅彩会员会员注册，您可以使用邮箱注册，让您购彩更快乐！" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" rel="stylesheet" href="<%=request.getContextPath() %>/function/css/validator.css"></link>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/ruserAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/new_formValidator.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/register_login.js"></script>
<script type="text/javascript">
$(function(){
	focuns("email");
	change("magPassRegister");
	$.formValidator.initConfig({formid:"userEmailRegisterForm",onError:function(){alert("校验没有通过，具体错误请看错误提示。");}});
	 	var emails = $("#email").val();
		var nicknames = $("#nickname").val();
		
		if($("#email").length>0){
			//电子邮箱验证
			$("#email").formValidator({
				onshow : "请输入您常用的邮箱，以便激活账号！",
				onfocus : "邮箱至少6个字符，最多100个字符。",
				oncorrect : "您的邮箱格式输入正确！"
			}).inputValidator({
				min : 6,
				max : 100,
				onerror : "您输入的邮箱长度非法，请确认！"
			}).regexValidator({
				regexp : "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
				onerror : "请输入正确格式的邮箱！"
			}).ajaxValidator({ 
		        type : "post",
		    	url : "/rchlw/function/tuserinfoAction!queryEmail",
		    	datatype : "html",
		    	success : function(html){	
		            if( html == "0" )
		    		{
		                return true;
		    		}
		            else
		    		{
		                return false;
		    		}
		    	},
		    	buttons: $("#emailregister_submit"),
		    	error: function(){
		    		$.formValidator.setTipState(email,"onError","服务器没有返回数据，可能服务器忙，请重试。");
			    	alert("服务器没有返回数据，可能服务器忙，请重试。");
			    	},
		    	onerror : "该邮箱已注册，请换用其他电子邮箱注册或用该电子邮箱<a class='light' href='javaScript:loginRequrl();'>登录</a>。",
		    	onwait : "正在对邮箱进行合法性校验，请稍候..."
		    });}

		//昵称验证
		if($("#nickname").length>0){
		$("#nickname").formValidator({
			onshow : "4-16个字符，一个汉字为两个字符，推荐使用中文会员名。一旦注册会员名不能修改！",
			onfocus : "请输入您的昵称，不可为空！",
			oncorrect : "该昵称格式正确！"
		}).inputValidator({
			min : 4,
			max : 16,
			onerror : "对不起，昵称长度至少为4个，最多16个字符！"
		}).regexValidator({
			regexp : "^(([a-zA-Z0-9]|[0-9]|[\u4e00-\u9fa5]){2,16})+$",
			onerror : "对不起，昵称仅支持数字、英文、汉字组合，请重新输入！"
			
		}).ajaxValidator({ 
	        type : "get",
	    	url : "/rchlw/function/tuserinfoAction!queryNickName",
	    	datatype : "html",
	    	success : function(html){	
	            if( html == "0" )
	    		{
	                return true;
	    		}
	            else
	    		{
	                return false;
	    		}
	    	},
	    	buttons: $("#emailregister_submit"),
	    	error: function(){
				$.formValidator.setTipState(nickname,"onError","服务器没有返回数据，可能服务器忙，请重试。");
				alert("服务器没有返回数据，可能服务器忙，请重试。");
				},
	    	onerror : "该昵称已被使用或者含有敏感词，请您重新设置昵称！",
	    	onwait : "正在对昵称进行合法性校验，请稍候..."
	    });}
		
		
		//密码验证
		if($("#passLogin").length>0){
		$("#passLogin").formValidator({
			onshow : "6-16个字符，可由小写英文字母、阿拉伯数字、下划线混合。",
			onfocus : "密码不能为空，密码长度6-16位。",
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
			onerror : "密码可由小写英文字母、阿拉伯数字、下划线混合。"
		});}
		
		//重复密码验证
		if($("#realPass").length>0){
		$("#realPass").formValidator({
				onshow : "请再次输入密码。",
				onfocus : "两次密码必须一致哦！",
				oncorrect : "密码一致。"
			}).inputValidator({
				min : 6,
				max : 16,
				empty : {
					leftempty : false,
					rightempty : false,
					emptyerror : "密码两边不能有空符号！"
				},
				onerror :"密码长度范围为6-16。"
			}).compareValidator({
				desid : "passLogin",
				operateor : "=",
				onerror : "两次输入密码不相同。"
			});}
	 }
	 );
 </script>
</head>
<body>
<jsp:include page="/function/rules/simple_top.jsp"></jsp:include>
<div class="RegisterBody" id="right_text">
	<div class="RegistePannel">
		<div class="RegistePannelHead RegistePannelHead_right">
			<h3>用户注册</h3>
		</div>
		<div class="RegistePannelBody">
			<div class="space20">&#160;</div>
			<ol class="RegisterProcessBanner RegisterProcessFirst "><li>1. 填写会员信息</li><li>2. 输入验证码</li><li>3. 注册成功</li></ol>
			<form name="userEmailRegisterForm" id="userEmailRegisterForm" action="#" method="post">
			<table class="RegistePannelTable RuyikaRegisterBox">
				<tr><th>电子邮箱：</th><th colspan="2"><input name="tuserinfo.USERNAME" id="email"  type="text" onfocus="registerFocus(1);" class="registerinput" /></th><td><span id="emailTip"></span></td></tr>
				<tr><th style="line-height:15px;">&nbsp;</th><td colspan="3" style="line-height:15px;">如果您没有邮箱可以<a style='color:#01529D;' onmouseover='HoverOver($(this))' onmouseout='HoverOut($(this))' href='http://users.ruyicai.com/register/register_new.jsp'>使用手机号注册</a>！<br />&nbsp;</td></tr>
				
				<tr><th>昵　　称：</th><th colspan="2"><input name="tuserinfo.NICKNAME" id="nickname" type="text" onfocus="registerFocus(2);" class="registerinput" /></th><td><span id="nicknameTip" class="nichengtsh"></span></td></tr>
				<tr><th>登录密码：</th><th colspan="2"><input name="tuserinfo.PASSWORD" id="passLogin" type="password"  onfocus="registerFocus(3);" class="registerinput" /></th><td><span id="passLoginTip"></span></td></tr>
				<tr><th>确认密码：</th><th colspan="2"><input name="realPass" id="realPass" type="password" onfocus="registerFocus(4);" class="registerinput" /></th><td><span id="realPassTip"></span></td></tr>
				<tr><th width="70">验 证 码：</th><th width="110"><input name="passRegister" id="passRegister"  type="text" onfocus="registerFocus(8);" onKeyDown="if (event.keyCode==13)phoneRegister_jumpUrl('key=3');" class="authinput" /></th><td width="90"><img src="" id="magPassRegister"/></td><td><a href="javascript:change('magPassRegister');" title="刷新"><span class="blue1">刷新</span></a></td></tr>
				<tr><th>&#160;</th><td colspan="3"><input type="checkbox" checked="checked" id="registerXieyi" />我已阅读并同意<a href="<%=request.getContextPath() %>/function/rules/userProtocol.jsp" title="用户服务协议"><font class="blue">《用户服务协议》</font></a></td></tr>
				<tr><th>&#160;</th><td colspan="3"><input type="button" class="SubmitForSure" id="emailregister_submit" onclick="phoneRegister_jumpUrl('key=3')"/></td></tr>
				
			</table>
			</form>
	
		</div>
	</div>
</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
 <input type="hidden" value="" name="tishi" id="tishi">
 <div id="login_pop" class="WindowCenter" style="display:none;" ></div>
<div class="BodyBG">&#160;</div>
<div class="AlertWindow KillNumberAlert WindowCenter" id="Shouye_Alert" style="display:none">
	<table>
		<tr>
			<th class="ConnerLeft">&#160;</th>
			<th class="WindowTittle"><h3>温馨提示</h3><span class="BaseBtn" onclick='loginShow("Shouye_Alert",false);'>&#160;</span></th>
			<th class="ConnerRight">&#160;</th>
		</tr>
	</table>
	<div class="OutsideBorder">
		<div class="InsideBorder">
			<table class="KillNumberAlertTable">
					<tr>
						<th width="80"></th><td id="AlertMsg"></td>
					</tr>
					<tr>
						<td colspan="2">&#160;</td>
					</tr>
					<tr>
						<td colspan="2">&#160;</td>
					</tr>
					<tr>
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn"  onclick='loginShow("Shouye_Alert",false);'/></th>
					</tr>
			</table>
		</div>
	</div>
</div>
<div style="display: none">
<div id="login_pop" class="WindowCenter" style="display:none;" ></div>
<div class="BodyBG">&#160;</div>
<div class="AlertWindow KillNumberAlert WindowCenter" id="Shouye_Alert" style="display:none">
	<table>
		<tr>
			<th class="ConnerLeft">&#160;</th>
			<th class="WindowTittle"><h3>温馨提示</h3><span class="BaseBtn" onclick='loginShow("Shouye_Alert",false);'>&#160;</span></th>
			<th class="ConnerRight">&#160;</th>
		</tr>
	</table>
	<div class="OutsideBorder">
		<div class="InsideBorder">
			<table class="KillNumberAlertTable">
					<tr>
						<th width="80"></th><td id="AlertMsg"></td>
					</tr>
					<tr>
						<td colspan="2">&#160;</td>
					</tr>
					<tr>
						<td colspan="2">&#160;</td>
					</tr>
					<tr>
						<th colspan="2"><input type="button" value="确　定" class="BaseBtn"  onclick='loginShow("Shouye_Alert",false);'/></th>
					</tr>
			</table>

		</div>
	</div>
</div>
<script type="text/javascript">
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F8333ff4357591825f74461a26584cc2f' type='text/javascript'%3E%3C/script%3E"));
</script>
</div>