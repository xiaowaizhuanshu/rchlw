<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%><%@taglib prefix="s" uri="/struts-tags"%>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <thead>
  <tr>
	<th>认购用户名</th>
	<th>认购金额（元）</th>
	<th>所占比例</th>
	<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 || #request.canyuList.caseLot.displayState==4"> 
	<th>保底金额（元）</th>
	</s:if><s:else>
	<th>奖金（元）</th>
	</s:else>
	<th>时间</th>
  </tr>
  </thead>
  <tbody>
  <s:set name="allAmt" value="0"/>
  <s:iterator id="list" value="#request.canyuList.caseLotBuyAndUser">
  <tr>
	<td><font <s:if test="#list.caseLotBuy.buyType==1"> class="red_big"</s:if><s:elseif test="#request.userno==#list.userinfo.userno"> class="blue1_big"</s:elseif>>
	<s:if test='#list.userinfo.nickname==null||#list.userinfo.nickname.equals("null")||#list.userinfo.nickname.equals("")||
	#list.userinfo.nickname.equals(" ")' >
	<s:property value="#list.userinfo.mobileid.substring(0,4)" />***<s:property value="#list.userinfo.mobileid.substring(7,11)" /></s:if><s:else><s:property value="#list.userinfo.nickname" /></s:else>
	<s:if test="#list.caseLotBuy.buyType==1">（发起人）</s:if></font></td>
	<td>${list.caseLotBuy.num}</td>
	<td>
	<s:property value="#list.caseLotBuy.proportion"/>
	%</td>
	<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 ||
	 #request.canyuList.caseLot.displayState==4"> 
	<td>${list.caseLotBuy.freezeSafeAmt}</td>
	</s:if><s:else>
	<s:if test="#request.canyuList.caseLot.displayState==6"> 
	<td>${list.caseLotBuy.prizeAmt}</td>
	<s:set id="allAmt" value="#allAmt+#list.caseLotBuy.prizeAmt" />
	</s:if>
	<s:else>
	<td>0.00</td>
	</s:else>
	</s:else>
	<td>${list.caseLotBuy.buyTime}</td>
  </tr>
  </s:iterator>
   </tbody>
   <tfoot>

  <tr>
	<td>总计</td>
	<td><s:property value="#request.canyuList.caseLot.buyAllMoeny" />
	</td>
	<td>
	<s:property value="#request.canyuList.caseLot.buyAllProportion"/>
	%</td>
	<s:if test="#request.canyuList.caseLot.displayState==1 || #request.canyuList.caseLot.displayState==2 || #request.canyuList.caseLot.displayState==4"> 
	<td>${canyuList.caseLot.safeAmt}</td>
	</s:if><s:else>
	<td>${canyuList.allamt}</td>
	</s:else>
	<td>--</td>
  </tr>
 </tfoot>
</table>
<p style="text-align:right;padding-top:10px; ">${pageHtml }</p>