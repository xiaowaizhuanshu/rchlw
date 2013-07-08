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
				src="<%=request.getContextPath() %>/function/images/quanxuan_gray.gif" />
			</td>
			<td class="zucai_biao1" width="36" rowspan="2">彩果</td>
<!-- 			<td class="zucai_biao1" width="92" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao3" colspan="3">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="37"><img src="<%=request.getContextPath() %>/function/images/tousan_gray.gif" />
			</td>
			<td class="zucai_biao2" width="35"><img src="<%=request.getContextPath() %>/function/images/touyi_gray.gif" />
			</td>
			<td class="zucai_biao2" width="39"><img
				src="<%=request.getContextPath() %>/function/images/touling_gray.gif" />
			</td>
			<td class="zucai_biao4" width="33">3</td>
			<td class="zucai_biao4" width="33">1</td>
			<td class="zucai_biao4" width="43">0</td>
		</tr>
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
            	<td width="51" rowspan="2" class="zucai_biao5" style="text-align:left;"><font class="blue_big"><s:property value="HTeam"/></font>
             	<br/>&nbsp;<s:property value="S"/></td>
					
				<td width="41" rowspan="2" class="zucai_biao5"><font
					class="red">VS</font><br /> <s:property value="P" />
				</td>
				
				<td width="51" rowspan="2" class="zucai_biao6" style="text-align:right;"><font class="blue_big"><s:property value="VTeam"/></font><br/><s:property value="F"/>&nbsp;</td>
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
				<s:if test='"3"==Bresult||"*"==Bresult'>
					<td class="zucai_biao6"><span class="quan_1qian">3</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">3</span></td>
				</s:else>

				<s:if test='"1"==Bresult||"*"==Bresult'>
					<td class="zucai_biao6"><span class="quan_1qian">1</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">1</span></td>
				</s:else>

				<s:if test='"0"==Bresult||"*"==Bresult'>
					<td class="zucai_biao6"><span class="quan_1qian">0</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">0</span></td>
				</s:else>
				<td class="zucai_biao5"><input type="checkbox" name="checkbox"
					disabled="disabled" /></td>
				<td class="zucai_biao5"><font class="red"><s:property
							value="Bresult" />
				</font>
				</td>
<!-- 				<td class="zucai_biao5" rowspan="2"> -->
<!-- 				<font class="blue"> -->
<%-- 					<a target="_blank" href="<s:property value="ou"/>">欧</a> --%>
<%-- 					<a target="_blank" href="<s:property value="ya"/>">亚</a> --%>
<%-- 					<a target="_blank" href="<s:property value="xi"/>">析</a> --%>
<!-- 				</font></td> -->
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
				<s:if test='"3"==Qresult||"*"==Qresult'>
					<td class="zucai_biao6"><span class="quan_1qian">3</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">3</span></td>
				</s:else>

				<s:if test='"1"==Qresult||"*"==Qresult'>
					<td class="zucai_biao6"><span class="quan_1qian">1</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">1</span></td>
				</s:else>

				<s:if test='"0"==Qresult||"*"==Qresult'>
					<td class="zucai_biao6"><span class="quan_1qian">0</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">0</span></td>
				</s:else>
				<td class="zucai_biao5"><input type="checkbox" name="checkbox2"
					disabled="disabled" /></td>
				<td class="zucai_biao5"><font class="red"><s:property
							value="Qresult" />
				</font>
				</td>
				<td class="zucai_biao6"><s:property value="quanfirstScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="quansecondScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="quanthreeScore"/>%&nbsp;</td>
		</tr>
		</s:iterator>
	</table>
</div>