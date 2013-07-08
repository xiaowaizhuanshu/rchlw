<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="zucaitable" id="zucai_standrad" style="width:728px;">
	<table width="729" border="0" cellspacing="0" cellpadding="0">
		<tr class="zucai_tr">
			<td class="zucai_biao1" width="42" rowspan="2">场<br />次</td>
			<td class="zucai_biao1" width="114" rowspan="2">赛事/时间</td>
			<td class="zucai_biao1" colspan="5" rowspan="2">对阵</td>
			<td class="zucai_biao1" colspan="3">投注区</td>
			<td class="zucai_biao1" width="41" rowspan="2">设<br />胆</td>
			<td class="zucai_biao1" width="44" rowspan="2">彩<br />果</td>
<!-- 			<td class="zucai_biao1" width="90" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao3" colspan="3">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="49"><img src="<%=request.getContextPath() %>/function/images/quan_3_gray.gif" />
			</td>
			<td class="zucai_biao2" width="49"><img src="<%=request.getContextPath() %>/function/images/quan_1_gray.gif" />
			</td>
			<td class="zucai_biao2" width="50"><img src="<%=request.getContextPath() %>/function/images/quan_0_gray.gif" />
			</td>
			<td class="zucai_biao4" width="40">3</td>
			<td class="zucai_biao4" width="40">1</td>
			<td class="zucai_biao4" width="40">0</td>
		</tr>
		<s:iterator value="#request.list" status="stat">
			<tr id="tr_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if>">
			
              <td rowspan="2" class="zucai_biao5"><s:property value="tempId"/></td>
              <td rowspan="2" class="zucai_biao9"><s:property value="name"/><br/><s:property value="date"/></td>
              <td width="30" class="zucai_biao6"style="font-size:10px; text-align:right">
				<s:if test='HRank==""'>&nbsp;</s:if>
				<s:else>[<s:property value="HRank"/>]</s:else>
			  </td>
              <td width="65" rowspan="2" class="zucai_biao5" style="text-align:left;"><font class="blue_big"><s:property value="HTeam"/></font><br/>
                <s:property value="S"/></td>
              <td width="47" rowspan="2" class="zucai_biao5"><font class="red">
              <s:if test='bsbfzd==""||bsbfkd==""'>
              VS
				</s:if>
				<s:else>
					<s:property value="bsbfzd"/>:<s:property value="bsbfkd"/>
				</s:else>
              </font><br />
                <s:property value="P"/></td>
              <td width="66" rowspan="2" class="zucai_biao6"style="text-align:right;"><font class="blue_big" ><s:property value="VTeam"/></font><br />
                <s:property value="F"/></td>
              <td class="zucai_biao5" width="30" style="text-align:left;font-size:10px; ">
				<s:if test='TRank==""'>&nbsp;</s:if>
				<s:else>[<s:property value="TRank"/>]</s:else>
			  </td>
              <s:if test='"3"==result||"*"==result'>
					<td rowspan="2" class="zucai_biao6"><span class="quan_1qian">3</span></td>
				</s:if>
				<s:else>
					<td rowspan="2" class="zucai_biao6"><span class="quan_2">3</span></td>
				</s:else>

				<s:if test='"1"==result||"*"==result'>
					<td rowspan="2" class="zucai_biao6"><span class="quan_1qian">1</span></td>
				</s:if>
				<s:else>
					<td rowspan="2" class="zucai_biao6"><span class="quan_2">1</span></td>
				</s:else>

				<s:if test='"0"==result||"*"==result'>
					<td rowspan="2" class="zucai_biao6"><span class="quan_1qian">0</span></td>
				</s:if>
				<s:else>
					<td rowspan="2" class="zucai_biao6"><span class="quan_2">0</span></td>
				</s:else>
              <td rowspan="2" class="zucai_biao5"><input type="checkbox" name="checkbox" value="checkbox" disabled="disabled"/></td>
              <td rowspan="2" class="zucai_biao5"><font class="red"><s:property value="result"/></font></td>
<!--               <td class="zucai_biao5" rowspan="2"><font class="blue"> -->
<%-- 				<a  target="_blank" href="<s:property value="ou"/>">欧</a> --%>
<%-- 				<a  target="_blank" href="<s:property value="ya"/>">亚</a> --%>
<%-- 				<a  target="_blank" href="<s:property value="xi"/>">析</a> --%>
<!--               </font></td> -->
              <td rowspan="2" class="zucai_biao6"><s:property value="firstScore"/>%&nbsp;</td>
              <td rowspan="2" class="zucai_biao6"><s:property value="secondScore"/>%&nbsp;</td>
              <td rowspan="2" class="zucai_biao6"><s:property value="threeScore"/>%&nbsp;</td>

			<tr class="<s:if test="#stat.even">zucai_tr1</s:if>">
            	<td style="border:0;">&nbsp;</td>
            	<td width="22" class="zucai_biao12">&nbsp;</td>
            </tr>

		</s:iterator>
	</table>
</div>