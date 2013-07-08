<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib prefix="s" uri="/struts-tags" %>

<div class="ZhuCe_titleBg"><span class="ZhuCe_titleLeft">找回密码</span></div>
<div class="test_tsh"  style="margin:20px 0px 0px 80px;">${session.phoneMesg}</div>
<form id="callbackForm" method="post" action="">
<table class="find_PasswordPhone">
	<tr>
		<th colspan="4">系统已向您的手机发送了一条短信验证码，请立即查收！</th>
	</tr>
	<tr>
		<th>验证码</th>
		<td width="200"><input name="phoneRand" type="text" class="find_ways" id="inputyzm" onblur="checkRand()"/></td>
		<td><span id="inputyzmImage"></span><b id="inputyzmTip">验证码是4位数字。</b></td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td colspan="2"><b>如果1分钟内没有收到验证短信，您可以再次获取验证码，重发不超过2次，此服务免费。</b></td>
		<td><a href="javaScript:send();" id="a1" title="点击重发"><span class="find_PasswordMailBtn"><span id="count">60</span>秒后点击重发</span></a></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input type="button" class="find_Btn" value="确定" onclick="tGPhoneCheck('2');"/></td>
		<td>&#160;</td>
		<td>&nbsp;</td>
	</tr>
</table>
</form>


<SCRIPT LANGUAGE="JavaScript"> 

var a = 0;
$(function(){
	$('#count').countdown({seconds: 60,callback: 'countadd()'});

});
function oncl(){      
	$('#count').countdown({seconds: 60,callback: 'countadd()'}); 
	}
function send(){ 
    if(a==1){
		$("#a1").attr('onclick',oncl);//添加事件
		getSendMessageAgain('1');
		a=0;
	}
}
function countadd()
{ 
    a=1;
}

</SCRIPT>