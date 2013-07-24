<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>  
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="page" uri="/WEB-INF/pageTang.tld"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>历史活动回顾</title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<meta http-equiv="keywords" content="节日专题活动，双色球专题活动，大乐透专题活动，七乐彩专题活动 3D专题活动，七星彩专题活动，足彩专题活动，竞彩专题活动">
<meta http-equiv="description" content="博雅彩喜迎2012年推出节日专题活动，双色球专题活动，大乐透专题活动，七乐彩专题活动 3D专题活动，七星彩专题活动，足彩专题活动，竞彩专题活动等优惠活动让您购彩更快乐！">
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js"></script>
</head>
<body>
	<script>$(function(){toplogo('common',"");});</script>
	<span id="common"></span>
	<!--中间-->
	<div id="main">
		<!--左边-->
		<div class="ChannelBuyPannel specialActivities_left">
			<div class="ChannelBuyPannelHead"><h3>活动专题</h3></div>
			<div class="ChannelBuyPannelBody">
		     	<s:iterator value="page.result" status="idx">
	     		<table class="specialActivities_table ke-zeroborder" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<th colspan="3">
								<a target="_blank" href="${ctx}/activity/activity!view.action?id=${activityId}" title="${title}">
									${title}
									<s:if test='isEnd == "0"'>&lt;火热进行&gt;</s:if>
									<s:else>&lt;已结束&gt;</s:else>
								</a>
							</th>
						</tr>
						<tr>
							<td rowspan="2" width="10%">&nbsp;</td>
							<td colspan="2" width="90%" class="specialActivities_infor">活动介绍：${introduce}</td>
						</tr>
						<tr>
							<td><i>活动时间：${activityTime}</i></td>
							<td class="specialActivities_position" width="18%">&nbsp;<!-- <a target="_blank" href="http://www.ruyicai.com/rchlw/function/activity/activity20130401.html"> <input class="light specialActivities_btn" value="立即参与" type="button"></a> --></td>
						</tr>
						<tr>
							<td colspan="3">&nbsp;</td>
						</tr>
					</tbody>
				</table>
          		</s:iterator>
          		<div class="specialActivities_page">
					<script>
						function jumpPage(pageNo) {
							$("#pageNo").val(pageNo);
							$("#pageForm").submit();
						}
					</script>
			   		<form id="pageForm" action="${ctx}/activity/activity!list.action" method="post">
		      			<input type="hidden" id="pageNo" name="page.pageNo" value="${page.pageNo}" />
		      			<input type="hidden" id="pageNo" name="page.pageSize" value="${page.pageSize}" />
						<a href="javascript:jumpPage(1)">首页</a>
						<s:if test="page.hasPre"><a href="javascript:jumpPage(${page.prePage})">上一页</a></s:if>
						<s:if test="page.hasNext"><a href="javascript:jumpPage(${page.nextPage})">下一页</a></s:if>
						<a href="javascript:jumpPage(${page.totalPage})">末页</a>
						 第${page.pageNo}页,共${page.totalPage}页
					</form>
				</div>
			</div>
		</div>
		<!--左边end-->

		<!--右边-->
		<div class="specialActivities_right">
			<div class="ChannelBuyPannel ">
				<div class="ChannelBuyPannelHead"><h3>活动公告</h3></div>
				<div class="ChannelBuyPannelBody">
					<ul class="specialActivities_tuiJian">
					    <byc:newsList category="1" channel="4" pageNo="1" pageSize="5" var="n">
						<li>
							<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
						</li>
						</byc:newsList>
					</ul>
				</div>
			</div>
			<div class="space10">&#160;</div>
			<div class="share_img"><a href="/rchlw/function/rules/customMessage.jsp"><img src="<%=request.getContextPath() %>/function/images/share_pic.gif" width="270" height="120" /></a></div>
			<div class="space10">&#160;</div>
			<div class="specialActivities_news">
			<iframe width="268" height="504" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=268&height=504&fansRow=2&ptype=1&speed=0&skin=2&isTitle=1&noborder=0&isWeibo=1&isFans=0&uid=3263070532&verifier=3d333e24&dpc=1"></iframe>
			</div>
		</div>
		<!--右边end-->
	
	</div>
	<!--中间end-->
	
	<div class="space10"></div>
 	<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
	<jsp:include page="/function/rules/setBody.jsp"></jsp:include>