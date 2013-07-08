<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩-更多投注号码</title>
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css"/>
<link href="<%=request.getContextPath() %>/function/css/tuserAll.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js"></script>
</head>
<body>
	<div id="body">
	<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
	 <span id="common"></span>
	<div id="main">
	<div id="right_text">
	<script>
		var a= GetQueryString("a");
		if(a != null && Number(a) == 1){
			getMoreObjForNameAndValueToKey(59); //合买
		}else{
			getMoreObjForNameAndValueToKey(47);
		}
	</script>
	</div>
	</div>
 <jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>

</div>
