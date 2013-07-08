<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">
if($("#sign").html()==''){
	 window.location.href="/rchlw/function/rules/emailRegisterIndex.html";
	 }
</script>
<div class="RegistePannelHead RegistePannelHead_right">
	<h3>用户注册</h3>
</div>
<input type="hidden" name="realPass" value="${request.realPass}"/>
<script type="text/javascript">getEmailSend();</script>
<div class="RegistePannelBody">
	<div class="space20">&#160;</div>
	<ol class="RegisterProcessBanner RegisterProcessSecond"><li>1. 填写会员信息</li><li>2. 输入验证码</li><li>3. 注册成功</li></ol>
	<div class="Register_code">
		<dl class="Received_mail" >
			<dt>就差一步了，快去激活您的账户吧！</dt>
			<dt >尊敬的<font class="blue" id="sign"><s:property value="#session.registerUser.NICKNAME"/></font>：</dt>
		<dd><span id="emailRegisterMessage">我们已经向您的电子邮箱<a href="javaScript:;" title="邮箱" class="red1"><s:property value="#session.registerUser.USERNAME"/></a>发送了一封激活信，
		请在48小时内激活。</span></dd>
		<dd><a href='http://<s:property value="#session.emailUrl"/>' title="点击进入" class="Received_mail_btn" target="_blank"><img src="<%=request.getContextPath() %>/function/images/second_jinru.gif" width="116" height="32" /></a></dd>
		</dl>
		<ul class="Noeceived_mail">
			<li><b>没有收到邮件</b></li>
			<li>请查看邮件是否被您提供的邮箱自动拦截或被误认为<br />垃圾邮件放到垃圾箱中。</li>
			<li>如果超过10分钟仍未收到激活信，请您<a href="javaScript:sengms();" title="重发激活信" >重发激活信</a></li>
			<li>如果再次发送激活信仍未收到，请试试<a href="/rchlw/function/rules/emailRegisterIndex.html" title="更改邮箱注册">更改邮箱注册</a></li>
		</ul>
	</div>
</div>
<script>
	function sengms(){
		pageFlashNum=0;
		getEmailSend();
	}
</script>