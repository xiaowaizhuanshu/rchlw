<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%@ page import="net.sf.json.JSONObject,com.jrt.invokeLot.util.JSONReslutUtil,com.ruyicai.util.NameUtil" %>
<script type="text/javascript">
	//增加获取当前地址并登录成功后跳转到这个地址
	$(function() {
		var reqUrl = window.location.href;
		$("#reqUrl").val(encodeURIComponent(reqUrl));
		$("#reqUrlLog").val(encodeURIComponent(reqUrl));
	});
</script>
<%
	JSONObject user = JSONReslutUtil.getUserInfo(request);
%>
<input id="reqUrl" type="hidden" value="" name="reqUrl">
<%if(user!=null&&!user.getJSONObject("value").equals("null")&&!(user.getJSONObject("value").isEmpty())){ %>
<% user.put("t_name",NameUtil.getNameUtilJson(user.getJSONObject("value"))) ;%>
	<%//1.判断用户是登陆？已登录，则获取用户信息 %>
		<input type="hidden" value="<%=user.get("t_name") %>" id="nick">

			<%//1.2有昵称则正常跳转回首页 %>
				<!-- 登陆后 账户信息及账户操作 start -->
				<script>
					balanceDivDis("topLogin_money", "", "freeze_money");
				</script>
				<dl class="LoginLater">
					<dt>
						<font>
							欢迎您，
						</font>
						<a href="/rchlw/function/rules/user.jsp?key=7" target="ssq">
							<%=user.get("t_name") %>
						</a>
					</dt>
					<dd>
						<div class="SelectAccount" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">
							我的账户
							<span class="SelectTriangle">
							</span>
							<span class="line">
							</span>
							<dl>
								<dt><em>可用余额：<i>¥</i><i id="topLogin_money"></i>元</em></dt>
								<dd><em>冻结资金：<i>¥</i><i id="freeze_money"></i>元</em></dd>
							</dl>
						</div>
					</dd>
					<dt>
						|<a href="/rchlw/function/rules/user.jsp?key=4" target="ssq">充值</a>
						|<a href="/rchlw/function/rules/user.jsp?key=11" target="ssq">提款</a>
						|<a href="javascript:zucaiLoginOut();">退出</a>
					</dt>
				</dl>
				<!-- 登陆后 账户信息及账户操作end -->
<%}else{ %>
		<form method="post" id="userLoginForm">
			<!-- 登录前 账户密码输入框以及快速入口 start -->
			<dt>
				您好，欢迎来到博雅彩！
			</dt>
			<dt>
				<a href="http://users.ruyicai.com/login.jsp" target="ssq">登录</a>
				|<a href="http://testuser.boyacai.com/register/register_new.jsp" target="ssq">免费注册</a>
			</dt>
			<!-- 登录前 账户密码输入框以及快速入口 end -->
		</form>
<% }%>