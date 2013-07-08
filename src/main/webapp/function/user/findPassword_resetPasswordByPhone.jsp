<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib prefix="s" uri="/struts-tags" %>

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
		<td class="find_waysBtnCoat"><input type="button" class="find_Btn" value="确认" onclick="tGPhoneCheckPwd('3')"/></td>
		<td>&#160;</td>
		<td>&#160;</td>
		<td>&#160;</td>
	</tr>
	</tbody>
</table>
</form>
