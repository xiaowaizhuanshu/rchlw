<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="java.util.Date,java.text.SimpleDateFormat"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!--账户管理右边-->
<style>
div.My_account {
	width: 778px;
	padding: 0px;
}

div.My_account h2 {
	margin: 0 14px;
}
</style>
<h2>积分管理</h2>
<div class="account_recharge">
	<ul class="account_rechargeTab">
		<li ControlTarget=".cash_Records" class="light selected"
			onclick="BaseTab($(this));">积分明细</li>
		<li ControlTarget=".user_Drawing" class="light"
			onclick="BaseTab($(this));">积分兑换</li>
	</ul>
	<span class=""><a
		href="http://www.ruyicai.com/cms/a/bangzhuzhongxin/wodezhanghu/2012/0330/41.html?fid=5&id=12"
		target="_blank">如何获得更多积分？</a></span>
</div>
<div class="account_rechargeContent">
	<div class="cash_Records none selected">
		<form action="/rchlw/user/tuserinfoAction!accountDetail" method="get"
			onsubmit="return reHtmlInParameters('',this.startDate.value,this.stopDate.value,'')">
			<table class="cashRecords_time" cellspacing="0" cellpadding="0">
				<tr>
					<td>起始日期：</td>
					<td><input class="account_time" type="text" id="startDate"
						name="beginTime" value="${startDate}"
						onFocus="WdatePicker({alwaysUseStartDate:true})" /></td>
					<td>终止日期：</td>
					<td><input class="account_time" type="text" id="stopDate"
						name="endTime" value="${stopDate}"
						onFocus="WdatePicker({alwaysUseStartDate:true})" /></td>
					<td><input name="button" type="submit" id="button"
						class="account_checkBtn" value="查询" /></td>
				</tr>
			</table>
			<table class="account_day" cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th>序号</th>
						<th>时间</th>
						<th>积分变动</th>
						<th>现有积分</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<s:if
						test="#request.list.today.size()+#request.list.yestday.size()+#request.list.oldday.size()==0">
						<tr>
							<td colspan="9" align="center" height="28">没有查询到积分变动记录</td>
						</tr>
					</s:if>
					<s:else>
						<%
							//-----------------------------今天的账户变动记录-----------------------------------------------------
						%>
						<s:if test="#request.list.today.size()>0">
							<tr class="account_bgYellow">
								<td colspan="7"><strong>今天</strong>（<s:property
										value="#request.list.today.size()" />条）</td>
							</tr>
							<s:iterator value="#request.list.today" status="stat">
								<s:if test="#stat.odd">
									<tr class="accountDay_whiteBg">
								</s:if>
								<s:else>
									<tr class="accountDay_greyBg">
								</s:else>
								<%
									//-- 序号 --
								%>
								<td><s:property value="#stat.index+1" /></td>
								<%
									//-- 时间 --
								%>
								<td><s:property value="createTime" /></td>
								<%
									//-- 积分变动 --
								%>
								<td><s:property value="scoreTypeMsg" /> <s:if
										test='scoreTypeMsg=="+"'>
										<b><s:property value="score" /></b>
									</s:if> <s:elseif test='scoreTypeMsg=="-"'>
										<i><s:property value="score" /></i>
									</s:elseif> <s:else>
										<s:property value="score" />
									</s:else></td>
								<%
									//--现有积分--
								%>
								<td><s:property value="currentScore" /></td>
								<%
									//-- 说明 --
								%>
								<td><s:property value="scoreType" /></td>
								</tr>
								</tr>
							</s:iterator>
						</s:if>

						<%
							//-- -----------------------------昨天的账户变动记录----------------------------------------------------- --
						%>
						<s:if test="#request.list.yestday.size()>0">
							<tr class="account_bgYellow">
								<td colspan="7"><strong>昨天</strong>（<s:property
										value="#request.list.yestday.size()" />条）</td>
							</tr>
							<s:iterator value="#request.list.yestday" status="stat">
								<s:if test="#stat.odd">
									<tr class="accountDay_whiteBg">
								</s:if>
								<s:else>
									<tr class="accountDay_greyBg">
								</s:else>
								<%
									//-- 序号 --
								%>
								<td><s:property value="#stat.index+1" /></td>
								<%
									//-- 时间 --
								%>
								<td><s:property value="createTime" /></td>
								<%
									//-- 积分变动 --
								%>
								<td><s:property value="scoreTypeMsg" /> <s:if
										test='scoreTypeMsg=="+"'>
										<b><s:property value="score" /></b>
									</s:if> <s:elseif test='scoreTypeMsg=="-"'>
										<i><s:property value="score" /></i>
									</s:elseif> <s:else>
										<s:property value="score" />
									</s:else></td>
								<%
									//--现有积分--
								%>
								<td><s:property value="currentScore" /></td>
								<%
									//-- 说明 --
								%>
								<td><s:property value="scoreType" /></td>
								</tr>
								</tr>
							</s:iterator>
						</s:if>
						<s:if test="#request.list.oldday.size()>0">
							<tr class="account_bgYellow">
								<td colspan="7"><strong>更早</strong>（<s:property
										value="#request.list.oldday.size()" />条）</td>
							</tr>
							<s:iterator value="#request.list.oldday" status="stat">
								<s:if test="#stat.odd">
									<tr class="accountDay_whiteBg">
								</s:if>
								<s:else>
									<tr class="accountDay_greyBg">
								</s:else>
								<%
									//-- 序号 --
								%>
								<td><s:property value="#stat.index+1" /></td>
								<%
									//-- 时间 --
								%>
								<td><s:property value="createTime" /></td>
								<%
									//-- 积分变动 --
								%>
								<td><s:property value="scoreTypeMsg" /> <s:if
										test='scoreTypeMsg=="+"'>
										<b><s:property value="score" /></b>
									</s:if> <s:elseif test='scoreTypeMsg=="-"'>
										<i><s:property value="score" /></i>
									</s:elseif> <s:else>
										<s:property value="score" />
									</s:else></td>
								<%
									//--现有积分--
								%>
								<td><s:property value="currentScore" /></td>
								<%
									//-- 说明 --
								%>
								<td><s:property value="scoreType" /></td>
								</tr>
							</s:iterator>
						</s:if>
					</s:else>
				</tbody>

			</table>
			<div class="space10">&#160;</div>
			<p class="account_page">${pageHtml}</p>
		</form>
	</div>
	<script>
		getUserScore("scores");
	</script>
	<div class="user_Drawing none">
		<p class="userDrawing_p">
			总积分：<b id="scores">0</b>
		</p>
		<table>
			<tr>
				<td width="90">要兑换的积分：</td>
				<td width="80"><input name="" type="text" class="myExchang" maxlength="10"
					id="socoreNum" /></td> 
				<td width="70" style="display: none">个积分兑换</td>
				<td width="80" style="display: none"><input name="" type="text"
					class="myExchang" /></td>
				<td width="55" style="display: none">元购彩金</td>
				<td><input type="button" class="ExchangeBtn" value="兑换"
					onclick='makescoreToM("socoreNum");' /></td>
			</tr>
			<tr>
				<td colspan="5" height="30">注：500个积分可兑换1元购彩金（请输入500的倍数），存入您的如意彩账户。</td>
			</tr>
		</table>
		<div class="space15">&nbsp;</div>
	</div>
	<script>
		$(function() {
			$(".a_integral").addClass("selected");
		});
	</script>
</div>
<jsp:include page="/function/common/alertTiShi.jsp"></jsp:include>