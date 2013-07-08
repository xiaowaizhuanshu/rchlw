<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<jsp:include page="/function/common/ruyicai_include_common_top_http.jsp"/>
<title>参与合买${title }</title>
<meta http-equiv="keywords" content="参与合买，合买方案列表，合买认购，合买名人">
<meta http-equiv="description" content="参与合买，合买方案列表">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/util.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/function/css/newsAll.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/jqueryJS/jquery-1.5.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/util.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/js/hemai/hemaiutil.js" ></script>
</head>
<body>
<jsp:include page="/function/common/ruyicai_include_common_top_nav.jsp"/>
<div class="space10">&nbsp;</div>
<form action="#" method="post" id="CaseSelectForm" onsubmit="return ajaxFromToHemai('CaseSelectForm','CaseHtml')" >
<div class="TogetherListBody">
	<!--  ChannelBuyBanner  -->
	<div class="ChannelBuyBanner">
	
<%//判断传入的彩种编号 %>
<s:set  name="lotno_p"  value="%{#parameters.lotno[0]}"/>
<input type="hidden" name="lotno" value="${lotno_p}" />
<s:set name="lotno_cn" value="" />
<s:if test="#lotno_p=='F47104'"><s:set id="lotno_cn" value='"双色球"' /></s:if>
<s:elseif test='#lotno_p=="F47103"'><s:set id="lotno_cn" value='"福彩3D"' /></s:elseif>
<s:elseif test='#lotno_p=="F47102"'><s:set id="lotno_cn" value='"七乐彩"' /></s:elseif>
<s:elseif test='#lotno_p=="T01001"'><s:set id="lotno_cn" value='"大乐透"' /></s:elseif>
<s:elseif test='#lotno_p=="T01002"'><s:set id="lotno_cn" value='"排列三"' /></s:elseif>
<s:elseif test='#lotno_p=="T01011"'><s:set id="lotno_cn" value='"排列五"' /></s:elseif>
<s:elseif test='#lotno_p=="T01009"'><s:set id="lotno_cn" value='"七星彩"' /></s:elseif>
<s:elseif test='#lotno_p=="T01013"'><s:set id="lotno_cn" value='"22选5"' /></s:elseif>

<input type="hidden" id="orderDir" name="orderDir" value="" />
<input type="hidden" id="orderBy" name="orderBy" value="" />
<s:if test="#lotno_p=='F47104'">
<script type="text/javascript">
	$(document).ready(function () {
		getIssueByLotNo('F47104');
	});
	</script>
		<!--  SSQ  -->
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_ssq_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('F47104');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_ssq.gif" /><i>当前期第<strong id="qihao"></strong>期　每周二、四、日晚开奖，单注最高奖金1000万元！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='/rchlw/lottery/ruyicai_channel_ssq.jsp'">选号投注</dt>
						<dt class="light" onclick="location.href='/rchlw/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110614180531_518.html?id=518&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjwssq/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/fucaituijian/fucaituijian_shuangseqiu_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				<!--  Tab end  -->
		<!--  SSQ END -->

</s:if>
<s:elseif test='#lotno_p=="F47103"'>
	<!--  3D  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('F47103');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_fcsd_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('F47103');});</script>
						<img src="/images/word_fcsd.gif" /><i>当前期第<strong id="qihao"></strong>期　每晚开奖，玩法简单，2元赢取1000元！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_3D.jsp'">选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133107_597.html?id=597&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjw3d/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/fucaituijian/fucaituijian_fucai3D_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  3D END -->
</s:elseif>
<s:elseif test='#lotno_p=="F47102"'>
	<!--  QLC  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('F47102');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(/images/logo_qlc_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('F47102');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_qlc.gif" /><i>当前期第<strong id="qihao"></strong>期　每周一、三、五开奖，2元赢取500万！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_qlc.jsp'">选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133657_601.html?id=601&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjwqlc/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/fucaituijian/fucaituijian_qilecai_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  QLC END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01013"'>
	<!--  EEXW  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01013');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_eexw_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('T01013');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_eexw.gif" /><i>当前期第<strong id="qihao"></strong>期　每晚20:30开奖，2元赢取500万！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_22xuan5.jsp'">选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133657_601.html?id=601&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjeexwc/index.php" target="_blank">走势图表</a>
							<!-- <a style="border:0px;" href="/fucaituijian/fucaituijian_qilecai_1.html" target="_blank" >专家推荐</a> -->
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  EEXW END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01001"'>
	<!--  DLT  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01001');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_dlt_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('T01001');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_dlt.gif" /><i>当前期第<strong id="qihao"></strong>期　每周一、三、六晚开奖，3元可赢取1600万元！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_dlt.jsp'" >选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'" >我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133010_596.html?id=596&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjwdlt/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/ticaituijian/ticaituijian_daletou_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  DLT END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01002"'>
	<!--  PL3  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01002');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_pls_d.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('T01002');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_pls.gif" /><i>当前期第<strong id="qihao"></strong>期　固定奖，玩法简单，每晚20：30开奖！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_pls.jsp'" >选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'" >我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133206_598.html?id=598&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjwpl3/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/ticaituijian/ticaituijian_pailie3_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  PL3 END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01011"'>
	<!--  PL5  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01011');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_plw_d.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('T01011');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_plw.gif" /><i>当前期第<strong id="qihao"></strong>期　天天开奖，固定奖金10万元！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/lottery/ruyicai_channel_plw.jsp'" >选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'" >我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133309_599.html?id=599&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjwpl5/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/ticaituijian/ticaituijian_pailie5_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  PL5 END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01009"'>
	<!--  QXC  -->
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01009');
	});
	</script>
			<!--  Banner start  -->
				<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_qxc_d.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getBatchCode('T01009');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_qxc.gif" /><i>当前期第<strong id="qihao"></strong>期　每周二、五、日开奖，2元赢取500万！　</i><span id="jinrikaijiangId"></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩：<strong><font id="day"></font>天<font id="hour"></font>时<font id="minute"></font>分<font id="second"></font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select onchange="changeBathcode($('#issueSelect').val());" name="" id="issueSelect">
							</select>
							<span id="qihao" style="display: none;"></span>
						</span>
					</li>
				</ol>
				<!--  Banner end  -->
				<div class="space10">&nbsp;</div>
				
				<!--  Tab start  -->
				<div class="ChannelBuyHandleMainTab">
					<dl class="ChannelBuyTab">
						<dt class="light selected" >参与合买</dt>
						<dt class="light" onclick="location.href='/rchlw/lottery/ruyicai_channel_qxc.jsp'" >选号投注</dt>
						<dt class="light" onclick="location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'" >我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a target="_blank" href='/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110615133351_600.html?id=600&code1=135&code='>玩法介绍</a>
							<a href="http://tbzs.ruyicai.com/cjw7xc/index.php" target="_blank">走势图表</a>
							<a style="border:0px;" href="/ticaituijian/ticaituijian_qixingcai_1.html" target="_blank" >专家推荐</a>
						</dd>
					</dl>
				</div>
				
				<!--  Tab end  -->
		<!--  QXC END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01003"'>
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady14();
		getIssueByLotNo('T01003');
	});
	</script>
	<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
			<li>
				<!-- 期号 截至时间  倒计时    开始 -->
				<script>$(function(){getZCBatchCode('T01003');});</script>
				<img src="<%=request.getContextPath() %>/function/images/word_zcsf.gif" /><i>当前期第<strong id="qihao3">000000</strong><strong id="qihao2"></strong><strong id="qihao1"></strong>期　无足彩,不球迷,猜14场比赛，赢百万奖金！　</i><span id="jinrikaijiangId"><!-- 此处会显示今日开奖小图标 --></span>
			</li>
			<li>
				截止时间：<font id="endTime"></font><em>还剩:<strong><font id="day">0</font>天<font id="hour">0</font>时<font id="minute">0</font>分<font id="second">0</font>秒</strong></em>
				<span class="qihaoSelectBox">期号查询
					<select id="issueSelect" name="" onchange="changeBathcode($('#issueSelect').val());">
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
				<dt class="light selected" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01003'">参与合买</dt>
				<dt class="light" onclick="window.location.href='/rchlw/lottery/ruyicai_channel_shengfucai.jsp'">标准投注</dt>
				<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
				<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
				<dd>
					<a style="border:none;" target="_blank" 
					href="/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110711171745_1279.html?id=1279&code1=135&code=129">
					玩法介绍</a>
				</dd>
			</dl>
		</div>
		<!--  Tab end  -->
	
</s:elseif>
<s:elseif test='#lotno_p=="T01004"'>
	<script type="text/javascript">
//	$(document).ready(cleanReady9);
	$(document).ready(function () {
		getIssueByLotNo('T01004');
	});
	</script>
	<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
			<li>
				<!-- 期号 截至时间  倒计时    开始 -->
				<script>$(function(){getZCBatchCode('T01004');});</script>
				<img src="<%=request.getContextPath() %>/function/images/word_rxjc.gif" /><i>当前期第<strong id="qihao3">000000</strong><strong id="qihao2"></strong><strong id="qihao1"></strong>期　无足彩,不球迷,猜14场比赛，赢百万奖金！　</i><span id="jinrikaijiangId"><!-- 此处会显示今日开奖小图标 --></span>
			</li>
			<li>
				截止时间：<font id="endTime"></font><em>还剩:<strong><font id="day">0</font>天<font id="hour">0</font>时<font id="minute">0</font>分<font id="second">0</font>秒</strong></em>
				<span class="qihaoSelectBox">期号查询
					<select id="issueSelect" name="" onchange="changeBathcode($('#issueSelect').val());">
					</select>
					<span style="display:none" id="qihao">
				<span style="display:none" id="qihaoall">
				<script>
				$(function(){
						$("#qihaoall").html($("#qihao3").text()+","+$("#qihao2").text()+","+$("#qihao1").text());
				});
				</script>
				</span>
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
				</span>
			</li>
		</ol>
		
		<div class="space10">&nbsp;</div>
		
		<!--  Tab start  -->
		<div class="ChannelBuyHandleMainTab" id="zucainavcon">
			<dl class="ChannelBuyTab">
				<dt class="light selected" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01004'">参与合买</dt>
				<dt class="light" onclick="window.location.href='/rchlw/lottery/ruyicai_channel_renjiuchang.jsp'">标准投注</dt>
				<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
				<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
				<dd>
					<a style="border:none;" target="_blank" 
					href="http://test.ruyicai.com/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110627104001_723.html?id=723&code1=135&code=">
					玩法介绍</a>
				</dd>
			</dl>
		</div>
		<!--  Tab end  -->
</s:elseif>
<s:elseif test='#lotno_p=="T01006"'>
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady6();
		getIssueByLotNo('T01006');
	});
	</script>
	<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
			<li>
				<!-- 期号 截至时间  倒计时    开始 -->
				<script>$(function(){getZCBatchCode('T01006');});</script>
				<img src="<%=request.getContextPath() %>/function/images/word_lcbq.gif" /><i>当前期第<strong id="qihao3">000000</strong><strong id="qihao2"></strong><strong id="qihao1"></strong>期　过程和结果同样重要　</i><span id="jinrikaijiangId"><!-- 此处会显示今日开奖小图标 --></span>
			</li>
			<li>
				截止时间：<font id="endTime"></font><em>还剩:<strong><font id="day">0</font>天<font id="hour">0</font>时<font id="minute">0</font>分<font id="second">0</font>秒</strong></em>
				<span class="qihaoSelectBox">期号查询
					<select id="issueSelect" name="" onchange="changeBathcode($('#issueSelect').val());">
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
				<dt class="light selected" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01006'">参与合买</dt>
				<dt class="light"  onclick="window.location.href='/rchlw/lottery/ruyicai_channel_liuchangban.jsp'">标准投注</dt>
				<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
				<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
				<dd>
					<a style="border:none;" target="_blank" 
					href="http://test.ruyicai.com/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110627100023_721.html?id=721&code1=135&code=">
					玩法介绍</a>
				</dd>
			</dl>
		</div>
		<!--  Tab end  -->
</s:elseif>
<s:elseif test='#lotno_p=="T01005"'>
	<script type="text/javascript">
	$(document).ready(function () {
		//cleanReady4();
		getIssueByLotNo('T01005');
	});
	</script>
	<ol style="background:url(<%=request.getContextPath() %>/function/images/logo_zc_b.gif) no-repeat 15px 15px;">
					<li>
						<!-- 期号 截至时间  倒计时    开始 -->
						<script>$(function(){getZCBatchCode('T01005');});</script>
						<img src="<%=request.getContextPath() %>/function/images/word_scjq.gif" /><i>当前期第<strong id="qihao3">000000</strong><strong id="qihao2"></strong><strong id="qihao1"></strong>期　进几个球，你说了算　</i><span id="jinrikaijiangId"><!-- 此处会显示今日开奖小图标 --></span>
					</li>
					<li>
						截止时间：<font id="endTime"></font><em>还剩:<strong><font id="day">0</font>天<font id="hour">0</font>时<font id="minute">0</font>分<font id="second">0</font>秒</strong></em>
						<span class="qihaoSelectBox">期号查询
							<select id="issueSelect" name="" onchange="changeBathcode($('#issueSelect').val());">
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
						<dt class="light selected" onclick="window.location.href='/rchlw/function/selectAll!getCaselotsByWhere?lotno=T01005'">参与合买</dt>
						<dt class="light" onclick="window.location.href='/rchlw/lottery/ruyicai_channel_sichang.jsp'">标准投注</dt>
						<dt class="light" onclick="window.location.href='<%=request.getContextPath()%>/function/rules/user.jsp?key=0&view=ChildMenu2&style=menu2'">我的方案</dt>
						<dt class="LaunchCase" onclick="faqiHemaiTiaozhuan('${lotno_p}')"><a class="light">发起合买&gt;&gt;</a></dt>
						<dd>
							<a style="border:none;" target="_blank" 
							href="http://test.ruyicai.com/bangzhuzhongxin/wanfajieshao/guanfangwanfajieshao/20110627104718_724.html?id=724&code1=135&code=">
							玩法介绍</a>
						</dd>
					</dl>
				</div>
				<!--  Tab end  -->
</s:elseif>
	</div><!--  ChannelBuyBanner  -->
	<dl class="TogetherListSearch">
		<dt>
			<span class="LaunchBtn " style="display:none;"><input class="BaseBtn AllTogetherBuyBox" type="button" onclick="faqiHemaiTiaozhuan('${lotno_p}')" value="发起合买" /></span>
			<input class="SearchText" id="search" name="search" type="text" onKeyDown='if (event.keyCode==13){$("#CaseSelectForm").submit();}' value="" />
			<span class="SearchBtn"><input class="BaseBtn AllTogetherBuyBox" type="button"  onclick='$("#CaseSelectForm").submit();' value="搜索" /></span>
			<strong>热门搜索：</strong>
			<div id="CaseCelebrity">
				<script type="text/javascript">$(function () { $.get("/rchlw/function/hemaiCenter!getCaseCelebrity?lotno=<s:property value="#lotno_p" />", function (data, textStatus){$("#CaseCelebrity").html(data);});	</script>
			</div>
		</dt>
		<dd>
			<select name="lotsType" onchange="$('#CaseSelectForm').submit()">
				<option selected value="-1" >全部方案</option>
				<option value="1">复式</option>
				<option value="0">单式</option>
				<option value="2">胆拖</option>
				<option value="3">多方案</option>
			</select>
			<select name="totalAmt" onchange="$('#CaseSelectForm').submit()">
				<option value="-1" selected >全部金额</option>
				<option value="100000">千元以上</option>
				<option value="10000">百元以上</option>
				<option value="1">百元以下</option>
			</select>
				<select name="displayState" onchange="$('#CaseSelectForm').submit()">
				<option id="nolimit1" value="1" selected >未满员</option>
				<option value="2">满员</option>
				<option value="4">撤单</option>
				<option id="nolimit" value="0">不限</option>
			</select>
		</dd>
	</dl>
	<table class="TogetherListTable1">
		<thead>
			<tr id="title_hemai">
				<th>序号</th>
				<th>发起人</th>
				<th class="hand color_blue" id="zhanji" onclick="orderByImg('zhanji')" >战绩<span class="AllTogetherBuyBox SortDisabled"></span></th>
				<th>方案内容</th>
				<th class="hand color_blue" id="fanganjine" onclick="orderByImg('fanganjine')">方案金额<span class="AllTogetherBuyBox SortDisabled"></span></th>
				<th>最低认购</th>
				<th class="hand color_blue" id="jindu" onclick="orderByImg('jindu')">进度<span class="AllTogetherBuyBox SortDisabled"></span></th>
				<th>剩余金额</th>
				<th class="hand color_blue" id="renshu" onclick="orderByImg('renshu')">人数<span class="AllTogetherBuyBox SortDisabled"></span></th>
				<th>参与认购</th>
				<th>详情</th>
			</tr>
		</thead>
		<tbody id="CaseHtml">
		<s:iterator id="list"  value="#request.hemaiList.list" status="i" >
			<tr 
				<s:if test='#i.index<9'> class="orange" onmouseout="$(this).attr('class','orange')" onmouseover="$(this).attr('class','TrbgBlue')"</s:if>
				<s:else>class="TrbgWhite" onmouseout="$(this).attr('class','TrbgWhite')" onmouseover="$(this).attr('class','TrbgBlue')"</s:else>
				>
				<th>${i.index+1}</th>
			<th>
				<s:set name="Nname" value="#request.hemaiList.nickname_array[#i.index].new_nickname" />
				 <a href="javascript:;"
					onclick="fanganListToUser('${list.achievement.userno }','${Nname }')"
					onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))">${Nname
				}</a>
				</th>
				<th>
					<div class="LevelBox">
					<a href="javascript:;" id="displayIcon_${i.index}" onclick="yingliListToUser('<s:property value="#list.starter.userno" />','<s:property value="#list.caseLot.lotno" />','<s:property value="#Nname" />','displayIcon_${i.index}','${lotno_cn}')" >
						<s:set name="achievement" value="#list.achievement.displayIcon" ></s:set>
						<s:if test="#achievement.crown!=null">
							<s:iterator begin="1" end="#achievement.crown">
								<span class="AllTogetherBuyBox LevelCrown"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graycrown!=null">
							<s:iterator begin="1" end="#achievement.graycrown">
							<span class="AllTogetherBuyBox LevelCrownGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.cup!=null">
							<s:iterator begin="1" end="#achievement.cup">
							<span class="AllTogetherBuyBox LevelCup"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graycup!=null">
							<s:iterator begin="1" end="#achievement.graycup">
							<span class="AllTogetherBuyBox LevelCupGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.diamond!=null">
							<s:iterator begin="1" end="#achievement.diamond">
							<span class="AllTogetherBuyBox LevelDiamond"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graydiamond!=null">
							<s:iterator begin="1" end="#achievement.graydiamond">
							<span class="AllTogetherBuyBox LevelDiamondGray"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.goldStar!=null">
							<s:iterator begin="1" end="#achievement.goldStar">
							<span class="AllTogetherBuyBox LevelStar"></span>
							</s:iterator>
						</s:if>
						<s:if test="#achievement.graygoldStar!=null">
							<s:iterator begin="1" end="#achievement.graygoldStar">
							<span class="AllTogetherBuyBox LevelStarGray"></span>
							</s:iterator>
						</s:if></a>
					</div>
				</th>
				<s:if test="#list.caseLot.visibility!=0">	
					<th>
						<s:if test="#list.caseLot.visibility==1">对所有人保密</s:if>
						<s:elseif test="#list.caseLot.visibility==2">对所有人截止后公开</s:elseif>
						<s:elseif test="#list.caseLot.visibility==3">对跟单者公开</s:elseif>
						<s:elseif test="#list.caseLot.visibility==4">对跟单者截止后公开</s:elseif>
					</th>				
				</s:if>
				<s:else>
					<s:set name="zhuma_view" value="" />
					<s:set name="zhuma_open" value="" />
					<s:iterator id="this_lot" value="#list.torder.tlots" status="j">
						<s:if test="#j.index<1">
							<s:if test="zhuma.betcode.replace('<br/>','').length()>26">
								<s:set id="zhuma_view" value="zhuma.betcode.replace('<br/>','').substring(0,26)+'...'"/>
							</s:if>
							<s:else><s:set id="zhuma_view" value="zhuma.betcode.replace('<br/>','')"/></s:else>
							<s:set id="zhuma_open" value="zhuma.betcode" />
						</s:if>
						<s:else><s:set id="zhuma_open" value="#zhuma_open+zhuma.betcode" /></s:else>
					</s:iterator>
					<th class="WindowPopup" onmouseover="PopupOn($(this))" onmouseout="PopupOff($(this))" Content="${zhuma_open}" Offset="br,0,0">
					${zhuma_view}
					</th>
				</s:else>
				
				<td><s:i18n name="Format"><s:text name="FormatNumeral2" ><s:param value="#list.caseLot.totalAmt/100"/></s:text></s:i18n></td>
				
				<th><s:i18n name="Format"><s:text name="FormatNumeral2" ><s:param value="#list.caseLot.minAmt/100"/></s:text></s:i18n>元</th>
				
				<th><s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="((#list.caseLot.buyAmtByStarter+#list.caseLot.buyAmtByFollower)*100+99)/#list.caseLot.totalAmt"/>
				</s:text></s:i18n>%
<s:if test="#list.caseLot.safeAmt>0">+
				<s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="(#list.caseLot.safeAmt*100)/#list.caseLot.totalAmt"/>
				</s:text></s:i18n>%<i>保</i>
</s:if>			</th>
				
				<td><s:i18n name="Format"><s:text name="FormatNumeral2" >
				<s:param value="(#list.caseLot.totalAmt-#list.caseLot.buyAmtByStarter-#list.caseLot.buyAmtByFollower)/100"/>
				</s:text></s:i18n></td>
				<td><s:if test='#list.caseLot.participantCount==null||#list.caseLot.participantCount.equals("null")' >0</s:if><s:else>${list.caseLot.participantCount}</s:else></td>
				<s:set name="safeAmt_mr" value="#list.caseLot.minAmt/100"/>
				<th><input class="BuyText" type="text" id="canyu_amt_${list.caseLot.id}" value="${safeAmt_mr}" /> 元 <span class="CancelBtn">
				<input class="BaseBtn AllTogetherBuyBox" id="button_${list.caseLot.id}" type="button" onclick="canyuHemai('${list.caseLot.id}','${list.caseLot.lotno}')"  value="购买" /></span></th>
				<th><a href="/rchlw/function/selectAll!getCaseDetail?caselotId=${list.caseLot.id}" target="_blank" onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" >查看</a></th>
			</tr>
		</s:iterator>
			<s:set  name="pageCount"  value="%{#parameters.pageCount[0]}"/>
			<tr class="PageContent">
				<td colspan="11" style="">每页显示
				<input type="radio" name="pageCount" <s:if test="#pageCount=='20'||(#pageCount!='30'&&#pageCount!='50')"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="20" />20条
				<input type="radio" name="pageCount" <s:if test="#pageCount=='30'"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="30" />30条
				<input type="radio" name="pageCount" <s:if test="#pageCount=='50'"> checked="checked" </s:if> onclick="$('#CaseSelectForm').submit()" value="50" />50条
				
				</td>
			</tr>
			<tr class="PageContent">
				<th colspan="11" >${pageHtml}</th>
			</tr>
		</tbody>
	</table>
</div>
<input type="hidden" id="selectBatchCode"  name="batchCode" value="" />
</form>
<div class="space10">&#160;</div>
<div class="TogetherLegend">
	<table>
		<tr><th width="8%">战绩说明：</th><td width="6%"><span class="AllTogetherBuyBox LevelCrown"></span>皇冠：</td><td>5奖杯</td></tr>
		<tr><th></th><td><span class="AllTogetherBuyBox LevelCup"></span>奖杯：</td><td>5钻石</td></tr>
		<tr><th></th><td><span class="AllTogetherBuyBox LevelDiamond"></span>钻石：</td><td>5金星</td></tr>
		
<s:elseif test='#lotno_p=="F47104"'>
	<!--  3D PL3 PL5 QLC QXC SSQ DLT-->
		<tr><th></th><td><span class="AllTogetherBuyBox LevelStar"></span>星星：</td><td>1）满员方案税后盈利达到900，或回报达到10倍以上，获得一颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>2）税后盈利达到10万或回报达到500倍，可获得两颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>3）若方案税前奖金大于等于100万，则再奖励一颗金星</td></tr>
	<!--   3D PL3 PL5 QLC QXC SSQ DLT END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01001"'>
	<!--  3D PL3 PL5 QLC QXC SSQ DLT-->
		<tr><th></th><td><span class="AllTogetherBuyBox LevelStar"></span>星星：</td><td>1）满员方案税后盈利达到800，或回报达到10倍以上，获得一颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>2）税后盈利达到10万或回报达到500倍，可获得两颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>3）若方案税前奖金大于等于100万，则再奖励一颗金星</td></tr>
	<!--   3D PL3 PL5 QLC QXC SSQ DLT END -->
</s:elseif>


<s:elseif test='#lotno_p=="T01003"'>
	<!--  R9C 6C 4C 14C -->
		<tr><th></th><td><span class="AllTogetherBuyBox LevelStar"></span>星星：</td><td>1）满员方案税后盈利达到5万且回报2倍以上，或盈利达到5000且回报10倍以上，获得一颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>2）方案税后盈利达80万或回报达到500倍，获得两颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>3）若当期中得450万元税前奖金，则再获得一颗金星</td></tr>
	<!--   R9C 6C 4C 14C END -->
</s:elseif>
<s:elseif test='#lotno_p=="T01004"||#lotno_p=="T01006"||#lotno_p=="T01005"'>
	<!--  R9C 6C 4C 14C -->
		<tr><th></th><td><span class="AllTogetherBuyBox LevelStar"></span>星星：</td><td>1）满员方案税后盈利达到1万，或盈利达到3000且回报10倍以上，获得一颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>2）税后盈利达10万或回报达到500倍，可获得两颗金星。</td></tr>
	<!--   R9C 6C 4C 14C END -->
</s:elseif>
<s:elseif test='#lotno_p=="F47103"||#lotno_p=="F47102"||#lotno_p=="T01002"||#lotno_p=="T01011"||#lotno_p=="T01009"||#lotno_p=="T01013"'>
	<!--  3D PL3 PL5 QLC QXC SSQ DLT-->
		<tr><th></th><td><span class="AllTogetherBuyBox LevelStar"></span>星星：</td><td>1）满员方案税前奖金达到1000，或盈利大于10倍，获得一颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>2）税后盈利达到10万或回报达到500倍，可获得两颗金星；</td></tr>
		<tr><th></th><td>&#160;</td><td>3）若方案税前奖金大于等于100万，则再奖励一颗金星</td></tr>
	<!--   3D PL3 PL5 QLC QXC SSQ DLT END -->
</s:elseif>

		<tr>
			<th></th>
			<td colspan="2">
				<span class="AllTogetherBuyBox LevelCrownGray"></span>
				<span class="AllTogetherBuyBox LevelCupGray"></span>
				<span class="AllTogetherBuyBox LevelDiamondGray"></span>
				<span class="AllTogetherBuyBox LevelStarGray"></span>
				规则与上述相同，但必须满足方案认购进度达到50%。
			</td>
		</tr>
	</table>
	<p>*%+*%保：　1）保指保底，保底是设定在合买截止时，如果方案尚未满员，将以保底时所承诺的金额最大限度的促进方案满员。<br/>
          　　　　　&nbsp;2）*%+*%保，指进度百分比+保底百分比。</p>
</div>
<div id="ajax_hemai_pop" class="WindowCenter" style="display:none; background-image:url(<%=request.getContextPath() %>/function/images/ThrobberBig.gif); background-position:-88px -144px; width:148px; height:27px;" ></div>
<input type="hidden" id="amt_caseId"  value="" />
<jsp:include page="/function/common/canyuHemai_div.jsp"/>
<jsp:include page="/function/common/ruyicai_include_common_footer_noindex.jsp"/>
<jsp:include page="/function/common/tishi.jsp"/>
<jsp:include page="/function/query/case/fanganList.jsp"/>
<jsp:include page="/function/query/case/yingliList.jsp"/>
<jsp:include page="/function/common/setBody.jsp"/>