<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!-- 头部导航条 -->
<!-- 头部上 用户登录注册等链接 start -->
<div class="HeadTopLogin">
	<div class="box">
		<!-- 登录前 账户密码输入框以及快速入口 start -->
		<dl class="LoginAgo" id="top_user">
			<script>$(function(){topLogin();});</script>
		</dl>
		<!-- 登录前 账户密码输入框以及快速入口 end -->
		
		<!-- 右侧快速链接 start -->
		<div class="QuickLink">
			<a href="/rchlw/index.jsp">首页</a>|<a href="<%=request.getContextPath() %>/function/include/downLoadClient.jsp">手机购彩</a>|<a href="http://www.ruyicai.com/cms/index.html" target="_blank">帮助中心</a>|<a href="/activity/activity__1.html">活动专题</a>|<a href="/rules/customMessage.html" style="padding-right:0px;">留言反馈</a>|<a href="http://bbs.ruyicai.com" >论坛</a>
		</div>
		<!-- 右侧快速链接 end -->
		
	</div>
</div>

<!-- 头部上 用户登录注册等链接 end -->