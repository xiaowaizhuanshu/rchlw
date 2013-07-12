<%@page import="com.ruyicai.util.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/byc.tld"%> 
<%@taglib prefix="s" uri="/struts-tags" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩 -如意彩逆市上涨</title>
<meta name="keywords" content="彩票预测,中国足彩网,中国竞彩网,中国竞猜网,彩民新闻" />
<meta name="description" content="彩票资讯是如意彩彩票资讯频道为您提供福彩、体彩、足彩、竞彩和高频彩等彩票的信息、推荐、分析、点评等免费彩票预测服务" />
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/ChannelBuy.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js" ></script>
<%if("0".equals(request.getParameter("channelId"))){request.setAttribute("channelCheck","0");}else{request.setAttribute("channelCheck","1");};%>
</head>
<body>
<div id="body">
	<script>$(function(){toplogo('common',"");});</script>
 	<span id="common"></span>
   	<div id="main">
   	<div class="zixuntop">
   		您所在的位置：<a href="<%=request.getContextPath() %>/index.jsp">如意彩</a> &gt;<a href="/rchlw/news/category_xinwenzixun.jsp">热点资讯</a> &gt; 正文
   	</div>
   	<div class="zixun_main">
   	<div class="zixunleft" style="border:0px;">
   		<tangs:news newsId="${param.newsId}" var="n">
	    <div class="zixun_redList">
			<div class="zixun_top">${n.title}</div>
			<div class="zixun_title">${n.updateTime}</div>
			<div class="zixun_con">
				${n.content}
				<div class="space10">&nbsp;</div>
				<div class="space20">&nbsp;</div>
			    <jsp:include page="/function/rules/bshare.jsp"></jsp:include>
		    	<div class="space20"></div>
				<div class="septal_line"></div>
				<div class="space20"></div>
				<div class="RelatingArticle" >
					<h3>您也可能喜欢:</h3>
					<%-- <tangs:ryc_newslist categoryId="%{#parameters.categoryId[0]}"  web_id="%{#parameters.website_Properties_id[0]}"  newsId="%{#parameters.newsId[0]}"  value="20" num="5" status="s">
						<dl>
							<dd>
								<a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
								newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
								&channelId=${channelId}&categoryId=${categoryCode}&title=${title}">${title}</a>
							</dd>
						</dl>
					</tangs:ryc_newslist> --%>
				</div>
			</div>
		</div>	
		</tangs:news>
		<div class="space10">&nbsp;</div>
	</div>
   	<div class="zixunright">
	<div class="jinri_kj">
				<div class="jinri_top1"><span class="jinri_zi">专家推荐</span>
				</div>
				<div class="webgg_con">
				<ul><%-- <s:if test="#request.channelCheck!=0">
					<tangs:ryc_newslist value="19" begin="0" end="6" num="6" categoryCn="'福彩推荐','体彩推荐'" channelId="%{#parameters.channelId[0]}" web_id="%{#parameters.website_Properties_id[0]}">
		                 <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
		newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
		&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				     </s:if><s:else>
				     <tangs:ryc_newslist value="12" begin="0" end="6" num="6" categoryCn="福彩推荐"  web_id="%{#parameters.website_Properties_id[0]}">
		     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
		newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
		&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				     
				     </s:else> --%>
		</ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top1"><span class="jinri_zi">最新中奖</span></div>
				<div class="webgg_con" id="webgg_con">
				<ul class="NewWinList">
					<%-- <tangs:ryc_newslist value="3" begin="0"   categoryCn="最新中奖"  web_id="%{#parameters.website_Properties_id[0]}"  num="1" >
				    ${content}
				     </tangs:ryc_newslist> --%>
		</ul>
			</div>
		</div>
			<script>
				$(function() {
					$("#webgg_con").jCarouselLite({
						speed: 300,
						visible: 5,
						auto: 5000,
						vertical: true
					});
				});
				</script>
			<div class="jinri_kj">
				<div class="jinri_top1"><span class="jinri_zi">投注技巧</span></div>
				<div class="webgg_con">
				<ul><%--<s:if test="#request.channelCheck!=0">
					 <tangs:ryc_newslist value="19" begin="0" end="6"  num="6" categoryCn="'体彩技巧','福彩技巧'" channelId="%{#parameters.channelId[0]}" web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
		newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
		&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				     </s:if>
		            <s:else>
				     <tangs:ryc_newslist value="12" begin="0" end="6"  num="6" categoryCn="投注技巧"  web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
		newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
		&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" target="_blank">${title}</a></li>
				     </tangs:ryc_newslist> 
				     </s:else>--%>
			</ul>
			</div>
			</div>
			<div class="zixun_gg"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_11xuan5.jsp"><img  class="wumiiIgnore"  src="<%=request.getContextPath() %>/function/images/11xuan5-270.jpg" width="270"  /></a></div>
	</div></div>
	</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
 <!--去掉页面上的无觅字样 -->
<script> 
function loadWindow()  
{  
   if(document.readyState == "complete") {  
      $("a[href$='/widget/relatedItems.htm']").html(" ");
       }
   else {  
       setTimeout("loadWindow()", 500);
	   }
} 
loadWindow(); 
</script> 
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>