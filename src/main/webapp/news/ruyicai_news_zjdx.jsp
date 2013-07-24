<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%> 
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩-专家短信</title>
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
   <div class="zixun_main">
   	<div class="zixunleft">
   	<tangs:ryc_newslist  value="7"  begin="0" end="1" newsId="%{#parameters.newsId[0]}" >
		<div class="zixuntop">您所在的位置：<a href="/index.html">博雅彩</a> &gt; <a href="/zhuanjiaduanxin.html">专家短信</a>  &gt; <%= new String(request.getParameter("callUrl").getBytes("ISO-8859-1"),"UTF-8") %> &gt; 正文</div> 
	    <div class="zixunlist">
			<div class="zixun_top">${title}</div>
			<div class="zixun_title">${updatetime}   　　来源： ${author} 　　责编： ${compile}     　　点击： <font class="red2" id="clickCount"><script>update_clickCount(${id});getClickCount(${id});</script>	</font></div>
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
  </div>
      
  <div class="zixunright">
	<div class="jinri_kj">
				<div class="jinri_top"><span style="float:left;">热点资讯</span><a class="inhelp_more" href="/redianxinwen/redianxinwen__1.html" title="更多" target="_blank">更多>></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="热点新闻"  web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="${url}" title="${title}"  target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top"><span style="float:left;">双色球专家推荐</span><a href="/zhuanjiatuijian/zhuanjiatuijian_shuangseqiu_1.html" title="更多" target="_blank" class="inhelp_more">更多>></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="福彩推荐" channelCn="双色球" web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="${url}" title="${title}" target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="jinri_kj">
				<div class="jinri_top"><span style="float:left;">3D专家推荐</span><a href="/zhuanjiatuijian/zhuanjiatuijian_fucai3D_1.html" title="更多" target="_blank" class="inhelp_more">更多>></a></div>
				<div class="webgg_con">
				<ul>
					<tangs:ryc_newslist value="3" begin="0" end="6" categoryCn="福彩推荐" channelCn="福彩3D" web_id="%{#parameters.website_Properties_id[0]}">
				     <li><a href="${url}" title="${title}" target="_blank">${title}</a></li>
				     </tangs:ryc_newslist>
				</ul>
			</div>
			</div>
			<div class="zixun_gg"><img   class="wumiiIgnore" src="/images/zixun_gg.gif" width="270"  /></div>
	</div></div>
	</div>
   <!--#include virtual="/include/footer_noindex.html" -->
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
