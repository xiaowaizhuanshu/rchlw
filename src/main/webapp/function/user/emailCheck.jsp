<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>

<!--  邮箱验证 页面-->
<h2>邮箱服务</h2>
<dl class="account_service">
	<dt>验证邮件已经发送到<b><s:property value="#request.tuserinfo.EMAIL"/></b>，请注意查收！<a href='http://<s:property value="#session.emailUrl"/>' target="_blank" title="登录邮箱">登录邮箱>></a></dt>
	<dd><em>验证邮件可能会被误认为垃圾邮件，查收时请注意。</em></dd>
</dl>
<script>
	$(function(){
		$(".a_mailboxService").addClass("selected");
	});
</script>
