<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<title>本期${title}中奖号码，本期${title}开奖结果-博雅彩开奖公告</title>
<meta name="keywords" content="本期${title}开奖结果，本期${title}中奖号码" />
<meta name="description" content="博雅彩开奖公告-为购彩用户提供本期${title}开奖结果，本期${title}中奖号码" />
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js"></script>
</head>
<body>
<jsp:include page="/function/common/ruyicai_include_common_top_kaijiang.jsp"/>
<div id="main">
<!--开奖中心左边-->
<jsp:include page="/function/common/kaijaingLeft.jsp"></jsp:include>
<!--开奖中心右边-->	
<jsp:include page="/function/query/lotteryInfo_FT.jsp"></jsp:include>
	
</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>
