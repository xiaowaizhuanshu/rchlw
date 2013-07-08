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
				<li id="li3" onclick="return reHtml(76,'')" controltarget=".hyjymx" class="light selected">会员交易明细</li>
				<li id="li4" onclick="return reHtml(75,'')" controltarget=".yjbl" class="light">佣金比例</li>
				<li id="li5" onclick="return reHtml(76,'flag=yj')" controltarget=".yjmx" class="light">佣金明细</li>
			</ul>
		</div>
<div class="account_rechargeContent">
<div class="hyjymx" id="bankDiv"> 
				<form action="#" id="queryagency"  method="post" onsubmit='return TZSelectreHtmlInParameters("", this.beginTime.value , this.endTime.value , "");' class="tzjl_form">
				<ul class="mSeachUl" style="font-size: 12px;">
					<li>开始日期
						<input name="beginTime" type="text" value="<s:property value="#reuest.beginTime"/>" id="beginTime" class="mSeachUlTx01" onfocus="WdatePicker({alwaysUseStartDate:true})" style="width:70px;">
						结束日期
						<input name="endTime" type="text" value="<s:property value="#reuest.endTime"/>" id="endTime" class="mSeachUlTx01" onfocus="WdatePicker({alwaysUseStartDate:true})" style="width:70px;">
					</li>
					<li>
						<input type="submit" name="Button1" value="查询" id="Button1" class="mSeachUlBtn">
					</li>
					<li style=" margin-top:5px"><span id="spBack" style="cursor: pointer; display: none; " onclick="GoBack()" title="返回会员交易明细">返回</span></li>
				</ul>
				</form>
			 
		
				<div class="trade" id="div_UserInfo" style="margin-top:2px">
					<table cellpadding="0" cellspacing="0" class="tradeTab" style="text-align: center">
						<tbody>
							<tr class="cBlue01">
								<th> 时间 </th>
								<th> 用户名 </th>
								<th> 下级代理</th>
								<th> 彩种 </th>
								<th> 类型 </th>
								<th> 投注金额 </th>
								<th> 佣金收入 </th>
								<th> 查看 </th>
							</tr>
				 <s:if test="#request.agencyJiaoyiDatas.size()>0">
							<s:iterator value="#request.agencyJiaoyiDatas" status="a">
							<tr class="bg">
								<td><s:property value="createTime"/></td>
								<td><s:property value="nickname"/></td>
								<td><s:property value="agencynickname"/></td>
								<td> <s:property value="lotname"/></td>
								<td> <s:property value="businessType"/></td>
								<td> <s:property value="totalAmt"/> </td>
								<td> <s:property value="prizeAmt"/> </td>
								<td><span style="cursor: pointer; color:Blue">
									<s:if test='bettype==3 && businessId != null && !businessId.equals("null")'>
										<a href='/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="businessId"/>'  target="_blank">查看订单</a>
									</s:if>
									<s:elseif test='bettype==1 && businessId != null && !businessId.equals("null")'>
									   <a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=<s:property value="businessId"/>&play_name=<s:property value="lotno"/>'  target="_blank">查看订单</a>
									</s:elseif>
									<s:elseif test='bettype==2 && businessId != null && !businessId.equals("null")'>
									   <a href='<%=request.getContextPath() %>/function/rules/trackNumber.jsp?key=48&subscribeFlowno=<s:property value="businessId"/>&lotNo=<s:property value="lotno"/>'  target="_blank">查看订单</a>
									</s:elseif>
							</span></td>
							</tr>
							</s:iterator>
							<tr>
								<td colspan="6"> 佣金收入汇总： </td>
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
		</s:if>
</div></div>			
