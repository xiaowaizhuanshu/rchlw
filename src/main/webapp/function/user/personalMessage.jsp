<%@page import="com.ruyicai.bean.Tuserinfo"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil" %>
<%	
	JSONObject tuserinfo = JSONReslutUtil.getUserInfo(request);
	Tuserinfo tuser = Tuserinfo.setJson(tuserinfo.getJSONObject("value"));	
%>
<h2>基本资料</h2>
<div class="account_safetyInformation">
	<div class="space15">&#160;</div>
	<form action="#" method="post"  id="form2" >
	 <font color="red"><s:property value="#request.message"/></font>
	<table border="1" cellspacing="0" cellpadding="0">
		<tr>
			<th width="100">您的资料完整度</th>
			<td>
				<dl>
					<dt class="basicInfor_level" id="tip"><script>topShow();</script></dt>
					<dd class="basicInfor_bar">
						<ul id="percentage">
						<li>&#160;</li>
						<li>&#160;</li>
						</ul>
					</dd>
				</dl>
			</td>
		</tr>
	
		<tr>
			<th>用户名</th>
			<td><%=tuser.getUSERNAME() %></td>
			
		</tr>
		<!-- <tr>
			<th>昵　称</th>
			<td><s:property value="#session.tuser_name"/></td>
		</tr> -->
		<tr>
			<th>居住地</th>
			<td>
				<input id="address" class="basicInfor_address" name="tuserinfo.ADDRESS" type="text" value="<%=tuser.getADDRESS().trim() %>">
				<input id="china" name="china" value="中文" type="hidden">
			</td>
		</tr>
		<tr>
			<th>QQ</th>
			<td>
				<input id="qq" class="basicInfor_address" name="tuserinfo.QQ" type="text" value="<%=tuser.getQQ().trim() %>">
			</td>
		</tr>
		<tr>
			<td colspan="2" class="mailAddress_submit"><input type="button" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" value="保存" onclick="return reHtml(25,$('#form2').serialize());"></td>
		</tr>
	</table>
</form>
</div>

<script>
	$(function(){
		$(".a_basicInformation").addClass("selected");
	});
</script>
