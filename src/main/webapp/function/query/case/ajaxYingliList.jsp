<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
	<table width="100%" border="0" cellspacing="0" cellpadding="0" class="ChangeTable">
		<thead><tr>
			<td>方案编号</td>
			<th>期号</th>
			<th>玩法</th>
			<th>方案金额</th>
			<th>税前奖金</th>
			<th>方案状态</th>
		</tr></thead>
		<tbody>
	<s:iterator id="list"  value="#request.yingliZhanJiList" status="i" >
		<tr <s:if test='#i.index%2==0' >class="TrbgGrey"</s:if>>
			<td><a style="text-decoration:underline;" onmouseout="HoverOut($(this))" onmouseover="HoverOver($(this))" target="_blank" href="<%=request.getContextPath() %>/function/selectAll!getCaseDetail?caselotId=<s:property value='#list.id'/>">${list.id }</a></td>
			<s:if test='#list.batchcode==null||#list.batchcode.equals("null")||#list.batchcode==""'>
			<td>-</td>
			</s:if>
			<s:else>
			<td>${list.batchcode}</td>
			</s:else>
			<s:if test='#list.wanfa==null||#list.wanfa.equals("null")||#list.wanfa==""'>
			<td>-</td>
			</s:if>
			<s:else>
			<td>${list.wanfa}</td>
			</s:else>
			<td>${list.totalAmt/100}</td>
			<s:if test='#list.winBigAmt==null||#list.winBigAmt.equals("null")'>
			<td>-</td>
			</s:if>
			<s:else>
			<td>${list.winBigAmt/100}</td>
			</s:else>
			<td>
			<s:if test="#list.state==3 || #list.state==5">
           	 成功
			</s:if>
			<s:else>
			失败
			</s:else>
			</td>
		</tr>
	</s:iterator>
	</tbody>
</table>
<p><s:set  name="pageCount"  value="%{#parameters.pageCount[0]}"/>${pageHtml}</p>
<!--表格结束-->
