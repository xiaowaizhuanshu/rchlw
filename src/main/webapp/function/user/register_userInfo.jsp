<%@ page language="java" contentType="text/html; charset=utf-8"   pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%> 
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
  
<div class="ZhuCe_titleBg">
	<span class="ZhuCe_titleLeft">快速注册</span>
</div>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	String username = NameUtil.getNameUtilJson(tuserinfo.getJSONObject("value"));
%>
<div class="ZhuCe_success"><i id="username"><%=username %></i>，恭喜您注册成功！</div>

<div class="ZhuCe_remind"><em>为了您的账户安全，请如实填写以下资料</em>：（该资料作为领奖和提款的重要凭证，博雅彩绝对不会泄露你的个人信息）</div>

<table border="0" cellspacing="0" cellpadding="0" class="ZhuCe_table second_space">

	<tr>
		<th>个性昵称：</th>
		<th width="200"><input name="" type="text" class="ZhuCe_input" id="nickname" onblur="checknickname()"/></th>
		<td width="500"><span id="nicknameImage"></span><span id="nicknameTip">4-16个字符，支持数字、英文、汉字组合，设置成功后不可更改</span></td>
	</tr>
	<tr>
		<th>真实姓名：</th>
		<th><input name="" type="text" class="ZhuCe_input" id="name" onblur="checkName_real()"/></th>
		<td><span id="nameImage"></span><span id="nameTip" >领奖和提款的重要依据！姓名填写后不可修改</span></td>
	</tr>
	<tr>
		<th>身份证号：</th>
		<th><input name="" type="text" class="ZhuCe_input" id="cardid" onblur="checkcardId()"/></th>
		<td><span id="cardidImage"></span><span id="cardidTip">领奖人身份证号码，须与姓名一致</span></td>
	</tr>
	<tr>
		<th>手机号码：</th>
		<th><input name="" type="text" class="ZhuCe_input" id="mobile" onblur="checkMobile()"/></th>
		<td><span id="mobileImage"></span><span id="mobileTip">中奖后会通过手机短信免费通知您</span></td>
	</tr>
	<tr>
		<th>电子邮箱：</th>
		<th><input name="" type="text" class="ZhuCe_input" id="email" onblur="checkEmail()"/></th>
		<td><span id="emailImage"></span><span id="emailTip">忘记密码时可通过邮箱找回密码</span></td>
	</tr>
	<tr>
		<th>&#160;</th>
		<th colspan="3" class="special_td"><input name="" type="button" class="ZhuCe_btn" value="提交信息" id="registerbutton" onclick="verifyuserinfo()"/><a href="javascript:reHtmljsp(1,'',true,'registerbody',false);" title="以后再说">以后再说</a></th>
	</tr>
</table>
