<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<meta name="keywords" content="购彩大厅,如意彩,彩票网,购彩网,福彩,体彩,足彩,竞彩,高频彩,购彩,投注,在线购彩,在线投注 " />
<title>购彩大厅- 在线购彩- 投注|福彩|体彩|足彩|竞彩|高频彩|如意彩</title>
<meta name="description" content="购彩大厅是为彩民提供福彩,体彩,时时彩,足球单场,胜负彩,将互联网电子彩票,在如意彩彩票网站上进行投注购买的窗口" />
<link rel="shortcut icon" href="<%=request.getContextPath() %>/function/images/biao-ico.ico" type="image/x-icon"
/>
<link href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" type="text/css">
<link href="<%=request.getContextPath() %>/function/css/newsAll.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js">
</script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/kuaiTouZhou.js">
</script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jinrijiezhi_timeEnd.js">
</script>
</head>
<body>
<div id="body">
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
<div id="main">
	<div id="zhanghu">
		<div class="main_left">
			<div class="zuijingc" id="zuijingc">
				<!-- 最近购彩种 -->
				<script>
					$(function() {
						reHtml(46, '', 'false', 'zuijingc');
					});
				</script>
				
			</div>
			<div class="bt">
				<img src="<%=request.getContextPath() %>/function/images/goucaitop.gif" width="190" height="29">
			</div>
			<div id="PARENT_gc">
				<div class="gcnaw">
					<img class="gc_img" src="<%=request.getContextPath() %>/function/images/mfclogo.gif">
					<span class="gcnaw1">福彩</span>
				</div>
				<ul class="expanded_gc">
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp" title="双色球"><span>双色球</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_3D.jsp" title="福彩3D"><span>福彩3D</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qlc.jsp" title="七乐彩"><span>七乐彩</span></a></li>
				</ul>
				<div class="gcnaw">
					<img class="gc_img" src="<%=request.getContextPath() %>/function/images/mtclogo.gif">
					<span class="gcnaw1">体彩
					</span>
				</div>
				<ul class="expanded_gc">
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp"><span>大乐透</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_pls.jsp" title="排列三"><span>排列三</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_plw.jsp" title="排列五"><span>排列五</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_qxc.jsp" title="七星彩"><span>七星彩</span></a></li>
				</ul>
				<div class="gcnaw">
					<img class="gc_img" src="<%=request.getContextPath() %>/function/images/gpclogo.gif">
					<span class="gcnaw1">高频</span>
				</div>
				<ul class="expanded_gc">
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssc.jsp" title="时时彩"><span>时时彩</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_11xuan5.jsp" title="江西11选5"><span>江西11选5</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_syydj.jsp" title="十一运夺金"><span>十一运夺金</span></a></li>
				</ul>
					<div class="gcnaw">
					<img class="gc_img" src="<%=request.getContextPath() %>/function/images/zucai.gif">
					<span class="gcnaw1">足彩</span>
				</div>
				<ul class="expanded_gc">
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_shengfucai.jsp" title="足彩胜负"><span>足彩胜负</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_renjiuchang.jsp" title="任选9场"><span>任选9场</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_liuchangban.jsp" title="6场半全"><span>6场半全</span></a></li>
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_sichang.jsp" title="4场进球"><span>4场进球</span></a></li>
				</ul>
			<div class="gcnaw">
					<img class="gc_img" src="<%=request.getContextPath() %>/function/images/jclogo20.gif">
					<span class="gcnaw1">竞彩</span>
				</div>
				<ul class="expanded_gc">
					<li><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_jingcai_football.jsp" title="竞彩足球"><span>竞彩足球</span></a></li>
				</ul>
			</div>
		</div>
		<div class="goucai_mid">
			<!-- ImageSlide start -->
			<style>
				#slidebox ul ,#slidebox ul li{width:518px;height:162px; margin:0px; padding:0px;overflow:hidden;}
			</style>
			<div id="slidebox" style="width: 519px;">
				<div class="thumbs">
					<a href="javaScript:;" class="1 b1 thumbActive"><span class="HomePageBGBox s1">&nbsp;</span></a>
					<a href="javaScript:;" class="2 b2"><span class="HomePageBGBox s2">&nbsp;</span></a>
					<a href="javaScript:;" class="3 b3"><span class="HomePageBGBox s3">&nbsp;</span></a>
					<a href="javaScript:;" class="4 b4"><span class="HomePageBGBox s4">&nbsp;</span></a>
					<a href="javaScript:;" class="5 b5"><span class="HomePageBGBox s5">&nbsp;</span></a>
				</div>
				<ul>
					<tangs:ryc_newslist web_id="%{#parameters.website_Properties_id[0]}" value="3"
							istopNews="1" categoryCn="购彩大厅轮换" num="5">
						<li>
							<a href="${content}">
								<img src="${picName}">
							</a>
						</li>
					</tangs:ryc_newslist>
				</ul>
			</div>
			<!-- ImageSlide end -->
			<div class="goucai_list" id="goucai_list">
				<!-- 今日购彩截止 -->
		        <script>$(function(){getjinrijiezhi("F47104-F47103-F47102-T01001-T01009-T01002-T01011");});</script>
			</div>
		</div>
		<div class="goucai_right">
			<div class="goucai_gg">
				<div class="goucai_ggtop">
					<span class="webgg_title">公告</span>
				</div>
				<div class="goucai_ggcon">
					<ul>
						<tangs:ryc_newslist categoryCn="网站公告" value="3" web_id="%{#parameters.website_Properties_id[0]}"
						num="5">
							<li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&channelCn=${channelCn}&categoryNameCn=${categoryCn }&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" title="${title}" tyle="color:${title_color}"  target="_blank">${title}</a></li>
						</tangs:ryc_newslist>
					</ul>
				</div>
			</div>
			<div class="goucai_zsh">
				<div class="goucai_ggtop">
					<span class="newswin_title">图表走势</span>
					<a href="http://tbzs.ruyicai.com" title="更多" target="_blank" class="web_more">更多>></a>
				</div>
				<div class="goucai_zshcon ChannelBuyCurrent">
					<ul>
						<tangs:ryc_newslist value="3" categoryCn="图表走势" web_id="%{#parameters.website_Properties_id[0]}">
							<li style="padding-left:10px;"><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&channelCn=${channelCn}&categoryNameCn=${categoryCn }&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" target="_blank">${title}</a>
							</li>
						</tangs:ryc_newslist>
					</ul>
				</div>
			</div>
			<div class="goucai_gg">
				<div class="goucai_ggtop">
					<span class="goucai_title">帮助中心</span>
					<a href="http://www.ruyicai.com/cms/index.html" class="web_more" target="_blank">更多&gt;&gt;</a>
				</div>
				<div class="webgg_congc">
					<ul>
						<tangs:ryc_newslist value="3" end="10" categoryCn="帮助中心" web_id="%{#parameters.website_Properties_id[0]}">
							<li><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}&channelCn=${channelCn}&categoryNameCn=${categoryCn }&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&categoryId=${categoryCode}&title=${title}" title="${title}" title="${title}">${title}</a>
							</li>
						</tangs:ryc_newslist>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(function() {
		$("#slidebox").jCarouselLite({
			vertical: false,
			hoverPause: true,
			btnPrev: ".slideboxPrev",
			btnNext: ".slideboxNext",
			visible: 1,
			start: 0,
			scroll: 1,
			circular: true,
			auto: 3000,
			speed: 500,
			btnGo: [".1", ".2", ".3", ".4", ".5"],

			afterEnd: function(a, to, btnGo) {
				if (btnGo.length <= to) {
					to = 0;
				}
				$(".thumbActive").removeClass("thumbActive");
				$(btnGo[to]).addClass("thumbActive");
			}
		});
	});
</script>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
	<input type="hidden" value="" name="tishi" id="tishi">
</div>
