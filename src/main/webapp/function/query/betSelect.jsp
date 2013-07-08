<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.util.Date,java.text.SimpleDateFormat" %>
<%@taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/rchlw/function/js/jquery-1.5.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/function/rchlw/function/js/jtip.js" language="javascript"></script>
		<div class="user_head">
			<div class="user_zi">我的投注记录</div>
		</div>
		<div class="user_content">
			<div class="record_title">
				<div class="record_title_zi">实战记录</div>
			</div>
			<form action="/rchlw/user/selectAll!betSelect" method="post" onsubmit="return TZSelectreHtmlInParameters(this.lotNo.value,this.startDate.value,this.stopDate.value)">
			<div class="record_cx">			
					<div class="record_chax"><input type="text" id="startDate" name="startDate" onFocus="WdatePicker({startDate:'2000-05-01',alwaysUseStartDate:true})" value="${startDate}"/>　至　<input type="text" id="stopDate" name="stopDate" onFocus="WdatePicker()" value="${stopDate}"/></div>
					<div><input class="chx_btn" name="btn_submit" type="submit" value=""/></div>
									
			</div>
			<div class="record_content">
				<table width="800" height="78" border="0" cellpadding="0" cellspacing="0">
					  <tr>
						 <td width="109" class="record_biao1"><label>
						<select  name="lotNo" onchange="toLotNo(this)">
							  <option value="" selected="selected">请选择彩种</option>
							  <option value="F47104"  <s:if test='#request.lotNo=="F47104"'>selected="selected"</s:if>>双色球</option>
							  <option value="F47103" <s:if test='#request.lotNo=="F47103"'>selected="selected"</s:if>>福彩3D</option>
							  <option value="F47102" <s:if test='#request.lotNo=="F47102"'>selected="selected"</s:if>>七乐彩</option>
							  <option value="T01001" <s:if test='#request.lotNo=="T01001"'>selected="selected"</s:if>>超级大乐透</option>
							  <option value="T01002" <s:if test='#request.lotNo=="T01002"'>selected="selected"</s:if>>排列三</option>		
						</select>
						</label></td>
					      <td width="122" class="record_biao1">期号</td>
					      <td width="133" class="record_biao1">发起人</td>
					      <td width="168" class="record_biao1">投注时间</td>
					      <td width="121" class="record_biao1">投注金额（元）</td>
					      <td width="132" class="record_biao1">我的认购</td>
                          <td width="124" class="record_biao1" >注码详情</td>
					  </tr>
                  <tr><td colspan="12">"无查询记录"</td></tr> 

			<s:iterator  value="#request.jaToPage" status ="stat" >			
			<tr>
			<s:if test='#stat.isEven()'>	
				<td class="record_biao3">
					<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
					<s:if test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:if>
					<s:if test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:if>
					<s:if test='lotno=="T01002"||lotno=="PL3_33"' >排列三</s:if>
					<s:if test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:if></td>
				<td class="record_biao3"><s:property value="batchcode"/></td>
				<td class="record_biao3"><s:property value="#session.user.MOBILEID"/></td>
				<td class="record_biao3"><s:property value="ordertime"/></td>
				<td class="record_biao3"><s:property value="amt/100"/></td>
				<td class="record_biao3"><s:property value="state"/></td>

				<td class="record_biao3" >
					<a href="/rchlw/user/selectAll!oneBetSelect?play_name=<s:property value="lotno"/>&&betchcode=<s:property value="btchcode"/>" class="jTip" id="one" name="投注详情">详细信息</a>
				</td>
			</s:if>

			<s:else>
			<td class="record_biao2">
					<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
					<s:if test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:if>
					<s:if test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:if>
					<s:if test='lotno=="F47101"||lotno=="DT5"' >时时彩</s:if>
					<s:if test='lotno=="T01002"||lotno=="PL3_33"||lotno="T01007"' >排列三</s:if>
					<s:if test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:if></td>
				<td class="record_biao2"><s:property value="batchcode"/></td>
				<td class="record_biao2"><s:property value="#session.user.MOBILEID"/></td>
				<td class="record_biao2"><s:property value="ordertime"/></td>
				<td class="record_biao2"><s:property value="amt/100"/></td>
				<td class="record_biao2"><s:property value="state"/></td>
				<td class="record_biao2" >
					<input type="button" value="详细信息" id="xinxi2" onmouseover="onset()"/>
					<div title="详细投注信息" id="betInfo" style="display:none">
						<div>
						<ul>
							<li>【<span>彩种</span>】<s:if test='lotno=="F47104"||lotno=="B001"' >双色球</s:if>
								<s:if test='lotno=="F47103"||lotno=="D3"'>福彩3D</s:if>
								<s:if test='lotno=="F47102"||lotno=="QL730"' >七乐彩</s:if>
								<s:if test='lotno=="F47101"||lotno=="DT5"' >时时彩</s:if>
								<s:if test='lotno=="T01002"||lotno=="PL3_33"||lotno="T01007"' >排列三</s:if>
								<s:if test='lotno=="T01001"||lotno=="DLT_23529"' >大乐透</s:if>
							</li>
							<li>【<span>期号</span>】<s:property value="batchcode"/></li>
							<li>【<span>投注日期</span>】<s:property value="ordertime"/></li>
							<li>【<span>开奖日期</span>】<s:property value="prizetime"/></li>
							<li>【<span>投注号码</span>】<s:property value="betcode"/></li>
						</ul>	
						</div>
					</div>
				</td>				
			</s:else>
			</tr>
			</s:iterator>
		</table>					
	</div>
	<div class="account_page">
	  	${pageHtml}
	</div>
</form>			
</div>
