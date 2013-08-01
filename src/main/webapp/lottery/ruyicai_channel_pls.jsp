<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩排列三投注、开奖公告、开奖点评、冷热号分析、奖金对照表、走势图表</title>
<meta http-equiv="keywords" content="排列三投注，排列三开奖公告，排列三开奖点评，排列三冷热号分析，排列三奖金对照表，排列三走势图表"/>
<meta http-equiv="description" content="博雅彩排列三集投注、开奖公告、开奖点评、冷热号分析、奖金对照表、走势图表为一体是排列三一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/pls/pls.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/filter.js" ></script>

</head>
<body>
<script>hemaiInit();//initLotno();</script>
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>

<div class="space10">&nbsp;</div>

<div class="ChannelBuyBody">

	<div class="ChannelBuyHandle">
		<div class="ChannelBuyBanner">
			
			<!--  Banner start  -->
			<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_pls_d.gif) no-repeat 15px 15px;">
				<li>
					<!-- 期号 截至时间  倒计时    开始 -->
					<script>$(function(){getBatchCode('T01002');});</script>
					<img src="<%=request.getContextPath() %>/function/images/word_pls.gif" /><i>当前期第<strong id="qihao"></strong>期　固定奖，玩法简单，每晚20：30开奖！　</i><img src="<%=request.getContextPath() %>/function/images/jrkaijiang.gif" />
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
					<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01002'">参与合买</dt>
					<dt class="light selected" ControlTarget="BuyChoice">选号投注</dt>
					<dt class="light" onclick="window.location.href='/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
				</dl>
				<dd>
					<a onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="排列3" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"> <h3 style='line-height:26px;'>${title}</h3>${content}</tangs:ryc_newslist>" target="_blank" href=' <%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/wanfajieshao/2012/0329/28.html?fid=36&id=28'>玩法介绍</a>
					<a href="http://zst.boyacai.com/cjwpl3/index.php" target="_blank">走势图表</a>
					<a style="border:0px;" href="/rchlw/news/newsInfoList!queryNewsInfoList?categoryCode=162&channel_name_cn=pailie3" target="_blank">专家推荐</a>
				</dd>
			</div>
			
			<div class="ChannelBuyHandleSecondTab">
			
				<dl class="ChannelBuyTab BuyChoice none selected" ControlTarget="BuyNormal">
					<dt class="BuyNormal light selected" ControlTarget="zhixuan" onclick="setDangqianwanfa('直选');">直选</dt>
					<dt class="BuyCourage light" ControlTarget="zusan"   onclick="setDangqianwanfa('组选三');">组三</dt>
					<dt class="BuyUpload light" ControlTarget="zuliu"   onclick="setDangqianwanfa('组选六');">组六</dt>
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
				<div class="zhixuan none selected" id="sub_nav_1">
					<div class="ChoiceOneTab">
						<dl class="ChannelBuyTab ChoiceOne">
						    <dd></dd>
							<dt class="light selected" ControlTarget="zhixuanComplex" onclick="setErjiwanfa('复式');" id="zxpt"><span>&nbsp;</span>普通投注</dt>
							<dt class="light" ControlTarget="Groupzhixuan" onclick="setErjiwanfa('和值');"  id="zxhz"><span>&nbsp;</span>和值</dt>
							<dt class="light" ControlTarget="zhixuanCourage"onclick="setErjiwanfa('单式上传');chushihuaRedio();" id="zxds"><span>&nbsp;</span>单式上传</dt>
						</dl>
					</div>
					<div class="ChoiceOneContent">
						<div class="zhixuanComplex  none selected">  <jsp:include page="/function/ruyicai_pls/pls_common.jsp"/></div>              
						<div class="Groupzhixuan  none"><jsp:include page="/function/ruyicai_pls/pls_heZhi.jsp"/></div>               
						<div class="zhixuanCourage ChannelBuyUpload none">            <jsp:include page="/function/ruyicai_pls/plszx_danshiUpload.jsp"/> </div>      
					</div>
				</div>
				<div class="zusan none" id="sub_nav_3">
					<div class="ChoiceOneTab">
						<dl class="ChannelBuyTab ChoiceOne">
							<dd></dd>
							<dt class="light selected" ControlTarget="zusanComplex" onclick="setErjiwanfa('复式');" id="zlpt"><span>&nbsp;</span>普通投注</dt>
							<dt class="light" ControlTarget="Groupzusan" onclick="setErjiwanfa('和值');" id="zlhz"><span>&nbsp;</span>和值</dt>
							<dt class="light" ControlTarget="zusanCourage"onclick="setErjiwanfa('单式上传');chushihuaRedio();" id="zlds"><span>&nbsp;</span>单式上传</dt>
						</dl>
					</div>
					<div class="ChoiceOneContent">
						<div class="zusanComplex none selected">  <jsp:include page="/function/ruyicai_pls/pls_Z3F.jsp"/></div>                 
						<div class="Groupzusan none"> <jsp:include page="/function/ruyicai_pls/pls_Z3HeZhi.jsp"/></div>             
						<div class="zusanCourage ChannelBuyUpload none"> <jsp:include page="/function/ruyicai_pls/plszs_danshiUpload.jsp"/> </div> 
					</div>
				</div>
				<div class="zuliu none" id="sub_nav_2">
					<div class="ChoiceOneTab">
						<dl class="ChannelBuyTab ChoiceOne">
							<dd></dd>
							<dt class="light selected" ControlTarget="zuliuComplex" onclick="setErjiwanfa('复式');" id="zspt"><span>&nbsp;</span>普通投注</dt>
							<dt class="light" ControlTarget="Groupzuliu" onclick="setErjiwanfa('和值');" id="zshz"><span>&nbsp;</span>和值</dt>
							<dt class="light" ControlTarget="zuliuCourage"onclick="setErjiwanfa('单式上传');chushihuaRedio();" id="zsds"><span>&nbsp;</span>单式上传</dt>
						</dl>
					</div>
					<div class="ChoiceOneContent">
						<div class="zuliuComplex none selected"><jsp:include page="/function/ruyicai_pls/pls_Z6F.jsp"/></div>                  
						<div class="Groupzuliu none"> <jsp:include page="/function/ruyicai_pls/pls_Z6HeZhi.jsp"/></div>              
						<div class="zuliuCourage ChannelBuyUpload none">  <jsp:include page="/function/ruyicai_pls/plszl_danshiUpload.jsp"/> </div>  
					</div>
				</div>
				<div class="BuyProjectAContent none">我的方案A内容</div>
				<div class="BuyProjectBContent none">我的方案B内容</div>
				<div class="BuyProjectCContent none">我的方案C内容</div>
				<!-- 排列三号码栏-->
				<jsp:include page="/function/public_rtz.jsp"/>
			</div>
			<jsp:include page="/function/public_hemai_zuihao_dipin_pls.jsp"/>
			<input type="hidden" id="jsonString" name="jsonString" value="" /> 
		    <input type="hidden" id="caiZhong" value="pls" /> 
		    <input type="hidden" id="path" name="path" value=""/> 
		    <input type="hidden" id="errorCode" name="errorCode" value=""/>
		    <input type="hidden" id="lotNo" value="T01002" name="lotNo" />
		    <input type="hidden" id="tishi" value="" name="tishi" />
		    <input type="hidden" id="dangqianwanfa" value="直选"  />
			<input type="hidden" id="erjiwanfa" value="复式"  />
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
		
		<!--  排列三开奖公告 start  -->
		<div id="ChannelBuyBulletin">
			   <script>$(function(){kaijiangBylotno('T01002','ChannelBuyBulletin');});</script>
		</div>
		<!--  排列三开奖公告 end  -->
		
		<div class="space10">&nbsp;</div>
		
		<!--  排列三上期开奖点评 start  -->
<div class="ChannelBuyPannel ChannelBuyReview">
			<div class="ChannelBuyPannelHead"><h3>排列三上期开奖点评</h3></div>
			<div class="ChannelBuyPannelBody">
				<ol>
					<tangs:ryc_newslist web_id="2" categoryCn="开奖点评" channelCn="排列3" value="3" num="1">
					<li>${content}</li>
					</tangs:ryc_newslist>
				</ol>
			</div>
		</div>
		<!--  排列三上期开奖点评 end  -->
		<div class="space10">&nbsp;</div>
		
		<!--  排列三冷热号分析 start  -->
		<div class="ChannelBuyPannel ChannelBuyAnalyse">
			<div class="ChannelBuyPannelHead"><h3>排列三冷热号分析</h3></div>
			<dl class="ChannelBuyTab">
				<dt class="light selected" ControlTarget="ChannelBuyAnalyse30">近30期</dt>
				<dd class="Disablelight" ControlTarget="DisableChannelBuyAnalyse50">近50期<span>&nbsp;</span></dd>
				<dd class="Disablelight" ControlTarget="DisableChannelBuyAnalyse100">近100期<span>&nbsp;</span></dd>
			</dl>
			
			<style>
				.ChannelBuyAnalyse li{ border:solid 3px #F00;}
			</style>
			
			<div class="ChannelBuyPannelBody">
				<tangs:ryc_newslist web_id="2" categoryCn="近30期" channelCn="排列3" value="3" num="1">		   
					${content}
				</tangs:ryc_newslist>
				<tangs:ryc_newslist web_id="2" categoryCn="近50期" channelCn="排列3" value="3" num="1">
					${content}
				</tangs:ryc_newslist>
				<tangs:ryc_newslist web_id="2" categoryCn="近100期" channelCn="排列3" value="3" num="1">
					${content}
				</tangs:ryc_newslist>
				
				
				
			</div>
		</div>
		<!--  排列三冷热号分析 end  -->

		<div class="space10">&nbsp;</div>
		
		<!--  排列三奖金对照表 start  -->
		<div class="ChannelBuyPannel ChannelBuyCollate">
			<div class="ChannelBuyPannelHead"><h3>排列三奖金对照表</h3></div>
			<div class="ChannelBuyPannelBody">
			<tangs:ryc_newslist web_id="2" categoryCn="奖金对照表" channelCn="排列3" value="3" num="1">
				 
					${content}
					
				</tangs:ryc_newslist>
				</div>
		</div>
		<!--  排列三奖金对照表 end  -->
		
		<div class="space10">&nbsp;</div>
		
		<!--  排列三走势图表 start  -->
		<div class="ChannelBuyPannel ChannelBuyCurrent">
			<div class="ChannelBuyPannelHead"><h3>排列三图表走势</h3><a href="	http://zst.boyacai.com/cjwpl3/view/pl3_zxylzzhw.php?typeId=zuxuan" title="更多"  target="_blank">更多&gt;&gt;</a></div>
			<div class="ChannelBuyPannelBody">
				<ul>
					<tangs:ryc_newslist value="3" categoryCn="频道走势图"  channelCn="排列3" web_id="%{#parameters.website_Properties_id[0]}" >
				  
						<li><a href="${url }" target="_blank">${title}</a></li>
						   </tangs:ryc_newslist>
				</ul>
			</div>
		</div>
		<!--  排列三走势图表 end  -->
	</div><!--  ChannelBuyInfo end  -->
</div>
<div class="space10">&nbsp;</div>

<!-- 弹出框 开始 -->
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
<jsp:include page="/function/public_touZhuAlert_dipin.jsp"></jsp:include>
<!-- 弹出框 结束 -->
<jsp:include page="/function/public_touZhuOver.jsp"></jsp:include>
<!--号码蓝  提示  end-->

<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>