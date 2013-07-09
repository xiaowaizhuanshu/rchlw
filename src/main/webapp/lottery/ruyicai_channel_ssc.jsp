<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩时时彩投注、最新开奖、当前部分玩法的遗漏、最新中奖</title>
<meta http-equiv="keywords" content="时时彩投注，最新开奖，当前部分玩法的遗漏，最新中奖"/>
<meta http-equiv="description" content="如意彩时时彩集投注、最新开奖、当前部分玩法的遗漏、最新中奖为一体是时时彩一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/ssc/ssc.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd_ssc.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/zhuihaojisuanqi.js"></script>
<script type="text/javascript"> 
 function flashLottery(){
	 reHtml(61,'lotno=T01007&wanfa=MV_2D!MV_2Z!MV_3D!MV_3Z',false,'omit','true');
     if($("#kaishiqihao option:eq(0)").val() != ($("#qihao").text()+"_0")){
   	 get100QiHao(55,'lotno=T01007&num=100',false,'kaishiqihao');  
 		}//判断最新开奖是否需要等待开奖
    if($("#drawaNo0").html()!=($("#qihao").text()-1)){
		$("#Special").css("display","");
		$("#drawaTime").html($("#endTime").text().substring(10,16));
    	$("#drawaBatch").html($("#qihao").text()-1);
		}else{
 			$("#Special").css("display","none");
 		}
 	}		
 	 function checkMusic(){
	 var issue = $("#inssuenums").val();
	 reHtml(60,'lotno=T01007&inssuenum='+issue,false,'Channel','true');
		//判断是否需要添加声音
		if($("#minute").text()=="6"&&$("#second").text()>"0"&&$("#second").text()<"59"){
		 if($("#Special").css("display")=="none"&&($("#drawaNo0").html()==($("#qihao").text()-1))){
		 FlashMusicStart();
		 }
		}
 	}    
		//判断是夜间时间还是白天时间定期清除播放器容器
		var sysTimes = new Date();
		var mytime = sysTimes.toLocaleTimeString();
		
		if((mytime>"00:00:00" && mytime<"01:55:00") ||( mytime > "22:00:00" && mytime<"23:59:00")){
 			setInterval("FlashMusicStop()",1000*60*5);
 		}else{
 			setInterval("FlashMusicStop()",1000*60*10);
		}
	 
</script>
</head>
<body>
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
<div class="space10">&nbsp;</div>
<div class="ChannelBuyBody">
	<div class="ChannelBuyHandle">
		<div class="ChannelBuyBanner">
		<!-- 期号 截止时间  倒计时    开始 -->
		<script>$(function() {getGaoPinBatchCode('T01007');});</script>
			<div class="ChannelCountDown">
				<em>
					<i id="day" style="display: none;"></i><i id="hour"  style="display: none;"></i><i id="minute"></i>:<i id="second"></i>
				</em>
				<div id="music"></div>
			</div>
			<!--  Banner start  -->
			<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_ssc_b.gif) no-repeat 15px 15px;">
				<li><style>.ActivityWord{ color:#DE0201; font-weight:bold; margin-left:5px;}.ActivityWord:hover{ text-decoration:underline;}</style>
					<img src="<%=request.getContextPath() %>/function/images/word_ssc1.gif" /><i>当前期第<strong id="qihao"></strong>期</i>
					<input type="hidden" id="sysTime" value="">
					<span id="endTime" style="display:none;"></span>
				</li>
				<li>白天 10:00至22:00　每10分钟一期，共72期　夜间22:00至次日01:55　每5分钟一期，共48期</li>
			</ol>
			<!--  Banner end  -->
			<div class="space10">&nbsp;</div>
			<!--  Tab start  -->
			<div class="ChannelBuyHandleMainTab">
				<dl class="ChannelBuyTab">
					<dt class="light selected" ControlTarget="BuyChoice">选号投注</dt>
					<dt class="light"><a href="/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2">我的方案</a></dt>
					<dd>
				  	<a onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="时时彩" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"><h3 style='line-height:26px;'>${title }</h3>${content }</tangs:ryc_newslist>" target="_blank" href='http://www.ruyicai.com/cms/a/bangzhuzhongxin/wanfajieshao/2012/0327/10.html?fid=36&id=10'>玩法介绍</a>
						<a style="border:0px;" href="http://tbzs.ruyicai.com/cjwssc/index.php?lotteryType=ssc" target="_blank">走势图表</a>
					</dd>
				</dl>
			</div>
			<div class="ChannelBuyHandleSecondTab">
				<dl class="ChannelBuyTab BuyChoice none selected" ControlTarget="BuyNormal">
					<dt class="BuyNormal light selected " ControlTarget="dxds" onclick="setDangqianwanfa('大小单双');" style="position:relative;">大小单双<span class="HomePageBGBox ListAddClass" style="position:absolute; right:-15px; top:-3px; display:none;"></span></dt>
					<dt class="BuyCourage light" ControlTarget="yixing"   onclick="setDangqianwanfa('一星');">一星</dt>
					<dt class="BuyUpload light" ControlTarget="erxingComplex"   onclick="setDangqianwanfa('二星');setErjiwanfa('直选复式');">二星直选复式</dt>
					<dt class="BuyUpload light" ControlTarget="erxingGrouperxing"   onclick="setDangqianwanfa('二星');setErjiwanfa('组选复式');">二星组选复式</dt>
					<dt class="BuyUpload light" ControlTarget="erxingCourage"   onclick="setDangqianwanfa('二星');setErjiwanfa('组选和值');">二星组选和值</dt>
					<dt class="BuyNormal light" ControlTarget="sanxingNormalComplex" onclick="setDangqianwanfa('三星');setErjiwanfa('直选');">三星直选</dt>
					<dt class="BuyUpload light" ControlTarget="wuxingNormalComplex"   onclick="setDangqianwanfa('五星');setErjiwanfa('直选复式');">五星直选</dt>
					<dt class="BuyUpload light" ControlTarget="wuxingGroupComplex"   onclick="setDangqianwanfa('五星');setErjiwanfa('组选复式');">五星通选</dt>
				</dl>                                                                                               
			</div>
			<!--  Tab end  -->
		</div><!--  ChannelBuyBanner  -->
		
		<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByGaopin" method="post">
		<div class="ChannelBuyHandleTabContent HighFrequencyHandleTabContent">
			
			<!-- 大小单双 -->
			<div class="dxds none selected" id="sub_nav_1">
				<jsp:include page="/function/ruyicai_ssc/ssc_dxds.jsp"/>
			</div>
			<!-- 一星 -->
			<div class="yixing none" id="sub_nav_2" >
				<jsp:include page="/function/ruyicai_ssc/ssc_yx.jsp"/>
			</div>
			<!-- 二星直选复式 -->
			<div class="erxingComplex none" id="sub_nav_3">
				<jsp:include page="/function/ruyicai_ssc/ssc_rxzf.jsp"/>
			</div>
			<!-- 二星组选复式 -->
			<div class="erxingGrouperxing none" id="sub_nav_4">
				<jsp:include page="/function/ruyicai_ssc/ssc_rxzuf.jsp"/>
			</div>  
			<!-- 二星组选和值 -->
			<div class="erxingCourage none" id="sub_nav_5">
				<jsp:include page="/function/ruyicai_ssc/ssc_rxzuh.jsp"/>
			</div>  
			<!-- 三星直选和值 -->
			<div class="sanxingNormalComplex none" id="sub_nav_6">
				<jsp:include page="/function/ruyicai_ssc/ssc_sx.jsp"/>
			</div>	
			<!-- 五星直选 -->	
			<div class="wuxingNormalComplex none" id="sub_nav_7">
				<div class="ChannelBuyTip" id="zhixuan_tishi1">玩法提示：从万、千、百、十、个位各选1个或多个号码，所选号码与开奖号码一一对应，即中奖。2元一注，单注中奖金额可达100000元。</div>
				<jsp:include page="/function/ruyicai_ssc/ssc_wx.jsp"/>
			</div>	
			<!-- 五星通选-->
			<div class="wuxingGroupComplex none" id="sub_nav_8">
				<div class="ChannelBuyTip" id="zhixuan_tishi2">玩法提示：从五位各选1个号码，选号与开奖号按位一致即中2万元，前三或后三位按位一致即中200元，前二或后二位一致即中20元。</div>
				<jsp:include page="/function/ruyicai_ssc/ssc_wxtx.jsp"/>
			</div>                  
	                  
			<div class="BuyProjectAContent none">我的方案A内容</div>
			<div class="BuyProjectBContent none">我的方案B内容</div>
			<div class="BuyProjectCContent none">我的方案C内容</div>
			
			<!-- 时时彩号码栏-->
			<jsp:include page="/function/public_rtz.jsp"/>
			<!-- 合买追号-->
		</div>
		<jsp:include page="/function/public_hemai_zuihao_ssc.jsp"/>
		<input type="hidden" id="jsonString" name="jsonString" value="">
   	    <input type="hidden" id="caiZhong" value="ssc">
   	    <input type="hidden" id="lotNo" value="T01007" name="lotNo"> 
   	    <input type="hidden"  id="tishi" value="" name="tishi">
   	    <input type="hidden" id="dangqianwanfa" value="大小单双"  />
	    <input type="hidden" id="erjiwanfa" value="直选"  />
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
		<input type="hidden" id="diyiqiQihao" value=""  />
		<input type="hidden" id="zongQishu" value="0"  />
		<input type="hidden" id="inssuenums" value="5"  />
   	    <input style="display: none;" type="text"/>
		</form>
		<div class="space10">&nbsp;</div>
				
	</div>
	
	<div class="ChannelBuyInfo">
		<!--  时时彩最新开奖 start  -->
		<div class="ChannelBuyPannel HighFrequencyBulletin">
		<div class="ChannelBuyPannelHead">
			<h3>最新开奖</h3>
			<div id="onORoff">
			<span class="HighFrequencySoundOn" onclick="FlashMusicOff();playon();" title="点击该按钮可以关闭声音。"></span>
			</div>
		</div>
		<div id="Channel">
		<script>
			$(function(){reHtml(60,'lotno=T01007&inssuenum=5',false,'Channel','true');});
		</script>
		</div>
		</div>
		<!--  时时彩最新开奖 end  -->
		<div class="space10">&nbsp;</div>
		
		<!--  时时彩当前遗漏 start  -->
		<div id="omit">
		<script>
			$(function(){reHtml(61,'lotno=T01007&wanfa=MV_2D!MV_2Z!MV_3D!MV_3Z',false,'omit','true');});
		</script>
		</div>
		<!--  时时彩当前遗漏 end  -->
		<div class="space10">&nbsp;</div>
		<!--  时时彩最新中奖 start  -->
		<div class="ChannelBuyPannel ChannelBuyReview HighFrequencyReview">
			<div class="ChannelBuyPannelHead"><h3>时时彩最新中奖</h3></div>
			<div class="ChannelBuyPannelBody">
				<ul id="ZXZJ"  class="NewWinList">
				
                </ul>
			</div>
		</div>
		<!--  时时彩上期最新中奖end  -->

	</div><!--  ChannelBuyInfo end  -->

</div><!--  ChannelBuyBody  end  -->

<div class="space10">&nbsp;</div>

<!-- 弹出框 开始 -->
<jsp:include page="/function/public_touZhuAlert_gaopin.jsp"></jsp:include>
<!-- 弹出框 结束 -->
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
<!--号码蓝  提示  start-->
<jsp:include page="/function/public_touZhuOver.jsp"></jsp:include>
<!--号码蓝  提示  end-->
<script>//initLotno();</script>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<script>$(function(){ajaxStatisticWin('T01007');});</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>