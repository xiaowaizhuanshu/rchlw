<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">
	function changeButton(){
	var lotno=$("#lotno").val();
	var beginTime=$("#startDate").val();
	var endTime=$("#stopDate").val();
	var pageCount=$("#pageCount1").val();
	reHtmlInParameters(lotno , beginTime , endTime , "pageCount2="+pageCount);
}
</script>
<h2>追号记录</h2>
<div class="account_detailed">
	<form action="#" method="post" onsubmit="return reHtmlInParameters(this.lotno.value,this.startDate.value,this.stopDate.value,'pageCount2='+this.pageCount1.value+'&state='+this.state.value)" class="tzjl_form">
	<div class="a_detailedInterpretation">
		<span class="a_detailedTitle">以下是您的历史追号记录</span>
		<table class="a_detailedTiaoShu" border="0" cellpadding="0" cellspacing="0" width="180">
		  <tbody>
			<tr id="pageCount">
			<td align="right">
			<input name="radio"  type="radio" onclick="checkVlue('10');" <s:if test='request.getAttribute("pageCount")=="10"'>checked="checked"</s:if>>10条</td>
			<td align="right">
			<input name="radio"   type="radio" onclick="checkVlue('20');" <s:if test='request.getAttribute("pageCount")=="20"'>checked="checked"</s:if>>20条</td>
			<td align="right">
			<input name="radio"   type="radio" onclick="checkVlue('30');" <s:if test='request.getAttribute("pageCount")=="30"'>checked="checked"</s:if>>30条
			</td>
			</tr>
		  </tbody>
		</table>
	</div>
	
	<table class="account_check"  cellspacing="0" cellpadding="0">
		<tr>
			<td>彩种：</td>
			<td>
				<select id="lotno" name="lotno" class="bettingRecords_select">
				  <option value="" >全部彩种</option>
				  <option value="F47104" <s:if test='request.getAttribute("lotno")=="F47104"'>selected="selected"</s:if>>双色球</option>
				  <option value="F47103" <s:if test='request.getAttribute("lotno")=="F47103"'>selected="selected"</s:if>>福彩3D</option>
				  <option value="F47102" <s:if test='request.getAttribute("lotno")=="F47102"'>selected="selected"</s:if>>七乐彩</option>
				  <option value="F47107" <s:if test='request.getAttribute("lotno")=="F47107"'>selected="selected"</s:if>>快三</option>
				  <option value="T01001" <s:if test='request.getAttribute("lotno")=="T01001"'>selected="selected"</s:if>>超级大乐透</option>
				  <option value="T01002" <s:if test='request.getAttribute("lotno")=="T01002"'>selected="selected"</s:if>>排列三</option>	
				  <option value="T01011" <s:if test='request.getAttribute("lotno")=="T01011"'>selected="selected"</s:if>>排列五</option>
			      <option value="T01009" <s:if test='request.getAttribute("lotno")=="T01009"'>selected="selected"</s:if>>七星彩</option>	
			      <option value="T01007" <s:if test='request.getAttribute("lotno")=="T01007"'>selected="selected"</s:if>>时时彩</option>
			      <option value="T01010" <s:if test='request.getAttribute("lotno")=="T01010"'>selected="selected"</s:if>>江西11选5</option>	
			      <option value="T01003" <s:if test='request.getAttribute("lotno")=="T01003"'>selected="selected"</s:if>>胜负彩14场</option>
			      <option value="T01004" <s:if test='request.getAttribute("lotno")=="T01004"'>selected="selected"</s:if>>胜负彩任9场</option>	
			      <option value="T01006" <s:if test='request.getAttribute("lotno")=="T01006"'>selected="selected"</s:if>>6场半全场</option>
			      <option value="T01005" <s:if test='request.getAttribute("lotno")=="T01005"'>selected="selected"</s:if>>四场进球彩</option>
			      <option value="T01012" <s:if test='request.getAttribute("lotno")=="T01012"'>selected="selected"</s:if>>十一运夺金</option>
			      <option value="T01012" <s:if test='request.getAttribute("lotno")=="T01013"'>selected="selected"</s:if>>22选5</option>		
		 	 </select>
					</td>
			<td>追号状态：</td>
			<td>
				<select name="state" id="state" class="bettingRecords_select">
	 					  <option value="" >全部</option>
			      <option value="0" <s:if test='#request.state=="0"'>selected="selected"</s:if>>进行中</option>
			      <option value="3" <s:if test='#request.state=="3"'>selected="selected"</s:if>>已完成</option>
			      <option value="2" <s:if test='#request.state=="2"'>selected="selected"</s:if>>已终止</option>
			</select>
			</td>
			<td>起始日期：</td>
			<td><input  type="text" class="account_time"  id="startDate" size="10" name="startDate" onfocus="WdatePicker({alwaysUseStartDate:true})" value="${startDates}" /></td>
			<td>终止日期：</td>
			<td><input  type="text" class="account_time" id="stopDate" size="10" name="stopDate" onfocus="WdatePicker({alwaysUseStartDate:true})" value="${stopDates}" /></td>
			<td><input name="button" type="submit" id="button" class="account_checkBtn" value="查询"/></td>
		</tr>
	</table>
	
	<script type="text/javascript">
	   function checkVlue(num){
	                $("#pageCount1").val(num);
	                changeButton();
	    }
	</script>
	  <input type="hidden" value="" id="pageCount1" name="pageCount1" />
	
	<table class="account_day"  cellspacing="0" cellpadding="0">
		<tr>
			<th>序号</th>
			<th>彩种</th>
			<th>玩法</th>
			<th>总金额</th>
			<th>总期数</th>
			<th>完成期数</th>
			<th>状态</th>
			<th>发起时间</th>
			<th>追号详情</th>
		</tr>
		<s:if test="#request.jaToPage.size()>0">

		
		<%//-- -----------------------今天的追号记录--------------------------------- --> %>
		<s:if test="#request.jaToPage.today.size()>0">
		<tr class="account_bgYellow">
			<td colspan="9"><strong>今天</strong>（<s:property value="#request.jaToPage.today.size()"/>条）</td>
		</tr>
		<s:iterator  value="#request.jaToPage.today" status ="stat">
		<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
		<s:else><tr class="accountDay_greyBg"></s:else>
			<%//-- 序号 --%>
			<td><s:property value="#stat.index+1"/></td>
			<%//-- 彩种 --%>
			<td>
				<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
				<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
				<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
				<s:elseif test='lotno=="F47107"' >快三</s:elseif>
				<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
				<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
				<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
				<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
				<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
				<s:elseif test='lotno=="T01014"||lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
				<s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
				<s:elseif test='lotno=="T01013"'>22选5</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%//-- 玩法 --%>
			<td>
				<s:if test="memo.equals('null')">-</s:if>
				<s:else><s:property value="memo"/></s:else>
			</td>
			<%//-- 总金额--%>
			<td class="color_1F376D">¥<s:property value="amt"/></td>
			<%//-- 总期数 --%>
			<td><s:property value="batchnum"/></td>
			<%//-- 完成期数--%>
			<td><s:property value="%{batchnum-lastnum}"/></td>
			<%//-- 状态 --%>
			<td>
				<s:if test='state==0'>进行中</s:if>
				<s:elseif test='state==1'>暂停追号</s:elseif>
				<s:elseif test='state==2'><span class="red1">已终止</span></s:elseif>
				<s:elseif test='state==3'>已完成</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%//-- 发起时间 --%>
			<td><s:property value="ordertime"/></td>
			<%//-- 追号详情--%>
			<td>
				<a href="/rchlw/function/rules/trackNumber.jsp?key=48&lotNo=<s:property value='lotno'/>&subscribeFlowno=${flowno}&orderId=" target="_blank" title="查看">查看</a>
			</td>
		</tr>
		</s:iterator>
		</s:if>
		
		<%//-- -----------------------昨天的追号记录--------------------------------- --%>
		<s:if test="#request.jaToPage.yestday.size()>0">
		<tr class="account_bgYellow">
			<td colspan="9"><strong>昨天</strong>（<s:property value="#request.jaToPage.yestday.size()"/>条）</td>
		</tr>
		<s:iterator  value="#request.jaToPage.yestday" status ="stat">
		<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
		<s:else><tr class="accountDay_greyBg"></s:else>
			<%//-- 序号 --%>
			<td><s:property value="#stat.index+1"/></td>
			<%//-- 彩种 --%>
			<td>
				<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
				<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
				<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
				<s:elseif test='lotno=="F47107"' >快三</s:elseif>
				<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
				<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
				<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
				<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
				<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
				<s:elseif test='lotno=="T01014"||lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
				<s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
				<s:elseif test='lotno=="T01013"'>22选5</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%//-- 玩法 --%>
			<td>
				<s:if test="memo.equals('null')">-</s:if>
				<s:else><s:property value="memo"/></s:else>
			</td>
			<%//-- 总金额--%>
			<td class="color_1F376D">¥<s:property value="amt"/></td>
			<%//-- 总期数 --%>
			<td><s:property value="batchnum"/></td>
			<%//-- 完成期数--%>
			<td><s:property value="%{batchnum-lastnum}"/></td>
			<%//-- 状态 --%>
			<td>
				<s:if test='state==0'>进行中</s:if>
				<s:elseif test='state==1'>暂停追号</s:elseif>
				<s:elseif test='state==2'><span class="red1">已终止</span></s:elseif>
				<s:elseif test='state==3'>已完成</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%/*-- 发起时间 --*/%>
			<td><s:property value="ordertime"/></td>
			<%/*-- 追号详情--*/%>
			<td>
				<a href="/rchlw/function/rules/trackNumber.jsp?key=48&lotNo=<s:property value='lotno'/>&subscribeFlowno=${flowno}&orderId=" target="_blank" title="查看">查看</a>
			</td>
		</tr>
		</s:iterator>
		</s:if>
		
		<%//-- -----------------------更早的追号记录--------------------------------- --%>
		<s:if test="#request.jaToPage.oldday.size()>0">
		<tr class="account_bgYellow">
			<td colspan="9"><strong>更早</strong>（<s:property value="#request.jaToPage.oldday.size()"/>条）</td>
		</tr>
		<s:iterator  value="#request.jaToPage.oldday" status ="stat">
		<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
		<s:else><tr class="accountDay_greyBg"></s:else>
			<%//-- 序号 --%>
			<td><s:property value="#stat.index+1"/></td>
			<%//-- 彩种 --%>
			<td>
				<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
				<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
				<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
				<s:elseif test='lotno=="F47107"' >快三</s:elseif>
				<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
				<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
				<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
				<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
				<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
				<s:elseif test='lotno=="T01014"||lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
				<s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
				<s:elseif test='lotno=="T01013"'>22选5</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%//-- 玩法 --%>
			<td>
				<s:if test="memo.equals('null')">-</s:if>
				<s:else><s:property value="memo"/></s:else>
			</td>
			<%//-- 总金额--%>
			<td class="color_1F376D">¥<s:property value="amt"/></td>
			<%//-- 总期数 --%>
			<td><s:property value="batchnum"/></td>
			<%//-- 完成期数--%>
			<td><s:property value="%{batchnum-lastnum}"/></td>
			<%//-- 状态 --%>
			<td>
				<s:if test='state==0'>进行中</s:if>
				<s:elseif test='state==1'>暂停追号</s:elseif>
				<s:elseif test='state==2'><span class="red1">已终止</span></s:elseif>
				<s:elseif test='state==3'>已完成</s:elseif>
				<s:else>&nbsp;</s:else>
			</td>
			<%//-- 发起时间 --%>
			<td><s:property value="ordertime"/></td>
			<%//-- 追号详情--%>
			<td>
				<a href="/rchlw/function/rules/trackNumber.jsp?key=48&lotNo=<s:property value='lotno'/>&subscribeFlowno=${flowno}&orderId=" target="_blank" title="查看">查看</a>
			</td>
		</tr>
		</s:iterator>
		</s:if>
		</s:if>
		<s:else>
        	<tr><td colspan="9" height="28" align="center">无查询记录</td></tr>
   		</s:else>
	</table>
	
	<p class="account_page"> 
	${pageHtml}
	</p>
	
	<div class="space10">&#160;</div>
	</form>
</div>
	
<script>
$(function(){
	$(".a_afterRecord").addClass("selected");
});
</script>
