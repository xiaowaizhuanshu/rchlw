<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib prefix="s" uri="/struts-tags" %>

	<div class="ZhuCe_titleBg"><span class="ZhuCe_titleLeft">找回密码</span></div>
		<div class="test_tsh"  style="margin:20px 0px 0px 80px;">${session.emailMsg}</div>
		<table class="find_PasswordMail">
		<tr>
			<th colspan="4">系统已向您的邮箱发送了一封密码找回信。</th>
		</tr>
		<tr>
			<td><input name="" type="button" class="find_PasswordCheck" value="立即查收" onclick="openEmail('<s:property value="#session.emailUrl"/>');"/></td>
			<td><b>若无法收到邮件，请点击重新发送邮件，重发不超过两次。</b></td>
			<td><a href="javaScript:send();" id="a1" title="点击重发"><span class="find_PasswordMailBtn"><span id="count">60</span>秒后点击重发</span></a></td>
		</tr>
	</table>


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
		getSendEmail();
		a=0;
	}
}
function countadd()
{ 
    a=1;
}

</SCRIPT>