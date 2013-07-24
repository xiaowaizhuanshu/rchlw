<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<meta name="keywords" content="开奖公告,彩票开奖公告,彩票开奖结果,彩票开奖查询,彩票结果, 博雅彩开奖公告" />
<title>开奖公告 – 彩票开奖公告 – 彩票开奖结果|查询|博雅彩</title>
<meta name="description" content="博雅彩开奖公告是公布福彩、体彩、足彩、竞彩和高频彩票的开奖结果.包括双色球、大乐透、排列三、22选5、十一运夺金、时时彩、足彩胜负、任选9场、等电子彩票的开奖结果" />
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js"></script>
<style type="text/css">
span.SmallYellowBall{color:#03595e; display: block;float: left;font-size: 16px;font-weight: bold; height: 23px;line-height: 23px;text-align: center;width:14px;}
</style>
</head>
<body>
<jsp:include page="/function/common/ruyicai_include_common_top_kaijiang.jsp"/>
<div id="main">
<!--开奖中心左边-->
<jsp:include page="/function/common/kaijaingLeft.jsp"></jsp:include>
<!--开奖中心右边-->	
<jsp:include page="/function/query/ruyicai_kaijiangIndex.jsp"></jsp:include>
	
</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>
