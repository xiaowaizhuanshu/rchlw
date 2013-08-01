<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%@ taglib prefix="s" uri="/struts-tags" %>
<script></script>
<div class="ZhuCe_titleBg"><span class="ZhuCe_titleLeft">找回密码</span></div>
<div class="find_PasswordOver">
	<div class="find_PasswordOverImg"><img src="<%=request.getContextPath() %>/function/images/BigGreenTrue.gif" width="44" height="44" /></div>
	<div class="find_PasswordOverText">恭喜您，新登录密码已设置成功！<br />请牢记您的登录密码！</div>
</div>
<div class="find_PasswordOverCoat"><a href="<%=com.boyacai.common.util.AppAddr.getUsersPath() %>/login.jsp" class="find_PasswordOverBtn" title="重新登录">重新登录</a><a href="/rchlw/index.jsp" title="返回首页">返回首页</a></div>
