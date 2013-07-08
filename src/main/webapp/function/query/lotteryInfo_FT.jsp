<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!--开奖中心右边-->	
	<div class="lotteryAnnouncement">
	<s:iterator value="#request.arrWininfo" id="arrWininfo">
	<input type="hidden" id="lotno" value="<s:property value="id.lotno"/>"/>
	<%//双色球开奖 %>
		<s:if test='id.lotno=="F47104"'>
		<div class="announcement_border">
			<h2>双色球开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="ssqselect" onchange="getdrawalotteryFTInfo('ssqselect')" >
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
					<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/> </span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(10,12)"/></span>
						<span class="SmallBlueBall"><s:property value="winspecialcode"/></span>
					</li>
						<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_ssq.jsp'"/>
					</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="shuangSe_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
						 <s:if test="(#s.index+1)<7">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_shuangseqiu").addClass("selected");
			});
		</script>
		</s:if>
		<%//福彩3D开奖 %>
		<s:elseif test='id.lotno=="F47103"'>
		<div class="announcement_border">
			<h2>福彩3D开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="3Dselect" onchange="getdrawalotteryFTInfo('3Dselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
					<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(5,6)"/></span>	
					</li>
						 <li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_3D.jsp'"/>
<!-- 						<input type="button" value="参与合买" class="shuangSe_btn" onclick="javaScript:location.href='/hemai/fucai3dhemai.html'"/>
 -->					</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="shuangSe_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
						 <s:if test="(#s.index+1)<4">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey">
						</s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_fucai3D").addClass("selected");
			});
		</script>
		</s:elseif>
			<%//七乐彩开奖 %>
		<s:elseif test='id.lotno=="F47102"'>
		<div class="announcement_border">
			<h2>七乐彩开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="qlcselect" onchange="getdrawalotteryFTInfo('qlcselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
					<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>	
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(10,12)"/></span>	
						<span class="SmallRedBall"> <s:property value="winbasecode.substring(12,14)"/></span>
						<span class="SmallBlueBall"><s:property value="winspecialcode"/></span>
					</li>                             
						<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_qlc.jsp'"/>
            	</ul>
				<table cellspacing="0" cellpadding="0" class="shuangSe_rightTable">
					<thead>
						<s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
						  <s:if test="(#s.index+1)<8">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_qilecai").addClass("selected");
			});
		</script>
		</s:elseif>
	<%//排列三开奖 %>
		<s:elseif test='id.lotno=="T01002"'>
		<div class="announcement_border">
			<h2>排列三开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="plsselect" onchange="getdrawalotteryFTInfo('plsselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
						<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>	
					</li>                             
						<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_pls.jsp'"/>
				</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="shuangSe_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
						  <s:if test="(#s.index+1)<4">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_pailiesan").addClass("selected");
			});
		</script>
		</s:elseif>
		<%//大乐透开奖 %>
		<s:elseif test='id.lotno=="T01001"'>
		<div class="announcement_border">
			<h2>大乐透开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="dltselect" onchange="getdrawalotteryFTInfo('dltselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
						<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,6)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(8,10)"/></span>
						<span class="SmallBlueBall"><s:property value="winbasecode.substring(11,13)"/></span>	
					 	<span class="SmallBlueBall"><s:property value="winbasecode.substring(13,15)"/></span>	
					</li>
					<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>12选2销售额：<s:property value="arrWininfo.infos.12xuan2Money"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_dlt.jsp'"/>
				</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="tiCai_rightTable">
					<thead>
						<tr>
							<th width="40%" colspan="2">奖项</th>
							<th width="27%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo"  status="status">
						  <s:if test="(#status.index+1)<20">
						 <s:if test="#prizeInfo.wingrade.indexOf('八等奖')>-1||#prizeInfo.wingrade.indexOf('12选2')>-1">
						 <tr>
							<th colspan="2"><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						 </s:if>
						 <s:else>
						  <s:if test="#status.odd">
						<tr>
							<th rowspan="2"><s:property value="wingrade"/></th>
							<th><s:property value="zhuijia"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						<s:else>
						<tr>
							<th><s:property value="zhuijia"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:else>
						</s:else>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_daletou").addClass("selected");
			});
		</script>
		</s:elseif>
		<%//排列五开奖 %>
		<s:elseif test='id.lotno=="T01011"'>
		<div class="announcement_border">
			<h2>排列五开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="plwselect" onchange="getdrawalotteryFTInfo('plwselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
						<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,5)"/></span>	
					</li>                             
						<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_plw.jsp'"/>
<!-- 						<input type="button" value="参与合买" class="shuangSe_btn" onclick="javaScript:location.href='/hemai/pailie5hemai.html'"/>
 -->					</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="tiCai_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s" >
						  <s:if test="(#s.index+1)<2">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_pailiewu").addClass("selected");
			});
		</script>
		</s:elseif>
		<%//22选五开奖 %>
		<s:elseif test='id.lotno=="T01013"'>
		<div class="announcement_border">
			<h2>22选5开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="22X5select" onchange="getdrawalotteryFTInfo('22X5select')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
						<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,5)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,8)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(9,11)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(12,14)"/></span>	
					</li>                             
					<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="tiCai_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
					     <s:if test="(#s.index+1)<4">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_22xuan5").addClass("selected");
			});
		</script>
		</s:elseif>
		<%//七星彩开奖 %>
		<s:elseif test='id.lotno=="T01009"'>
		<div class="announcement_border">
			<h2>七星彩开奖信息</h2>
			<div class="space15">&#160;</div>
			<div class="shiShi_table">
				<ul class="shuangSe_infor">
					<li>选择期号：
						<select name="" id="qxcselect" onchange="getdrawalotteryFTInfo('qxcselect')">
							<s:iterator value="batchcodeArray" >
								<option value="<s:property value="onebet"/>" <s:if test='id.batchcode==onebet'>selected="selected"</s:if>><s:property value="onebet"/></option>
							</s:iterator>
						</select>
					</li>
					<li>开奖时间：<s:property value="opentime"/></li>
					<li><span class="lotteryNumbers">开奖号码：</span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(0,1)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(1,2)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(2,3)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(3,4)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(4,5)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(5,6)"/></span>
						<span class="SmallRedBall"><s:property value="winbasecode.substring(6,7)"/></span>	
					</li>                             
					<li>本期全国销售总额：<s:property value="infos.betTotalMoney"/>元</li>
					<li>奖池累计金额：<s:property value="infos.progressive"/>元</li>
					<li>
						<input type="button" value="立即投注" class="shuangSe_btn" onclick="javaScript:location.href='/rchlw/lottery/ruyicai_channel_qxc.jsp'"/>
					</li>
				</ul>
				<table cellspacing="0" cellpadding="0" class="shuangSe_rightTable">
					<thead>
						<tr>
							<th width="33%">奖项</th>
							<th width="33%">全国中奖注数</th>
							<th width="33%">单注奖金</th>
						</tr>
					</thead>
						<tbody>
						 <s:iterator value="infos.prizeInfos" id="prizeInfo" status="s">
						    <s:if test="(#s.index+1)<7">
						 <s:if test="#status.odd">
						<tr>
						</s:if>
						<s:else><tr class="shiShi_bgGrey"></s:else>
							<th><s:property value="wingrade"/></th>
							<th><s:property value="winnumber"/></th>
							<td><s:property value="winmoney"/></td>
						</tr>
						</s:if>
						</s:iterator>
					</tbody>
				</table>
			
			
			</div>
		</div>
		<script>
			$(function(){
				$(".a_qixingcai").addClass("selected");
			});
		</script>
		</s:elseif>
		</s:iterator>
	</div>