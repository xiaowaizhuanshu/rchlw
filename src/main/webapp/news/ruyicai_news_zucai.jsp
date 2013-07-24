<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%> 
<%@taglib prefix="s" uri="/struts-tags" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>足彩资讯 – 博雅彩 – 彩票资讯|购彩资讯|彩民新闻|专家推荐|媒体预测</title>
<meta name="keywords" content="彩票预测,中国足彩网,中国竞彩网,中国竞猜网,彩民新闻" />
<meta name="description" content="彩票资讯是博雅彩彩票资讯频道为您提供福彩、体彩、足彩、竞彩和高频彩等彩票的信息、推荐、分析、点评等免费彩票预测服务" />
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css" />
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js" ></script>
</head>
<body>
   <div id="body">
  <script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
   <div id="main">
   <div class="zixuntop">您所在的位置：<a href="<%=request.getContextPath() %>/index.jsp">博雅彩</a> ><a href="/rchlw/news/category_xinwenzixun.jsp">热点资讯</a>&gt; <%= new String(request.getParameter("callUrl").getBytes("ISO-8859-1"),"UTF-8") %> &gt; 正文</div>
   <div class="zixun_main">
   	<div class="zixunleft" style="border:0px;">
   		<tangs:ryc_newslist  value="7"  begin="0" end="1" newsId="%{#parameters.newsId[0]}" >
	    <div class="zixunlist" style="border:solid 1px #DBDBDB;">
			<div class="zixun_top">${title}</div>
			<div class="zixun_title">${createtime}   　　来源： ${author} 　　责编： ${compile}    　　点击： <font class="red2" id="clickCount"><script>update_clickCount(${id});getClickCount( ${id});</script>	</font></div>
			<div class="zixun_con">
			${content}
			<br />
			<br />
			<div class="RelatingArticle" >
				<h3>您也可能喜欢:</h3>
				<tangs:ryc_newslist categoryId="%{#parameters.categoryId[0]}"  web_id="%{#parameters.website_Properties_id[0]}"  newsId="%{#parameters.newsId[0]}"  value="20" num="5" status="s">
					<dl>
						<dd>
							<a href="${url }">${title}</a>
						</dd>
					</dl>
				</tangs:ryc_newslist>
			</div>
				<jsp:include page="/function/rules/bshare.jsp"></jsp:include>
			</div>
		</div>

		</tangs:ryc_newslist>
		<div class="space10">&nbsp;</div>
		<div class="ZixunBottom">
			<div class="ZixunMap_zucai">
				<div class="zucai_map_list">
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp" title="足彩胜负"><span class="caizh_img_zucai"><img src="<%=request.getContextPath() %>/function/images/zucai23.gif"></span></a>
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp" title="足彩胜负"><span class="caizh_zi_zucai"><img src="<%=request.getContextPath() %>/function/images/wenzi_shfc.gif"></span></a>
					<div><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp" title="足彩胜负"><span class="caizh_gm_zucai">立即购买&gt;&gt;</span></a></div>
				</div>
				<div class="zucai_map_list">
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_liuchangban.jsp" title="6场半全"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/zucai23.gif"></span></a>
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_liuchangban.jsp" title="6场半全"><span class="caizh_zi_zucai"><img src="<%=request.getContextPath() %>/function/images/wenzi_6chbq.gif"></span></a>
					<div><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_liuchangban.jsp" title="6场半全"><span class="caizh_gm_zucai">立即购买&gt;&gt;</span></a></div>
				</div>
				<div class="zucai_map_list">
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_sichang.jsp" title="4场进球"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/zucai23.gif"></span></a>
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_sichang.jsp" title="4场进球"><span class="caizh_zi_zucai"><img src="<%=request.getContextPath() %>/function/images/wenzi_4chjq.gif"></span></a>
					<div><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_sichang.jsp" title="4场进球"><span class="caizh_gm_zucai">立即购买&gt;&gt;</span></a></div>
				</div>
				<div class="zucai_map_list">
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_renjiuchang.jsp" title="任选9场"><span class="caizh_img"><img src="<%=request.getContextPath() %>/function/images/zucai23.gif"></span></a>
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_renjiuchang.jsp" title="任选9场"><span class="caizh_zi_zucai"><img src="<%=request.getContextPath() %>/function/images/wenzi_renxuanjc.gif"></span></a>
					<div><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_renjiuchang.jsp" title="任选9场"><span class="caizh_gm_zucai">立即购买&gt;&gt;</span></a></div>
				</div></div>
			<div class="zixun_zsh1 ZixunZoushi">
			  <div class="zixun_zoushitop"><span class="zixun_zoushuzi">足球资料库</span><span class="zixun_zoushugd"><a href="" title="更多">更多&gt;&gt;</a></span> </div>
			  <div class="zucai_ziliaoku">
				<ul>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/yingchao.gif" /></a></li>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/yijia.gif" /></a></li>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/xijia.gif" /></a></li>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/dejia.gif" /></a></li>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/fajia.gif" /></a></li>
					<li><a href="" title=""><img src="<%=request.getContextPath() %>/function/images/shijiebei.gif" /></a></li>
				</ul>
			</div>
		</div>
		</div>
	</div>
   	<div class="zixunright">
	<div class="jinri_kj">
				<div class="jinri_top1"><span class="jinri_zi">专家推荐</span>
				<a href="/zucai/zucai__1.html" target="_blank" class="web_more">更多>></a>
				</div>
				<div class="webgg_con">
				<ul>
				     <tangs:ryc_newslist categoryCn="足彩" web_id="%{#parameters.website_Properties_id[0]}" value="16" num="6">
				<li><a href="${url}" title="${title}"  target="_blank"   >[${title_as}]  ${title}</a></li>
				</tangs:ryc_newslist>
		     </ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top1"><span class="jinri_zi">最新中奖</span></div>
				<div class="webgg_con" id="webgg_con">
				<ul class="NewWinList">
					<tangs:ryc_newslist value="3" begin="0"   categoryCn="最新中奖"  web_id="%{#parameters.website_Properties_id[0]}"  num="1" >
				     ${content}
				     </tangs:ryc_newslist>
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
				<div class="jinri_top1"><span class="jinri_zi">投注技巧</span>
				<a target="_blank" class="web_more"></a>
				</div>
				<div class="webgg_con">
				<ul>
				     <tangs:ryc_newslist value="12" begin="0" end="6"  num="6" categoryCn="福彩技巧"  web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="${url}" title="${title}" target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
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
      //alert($("a[href*='/widget/relatedItems.htm']").html());
      $("a[href$='/widget/relatedItems.htm']").html(" ");
       }
   else {  
       setTimeout("loadWindow()", 500);
	   }
} 
loadWindow(); 
</script> 
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>