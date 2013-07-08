<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@taglib prefix="s" uri="/struts-tags"%>
 <!-- 合买中奖排行 start -->
		<div class="indexCharts">
			<div class="indexCharts_top" >
			<h1>中奖排行榜</h1>
			<p>
				<ul class="BaseTab">
				<s:if test="#request.allList.size()>0">
					<li onmouseover="BaseTab($(this))" ControlTarget=".ContentOne" class="selected">总排行</li>
				</s:if>
				<s:if test="#request.yearList.size()>0">
					<li onmouseover="BaseTab($(this))" ControlTarget=".ContentThree">年排行</li>
				</s:if>
				<s:if test="#request.monthList.size()>0">
					<li onmouseover="BaseTab($(this))" ControlTarget=".ContentTwo">月排行</li>
				</s:if>
				</ul>
			</p>
			</div>
			<s:if test="#request.allList.size()>0">
			<div class="indexCharts_con ContentOne selected">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
				  <thead>
				  <tr>
					<td>排行</td>
					<td>用户名</td>
					<th>中奖金额</th>
				  </tr>
				  </thead>
				  <tbody>
				  <s:iterator value="#request.allList" status="all">
				  <tr>
				  	<s:if test="(#all.index+1)<4">
					<td><span class="charts_red">${all.index+1}</span></td>
					</s:if>
					<s:else>
					<td><span class="charts_hui">${all.index+1}</span></td>
					</s:else>
					<td>${name }</td>
					<th>${prizeAmt }元</th>
				  </tr>
				  </s:iterator>
				  </tbody>
				</table>
			</div>
			</s:if>
			<s:if test="#request.monthList.size()>0">
			<div class="indexCharts_con ContentTwo">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				  <thead>
				  <tr>
					<td>排行</td>
					<td>用户名</td>
					<th>中奖金额</th>
				  </tr>
				  </thead>
				  <tbody>
				  <s:iterator value="#request.monthList" status="month">
				  <tr>
				  	<s:if test="(#month.index+1)<4">
					<td><span class="charts_red">${month.index+1}</span></td>
					</s:if>
					<s:else>
					<td><span class="charts_hui">${month.index+1}</span></td>
					</s:else>
					<td>${name }</td>
					<th>${prizeAmt }元</th>
				  </tr>
				  </s:iterator>
				  </tbody>
				</table>
			</div>
			</s:if>
			<s:if test="#request.yearList.size()>0">
			<div class="indexCharts_con ContentThree">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				  <thead>
				  <tr>
					<td>排行</td>
					<td>用户名</td>
					<th>中奖金额</th>
				  </tr>
				  </thead>
				  <tbody>
				  <s:iterator value="#request.yearList" status="year">
				  <tr>
				  	<s:if test="(#year.index+1)<4">
					<td><span class="charts_red">${year.index+1}</span></td>
					</s:if>
					<s:else>
					<td><span class="charts_hui">${year.index+1}</span></td>
					</s:else>
					<td>${name }</td>
					<th>${prizeAmt }元</th>
				  </tr>
				  </s:iterator>
				  </tbody>
				</table>
			</div>
			</s:if>
		</div>
		<!-- 合买中奖排行 end -->