<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>博雅彩会员找回密码，可通过手机号或邮箱找回密码</title>
<meta http-equiv="keywords" content="博雅彩会员，找回密码，手机号找回密码，邮箱找回密码"/>
<meta http-equiv="description" content="博雅彩会员找回密码功能让您不再为丢失密码而烦恼！"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/ruserAll.css" />
<link type="text/css" rel="stylesheet" href="<%=request.getContextPath() %>/function/css/validator.css"></link>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/findPwd_new.js"></script>
</head>
<body>
<div class="ZhuCe">
	<div class="user_login">
		<a class="user_logo" href="/rchlw/index.jsp" title="首页"><img src="<%=request.getContextPath() %>/function/images/HomeLogo.gif" width="138" height="64" /></a>
		<div class="ZhuCe_hotLine">客服热线：400-856-1000<a href="/rchlw/function/rules/customMessage.html" title="留言反馈">留言反馈</a>|<a href="/bangzhuzhongxin.html" title="帮助中心">帮助中心</a>|<a href="/rchlw/index.jsp" title="返回首页">返回首页</a></div>
	</div>
	<div class="ZhuCe_body" id="right_text">
		<div class="ZhuCe_titleBg"><span class="ZhuCe_titleLeft">找回密码</span></div>
		<form id="updatePasswordForm" method="post" action="">
		<table class="find_PasswordReset">
			<thead>
				<tr>
					<th colspan="3">验证成功，请重新设置您的密码。</th>
				</tr>
			
			</thead>
			<tbody>
			<tr>
				<th width="60">新 密 码</th>
				<td width="200"><input name="newpassWord" type="password" class="find_ways" id="passLogin" onkeyup="blockPassStrong();" onblur="checkNewPass()"/></td>
				<td><span id="passLoginImage"></span><span id="passLoginTip">6-16个字符，可由小写英文字母、阿拉伯数字、下划线混合。</span></td>
			</tr>
			<tr id="registerPassStrong" style="display: none;">
				<th>&nbsp;</th>
				<td><span class="find_PasswordLevel">密码强度<i id="showStrong">弱</i></span>
				<span class="find_Password_bar">
					<ul id="tiao">	</ul>
				</span>
				</td>
				<td>&#160;</td>
			</tr>
			<tr>
				<th>确认密码</th>
				<td><input name="conNewpwd" type="password" class="find_ways" id="realPass" onblur="checkRealPass()"/></td>
				<td><span id="realPassImage"></span><span id="realPassTip">确认密码必须和新密码一致。</span></td>
			</tr>
			<tr>
				<th>&#160;</th>
				<td class="find_waysBtnCoat"><input type="button" class="find_Btn" value="确认" onclick="tGPhoneCheckPwdByEmail('3')"/></td>
				<td>&#160;</td>
				<td>&#160;</td>
				<td>&#160;</td>
			</tr>
			</tbody>
		</table>
		</form>
	</div>
	<div id="footer">
		<jsp:include page="/function/common/ruyicai_include_common_footer_litter.jsp"></jsp:include> 
	</div>
</div>
</body>
</html>