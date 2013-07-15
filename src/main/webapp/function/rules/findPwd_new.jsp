<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩会员找回密码，可通过手机号或邮箱找回密码</title>
<meta http-equiv="keywords" content="博雅彩会员，找回密码，手机号找回密码，邮箱找回密码"/>
<meta http-equiv="description" content="博雅彩会员找回密码功能让您不再为丢失密码而烦恼！"/>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/ruserAll.css" />
<link type="text/css" rel="stylesheet" href="<%=request.getContextPath() %>/function/css/validator.css"></link>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/findPwd_new.js"></script>
<style>
table.FindUserName{ width:447px;}
table.FindUserName thead td{ line-height:30px; font-size:14px; padding-left:20px;}
table.FindUserName tbody td{ line-height:40px; font-size:12px; font-weight:bold; padding-left:20px;}
table.FindUserName tfoot td{ height:30px; font-size:12px; font-weight:bold; padding:0px 20px 25px;}
table.FindUserName tfoot img{ border:none;}
</style>
</head>
<body>
<div class="ZhuCe">
<jsp:include page="/function/rules/new_top.jsp"></jsp:include>
<div class="ZhuCe_body" id="right_text">
	<div class="ZhuCe_titleBg"><span class="ZhuCe_titleLeft">找回密码</span></div>
	<table class="find_PasswordWay">
		<tr>
			<th>您要找回的密码的用户名</th>
			<td colspan="2"><input name="" type="text" class="find_ways" id="username" onblur="checkUsername()"/></td>
			<td><span id="usernameImage"></span><span id="usernameTip">请输入您要找回密的用户名</span></td>
		</tr>
		<tr class="UserNew">
			<th width="200"><input name="methodname" type="radio" value="" id="radioOne" checked="checked" onclick="showUserNew()"/>用电子邮箱找回</th>
			<td colspan="2" width="200"><input name="" type="text" class="find_ways" id="email" onblur="checkFindMethod_Email()"/></td>
			<td width="300"><span id="emailImage"></span><span id="emailTip">请输入您绑定的电子邮箱</span></td>
		</tr>
		<tr class="UserOld">
			<th><input name="methodname" type="radio" value="" id="radioTwo"  onclick="showUserOld()"/>用手机号码找回</th>
			<td colspan="2"><input name="" type="text" class="find_ways" id="mobile" onblur="checkFindMethod_phone()"/></td>
			<td><span id="mobileImage"></span><span id="mobileTip">请输入您绑定的手机号码</span></td>
		</tr>
		<tr>
			<th>验证码</th>
			<td><input name="" type="text" class="find_waysCode" id="yzm"/></td>
			<td><img  id="findimg" src="<%=request.getContextPath() %>/function/common/image.jsp?id=260.48305424745194614" width="60" height="20" /><a href="javaScript:change('findimg');" title="换一张">换一张</a></td>
			<td>&#160;</td>
		</tr>
		<tr>
			<th>&#160;</th>
			<td class="find_waysBtnCoat"><input type="button" class="find_Btn" value="下一步" onclick="findPwd_next()" id="sendMesButton"/></td>
			<td><a href="#" onclick="openAlert('','forgetUserNameAlert')">忘记用户名了</a></td>
			<td>&#160;</td>
			<td>&#160;</td>
		</tr>
	</table>
</div>

<script>
	function showUserOld(){
		$(".UserOld").children().animate({opacity:'1'});
		$(".UserOld input").removeAttr("disabled");
		$(".UserNew").children().animate({opacity:'0.3'});
		$(".UserNew input:text").attr("disabled","disabled");
	};
	function showUserNew(){
		$(".UserOld").children().animate({opacity:'0.3'});
		$(".UserOld input:text").attr("disabled","disabled");
		$(".UserNew").children().animate({opacity:'1'});
		$(".UserNew input").removeAttr("disabled");
	};
	$(function(){showUserNew();});

	function openForgetUserNameAlert(){
		
	}
</script>
<div id="footer">
	<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<input type="hidden" value="" name="tishi" id="tishi"> 
<div id="login_pop" class="WindowCenter" style="display:none;" ></div>
<div class="BodyBG">&#160;</div>
<div class="AlertWindow KillNumberAlert WindowCenter" id="Shouye_Alert" style="display:none">
	<div class="WindowTittle"><h3>温馨提示</h3><span class="Alertclose" onclick='loginShow("Shouye_Alert",false);'>&#160;</span></div>
		<div class="InsideBorder">
			<table class="BalanceTable">
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

<div class="AlertWindow KillNumberAlert WindowCenter" id="forgetUserNameAlert" style="display:none">
	<div class="WindowTittle"><h3>找回用户名</h3><span class="Alertclose" onclick='loginShow("forgetUserNameAlert",false);'>&#160;</span></div>
  <div class="InsideBorder">
  	<table width="100%" cellspacing="0" cellpadding="0" class="FindUserName">
	  <thead>
	  <tr>
		<td colspan="2">您可以通过以下方式找回用户名：</td><td id="AlertMsg"></td>
		</tr>
		</thead>
		<tbody>
	  <tr>
		<td>一、在线客服</td>
		<td>二、客服电话</td>
		<td>三、客服邮箱</td>
	  </tr>
	  </tbody>
	  <tfoot>
	  <tr>
		<td><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1427872305&amp;site=qq&amp;menu=yes" title="在线客服" target="_blank"><img src="/rchlw/function/images/QQline.jpg" alt="在线客服" /></a></td>
		<td><a href="#" title="热线电话"><img src="/rchlw/function/images/telephone.gif" alt="热线电话" /></a></td>
		<td><a href="mailto:service@ruyicai.com" title="邮箱服务"  target="_blank"><img src="/rchlw/function/images/email.gif" alt="邮箱服务" /></a></td>
	  </tr>
	  </tfoot>
	</table>

  </div>
</div>

</div>

<div style="display: none">
<script type="text/javascript">
	var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F8333ff4357591825f74461a26584cc2f' type='text/javascript'%3E%3C/script%3E"));
</script>

</div>