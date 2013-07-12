<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<thead>
	<tr>
		<th>场次</th>
		<th>对阵</th>
		<th>开赛时间</th>
		<th>平均指数</th>
		<th>选号投注</th>
	</tr>
</thead>
<tbody>
<s:if test="#request.list!=null">
	<s:iterator value="#request.list" status="stat">
	<s:if test="#stat.odd">
	<tr class="TrWhite">
	</s:if>
	<s:else>
	<tr class="TrGrey">
	</s:else>
		<td width="70">
			<!-- 场次 -->
			<s:property value="teamId"/>
		</td>
		<td>
			<!-- 主场队 -->
			<i id="hteam_<s:property value="#stat.count"/>"><s:property value="homeTeam"/></i>　
			<s:if test='bsbfzd==""||bsbfkd==""'>
				VS
			</s:if>
			<s:else>
				<s:property value="bsbfzd"/>:<s:property value="bsbfkd"/>
			</s:else>　
			<!-- 客场队 -->
			<i id="vteam_<s:property value="#stat.count"/>"><s:property value="guestTeam"/></i>
		</td>
		<td>
			<!-- 开赛时间 -->
			<s:property value="matchTime"/>
		</td>
		<td width="130"><s:property value="homeWinAverageOuPei"/>　<s:property value="standoffAverageOuPei"/>　<s:property value="guestWinAverageOuPei"/></td>
		<td width="130" class="WinTieLoss">
			<span onclick="Switch($(this));checkZhumaShouY();" id="ball3_<s:property value="#stat.count"/>">3</span>
			<span onclick="Switch($(this));checkZhumaShouY();" id="ball1_<s:property value="#stat.count"/>">1</span>
			<span onclick="Switch($(this));checkZhumaShouY();" id="ball0_<s:property value="#stat.count"/>">0</span>
		</td>
	</tr>
	</s:iterator>
</s:if>
</tbody>
<tfoot>
	<tr>
	<th colspan="3">
	您选择了<b id="lab_Num_standrad">0</b>注 <b id="investField_standrad">0</b>元
	&nbsp;&nbsp;&nbsp;<input type="checkbox" id="xieyi" checked="checked" style=" vertical-align: middle; ">
    &nbsp;我已阅读并同意
	<a class="light" href="/rchlw/function/rules/betProtocol.jsp" target="_blank">《用户代购协议》</a>
	</th>
	<td colspan="2"><input type="button" class="foot-input" value="我要投注" onclick="openTouzhu_shouye();" /><span onmouseover="HoverOver($(this))" onmouseout="HoverOut($(this))" onclick="cleanZucai();">清空选号</span>
	</td>
	</tr>
</tfoot>
	