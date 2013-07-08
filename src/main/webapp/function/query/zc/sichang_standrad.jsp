<%@ page contentType="text/html; charset=utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="zucaitable" id="zucai_standrad" style="width:728px;">
	<table width="729" border="0" cellspacing="0" cellpadding="0">
		<tr class="zucai_tr">
			<td class="zucai_biao1" width="36" rowspan="2">场<br />次</td>
			<td class="zucai_biao1" width="91" rowspan="2">赛事/时间</td>
			<td width="77" rowspan="2" class="zucai_biao1">对阵</td>
			<td class="zucai_biao1" colspan="4">投注区</td>
			<td class="zucai_biao1" width="29" rowspan="2"><img
				src="<%=request.getContextPath() %>/function/images/quanxuan.gif" onclick="selectCheckboxAll4()" />
			</td>
<!-- 			<td class="zucai_biao1" width="85" rowspan="2">分析/预测</td> -->
			<td class="zucai_biao1" width="30" rowspan="2">彩果</td>
			<td class="zucai_biao3" colspan="4">投注比例</td>
		</tr>
		<tr class="zucai_tr">
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_0.gif"
				onclick="selectSingleAll4(0)" />
			</td>
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_1.gif"
				onclick="selectSingleAll4(1)" />
			</td>
			<td class="zucai_biao2" width="45"><img src="<%=request.getContextPath() %>/function/images/quan_2.gif"
				onclick="selectSingleAll4(2)" />
			</td>
			<td class="zucai_biao2" width="45"><img
				src="<%=request.getContextPath() %>/function/images/quanjia_3.gif" onclick="selectSingleAll4(3)" />
			</td>
			<td class="zucai_biao4">0</td>
			<td class="zucai_biao4">1</td>
			<td class="zucai_biao4">2</td>
			<td class="zucai_biao4">3+</td>
		</tr>
		<s:if test="#request.list!=null">
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
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(0,<s:property value="#stat.count"/>,1);"
						id="ball0_<s:property value="#stat.count"/>_1" class="quan_3">0</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(1,<s:property value="#stat.count"/>,1);"
						id="ball1_<s:property value="#stat.count"/>_1" class="quan_3">1</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(2,<s:property value="#stat.count"/>,1);"
						id="ball2_<s:property value="#stat.count"/>_1" class="quan_3">2</span>
					</td>
					<td class="zucai_biao5"><span
						onclick="changeColorButtonSichang(3,<s:property value="#stat.count"/>,1);"
						id="ball3_<s:property value="#stat.count"/>_1" class="quan_3">3+</span>
					</td>
					<td class="zucai_biao5"><input
						onclick="changeColorCheckboxSichang(<s:property value="#stat.count"/>,1);"
						id="checkbox_<s:property value="#stat.count"/>_1" type="checkbox"
						name="checkbox" value="checkbox" /></td>
			<%-- 		<td class="zucai_biao5" rowspan="2"><font class="blue">
						<a target="_blank"  href="<s:property value="ou"/>">欧</a>
						<a target="_blank"  href="<s:property value="ya"/>">亚</a>
						<a target="_blank"  href="<s:property value="xi"/>">析</a>
              		</font></td> --%>
					<td class="zucai_biao5"><font class="red"></font>
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
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(0,<s:property value="#stat.count"/>,2);"
						id="ball0_<s:property value="#stat.count"/>_2" class="quan_3">0</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(1,<s:property value="#stat.count"/>,2);"
						id="ball1_<s:property value="#stat.count"/>_2" class="quan_3">1</span>
					</td>
					<td class="zucai_biao6"><span
						onclick="changeColorButtonSichang(2,<s:property value="#stat.count"/>,2);"
						id="ball2_<s:property value="#stat.count"/>_2" class="quan_3">2</span>
					</td>
					<td class="zucai_biao5"><span
						onclick="changeColorButtonSichang(3,<s:property value="#stat.count"/>,2);"
						id="ball3_<s:property value="#stat.count"/>_2" class="quan_3">3+</span>
					</td>
					<td class="zucai_biao5"><input
						onclick="changeColorCheckboxSichang(<s:property value="#stat.count"/>,2);"
						id="checkbox_<s:property value="#stat.count"/>_2" type="checkbox"
						name="checkbox" value="checkbox" /></td>
					
					<td class="zucai_biao5"><font class="red"></font>
					</td>
					<td class="zucai_biao6"><s:property value="xiathreeScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="xiatwoScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="xiafirstScore"/>%&nbsp;</td>
					<td class="zucai_biao6"><s:property value="xiazeroScore"/>%&nbsp;</td>
				</tr>
			</s:iterator>
		</s:if>
	</table>
<script type="text/javascript">cleanReady4()</script>
</div>