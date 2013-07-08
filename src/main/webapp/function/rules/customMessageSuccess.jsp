<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>客户留言</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/tuserAll.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jcarousellite_1.0.1c5.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
</head>
<body>
<div id="body">
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
<div id="main">
	<div class="message_title"><span></span></div>
	<div class="message_content">
		<div class="m_thanks">
			<div class="m_success">恭喜您，提交成功！</div>
				<p>非常感谢您对如意彩的支持！<br />
   				如果您还有其他问题，欢迎 <a href="<%=request.getContextPath() %>/function/rules/customMessage.jsp">点击此处</a> 继续留言。</p>
				<p>我们会一直努力，以最优秀的服务回报用户！<br />
				关注彩票动态，欢迎访问 <a href="/rchlw/index.jsp">如意彩</a> ！</p>
			<div><a class="m_fanhuibtn" href="<%=request.getContextPath() %>/function/rules/customMessage.jsp">&#160;</a></div>
		</div>
	</div>
</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>