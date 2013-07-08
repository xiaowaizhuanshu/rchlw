<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">editUserValidator();</script>
<!--身份证未绑定-->	
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));	
%>
<div class="My_account_title" style="margin:0;">
<h2>身份证绑定</h2>
</div>
<div class="account_mailAddress">
	<p>您还没有填写真实姓名和身份证！<b>真实姓名和身份证是提款和领奖的重要凭证，一经填写不可更改，请务必填写真实信息！</b></p>
	<form action="#" method="post" onsubmit="return reHtml(35,$('#form2').serialize());" id="form2" >
	<font color="red"><s:property value="#request.message"/></font>
		<table border="1" cellspacing="0" cellpadding="0">
			<tr>
				<th width="118">真实姓名</th>
				<td>
					<input class="mailAddress" id="name"  name="tuserinfo.NAME" type="text" value="<%=tuser.getNAME().trim() %>"/>
				</td>
				<!--<td><span id="nameTip"></span></td>-->
			</tr>
			<tr>
				<th width="118">身份证号</th>
				<td>
					<%if ("".equals(tuser.getCERTID().trim())){ %>
							<input class="mailAddress" type="text" name="tuserinfo.CERTID"  id="userID" value='<s:property value="  "/>'  />
					<%}else if(tuser.getCERTID().trim().equals("111111111111111111")){ %>
						<input class="mailAddress" type="text" name="tuserinfo.CERTID"  id="userID" value='<s:property value="  "/>'  />
					<% }else{%>
						<input class="mailAddress" type="text" name="tuserinfo.CERTID" id="userID"  value='<%=tuser.getCERTID().trim()%>'   />
					<%} %>
				</td>
				<!--<td><span id="userIDTip"></span ></td>-->
			</tr>
			<tr>
				<td class="mailAddress_submit" colspan="2">
					<input onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" type="submit" value="提交">
				</td>
			</tr>
		</table>
		<input id="china" name="china" value="中文" type="hidden">
</form>
</div>
<script>
	$(function(){
		$(".a_idBinding").addClass("selected");
	});
</script>
