<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="zucaitable" id="zucai_standrad" style="width:728px;">
<div class="zucaitableceng">&nbsp;</div>
	<div class="zucaitableceng1">
		<div class="zucaitu"><img src="<%=request.getContextPath() %>/function/images/honggantan.gif" /></div>
		<div class="zucaizi"><img src="<%=request.getContextPath() %>/function/images/zucaitsh.gif" /></div>
	</div>
	<table width="729" border="0" cellspacing="0" cellpadding="0">
		<tr class="zucai_tr">
			<td class="zucai_biao1" width="36" rowspan="2">场<br />次</td>
			<td class="zucai_biao1" width="91" rowspan="2">赛事/时间</td>
			<td width="77" rowspan="2" class="zucai_biao1">对阵</td>
			<td class="zucai_biao1" colspan="4">投注区</td>
			<td class="zucai_biao1" width="29" rowspan="2"><img
				src="<%=request.getContextPath() %>/function/images/quanxuan_gray.gif" />
			</td>
<!-- 			<td class="zucai_biao1" width="85" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao1" width="30" rowspan="2">彩果</td>
			<td class="zucai_biao3" colspan="4">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_0_gray.gif" />
			</td>
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_1_gray.gif" />
			</td>
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_2_gray.gif" />
			</td>
			<td class="zucai_biao2" width="45"><img
				src="<%=request.getContextPath() %>/function/images/quanjia_3_gray.gif" />
			</td>
			<td class="zucai_biao4">0</td>
			<td class="zucai_biao4">1</td>
			<td class="zucai_biao4">2</td>
			<td class="zucai_biao4">3+</td>
		</tr>
		<s:iterator value="#request.list" status="stat">
			<tr id="tr_<s:property value="#stat.count"/>_1">
				<td rowspan="2" class="zucai_biao5"><s:property value="tempId" />
				</td>
				<td rowspan="2" class="zucai_biao5"><s:property value="name" /><br />
				<s:property value="date" />
				</td>
				<td class="zucai_biao5"><font class="blue_big"
					id="hteam_<s:property value="#stat.count"/>"><s:property
							value="HTeam" />
				</font>
				</td>

				<s:if test='"0"==Hresult||"*"==Hresult'>
					<td class="zucai_biao6"><span class="quan_1qian">0</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">0</span></td>
				</s:else>

				<s:if test='"1"==Hresult||"*"==Hresult'>
					<td class="zucai_biao6"><span class="quan_1qian">1</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">1</span></td>
				</s:else>

				<s:if test='"2"==Hresult||"*"==Hresult'>
					<td class="zucai_biao6"><span class="quan_1qian">2</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">2</span></td>
				</s:else>

				<s:if test='"3"==Hresult||"*"==Hresult'>
					<td class="zucai_biao6"><span class="quan_1qian">3+</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">3+</span></td>
				</s:else>
				<td class="zucai_biao5"><input type="checkbox" name="checkbox"
					value="checkbox" disabled="disabled" /></td>
<!-- 				<td class="zucai_biao5" rowspan="2"><font class="blue"> -->
<%-- 					<a target="_blank"  href="<s:property value="ou"/>">欧</a> --%>
<%-- 					<a target="_blank"  href="<s:property value="ya"/>">亚</a> --%>
<%-- 					<a target="_blank"  href="<s:property value="xi"/>">析</a> --%>
<!--               	</font></td> -->
				<td class="zucai_biao5"><font class="red"><s:property
							value="Hresult" />
				</font>
				</td>
				<td class="zucai_biao6"><s:property value="shangthreeScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="shangtwoScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="shangfirstScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="shangzeroScore"/>%&nbsp;</td>
			</tr>
			<tr id="tr_<s:property value="#stat.count"/>_2">
				<td class="zucai_biao5"><font class="blue_big"
					id="vteam_<s:property value="#stat.count"/>"><s:property
							value="VTeam" />
				</font>
				</td>
				<s:if test='"0"==Vresult||"*"==Vresult'>
					<td class="zucai_biao6"><span class="quan_1qian">0</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">0</span></td>
				</s:else>

				<s:if test='"1"==Vresult||"*"==Vresult'>
					<td class="zucai_biao6"><span class="quan_1qian">1</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">1</span></td>
				</s:else>

				<s:if test='"2"==Vresult||"*"==Vresult'>
					<td class="zucai_biao6"><span class="quan_1qian">2</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">2</span></td>
				</s:else>

				<s:if test='"3"==Vresult||"*"==Vresult'>
					<td class="zucai_biao6"><span class="quan_1qian">3+</span></td>
				</s:if>
				<s:else>
					<td class="zucai_biao6"><span class="quan_2">3+</span></td>
				</s:else>
				<td class="zucai_biao5"><input type="checkbox" name="checkbox"
					value="checkbox" disabled="disabled" /></td>
				
				<td class="zucai_biao5"><font class="red"><s:property
							value="Vresult" />
				</font>
				</td>
				<td class="zucai_biao6"><s:property value="xiathreeScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="xiatwoScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="xiafirstScore"/>%&nbsp;</td>
				<td class="zucai_biao6"><s:property value="xiazeroScore"/>%&nbsp;</td>
			</tr>
		</s:iterator>
	</table>
</div>
