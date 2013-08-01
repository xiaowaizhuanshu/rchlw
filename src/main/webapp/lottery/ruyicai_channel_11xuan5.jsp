<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld" %>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>博雅彩11选5投注、最新开奖、当前部分玩法的遗漏、最新中奖</title>
<meta http-equiv="keywords" content="11选5投注，最新开奖，当前部分玩法的遗漏，最新中奖"/>
<meta http-equiv="description" content="博雅彩11选5集投注、最新开奖、当前部分玩法的遗漏、最新中奖为一体是11选5一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet"/>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd_11xuan5.js" ></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/zhuihaojisuanqi.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/11xuan5/11xuan5.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
<script type="text/javascript">
var i=1000*60*60*24; //总刷新的局限
var j=1000; //初始多少毫秒刷新
var k =1000*60; //间隔多少毫秒后刷新
function flashLottery(){
	 getBatchCode('T01010');
	 reHtml(60,'lotno=T01010&inssuenum=5',false,'Channel','true');
	 if($("#kaishiqihao option:eq(0)").val() != ($("#qihao").text()+"_0")){
		 get100QiHao(55,'lotno=T01010&num=100',false,'kaishiqihao');  
	 }
	//判断最新开奖是否需要等待开奖
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
	 reHtml(60,'lotno=T01010&inssuenum='+issue,false,'Channel','true');
	//判断是否需要添加声音
	if($("#minute").text()=="7"&&$("#second").text()>"0"&&$("#second").text()<"59"){
	if($("#Special").css("display")=="none"&&($("#drawaNo0").html()==($("#qihao").text()-1))){
		 FlashMusicStart();
	 }
	}
}
 setInterval("flashLottery()", 10000); 
 setInterval("checkMusic()",5000);
 setInterval("FlashMusicStop()",1000*60*10);
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
			<script>$(function() {getBatchCode('T01010');});</script>
			<div class="ChannelCountDown">
				<em>
					<i id="day" style="display: none;"></i><i id="hour"  style="display: none;"></i>
					<i id="minute"></i>:<i id="second"></i>
				</em>
				<div id="music"></div>
			</div>
			
			<!--  Banner start  -->
			<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_syxw_b.gif) no-repeat 15px 15px;">
				<li>
					<img src="<%=request.getContextPath() %>/function/images/word_syxw.gif" /><i>当前期第<strong id="qihao"></strong>期</i>
					<input type="hidden" id="sysTime" value="">
					<input type="hidden" id="sysTimenow" value="">
					<span id="endTime" style="display:none;"></span>
				</li>
				<li>10分钟一期，每天78期 </li>
			</ol>
			<!--  Banner end  -->
			
			<div class="space10">&nbsp;</div>
			
			<!--  Tab start  -->
			<div class="ChannelBuyHandleMainTab">
				<dl class="ChannelBuyTab">
					<dt class="light selected" ControlTarget="BuyChoice">选号投注</dt>
					<dt class="light"><a href="/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2">我的方案</a></dt>
					<dd>
						<a onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="江西11选5" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"><h3 style='line-height:26px;'>${title }</h3>${content }</tangs:ryc_newslist>" target="_blank" href='<%=com.boyacai.common.util.AppAddr.getRchlwPath() %>/cms/a/bangzhuzhongxin/wanfajieshao/2012/0329/34.html?fid=36&id=34' >玩法介绍</a>
						<a style="border:0px;" href="http://zst.boyacai.com/cjw11x5_qs/view/11x5_danxuan.php?lotteryType=11x5" target="_blank">走势图表</a>
					</dd>
				</dl>
			</div>
			
			<div class="ChannelBuyHandleSecondTab HighFrequencyHandleSecondTab">
			
				<dl class="ChannelBuyTab BuyChoice none selected" ControlTarget="BuyNormal">
					<dt class="BuyNormal light " ControlTarget="ChoiceOne" onclick="qingkongAll(1); ">选一</dt>
					<dt class="BuyCourage light" ControlTarget="ChoiceTow" onclick="qingkongAll(2);">选二</dt>
					<dt class="BuyUpload light selected" ControlTarget="ChoiceThree" onclick="qingkongAll(3);">选三</dt>
					<dt class="BuyNormal light" ControlTarget="ChoiceFour" onclick="qingkongAll(4);">任选四</dt>
					<dt class="BuyCourage light" ControlTarget="ChoiceFive" onclick="qingkongAll(5);">任选五</dt>
					<dt class="BuyUpload light" ControlTarget="ChoiceSix" onclick="qingkongAll(6);">任选六</dt>
					<dt class="BuyCourage light" ControlTarget="ChoiceSeven" onclick="qingkongAll(7);">任选七</dt>
					<dt class="BuyUpload light" ControlTarget="ChoiceEight" onclick="qingkongAll(8); ">任选八</dt>
				</dl>
				
				<dl class="ChannelBuyTab ProjectMine none" ControlTarget="BuyProjectA">
					<dt class="BuyProjectA light selected" ControlTarget="BuyProjectAContent">我的方案A</dt>
					<dt class="BuyProjectB light" ControlTarget="BuyProjectBContent">我的方案B</dt>
					<dt class="BuyProjectC light" ControlTarget="BuyProjectCContent">我的方案C</dt>
				</dl>
				
			</div>
			<!--  Tab end  -->
		</div><!--  ChannelBuyBanner  -->
		
		
		<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByGaopin" method="post">
		<div class="ChannelBuyHandleTabContent">
			
			<div class="ChoiceOne none " id="sub_nav_1">
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
					    <dd></dd>
						<dt class="light selected" ControlTarget="zhixuanComplex" onclick="setErjiwanfa('前一直选'); "><span>&nbsp;</span>前一直选</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="zhixuanComplex none  selected">  <jsp:include page="/function/ruyicai_11xuan5/11Xuan5_X1.jsp"/></div>              
				</div>
			</div>
			<div class="ChoiceTow none" id="sub_nav_2">
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>前二直选</dd>
						<dt class="light selected" ControlTarget="QEZhiF" onclick="setErjiwanfa('前二直选复式');ClearAll('Q2',2);ClearAll('Q2',3); " ><span>&nbsp;</span>复式</dt>
						<dd>前二组选</dd>
						<dt class="light" ControlTarget="QEZF" onclick="setErjiwanfa('前二组选复式'); ClearAll('Z2',1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="QEZD" onclick="setErjiwanfa('前二组选胆拖'); ClearAll('Z2',2);ClearAll('Z2',3);"><span>&nbsp;</span>胆拖</dt>
						<dd>任选二</dd>
						<dt class="light" ControlTarget="REF"onclick="setErjiwanfa('任选二复式'); ClearAll('R2',1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RED"onclick="setErjiwanfa('任选二胆拖'); ClearAll('R2',2);ClearAll('R2',3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="QEZhiF none selected" id="sub_nav_2_QEZhiF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_X2ZhiFu.jsp"/></div>                 
					<div class="QEZF none" id="sub_nav_2_QEZF"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_X2ZuFu.jsp"/></div>             
					<div class="QEZD  none" id="sub_nav_2_QEZD">  <jsp:include page="/function/ruyicai_11xuan5/11Xuan5_X2ZuDanTuo.jsp"/></div>
					<div class="REF none" id="sub_nav_2_REF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R2Fu.jsp"/></div>             
					<div class="RED  none" id="sub_nav_2_RED"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R2Dan.jsp"/> </div>
			</div>
			</div>
			<div class="ChoiceThree  none  selected" id="sub_nav_3">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>前三直选</dd>
						<dt class="light selected" ControlTarget="QSZhiF" onclick="setErjiwanfa('前三直选复式'); ClearAll('Q3',2);ClearAll('Q3',3);ClearAll('Q3',4);"><span>&nbsp;</span>复式</dt>
						<dd>前三组选</dd>
						<dt class="light" ControlTarget="QSZF" onclick="setErjiwanfa('前三组选复式'); ClearAll('Z3',1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="QSZD" onclick="setErjiwanfa('前三组选胆拖'); ClearAll('Z3',2);ClearAll('Z3',3);"><span>&nbsp;</span>胆拖</dt>
						<dd>任选三</dd>
						<dt class="light" ControlTarget="RSF"onclick="setErjiwanfa('任选三复式'); ClearAll('R3',1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RSD"onclick="setErjiwanfa('任选三胆拖'); ClearAll('R3',2);ClearAll('R3',3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="QSZhiF none selected" id="sub_nav_3_QSZhiF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_X3ZhiFu.jsp"/></div>                 
					<div class="QSZF none" id="sub_nav_3_QSZF"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_X3ZuFu.jsp"/></div>             
					<div class="QSZD  none" id="sub_nav_3_QSZD">  <jsp:include page="/function/ruyicai_11xuan5/11Xuan5_X3ZuDan.jsp"/></div>
					<div class="RSF none" id="sub_nav_3_RSF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R3Fu.jsp"/></div>             
					<div class="RSD  none" id="sub_nav_3_RSD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R3Dan.jsp"/> </div>
				</div>
			</div>
			<div class="ChoiceFour  none" id="sub_nav_4">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>任选四</dd>
						<dt class="light selected" ControlTarget="RSF" onclick="setErjiwanfa('任选四复式'); ClearAll(4,1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RSD" onclick="setErjiwanfa('任选四胆拖'); ClearAll(4,2);ClearAll(4,3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="RSF none selected" id="sub_nav_4_RSF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R4Fu.jsp"/></div>                 
					<div class="RSD none" id="sub_nav_4_RSD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R4Dan.jsp"/></div>             
				</div>
			</div>
			<div class="ChoiceFive  none" id="sub_nav_5">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>任选五</dd>
						<dt class="light selected" ControlTarget="RWF" onclick="setErjiwanfa('任选五复式'); ClearAll(5,1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RWD" onclick="setErjiwanfa('任选五胆拖'); ClearAll(5,2);ClearAll(5,3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="RWF none selected" id="sub_nav_5_RWF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R5Fu.jsp"/></div>                 
					<div class="RWD none" id="sub_nav_5_RWD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R5Dan.jsp"/></div>             
				</div>
			</div>
			<div class="ChoiceSix  none" id="sub_nav_6">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>任选六</dd>
						<dt class="light selected" ControlTarget="RLF" onclick="setErjiwanfa('任选六复式'); ClearAll(6,1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RLD" onclick="setErjiwanfa('任选六胆拖'); ClearAll(6,2);ClearAll(6,3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="RLF none selected" id="sub_nav_6_RLF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R6Fu.jsp"/></div>                 
					<div class="RLD none" id="sub_nav_6_RLD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R6Dan.jsp"/></div>             
				</div>
			</div>
			<div class="ChoiceSeven  none" id="sub_nav_7">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>任选七</dd>
						<dt class="light selected" ControlTarget="RQF" onclick="setErjiwanfa('任选七复式'); ClearAll(7,1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RQD" onclick="setErjiwanfa('任选七胆拖'); ClearAll(7,2);ClearAll(7,3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="RQF none selected" id="sub_nav_7_RQF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R7Fu.jsp"/></div>                 
					<div class="RQD none" id="sub_nav_7_RQD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R7Dan.jsp"/></div>             
				</div>
			</div>
			<div class="ChoiceEight  none" id="sub_nav_8">
				
				<div class="ChoiceOneTab">
					<dl class="ChannelBuyTab ChoiceOne">
						<dd>任选八</dd>
						<dt class="light selected" ControlTarget="RBF" onclick="setErjiwanfa('任选八复式'); ClearAll(8,1);"><span>&nbsp;</span>复式</dt>
						<dt class="light" ControlTarget="RBD" onclick="setErjiwanfa('任选八胆拖'); ClearAll(8,2);ClearAll(8,3);"><span>&nbsp;</span>胆拖</dt>
					</dl>
				</div>
				<div class="ChoiceOneContent">
					<div class="RBF none selected" id="sub_nav_8_RBF"> <jsp:include   page="/function/ruyicai_11xuan5/11Xuan5_R8Fu.jsp"/></div>                 
					<div class="RBD none" id="sub_nav_8_RBD"> <jsp:include  page="/function/ruyicai_11xuan5/11Xuan5_R8Dan.jsp"/></div>             
				</div>
			</div>
			<div class="BuyProjectAContent none">我的方案A内容</div>
			<div class="BuyProjectBContent none">我的方案B内容</div>
			<div class="BuyProjectCContent none">我的方案C内容</div>
			
			<!-- 福彩3D号码栏-->
			<jsp:include page="/function/public_rtz.jsp"/>
			
		</div>
		
		
		<jsp:include page="/function/public_hemai_zuihao_11xuan5.jsp"/>

		<input type="hidden" id="jsonString" name="jsonString" value="" /> 
        <input type="hidden" id="caiZhong" value="11xuan5" /> 
        <input type="hidden" id="path" name="path" value=""/> 
        <input type="hidden" id="errorCode" name="errorCode" value=""/>
	    <input type="hidden" id="lotNo" value="T01010" name="lotNo" />
	    <input type="hidden" id="tishi" value="" name="tishi" />
	    <input type="hidden" id="dangqianwanfa" value=""  />
		<input type="hidden" id="erjiwanfa" value="前一直选"  />
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
	
		<!--  江西11选5最新开奖 start  -->
		<div class="ChannelBuyPannel HighFrequencyBulletin">
		<div class="ChannelBuyPannelHead">
			<h3>最新开奖</h3>
			<div id="onORoff">
			<span class="HighFrequencySoundOn" onclick="FlashMusicOff();playon();" title="点击该按钮可以关闭声音。"></span>
			</div>
		</div>
		<div id="Channel">
		<script>
			$(function(){reHtml(60,'lotno=T01010&inssuenum=5',false,'Channel','true');});
		</script>
		</div>
		</div>
		
		<div class="space10">&nbsp;</div>
		<!--  江西11选5当前遗漏 start  -->
		<div id="omit">
		<script>
		$(function(){
			reHtml(61,'lotno=T01010&wanfa=MV_Q3ZH!MV_R5ZH!MV_R7ZH!MV_R8ZH',false,'omit','true');
		});
		</script>
		</div>
		<!--  江西11选5当前遗漏 end  -->
		
		<div class="space10">&nbsp;</div>
		
		<!--  江西11选5最新中奖 start  -->
		<div class="ChannelBuyPannel ChannelBuyReview">
			<div class="ChannelBuyPannelHead"><h3>江西11选5最新中奖</h3></div>
			<div class="ChannelBuyPannelBody">
				<ul id="ZXZJ"  class="NewWinList">
				
                </ul>
			</div>
		</div>
		<!--  江西11选5最新中奖 end  -->
		
	</div><!--  ChannelBuyInfo end  -->

</div><!--  ChannelBuyBody  end  -->

<div class="space10">&nbsp;</div>

<!-- 弹出框 开始 -->
<jsp:include page="/function/public_touZhuAlert_gaopin.jsp"></jsp:include>
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>
<!-- 弹出框 结束 -->
<!--号码蓝  提示  start-->
<jsp:include page="/function/public_touZhuOver.jsp"></jsp:include>
<!--号码蓝  提示  end-->
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<script>$(function(){ajaxStatisticWin('T01007');});</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>