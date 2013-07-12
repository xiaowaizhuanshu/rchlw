<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/byc.tld"%>  
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<meta name="keywords" content="彩票预测,中国足彩网,中国竞彩网,中国竞猜网,彩民新闻" />
<title>彩票资讯 – 如意彩 – 彩票资讯|购彩资讯|彩民新闻|专家推荐|媒体预测</title>
<meta name="description" content="彩票资讯是如意彩彩票资讯频道为您提供福彩、体彩、足彩、竞彩和高频彩等彩票的信息、推荐、分析、点评等免费彩票预测服务" />
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript"	src="<%=request.getContextPath() %>/function/js/jqueryJS/My97DatePicker/WdatePicker.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.d.imagechange.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/luck/main_luck.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/luck/luck_stake_main.js"></script>
</head>
<body>
<div id="body">
	<script>$(function(){toplogo('common',"ButtonHotInfo");});</script>
 	<span id="common"></span>
   	<div id="main">
   	<div class="zixun_left">
		<!--  ImageSlide  start  -->
		<style>
  		#slidebox,#slidebox ul,#slidebox ul li{width:268px; height:167px; margin:0px; padding:0px; overflow:hidden;}
		*html #slidebox,#slidebox ul,#slidebox ul li{height:169px;}
		#slidebox{ float:left;}
  		</style>
		<div id="slidebox">
			<div class="thumbs">
				<a href="javaScript:;" class="1 b1 thumbActive"><span class="HomePageBGBox s1">&nbsp;</span></a> 
				<a href="javaScript:;" class="2 b2"><span class="HomePageBGBox s2">&nbsp;</span></a> 
				<a href="javaScript:;" class="3 b3"><span class="HomePageBGBox s3">&nbsp;</span></a> 
				<a href="javaScript:;" class="4 b4"><span class="HomePageBGBox s4">&nbsp;</span></a> 
				<a href="javaScript:;" class="5 b5"><span class="HomePageBGBox s5">&nbsp;</span></a> 
			</div>
			<ul>
				<%-- <tangs:ryc_newslist web_id="2" value="3" istopNews="1"  categoryCn="资讯轮换" num="5" >
		    	<li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}"><img src="${picName}"></a></li>
				</tangs:ryc_newslist> --%>
			</ul>
		</div>
		<!--  ImageSlide  end  -->	
		<div class="zixun_hotnews">
		<h4>热点新闻</h4>
			<%-- <tangs:ryc_newslist categoryCn="热点新闻" istopNews="1" web_id="2" status="s1" num="1" value="3">
			<div class="zixun_t"><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
			newsId=${id}&website_Properties_id=${web_id}&callUrl=${callUrl}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
			&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" 
			title="${title}"  target="_blank"  >${title}</a></div>
			</tangs:ryc_newslist> --%>
		<div class="zixun_list1">
			<ul>
				<%-- <tangs:ryc_newslist categoryCn="热点新闻" istopNews="1" web_id="2" status="s1" num="5" value="3" begin="1" end="4">
				<li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
				&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
				&categoryId=${categoryCode}&title=${title}" title="${title}"  target="_blank"    >[${title_as}]  ${title}</a></li>
				</tangs:ryc_newslist> --%>
			</ul>
		</div>
		</div>
		<div class="zixun_gonggong">
			<div class="zixun_ggtop">
				<span class="zixun_zi">双色球</span>
				<span class="zixun_kuozhan">
					<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=ssq" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;
					<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=ssq" title="技巧">技巧</a>&nbsp;&nbsp;|&nbsp;&nbsp;
					<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=ssq" title="新闻">新闻</a>
				</span>
			</div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="F47104" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong1">
			<div class="zixun_ggtop"><span class="zixun_zi">足彩</span><span class="zixun_kuozhan">
			<a href="${ctx}/news/news!list.action?ncc=zucai&nt=4" title="更多">更多&gt;&gt;</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="F47104" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
		  </div>
		</div>
		<div class="zixun_gonggong">
			<div class="zixun_ggtop"><span class="zixun_zi">大乐透</span><span class="zixun_kuozhan">
				<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=daletou" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			   	<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=daletou" title="技巧">技巧</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			   	<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=daletou" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="T01001" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong1">
			<div class="zixun_ggtop"><span class="zixun_zi">焦点赛事</span><span class="zixun_kuozhan">
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=188&channel_name_cn=jiaodiansaishi" title="推荐">更多&gt;&gt;</a></span></div>
			<div class="zixun_list2">
			<ul>
				<%-- <tangs:ryc_newslist categoryCn="焦点赛事" web_id="2" value="3" num="6">
				<li><span class="index_landian"></span>
				<a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?
				newsId=${id}&website_Properties_id=${websiteId}&
				callUrl=&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }&
				categoryId=${categoryCode}&title=${title}" title="${title}"  target="_blank" >[${title_as}]  ${title}</a></li>
				</tangs:ryc_newslist> --%>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong">
			<div class="zixun_ggtop"><span class="zixun_zi">福彩3D</span><span class="zixun_kuozhan">
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=3D" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=3D" title="技巧">技巧</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			  <a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=3D" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="F47103" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong1">
			<div class="zixun_ggtop"><span class="zixun_zi">排列三</span><span class="zixun_kuozhan">
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=pailie3" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=pailie3" title="技巧">技巧</a>
			    &nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=pailie3" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="T01002" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong">
			<div class="zixun_ggtop"><span class="zixun_zi">七星彩</span><span class="zixun_kuozhan">
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=qixingcai" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=qixingcai" title="技巧">技巧</a>
			   &nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=qixingcai" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="T01009" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div><div class="zixun_gonggong1">
			<div class="zixun_ggtop"><span class="zixun_zi">七乐彩</span><span class="zixun_kuozhan">
			<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=165&channel_name_cn=qilecai" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=166&channel_name_cn=qilecai" title="技巧">技巧</a>
			  &nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=167&channel_name_cn=qilecai" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="F47102" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong">
			<div class="zixun_ggtop"><span class="zixun_zi">排列五</span><span class="zixun_kuozhan"><a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=pailie5" title="推荐">推荐</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=163&channel_name_cn=pailie5" title="技巧">技巧</a>
			 &nbsp;&nbsp;|&nbsp;&nbsp;<a href="<%=request.getContextPath()%>/news/newsInfoList!queryNewsInfoList?categoryCode=161&channel_name_cn=pailie5" title="新闻">新闻</a></span></div>
			<div class="zixun_list2">
			<ul>
				<tangs:newsList newsType="4" pageNo="1" pageSize="5" lotNo="T01011" var="n">
				<li>
					<span class="index_landian"></span>
					<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
				</li>
				</tangs:newsList>
			</ul>
			</div>
		</div>
		<div class="zixun_gonggong1">
			<div class="zixun_ggtop"><span class="zixun_zi">帮助中心</span><span class="zixun_kuozhan"><a href="http://www.ruyicai.com/cms/index.html" title="更多" target="_blank">更多&gt;&gt;</a></span></div>
			<div class="zixun_list2">
			<ul>
                 <li> <span class="index_landian"></span><a target="_blank" title="合买大厅排序、置顶规则" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/60.html?fid=5&id=17">合买大厅排序、置顶规则？</a></li>
                 <li> <span class="index_landian"></span><a target="_blank" title="发起合买和保底规则" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/goumaicaipiao/2012/0331/59.html?fid=5&id=17">发起合买和保底规则？</a></li>
                 <li> <span class="index_landian"></span><a target="_blank" title="如何修改已经绑定的邮箱" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/wodezhanghu/2012/0330/53.html?fid=5&id=12">如何修改已经绑定的邮箱？</a></li>
                 <li> <span class="index_landian"></span><a target="_blank" title="充值未及时到帐怎么办" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/chongzhi/2012/0329/20.html?id=6">充值未及时到帐怎么办?</a></li>
                 <li> <span class="index_landian"></span><a target="_blank" title="如意彩网站支持哪些充值方式" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/chongzhi/2012/0329/19.html?id=6">如意彩网站支持哪些充值方式?</a></li>
                 <li> <span class="index_landian"></span><a target="_blank" title="登陆看不到验证码的图片" href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/zhucedenglu/denglu/2012/0329/17.html?id=8">登陆看不到验证码的图片？</a></li>
			</ul>
			</div>
		</div>
	</div>
	<div class="zixun_right">
	<div class="zixun_notice">
		<div class="zixun_noticetop"><span class="webgg_title">网站公告</span></div>
	    <div class="zixun_noticecon">
			<ul>
			  <%-- <tangs:ryc_newslist categoryCn="网站公告" web_id="2" num="5" value="3">
                  <li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }&categoryId=${categoryCode}&title=${title}" title="${title}" target="_blank" >  ${title}</a></li>
                 </tangs:ryc_newslist> --%>
			</ul>
		</div></div>
		<jsp:include page="/function/rules/index_xingyunxuanhao.jsp" ></jsp:include>
	    <div class="zixun_guanggao"><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssc.jsp"><img src="<%=request.getContextPath() %>/function/images/zixun_guanggao.jpg" /></a></div>
		<!--  test  start  -->
		<div class="Pannel NewAndTodayWin">
			<div class="PannelHead">
				<h3>今日开奖</h3>
			</div>
			<div class="PannelBody">
				<div class="TodayWin" id="jinrikaijiang">
				    <script>$(function(){reHtml(80,'lotNo=F47104-F47103-F47102-T01001-T01009-T01002-T01011',false,'jinrikaijiang',true);});</script>
				</div>
			</div>
		</div>
		<!--  test  end  -->
		<div class="zixun_zoushi">
			<div class="zixun_zoushitop">
			<span class="zixun_zoushuzi">走势图</span><span class="zixun_zoushugd"><a href="http://tbzs.ruyicai.com/" title="更多">更多&gt;&gt;</a></span>
			</div>
			<div class="zixun_zoushicon">
				<ul class="zixun_czzs">
					<li><a class="z_ssqlogo"  href="http://tbzs.ruyicai.com/cjwssq/view/ssqzonghe.php" target="_blank"></a></li>
					<li><a class="z_3Dlogo"  href="http://tbzs.ruyicai.com/cjw3d/view/3d_danxuan.php" target="_blank" ></a></li>
					<li><a class="z_dltlogo"  href="http://tbzs.ruyicai.com/cjwdlt/view/dltyqsfq.php" target="_blank"></a></li>
					<li><a class="z_plslogo"  href="http://tbzs.ruyicai.com/cjwpl3/view/pl3_zxylzzhw.php?typeId=zuxuan" target="_blank"></a></li>
				</ul>
				<ul class="zixun_czzs_zi">
					<li><a href="http://tbzs.ruyicai.com/cjwssq/view/ssqzonghe.php" title="双色球" target="_blank">双色球</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjw3d/view/3d_danxuan.php" title="福彩3D" target="_blank">福彩3D</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjwdlt/view/dltyqsfq.php" title="大乐透" target="_blank">大乐透</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjwpl3/view/pl3_zxylzzhw.php?typeId=zuxuan" title="排列三" target="_blank">排列三</a></li>
				</ul>
				<ul class="zixun_czzs1">
					<li><a class="z_plwlogo" href="http://tbzs.ruyicai.com/cjwpl5/view/pl5_zst.php" target="_blank"></a></li>
					<li><a class="z_qlclogo" href="http://tbzs.ruyicai.com/cjwqlc/view/qlcsfq.php" target="_blank"></a></li>
					<li><a class="z_qxclogo" href="http://tbzs.ruyicai.com/cjw7xc/view/7xc_haoma.php" target="_blank"></a></li>
					<li><a class="z_syxwlogo" href="http://tbzs.ruyicai.com/cjw11x5_qs/view/11x5_danxuan.php?lotteryType=11x5" target="_blank"></a></li>
				</ul>
				<ul class="zixun_czzs_zi">
					<li><a href="http://tbzs.ruyicai.com/cjwpl5/view/pl5_zst.php" title="排列五" target="_blank">排列五</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjwqlc/view/qlcsfq.php" title="七乐彩" target="_blank">七乐彩</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjw7xc/view/7xc_haoma.php" title="七星彩" target="_blank">七星彩</a></li>
					<li><a href="http://tbzs.ruyicai.com/cjw11x5_qs/view/11x5_danxuan.php?lotteryType=11x5" title="江西11选5" target="_blank">江西11选5</a></li>
				</ul>
		  </div>
		</div>
		<div class="zixun_ziliao">
			<div class="zixun_zoushitop">
			<span class="zixun_zoushuzi">足球资料库</span><span class="zixun_zoushugd"><a href="" title="更多">更多&gt;&gt;</a></span>
			</div>
			<div class="zixun_ziliaoku">
				<ul>
					<li><a class="z_yingchao" href="" title=""></a></li>
					<li><a class="z_yijia" href="" title=""></a></li>
					<li><a class="z_xijia" href="" title=""></a></li>
					<li><a class="z_dejia" href="" title=""></a></li>
					<li><a class="z_fajia" href="" title=""></a></li>
					<li><a class="z_shijiebei" href="" title=""></a></li>
				</ul>
			</div>
		</div>
	</div>
	</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
</div>
<script type="text/javascript">
		
		$(function() {
			$("#slidebox").jCarouselLite({
				vertical: false,
				hoverPause:true,
				visible: 1,
				start: 0,
				scroll: 1,
				circular: true,
				auto:3000,
				speed:500,				
				btnGo:
				    [".1", ".2",
				    ".3", ".4",".5"],
				
				afterEnd: function(a, to, btnGo) {
						if(btnGo.length <= to){
							to = 0;
						}
						$(".thumbActive").removeClass("thumbActive");
						$(btnGo[to]).addClass("thumbActive");
				    }
			});
		});
		</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>