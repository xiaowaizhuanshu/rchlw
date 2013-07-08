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
				<li id="li4" onclick="return reHtml(75,'')" controltarget=".yjbl" class="light selected">佣金比例</li>
				<li id="li5" onclick="return reHtml(76,'flag=yj')" controltarget=".yjmx" class="light">佣金明细</li>
			</ul>
		</div>
<div class="account_rechargeContent">
<div class="yjbl" id="mobileChargeId">
		<table cellpadding="0" cellspacing="0" class="tradeTab">
						<tbody>
							<tr class="cBlue01">
								<th width="55"> 序号 </th>
								<th width="100">彩种 </th>
								<th width="100">佣金比例 </th>
								<th width="90"> 修改时间 </th>
							</tr>
							<s:if test="#request.agencyprize.size()>0">
							<s:iterator value="#request.agencyprize" status="a">
							<tr>
								<td width="55" class="t-<s:property value="#a.count"/>"><s:property value="#a.count"/> </td>
								<td width="100"><s:property value="lotName"/> </td>
								<td width="100"><span id="percent"><s:property value="percent"/></span> </td>
								<td width="90"><s:property value="modifytime"/></td>
							</tr>
							</s:iterator>
							</s:if>
						</tbody>
					</table>
			</div>
</div></div>			
