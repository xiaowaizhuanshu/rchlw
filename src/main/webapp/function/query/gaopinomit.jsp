<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="ChannelBuyPannel HighFrequencyOmit">
			<div class="ChannelBuyPannelHead">
				<h3>当前遗漏</h3>
			</div>
			<dl class="ChannelBuyTab">
			<s:if test="#request.lotno=='T01007'">
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light selected" ControlTarget=".Analyse1">二星直选</dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse2">二星组选<span>&nbsp;</span></dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse3">三星直选<span>&nbsp;</span></dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse4">三星组选<span>&nbsp;</span></dt>
			</s:if>
			<s:elseif test="#request.lotno=='T01012' || #request.lotno=='T01010'">
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light selected" ControlTarget=".Analyse1">前三直选</dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse2">任选五<span>&nbsp;</span></dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse3">任选七<span>&nbsp;</span></dt>
				<dt onclick="BaseTab($(this))" onmousemove="BaseTab($(this))" class="light" ControlTarget=".Analyse4">任选八<span>&nbsp;</span></dt>
			</s:elseif>
			</dl>
			<div class="ChannelBuyPannelBody">
				<div class="Analyse1 TableBox selected">
					<table width="100%">
						<thead>
							<tr>
								<th>号码</th>
								<th>未开期数</th>
							</tr>
						</thead>
						<tbody>
						<s:iterator value="#request.arrOmit1" id="arrOmit1" status="o1">
						<tr class='${o1.odd?"White":"Gray" }'>
							<th><s:property value="code"/></th>
							<td><s:property value="batchCount"/></td>
			            </tr>
					</s:iterator>
						</tbody>
					</table>
				</div>
				<div class="Analyse2 TableBox">
					<table width="100%">
						<thead>
							<tr>
								<th>号码</th>
								<th>未开期数</th>
							</tr>
						</thead>
						<tbody>
						<s:iterator value="#request.arrOmit2" id="arrOmit2" status="o2">
				         <tr class='${o2.odd?"White":"Gray" }'>
							<th><s:property value="code"/></th>
							<td><s:property value="batchCount"/></td>
			            </tr>
						</s:iterator>
						</tbody>
					</table>
				</div>
				<div class="Analyse3 TableBox">
					<table class="lightTable" width="100%">
						<thead>
							<tr>
								<th>号码</th>
								<th>未开期数</th>
							</tr>
						</thead>
						<tbody>
						<s:iterator value="#request.arrOmit3" id="arrOmit3" status="o3">
						<tr class='${o3.odd?"White":"Gray" }'>
							<th><s:property value="code"/></th>
							<td><s:property value="batchCount"/></td>
			            </tr>
						</s:iterator>
						</tbody>
					</table>
				</div>
				<div class="Analyse4 TableBox">
					<table width="100%">
						<thead>
							<tr>
								<th>号码</th>
								<th>未开期数</th>
							</tr>
						</thead>
						<tbody>
						<s:iterator value="#request.arrOmit4" id="arrOmit4" status="o4">
						<tr class='${o4.odd?"White":"Gray" }'>
							<th><s:property value="code"/></th>
							<td><s:property value="batchCount"/></td>
			            </tr>
						</s:iterator>
						</tbody>
					</table>
				</div>
			</div>
		
		</div>