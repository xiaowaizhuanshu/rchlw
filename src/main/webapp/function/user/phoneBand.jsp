<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>

<script type="text/javascript">
 $(function(){
	 $.formValidator.initConfig({formid:"form2",onError:function(){alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));}});
	 var mobile=$("#usermobile").val();
		if($("#usermobile").length>0){
			//手机号码验证
			$("#usermobile").formValidator({
				onshow : "请输入11位手机号码！",
				onfocus : "请输入您的手机号码，不可为空！",
				oncorrect : "该手机号格式正确。"
			}).inputValidator({
				min : 11,
				max : 11,
				onerror : "该手机号码不存在或者号码格式错误，请输入11位手机号码。"
			}).regexValidator({
				regexp : "mobile",
				datatype : "enum",
				onerror : "该手机号码不存在或者号码格式错误，请输入11位手机号码。"
			});
		 }
		   
 });
 </script>

<h2>手机服务</h2>
<div class="account_mailAddress">
<form name="form2" id="form2" action="#" method="post" onsubmit="return reHtml(51,$('#form2').serialize());">
	<p>请输入您的手机号码，系统会给您发送验证码短信！</p>
	<div align="center"><font class="red1">${message}</font></div>
	<table border="1" cellspacing="0" cellpadding="0">
		<tr>
			<th width="118">手机号码</th>
			<td><input name="usermobile" id="usermobile" type="text" class="mailAddress" />   <font id="usermobileTip" class="mailAddress_text">请输入11位手机号码！</font></td>
		</tr>
		<tr>
			<td class="mailAddress_submit" colspan="2">
				<input class="light" type="submit" id="phoneBand" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" value="验证">
			</td>
		</tr>
	</table>
</form>
</div>
<script>
$(function(){
	$(".a_mobileService").addClass("selected");
});
</SCRIPT>
