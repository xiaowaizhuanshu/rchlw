<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="/css/util.css" />
<link rel="stylesheet" type="text/css" href="/css/ruserAll.css" />
<link rel="stylesheet" type="text/css" href="/css/ymPrompt.css" />
<link type="text/css" rel="stylesheet" href="/css/validator.css"></link>
<script type="text/javascript" src="/js/ymPrompt_source.js"></script>
<script type="text/javascript" src="/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="/js/jqueryJS/formValidator.js" ></script>
<script type="text/javascript" src="/js/jqueryJS/formValidatorRegex.js"></script>
<script type="text/javascript" src="/js/jqueryJS/formValidator_min.js"></script>
<script type="text/javascript" src="/js/ruserAll.js"></script>
<script type="text/javascript" src="/js/util.js"></script>

<title>快捷登录用户设置用户昵称</title>

</head>
<body>
<div class="ZhuCe">
	<div class="ZhuCe_header">
		<div class="ZhuCe_logo"><a href="/rchlw/index.jsp" target="ssc"><img src="/rchlw/function/images/HomeLogo.gif" width="138" height="64" /></a></div>
		<div class="ZhuCe_hotLine">客服热线：400-856-1000<a href="/rchlw/function/rules/customMessage.html" target="_blank" title="留言反馈">留言反馈</a>|<a href="/bangzhuzhongxin.html" target="_blank" title="帮助中心">帮助中心</a>|<a href="/index.html" title="返回首页">返回首页</a></div>
	</div>
	<div class="ZhuCe_body" >
		<div class="ZhuCe_titleBg">
			<span class="ZhuCe_titleLeft">创建或绑定博雅彩账户</span>
		</div>
		<s:if test='#session.message!=null'>
			<div style="height:18px; line-height:18px; padding:0px 0px 0px 65px;">
				<img src="/rchlw/function/images/gantan.gif" style="float:left;" />
				<font style="color:#DE0201; display:inline-block; float:left; padding:0px 0px 0px 5px; height:18px; line-height:18px;"><s:property value="#session.message"/></font>
			</div>
		</s:if>
		<div class="union_radio"><span><input name="Register" type="radio" value=""  checked="checked" id="radioNumone" onclick="showUserOld();"/>我还没有博雅彩账户</span><span><input name="Register" type="radio" value=""  id="radioNumtwo" onclick="showUserNew()" />我已有博雅彩账户</span></div>
		 <form action="#" id="userRegisterForm">	
		<table border="0" cellspacing="0" cellpadding="0" class="ZhuCe_table table_space1" id="logistics_table1" style="display: block;">
			<thead>
			<tr>
				<th><b>*</b>用户名：</th>
				<th colspan="2"><input name="" type="text" class="ZhuCe_input" id="name" onblur="checkName('name','false')"/></th>
				<td width="450"><span id="nameImage"></span><span id="nameTip">4-16个字符，可以使用字母、汉字、数字、下划线</span></td>
			</tr></thead>
			<tbody>
			<tr class="ZhuCe_password">
				<th><b>*</b>密　码：</th>
				<th colspan="2"><input name="" type="password" class="ZhuCe_input" id="password" onblur="checkNewPassword('name','password')" onkeydown="passStrength();"/></th>
				<td><span id="passwordImage"></span><span id="passwordTip">6-16个字符，建议使用字母、数字组合、混合大小写</span></td>
			</tr>
			<tr>
				<th></th>
				<th colspan="2">
				<dl>
					<dd class="basicInfor_leve">密码强度</dd>
					<dd class="basicInfor_level" id="tips_data">弱</dd>
					<dd class="basicInfor_bar" id="line">
					</dd>
				</dl>
				</th>
				<td></td>
			</tr>
			</tbody>
			<tfoot>
			<tr>
				<th width="70"><b>*</b>验证码：</th>
				<th width="120"><input name="inputyzm" type="text" class="ZhuCe_smallInput" id="inputyzm"/></th>
				<th width="80"><img src="/rchlw/function/common/image.jsp" width="60" height="20" /></th>
				<td>看不清？<a href="javascript:change('magPassRegister');" title="换一张">换一张</a></td>
			</tr>
			<tr>
				<th>&#160;</th>
				<td colspan="3" class="special_td" ><input name="Input" type="button" class=" light ZhuCe_btn" value="立即创建" onclick="selectToAction();"/>
				<input name="" type="checkbox" checked="checked" id="registerXieyi" />我已满十八周岁且已阅读并同意<a href="/rchlw/function/rules/userProtocol.jsp" target="_blank" title="用户服务协议">《用户服务协议》</a></td>
			</tr></tfoot>
		</table>
		
		<table border="0" cellspacing="0" cellpadding="0" class="union_table table_space1" id="logistics_table2" style="display: none;">
			<tr>
				<th><b>*</b>用 户 名：</th>
				<th colspan="2"><input name="username" id="username" type="text" class="ZhuCe_input" onblur="checkName('username','true')"/></th>
				<td><span id="usernameImage"></span><span id="usernameTip">4-16个字符，可以使用字母、汉字、数字、下划线</span></td>
			</tr>
			<tr class="ZhuCe_password">
				<th><b>*</b>登录密码：</th>
				<th colspan="2"><input id="reg_password" name="reg_password" onblur="checkPassword('username','reg_password')" type="password" class="ZhuCe_input"/></th>
				<td><span id="reg_passwordImage"></span><span id="reg_passwordTip">博雅彩登录密码</span></td>
			</tr>
			<tr>
				<th>&#160;</th>
				<td colspan="3" class="special_td"><input name="Input" type="button" class=" light ZhuCe_btn" value="确认绑定" id="formButton" onclick="selectToAction();"/>
				</td>
			</tr>
		</table>
		</form>
	</div>
	
</div>
	<div id="footer">
		<jsp:include page="/function/common/ruyicai_include_common_footer_litter.jsp"></jsp:include>
	</div>
<script type="text/javascript">
		function showUserOld(){
			$("#radioNumone").attr("checked",true);
			$("#radionNumtwo").attr("checked",false);
			$("#logistics_table2").css("display","none");
			$("#logistics_table1").css("display","");
		};
		function showUserNew(){
			$("#radioNumone").attr("checked",false); 
			$("#radionNumtwo").attr("checked",true);
			$("#logistics_table1").css("display","none");
			$("#logistics_table2").css("display", "");
		};
		$(function(){showUserOld();});
</script>
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
</body>
</html>