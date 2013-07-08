<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>   
<script type="text/javascript">
	function changeButton(){
	var lotno=$("#lotno").val();
	var beginTime=$("#beginTime").val();
	var endTime=$("#endTime").val();
	var settleFlag=$("#settleFlag").val();
	var pageCount=$("#pageCount").find("td").find("input:checked").val();
	TZSelectreHtmlInParameters(lotno , beginTime , endTime , "settleFlag="+settleFlag+"&pageCount="+pageCount);
}
</script>

<h2>投注记录</h2>
<div class="account_detailed">
<form action="#" method="post" id="betSelect" onsubmit='return TZSelectreHtmlInParameters(this.lotno.value , this.beginTime.value , this.endTime.value , "settleFlag="+this.settleFlag.value+"&pageCount="+($("#pageCount").find("td").find("input:checked").val())) ;' class="tzjl_form">
<div class="a_detailedInterpretation">
<span class="a_detailedTitle">以下是您的历史投注记录</span>
<table class="a_detailedTiaoShu" border="0" cellpadding="0" cellspacing="0" width="180">
	<tbody>
		<tr id="pageCount">
			<td align="right"><input name="pageCount" value="10" onclick="changeButton();" type="radio" <s:if test='#request.pageCount=="10"'>checked="checked"</s:if> />10条</td>
			<td align="right"><input name="pageCount" value="20" onclick="changeButton();"  type="radio" <s:if test='#request.pageCount=="20"'>checked="checked"</s:if> />20条</td>
			<td align="right"><input name="pageCount" value="30" onclick="changeButton();" type="radio" <s:if test='#request.pageCount=="30"'>checked="checked"</s:if> />30条</td>
		</tr>
	</tbody>
</table>
</div>

<table class="account_check"  cellspacing="0" cellpadding="0">
	<tr>
		<td>彩种：</td>
		<td>
			<select name="" class="bettingRecords_select" id="lotno">
					  <option selected="selected" value="">全部彩种</option>
					  <option value="F47104" <s:if test='request.getParameter("lotno")=="F47104"'>selected="selected"</s:if>>双色球</option>
					  <option value="F47103" <s:if test='request.getParameter("lotno")=="F47103"'>selected="selected"</s:if>>福彩3D</option>
					  <option value="F47102" <s:if test='request.getParameter("lotno")=="F47102"'>selected="selected"</s:if>>七乐彩</option>
					  <option value="F47107" <s:if test='request.getParameter("lotno")=="F47107"'>selected="selected"</s:if>>快三</option>
					  <option value="T01001" <s:if test='request.getParameter("lotno")=="T01001"'>selected="selected"</s:if>>超级大乐透</option>
					  <option value="T01002" <s:if test='request.getParameter("lotno")=="T01002"'>selected="selected"</s:if>>排列三</option>	
					  <option value="T01011" <s:if test='request.getParameter("lotno")=="T01011"'>selected="selected"</s:if>>排列五</option>
				      <option value="T01009" <s:if test='request.getParameter("lotno")=="T01009"'>selected="selected"</s:if>>七星彩</option>	
				      <option value="T01007" <s:if test='request.getParameter("lotno")=="T01007"'>selected="selected"</s:if>>时时彩</option>
				      <option value="T01010" <s:if test='request.getParameter("lotno")=="T01010"'>selected="selected"</s:if>>江西11选5</option>	
				      <option value="T01014" <s:if test='request.getParameter("lotno")=="T01014"'>selected="selected"</s:if>>广东11选5</option>	
				      <option value="T01003" <s:if test='request.getParameter("lotno")=="T01003"'>selected="selected"</s:if>>胜负彩14场</option>
				      <option value="T01004" <s:if test='request.getParameter("lotno")=="T01004"'>selected="selected"</s:if>>胜负彩任9场</option>	
				      <option value="T01006" <s:if test='request.getParameter("lotno")=="T01006"'>selected="selected"</s:if>>6场半全场</option>
				      <option value="T01005" <s:if test='request.getParameter("lotno")=="T01005"'>selected="selected"</s:if>>四场进球彩</option>
				      <option value="T01012" <s:if test='request.getParameter("lotno")=="T01012"'>selected="selected"</s:if>>十一运夺金</option>
				      <option value="J00013" <s:if test='request.getParameter("lotno")=="J00013"'>selected="selected"</s:if>>竞足让球胜平负</option>
				      <option value="J00001" <s:if test='request.getParameter("lotno")=="J00001"'>selected="selected"</s:if>>竞足胜平负</option>
				      <option value="J00002" <s:if test='request.getParameter("lotno")=="J00002"'>selected="selected"</s:if>>竞足比分</option>
				      <option value="J00003" <s:if test='request.getParameter("lotno")=="J00003"'>selected="selected"</s:if>>竞足总进球</option>
				      <option value="J00004" <s:if test='request.getParameter("lotno")=="J00004"'>selected="selected"</s:if>>竞足半场</option>
				      <option value="J00005" <s:if test='request.getParameter("lotno")=="J00005"'>selected="selected"</s:if>>竞篮胜负</option>
				      <option value="J00008" <s:if test='request.getParameter("lotno")=="J00008"'>selected="selected"</s:if>>竞篮大小分</option>
				      <option value="J00007" <s:if test='request.getParameter("lotno")=="J00007"'>selected="selected"</s:if>>竞篮胜分差</option>
				      <option value="J00006" <s:if test='request.getParameter("lotno")=="J00006"'>selected="selected"</s:if>>竞篮让分胜负</option>
				      <option value="T01013" <s:if test='request.getParameter("lotno")=="T01013"'>selected="selected"</s:if>>22选5</option>
				      <option value="B00001" <s:if test='request.getParameter("lotno")=="B00001"'>selected="selected"</s:if>>北单胜平负</option>
				      <option value="B00002" <s:if test='request.getParameter("lotno")=="B00002"'>selected="selected"</s:if>>北单总进球</option>
				      <option value="B00003" <s:if test='request.getParameter("lotno")=="B00003"'>selected="selected"</s:if>>北单半全场</option>
				      <option value="B00004" <s:if test='request.getParameter("lotno")=="B00004"'>selected="selected"</s:if>>北单上下单双</option>
				      <option value="B00005" <s:if test='request.getParameter("lotno")=="B00005"'>selected="selected"</s:if>>北单单场比分</option>
			</select>
		</td>
		<td>类型：</td>
		<td>
			<select name="" class="bettingRecords_select" id="settleFlag">
						<option  value="-1" selected="selected">全部投注</option>
        			 	<option value="0" <s:if test='request.getParameter("settleFlag")=="0"||request.getParameter("settleFlag")=="1"'>selected</s:if>>未开奖</option>
			    		<option value="3" <s:elseif test='request.getParameter("settleFlag")=="3"||request.getParameter("settleFlag")=="4"'>selected</s:elseif>>已开奖</option>
			</select>
		</td>
		<td>起始日期：</td>
		<td><input class="account_time" type="text" id="beginTime" size="10" name="beginTime" onfocus="WdatePicker({alwaysUseStartDate:true})" value='${beginTime}'/></td>
		<td>终止日期：</td>
		<td><input id="endTime" size="10" name="endTime" onfocus="WdatePicker({alwaysUseStartDate:true})" value="${endTime }" type="text" class="account_time" /></td>
		<td><input name="button" id="button"  class="account_checkBtn" value="查询" type="submit"/></td>
	</tr>
</table>

<table class="account_day"  cellspacing="0" cellpadding="0">
	<tr>
		<th>彩种</th>
		<th>玩法</th>
		<th>期号</th>
		<th>发起人</th>
		<th>我的认购</th>
		<th>我的奖金</th>
		<th>结算状态</th>
		<th>认购时间</th>
		<th>方案详情</th>
	</tr>
	<s:if test="(#request.jaToPage.today.size()+#request.jaToPage.yestday.size()+#request.jaToPage.oldday.size())>0">
	<%/*-----今天的一投注记录----------------- */ %>
	<s:if test="#request.jaToPage.today.size()>0">
	<tr class="account_bgYellow">
		<td colspan="10"><strong>今天</strong>（<s:property value="#request.jaToPage.today.size()"/>条）</td>
	</tr>
	<s:iterator value="#request.jaToPage.today" status="stat">
	<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
	<s:else><tr class="accountDay_greyBg"></s:else>
		<%/* 彩种 */ %>
		<td><s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
		<s:elseif  test='lotno=="F47107"' >快三</s:elseif>
		<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
		<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
		<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
		<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
		<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
		<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
		<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
		<s:elseif test='lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
		<s:elseif test='lotno=="T01014"'>广东11选5</s:elseif>
		<s:elseif test='lotno=="T01003"||lotno=="ZC_11"'>胜负彩14场</s:elseif>
	    <s:elseif test='lotno=="T01004"||lotno=="ZC_19"'>胜负彩任9场</s:elseif>
	    <s:elseif test='lotno=="T01006"||lotno=="ZC_16"'>6场半全场</s:elseif>
	    <s:elseif test='lotno=="T01005"||lotno=="ZC_18"'>四场进球彩</s:elseif>
	    <s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
	    <s:elseif test='lotno=="J00013"'>竞足让球胜平负</s:elseif>
	    <s:elseif test='lotno=="J00001"'>竞足胜平负</s:elseif>
	    <s:elseif test='lotno=="J00002"'>竞足比分</s:elseif>
	    <s:elseif test='lotno=="J00003"'>竞足总进球</s:elseif>
	    <s:elseif test='lotno=="J00004"'>竞足半场</s:elseif>
	   <s:elseif test='lotno=="J00005"'>竞篮胜负</s:elseif>
	    <s:elseif test='lotno=="J00008"'>竞篮大小分</s:elseif>
	    <s:elseif test='lotno=="J00007"'>竞篮胜分差</s:elseif>
	    <s:elseif test='lotno=="J00006"'>竞篮让分胜负</s:elseif>
	     <s:elseif test='lotno=="T01013"'>22选5</s:elseif>
	    <s:elseif test='lotno=="J00011"'>竞足混合</s:elseif>
	    <s:elseif test='lotno=="J00012"'>竞篮混合</s:elseif>
	    <s:elseif test='lotno=="B00001"'>北单胜平负</s:elseif>
	    <s:elseif test='lotno=="B00002"'>北单总进球</s:elseif>
	    <s:elseif test='lotno=="B00003"'>北单半全场</s:elseif>
	    <s:elseif test='lotno=="B00004"'>北单上下单双</s:elseif>
	    <s:elseif test='lotno=="B00005"'>北单单场比分</s:elseif>
		<s:else>&nbsp;</s:else>
		</td>
		<%/* 玩法 */ %>
		<td><s:if test="memo.equals('null')">-</s:if>
			<s:else>
				<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
					<s:property value="memo"/>合买
				</s:if>
				<s:else>
					<s:property value="memo"/>
				</s:else>
			</s:else>
		</td>
		<%/* 期号  */ %>
		<td><s:if test='lotno=="J00011"||lotno=="J00012"||lotno=="J00001"||lotno=="J00013"||lotno=="J00002"||lotno=="J00003"||lotno=="J00004"||lotno=="J00005"||lotno=="J00006"||lotno=="J00007"||lotno=="J00008"||batchcode.equals("null")'>-</s:if><s:else><s:property value="batchcode"/></s:else></td>
		<%/* 发起人   */ %>
		<td><s:property value="nickName"/></td>
		<%/* 我的认购   */ %>
		<td>
		¥<s:property value="orderamt"/>
		</td>
		<%/* 我的奖金   */ %>
		<td>
		<s:if test='prizestate==3||prizestate==4||prizestate==5'>
				<s:if test="orderprize==0.00">
				¥<s:property value="orderprize"/>
				</s:if>
				<s:else>
					<font class="red">¥<s:property value="orderprize"/></font>
				</s:else>
			</s:if>							
			<s:elseif test='prizestate==2'>¥0.00</s:elseif>
			<s:else>-</s:else>
		</td>
		<%/* 结算状态    */ %>
		<td>
		<s:if test='orderstate==3'>已撤销</s:if>
		<s:elseif test="orderstate==4">流单</s:elseif>
		<s:else>
			<s:if test='prizestate==1 || prizestate==0'>未开奖</s:if>
			<s:elseif test='prizestate==2 || prizestate==3'>已开奖</s:elseif>
			<s:elseif test='prizestate==4 ||prizestate==5'>
				<s:if test="orderprizeamt>0"><font class="red">已派奖</font></s:if>
				<s:else>未中奖</s:else>
			</s:elseif>
			<s:else>&nbsp;</s:else>
			</s:else>
		</td>
		<%/* 认购时间   */ %>
		<td><s:property value="createtime"/></td>
		<%/* 查看详情  */ %>
		<td>
		<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
		<a href='/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="tlotcaseid"/>'  target="_blank">查看</a>
		</s:if>
		<s:else>
		<a href='/rchlw/function/rules/oneBetInfo.jsp?flowno=<s:property value="id"/>&play_name=<s:property value="lotno"/>&batchcode=<s:property value="batchcode"/>'  target="_blank">查看</a>
		</s:else>
		</td>
	</tr>
	</s:iterator>
	</s:if>
	
	<%/*------------------------- 昨天的投注记录----------------- */ %>
	<s:if test="#request.jaToPage.yestday.size()>0">
	<tr class="account_bgYellow">
		<td colspan="10"><strong>昨天</strong>（<s:property value="#request.jaToPage.yestday.size()"/>条）</td>
	</tr>
	<s:iterator value="#request.jaToPage.yestday" status="stat">
	<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
	<s:else><tr class="accountDay_greyBg"></s:else>
		<%/* 彩种 */ %>
		<td><s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
				<s:elseif  test='lotno=="F47107"' >快三</s:elseif>
		<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
		<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
		<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
		<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
		<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
		<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
		<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
		<s:elseif test='lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
		<s:elseif test='lotno=="T01014"'>广东11选5</s:elseif>
		<s:elseif test='lotno=="T01003"||lotno=="ZC_11"'>胜负彩14场</s:elseif>
	    <s:elseif test='lotno=="T01004"||lotno=="ZC_19"'>胜负彩任9场</s:elseif>
	    <s:elseif test='lotno=="T01006"||lotno=="ZC_16"'>6场半全场</s:elseif>
	    <s:elseif test='lotno=="T01005"||lotno=="ZC_18"'>四场进球彩</s:elseif>
	    <s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
	 	    <s:elseif test='lotno=="J00013"'>竞足让球胜平负</s:elseif>
	    <s:elseif test='lotno=="J00001"'>竞足胜平负</s:elseif>
	    <s:elseif test='lotno=="J00002"'>竞足比分</s:elseif>
	    <s:elseif test='lotno=="J00003"'>竞足总进球</s:elseif>
	    <s:elseif test='lotno=="J00004"'>竞足半场</s:elseif>
	      <s:elseif test='lotno=="J00005"'>竞篮胜负</s:elseif>
	    <s:elseif test='lotno=="J00008"'>竞篮大小分</s:elseif>
	    <s:elseif test='lotno=="J00007"'>竞篮胜分差</s:elseif>
	    <s:elseif test='lotno=="J00006"'>竞篮让分胜负</s:elseif>
	     <s:elseif test='lotno=="T01013"'>22选5</s:elseif>
	      <s:elseif test='lotno=="J00011"'>竞足混合</s:elseif>
	    <s:elseif test='lotno=="J00012"'>竞篮混合</s:elseif>
	    <s:elseif test='lotno=="B00001"'>北单胜平负</s:elseif>
	    <s:elseif test='lotno=="B00002"'>北单总进球</s:elseif>
	    <s:elseif test='lotno=="B00003"'>北单半全场</s:elseif>
	    <s:elseif test='lotno=="B00004"'>北单上下单双</s:elseif>
	    <s:elseif test='lotno=="B00005"'>北单单场比分</s:elseif>
		<s:else>&nbsp;</s:else>
		</td>
		<%/* 玩法 */ %>
		<td><s:if test="memo.equals('null')">-</s:if>
			<s:else>
				<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
					<s:property value="memo"/>合买
				</s:if>
				<s:else>
					<s:property value="memo"/>
				</s:else>
			</s:else>
		</td>
		<%/* 期号  */ %>
		<td><s:if test='lotno=="J00001"||lotno=="J00013"||lotno=="J00002"||lotno=="J00003"||lotno=="J00004"||lotno=="J00005"||lotno=="J00006"||lotno=="J00007"||lotno=="J00008"||batchcode.equals("null")'>-</s:if><s:else><s:property value="batchcode"/></s:else></td>
		<%/* 发起人   */ %>
		<td><s:property value="nickName"/></td>
		<%/* 我的认购   */ %>
		<td>
		¥<s:property value="orderamt"/>
		</td>
		<%/* 我的奖金   */ %>
		<td>
		<s:if test='prizestate==3||prizestate==4||prizestate==5'>
				<s:if test="orderprize==0.00">
				¥<s:property value="orderprize"/>
				</s:if>
				<s:else>
					<font class="red">¥<s:property value="orderprize"/></font>
				</s:else>
			</s:if>							
			<s:elseif test='prizestate==2'>¥0.00</s:elseif>
			<s:else>-</s:else>
		</td>
		<%/* 结算状态    */ %>
		<td>
		<s:if test='orderstate==3'>已撤销</s:if>
		<s:elseif test="orderstate==4">流单</s:elseif>
		<s:else>
			<s:if test='prizestate==1 || prizestate==0'>未开奖</s:if>
			<s:elseif test='prizestate==2|| prizestate==3'>已开奖</s:elseif>
			<s:elseif test='prizestate==4 ||prizestate==5'>
				<s:if test="orderprizeamt>0"><font class="red">已派奖</font></s:if>
				<s:else>未中奖</s:else>
			</s:elseif>
			<s:else>&nbsp;</s:else>
			</s:else>
		</td>
		<%/* 认购时间   */ %>
		<td><s:property value="createtime"/></td>
		<%/* 查看详情  */ %>
		<td>
		<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
		<a href='/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="tlotcaseid"/>'  target="_blank">查看</a>
		</s:if>
		<s:else>
		<a href='/rchlw/function/rules/oneBetInfo.jsp?flowno=<s:property value="id"/>&play_name=<s:property value="lotno"/>&batchcode=<s:property value="batchcode"/>'  target="_blank">查看</a>
		</s:else>
		</td>
	</tr>
	</s:iterator>
	</s:if>
	<%/*------------------------- 更早的投注记录----------------- */ %>
	<s:if test="#request.jaToPage.oldday.size()>0">
	<tr class="account_bgYellow">
		<td colspan="10"><strong>更早</strong>（<s:property value="#request.jaToPage.oldday.size()"/>条）</td>
	</tr>
	<s:iterator value="#request.jaToPage.oldday" status="stat">
	<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
	<s:else><tr class="accountDay_greyBg"></s:else>
		<%/* 彩种 */ %>
		<td><s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
		<s:elseif test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:elseif>
				<s:elseif  test='lotno=="F47107"' >快三</s:elseif>
		<s:elseif test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:elseif>
		<s:elseif test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:elseif>
		<s:elseif test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:elseif>
		<s:elseif test='lotno=="T01011"||lotno=="PLW_35"'>排列五</s:elseif>
		<s:elseif test='lotno=="T01009"||lotno=="QXC_10022"'>七星彩</s:elseif>
		<s:elseif test='lotno=="T01007"||lotno=="SSC_10401"'>时时彩</s:elseif>
		<s:elseif test='lotno=="T01010"||lotno=="XYXW_23009"'>江西11选5</s:elseif>
		<s:elseif test='lotno=="T01014"'>广东11选5</s:elseif>
		<s:elseif test='lotno=="T01003"||lotno=="ZC_11"'>胜负彩14场</s:elseif>
	    <s:elseif test='lotno=="T01004"||lotno=="ZC_19"'>胜负彩任9场</s:elseif>
	    <s:elseif test='lotno=="T01006"||lotno=="ZC_16"'>6场半全场</s:elseif>
	    <s:elseif test='lotno=="T01005"||lotno=="ZC_18"'>四场进球彩</s:elseif>
	    <s:elseif test='lotno=="T01012"'>十一运夺金</s:elseif>
	    <s:elseif test='lotno=="J00013"'>竞足让球胜平负</s:elseif>
	    <s:elseif test='lotno=="J00001"'>竞足胜平负</s:elseif>
	    <s:elseif test='lotno=="J00002"'>竞足比分</s:elseif>
	    <s:elseif test='lotno=="J00003"'>竞足总进球</s:elseif>
	    <s:elseif test='lotno=="J00004"'>竞足半场</s:elseif>
	     <s:elseif test='lotno=="J00005"'>竞篮胜负</s:elseif>
	    <s:elseif test='lotno=="J00008"'>竞篮大小分</s:elseif>
	    <s:elseif test='lotno=="J00007"'>竞篮胜分差</s:elseif>
	    <s:elseif test='lotno=="J00006"'>竞篮让分胜负</s:elseif>
	     <s:elseif test='lotno=="T01013"'>22选5</s:elseif>
	      <s:elseif test='lotno=="J00011"'>竞足混合</s:elseif>
	    <s:elseif test='lotno=="J00012"'>竞篮混合</s:elseif>
	    <s:elseif test='lotno=="B00001"'>北单胜平负</s:elseif>
	    <s:elseif test='lotno=="B00002"'>北单总进球</s:elseif>
	    <s:elseif test='lotno=="B00003"'>北单半全场</s:elseif>
	    <s:elseif test='lotno=="B00004"'>北单上下单双</s:elseif>
	    <s:elseif test='lotno=="B00005"'>北单单场比分</s:elseif>
		<s:else>&nbsp;</s:else>
		</td>
		<%/* 玩法 */ %>
		<td><s:if test="memo.equals('null')">-</s:if>
			<s:else>
				<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
					<s:property value="memo"/>合买
				</s:if>
				<s:else>
					<s:property value="memo"/>
				</s:else>
			</s:else>
		</td>
		<%/* 期号  */ %>
		<td><s:if test='lotno=="J00001"||lotno=="J00013"||lotno=="J00002"||lotno=="J00003"||lotno=="J00004"||lotno=="J00005"||lotno=="J00006"||lotno=="J00007"||lotno=="J00008"||batchcode.equals("null")'>-</s:if><s:else><s:property value="batchcode"/></s:else></td>
		<%/* 发起人   */ %>
		<td><s:property value="nickName"/></td>
		<%/* 我的认购   */ %>
		<td>
		¥<s:property value="orderamt"/>
		</td>
		<%/* 我的奖金   */ %>
		<td>
		<s:if test='prizestate==3||prizestate==4||prizestate==5'>
				<s:if test="orderprize==0.00">
				¥<s:property value="orderprize"/>
				</s:if>
				<s:else>
					<font class="red">¥<s:property value="orderprize"/></font>
				</s:else>
			</s:if>							
			<s:elseif test='prizestate==2'>¥0.00</s:elseif>
			<s:else>-</s:else>
		</td>
		<%/* 结算状态    */ %>
		<td>
		<s:if test='orderstate==3'>已撤销</s:if>
		<s:elseif test="orderstate==4">流单</s:elseif>
		<s:else>
			<s:if test='prizestate==1 || prizestate==0'>未开奖</s:if>
			<s:elseif test='prizestate==2|| prizestate==3'>已开奖</s:elseif>
			<s:elseif test='prizestate==4 ||prizestate==5'>
				<s:if test="orderprizeamt>0"><font class="red">已派奖</font></s:if>
				<s:else>未中奖</s:else>
			</s:elseif>
			<s:else>&nbsp;</s:else>
			</s:else>
		</td>
		<%/* 认购时间   */ %>
		<td><s:property value="createtime"/></td>
		<%/* 查看详情  */ %>
		<td>
		<s:if test='bettype==3 && tlotcaseid != null && !tlotcaseid.equals("null")'>
		<a href='/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="tlotcaseid"/>'  target="_blank">查看</a>
		</s:if>
		<s:else>
		<a href='/rchlw/function/rules/oneBetInfo.jsp?flowno=<s:property value="id"/>&play_name=<s:property value="lotno"/>&batchcode=<s:property value="batchcode"/>'  target="_blank">查看</a>
		</s:else>
		</td>
	</tr>
	</s:iterator>
	</s:if>
	</s:if>
	<s:else>
           	<tr><td colspan="9" align="center" height="28">无查询记录</td></tr>
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
		$(".a_bettingRecords").addClass("selected");
	});
</script>
