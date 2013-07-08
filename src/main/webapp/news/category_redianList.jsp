<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib prefix="s" uri="/struts-tags" %>
 <%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>  
 <%@ taglib prefix="page" uri="/WEB-INF/pageTang.tld"%> 
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩专家战绩</title>
<meta name="keywords" content="专家战绩，战绩新闻" />
<meta name="description" content="如意彩专家战绩展示专家们的以往战绩让您提供购彩更有信心" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
</head>
<body>
   <div id="body">
     <script>$(function(){toplogo('common',"Buttonmessage");});</script>
 <span id="common"></span>
   <div id="main">
   <div class="zixun_main">
   <div class="zixuntop">您所在的位置：<a href="<%=request.getContextPath() %>/index.jsp">如意彩</a> > <a href="<%=request.getContextPath() %>/news/category_zjdx.jsp">专家短信</a> > 热点新闻</div>
   	<div class="zixunleft">
		  <div class="zixunlist">
			  <div class="zixunlist1">
			  <s:iterator value="#request.nList" id="nl" var="nl" status="st">
			  <ul class="ziXun_list">
	             <li>
	             <span class="zixun_nr"><font>[<s:property value="categoryNameCn"/>]</font> 
	             <a target="_blank" title='<s:property value="title"/>' href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}&categoryNameCn=${categoryNameCn}">
	             <s:property value="title"/></a></span><span class="zixun_time"><s:property value="createtime"/></span>
	             </li>
	            </ul>
	            <div class="septalLine_spacing"></div>
	            </s:iterator>
			    </div>
		      </div>
		      <div id="fenye"> 
			      ${pageHtml}
			    </div>
		</div>
   <div class="zixunright">
	<div class="jinri_kj">
				<div class="jinri_top"><span class="inhelp_zi">热点资讯</span><a href="<%=request.getContextPath() %>/news/newsInfoList!queryNewsInfoList?categoryCode=184&channel_name_cn=rdxw" title="更多" target="_blank"><span class="inhelp_more">更多>></span></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="热点新闻"  web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}&categoryNameCn=${categoryNameCn}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top"><span class="inhelp_zi">双色球专家推荐</span><a href="<%=request.getContextPath() %>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=ssq" title="更多"><span class="inhelp_more">更多>></span></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="福彩推荐" channelCn="双色球" web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}&categoryNameCn=${categoryNameCn}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top"><span class="inhelp_zi">3D专家推荐</span><a href="<%=request.getContextPath() %>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=3D" title="更多"><span class="inhelp_more">更多>></span></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="福彩推荐" channelCn="福彩3D" web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}&categoryNameCn=${categoryNameCn}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="zixun_gg"><img src="<%=request.getContextPath() %>/function/images/zixun_gg.gif" width="270"  /></div>
	</div></div>
	</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>