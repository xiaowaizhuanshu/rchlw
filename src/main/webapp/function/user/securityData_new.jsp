<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));
%>
<h2>安全资料</h2>
<div class="account_mailAddress">
<%if (tuser.getNICKNAME()==null || tuser.getNICKNAME().trim()=="" || tuser.getNAME()==null || tuser.getNAME().trim()=="" || tuser.getCERTID()==null || tuser.getCERTID().trim()=="" || tuser.getCERTID()=="111111111111111111" || tuser.getMOBILEID()==null || tuser.getMOBILEID().trim()=="" || tuser.getEMAIL()==null || tuser.getEMAIL().trim()=="" || tuser.getEMAIL().indexOf("@")==-1){ %>
	<div class="safetyInfor_title">为了您的账户安全，请如实填写以下资料:<b style="color: red;">真实姓名要慎重填写，提现时持卡人名必须与用户信息绑定的真实姓名一致!</b></div>
<%}else{ %><div class="space15">&#160;</div><%} %>
	<table border="1" cellspacing="0" cellpadding="0">
	<tr>
			<th width="118">用户名</th>
			<td colspan="2"><%= tuser.getUSERNAME() %></td>
		</tr>
		<tr>
			<th width="118">个性昵称</th>
			<td colspan="2"><%if (tuser.getNICKNAME()!=null && !"".equals(tuser.getNICKNAME().trim())){ %><input name="" type="text" class="disabled_mailAddress" id="nickname" disabled="disabled" value='<%= tuser.getNICKNAME() %>'/><%} else{%>
			<input name="" type="text" class="mailAddress" id="nickname" onblur="checknickname()"/><span id="nicknameImage"></span><span class="account_modifyPassword" id="nicknameTip">4-16个字符，支持数字、英文、汉字组合，设置成功后不可更改</span><%} %></td>
		</tr>
		<tr>
			<th width="118" >真实姓名</th>
			<td colspan="2"><%if ( tuser.getNAME()!=null && !"".equals(tuser.getNAME().trim())){ %><input name="" type="text" class="disabled_mailAddress" id="name" disabled="disabled" value='<%=tuser.getNAME().substring(0,1)+"***" %>'/><%} else{%>
			<input name="" type="text" class="mailAddress" id="name" onblur="checkusername()"/><span id="nameImage"></span><span class="account_modifyPassword" id="nameTip">领奖和提款的重要依据！姓名填写后不可修改</span><%} %></td>
		</tr>
		<tr>
			<th width="118">身份证号</th>
			<td colspan="2"><%if (tuser.getCERTID()!=null && !"".equals(tuser.getCERTID().trim()) && !"111111111111111111".equals(tuser.getCERTID())) {%><input name="" type="text" disabled="disabled" class="disabled_mailAddress" id="cardid" value='<%=tuser.getCERTID().substring(0,14)+"****" %>'/><%}else{ %>
			<input name="" type="text" class="mailAddress" id="cardid" onblur="checkcardId()"/><span id="cardidImage"></span><span class="account_modifyPassword" id="cardidTip">领奖人身份证号码，须与姓名一致</span><%} %></td>
		</tr>
		<tr>
			<th width="118">电子邮箱</th>
			<%if (tuser.getEMAIL()!=null && !"".equals(tuser.getEMAIL().trim()) && tuser.getEMAIL().indexOf("@")!=-1 ) {%>
			<td class=safetyInfor_link><input name="" type="text" class="disabled_mailAddress" disabled="disabled" id="email" value='<%= tuser.getEMAIL().trim().split("@")[0].substring(0,2)+"***@"+tuser.getEMAIL().trim().split("@")[1] %>'/></td><td class="safetyInfor_link" width="300"><a href="/rchlw/function/rules/user.jsp?key=38" title="修改">修改</a></td>
			<% }else{ %>
			<td class="safetyInfor_words" colspan="2">
			<input name="" type="text" class="mailAddress" id="email" onblur="checkEmail()"/><span id="emailImage"></span><span class="account_modifyPassword" id="emailTip">忘记密码时可通过邮箱找回密码</span></td>
			<%} %>
		
		</tr>
		<%if (tuser.getNICKNAME()==null || "".equals(tuser.getNICKNAME().trim()) || tuser.getNAME()==null || "".equals(tuser.getNAME().trim()) || tuser.getCERTID()==null || "".equals(tuser.getCERTID().trim()) || "111111111111111111".equals(tuser.getCERTID()) || tuser.getMOBILEID()==null || "".equals(tuser.getMOBILEID().trim()) || tuser.getEMAIL()==null || "".equals(tuser.getEMAIL().trim()) || tuser.getEMAIL().indexOf("@")==-1) {%> 
		<tr>
			<td colspan="3" class="mailAddress_submit"><input type="submit" class="light" value="保存" onclick="saveUserInfo()"></td>
		</tr>
		<%} %>
	</table>
</div>

<script>
	$(function(){
		$(".a_safetyInformation").addClass("selected");
	});
</script>