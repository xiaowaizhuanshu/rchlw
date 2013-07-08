<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="zucaitable" id="zucai_standrad" style="width:728px;">
	<table border="0" cellspacing="0" cellpadding="0">
		<tr class="zucai_tr">
			<td class="zucai_biao1" width="42" rowspan="2">序号</td>
			<td class="zucai_biao1" width="114" rowspan="2">赛事/时间</td>
			<td class="zucai_biao1" colspan="5" rowspan="2">对阵</td>
			<td class="zucai_biao1" colspan="3">投注区</td>
			<td class="zucai_biao1" width="41" rowspan="2"><img
				src="<%=request.getContextPath() %>/function/images/quanxuan.gif" onclick="selectCheckboxAll14()"/></td>
			<td class="zucai_biao1" width="44" rowspan="2">彩果</td>
<!-- 			<td class="zucai_biao1" width="90" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao3" colspan="3">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="49"><img src="<%=request.getContextPath() %>/function/images/quan_3.gif" onclick="selectSingleAll14(3)"/>
			</td>
			<td class="zucai_biao2" width="49"><img src="<%=request.getContextPath() %>/function/images/quan_1.gif" onclick="selectSingleAll14(1)"/>
			</td>
			<td class="zucai_biao2" width="50"><img src="<%=request.getContextPath() %>/function/images/quan_0.gif" onclick="selectSingleAll14(0)"/>
			</td>
			<td class="zucai_biao4" width="40">3</td>
			<td class="zucai_biao4" width="40">1</td>
			<td class="zucai_biao4" width="40">0</td>
		</tr>
	<s:if test="#request.list!=null">
		<s:iterator value="#request.list" status="stat">
			<tr id="tr_<s:property value="#stat.count"/>" class="<s:if test="#stat.even">zucai_tr1</s:if>">
			
              <td rowspan="2" class="zucai_biao5"><s:property value="tempId"/></td>
              <td rowspan="2" class="zucai_biao9"><s:property value="name"/><br/><s:property value="date"/></td>
              <td width="30" class="zucai_biao6"style="font-size:10px; text-align:right">
				<s:if test='HRank==""'>&nbsp;</s:if>
				<s:else>[<s:property value="HRank"/>]</s:else>
			  </td>
              <td width="65" rowspan="2" class="zucai_biao5" style="text-align:left;"><font id="hteam_<s:property value="#stat.count"/>" class="blue_big"><s:property value="HTeam"/></font><br/>
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
              <td width="66" rowspan="2" class="zucai_biao6"style="text-align:right;"><font id="vteam_<s:property value="#stat.count"/>" class="blue_big" ><s:property value="VTeam"/></font><br />
                <s:property value="F"/></td>
              <td class="zucai_biao5" width="30" style="text-align:left;font-size:10px; ">
				<s:if test='TRank==""'>&nbsp;</s:if>
				<s:else>[<s:property value="TRank"/>]</s:else>
			  </td>
              <td rowspan="2" class="zucai_biao6"><span id="ball3_<s:property value="#stat.count"/>" class="quan_3" onclick="checkColorButton(3,<s:property value="#stat.count"/>);">3</span></td>
              <td rowspan="2" class="zucai_biao6"><span id="ball1_<s:property value="#stat.count"/>" class="quan_3" onclick="checkColorButton(1,<s:property value="#stat.count"/>);">1</span></td>
              <td rowspan="2" class="zucai_biao5"><span id="ball0_<s:property value="#stat.count"/>" class="quan_3" onclick="checkColorButton(0,<s:property value="#stat.count"/>);">0</span></td>
              <td rowspan="2" class="zucai_biao5"><input id="checkbox_<s:property value="#stat.count"/>" type="checkbox" name="checkbox" value="checkbox" onclick="changeColorCheckbox(<s:property value="#stat.count"/>);"/></td>
              <td rowspan="2" class="zucai_biao5"><font class="red"></font></td>
<!--               <td class="zucai_biao5" rowspan="2"><font class="blue"> -->
<%-- 				<a target="_blank"  href="<s:property value="ou"/>">欧</a> --%>
<%-- 				<a target="_blank"  href="<s:property value="ya"/>">亚</a> --%>
<%-- 				<a target="_blank"  href="<s:property value="xi"/>">析</a> --%>
<!--               </font></td> -->
              <td rowspan="2" class="zucai_biao6"><s:property value="firstScore"/>%&nbsp;</td>
              <td rowspan="2" class="zucai_biao6"><s:property value="secondScore"/>%&nbsp;</td>
              <td rowspan="2" class="zucai_biao6"><s:property value="threeScore"/>%&nbsp;</td>

			<tr class="<s:if test="#stat.even">zucai_tr1</s:if>">
            	<td style="border:0;">&nbsp;</td>
            	<td width="22" class="zucai_biao12">&nbsp;</td>
            </tr>
		</s:iterator>
	</s:if>
	</table>
<script type="text/javascript">cleanReady14()</script>
</div>