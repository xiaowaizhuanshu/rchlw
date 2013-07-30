<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>  
<%@ taglib prefix="page" uri="/WEB-INF/pageTang.tld"%> 
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>${title_head }资讯|${title_head }加奖|${title_head }开奖查询|${title_head }推荐|${title_head }中奖故事|${title_head }奖池 博雅彩-网上买彩票-博雅彩网</title>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script>
function jumpPage(pageNo) {
	$("#pageNo").val(pageNo);
	$("#pageForm").submit();
}
</script>
</head>
<body>
<div id="body">
  	<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 	<span id="common"></span>
   	<div id="main">
   		<div class="zixun_main">
    		<div class="zixuntop">您所在的位置：<a href="<%=request.getContextPath() %>/index.jsp">博雅彩</a> &gt; <a href="<%=request.getContextPath() %>/news/category_xinwenzixun.jsp">热点资讯</a> &gt; ${currentPosition}</div>
   			<div class="zixunleft">
				<div class="zixun_nav">
				 	<span class="ziXun_titleArrow">
		    			${title_head }
				 	</span>
					<s:set id="title" value="#request.title_head"/>
					<s:if test="#title=='双色球'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=ssq">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=ssq">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=ssq">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:if>
					<s:elseif test="#title=='大乐透'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=daletou">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=daletou">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=daletou">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
					<s:elseif test="#title=='福彩3D'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=3D">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=3D">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=3D">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
					<s:elseif test="#title=='排列3'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=pailie3">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=pailie3">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=pailie3">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
					<s:elseif test="#title=='七星彩'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=qixingcai">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=qixingcai">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=qixingcai">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
					<s:elseif test="#title=='七乐彩'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=qilecai">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=qilecai">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=qilecai">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
					<s:elseif test="#title=='排列5'">
					<ul>
						<li><a title="${title_head }资讯新闻" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=pailie5">${title_head }新闻</a></li>	
						<li><a title="${title_head }技巧" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=pailie5">${title_head }技巧</a></li>	
						<li><a title="${title_head }推荐" href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=pailie5">
						<span class="zixun_hover">${title_head }推荐</span></a></li>
					</ul>
					</s:elseif>
				</div>
			  	<div class="zixunlist">
				  	<div class="zixunlist1">
					  	<s:iterator value="page.news" id="n" var="n" status="st">
					  	<ul class="ziXun_list">
			             	<li>
			             	<span class="zixun_nr">
			             	<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
			             	</span>
			             	<span class="zixun_time"></span>
			             	</li>
			            </ul>
			            <div class="septalLine_spacing"></div>
			            </s:iterator>
				    </div>
				</div>
		      	<div id="fenye">
		      		<form id="pageForm" action="${ctx}/news/news!list.action" method="post">
		      			<input type="hidden" name="nt" value="${nt}">
		      			<input type="hidden" name="ncc" value="${ncc}">
		      			<input type="hidden" name="ln" value="${ln}">
		      			<input type="hidden" name="cp" value="${cp}">
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
	      	<div class="zixunright">
				<!--  test  start  -->
				<div class="Pannel NewAndTodayWin">
					<div class="PannelHead">
						<h3>今日开奖</h3>
					</div>
					<div class="PannelBody">
						<div class="TodayWin" id="TodayWin">
							<script>$(function(){jinrikaijiang('TodayWin');});</script>
						</div>
					</div>
				</div>
				<!--  test  end  -->
				<div class="jinri_kj">
					<div class="jinri_top1"><span class="jinri_zi">其他资讯</span></div>
					<div class="webgg_con">
						<ul>
						    <li> <a target="_blank" title="不惧！双色球三重号竟造井喷 奖池仍有2.1亿" href="/xinwenzixun/fucaizixun/zixunxinwen/20130130092723_23467.html">[资讯]不惧！双色球三重号竟造井喷 奖池仍有2.1亿</a></li>
						    <li> <a target="_blank" title="知心大姐爆料：双色球1000万得主或为打工仔" href="/xinwenzixun/fucaizixun/zixunxinwen/20130130093811_23468.html">[资讯]知心大姐爆料：双色球1000万得主或为打工仔</a></li>
						    <li> <a target="_blank" title="神奇彩民10元5注自选号中611万大奖" href="/xinwenzixun/fucaizixun/zixunxinwen/20130129101819_23455.html">[资讯]神奇彩民10元5注自选号中611万大奖</a></li>
						    <li> <a target="_blank" title="老板为缓解压力买彩中奖618万" href="/xinwenzixun/fucaizixun/zixunxinwen/20130128102742_23430.html">[资讯]老板为缓解压力买彩中奖618万</a></li>
						    <li> <a target="_blank" title="宿迁又出中福在线25万大奖 一月不到4中大奖" href="/xinwenzixun/fucaizixun/zixunxinwen/20130127094448_23416.html">[资讯]宿迁又出中福在线25万大奖 一月不到4中大奖</a></li>
						    <li> <a target="_blank" title="“快3”成彩民首选休闲娱乐方式 中奖趣事多" href="/xinwenzixun/fucaizixun/zixunxinwen/20130127094310_23415.html">[资讯]“快3”成彩民首选休闲娱乐方式 中奖趣事多</a></li>
						</ul>
					</div>
				</div>
				<div class="jinri_kj1 ChannelBuyCurrent">
					<div class="jinri_top1"><span class="jinri_zi">图表走势</span><span class="web_more"><a href="http://tbzs.ruyicai.com">更多&gt;&gt;</a></span></div>
					<div class="jinri_con">
						<ul style="overflow:hidden; padding:0 0 0 10px;">
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/ssqzonghe.php">基本走势图</a></li>
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/hong_zonghe.php">红球指标图</a></li>
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/ssqzhonghedaxiaozhiou.php">大小奇偶质合</a></li>
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/ssqlanqiuzonghe.php">蓝球指标图</a></li>
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/ssqweishudingwei.php">红球尾数定位</a></li>
							<li><a target="_blank" href="http://tbzs.ruyicai.com/cjwssq/view/ssqhezhi.php?">红球和值图</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>