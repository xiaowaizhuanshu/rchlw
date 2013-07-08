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
<form action="#" method="post" id="betSelect" onsubmit='return TZSelectreHtmlInParameters(this.lotno.value , this.beginTime.value , this.endTime.value , "settleFlag="+this.settleFlag.value+"&pageCount="+($("#pageCount").find("td").find("input:checked").val())) ;' class="tzjl_form">
		<div class="my_account">
			<h2>受赠记录</h2>
			<div class="account_detailed">
			
			<div class="a_detailedInterpretation">
			<span class="a_detailedTitle">以下是您的受赠记录</span>
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
						  <option value="T01001" <s:if test='request.getParameter("lotno")=="T01001"'>selected="selected"</s:if>>大乐透</option>
						  <option value="T01002" <s:if test='request.getParameter("lotno")=="T01002"'>selected="selected"</s:if>>排列三</option>	
						  <option value="T01011" <s:if test='request.getParameter("lotno")=="T01011"'>selected="selected"</s:if>>排列五</option>
					      <option value="T01009" <s:if test='request.getParameter("lotno")=="T01009"'>selected="selected"</s:if>>七星彩</option>	
					      <option value="T01007" <s:if test='request.getParameter("lotno")=="T01007"'>selected="selected"</s:if>>时时彩</option>
					      <option value="T01010" <s:if test='request.getParameter("lotno")=="T01010"'>selected="selected"</s:if>>江西11选5</option>	
					      <option value="T01003" <s:if test='request.getParameter("lotno")=="T01003"'>selected="selected"</s:if>>胜负彩14场</option>
					      <option value="T01004" <s:if test='request.getParameter("lotno")=="T01004"'>selected="selected"</s:if>>胜负彩任9场</option>	
					      <option value="T01006" <s:if test='request.getParameter("lotno")=="T01006"'>selected="selected"</s:if>>6场半全场</option>
					      <option value="T01005" <s:if test='request.getParameter("lotno")=="T01005"'>selected="selected"</s:if>>四场进球彩</option>
					      <option value="T01012" <s:if test='request.getParameter("lotno")=="T01012"'>selected="selected"</s:if>>十一运夺金</option>
					      <option value="J00013" <s:if test='request.getParameter("lotno")=="J00013"'>selected="selected"</s:if>>竞足让球胜平负</option>
					      <option value="J00001" <s:if test='request.getParameter("lotno")=="J00001"'>selected="selected"</s:if>>竞足胜平负</option>
						</select>
					</td>
					<td>类型：</td>
					<td>
						<select name="" class="bettingRecords_select" id="settleFlag">
	    					<option selected="selected" value="-1">全部投注</option>
		           			<option value="0" <s:if test='request.getParameter("settleFlag")=="0"||request.getParameter("settleFlag")=="1"'>selected</s:if>>未开奖</option>
						    <option value="3" <s:elseif test='request.getParameter("settleFlag")=="3"||request.getParameter("settleFlag")=="4"'>selected</s:elseif>>已开奖</option>
					</select>
					</td>
					<td>起始日期：</td>
					<td><input class="account_time" type="text" id="beginTime" size="10" name="beginTime" onfocus="WdatePicker({alwaysUseStartDate:true})" value="${beginTime }"/></td>
					<td>终止日期：</td>
					<td><input id="endTime" size="10" name="endTime" onfocus="WdatePicker({alwaysUseStartDate:true})" value="${endTime }" type="text" class="account_time" /></td>
					<td><input name="" type="submit"" class="account_checkBtn" value="查询"/></td>
				</tr>
			</table>
			
			<table class="account_day"  cellspacing="0" cellpadding="0">
				<tr>
					<th>彩种</th>
					<th>期号</th>
					<th>赠送人</th>
					<th>金额</th>
					<th>赠送时间</th>
					<th>结算状态</th>
					<th>方案详情</th>
				</tr>
				<s:if test="(#request.jaToPage.today.size()+#request.jaToPage.yestday.size()+#request.jaToPage.oldday.size())>0">
				<s:if test="#request.jaToPage.today.size()>0">
				<tr class="account_bgYellow">
				<td colspan="10"><strong>今天</strong>（<s:property value="#request.jaToPage.today.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.jaToPage.today" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<td><s:if test='presentDetails.lotno=="F47104"||presentDetails.lotno=="B001"' >双色球</s:if>
					<s:elseif test='presentDetails.lotno=="F47103"||presentDetails.lotno=="D3"'>福彩3D</s:elseif>
					<s:elseif test='presentDetails.lotno=="F47102"||presentDetails.lotno=="QL730"' >七乐彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01002"||presentDetails.lotno=="PL3_33"' >排列三</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01001"||presentDetails.lotno=="DLT_23529"' >大乐透</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01011"||presentDetails.lotno=="PLW_35"'>排列五</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01009"||presentDetails.lotno=="QXC_10022"'>七星彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01007"||presentDetails.lotno=="SSC_10401"'>时时彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01014"||presentDetails.lotno=="T01010"||presentDetails.lotno=="XYXW_23009"'>江西11选5</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01003"||presentDetails.lotno=="ZC_11"'>胜负彩14场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01004"||presentDetails.lotno=="ZC_19"'>胜负彩任9场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01006"||presentDetails.lotno=="ZC_16"'>6场半全场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01005"||presentDetails.lotno=="ZC_18"'>四场进球彩</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01012"'>十一运夺金</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00013"'>竞足让球胜平负</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00001"'>竞足胜平负</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00011"'>竞彩足球混合</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00012"'>竞彩篮球混合</s:elseif>
				    		    <s:elseif test='presentDetails.lotno=="T01013"'>22选5</s:elseif>
				    		    <s:elseif test='presentDetails.lotno=="F47107"'>快三</s:elseif>
				    		    
					<s:else>&nbsp;</s:else>
					</td>
					<%/* 期号  */ %>
					<td><s:if test='presentDetails.lotno=="J00013"||presentDetails.lotno=="J00001"'>-</s:if><s:else><s:property value="torder.batchcode"/></s:else></td>
					<td><s:property value="presentDetails.nickName"/></td>
					<td>¥<s:property value="presentDetails.amt"/></td>
					<td><s:property value="presentDetails.createtime"/></td>
					<td>
						<s:if test='torder.prizestate==1 || torder.prizestate==0'>未开奖</s:if>
						<s:elseif test='torder.prizestate==2 || torder.prizestate==3'>已开奖</s:elseif>
						<s:elseif test='torder.prizestate==4 ||torder.prizestate==5'>
							<s:if test="torder.orderprizeamt>0"><font class="red">已派奖</font></s:if>
							<s:else>未中奖</s:else>
						</s:elseif>
					</td>
					<td><a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=<s:property value="presentDetails.orderid"/>&play_name=<s:property value="presentDetails.lotno"/>&batchcode=<s:property value="presentDetails.batchcode"/>&type=2'  target="_blank">查看</a></td>
				</tr>
				</s:iterator>
				</s:if>
				<s:if test="#request.jaToPage.yestday.size()>0">
				<tr class="account_bgYellow">
				<td colspan="10"><strong>昨天</strong>（<s:property value="#request.jaToPage.yestday.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.jaToPage.yestday" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<td><s:if test='presentDetails.lotno=="F47104"||presentDetails.lotno=="B001"' >双色球</s:if>
					<s:elseif test='presentDetails.lotno=="F47103"||presentDetails.lotno=="D3"'>福彩3D</s:elseif>
					<s:elseif test='presentDetails.lotno=="F47102"||presentDetails.lotno=="QL730"' >七乐彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01002"||presentDetails.lotno=="PL3_33"' >排列三</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01001"||presentDetails.lotno=="DLT_23529"' >大乐透</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01011"||presentDetails.lotno=="PLW_35"'>排列五</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01009"||presentDetails.lotno=="QXC_10022"'>七星彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01007"||presentDetails.lotno=="SSC_10401"'>时时彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01014"||presentDetails.lotno=="T01010"||presentDetails.lotno=="XYXW_23009"'>江西11选5</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01003"||presentDetails.lotno=="ZC_11"'>胜负彩14场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01004"||presentDetails.lotno=="ZC_19"'>胜负彩任9场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01006"||presentDetails.lotno=="ZC_16"'>6场半全场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01005"||presentDetails.lotno=="ZC_18"'>四场进球彩</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01012"'>十一运夺金</s:elseif>
				   <s:elseif test='presentDetails.lotno=="J00013"'>竞足让球胜平负</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00001"'>竞足胜平负</s:elseif>
					 <s:elseif test='presentDetails.lotno=="J00011"'>竞彩足球混合</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00012"'>竞彩篮球混合</s:elseif>
				      <s:elseif test='presentDetails.lotno=="F47107"'>快三</s:elseif>
				    		    <s:elseif test='presentDetails.lotno=="T01013"'>22选5</s:elseif>
					<s:else>&nbsp;</s:else>
					</td>
					<%/* <td><s:if test="memo.equals('null')">-</s:if>
					<s:else>
							<s:property value="memo"/>
					</s:else>
					</td>*/ %>
					<%/* 期号  */ %>
					<td><s:if test='presentDetails.lotno=="J00013"||presentDetails.lotno=="J00001"'>-</s:if><s:else><s:property value="torder.batchcode"/></s:else></td>
					<td><s:property value="presentDetails.nickName"/></td>
					<td>¥<s:property value="presentDetails.amt"/></td>
					<td><s:property value="presentDetails.createtime"/></td>
					<td>
						<s:if test='torder.prizestate==1 || torder.prizestate==0'>未开奖</s:if>
						<s:elseif test='torder.prizestate==2 || torder.prizestate==3'>已开奖</s:elseif>
						<s:elseif test='torder.prizestate==4 ||torder.prizestate==5'>
							<s:if test="torder.orderprizeamt>0"><font class="red">已派奖</font></s:if>
							<s:else>未中奖</s:else>
						</s:elseif>
					</td>
					<td><a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=<s:property value="presentDetails.orderid"/>&play_name=<s:property value="presentDetails.lotno"/>&batchcode=<s:property value="presentDetails.batchcode"/>&type=2'  target="_blank">查看</a></td>
				</tr>
				</s:iterator>
				</s:if>
				<s:if test="#request.jaToPage.oldday.size()>0">
				<tr class="account_bgYellow">
				<td colspan="10"><strong>更早</strong>（<s:property value="#request.jaToPage.oldday.size()"/>条）</td>
				</tr>
				<s:iterator value="#request.jaToPage.oldday" status="stat">
				<s:if test="#stat.odd"><tr class="accountDay_whiteBg"></s:if>
				<s:else><tr class="accountDay_greyBg"></s:else>
					<td><s:if test='presentDetails.lotno=="F47104"||presentDetails.lotno=="B001"' >双色球</s:if>
					<s:elseif test='presentDetails.lotno=="F47103"||presentDetails.lotno=="D3"'>福彩3D</s:elseif>
					<s:elseif test='presentDetails.lotno=="F47102"||presentDetails.lotno=="QL730"' >七乐彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01002"||presentDetails.lotno=="PL3_33"' >排列三</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01001"||presentDetails.lotno=="DLT_23529"' >大乐透</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01011"||presentDetails.lotno=="PLW_35"'>排列五</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01009"||presentDetails.lotno=="QXC_10022"'>七星彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01007"||presentDetails.lotno=="SSC_10401"'>时时彩</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01014"||presentDetails.lotno=="T01010"||presentDetails.lotno=="XYXW_23009"'>江西11选5</s:elseif>
					<s:elseif test='presentDetails.lotno=="T01003"||presentDetails.lotno=="ZC_11"'>胜负彩14场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01004"||presentDetails.lotno=="ZC_19"'>胜负彩任9场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01006"||presentDetails.lotno=="ZC_16"'>6场半全场</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01005"||presentDetails.lotno=="ZC_18"'>四场进球彩</s:elseif>
				    <s:elseif test='presentDetails.lotno=="T01012"'>十一运夺金</s:elseif>
				   <s:elseif test='presentDetails.lotno=="J00013"'>竞足让球胜平负</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00001"'>竞足胜平负</s:elseif>
				     <s:elseif test='presentDetails.lotno=="J00011"'>竞彩足球混合</s:elseif>
				    <s:elseif test='presentDetails.lotno=="J00012"'>竞彩篮球混合</s:elseif>
				      <s:elseif test='presentDetails.lotno=="F47107"'>快三</s:elseif>
				    		    <s:elseif test='presentDetails.lotno=="T01013"'>22选5</s:elseif>
					<s:else>&nbsp;</s:else>
					</td>
					<%/* <td><s:if test="memo.equals('null')">-</s:if>
					<s:else>
							<s:property value="memo"/>
					</s:else>
					</td>*/ %>
					<%/* 期号  */ %>
					<td><s:if test='presentDetails.lotno=="J00013"||presentDetails.lotno=="J00001"'>-</s:if><s:else><s:property value="torder.batchcode"/></s:else></td>
					<td><s:property value="presentDetails.nickName"/></td>
					<td>¥<s:property value="presentDetails.amt"/></td>
					<td><s:property value="presentDetails.createtime"/></td>
					<td>
						<s:if test='torder.prizestate==1 || torder.prizestate==0'>未开奖</s:if>
						<s:elseif test='torder.prizestate==2 || torder.prizestate==3'>已开奖</s:elseif>
						<s:elseif test='torder.prizestate==4 ||torder.prizestate==5'>
							<s:if test="torder.orderprizeamt>0"><font class="red">已派奖</font></s:if>
							<s:else>未中奖</s:else>
						</s:elseif>
					</td>
					<td><a href='<%=request.getContextPath() %>/function/rules/oneBetInfo.jsp?flowno=<s:property value="presentDetails.orderid"/>&play_name=<s:property value="presentDetails.lotno"/>&batchcode=<s:property value="presentDetails.batchcode"/>&type=2'  target="_blank">查看</a></td>
				</tr>
				</s:iterator>
				</s:if>
				</s:if>
				<s:else>
	           	<tr><td colspan="9" align="center" height="28">无受赠记录</td></tr>
	       		</s:else>
			</table>
			
			<p class="account_page"> ${pageHtml} </p>
			
			<div class="space10">&#160;</div>
		</div>
			
			<script>
			$(function(){
				$(".a_accept").addClass("selected");
			});
		</script>

		</div>
	</form>
<jsp:include page="/function/common/recivePresent.jsp"></jsp:include>