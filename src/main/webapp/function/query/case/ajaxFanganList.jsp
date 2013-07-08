<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="ChangeTable">
		<thead><tr>
			<th>序号</th>
			<th>期号</th>
			<th>方案类型</th>
			<th>方案金额</th>
			<th>税前奖金</th>
			<th>方案状态</th>
		</tr></thead>
		<tbody>
		<s:iterator id="list"  value="#request.fanganList.list" status="i" >
		<tr style="height:25px;" <s:if test='#i.index%2==0' >class="TrbgGrey"</s:if>>
			<th>${i.index+1}</th>
			<s:if test='!(#request.caseLot.batchcode.equals("null"))'>
			<td>${list.caseLot.batchcode}</td>
			</s:if>
			 <s:else><td>-</td></s:else>
			<td>
			<s:if test='!(#request.torder.memo.equals("null"))'>
			${list.torder.memo}
			</s:if>
			<s:else>-</s:else>
			</td>
			<td>${list.caseLot.totalAmt/100}</td>
			<td>${list.caseLot.winBigAmt/100}</td>
			<s:if test="#list.caseLot.displayStateMemo=='失败'||#list.caseLot.displayStateMemo=='流单'">
			<td style="color:#1F376D">
			</s:if>
			<s:elseif test="#list.caseLot.displayStateMemo=='成功'||#list.caseLot.displayStateMemo=='满员'">
			<td style="color:#DE0201">
			</s:elseif>
			<s:else>
			<td>
			</s:else> 
			<a onmouseout="HoverOut($(this))" onmouseover="HoverOver($(this))" href="/rchlw/function/selectAll!getCaseDetail?caselotId=<s:property value='#list.caseLot.id'/>">${list.caseLot.displayStateMemo}</a> 
		    </td>
		</tr>
		</s:iterator>
		</tbody>
	</table>
<!--表格结束-->
<p><s:set  name="pageCount"  value="%{#parameters.pageCount[0]}"/>${pageHtml}</p>
