<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request).getJSONObject("value");
	String email=user.getString("email").toString();
	if("null".equals(email)){
		email="";
	}
%>
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript">
$(function(){
	$.formValidator.initConfig({formid:"emailBandForm",onError:function(){alert(decodeURI(EncodeUtf8("校验没有通过，具体错误请看错误提示。")));}});
	$("#emailBand").formValidator({
		empty : false,
		onshow : decodeURI(EncodeUtf8("请输入您的邮箱，不可以为空！")),
		onfocus : decodeURI(EncodeUtf8("邮箱至少6个字符，最多100个字符！")),
		oncorrect :decodeURI(EncodeUtf8( "您的邮箱格式输入正确。"))
		}).inputValidator({
				min : 6,
				max : 100,
				onerror : decodeURI(EncodeUtf8("您输入的邮箱长度非法，请确认！"))
			}).regexValidator({
		regexp : "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
		onerror : decodeURI(EncodeUtf8("对不起，您输入的电子邮箱有误，请您输入正确的邮箱地址！"))
	});
});
</script>
<!--  进行邮箱绑定页面-->
<h2>邮箱服务</h2>
<div class="account_mailAddress">
	<p>请输入您的电子邮箱地址，系统会给您发送验证邮件！</p>
	<div class="bound_nr2"><font color="red"><s:property value="#request.message"/></font></div>
	<form name="emailBandForm" id="emailBandForm" action="#" method="post" onsubmit="return reHtml(39,$('#emailBandForm').serialize());" >
	<table border="1" cellspacing="0" cellpadding="0">
		<tr>
			<th width="118">电子邮箱地址</th>
			<td><input class="mailAddress" name="tuserinfo.EMAIL" type="text" id="emailBand" value='<%=email %>'/></td>
			<td><span id="emailBandTip"></span></td>
		</tr>
		<tr>
			<td class="mailAddress_submit" colspan="3">
				<input onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" type="submit" id="emailsubmitid" value="提交">
			</td>
		</tr>
	</table>
	<input type="hidden" name="typePage" id="typePage" value="emailBand">
	</form>
</div>
<script>
	$(function(){
		$(".a_mailboxService").addClass("selected");
	});
</script>


