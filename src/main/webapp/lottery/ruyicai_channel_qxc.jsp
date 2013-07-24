<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩七星彩投注、开奖公告、开奖点评、冷热号分析、奖金对照表、走势图表 </title>
<meta http-equiv="keywords" content="七星彩投注，七星彩开奖公告，七星彩开奖点评，七星彩冷热号分析，七星彩奖金对照表，七星彩走势图表"/>
<meta http-equiv="description" content="博雅彩七星彩集投注、开奖公告、开奖点评、冷热号分析、奖金对照表、走势图表为一体是七星彩一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/qxc/qxc.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/upload.js"></script>
</head>

<body>
<script>hemaiInit();zengcaiInit();</script>
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
<div class="space10">&nbsp;</div>

<div class="ChannelBuyBody">

	<div class="ChannelBuyHandle">
		<div class="ChannelBuyBanner">
			
			<!--  Banner start  -->
			<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_qxc_d.gif) no-repeat 15px 15px;">
				<li>
					<!-- 期号 截至时间  倒计时    开始 -->
					<script>$(function(){getBatchCode('T01009');});</script>
					<img src="<%=request.getContextPath() %>/function/images/word_qxc.gif" /><i>当前期第<strong id="qihao"></strong>期　每周二、五、日开奖，2元赢取500万！　</i><span id="jinrikaijiangId"></span>
				</li>
				<li>
					截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
				</li>	
			</ol>
			
			<!--  Banner end  -->
			
			<div class="space10">&nbsp;</div>
			
			<!--  Tab start  -->
			<div class="ChannelBuyHandleMainTab">
				<dl class="ChannelBuyTab">
					<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01009'">参与合买</dt>
					<dt class="light selected" ControlTarget="BuyChoice">选号投注</dt>
					<dt class="light" onclick="window.location.href='/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
					<dd>
						<a onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="七星彩" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"> <h3 style='line-height:26px;'>${title}</h3>${content}</tangs:ryc_newslist>" target="_blank" href='http://www.ruyicai.com/cms/a/bangzhuzhongxin/wanfajieshao/2012/0329/30.html?fid=36&id=30'>玩法介绍</a>
						<a href="http://tbzs.ruyicai.com/cjw7xc/index.php" target="_blank">走势图表</a>
						<a style="border:0px;" href="/rchlw/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=qixingcai" target="_blank">专家推荐</a>
					</dd>
				</dl>
			</div>
			
			<div class="ChannelBuyHandleSecondTab">
			
				<dl class="ChannelBuyTab BuyChoice none selected" ControlTarget="BuyNormal">
					<dt class="BuyNormal light selected" ControlTarget="BuyNormalContent" onclick="setErjiwanfa('普通投注');judgeCaizhong();">普通投注</dt>
					<dt class="BuyUpload light" ControlTarget="BuyUploadContent" onclick="setErjiwanfa('单式上传');judgeCaizhong();chushihuaRedio();">单式上传</dt>
				</dl>
				
				<dl class="ChannelBuyTab ProjectMine none" ControlTarget="BuyProjectA">
					<dt class="BuyProjectA light selected" ControlTarget="BuyProjectAContent">我的方案A</dt>
					<dt class="BuyProjectB light" ControlTarget="BuyProjectBContent">我的方案B</dt>
					<dt class="BuyProjectC light" ControlTarget="BuyProjectCContent">我的方案C</dt>
				</dl>
				
			</div>
		<!--  Tab end  -->
		</div><!--  ChannelBuyBanner  -->
			<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByDipin" method="post">
				<div class="ChannelBuyHandleTabContent">
					<div class="BuyNormalContent none selected">
						<jsp:include page="/function/ruyicai_qxc/qxc_common.jsp"/>
					</div>
					<div class="BuyUploadContent ChannelBuyUpload none">
						<jsp:include page="/function/ruyicai_qxc/qxc_danshiUpload.jsp"/>
					</div>
					<div class="BuyProjectAContent none">我的方案A内容</div>
					<div class="BuyProjectBContent none">我的方案B内容</div>
					<div class="BuyProjectCContent none">我的方案C内容</div>
					<!-- 七星彩号码栏-->
					<jsp:include page="/function/public_rtz.jsp"/>
			    <!-- 合买追号-->
				</div>
				<jsp:include page="/function/public_hemai_zuihao_dipin.jsp"/>
				<input type="hidden" id="jsonString" name="jsonString" value="" /> 
		        <input type="hidden" id="caiZhong" value="qxc" /> 
		        <input type="hidden" id="path" name="path" value=""/> 
	            <input type="hidden" id="errorCode" name="errorCode" value=""/>
		        <input type="hidden" id="lotNo" value="T01009" name="lotNo" />
		        <input type="hidden"  id="tishi" value="" name="tishi">
		        <input type="hidden" id="dangqianwanfa" value=""  />
			    <input type="hidden" id="erjiwanfa" value="普通投注"  />
			    <input type="hidden" id="goumaifangshi" value="代购"  />
	 			<input type="hidden" id="zhuihaoJson" name="zhuihaoJson" value=""  />
				<input type="hidden" id="payType" name="payType" value=""  />
				<input type="hidden" id="payStop" name="payStop" value=""  />
				<input type="hidden" id="smsType" name="smsType" value=""  />
				<input type="hidden" id="diyiqiMoney" name="diyiqiMoney" value=""  />
				<input type="hidden" id="allqiMoney" name="allqiMoney" value=""  />
				<input type="hidden" id="daiGouHemai" name="daiGou" value="daigou"  />
				<input type="hidden" id="shouyiDesc" name="shouyiDesc" value=""  />
				<input type="hidden" id="isZhuihao" value="0"  />
				<input type="hidden" id="danqiJiangjinCheck" value="0"  />
				<input type="hidden" id="JiangjinStop" value="0" name="JiangjinStop" />
				<input type="hidden" id="diyiqiQihao" value=""  />
				<input type="hidden" id="zongQishu" value="0"  />
				<input type="hidden" id="jsonStringCLR" name="jsonStringCLR" value="" />
				<input style="display: none;" type="text"/>
			</form>
	</div>
	
	<div class="ChannelBuyInfo">
		<!--  七星彩开奖公告 start  -->
		<div id="ChannelBuyBulletin">
		<script>$(function(){kaijiangBylotno('T01009','ChannelBuyBulletin');});</script>
		</div>
		<!--  七星彩开奖公告 end  -->
		<div class="space10">&nbsp;</div>
		<!--  七星彩上期开奖点评 start  -->
		<div class="ChannelBuyPannel ChannelBuyReview">
			<div class="ChannelBuyPannelHead"><h3>七星彩上期开奖点评</h3></div>
			<div class="ChannelBuyPannelBody">
				<ol>
					<tangs:ryc_newslist web_id="2" categoryCn="开奖点评" channelCn="七星彩" value="3" num="1">
					<li>
						${content}
					</li>
					</tangs:ryc_newslist>
				</ol>
			</div>
		</div>
		<!--  七星彩上期开奖点评 end  -->
		<div class="space10">&nbsp;</div>
		<!--  七星彩冷热号分析 start  -->
		<div class="ChannelBuyPannel ChannelBuyAnalyse">
			<div class="ChannelBuyPannelHead"><h3>七星彩冷热号分析</h3></div>
			<dl class="ChannelBuyTab">
				<dt class="light selected"  ControlTarget="ChannelBuyAnalyse30">近30期<span>&nbsp;</span></dt>
				<dd class="Disablelight" ControlTarget="DisableChannelBuyAnalyse50">近50期<span>&nbsp;</span></dd>
				<dd class="Disablelight" ControlTarget="DisableChannelBuyAnalyse100">近100期<span>&nbsp;</span></dd>
			</dl>
		<div class="ChannelBuyPannelBody">
				<tangs:ryc_newslist web_id="2" categoryCn="近30期" channelCn="七星彩" value="3" num="1">
					${content}
				</tangs:ryc_newslist>
				<tangs:ryc_newslist web_id="2" categoryCn="近50期" channelCn="七星彩" value="3" num="1">
					${content}
				</tangs:ryc_newslist>
				<tangs:ryc_newslist web_id="2" categoryCn="近100期" channelCn="七星彩" value="3" num="1">
					${content}
				</tangs:ryc_newslist>
			</div>
		</div>
		<!--  七星彩冷热号分析 end  -->
		<div class="space10">&nbsp;</div>
		<!--  七星彩奖金对照表 start  -->
		<div class="ChannelBuyPannel ChannelBuyCollate">
			<div class="ChannelBuyPannelHead"><h3>七星彩奖金对照表</h3></div>
			<div class="ChannelBuyPannelBody">
			<tangs:ryc_newslist web_id="2" categoryCn="奖金对照表" channelCn="七星彩" value="3" num="1">
				 
					${content}
					
			</tangs:ryc_newslist>
			</div>
		</div>
		<!--  七星彩奖金对照表 end  -->
		<div class="space10">&nbsp;</div>
		<!--  七星彩走势图表 start  -->
		<div class="ChannelBuyPannel ChannelBuyCurrent">
			<div class="ChannelBuyPannelHead"><h3>七星彩图表走势</h3><a href="http://tbzs.ruyicai.com/cjw7xc/index.php" title="更多"  target="_blank">更多&gt;&gt;</a></div>
			<div class="ChannelBuyPannelBody">
				<ul>
					<tangs:ryc_newslist value="3" categoryCn="频道走势图"  channelCn="七星彩" web_id="%{#parameters.website_Properties_id[0]}" >
						<li><a href="${url }" target="_blank">${title}</a></li>
						   </tangs:ryc_newslist>
				</ul>
			</div>
		</div>
		<!--  七星彩走势图表 end  -->
	</div><!--  ChannelBuyInfo end  -->
</div><!--  ChannelBuyBody  end  -->
<div class="space10">&nbsp;</div>

<!-- 弹出框 开始 -->
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
<jsp:include page="/function/public_touZhuAlert_dipin.jsp"></jsp:include>
<!-- 弹出框 结束 -->
<!--号码蓝  提示  start-->
<jsp:include page="/function/public_touZhuOver.jsp"></jsp:include>
<!--号码蓝  提示  end-->
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
