<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.util.Date,java.text.SimpleDateFormat" %>
<%@taglib prefix="s" uri="/struts-tags"%> 
			<h2>账户明细</h2>
			<div class="account_detailed">
			<form action="/rchlw/user/tuserinfoAction!accountDetail" method="get" onsubmit="return reHtmlInParameters('',this.startDate.value,this.stopDate.value,'')">
			<table class="account_check"  cellspacing="0" cellpadding="0">
				<tr>
					<td>起始日期：</td>
					<td><input class="account_time"  type="text" id="startDate" name="beginTime" value="${startDate}" onFocus="WdatePicker({alwaysUseStartDate:true})"/></td>
					<td>终止日期：</td>
					<td><input class="account_time" type="text" id="stopDate" name="endTime" value="${stopDate}" onFocus="WdatePicker({alwaysUseStartDate:true})"/></td>
					<td><input name="button" type="submit" id="button" class="account_checkBtn" value="查询"/></td>
				</tr>
			</table>
			
			<table class="account_day"  cellspacing="0" cellpadding="0">
				<tr>
					<th>交易时间</th>
					<th>订单号</th>
					<th>交易类型</th>
					<th>变动金额</th>
					<th>余额</th>
					<th>说明</th>
				</tr>
				<s:if test="#request.list==null">
           			<tr><td colspan="9" align="center" height="28">没有查询到账户变动记录！</td></tr>
                </s:if>
               <s:else>
               <%//-----------------------------今天的账户变动记录----------------------------------------------------- %>
				<s:if test="#request.list.today.size()>0">
				<tr class="account_bgYellow">
					<td colspan="7"><strong>今天</strong>（<s:property value="#request.list.today.size()"/>条）</td>
				</tr>
				<s:iterator   value="#request.list.today"  status="stat">
				
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<%//-- 交易时间 --%>
					<td>${plattime}</td>
					<%//-- 订单号 --%>
					<td>${id}</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='taccountType=="+"'>
							<b>${taccountTypeMsg}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>${taccountTypeMsg}</i>
						</s:elseif>
						<s:else>${taccountTypeMsg}</s:else>
					</td>
					<%//-- 变动金额--%>
					<td>${taccountType}
						<s:if test='taccountType=="+"'>
							<b>¥${amt}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>¥${amt}</i>
						</s:elseif>
						<s:else>¥${amt}</s:else>
					</td>
					<%//-- 余额--%>
					<td>¥${balance_fee}</td>
					<%//-- 说明 --%>
					<td>${memo}</td>
				</tr>
				</s:iterator>
				</s:if>
				
				<%//-- -----------------------------昨天的账户变动记录----------------------------------------------------- --%>
				<s:if test="#request.list.yestday.size()>0">
				<tr class="account_bgYellow">
					<td colspan="7"><strong>昨天</strong>（<s:property value="#request.list.yestday.size()"/>条）</td>
				</tr>
				<s:iterator  value="#request.list.yestday"  status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<%//-- 交易时间 --%>
					<td>${plattime}</td>
					<%//-- 订单号 --%>
					<td>${id}</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='taccountType=="+"'>
							<b>${taccountTypeMsg}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>${taccountTypeMsg}</i>
						</s:elseif>
						<s:else>${taccountTypeMsg}</s:else>
					</td>
					<%//-- 变动金额--%>
					<td>${taccountType}
						<s:if test='taccountType=="+"'>
							<b>¥${amt}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>¥${amt}</i>
						</s:elseif>
						<s:else>¥${amt}</s:else>
					</td>
					<%//-- 余额--%>
					<td>¥${balance_fee}</td>
					<%//-- 说明 --%>
					<td>${memo}</td>
				</tr>
				</s:iterator>
				</s:if>
				
				
				<%///-- -----------------------------更早的账户变动记录----------------------------------------------------- --%>
				<s:if test="#request.list.oldday.size()>0">
				<tr class="account_bgYellow">
					<td colspan="7"><strong>更早</strong>（<s:property value="#request.list.oldday.size()"/>条）</td>
				</tr>
				<s:iterator  value="#request.list.oldday"  status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<%//-- 交易时间 --%>
					<td>${plattime}</td>
					<%//-- 订单号 --%>
					<td>${id}</td>
					<%//-- 交易类型 --%>
					<td>
						<s:if test='taccountType=="+"'>
							<b>${taccountTypeMsg}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>${taccountTypeMsg}</i>
						</s:elseif>
						<s:else>${taccountTypeMsg}</s:else>
					</td>
					<%//-- 变动金额--%>
					<td>${taccountType}
						<s:if test='taccountType=="+"'>
							<b>¥${amt}</b>
						</s:if>
						<s:elseif test='taccountType=="-"'>
							<i>¥${amt}</i>
						</s:elseif>
						<s:else>¥${amt}</s:else>
					</td>
					<%//-- 余额--%>
					<td>¥${balance_fee}</td>
					<%//-- 说明 --%>
					<td>${memo}</td>
				</tr>
				</s:iterator>
				</s:if>
				</s:else>
				
			</table>
			
			<p class="account_page">
				 ${pageHtml}
			  </p>
			
			<ul>
				<li>注：</li>
				<li>1.如果您充值后，银行账户扣了款，博雅彩网没有为您加上，请及时与我们联系，我们将第一时间为您处理！</li>
				<li>2.您可以查询您的账户所有的账户明细。</li>
				<li>3.如需要查询全部明细，或您有其他方面需求，请联系网站客服：400-856-1000 </li>
			</ul>
			<div class="space10">&#160;</div>
			
			</form>
		</div>
			
		<script>
			$(function(){
				$(".a_detailed").addClass("selected");
			});
		</script>

		<%//--账户明细end--%>