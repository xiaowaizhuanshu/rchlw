<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="byc" uri="/WEB-INF/byc.tld"%>  
<%@taglib prefix="s" uri="/struts-tags" %>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="博雅彩,彩票购买,彩票投注,福彩投注,体彩购买,竞彩足球,高频彩,购彩大厅,开奖公告,彩票走势图,彩票资讯,合买中心" />
<title>博雅彩 -在线彩票购彩交易平台</title>
<meta name="description" content="博雅彩为彩民提供, 彩票投注,彩票购买, 福彩投注, 体彩投注,将互联网电子彩票进行投注购买,走势,预测,兑奖等一体化服务相结合【彩民推荐的购买投注网站】!"/>
<meta name="baidu-site-verification" content="wWYQuoP5DG2qzXxk" />

<link href="/rchlw/recs/styles/reset.css" rel="stylesheet" type="text/css" />
<link href="/rchlw/recs/styles/index.css" rel="stylesheet" type="text/css" />
<script src="/rchlw/recs/scripts/jquery-1.7.2.min.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/index.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/scroll.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/kuaitouzhu.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/function/js/util.js" type="text/javascript" language="javascript"></script>
<script src="/rchlw/recs/scripts/index_jczq/zuqiu.js" type="text/javascript" language="javascript"></script>
</head>

<body>
<script>$(function(){index_toplogo('header',"indexHome");});</script>
	<!--头部 header-->
	<div id="header" class="header">
    
    </div>
	<!--头部 header end-->
    <!--index main-->
    <div class="main">
    	<div class="min_center">
        	<div class="min_top">
                <!--手机购彩-->
                <div class="phone">
                		<div id="right_login">
                			<script>$(function(){indexRight();});</script>
                		</div>
                        
                        <div class="phone_buy">
                            <div class="fast_tab">
                                <label>手机购彩</label>
                            </div>
                            <div class="phone_dowmload">
                                <a href="javascript:void(0)" class="android_link"></a>
                                <a href="javascript:void(0)" class="IOS_link"></a>
                                <span>博雅彩手机客户端</span>
                                <div class="phone_text">
                                    <label>购彩安全</label>
                                    <label>投注方便</label>
                                    <label>领奖快捷</label>
                                    <label>随时随地中大奖！</label>
                                </div>
                                <div class="phone_sevice">
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                <!--焦点-->
                <div class="leftLoop">
                    <div class="hd">
                        <ul>
                            <li class="small_click"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span class="on"></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="bd">
                        <ul class="picList">
                            <li><a href="javascript:void(0)"><img src="/rchlw/recs/images/1.jpg" /></a></li>
                            <li><a href="javascript:void(0)"><img src="/rchlw/recs/images/2.jpg" /></a></li>
                            <li><a href="javascript:void(0)"><img src="/rchlw/recs/images/3.jpg" /></a></li>
                        </ul>
                    </div>
                </div>
                <!--快速购彩-->
                <div class="fast">
                    <div class="fast_tab">
                        <label>快速购彩</label>
                        <div class="tab_click">
                            <b>购彩推荐：</b>
                            <span class="on">双色球</span>
                            <span>大乐透</span>
                            <span>福彩3D</span>
                        </div>
                    </div>
                    <div class="fast_each">
                        <div class="fast_each_list">
                            <div class="shuangsq">
                                <span>双色球</span>
                            </div>
                            <div class="shuangsq_info">
                                <b>第2013081期</b>
                                <span>每注2元，最高可中1000万</span>
                                <a href="javascript:ssq_dingshi();" class="jixuan">机选</a>
                                <label>奖池：126，651， 295元</label>
                                <div class="touzhu_select">
                                    <input type="text"  id="ssq0"  value="02"/>
                                    <input type="text"   id="ssq1"     value="09"/>
                                    <input type="text"   id="ssq2"   value="16"/>
                                    <input type="text"  id="ssq3"  value="17"/>
                                    <input type="text"   id="ssq4"   value="23"/>
                                    <input type="text"  id="ssq5"   value="26"/>
                                    <input type="text"  id="ssq6"   value="05" class="on"/>
                                    <a href="jvascript:void(0)"></a>
                                </div>
                            </div>
                        </div>
                        <div class="fast_each_list"></div>
                        <div class="fast_each_list"></div>
                    </div>
                </div>
            </div>
            <!--开奖公告-彩票走势图-->
            <div class="Announcement">
            	<div class="announ_left" id="announ_left">
                	<!-- //这里条用的是util.js里面的方法 -->
			 		<script>
			 			$(function(){reHtml(26, true, '', 'announ_left');});
			 		</script>
                </div>
                <!--announ_left end-->
            	<div class="announ_center">
                	<div class="an_center_tab">
                    	<span class="on">彩票资讯</span>
                        <ul class="c_tab_right">
                        	<li><a href="<%=request.getContextPath() %>/news/news!list.action?nt=1&ncc=2&ln=F47104&cp=F47104" target="_blank" >双色球</a></li>
                            <li><a href="<%=request.getContextPath()%>/news/news!list.action?nt=1&ncc=2&ln=T01001&cp=T01001" target="_blank">大乐透</a></li>
                            <li><a href="<%=request.getContextPath()%>/news/news!list.action?nt=1&ncc=2&ln=F47103&cp=F47103" target="_blank">福彩3D</a></li>
                        </ul>
                    </div>
                    <div class="c_tab_info">
                    	<div class="c_tab_infolist">
                    			<tangs:ryc_newslist categoryCn="热点新闻" istopNews="1" web_id="%{#parameters.website_Properties_id[0]}" status="s1" num="1" value="3">
									<strong><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
										&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
										&categoryId=${categoryCode}&title=${title}" style="color:${title_color}" target="_blank">${title}</a></strong>
								</tangs:ryc_newslist>
								<byc:newsList category="1" channel="5" pageNo="1" pageSize="3" var="n">
										<span><a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a></span>
								</byc:newsList>
                        </div>
                        <div class="c_tab_infolist">
                            <b>[福彩]</b>
                            <tangs:ryc_newslist categoryCn="福彩资讯" web_id="%{#parameters.website_Properties_id[0]}" num="1" value="13">
								<b><a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
									&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
									&categoryId=${categoryCode}&title=${title}" style="color:${title_color}" target="_blank">${title}</a> </b>
								</tangs:ryc_newslist>
								
                            <tangs:ryc_newslist categoryCn="福彩资讯" web_id="%{#parameters.website_Properties_id[0]}" num="6" value="13" begin="1" end="5">
							 	<p><label>[${createtimeFm}]</label>[${title_as}] 
										<a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
									&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
									&categoryId=${categoryCode}&title=${title}" style="color:${title_color}" target="_blank">${title}</a>
								 </p>
							</tangs:ryc_newslist>
							<!--                          
                            <p><label>[2013-07-14]</label>[推荐] 专家组双色球第081期：重号防 23 28 </p>
                            <p><label>[2013-07-14]</label>[推荐] 专家组双色球第081期：重号防 23 28 </p>
                            <p><label>[2013-07-14]</label>[推荐] 专家组双色球第081期：重号防 23 28 </p> -->
                        </div>
                        <div class="c_tab_infolist">
                            <b>[体彩]</b>
                            <tangs:ryc_newslist categoryCn="体彩资讯" web_id="%{#parameters.website_Properties_id[0]}" num="1" value="13">
								<a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
										&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
										&categoryId=${categoryCode}&title=${title}" target="_blank" style="color:${title_color}">${title}</a>
								</tangs:ryc_newslist>
							
                            <tangs:ryc_newslist categoryCn="体彩资讯" web_id="%{#parameters.website_Properties_id[0]}" num="6" value="13" begin="1" end="5">
								<p><label>[${createtimeFm}]</label>[${title_as}] 
									<a href="<%=request.getContextPath() %>/news/ruyicai_news.jsp?newsId=${id}
										&website_Properties_id=${websiteId}&callUrl=${callUrl}&channelId=${channelId}&channelCn=${channelCn}&categoryNameCn=${categoryCn }
										&categoryId=${categoryCode}&title=${title}" target="_blank" style="color:${title_color}">${title}</a>
								 </p>
							</tangs:ryc_newslist>
                        </div>
                    </div>
                </div><!--announ_center end-->
            	<div class="announ_right">
                	<div class="annun_right_list">
                    	<div class="an_right_tab">
                            <span>网站公告</span>
                        </div>
                        <div class="an_list_top">
                        	<byc:newsList category="1" channel="4" pageNo="1" pageSize="6" var="n">
								<span>
									<a href="${ctx}/news/ruyicai_news.jsp?newsId=${n.newsId}" title="${n.title}" target="_blank" >${n.title}</a>
								</span>
							</byc:newsList>
                        </div>
                    </div>
                	<div class="annun_right_list on">
                    	<div class="an_right_tab">
                            <span>大奖播报</span>
                        </div>
                        <div class="an_list_bottom">
                        	<h3>双色球第2013081期今日加奖，奖池1.26亿</h3>
                        	<span>大乐透头奖18期连出纪录终止 500...</span>
                            <span>大乐透头奖18期连出纪录终止 500...</span>
                            <span>大乐透头奖18期连出纪录终止 500...</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--广告位-->
            <div class="guanggaowei">广告位</div>
             <div class="recommened">
             		<script type="text/javascript">
						$(function(){reHtml(82,'isAjax=shouye&pageCount=10','','shouyehemai');});
					</script>
            	<div id="shouyehemai">
            	</div>
            	
            	<script>
			 	$(function(){
			 		reHtml(83,'','','paihang');
			 	});
				</script>
            	<div id="paihang">
            		
            	</div>
            	
            </div>
            <div class="hotBettle">
            	<div class="Battle">
                	<div class="rec_tab">
                    	<a href="javascript:void(0)">更多>></a>
                    	<b>竞彩热投</b>
                    </div>
                    <div id="jcsj">
                    	<!-- 加载竞彩热投数据  精彩足球胜平负 -->
                    	<script type="text/javascript">
                    		$(function(){
                    			reHtml(85, 'type=1&lotNo=J00001&valueType=1', false, 'jcsj','true');                    			
                    		});
                    	</script>
	                    	
                    </div>
                </div>
                <!--竞彩新闻-->
                <div class="bettle_news">
                	<div class="new_hotbet">
                    	<div class="rec_tab">
                            <a href="javascript:void(0)">更多>></a>
                            <b>竞彩新闻</b>
                        </div>
                        <div class="be_news_list">
                        	<b>尤文那不勒斯酿双赢交易 祖尼加+200万换马特里?</b>
                            <strong>一周赛事展望:金杯赛入佳境欧冠开打 国足战日本</strong>
                            <p>竞彩:赫尔辛堡战升班马</p>
                            <p>胜负彩13087期冷门排序：埃尔夫平哈尔姆爆头冷</p>
                            <p>北单:法国女足让2球 7月竞猜</p>
                            <p>竞彩:赫尔辛堡战升班马</p>
                        </div>
                    </div>
                    <div class="bettle_football">
                    	<div class="rec_tab">
                            <a href="javascript:void(0)">更多>></a>
                            <b>足彩资料库</b>
                        </div>
                        <div class="guojia_icon">
                        	<div class="single_coun">
                            	<img src="/rchlw/recs/images/1-1.jpg" />
                                <span>英格兰</span>
                            </div>
                            <div class="single_coun">
                            	<img src="/rchlw/recs/images/1-2.jpg" />
                                <span>意大利</span>
                            </div>
                            <div class="single_coun">
                            	<img src="/rchlw/recs/images/1-3.jpg" />
                                <span>德国</span>
                            </div>
                        </div>
                        <div class="saishi_look">
                        	<a href="javascript:void(0)">国际赛事</a>
                        	<a href="javascript:void(0)">欧洲赛事</a>
                        	<a href="javascript:void(0)">亚洲赛事</a>
                        	<a href="javascript:void(0)">南美赛事</a>
                        	<a href="javascript:void(0)">非洲赛事</a>
                        	<a href="javascript:void(0)">中北美赛事</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="clear"></div>
        </div>
    </div>
    <!--red_foot-->
    <div class="red_foot">
    	<div class="red_center">
        	<div class="weixin_icon">
            	<span>官方微信扫一扫</span>
            	<a href="javascript:void(0)"><img src="/rchlw/recs/images/weixin.png" /></a>
            </div>
            <dl>
            	<dt>新手指南</dt>
                <dd><a href="javasccript:void(0)">购彩流程</a></dd>
                <dd><a href="javasccript:void(0)">领奖流程</a></dd>
                <dd><a href="javasccript:void(0)">如何充值</a></dd>
                <dd><a href="javasccript:void(0)">彩票玩法</a></dd>
            </dl>
            <dl>
            	<dt>帮助中心</dt>
                <dd><a href="javasccript:void(0)">在线购彩</a></dd>
                <dd><a href="javasccript:void(0)">手机购彩</a></dd>
                <dd><a href="javasccript:void(0)">常见问题</a></dd>
                <dd><a href="javasccript:void(0)">玩法介绍</a></dd>
                <dd><a href="javasccript:void(0)">彩票术语</a></dd>
            </dl>
            <dl>
            	<dt>充值中心</dt>
                <dd><a href="javasccript:void(0)">银联支付</a></dd>
                <dd><a href="javasccript:void(0)">支付宝支付</a></dd>
                <dd><a href="javasccript:void(0)">联动优势充值</a></dd>
                <dd><a href="javasccript:void(0)">银联语音充值</a></dd>
                <dd><a href="javasccript:void(0)">银行转账</a></dd>
            </dl>
            <div class="weibo_boyacai">
            	<span>博雅彩官方微博</span>
                <div class="sina_boyacai">
                	<label>博雅彩新浪微博</label>
                    <a href="javascript:void(0)"></a>
                </div>
            </div>
        </div>
        <div class="huise_foot">客服电话：&nbsp;&nbsp;400-856-1000&nbsp;&nbsp;彩民群：&nbsp;&nbsp;247533407</div>
    </div>
    <div class="friend_link">
    	<div class="f_link_center">
        	<span>合作机构</span>
            <a href="javascript:void(0)" class="china_yinlian"></a>
            <a href="javascript:void(0)" class="china_baidu"></a>
            <a href="javascript:void(0)" class="china_sina"></a>
            <a href="javascript:void(0)" class="china_tx"></a>
            <a href="javascript:void(0)" class="china_zhifubao"></a>
        </div>
    </div>

    <!--index  footer end-->
    <jsp:include page="/views/footer.jsp"/>
</body>
</html>
