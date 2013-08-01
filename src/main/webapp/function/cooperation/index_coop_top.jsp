<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!-- 购彩大厅 -->
	<script>
		$(function() {
			$(".light").hover(function() {
				$(this).addClass("over");
			},
			function() {
				$(this).removeClass("over");
			});
		});
		function HoverOver(n) {
			n.addClass("over");
		}
		function HoverOut(n) {
			n.removeClass("over");
		}
	</script>
	<jsp:include page="/function/user/user_top.jsp"/>
	<!-- 头部中 网站logo和客服链接 start -->
	<div class="HeadMiddleLogo">
		<a class="HomeLogo" href="/rchlw/index.jsp" target="_blank">
		<img src="<%=request.getContextPath() %>/function/images/HomeLogo.gif" width="138" height="64"  />
		</a>
		<a class="HomeActivityBanner" href="/rchlw/index.jsp" target="_blank"><img src="<%=request.getContextPath() %>/function/images/HomeActivityBanner.jpg" /></a>
		<a class="HomeServiceQQ" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2522309140&site=qq&menu=yes"><img src="<%=request.getContextPath() %>/function/images/HomeServiceQQ.gif" width="83" height="25" /></a>
		<a class="HomeServiceTel" href="javascript:;"><img src="<%=request.getContextPath() %>/function/images/HomeServiceTel.gif" width="169" height="19" /></a>
	</div>
	<!-- 头部中 网站logo和客服链接 end -->
	
<!-- 头部下 采种选择与导航 start -->
<div class="HeadBottomMenu">
	<div class="box">
		<ul>
			<li class="ButtonHomePage"  ><a href="/rchlw/index.jsp">首页</a></li>
			<li class="ButtonChannelBuy"><a href="/rchlw/function/goucaidating.jsp">购彩大厅</a></li>
			<li class="ButtonCaseCenter relative"><a href="/rchlw/function/hemaiCenter!getCaseHemaiCenter">合买中心</a><!-- <span class="HomePageBGBox" style="position:absolute; top:3px; left:80px; z-index:110;"> 合买中心 返奖 </span>--></li>
			<li class="ButtonNumberShow"><a href="/rchlw/function/ryc_select_newkj!drawalottery">彩票开奖</a></li>
			<li class="ButtonDataChart" ><a href="http://zst.boyacai.com">彩票走势图</a></li>
			<li class="ButtonHotInfo"   ><a href="/rchlw/news/category_xinwenzixun.jsp">彩票资讯</a></li>
			<li class="Buttongoucai" ><a href="/rchlw/function/include/downLoadClient.jsp">手机购彩</a></li>
			<li class="Buttonmessage"><a href="/rchlw/news/category_zjdx.jsp">专家短信</a></li>
		</ul>
	</div>
</div>
<!-- 头部下 采种选择与导航 end -->