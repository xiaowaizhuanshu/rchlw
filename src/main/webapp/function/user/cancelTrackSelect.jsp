<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div id="main">
<!--头部橘黄色部分-->
	<div class="togetherPlan_topCenter">
		<div class="togetherPlan_topLeft"></div>
			<div class="zengCai_logo">
			<s:if test='#request.ordersArray[0].lotno=="T01007"'><img src="<%=request.getContextPath() %>/function/images/logo_ssc_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.ordersArray[0].lotno=="T01010"'><img src="<%=request.getContextPath() %>/function/images/logo_syxw_b.gif" width="54" height="54" /></s:if>
			<s:if test='#request.ordersArray[0].lotno=="T01012"'><img src="<%=request.getContextPath() %>/function/images/logo_syydj_b.gif" width="54" height="54" /></s:if>
			</div>
			<div class="togetherPlan_topText">
			<dl>
				<dt>
					<s:property value="#request.subscribeObj.beginbatch"/>-
					   <s:iterator value="#request.ordersArray" status="stat">
							<s:if test="#stat.last">
							<s:property value="batchcode"/>
					   </s:if>
				   </s:iterator>
				</dt>
				<dt>
					<s:if test="!(#request.subscribeObj.memo.equals('null'))">
						 <s:property  value="#request.subscribeObj.memo" />
					</s:if>
				</dt>
			</dl>
			<dl>
				<dd>此方案发起时间：<s:property value="#request.subscribeObj.ordertime"/></dd>
				<dd>方案编号：<s:property value="#request.subscribeObj.flowno"/></dd>
				<dd>
				<s:elseif test='#request.ordersArray[0].lotno=="T01010"'><a href="/11xuan5.html" title="返回购买江西11选5">返回购买江西11选5</a></s:elseif>
				<s:elseif test='#request.ordersArray[0].lotno=="T01007"'><a href="/shishicai.html" title="返回购买时时彩">返回购买时时彩</a></s:elseif>
				<s:elseif test='#request.ordersArray[0].lotno=="T01012"'><a href="/shiyiyunduojin.html" title="返回购买十一运夺金">返回购买十一运夺金</a></s:elseif>
				</dd>
			</dl>
		</div>
		<div class="togetherPlan_topRight"></div>
	</div>
<!--头部橘黄色部分end-->
<!--详情内容部分-->
	<table class="xiangQing_BigTable">
	<tr class="SSQ_LeaderInfor">
		<th width="70">发起人信息</th>
		<td>
			<!--发起人信息内容 start-->
				<dl>
					<dt><a onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" ><s:property value="#request.username"/></a></dt>
				</dl>
				<!--发起人信息内容 end-->
		</td>
	</tr>
	<tr>
		<th>方案详情</th>
		<td>
			<table class="xiangQing_smallTable">
				<thead>
					<tr>
						<th>总追号金额</th>
						<th>已追金额</th>
						<th>总追号期数</th>
						<th>已追期数</th>
						<th>已撤销期数</th>
						<th>中奖后停止追号</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><s:property value="#request.subscribeObj.amt"/>元</td>
						<td><i>
							<s:if test="#request.zhuihaoTouru==0"><s:property value="#request.subscribeObj.amt/#request.subscribeObj.batchnum*(#request.subscribeObj.batchnum-#request.subscribeObj.lastnum)"/>
							</s:if><s:else><s:property value="#request.zhuihaoTouru"/></s:else>
						</i>元</td>
						<td><s:property value="#request.subscribeObj.batchnum"/>期</td>
						<td><i><s:property value="#request.subscribeObj.batchnum-#request.subscribeObj.lastnum"/></i>期</td>
						<td><i><s:property value="#request.subscribeObj.cancel"/></i>期</td>
						<td><s:if test="#request.subscribeObj.desc==null || #request.subscribeObj.desc.equals('null') || #request.subscribeObj.desc=='null' || #request.subscribeObj.desc=='' ">否</s:if>
              			 <s:else><s:property value="#request.subscribeObj.desc"/></s:else></td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
	<tr>
		<th>方案内容</th>
		<td>
			<table class="xiangQing_neiRong">
			 <s:if test="#request.lotArray.size()>0">
				    <s:iterator  value="#request.lotArray" status ="stat" >
				<tr>
					<td>
					<%//-- 时时彩 --%>
				<s:if test='lotno=="T01007"||lotno=="SSC_10401"'>
					<s:if test="zhuma.wanfa=='DD'">
						<s:if test="betcode.split('|')[4]==1">小</s:if>
						<s:if test="betcode.split('|')[4]==2">大</s:if>
						<s:if test="betcode.split('|')[4]==4">双</s:if>
						<s:if test="betcode.split('|')[4]==5">单</s:if>
						<s:if test="betcode.split('|')[5]==1">小</s:if>
						<s:if test="betcode.split('|')[5]==2">大</s:if>
						<s:if test="betcode.split('|')[5]==4">双</s:if>
						<s:if test="betcode.split('|')[5]==5">单</s:if>
					</s:if><s:else>
						<s:property value="zhuma.betcode" escape="false" default=""/>
					</s:else><br/>
				</s:if>
				<s:elseif test='lotno=="T01010"||lotno=="XYXW_23009"'>
					<s:if test="zhuma.betcode.indexOf('$')>-1">
						胆码：<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf('$'))" escape="false"/><br/>
						拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/><br/>
					</s:if>
					<s:else>
						<s:property value="zhuma.betcode" escape="false"/><br/>
					</s:else>
				</s:elseif>
				<s:elseif test='lotno=="T01012"'>
				<s:if test="zhuma.betcode.indexOf('$')>-1">
					胆码：<s:property value="zhuma.betcode.substring(0,zhuma.betcode.indexOf('$'))" escape="false"/><br/>
					拖码：<s:property value="zhuma.betcode.substring(zhuma.betcode.indexOf('$')+1)" escape="false"/><br/>
				</s:if>
				<s:else>
					<s:property value="zhuma.betcode" escape="false"/>
				</s:else>
			</s:elseif>
				<s:else><s:property value="zhuma.betcode" escape="false"/><br/></s:else>
					</td>
				</tr>
				</s:iterator>
			</s:if>
			 <s:else>
			  "订单无追号记录"
			</s:else>
			
			<tr>
			<td colspan="4">${requestScope.moreMessage}</td>
			</tr>
			</table>
		</td>
	</tr>
	<tr class="togetherBuy_purchaseBuy">
		<th>追号状态</th>
		<td>
		<s:if test="#request.subscribeObj.state==0"><i>进行中　　</i></s:if>
		<s:elseif test='#request.subscribeObj.state==3'><i>已完成　　</i></s:elseif>
		<s:elseif test='#request.subscribeObj.state==2'><i>已终止　　</i></s:elseif>　
		<s:if test='#request.subscribeObj.state==0&&#request.subscribeObj.batchnum<101'>
		  <input name="" type="button" class="togetherBuy_70btn" value="终止追号"  
		  onclick="stopTrack('<s:property value='#request.subscribeObj.flowno'/>','48','subscribeFlowno=<s:property value='#request.subscribeObj.flowno'/>&lotNo=<s:property value='#request.subscribeObj.lotno'/>')"/>
	   </s:if>
		</td>
	</tr>
	<tr class="xiangQing_Noborder">
		<th>追号详情</th>
		<td>
			<table class="continueBuy">
			<tr>
			   <td>序号</td>
			   <td>期号</td>
			   <td>倍数</td>
			   <td>当前投入</td>
			   <td>开奖号码</td>
			   <td>官方截止时间</td>
			   <td>状态</td>
			   <td>奖金</td>
			   <td>计划<br />投入</td>
			   <td>计划<br />收益</td>
			   <th>收益率</th>
			</tr>
			 <s:iterator value="#request.ordersArray" status="stat" id="winInfo">
			<tr>
			   <td><s:property value="#stat.index+1"/></td>
			   <td><s:property value="batchcode"/></td>
			   <td><s:property value="lotmulti"/></td>
			   <td><s:property value="amt/100"/>元</td>
			   <td class="red1"><s:property value="winbasecode"/>&#160;</td>
			   <td><s:property value="endTimeStr"/></td>
			   <s:if test='orderstate.equals("已撤销")'>
					   <td >用户撤单</td>
					   <td >--</td>
			   </s:if>
			   <s:else>
					<s:if test='prizestate==0'> 
						<td ><s:property value="orderstate"/></td>
						<td >--</td>
					</s:if>
					<s:elseif test='prizestate==1 || prizestate==2'>
						<td ><s:property value="orderstate"/></td>
						<td >--</td>
					</s:elseif>
					<s:elseif test='prizestate==4 || prizestate==3||prizestate==5'>
						<td >已完成</td>
						<td >¥<s:property value="orderprizeamt/100"/>元</td>
					</s:elseif>
				</s:else>
			   <td><s:property value="touru"/></td>
			   <td><s:property value="shouyi"/></td>
			   <th><s:property value="rate"/></th>
			</tr>
			 </s:iterator> 
		</table>
		</td>
	</tr>
</table>
<!--详情内容部分end-->
</div>
