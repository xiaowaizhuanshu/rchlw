<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="My_account" id="right_text">
<style>
div.My_account{ width:778px; padding:0px;} div.My_account h2{ margin:0 14px;}
</style>
		<div class="My_account_title"> <strong>我的业绩</strong> </div>
		<div class="account_recharge">
			<ul class="account_rechargeTab">
				<li id="li1" onclick="return reHtml(72,'')" controltarget=".wtgdhy" class="light">我推广的会员</li>
				<li id="li3" onclick="return reHtml(76,'')" controltarget=".hyjymx" class="light">会员交易明细</li>
				<li id="li4" onclick="return reHtml(75,'')" controltarget=".yjbl" class="light">佣金比例</li>
				<li id="li5" onclick="return reHtml(76,'flag=yj')" controltarget=".yjmx" class="light selected">佣金明细</li>
			</ul>
		</div>
<div class="account_rechargeContent">
<div class="yjmx">
		<div class="trade" id="div_UserInfo" style="margin-top:2px">
					<table cellpadding="0" cellspacing="0" class="tradeTab" style="text-align: center">
						<tbody>
							<tr class="cBlue01">
								<th> 交易时间 </th>
								<th> 佣金收入（元） </th>
							</tr>
							<s:iterator value="#request.agencyJiaoyiDatas" status="a">
							<tr class="bg">
<%-- 								<td class="t-<s:property value="#a.count"/>" style="text-align: center"><s:property value="#a.count"/></td> --%>
								<td><s:property value="createTime"/></td>
								<td> <s:property value="prizeAmt"/> </td>
							</tr>
							</s:iterator>
							<tr>
								<td colspan="1"> 佣金收入汇总： </td>
								<td style="color:red"><span id="labSumDetailMoney1"><s:property value="#request.toalAmt"/> </span> 元 </td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
					<br>
					<br>
				</div>
					<div class="mTurnPage">
					<ul class="mTurnPageUl cblack" id="PagerItemList">
						<div class="DivH10"></div>
							<p class="account_page"> 	
								${pageHtml}
							</p>
	                <div class="space10">&#160;</div>
					</ul>
				</div>
</div>
</div></div>			
