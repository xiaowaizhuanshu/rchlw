<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request).getJSONObject("value");
%>

<%if("".equals(user.getString("email"))||"null".equals(user.getString("email"))||user.getString("email").indexOf("@")==-1){ %>
 
 <!-- 邮箱未绑定页面 -->

<h2>邮箱服务</h2>
<dl class="account_service">
	<dt>温馨提示：您尚未绑定邮箱！现在就绑定邮箱，之后即可<b>免费定制</b>以下邮箱服务<a href="#" class="Mail_unbound" title="绑定邮箱" onclick="reHtml(37);" >绑定邮箱>></a></dt>
	<dd>密码找回<span>当您忘记密码时，可通过邮箱找回您的密码。</span></dd>
</dl>
<%}else{ 
	if(!(user.getString("email").equals(user.getString("userName")))){%>
<!-- 邮箱已绑定页面 -->
<h2>邮箱服务</h2>
<dl class="account_service">
	<dt>已绑定邮箱：<%=user.getString("email").trim().split("@")[0].substring(0,2)+"***@"+user.getString("email").trim().split("@")[1] %><a href="/rchlw/function/rules/user.jsp?key=38" title="修改绑定">修改绑定>></a></dt>
	<dd>密码找回<span>当您忘记密码时，可通过短信找回您的密码。</span><font>已定制 系统默认</font></dd>
</dl>
<%}else{ %>
<!-- 邮箱注册用户已绑定页面 -->
<h2>邮箱服务</h2>
<dl class="account_service">
	<dt>已绑定邮箱：<%=user.getString("email") %></dt>
	<dd>密码找回<span>当您忘记密码时，可通过短信找回您的密码。</span><font>已定制 系统默认</font></dd>
</dl>
<%}} %>
<script>
	$(function(){
		$(".a_mailboxService").addClass("selected");
	});
</script>