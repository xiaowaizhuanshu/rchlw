<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="tangs" uri="/WEB-INF/tangs.tld"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"></jsp:include>
<title>如意彩4场进球投注、开奖公告、赛事前瞻、预测汇总</title>
<meta http-equiv="keywords" content="4场进球投注，开奖公告，赛事前瞻，预测汇总"/>
<meta http-equiv="description" content="如意彩4场进球集投注、开奖公告、赛事前瞻、预测汇总为一体是4场进球一站式服务平台。"/>
<link type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" rel="stylesheet" />
<link type="text/css" href="<%=request.getContextPath() %>/function/css/touzhuAll.css" rel="stylesheet" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/public_touZhu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/timeEnd.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/zucai/zucai.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/upload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery.jmpopups-0.5.1.js"></script>
<script type="text/javascript">
$(document).ready(function () {
	getIssueByLotNo('T01005');
});
</script>
</head>

<body>
<div id="body">
<script type="text/javascript">hemaiInit();</script>
<script>$(function(){toplogo('common',"ButtonChannelBuy");});</script>
 <span id="common"></span>
	<div id="main">
		<div class="touzhu">
			<div class="zucai_left">
			<div class="footballgonggao" id="footballgonggao">		
			   <script>$(function(){reHtml(54,'lotno=T01005',false,'footballgonggao','true');});</script>
			</div>
        
				<div class="footballgonggao">
				<div class="gonggao_top">本轮赛事前瞻</div>
          		<div class="footballtext">
                    <tangs:ryc_newslist web_id="2" categoryCn="赛事前瞻" channelCn="4场进球" value="3" num="1">
					    ${content}
					</tangs:ryc_newslist>
                </div>		
               </div>
    			<div class="footballpic"><img src="<%=request.getContextPath() %>/function/images/footballpic.gif" width="211" height="125" /></div> 
          </div>
		<div class="ChannelBuyHandleZC">
		<!--  ChannelBuyBanner start  -->
			<div class="ChannelBuyBanner">
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getZCBatchCode('T01005');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_scjq.gif" /><i>当前期第<strong id="qihao3">000000</strong><strong id="qihao2"></strong><strong id="qihao1"></strong>期　进几个球，你说了算　</i><span id="jinrikaijiangId"><!-- 此处会显示今日开奖小图标 --></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩:<strong><font id="day">0</font>天<font id="hour">0</font>时<font id="minute">0</font>分<font id="second">0</font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select id="issueSelect" name="" onchange="getFldate('T01005',this.options[this.options.selectedIndex].value,'cleanSichang','checkZhumaSichang','0','');setQiHao1();">
							</select>
							<span id="qihao" style="display: none;"></span>
							<script>
							$(function(){
								if($("#qihao3").text()!=""){
									$("#qihao").html($("#qihao3").text());
								}else if($("#qihao2").text()!=""){
									$("#qihao").html($("#qihao2").text());
								}else{
									$("#qihao").html($("#qihao1").text());
								}
								
							});
							function setQiHao1(){
								if(($("#qihao3").text()+","+$("#qihao2").text()+","+$("#qihao1").text()).indexOf($("#issueSelect").val())==-1){
									$("#qihao").html($("#qihao3").val());
								}else{
									$("#qihao").html($("#issueSelect").val());
								}
							};
							function setQiHao2(n){$("#qihao").html($("#qihao"+n).text());};
							</script>
						</span>
					</li>
				</ol>
			
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab" id="zucainavcon">
					<dl class="ChannelBuyTab">
						<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/selectAll!getCaselotsByWhere?lotno=T01005'">参与合买</dt>
						<dt class="light selected" ControlTarget="BuyChoice" id="standard" onclick="switchDiv('zucai_area','zucai_danshi','T01005');">标准投注</dt>
						<dt class="light" ControlTarget="ChannelBuyUpload" onclick="switchDiv('zucai_danshi','zucai_area','T01005');">单式上传</dt>
						<dt class="light" onclick="window.location.href='/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dd>
						<a style="border:0px;" onmouseover="PopupOn($(this));" onmouseout="PopupOff($(this));" Offset="br,0,0" BoxStyle="width:200px;line-height:20px;" Content="<tangs:ryc_newslist categoryCn="玩法简介" channelCn="4场进球" value="3" web_id="%{#parameters.website_Properties_id[0]}" num="1"> <h3 style='line-height:26px;'>${title}</h3>${content}</tangs:ryc_newslist>" target="_blank" href='http://www.ruyicai.com/cms/a/bangzhuzhongxin/wanfajieshao/2012/0329/38.html?fid=36&id=38'>玩法介绍</a>
						</dd>
					</dl>
				</div>
				<!--  Tab end  -->
			</div>
			<!--  ChannelBuyBanner end  -->
			<div class="ChannelBuyHandleTabContent" style="width:728px;">
				<div class="space10"></div>
				<div class="BuyChoice none selected" id="zucai_area">
					<script>$(function(){zucaiData('T01005','zucai_area');});</script>
				</div>
				
				<div id="zucai_danshi" class="ChannelBuyUpload none">
					<jsp:include page="/function/ruyicai_sichang/sc_danshiUpload.jsp"/>
				</div>
			
		<form name="BettingForm" id="BettingForm" action="/rchlw/user/bet!bettingByDipin" method="post">
			<div id="zucai_money" class="zucai_money">
				您选择了<span id="two" class="red">0</span>场双选，<span id="all" class="red">0</span>场全包，共
				<span id="lab_Num_standrad" class="red">0</span>注，
				<input onkeyup="checkZhumaSichang();" class="zucai_input" id="tb_Multiple_standrad" type="text" value="1"/>倍
				 金额：¥<span id="investField_standrad" class="red">0</span>元 <span
					class="zucai_xuan"><a href="javascript:void(0);" id="cleanSelect" title="清空所选" onclick="cleanSichang();">清空所选</a>
				</span>
			</div>
			<!-- 选号框-->
			<div id="xuanhaokuang" style="display: none;">
				<jsp:include page="/function/public_rtz.jsp"/>
			</div>
			<input type="hidden" id="lotNo" value="T01005" name="lotNo"/>
			<input type="hidden" id="jsonString" name="jsonString" value=""/> 
			<input type="hidden" id="caiZhong" value="jinqiucai"/> 
			<input type="hidden" id="path" name="path" value=""/> 
	        <input type="hidden" id="errorCode" name="errorCode" value=""/>
			<input type="hidden" id="dangqianwanfa" value="进球彩"/>
			<input type="hidden" id="erjiwanfa" value="普通投注" />
			<input type="hidden" id="goumaifangshi" value="代购" />
			<input type="hidden" id="daiGouHemai" name="daiGou" value="daigou"  />
			<input type="hidden" id="jsonStringCLR" name="jsonStringCLR" value="" />
		</form>
		</div>
			<!-- 进球彩选号-->
		</div>
		<jsp:include page="/function/public_hemai_zuihao_zc.jsp"/>
		</div>
	</div>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"></jsp:include>
<!-- 弹出框 开始 -->
<jsp:include page="/function/public_touZhuAlert_sichang.jsp"></jsp:include>
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>

<!-- 弹出框 结束 -->
</div>
<script>
		//动态改变遮罩层的高度
		var tempHeight = $("#zucai_area").height() + $(".zucai_money").height() + $(".FollowNubFootball").height();
		$(".zucaitableceng").css("height",tempHeight);
	</script>
<jsp:include page="/function/rules/setBody.jsp"></jsp:include>