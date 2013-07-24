<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>走势图表居左的头部</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta http-equiv="keywords" content="博雅彩、彩票投注管理、账户管理、彩票赠送管理">
<meta http-equiv="description" content="彩票投注管理、账户管理、彩票赠送管理">
<link href="/rchlw/function/css/util.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/rchlw/function/js/jqueryJS/jquery-1.5.min.js" ></script>
<script type="text/javascript" src="/rchlw/function/js/util.js"></script>
</head>
<body>
<!-- 头部上 用户登录注册等链接 start -->
<div class="HeadTopLogin">
	<div class="box">
		<!-- 登录前 账户密码输入框以及快速入口 start -->
		<dl class="LoginAgo" id="top_user">
			<script>$(function(){topZuCaiLogin();});</script>
		</dl>
		<!-- 登录前 账户密码输入框以及快速入口 end -->
		
		<!-- 右侧快速链接 start -->
		<div class="QuickLink">
			<a href="http://www.ruyicai.com/rchlw/index.jsp" target="_blank">首页</a> |
			<a href="http://www.ruyicai.com/rchlw/function/include/downLoadClient.jsp" target="_blank">手机购彩</a> |
			<a href="http://www.ruyicai.com/rchlw/news/category_activityList.jsp?cpage=1&begin=0" target="_blank">活动专题</a> | 
			<a href="http://www.ruyicai.com/rchlw/function/rules/customMessage.jsp" style="padding-right:0px;" target="_blank">留言反馈</a>
		</div>
		<!-- 右侧快速链接 end -->
	</div>
</div>
<!-- 头部中 网站logo和客服链接 start -->
<div class="HeadMiddleLogo">
	<a class="HomeLogo" href="http://www.ruyicai.com/rchlw/index.jsp"target="_blank"><img src="http://www.ruyicai.com/rchlw/function/images/HomeLogo.gif" width="138" height="64"  /></a>
	<a class="HomeActivityBanner" href="http://www.ruyicai.com" target="_blank"><img src="http://www.ruyicai.com/rchlw/function/images/HomeActivityBanner.jpg" /></a>
	<a class="HomeServiceQQ" href="http://wpa.qq.com/msgrd?v=3&uin=1427872305&site=qq&menu=yes" target="ssq"><img src="http://www.ruyicai.com/rchlw/function/images/HomeServiceQQ.gif" width="83" height="25" /></a>
	<a class="HomeServiceTel" href="javascript:;" target="_blank"><img src="http://www.ruyicai.com/rchlw/function/images/HomeServiceTel.gif" width="169" height="19" /></a>
</div>
<!-- 头部中 网站logo和客服链接 end -->
<!-- 头部下 采种选择与导航 start -->
<div class="HeadBottomMenu">
	<div class="box">
		<ul>
			<li class="ButtonHomePage"  ><a href="http://www.ruyicai.com/rchlw/index.jsp" target="_blank">首页</a></li>
			<li class="ButtonChannelBuy"><a href="http://www.ruyicai.com/rchlw/function/goucaidating.jsp" target="_blank">购彩大厅</a></li>
			<li class="ButtonCaseCenter relative"><a href="http://www.ruyicai.com/rchlw/function/hemaiCenter!getCaseHemaiCenter" target="_blank">合买中心</a><span class="HomePageBGBox" style="position:absolute; top:3px; left:80px; z-index:110;"><!-- 合买中心 返奖 --></span></li>
			<li class="ButtonNumberShow"><a href="http://www.ruyicai.com/rchlw/function/ryc_select_newkj!drawalottery" target="_blank">彩票开奖</a></li>
			<li class="ButtonDataChart selected" ><a href="http://tbzs.ruyicai.com" target="_blank">彩票走势图</a></li>
			<li class="ButtonHotInfo"><a href="http://www.ruyicai.com/rchlw/news/category_xinwenzixun.jsp" target="_blank">彩票资讯</a></li>
			<li class="Buttongoucai" ><a href="http://www.ruyicai.com/rchlw/function/include/downLoadClient.jsp" target="_blank">手机购彩</a></li>
		</ul>
	</div>
</div>

<!-- 头部下 采种选择与导航 end -->
</body>
</html>