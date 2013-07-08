<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
 <thead>
  <tr>
	<td>彩种</td>
	<td>玩法</td>
	<td>期号</td>
	<td>发起人</td>
	<td>我的认购</td>
	<td>我的奖金</td>
	<td>结算状态</td>
	<td>认购时间</td>
	<td>方案详情</td>
  </tr>
  </thead>
  <s:if test="#request.list.size()>0">
	<s:iterator value="#request.list" status="sta">
	<s:if test="#sta.odd"><tr class="tbody"></s:if>
	<s:else><tr class="tfoot"></s:else>
		<%/* 彩种 */ %>
		<td><s:if test='torder.lotno=="F47104"||torder.lotno=="B001"' >双色球</s:if>
		<s:elseif test='torder.lotno=="F47103"||torder.lotno=="D3"'>福彩3D</s:elseif>
		<s:elseif test='torder.lotno=="F47102"||torder.lotno=="QL730"' >七乐彩</s:elseif>
		<s:elseif test='torder.lotno=="F47107"' >快三</s:elseif>
		<s:elseif test='torder.lotno=="T01002"||torder.lotno=="PL3_33"' >排列三</s:elseif>
		<s:elseif test='torder.lotno=="T01001"||torder.lotno=="DLT_23529"' >大乐透</s:elseif>
		<s:elseif test='torder.lotno=="T01011"||torder.lotno=="PLW_35"'>排列五</s:elseif>
		<s:elseif test='torder.lotno=="T01009"||torder.lotno=="QXC_10022"'>七星彩</s:elseif>
		<s:elseif test='torder.lotno=="T01007"||torder.lotno=="SSC_10401"'>时时彩</s:elseif>
		<s:elseif test='torder.lotno=="T01014"||torder.lotno=="T01010"||torder.lotno=="XYXW_23009"'>江西11选5</s:elseif>
		<s:elseif test='torder.lotno=="T01003"||torder.lotno=="ZC_11"'>胜负彩14场</s:elseif>
	    <s:elseif test='torder.lotno=="T01004"||torder.lotno=="ZC_19"'>胜负彩任9场</s:elseif>
	    <s:elseif test='torder.lotno=="T01006"||torder.lotno=="ZC_16"'>6场半全场</s:elseif>
	    <s:elseif test='torder.lotno=="T01005"||torder.lotno=="ZC_18"'>四场进球彩</s:elseif>
	    <s:elseif test='torder.lotno=="T01012"'>十一运夺金</s:elseif>
	    <s:elseif test='torder.lotno=="J00013"'>竞足让球胜平负</s:elseif>
	    <s:elseif test='torder.lotno=="J00001"'>竞足胜平负</s:elseif>
	    <s:elseif test='lotno=="J00002"'>竞足比分</s:elseif>
	    <s:elseif test='lotno=="J00003"'>竞足总进球</s:elseif>
	    <s:elseif test='lotno=="J00004"'>竞足半场</s:elseif>
	    <s:elseif test='torder.lotno=="J00005"'>竞篮胜负</s:elseif>
	    <s:elseif test='torder.lotno=="J00008"'>竞篮大小分</s:elseif>
	    <s:elseif test='torder.lotno=="J00007"'>竞篮胜分差</s:elseif>
	    <s:elseif test='torder.lotno=="J00006"'>竞篮让分胜负</s:elseif>
	     <s:elseif test='torder.lotno=="T01013"'>22选5</s:elseif>
	     <s:elseif test='torder.lotno=="J00011"'>竞足混合</s:elseif>
	     <s:elseif test='torder.lotno=="J00012"'>竞篮混合</s:elseif>
		<s:else>&nbsp;</s:else>
		</td>
		<%/* 玩法 */ %>
		<td><s:if test="torder.memo.equals('null')">-</s:if>
			<s:else>
				<s:if test='torder.bettype==3 && torder.tlotcaseid != null && !torder.tlotcaseid.equals("null")'>
					<s:property value="torder.memo"/>合买
				</s:if>
				<s:else>
					<s:property value="torder.memo"/>
				</s:else>
			</s:else>
		</td>
		<%/* 期号  */ %>
		<td><s:if test='lotno=="J00011"||lotno=="J00012"||lotno=="J00013"||lotno=="J00001"||lotno=="J00002"||lotno=="J00003"||lotno=="J00004"||lotno=="J00005"||lotno=="J00006"||lotno=="J00007"||lotno=="J00008"||batchcode.equals("null")'>-</s:if><s:else><s:property value="batchcode"/></s:else></td>
		<%/* 发起人   */ %>
		<td><s:property value="torder.nickName"/></td>
		<%/* 我的认购   */ %>
		<td>
		¥<s:property value="torder.orderamt"/>
		</td>
		<%/* 我的奖金   */ %>
		<td>
		<s:if test='torder.prizestate==3||torder.prizestate==4||torder.prizestate==5'>
				<s:if test="torder.orderprize==0.00">
				¥<s:property value="torder.orderprize"/>
				</s:if>
				<s:else>
					<font class="red">¥<s:property value="torder.orderprize"/></font>
				</s:else>
			</s:if>							
			<s:elseif test='torder.prizestate==2'>¥0.00</s:elseif>
			<s:else>-</s:else>
		</td>
		<%/* 结算状态    */ %>
		<td>
		<s:if test='torder.orderstate==3'>已撤销</s:if>
		<s:elseif test="torder.orderstate==4">流单</s:elseif>
		<s:else>
			<s:if test='torder.prizestate==1 || torder.prizestate==0'>未开奖</s:if>
			<s:elseif test='torder.prizestate==2 || torder.prizestate==3'>已开奖</s:elseif>
			<s:elseif test='torder.prizestate==4 ||torder.prizestate==5'>
				<s:if test="torder.orderprizeamt>0"><font class="red">已派奖</font></s:if>
				<s:else>未中奖</s:else>
			</s:elseif>
			<s:else>&nbsp;</s:else>
			</s:else>
		</td>
		<%/* 认购时间   */ %>
		<td><s:property value="torder.createtime"/></td>
		<%/* 查看详情  */ %>
		<td>
		<s:if test='torder.bettype==3 && torder.tlotcaseid != null && !torder.tlotcaseid.equals("null")'>
		<a href='<%=request.getContextPath() %>/function/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value="torder.tlotcaseid"/>'  target="_blank">查看</a>
		</s:if>
		<s:else>
		<a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=<s:property value="torder.id"/>&play_name=<s:property value="torder.lotno"/>&batchcode=<s:property value="torder.batchcode"/>'  target="_blank">查看</a>
		</s:else>
		</td>
	</tr>
	</s:iterator>
	</s:if>
	<s:else>
           	<tr><td colspan="9" align="center" height="28">无查询记录</td></tr>
       	</s:else>
</table>
