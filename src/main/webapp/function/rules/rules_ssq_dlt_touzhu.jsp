<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<div class="Pannel FastBuy">
	<div class="PannelHead">
		<h3>快速投注</h3>
		<dl class="TabN">
			<dt onclick="BaseTab($(this));dlt_dingshi();getBatchCodesBY('T01001');getJiangChi('T01001','dltJC')" ControlTarget=".FastBuyDLT" >大乐透</dt>
			<dt class="selected" onclick="BaseTab($(this));ssq_dingshi();getBatchCodesBY('F47104');getJiangChi('F47104','dltJC')" ControlTarget=".FastBuySSQ" >双色球</dt>
		</dl>
	</div>
	<form action="/rchlw/user/bet!bettingByDipin" method="post" id="BettingForm">
	<div class="PannelBody">
		<script>$(function(){getBatchCodesBY('F47104');ssq_dingshi();});</script>
		<div class="FastBuySSQ none selected">
			<table class="FastBuyTable">
				<tr><th rowspan="3"><img class="LogoBig" src="<%=request.getContextPath() %>/function/images/logo_ssq_b.gif" /></th><td>双色球第<b id="ssqqihao"></b>期　
				奖池：<i id="ssqJC"><script >getJiangChi('F47104','ssqJC')</script></i>元
				</td><th rowspan="2">&#160;</th></tr>
				<tr><td>投注截止时间：<font id="ssqendTime"></font></td></tr>
				<tr><td colspan="2"><em>[红球]从1-33中选6个不重复的整数 [蓝球]从1-16中选1个整数</em></td></tr>
				<tr class="Number"><td colspan="3">
					<input class="AllBalls FastBuyRedBall" type="text" value="01" id="ssq0" onchange="checkZhuMa('ssq','7','0')"  maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="09" id="ssq1" onchange="checkZhuMa('ssq','7','1')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="10" id="ssq2" onchange="checkZhuMa('ssq','7','2')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="18" id="ssq3" onchange="checkZhuMa('ssq','7','3')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="27" id="ssq4" onchange="checkZhuMa('ssq','7','4')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="30" id="ssq5" onchange="checkZhuMa('ssq','7','5')" maxlength="2"/>
					<input class="AllBalls FastBuyBullBall" type="text" value="11" id="ssq6" onchange="checkZhuMa('ssq','7','6')" maxlength="2"/>
				</td></tr>
				<tr class="Button"><td>&#160;</td><td colspan="2">
					<input class="Button_L1_R" type="button" value="立即投注" onclick="kuaiTouZhu('ssq')" />
					<input class="Button_L3_W" type="button" value="机选" onclick="ssq_dingshi()" />
					<input class="Button_L3_W" type="button" value="清空" onclick="clearall('7','ssq')" />
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp?canshu=zengsong#BettingForm">赠送彩票</a><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_ssq.jsp?canshu=hemai#BettingForm">发起合买</a>
				</td></tr>
			</table>
		</div>
		<div class="FastBuyDLT none">
			<table class="FastBuyTable">
				<tr><th rowspan="3"><img class="LogoBig" src="/rchlw/function/images/logo_dlt_b.gif" /></th><td>大乐透第<b id="dltqihao"></b>期　
				奖池：<i id="dltJC"></i>元
				</td><th rowspan="2">&#160;</th></tr>
				<tr><td>投注截止时间：<font id="dltendTime"></font></td></tr>
				<tr><td colspan="2"><em>[红球]从1-35中选5个不重复的整数 [蓝球]从1-12中选2个整数</em></td></tr>
				<tr class="Number"><td colspan="3">
					<input class="AllBalls FastBuyRedBall" type="text" value="01" id="dlt0" onchange="checkZhuMa('dlt','7','0')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="09" id="dlt1" onchange="checkZhuMa('dlt','7','1')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="10" id="dlt2" onchange="checkZhuMa('dlt','7','2')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="18" id="dlt3" onchange="checkZhuMa('dlt','7','3')" maxlength="2"/>
					<input class="AllBalls FastBuyRedBall" type="text" value="27" id="dlt4" onchange="checkZhuMa('dlt','7','4')" maxlength="2"/>
					<input class="AllBalls FastBuyBullBall" type="text" value="30" id="dlt5" onchange="checkZhuMa('dlt','7','5')" maxlength="2"/>
					<input class="AllBalls FastBuyBullBall" type="text" value="11" id="dlt6" onchange="checkZhuMa('dlt','7','6')" maxlength="2"/>
				</td></tr>
				<tr class="Button"><td>&#160;</td><td colspan="2">
					<input class="Button_L1_R" type="button" value="立即投注" onclick="kuaiTouZhu('dlt')" />
					<input class="Button_L3_W" type="button" value="机选" onclick="dlt_dingshi()" />
					<input class="Button_L3_W" type="button" value="清空" onclick="clearall('7','dlt')" />
					<a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp?canshu=zengsong#BettingForm">赠送彩票</a><a href="<%=request.getContextPath() %>/lottery/ruyicai_channel_dlt.jsp?canshu=hemai#BettingForm">发起合买</a>
				</td></tr>
			</table>
		</div>
	</div>
	<input type="hidden" name="lotteryId" value="" />
	<input type="hidden" name="stakesBalls" value="" />
	<input type="hidden" name="toatalMoney" value="2" />
	<input type="hidden" name="multiple" value="1" />
	<input type="hidden" name="stakesNum" value="1" />
	<input type="hidden" name="tradeArea" value="tj" />
	<input type="hidden" name="playType" value="" />
	<input type="hidden" name="stakeType" value="1" />
	<input type="hidden" id="jsonString" name="jsonString"  value="" />
	<input type="hidden" id="root" value="" />
	</form>
</div>