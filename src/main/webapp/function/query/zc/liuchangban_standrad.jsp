<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="zucaitable" id="zucai_standrad" style="width:728px;">
	<table width="729" border="0" cellspacing="0" cellpadding="0">
		<tr class="zucai_tr">
			<td class="zucai_biao1" width="36" rowspan="2">场<br />次</td>
			<td class="zucai_biao1" width="84" rowspan="2">赛事/时间</td>
			<td class="zucai_biao1" colspan="5" rowspan="2">对阵</td>
			<td class="zucai_biao1" width="60" rowspan="2">半/全场</td>
			<td class="zucai_biao1" colspan="3">投注区</td>
			<td class="zucai_biao1" width="31" rowspan="2"><img
				src="<%=request.getContextPath() %>/function/images/quanxuan.gif" onclick="selectCheckboxAll6()" />
			</td>
			<td class="zucai_biao1" width="36" rowspan="2">彩果</td>
<!-- 			<td class="zucai_biao1" width="92" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao3" colspan="3">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="37"><img src="<%=request.getContextPath() %>/function/images/tousan.gif"
				onclick="selectSingleAll6(3)" />
			</td>
			<td class="zucai_biao2" width="35"><img src="<%=request.getContextPath() %>/function/images/touyi.gif"
				onclick="selectSingleAll6(1)" />
			</td>
			<td class="zucai_biao2" width="39"><img
				src="<%=request.getContextPath() %>/function/images/touling.gif" onclick="selectSingleAll6(0)" />
			</td>
			<td class="zucai_biao4" width="33">3</td>
			<td class="zucai_biao4" width="33">1</td>
			<td class="zucai_biao4" width="43">0</td>
		</tr>
		<s:if test="#request.list!=null">
			<s:iterator value="#request.list" status="stat">
				<tr id="tr_<s:property value="#stat.count"/>_1">
					<td rowspan="2" class="zucai_biao5"><s:property value="tempId" />
					</td>
					<td rowspan="2" class="zucai_biao5"><s:property value="name" /><br />
					<s:property value="date" />
					</td>
					
					
					<td width="20" rowspan="2"class="zucai_biao6" style="font-size:10px; text-align:right; margin-top:5px;">
						<s:if test='HRank==""'>&nbsp;</s:if>
						<s:else>[<s:property value="HRank" />]</s:else>
					<br/>&nbsp;</td>
              		<td width="51" rowspan="2" class="zucai_biao5" style="text-align:left;"><font class="blue_big" id="hteam_<s:property value="#stat.count"/>"><s:property value="HTeam"/></font>
              		<br/>&nbsp;<s:property value="S"/></td>
					

					<td width="41" rowspan="2" class="zucai_biao5"><font
						class="red">VS</font><br/> <s:property value="P" />
					</td>
					
					
					<td width="51" rowspan="2" class="zucai_biao6" style="text-align:right;"><font id="vteam_<s:property value="#stat.count"/>" class="blue_big"><s:property value="VTeam"/></font><br/><s:property value="F"/>&nbsp;</td>
              		<td width="20" rowspan="2"class="zucai_biao5" style="font-size:10px; text-align:left; margin-top:5px;">
						<s:if test='TRank==""'>&nbsp;</s:if>
						<s:else>[<s:property value="TRank" />]</s:else>
					<br/>&nbsp;
					</td>

					<td class="zucai_biao5" style="text-align: left;">半场
					<s:if test='banchangzd==""||banchangkd==""'>
					</s:if>
					<s:else>
					<font class="red"><s:property value="banchangzd"/>:<s:property value="banchangkd"/></font>
					</s:else>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonLiuchang(3,<s:property value="#stat.count"/>,1);"
						id="ball3_<s:property value="#stat.count"/>_1" class="quan_3">3</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonLiuchang(1,<s:property value="#stat.count"/>,1);"
						id="ball1_<s:property value="#stat.count"/>_1" class="quan_3">1</span>
					</td>
					<td class="zucai_biao5"><span
						onclick="changeColorButtonLiuchang(0,<s:property value="#stat.count"/>,1);"
						id="ball0_<s:property value="#stat.count"/>_1" class="quan_3">0</span>
					</td>
					<td class="zucai_biao5"><input
						onclick="changeColorCheckboxLiuchang(<s:property value="#stat.count"/>,1);"
						id="checkbox_<s:property value="#stat.count"/>_1" type="checkbox"
						name="checkbox" /></td>
					<td class="zucai_biao5"><font class="red"></font>
					</td>
<!-- 					<td class="zucai_biao5" rowspan="2"> -->
<!-- 					<font class="blue"> -->
<%-- 						<a target="_blank" href="<s:property value="ou"/>">欧</a> --%>
<%-- 						<a target="_blank" href="<s:property value="ya"/>">亚</a> --%>
<%-- 						<a target="_blank" href="<s:property value="xi"/>">析</a> --%>
<!-- 					</font></td> -->
					<td class="zucai_biao6"><s:property value="banfirstScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="bansecondScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="banthreeScore"/>%&nbsp;</td>
				</tr>
				<tr id="tr_<s:property value="#stat.count"/>_2">
					<td class="zucai_biao5" style="text-align: left;">全场
					<s:if test='bsbfzd==""||bsbfkd==""'>
					</s:if>
					<s:else>
					<font class="red"><s:property value="bsbfzd"/>:<s:property value="bsbfkd"/></font>
					</s:else>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonLiuchang(3,<s:property value="#stat.count"/>,2);"
						id="ball3_<s:property value="#stat.count"/>_2" class="quan_3">3</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonLiuchang(1,<s:property value="#stat.count"/>,2);"
						id="ball1_<s:property value="#stat.count"/>_2" class="quan_3">1</span>
					</td>
					<td class="zucai_biao5"><span
						onclick="changeColorButtonLiuchang(0,<s:property value="#stat.count"/>,2);"
						id="ball0_<s:property value="#stat.count"/>_2" class="quan_3">0</span>
					</td>
					<td class="zucai_biao5"><input
						onclick="changeColorCheckboxLiuchang(<s:property value="#stat.count"/>,2);"
						id="checkbox_<s:property value="#stat.count"/>_2" type="checkbox"
						name="checkbox" /></td>
					<td class="zucai_biao5"><font class="red"></font>
					</td>
					
					<td class="zucai_biao6"><s:property value="quanfirstScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="quansecondScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="quanthreeScore"/>%&nbsp;</td>
				</tr>
			</s:iterator>
		</s:if>
	</table>
<script type="text/javascript">cleanReady6()</script>
</div>