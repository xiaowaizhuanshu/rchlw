<%@ page contentType="text/html; charset=utf-8"%>
<!-- 登录的弹出框 -->
<div id="login_pop" style="display:none;">
	<form action="" method="post" id="userTouzhuLoginForm" name="userTouzhuLoginForm" >
	<div class="pop_header">
		<div class="pop_header_zi">用户登录</div>
		<div class="pop_header_btn"><a href="javascript:divClose();" title="关闭"><img src="<%=request.getContextPath() %>/function/images/guanbi_btn.gif" alt="关闭"  border="0"/></a></div>
	</div>
	<div class="pop_content">
		<div class="pop_con">
			<ul>
				<li>手机号码：<input class="pop_input" name="tuserinfo.MOBILEID" type="text" id="mobilePOP" onfocus="change('magPOP');"/><a href="http://testuser.boyacai.com/register/register_new.jsp" title="免费注册"><span class="blue">免费注册</span></a></li>
				<li>密　　码：<input class="pop_input1" name="tuserinfo.PASSWORD" type="password" id="passwordPOP" /><a href="/rchlw/function/rules/findPwd_new.jsp" title="忘记密码"><span class="blue">忘记密码</span></a></li>
			  	<li>验  证   码：<input class="pop_input2" id="validatePOP" name="password1" type="text" onKeyDown="if (event.keyCode==13)tgTouZhuLogin();"/>
			  	  <img src="/rchlw/function/common/image.jsp" id="magPOP"/>
			  	  <a href="javascript:change('magPOP');" title="看不清，换一张"><span>看不清，换一张</span></a>
			  	</li>
			</ul>
	  </div>
		<div class="pop_btn">
		<input class="denglu" name="Input" type="button" style="cursor: pointer;" value="" onclick="tgTouZhuLogin()"/>
		</div>
	</div>
	</form>
</div>

