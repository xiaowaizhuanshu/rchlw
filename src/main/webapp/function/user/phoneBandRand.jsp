<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>

<script type="text/javascript">
 $(function(){
	 $.formValidator.initConfig({formid:"form2",onError:function(){alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));}});
	 
		if($("#passRegister").length>0){
			$("#passRegister").formValidator({
				min : 4,
				max : 4,
				onshow : decodeURI(EncodeUtf8("请输入您手机中的4位数字验证码。")),
				onfocus :decodeURI(EncodeUtf8( "必须和您手机收到的保持一致！")),
				oncorrect : decodeURI(EncodeUtf8("验证码一致。"))
			}).inputValidator({
				min : 4,
				max : 4,
				empty : {
					leftempty : false,
					rightempty : false,
					emptyerror :decodeURI(EncodeUtf8( "验证码两边不能有空符号！"))
				},
				onerror :decodeURI(EncodeUtf8( "验证码位数不对，请确认！"))
			});
		}
		   
 });
 </script>

<h2>手机服务</h2>
<form name="form2" id="form2" action="#" method="post" onsubmit="return reHtml(52,$('#form2').serialize());">
<dl class="phone_sendMessage">
	<dt>如意彩已向您的手机<s:property value="#session.updateMobileInfo.substring(0,7)+'****'"/><!--<s:property value="#session.user.MOBILEID.substring(0,7)+'****'"/>-->发送免费的验证短信，请查看短信。</dt>
	<dd ><font id="phoneBandMsg" color="red"></font></dd>
	<dd>
		<table cellspacing="0" cellpadding="0" class="phone_sendMessageTable">
			<tr>
				<th>验证码：</th>
				<th><input name="passRegister" type="text" class="phone_sendMessageCode" id="passRegister"/></th>
				<td id="passRegisterTip">请输入您手机接到的4位数字验证码</td>
			</tr>
		</table>

	</dd>
	<dd>如果您在60秒后没收到验证码，请：<span id="a1" class="phone_sendMessageBtn" onclick="send();">在<span id="count">60</span>秒后点此重发</span></dd>
	<dd class="phone_MessageInput"><input class="light " value="下一步" type="submit" /></dd>
</dl>
</form>
<script>

var a = 0;
$(function(){
	$('#count').countdown({seconds: 60,callback: 'countadd()'});

});
function oncl(){
	pageFlashNum=0;
	$('#count').countdown({seconds: 60,callback: 'countadd()'}); 
	}
function send()
{ 
    if(a==1){
		$("#a1").attr('onclick',oncl);//添加事件
		phoneBandCheck();
		a=0;
	}
}
function countadd()
{ 
    a=1;
}

$(function(){
	$(".a_mobileService").addClass("selected");
});
</SCRIPT>